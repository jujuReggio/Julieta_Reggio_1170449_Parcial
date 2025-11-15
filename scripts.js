$(document).ready(function () {

    const $body = $('body');
    
    const $lightBtn = $('#light-theme');
    const $darkBtn = $('#dark-theme');

    const savedTheme = localStorage.getItem('theme') || 'light';
    $body.attr('data-theme', savedTheme);

    // claro
    $lightBtn.on('click', function () {
        $body.attr('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    });

    // oscuro
    $darkBtn.on('click', function () {
        $body.attr('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    });


    //  validación
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
