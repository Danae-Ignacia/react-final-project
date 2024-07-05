// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Esta variable de entorno permite resguardar los datos sensibles de nuestra base de datos de Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyCBicO0-pwoFX0qEL2CM5fNS81ZZ_PYSW4',
    authDomain: 'proyecto-ecommerce-react-b8dd8.firebaseapp.com',
    projectId: 'proyecto-ecommerce-react-b8dd8',
    storageBucket: 'proyecto-ecommerce-react-b8dd8.appspot.com',
    messagingSenderId: '540233791883',
    appId: '1:540233791883:web:3844c3dc323687ced8d78e',
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Llama a la base de datos
const dataBase = getFirestore(app);


//Esta funcion llama a los productos
export async function getProducts(){
    const response = await getDocs(collection(dataBase,"products"));
    
     //response es un QuerySnapShot - es iterable
    const listaProductos=[];
    response.forEach((documentos) => listaProductos.push({id: documentos.id,  ...documentos.data()}));
    return listaProductos;
}


//Funcion que itera los productos por categoria.
export async function getCategory(category){
    const response = await getDocs(collection(dataBase,"products"));
    const listaProductos=[];
    response.forEach((documentos) => {
        if (documentos.data().category === category) {
            listaProductos.push({id: documentos.id,  ...documentos.data()});
        }
    });
    return listaProductos;
}

//Funcion que agrega info a la base de firebase.
export async function addOrder(order){
    const ordersCollections = collection(dataBase, "orders");
    const docRef = await addDoc(ordersCollections, order);
    console.log("Doc ref generado:" +docRef);
    console.log("id generado: " +docRef.id);
    return docRef.id;
}