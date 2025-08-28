import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Sobre Nós
      </h1>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Equipe de psicólogos"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Nossa Missão e Visão
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Na Psique & Mente, nossa missão é proporcionar um ambiente
              acolhedor e seguro para que nossos pacientes possam explorar suas
              emoções, desenvolver autoconhecimento e encontrar caminhos para
              uma vida mais plena e equilibrada. Acreditamos no poder
              transformador da terapia.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nossa visão é ser referência em saúde mental, oferecendo um
              atendimento psicológico de excelência, pautado na ética,
              humanização e nas mais recentes abordagens terapêuticas. Queremos
              ser o seu parceiro na jornada do bem-estar.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Nossos Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Empatia
            </h3>
            <p className="text-gray-600">
              Compreender e respeitar a singularidade de cada indivíduo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Ética</h3>
            <p className="text-gray-600">
              Compromisso com o sigilo, a transparência e a responsabilidade
              profissional.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Excelência
            </h3>
            <p className="text-gray-600">
              Busca contínua por aprimoramento e qualidade no atendimento.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Nossa Equipe</h2>
        {/* Aqui você pode listar os profissionais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Dra. Nome da Psicóloga"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Dra. Psicóloga Exemplo
            </h3>
            <p className="text-blue-600 mb-2">CRP: 06/XXXXX</p>
            <p className="text-gray-600 text-sm">
              Especialista em Terapia Cognitivo-Comportamental.
            </p>
          </div>
          {/* Adicione mais cards para outros psicólogos */}
        </div>
      </section>
    </div>
  );
};

export default About;
