import { useState, useEffect } from "react";
import contactsData from "./data/contacts.json";
import { Navbar } from "./components/Navbar";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";

function App() {
  // Cargar desde localStorage o JSON
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : contactsData;
  });

  // Guardar automáticamente en localStorage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Agregar / Quitar favorito
  const toggleFavorite = (id) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id
          ? { ...contact, favorito: !contact.favorito }
          : contact
      )
    );
  };


  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Navbar />

      {/* Contenedor centrado y responsivo */}
      <main className="w-full min-h-[calc(100vh-80px)] flex justify-center items-start px-4 py-8">
        <div
          className="
          w-full 
          max-w-6xl 
          flex 
          flex-col 
          lg:flex-row 
          gap-10 
          items-start 
          justify-center
        "
        >
          {/* Formulario */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <ContactForm 
            contacts={contacts} 
            setContacts={setContacts}
            />
          </div>

          {/* Lista de contactos */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <ContactList
            contacts={contacts}
            toggleFavorite={toggleFavorite}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
