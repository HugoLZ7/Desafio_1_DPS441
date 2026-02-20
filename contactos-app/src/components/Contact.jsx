export const Contact = ({ contact }) => {
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
    </div>
  );
};