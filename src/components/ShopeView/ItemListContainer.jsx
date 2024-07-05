

import { getProducts, getCategory } from "../../firebase/firebase";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { ThreeDots } from "react-loader-spinner";



const ItemListContainer = () => {

  const [productos, setProductos] =useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);

//Trae los productos de firebase, pero renderiza los productos dependiendo su ID de categoria
  useEffect(() => {
    setLoading(true);
    (idCategory ? getCategory(idCategory) : getProducts())
      .then((productos) => {
        setProductos(productos);
        setLoading(false);
      });
  }, [idCategory]);


  return (

    <>
    <div className="container mx-auto"> 
    <h1 className='m-10 text-center text-white text-4xl font-bold'>Nuestros Productos</h1>
    <div className="flex items-center justify-center flex-wrap w-full h-full text-left pt-15 mt-20 gap-5">
      
          <>
          {loading ? (
        <ThreeDots
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <ItemList productos = {productos}/>
      )}
    </>
    </div>
    </div>
    </>
  )
}

export default ItemListContainer