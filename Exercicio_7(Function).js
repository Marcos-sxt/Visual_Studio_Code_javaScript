    let H, M, A, P, HoraInserida, Convertido, M12 = 12

    alert("Conversor de formato de horas 24 > 12")
    alert("A seguir digite o horário no formato 24H")

    do{
        H = prompt("Digite as horas: ")
        M = prompt("Digite os minutos: ")
    function Conversão(H, M){
        if(H == 0 &&  M >= 00 && M <= 59){
            Convertido = alert("A hora convertida para o formato de 12 Horas fica: "
             + (parseInt(H) + 12) + ":" + M + " AM")
        }
        else if(H >= 1 && H <= 11 && M >= 00 && M <= 59){
            Convertido = alert("A hora convertida para o formato de 12 Horas fica: "
             + parseInt(H) + ":" + M + " AM")
        }
        else if(H >= 13 && H <= 23 &&  M >= 00 && M <= 59){
            Convertido = alert("A hora convertida para o formato de 12 Horas fica: "
             + (parseInt(H) - 12) + ":" + M + " PM")
        }
        else{
            alert("Essa informação não faz sentido '-'")
        }
        return Convertido
    }
    Conversão(H,M);
    S_ou_N = prompt("Você quer continuar fazendo conversões?:, Digite S ou N")
    
}while(S_ou_N == "S")
