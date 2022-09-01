

const render = ()=>{
    const productsStore = localStorageUtil.getProducts()
    headerPage.render(productsStore.length)
    productPage.render()
 }

 spinnerPage.render()

 let CATALOG = [] 
  fetch('server/catalog.json')
    .then(res=>res.json())
    .then((data)=>{    
      CATALOG=data
    setTimeout(()=>{
        spinnerPage.closeSpinner()
       
        render()
    },1000)
    
    })
    .catch(error=>{
      spinnerPage.closeSpinner()
      errorEl.classList.add('active')
      errorPage.render()        
      console.log(error.message)   

    })

    