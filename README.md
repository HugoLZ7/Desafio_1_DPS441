# Gestor de Contactos

Aplicación web desarrollada con React que permite administrar una lista
de contactos.\
Proyecto realizado para el Desafío Práctico #1 -- Diseño y Programación
de Software Multiplataforma.



## Funcionalidades

Agregar un contacto\
Mostrar lista de contactos\
Eliminar contactos\
Agregar/Quitar contacto a favoritos\
Mostrar favoritos al inicio de la lista\
Persistencia de datos con LocalStorage\
Carga inicial de contactos desde archivo JSON






## Tecnologías Utilizadas

-   React
-   JavaScript (ES6+)
-   Tailwind CSS
-   LocalStorage
-   JSON



## Instalación y ejecución

1.  Clonar el repositorio:

    git clone https://github.com/HugoLZ7/Desafio_1_DPS441

2.  Entrar al proyecto:

    cd contactos-app

3.  Instalar dependencias:

    npm install

4.  Ejecutar el proyecto:

    npm run dev

5.  Abrir en el navegador:

    Ejemplo: 
    http://localhost:5173


## Funcionamiento de Favoritos

- Los contactos se cargan desde `contacts.json` y se guardan en `localStorage`.
- Permite agregar contactos con validaciones (campos obligatorios, solo letras y teléfono único de 8 dígitos).
- Permite eliminar contactos de la lista.
- Cada contacto puede marcarse como favorito.
  - Los favoritos se muestran primero.
  - Se identifican visualmente.
- Todos los cambios se guardan automáticamente.



## Persistencia de Datos

-   Al iniciar por primera vez, los contactos se cargan desde
    contacts.json.
-   Posteriormente, los datos se guardan automáticamente en
    localStorage.
-   Esto permite mantener los cambios aunque se recargue la página.



## Integrantes

-   Jorge Luis Lugo González LG242867
-   Hugo Alberto López Rivera LR252072
-   Gabriel Mario Hernández Rosales HR242882

