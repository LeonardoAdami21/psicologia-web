import React from "react";
import Button from "../ui/Button";

interface TimeSlotsProps {
  availableTimes: string[];
  isLoading: boolean;
  onSelectTime: (time: string) => void;
  selectedTime: string | null;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  availableTimes,
  isLoading,
  onSelectTime,
  selectedTime,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-2 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 bg-gray-200 rounded-md"></div>
        ))}
      </div>
    );
  }

  if (availableTimes.length === 0) {
    return (
      <p className="text-gray-600 text-center">
        Nenhum horário disponível para esta data.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {availableTimes.map((time) => (
        <Button
          key={time}
          variant={selectedTime === time ? "primary" : "outline"}
          onClick={() => onSelectTime(time)}
          className="w-full"
        >
          {time}
        </Button>
      ))}
    </div>
  );
};

export default TimeSlots;
