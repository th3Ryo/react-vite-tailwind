// useFetch.js
import { useState, useEffect } from "react";
import { endPoints } from "./endPoints";

const useFetch = (endpointKey) => {
  const [items, setItems] = useState(null); // Estado para almacenar los elementos
  const [error, setError] = useState(null); // Estado para almacenar el error, si ocurre
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar si la solicitud está en curso

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true); // Establecer isLoading a true para indicar que la solicitud está en curso
      try {
        const url = endPoints[endpointKey](); // Obtener la URL del endpoint utilizando el endpointKey recibido como argumento
        const response = await fetch(url); // Realizar la solicitud GET a la URL obtenida
        if (!response.ok) {
          throw new Error("Request failed"); // Si la respuesta no es exitosa, lanzar un error
        }
        const jsonItems = await response.json(); // Convertir la respuesta en formato JSON
        //console.log("jsonItems ",jsonItems);//verificacion de objetos
        setItems(jsonItems); // Actualizar el estado con los elementos obtenidos
      } catch (error) {
        setError(error.message); // Si ocurre un error, almacenarlo en el estado de error
      } finally {
        setIsLoading(false); // Establecer isLoading a false para indicar que la solicitud ha finalizado
      }
    };

    fetchItems(); // Llamar a la función fetchItems una vez que el componente se monta o cuando el endpointKey cambia
  }, [endpointKey]);

  return { items, error, isLoading }; // Retornar los estados y hacerlos accesibles fuera de este componente
};

export { useFetch }; // Exportar la función useFetch para que pueda ser utilizada en otros archivos

