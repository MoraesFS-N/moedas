class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);
    
        this._inputData = $('#data');
        this._inputQuantidade  = $('#quantidade');
        this._inputValor  = $('#valor');  

        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacaoView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
      
        // expressão regular, a linha abaixo diz: replace(/-/g) = para tudo(g) que tiver traço(-)
        // substitua por vírgula (',') 
        //let data = new Date(this._inputData.value.split(/-/g, ','))
        //...spread operator, desmenbramento de array e iteração com o map para resolver o problema de decrementação do mês
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
        
        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textToDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}