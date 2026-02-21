export const Contact = ({ contact, toggleFavorite, deleteContact }) => {
  const color = `hsl(${contact.nombre.length * 50}, 70%, 60%)`;

  return (
    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow mb-3">
      <div
        className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold"
        style={{ backgroundColor: color }}
      >
        {contact.nombre[0]}
      </div>

      <div>
        <p className="font-semibold text-gray-800">
          {contact.nombre} {contact.apellido}
        </p>
        <p className="text-sm text-gray-500">{contact.telefono}</p>
      </div>

      {/* Usuarios favoritos */}
      <div className="flex gap-2">
        <button
          onClick={() => toggleFavorite(contact.id)}
          className="text-yellow-500 font-bold"
        >
          {contact.favorito ? "★" : "☆"}
        </button>

        <button
          onClick={() => deleteContact(contact.id)}
          className="text-gray-400 hover:text-red-500 p-1 transition-colors"
          title="Eliminar contacto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};