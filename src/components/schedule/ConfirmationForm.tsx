import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import type { AppointmentDetails } from "./SchedulingWidget";
// Vamos criar este tipo no próximo arquivo

interface ConfirmationFormProps {
  formData: Omit<AppointmentDetails, "date" | "time">;
  onFormChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({
  formData,
  onFormChange,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Seus Dados</h3>
      <Input
        id="name"
        label="Nome Completo"
        type="text"
        placeholder="Seu nome"
        value={formData.name}
        onChange={onFormChange}
        required
      />
      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="seu@email.com"
        value={formData.email}
        onChange={onFormChange}
        required
      />
      <div className="mb-4">
        <label
          htmlFor="appointmentType"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Tipo de Atendimento
        </label>
        <select
          id="appointmentType"
          value={formData.appointmentType}
          onChange={onFormChange}
          required
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Selecione...
          </option>
          <option value="unimed">Unimed</option>
          <option value="particular">Particular / Avulso</option>
        </select>
      </div>

      <Button
        type="submit"
        className="w-full mt-4"
        size="large"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
      </Button>
    </form>
  );
};

export default ConfirmationForm;
