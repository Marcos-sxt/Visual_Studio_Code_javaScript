let N

N = prompt("Em que mês você quer fazer sua viagem?: ")

function Mês(N){
    switch(parseInt(N)) {
        case 1:
            alert("Tudo bem sua viagem foi agendada para Janeiro")
          break;
		case 2:
            alert("Tudo bem sua viagem foi agendada para Fevereiro")
        break;
		case 3:
            alert("Tudo bem sua viagem foi agendada para Março")
        break;
		case 4:
            alert("Tudo bem sua viagem foi agendada para Abril")
        break;
		case 5:
            alert("Tudo bem sua viagem foi agendada para Maio")
        break;
		case 6:
            alert("Tudo bem sua viagem foi agendada para Junho")
        break;
		case 7:
            alert("Tudo bem sua viagem foi agendada para Julho")
        break;
		case 8:
            alert("Tudo bem sua viagem foi agendada para Agosto")
        break;
		case 9:
            alert("Tudo bem sua viagem foi agendada para Setembro")
        break;
		case 10:
            alert("Tudo bem sua viagem foi agendada para Outubro")
        break;
		case 11:
            alert("Tudo bem sua viagem foi agendada para Novembro")
        break;
		case 12:
		    alert("Tudo bem sua viagem foi agendada para Dezembro")
        break;
        return N
    }
}
Mês(N);