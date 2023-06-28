import React from "react";

const MyOrdersCard = (props) => {
  const { dataProduct, totalProduct, totalPrice } = props;
  /* console.log("date en MyOrdersCard" , Date); */

  return (
    <div className="flex justify-between items-center w-full p-2 m-2 bg-gradient-to-l from-red-800 to-orange-400 text-white border rounded-lg">
      <div className="flex flex-col space-x-4">
        <p className="flex flex-row justify-center space-x-4 pb-2 w-[220px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 9.49998C16.8905 9.89051 16.8905 10.5237 16.5 10.9142L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071L8 13.4142C7.60948 13.0237 7.60948 12.3905 8 12C8.39053 11.6095 9.02369 11.6095 9.41422 12L11 13.5858L15.0858 9.49998C15.1346 9.45117 15.1872 9.40845 15.2427 9.37184C15.6308 9.11556 16.1583 9.15827 16.5 9.49998Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 4.99998H6V3.74998C6 3.19769 6.44772 2.74998 7 2.74998C7.55229 2.74998 8 3.19769 8 3.74998V4.99998H16V3.74998C16 3.19769 16.4477 2.74998 17 2.74998C17.5523 2.74998 18 3.19769 18 3.74998V4.99998H20C21.1046 4.99998 22 5.89541 22 6.99998V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V6.99998C2 5.89541 2.89543 4.99998 4 4.99998ZM4 19L4 6.99998H20V19H4Z"
              fill="white"
            />
          </svg>

          <span> {dataProduct}</span>
        </p>
        <div className="flex flex-row justify-evenly items-center w-full">
          <p className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 760.061 760.061"
              style={{ enableBackground: "new 0 0 760.061 760.061" }}
              xmlSpace="preserve"
            >
              <path
                d="m681.562 277.162-2.229-5.953-54.32-87.051c-3.341-9.675-10.04-14.509-19.715-14.509H532.01v-14.508c0-45.018-14.136-81.853-42.788-111.242C460.577 14.509 424.488 0 380.59 0c-44.271 0-80.638 14.596-109.377 43.899-28.557 29.112-43.16 66.225-43.16 111.242v14.508h-73.289c-8.183 0-14.136 3.714-17.485 10.786l-1.484 1.492-55.438 89.281c-1.857 4.096-2.977 7.072-2.977 8.929-2.23 5.214-3.349 10.794-3.349 16.747v418.531c0 12.652 4.373 23.16 13.024 31.629 8.841 8.65 19.715 13.016 31.993 13.016h521.965c25.295 0 45.018-19.342 45.018-44.645v-418.53c-.001-7.072-1.493-13.771-4.469-19.723zm-149.553-66.217h61.01l25.303 40.922H532.01v-40.922zm-262.662-55.804c0-33.858 10.326-61.113 30.882-82.226 20.739-21.294 47.621-31.993 80.36-31.993 32.366 0 59.153 10.786 79.614 31.993 20.461 21.208 30.882 48.367 30.882 82.226v14.508H269.347v-14.508zm0 55.804h221.739v40.922H269.347v-40.922zm-103.051 0h61.756v40.922h-86.678l24.922-40.922zm478.439 504.471c0 2.611-1.119 3.723-3.723 3.723H119.048c-2.603 0-3.722-1.111-3.722-3.723V296.885c0-2.604 1.119-3.723 3.722-3.723h521.965c2.604 0 3.723 1.119 3.723 3.723v418.531z"
                fill="#ffffff"
              />
            </svg>

            <span>Product: {totalProduct}</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="font-medium text-xs">Total: </span>

            <span className="font-medium text-xl ">
              {totalPrice}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-full ">
        <button className="w-[20px] m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="white"
            /* stroke="currentColor" */
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[20px]"
          >
            <path d="M5 12h13l-6-6m0 12l6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { MyOrdersCard };
