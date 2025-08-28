import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/shared/Card";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário de Contato Enviado:", formData);
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    // Aqui você integraria com o backend para enviar o email
    setFormData({ name: "", email: "", phone: "", message: "" }); // Limpa o formulário
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Entre em Contato
      </h1>

      <Card className="p-8">
        <p className="text-lg text-gray-600 text-center mb-6">
          Preencha o formulário abaixo ou utilize nossos canais de contato para
          falar conosco.
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            id="name"
            label="Nome Completo"
            type="text"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            id="email"
            label="E-mail"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            id="phone"
            label="Telefone (Opcional)"
            type="tel"
            placeholder="(XX) XXXXX-XXXX"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Sua mensagem..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <Button type="submit" className="w-full" size="large">
            Enviar Mensagem
          </Button>
        </form>

        <div className="mt-8 text-center text-gray-700">
          <p className="mb-2">Ou entre em contato diretamente:</p>
          <p className="font-semibold">Email: contato@psiquemente.com</p>
          <p className="font-semibold">Telefone: (XX) XXXX-XXXX</p>
          <p className="mt-4">
            <a
              href="https://wa.me/XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              <i className="fab fa-whatsapp mr-2"></i> WhatsApp
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
