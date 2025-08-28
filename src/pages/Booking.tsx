import React from "react";
import SchedulingWidget from "../components/schedule/SchedulingWidget";

const Booking: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Agende sua Consulta
      </h1>
      <SchedulingWidget />
    </div>
  );
};

export default Booking;
