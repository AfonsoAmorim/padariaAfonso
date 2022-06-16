class Padaria{
  constructor(nome,contato,endereco,cep){
    this.nome = nome;
    this.contato = contato;
    this.endereco = endereco;
    this.cep = cep;
  }
  descontoEstacionamento(estacionamento){
    if(estacionamento<=20){
        console.log(`Oferecer desconto de 10%`);
        const valorEstacionamento = estacionamento*0.1;
        console.log(`Cobrar: ` + (estacionamento-valorEstacionamento) + ` reais.`);
    }else{
        console.log("Oferecer desconto de 20%");
        const valorEstacionamentoVinte = estacionamento*0.2;
        console.log(`Cobrar: ` + (estacionamento-valorEstacionamentoVinte) + ` reais`);
    }
  }
  valeFrango(pedidoFrango){
    if(pedidoFrango >= 4){
        console.log(`O cliente pediu ${pedidoFrango} e tem direito a cortesia de 1 frango!`);
    }else{
        console.log("Oferecer vale para próxima compra!");
    }
  }

}

const padariaOneV = new Padaria("Padaria 7",55458621,"Rua 7",88545765213);
console.log(padariaOneV);
padariaOneV.descontoEstacionamento(40);
padariaOneV.valeFrango(3);

