import React from "react";
import Card from "../components/shared/Card";
import Button from "../components/ui/Button";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Nossos Serviços
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Terapia Individual
          </h2>
          <p className="text-gray-700 mb-4">
            Um espaço seguro para explorar suas emoções, pensamentos e
            comportamentos. Foco no autoconhecimento e desenvolvimento pessoal.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Ansiedade e Estresse</li>
            <li>Depressão</li>
            <li>Conflitos de Relacionamento</li>
            <li>Autoconfiança e Autoestima</li>
          </ul>
          <Button onClick={() => alert("Saiba mais sobre Terapia Individual")}>
            Saiba Mais
          </Button>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Terapia de Casal
          </h2>
          <p className="text-gray-700 mb-4">
            Apoio para casais que buscam melhorar a comunicação, resolver
            conflitos e fortalecer o vínculo.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Problemas de Comunicação</li>
            <li>Conflitos Familiares</li>
            <li>Crises de Relacionamento</li>
            <li>Reconstrução da Confiança</li>
          </ul>
          <Button onClick={() => alert("Saiba mais sobre Terapia de Casal")}>
            Saiba Mais
          </Button>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Terapia Online
          </h2>
          <p className="text-gray-700 mb-4">
            A conveniência da terapia no conforto da sua casa, com a mesma
            qualidade e privacidade do atendimento presencial.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Flexibilidade de Horários</li>
            <li>Acessível de Qualquer Lugar</li>
            <li>Plataformas Seguras</li>
            <li>Atendimento Nacional</li>
          </ul>
          <Button onClick={() => alert("Agendar Terapia Online")}>
            Agendar Online
          </Button>
        </Card>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Como Agendar?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Você pode agendar suas sessões de forma rápida e segura através do
          nosso sistema online ou entrando em contato diretamente. Aceitamos
          convênios como Unimed e também oferecemos atendimento particular.
        </p>
        <Button size="large" onClick={() => alert("Ir para o Agendamento")}>
          Ir para Agendamento
        </Button>
      </section>
    </div>
  );
};

export default Services;
