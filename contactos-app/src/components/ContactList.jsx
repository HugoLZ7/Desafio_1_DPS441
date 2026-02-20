import { Contact } from "./Contact";

export const ContactList = ({ contacts, toggleFavorite}) => {

  // Ordenar favoritos al inicio
  const sortedContacts = [...contacts].sort((a, b) => {
    if (a.favorito === b.favorito) return 0;
    return b.favorito ? 1 : -1;
  });

  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Contactos
      </h2>

      {sortedContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};