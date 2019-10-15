$(function () {

    $("#eventType").change(function () {
        let select = $("#eventType :selected").val();
        switch (select) {

            case "Teatro":
                $("#conception, #book, #author, #curator, #band").hide();
                $("#title, #synopsis, #writer, #director, #cast, #duration, #classification, #price, #free").show();
                break;
            case "Cinema":
                $("#writer, #conception, #book, #author, #moderator, #curator, #band, #guests").hide();
                $("#title, #synopsis, #director, #cast,  #duration, #classification, #price, #free").show();
                break;
            case "Debate Literário":
                $("#synopsis, #writer, #conception,  #curator, #band,#cast, #guests").hide();
                $("#title, #book, #author, #moderator, #duration, #classification, #price, #free").show();
                break;
            case "Dança":
                $("#writer,  #book, #author, #moderator, #curator, #band, #guests").hide();
                $("#title, #synopsis, #conception, #director, #cast, #duration, #classification, #price, #free").show();
                break
            case "Artes visuais e exposições":
                $("#writer,#conception, #director, #book, #moderator, #band, #durection").hide();
                $("#title, #synopsis, #curator, #guests, #duration, #classification, #price, #free").show();
                break;
            case "Música":
                $("#writer,#conception, #director, #book, #author, #moderator, #curator, #cast #guests, #durection, #cast,#guests").hide();
                $("#title, #synopsis, #band, #classification, #price, #free").show();
                break;
            default:
                break;

        }
    });
//* Para formulários que contêm os campos "Valor da entrada" e "Entrada gratuita", ao se marcar o campo "Entrada gratuita", o valor deve ser zerado e o campo de valor desaparecer, ao se desmarcar o campo de valor deve reaparecer
    $("#free").change(function () {
        if ($("#free").prop("checked")) {
            $("#price").hide();
        } else {
            $("#price").show();            

        }
    })

// Ao submitar o formulário, deve ser feita a verificação dos campos obrigatórios. Caso haja algum campo obrigatório não preenchido, o campo deverá receber uma borda vermelha e um alerta deverá ser emitido.
    $("form").submit(function (e) {
        let valid =true;
        if($(".title").is(":visible") && $(".title").val() ==""){
            $(".title").css("border", "1px solid red")
            $(".title").prop("placeholder","Digite um texto válido")
            valid=false;
        }

        if(valid==false){
            e.preventDefault()
        }
    })
});