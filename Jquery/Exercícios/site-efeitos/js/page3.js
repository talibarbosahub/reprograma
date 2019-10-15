//**3.** No arquivo page3.html, no clique do
// botão programe toogle para cada card, com tempos
// diferentes para cada um.

$(function(){
    // $(".toggle").click(function(){
    //     $(".card1").fadeToggle(1000)
    //     $(".card2").fadeToggle(6000)
    //     $(".card3").fadeToggle(3000) // $(".card: eq(3)).fadeToggle(3000)" para selecionar por indice sem classe
    // })

    $(".button").click(function(){
        let content =$(".container").html()
        $(".container").append(content)
        
    })

})