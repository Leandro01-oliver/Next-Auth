import ProductRepositorye from "../../repositoryes/product/productRepositorye";

class ProductService{

    constructor(private readonly productRepositorye : ProductRepositorye) {}

    findUserServiceAll(setDataProduct : any){
      let products = this.productRepositorye.findProductAll(setDataProduct);
      return products;
    }
  
    findUserServiceById(id : Number, setDataProduct : any){
      let product = this.productRepositorye.findProductById(id, setDataProduct);
      return product;
    }
}

export { ProductService }