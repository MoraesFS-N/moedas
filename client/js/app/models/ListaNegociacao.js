class ListaNegociacao{
    constructor(){
        this._negociacoes = []
    }

    adiciona(negociacao){
        this.negociacao.push(negociacao)
    }

    get Negociacoes(){
        return this._negociacoes;
    }
}