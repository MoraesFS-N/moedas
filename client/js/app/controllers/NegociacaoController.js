class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);
    
        this._inputData = $('#data');
        this._inputQuantidade  = $('#quantidade');
        this._inputValor  = $('#valor');    

    }

    adiciona(event){
        event.preventDefault();
        // expressão regular, a linha abaixo diz: replace(/-/g) = para tudo(g) que tiver traço(-)
        // substitua por vírgula (',') 
        //let data = new Date(this._inputData.value.split(/-/g, ','))
        //...spread operator, desmenbramento de array e iteração com o map para resolver o problema de decrementação do mês

        let data = new Date(
            ...this._inputData.value.split('-').map((item, indice) =>
                    item - indice % 2
            )
        );

        let negociacao = new Negociacao(
            this.data,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negociacao);
    }
}