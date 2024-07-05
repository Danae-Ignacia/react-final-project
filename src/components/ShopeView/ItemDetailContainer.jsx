import React from 'react'
import { Link } from 'react-router-dom'
const ItemDetailContainer = ({title, price, description, image, id}) => {

  return (
    <div className="py-6">
            <div className="flex max-w-md items-center bg-white shadow-lg rounded-lg overflow-hidden h-64">
              <div className="w-1/3 bg-contain">
              <img className="w-full h-full object-contain" src={image} alt="Imagen del producto" />
            </div>
                <div className="w-2/3 p-4">
                  <h1 className="text-gray-900 font-bold text-2xl">{title}</h1>
                  <p className="mt-2 text-gray-600 text-sm">{description}</p>
                <div className="flex items-center mt-2">
                </div>
                <div className="block items-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">Precio: {price}</h1>
                  <Link to={`/item/${id}`}> 
                    <button className="btn-detalle text-xs font-bold uppercase rounded mt-2">Ver detalles</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
  )
  
}

export default ItemDetailContainer