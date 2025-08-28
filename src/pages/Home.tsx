import React from "react";
import Button from "../components/ui/Button";
import Card from "../components/shared/Card";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Seção Hero */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 md:p-16 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
          Bem-vindo ao seu espaço de cuidado psicológico.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Oferecemos suporte terapêutico humanizado para sua saúde mental, com
          atendimento presencial e online, para convênios e particulares.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="large" onClick={() => alert("Ver Serviços")}>
            Conheça Nossos Serviços
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={() => alert("Agendar Agora")}
          >
            Agendar Agora
          </Button>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Como Funciona o Agendamento?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="text-blue-600 text-5xl mb-4">💡</div>{" "}
            {/* Ícone placeholder */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              1. Escolha a Modalidade
            </h3>
            <p className="text-gray-600">
              Decida entre atendimento por convênio (Unimed) ou particular.
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-green-600 text-5xl mb-4">🗓️</div>{" "}
            {/* Ícone placeholder */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              2. Agende sua Consulta
            </h3>
            <p className="text-gray-600">
              Utilize nosso sistema online ou entre em contato via
              telefone/WhatsApp.
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-purple-600 text-5xl mb-4">🤝</div>{" "}
            {/* Ícone placeholder */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              3. Conecte-se com o Profissional
            </h3>
            <p className="text-gray-600">
              Receba o link (online) ou visite nosso consultório na data
              agendada.
            </p>
          </Card>
        </div>
      </section>

      {/* Seção Destaque Convênios/Particulares */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Atendimento Flexível para Você
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Atendimento Unimed
            </h3>
            <p className="text-gray-700 mb-4">
              Aceitamos seu plano Unimed para facilitar o acesso à terapia.
              Verifique as condições do seu plano para agendamento e autorização
              de sessões.
            </p>
            <Button
              variant="outline"
              onClick={() => alert("Saiba mais sobre Unimed")}
            >
              Saiba Mais
            </Button>
          </Card>
          <Card>
            <h3 className="text-2xl font-bold text-purple-600 mb-4">
              Consultas Particulares
            </h3>
            <p className="text-gray-700 mb-4">
              Oferecemos flexibilidade de horários e valores. Pagamento
              facilitado e emissão de recibo para possível reembolso junto ao
              seu convênio.
            </p>
            <Button onClick={() => alert("Agendar Consulta Particular")}>
              Agendar Particular
            </Button>
          </Card>
        </div>
      </section>

      {/* Adicione mais seções como Blog, FAQ resumido, etc. */}
    </div>
  );
};

export default Home;
