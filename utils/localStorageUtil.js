class LocalStorageUtil{

   constructor(){

    this.keyName = 'products'
   
   }

   getProducts(){

      const productsStorage = localStorage.getItem(this.keyName)
        
       return productsStorage!==null ? JSON.parse(productsStorage):[]

   }

   putProducts(id){
        let products = this.getProducts()
        const index = products.indexOf(id)
        let pushProduct=false
         
     if(index===-1){
        products.push(id)
        pushProduct=true
     }else{
        products.splice(index,1)
        pushProduct=false
     }    
          
     localStorage.setItem(this.keyName,JSON.stringify(products))

     return {
        pushProduct,products
     }
   }


}

const localStorageUtil = new LocalStorageUtil()

  
  
   


 
 