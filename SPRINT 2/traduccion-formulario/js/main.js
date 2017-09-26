function translate()
{
	var title = document.getElementById('form-signin-heading'); // traducice el titulo del formulario
	var email = document.getElementById("inputEmail"); //traduce el primer input
	var password = document.getElementById("inputPassword");//
	var remember = document.getElementsByTagName('span')[0];
	var button = document.getElementsByClassName("btn")[0];
	title.innerHTML = "Por favor inicia sesiòn";  // inner cambia los datos
	email.placeholder = "Correo Electrònico";//modifica el texto del atributo
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar sesiòn";

}
translate()
function mostrarDatos()
{
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  document.getElementById('correo').innerHTML = email;
  document.getElementById('clave').innerHTML = password;
    

}