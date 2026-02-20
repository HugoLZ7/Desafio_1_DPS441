import { useState } from "react";

export const ContactForm = ({ contacts, setContacts }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  // Solo letras
  const onlyLetters = (value) =>
    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value);

  // Formato automático 6666-6666
  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, "").slice(0, 8);
    if (numbers.length > 4) {
      return numbers.slice(0, 4) + "-" + numbers.slice(4);
    }
    return numbers;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Campos vacíos
    if (!nombre || !apellido || !telefono) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Validar solo letras
    if (!onlyLetters(nombre) || !onlyLetters(apellido)) {
      alert("Nombre y apellido solo deben contener letras");
      return;
    }

    // Validar teléfono 8 dígitos
    if (telefono.replace("-", "").length !== 8) {
      alert("El teléfono debe tener 8 dígitos");
      return;
    }

    // Validar duplicado por nombre + apellido
    const existsName = contacts.some(
      (c) =>
        c.nombre.toLowerCase() === nombre.toLowerCase() &&
        c.apellido.toLowerCase() === apellido.toLowerCase()
    );

    if (existsName) {
      alert("Este contacto ya existe");
      return;
    }

    // Validar duplicado por teléfono
    const existsPhone = contacts.some(
      (c) => c.telefono === telefono
    );

    if (existsPhone) {
      alert("Ya existe un contacto con ese teléfono");
      return;
    }

    // Crear nuevo contacto
    const newContact = {
      id: Date.now(),
      nombre,
      apellido,
      telefono,
    };

    setContacts([newContact, ...contacts]);

    // Limpiar inputs
    setNombre("");
    setApellido("");
    setTelefono("");

    alert("Contacto agregado correctamente");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Agregar Contacto
      </h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full mb-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        className="w-full mb-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="6666-6666"
        value={telefono}
        onChange={(e) => setTelefono(formatPhone(e.target.value))}
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Agregar
      </button>
    </form>
  );
};