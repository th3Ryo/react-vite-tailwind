import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../Context";
import { useFetch } from "../../Services/useFetch";
import { Layout } from "../Components/Layout";
import { Card } from "../Components/Card";

//siempre que se piense en consumir informacion en este caso de la api se debe tener el useEffect

const Home = () => {
  const { items, error, isLoading } = useFetch("getAllItem");
  //contexto para treaer la funcion que captura texto
  const { handleSearch, searchByTitle } = useContext(StoreContext);

  // Filtra los elementos basados en el valor de searchByTitle
  const filteredItems = items?.filter((item) =>
    item.title.toLowerCase().includes(searchByTitle?.toLowerCase())
  );

  return (
    <Layout>
      <div className="flex items-center justify-center w-80">
        <h1 className="text-center mb-4">Home</h1>
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
