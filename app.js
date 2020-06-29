const vm = new Vue ({
    el: "#app",
    data: {
        produtos: [],
        descricao: ""
    },
    filters: {
        precoFormat(valor) {
            //return "R$ " + valor
            return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        },
    },
    methods: {
        listarProdutos() {
            fetch("/api/produtos.json")
            .then(resp => resp.json())
            .then(resp => {
                this.produtos = resp;
            })
        },
        descProduto(id) {
            fetch(`/api/produtos/${id}/dados.json`)
            .then(resp => resp.json())
            .then(resp => {
                this.descricao = resp;
            })
        },
    },
    created() {
        this.listarProdutos();
    },
})