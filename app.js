document.getElementById("alumno").style.backgroundColor = "red"

// get - Traer
// element - elemento
// by - por
// Id - Identificador unico

//document.getElementsByClassName("alumno") Llamada por medio del nombre de una clase

const Entrar = () => 
{
    document.getElementById("h3welcome").style.backgroundColor = "blue"
}

const Salir = () => 
{
    document.getElementById("h3welcome").style.backgroundColor = "red"
}

const Cambiar = () => 
{
    document.getElementById("h5").innerHTML = "Cambiaste el texto"
}

// - - - - - - - - - - - - - - - -

let footer = document.getElementById("footer")

const footerChange = () => 
{
    footer.style.backgroundColor = "green"
}

footer.addEventListener("mouseenter",footerChange)

// - - - - - - - - - - - - - -

let boton = document.getElementById("btnContactame")

const btnContact = (e) => 
{
    e.preventDefault()

    let nombre = document.getElementById("nombre").value 
    let email = document.getElementById("email").value
    let tel = document.getElementById("telefono").value

    console.log(`El nombre es ${nombre}, su mail es ${email} y su telefono ${tel}`)

}

boton.addEventListener("click", btnContact)

// setInterval(funcion, 1000)