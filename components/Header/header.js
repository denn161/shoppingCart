class Header{


        handleOpenShoppingPage(){
           shoppingPage.render()   
           
        }

 render(count){      
   
  const html = `<div class='header__container'>
          <div class='header__counter' onclick="headerPage.handleOpenShoppingPage()">
          🔥 ${count}
          </div>
  </div>`
   
  headerEl.innerHTML=html

 }


}


const headerPage = new Header()

