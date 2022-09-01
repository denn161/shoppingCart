class Error{

    render(){

        const html = `<div class='error__container'>
        <h3>
        Что-то пошло не так...
        </h3>
        <p>Попробуйте зайти позже</p>
        </div>`


        errorEl.innerHTML=html
    }
}

const errorPage = new Error()