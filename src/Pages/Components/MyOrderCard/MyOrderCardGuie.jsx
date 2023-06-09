import React from 'react'

function MyOrderCardGuie() {
  return (
    <div className="flex flex-row justify-between items-center w-full rounded-lg">
      <figure className="flex items-center gap-2 rounded-lg ">
        <div className="flex items-center justify-center rounded-lg w-[271px]">
          <spam className=" w-14 h-4 rounded-lg object-cover text-center font-medium text-lg">
            Img
          </spam>
          <span className="w-[221px] text-center font-medium text-lg">Title</span>
        </div>
      </figure>
      <div className="flex items-center justify-center gap-2  w-[140px]">
        <div className='flex flex-col justify-between'>
          <span className="font-medium text-lg text-center">
            Price
          </span>
          <span className="font-medium text-lg text-center">
            T. Price
          </span>
        </div>
        <button className="w-6 h-6">
          
        </button>
      </div>
    </div>
  )
}

export {MyOrderCardGuie}