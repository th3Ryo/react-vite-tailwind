import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../Context";
import { useFetch } from "../../Services/useFetch";
import { Layout } from "../Components/Layout";
import { Card } from "../Components/Card";

//siempre que se piense en consumir informacion en este caso de la api se debe tener el useEffect

const Home = () => {
  const context = useContext(StoreContext);


  /* const currentPath = window.location.pathname;
  let category = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  console.log(category); */
  /* if (index === "/") {
    index = "getAllItem";
  }
  console.log(index); // Verificar que solo toma después del "/"
  const { items, error, isLoading } = useFetch(index); */

  const { items, error, isLoading } = useFetch("getAllItem"); //mientra el if
  //contexto para treaer la funcion que captura texto
  const { handleSearch, searchByTitle } = useContext(StoreContext);

  // Filtra los elementos basados en el valor de searchByTitle y la categoria
  let category = context.selectedNavItem === "All" ? null : context.selectedNavItem; // Obtener la categoría seleccionada del contexto
  let filteredItems = items; // Inicialmente, establecer los elementos filtrados como todos los elementos

  if (category) {
  // Si se selecciona una categoría específica (diferente de "All")
  filteredItems = items?.filter(
    (item) =>
      item.category.toLowerCase() === category.toLowerCase() && // Filtrar por la categoría seleccionada (ignorar mayúsculas y minúsculas)
      item.title.toLowerCase().includes(searchByTitle?.toLowerCase()) // Filtrar por el texto de búsqueda (ignorar mayúsculas y minúsculas)
  );
} else {
  // Si se selecciona la categoría "All" o no se selecciona ninguna categoría
  filteredItems = items?.filter((item) =>
    item.title.toLowerCase().includes(searchByTitle?.toLowerCase()) // Filtrar solo por el texto de búsqueda (ignorar mayúsculas y minúsculas)
  );
}
  //console.log("pag inicial", context.selectedNavItem);

  return (
    <Layout>
      <div className="flex items-center justify-center w-80">
        <h1 className="text-center mb-4"> {context.selectedNavItem === "All" || context.selectedNavItem === "" ? "Home" : context.selectedNavItem} </h1>
      </div>
      <input
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none "
        type="text"
        placeholder="Search a product"
        onChange={handleSearch}
      />
      {filteredItems?.length === 0 && <p>No Results Found</p>}
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="grid gap-6 grid-cols-4 w-full max-w-screen-lg">
          {filteredItems?.map((item) => (
            <Card
              key={item.id}
              ID={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export { Home };
