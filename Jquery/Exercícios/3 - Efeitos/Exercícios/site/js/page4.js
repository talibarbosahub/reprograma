//**4.** No arquivo page4.html, no clique do botão faça com que
// cada card apareça utilizando efeitos de slide. 
//Um diferente efeito para cada card.

$(function(){
    $(".aparecer").click(function(){
        $(".card1").slideToggle(2000)
        $(".card2").slideToggle(4000)
        $(".card3").slideToggle(6000)
        $(this).removeClass("btn-primary").addClass("btn-secondary");
        $(this).prop("disabled",true);
    }) 
    
    $(".card").click(function(){
        $(this).remove()
    })
})