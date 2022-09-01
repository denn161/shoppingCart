class Shopping{


  closeShoppingCart(){
   shoppingEl.innerHTML=''

  }

 render(){

    const productsStore = localStorageUtil.getProducts()     
    let htmlCatlog=''
    let totalCatalog=0


   
    CATALOG.forEach(({id,name,price})=>{
           if(productsStore.indexOf(id)!==-1){
              htmlCatlog+=`
                <tr class='shopping__item'>
                <td class='shopping__name'>⚡️${name}</td>
                <td class='shopping__price'>${price.toLocaleString()}Р</td>
                </tr>
              
              
              `
            totalCatalog+=price
           }
         
       })

   const html =`
   <div class='shopping__container'>
     <div class='shopping__close' onclick="shoppingPage.closeShoppingCart()">
     <?xml version="1.0" encoding="iso-8859-1"?>
     <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
     <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 371.23 371.23" style="enable-background:new 0 0 371.23 371.23;" xml:space="preserve">
     <polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 
       185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "/>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     <g>
     </g>
     </svg>
     </div>
     <table class='shopping__table'>
     ${htmlCatlog}
     <table>
     <tr>
     <td class='shopping__name'>
     💥 Cумма к оплате:
     </td>
     <td class='shopping__price'>
     ${totalCatalog.toLocaleString()}Р
     </td>
    </tr>
     </table>
     </table>      
    
   </div>
   
   `

   shoppingEl.innerHTML=html


 }

}


const shoppingPage = new Shopping()