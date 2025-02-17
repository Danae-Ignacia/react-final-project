import { useContext } from "react";
import { CartContext } from "../cart/CartContext";
import { addOrder } from "../../firebase/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const AddOrder = ({ name, phone, email, disabled }) => {
    
    const { clearCart} =useContext(CartContext)
    const { cart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate();

    //Funcion que calcula producto, IVA (19%), envio, sub total y total.
    const handleClick = () => {
    const subtotal = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const iva = subtotal * 0.19;
    const envio = 2000; 
    const total = subtotal + iva + envio;

        const newOrder = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: cart.map(item => ({
                id: item.id,
                title: item.nombre,
                price: item.precio,
                quantity: item.cantidad
            })),
            total: total
        };

        addOrder(newOrder).then(id => {
            setOrderId(id);
            clearCart(); 
            navigate(`/FinishedOrder/${id}`);
        });
    };

    return (
        <>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleClick}
                    disabled={disabled}>
                    <p>Generar Orden</p>
                </button>
                {orderId && <p>El número de tu pedido es: {orderId}</p>}
        </>
    );
}

export default AddOrder;
