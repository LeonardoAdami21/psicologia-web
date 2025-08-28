import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import TimeSlots from "./TimeSlots";
import ConfirmationForm from "./ConfirmationForm";
import Card from "../shared/Card";

// --- Simulação de API ---
// No projeto real, você substituirá isso por chamadas Axios ao seu backend Nest.js

const fetchAvailableTimes = async (date: Date): Promise<string[]> => {
  console.log("Buscando horários para:", format(date, "yyyy-MM-dd"));
  // Simula uma chamada de API com um pequeno atraso
  return new Promise((resolve) => {
    setTimeout(() => {
      // Lógica de exemplo: não retorna horários nos fins de semana
      if (date.getDay() === 0 || date.getDay() === 6) {
        resolve([]);
        return;
      }
      // Retorna horários fictícios para dias de semana
      resolve([
        "09:00",
        "10:00",
        "11:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
      ]);
    }, 500);
  });
};

const submitBooking = async (details: AppointmentDetails): Promise<boolean> => {
  console.log("Enviando agendamento:", details);
  // Simula o envio para o backend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true); // Simula sucesso
    }, 1000);
  });
};
// --- Fim da Simulação de API ---

export interface AppointmentDetails {
  date: Date;
  time: string;
  name: string;
  email: string;
  appointmentType: "unimed" | "particular" | "";
}

type SchedulingStep = "date" | "time" | "details" | "confirmed";

const SchedulingWidget: React.FC = () => {
  const [step, setStep] = useState<SchedulingStep>("date");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [isLoadingTimes, setIsLoadingTimes] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    appointmentType: "" as "unimed" | "particular" | "",
  });

  useEffect(() => {
    if (selectedDate) {
      setIsLoadingTimes(true);
      setAvailableTimes([]);
      setSelectedTime(null);
      fetchAvailableTimes(selectedDate).then((times) => {
        setAvailableTimes(times);
        setIsLoadingTimes(false);
      });
    }
  }, [selectedDate]);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setStep("time");
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("details");
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setIsSubmitting(true);
    const appointmentDetails: AppointmentDetails = {
      date: selectedDate,
      time: selectedTime,
      ...formData,
    };
    const success = await submitBooking(appointmentDetails);
    if (success) {
      setStep("confirmed");
    } else {
      alert("Ocorreu um erro ao agendar. Tente novamente.");
    }
    setIsSubmitting(false);
  };

  const resetFlow = () => {
    setSelectedDate(undefined);
    setSelectedTime(null);
    setStep("date");
  };

  if (step === "confirmed") {
    return (
      <Card className="text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Agendamento Confirmado!
        </h2>
        <p className="text-gray-700">
          Sua consulta foi agendada para o dia{" "}
          <strong>{selectedDate && format(selectedDate, "dd/MM/yyyy")}</strong>{" "}
          às <strong>{selectedTime}</strong>.
        </p>
        <p className="text-gray-600 mt-2">
          Enviamos um e-mail de confirmação para{" "}
          <strong>{formData.email}</strong> com todos os detalhes.
        </p>
        <button
          onClick={resetFlow}
          className="mt-6 text-blue-600 hover:underline"
        >
          Fazer um novo agendamento
        </button>
      </Card>
    );
  }

  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coluna da Esquerda: Calendário e Resumo */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            {step === "date"
              ? "1. Selecione uma Data"
              : "Data e Hora Selecionadas"}
          </h3>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            locale={ptBR}
            disabled={{ before: new Date() }} // Desabilita datas passadas
            className="rounded-md border"
          />
          {selectedDate && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <h4 className="font-semibold text-gray-700">Resumo:</h4>
              <p className="text-gray-600">
                Data: {format(selectedDate, "dd/MM/yyyy")}
              </p>
              {selectedTime && (
                <p className="text-gray-600">Hora: {selectedTime}</p>
              )}
            </div>
          )}
        </div>

        {/* Coluna da Direita: Passos do Agendamento */}
        <div>
          {step === "time" && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                2. Selecione um Horário
              </h3>
              <TimeSlots
                availableTimes={availableTimes}
                isLoading={isLoadingTimes}
                onSelectTime={handleTimeSelect}
                selectedTime={selectedTime}
              />
            </div>
          )}
          {step === "details" && (
            <div>
              <ConfirmationForm
                formData={formData}
                onFormChange={handleFormChange}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default SchedulingWidget;
