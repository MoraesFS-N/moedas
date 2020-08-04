class DateHelper{
 // metodos static são metodos que não precisam ter uma instancia da classe para serem chamados
    constructor(){
        throw new Error('This class (DateHelper) cannot be instantiated')
    }

    static textToDate(texto){
        // toda a expressão regular começa com /, d é correspnde a quantidade de dígitos no formato de números
        // é feita uma verificação se a data corresponde ao padrão solicitado, caso não seja, é lançado um erro
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato ano mes e dia');
        
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dateToText(data){

        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;

    }

}