import React from "react";
import ViewIndividualP from "./ModalViewIndividualP.js";
 const WatchComputerProducts = (props) => {
    // const [product, setProduct] = useState([]);

    //   const computer = async => {
    //      let vector = [];
    //      try{
    //         fetch("https://technova-app.herokuapp.com/computer_category.php", {      
    //             method: "GET",
    //             body: formData,
    //               headers: {
    //                 'Accept': 'application/json'
    //               },
    //             })
    //             .then(response => response.json())
    //             .then((product) => {
    //                 product.forEach(pro => {
    //                     let comp ={
    //                         nombre: pro.nombre,
    //                         marca: pro.marca,
    //                         tamanio: pro.tamanio,
    //                         modelo: pro.modelo,
    //                         ram: pro.ram,
    //                         almacenamiento: pro.almacenamiento,
    //                         tipo_disco: pro.tipo_disco,
    //                         procesador: pro.procesador,
    //                         sistema_operativo: pro.sistema_operativo,
    //                         precio: pro.precio,
    //                         img: pro.img
    //                     };
    //                     vector.push(comp); 
    //                 });
    //                 setProduct(vector);
    //             };                       
    // catch(error){
    //     console.log(error);
    //  }
    // };

    // useEffect(() => {
    //     computer();
    //   }, []);
    
      
    
    //   const HandleInputChange = (event) => {
    //     setInformation({
    //       ...Information,
    //       [event.target.name]: event.target.value,
    //     });
    //   };
    
    //   const sendData = (e) => {
    //     e.preventDefault(); 
    //       fetch("https://technova-app.herokuapp.com/computer_category.php",{
    //         method: "GET",
    //         headers: {
    //           'Accept': 'application/json'
    //         }
    //       })
    //       .then(response => response.json())
    //       .then((user) => {
    //         computer(user); 
    //       }
          
    //       )
    //     }
        
      
  return (
    <div className="sectionBackground">
      <div className="sectionHeader">
        <p className="sectionTitle"> {props.titleName}</p>
      </div>

     <div className="productContainer">
        <div className="ProductItem">
          <div className="productCard">
          <div className="productCardLeft">
              <div className="imgGrid">
                <img src="https://definicion.de/wp-content/uploads/2009/06/producto.png" alt="Producto"></img>
              </div>
            </div>
            <div className="productCardRight">
              <div clasName="productHeader">
                <div className="productName" name="productName">Nombre del producto</div>
                <div className="productPrice" name="productPrice">Marca:</div>
                <div className="aditionalDetails" name="product">169900</div>
              </div>
                    <ViewIndividualP />
                  
            </div>
          </div>
         </div>
        </div>
     
      <div className="moreProducts">Next =&gt;</div>
    </div>
  );
};

export default WatchComputerProducts;