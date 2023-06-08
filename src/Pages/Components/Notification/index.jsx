import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../../Context';

function Notification() {
  const { openNotification, showNotification, setShowNotification } = useContext(StoreContext);

  useEffect(() => {
    // Mostrar la notificación cuando openNotification es true
    if (openNotification) {
      setShowNotification(true);

      // Ocultar la notificación después de 3 segundos
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  }, [openNotification]);

  return (
    <div
      className={`flex justify-center items-center m-auto rounded-lg z-10 fixed w-full transition-all duration-300 ${
        showNotification ? 'top-0' : 'top-[-200px]'
      }`}
    >
      <h2 className="p-3 rounded-lg text-white mt-20 bg-zinc-900 text-xl">
        Item has been added to the cart ✅
      </h2>
    </div>
  );
}

export { Notification };
