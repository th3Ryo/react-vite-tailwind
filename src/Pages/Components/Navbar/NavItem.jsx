import React from 'react';
import { NavLink } from "react-router-dom";

function NavItem({ className, to, activeStyle, navbarName, onClick }) {
  return (
    // Renderiza un elemento <li> con la clase proporcionada
    <li className={className}>
      {/* Renderiza un enlace de navegación */}
      <NavLink
        to={to} // Especifica la ruta a la que se dirige el enlace
        className={({ isActive }) => (isActive ? activeStyle : undefined)} // Determina la clase del enlace basada en su estado
        onClick={onClick} // Controlador de eventos para manejar el clic en el enlace
      >
        {navbarName} {/* Renderiza el nombre del navbar */}
      </NavLink>
    </li>
  );
}

export { NavItem };

