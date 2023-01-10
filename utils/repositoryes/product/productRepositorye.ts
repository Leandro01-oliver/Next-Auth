import axios from "axios"

class ProductRepositorye{

 async findProductAll(setDataProduct : any){
     await axios.get("api/get/product/all")
     .then((result : any) => {
       setDataProduct(result)
     }).catch((err : Error)=>{
        console.error(err);
     })
 }


 async findProductById(id : Number, setDataProduct : any){
    await axios.get(`api/get/product/by/id/${id}`)
    .then((result : any) => {
      setDataProduct(result)
    }).catch((err : Error)=>{
       console.error(err);
    })
 }

}

export default ProductRepositorye 