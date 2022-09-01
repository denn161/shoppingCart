
class Spinner{

   
  closeSpinner(){
    spinnerEl.innerHTML=''

  }

    render(){
     const html=`
      <div class='spinner__container'>
       <img class='spinner__img' src='components/Spinner/img/spinner.svg'/>
      </div>        
     `
     spinnerEl.innerHTML=html
    }
}

const spinnerPage = new Spinner()


