import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <span className="text-blue-600 text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600 pr-6">{answer}</p>}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Vocês aceitam convênio Unimed?",
      answer:
        "Sim, aceitamos diversos planos da Unimed. Entre em contato conosco ou verifique a elegibilidade do seu plano diretamente na Unimed para agendamento e autorização das sessões.",
    },
    {
      question: "Qual o valor da consulta particular?",
      answer:
        "Para informações sobre valores de consultas particulares, por favor, entre em contato através do nosso formulário ou telefone. Oferecemos pacotes e formas de pagamento flexíveis.",
    },
    {
      question: "Como funciona o agendamento online?",
      answer:
        "Nosso sistema de agendamento online permite que você escolha o profissional, data e horário. Após a confirmação, você receberá um link para a sessão virtual (para atendimentos online) ou as orientações para o atendimento presencial.",
    },
    {
      question:
        "Posso solicitar reembolso ao meu convênio se pagar particular?",
      answer:
        "Sim, emitimos recibo para todas as consultas particulares, que você pode utilizar para solicitar reembolso junto ao seu convênio, caso ele ofereça essa opção. Verifique as condições de reembolso com seu plano.",
    },
    {
      question: "Quais são as modalidades de terapia oferecidas?",
      answer:
        "Oferecemos terapia individual, terapia de casal e terapia online, abrangendo diversas abordagens psicológicas para atender às suas necessidades específicas.",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Perguntas Frequentes
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        {faqs.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
