//**2.** No arquivo page2.html, no clique do botão "Fade In"
// faça com que o alert de sucesso apareça
// em 5 segundos, no clique do botão "Fade Out" 
//faça com que o alert de erro desapareça em 3 segundos;

$(function () {
    $("#btnSuccessFadeIn").click(function () {
        $(".alert-success").fadeIn(5000)

    })
    $("#btnDangerFadeOut").click(function () {
        $(".alert-danger").fadeOut(3000)
    })

});