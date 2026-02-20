import { useState } from "react";
import contactsData from "./data/contacts.json";
import { Navbar } from "./components/Navbar";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState(contactsData);

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
            <ContactForm contacts={contacts} setContacts={setContacts} />
          </div>

          {/* Lista de contactos */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <ContactList contacts={contacts} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
