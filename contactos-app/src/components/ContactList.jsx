import { Contact } from "./Contact";

export const ContactList = ({ contacts }) => {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Contactos
      </h2>

      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};