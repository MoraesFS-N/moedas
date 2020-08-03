class DateHelper{
 // metodos static são metodos que não precisam ter uma instancia da classe para serem chamados
    constructor(){
        throw new Error('This class (DateHelper) cannot be instantiated')
    }

    static textToDate(texto){
       return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dateToText(data){

        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;

    }

}