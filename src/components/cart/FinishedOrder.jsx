import { useParams, Link } from "react-router-dom";
import { useState } from "react";
const FinishedOrder = () => {

  const { id } = useParams();

const [copied, setCopied] = useState(false);

const copyToClipboard = () => {
    navigator.clipboard.writeText(id);
    setCopied(true);
  };

  return (

<div className="h-screen mt-10 text-center">
      <div className="w-80 m-auto max-w-sm pb-20">
        <img src="https://www.lifeboxset.com/wp-content/uploads/2022/07/los-simpson-teoria-explica-como-es-homero-puede-pagar-todo.jpg" alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
        <div className="bg-white shadow-2xl rounded-b-3xl">
          <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">Gracias por tu compra!!</h2>
          <div className="w-5/6 m-auto">
            <p className="text-center text-gray-500 pt-5">Hemos generado una orden para tu producto y nos pondremos en contacto contigo en breve.</p>
          </div>
          <div className="grid grid-cols-2 text-center w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
        
            <div className="col-span-2 pt-1">
              <p className="text-gray-800 font-bold">Tu order ID:</p>
              <p className="text-gray-500">{id}</p>
            </div>
          </div>
          <button 
    onClick={copyToClipboard} 
    className={`w-72 lg:w-5/6 ml-7 mt-6 p-2 hover:bg-indigo-500 rounded-2xl text-white text-center shadow-xl ${copied ? 'bg-green-500 hover:bg-lime-400' : 'bg-blue-700'} lg:text-sm text-lg font-bold`}
>
  {copied ? "Tu ID se ha copiado en tu portapapeles" : "Copiar el ID"}
</button>

          <div className="text-center m-auto mt-6 w-full h-16">
          <Link to="/"> 
            <button className="text-gray-500 font-bold lg:text-sm hover:text-gray-900">Volver a la tienda</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedOrder;
