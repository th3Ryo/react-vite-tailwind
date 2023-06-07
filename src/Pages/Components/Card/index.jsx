import React from "react";

function Card() {
  return (
    <div className="container bg-gradient-to-l from-red-800 to-orange-400 w-48 h-64 p-1 rounded-md overflow-visible flex items-center relative text-white text-center">
      <div className="box relative w-48 h-60 bg-gray-900 flex justify-center items-center rounded-lg">
        <div className="content flex flex-col justify-center items-center gap-5 px-5 w-full h-full overflow-hidden">
          <figure className="relative mb-2 w-full h-4/5 flex justify-center items-center">
            <span className="absolute bottom-0 left-0 bg-gradient-to-l from-red-800 to-orange-400 rounded-lg text-xs font-light m-2 px-2 py-0.5">
              categoria</span>
            <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="items alt" />
            <div className="absolute top-0 right-0 flex justify-center items-center text-center bg-gradient-to-l from-red-800 to-orange-400 w-6 h-6 rounded-full m-2 p-1">
              +
            </div>
          </figure>
          <p className="flex justify-between w-full items-center ">
            <span className="text-sm font-light">item</span>
            <span className="text-lg font-medium">precio</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export { Card };

