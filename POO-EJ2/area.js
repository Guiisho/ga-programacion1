export default class Area {
    base;
    altura;
    radio;

    constructor(){

    }

    calcularAreaCirc(){
        const resultado= Math.PI* Math.pow(this.radio,2) 

        return resultado
    }

   

    calcularBaseAltura(){
        const resultado1= (this.base*this.altura) /2
        return resultado1
    }

}


