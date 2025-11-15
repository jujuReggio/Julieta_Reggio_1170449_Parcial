$(document).ready(function () {

const $body = $('body');
const $toggle = $('#theme-toggle');

const savedTheme = localStorage.getItem('theme') || 'light';
$body.attr('data-theme', savedTheme);

$toggle.on('click', function () {
    const newTheme = $body.attr('data-theme') === 'light' ? 'dark' : 'light';
    $body.attr('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

});

    //  VALIDACIÓN DEL FORMULARIO 
    $("#formContacto").submit(function (e) {
        e.preventDefault();

        let valido = true;

        $(".error").text("");

        if ($("#nombre").val().trim() === "") {
            $("#nombre").next(".error").text("Ingresá tu nombre");
            valido = false;
        }

        let email = $("#email").val().trim();
        if (email === "" || !email.includes("@")) {
            $("#email").next(".error").text("Email inválido");
            valido = false;
        }

        if ($("#mensaje").val().trim() === "") {
            $("#mensaje").next(".error").text("Escribí un mensaje");
            valido = false;
        }

        if (valido) {
            alert("Mensaje enviado correctamente.");
            $("#formContacto")[0].reset();
        }
    });

});
