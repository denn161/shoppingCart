class Products {
  
 constructor(){
    this.classNameActive = 'active__btn'
    this.labelAdd='Добавить в корзину'
    this.labelRemove = 'Удалить из корзины'
 }




 handleSetLOcationStorage(el,itemId){

     const {pushProduct,products}=localStorageUtil.putProducts(itemId)
      
     if(pushProduct){
        el.classList.add(this.classNameActive)
        el.innerHTML=this.labelRemove

     } else{
        el.classList.remove(this.classNameActive)
        el.innerHTML=this.labelAdd
        
     }      
      
      headerPage.render(products.length)
 }


    render(){
        const productsStore = localStorageUtil.getProducts()

     
        let htmlCatlog=''


     CATALOG.forEach(({id,name,img,price})=>{
      let activeClass=''
      let activeText =''

      if(productsStore.indexOf(id)===-1){       
        activeText=this.labelAdd
      }else{
        activeText=this.labelRemove
        activeClass=this.classNameActive
      }
       htmlCatlog+=`<li class='products__item'>
           <span class='products__name'>${name}</span>
           <img class='products__img' src=${img} alt='ProductPhoto'/>
           <span class='products__price'>⚡️ ${price.toLocaleString()}Р</span>
           <button onclick="productPage.handleSetLOcationStorage(this,'${id}')"  class='products__btn ${activeClass}'>${activeText}</button>
       </li>`


     })

      const html = `
       <ul class='products__list'>
          ${htmlCatlog}
       </ul>
      `
       productsEl.insertAdjacentHTML('afterbegin',html)

    }
}



const productPage = new Products()

