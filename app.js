const vm = new Vue ({
    el: "#app",
    data: {
        produtos: [],
        detalhes: false,
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
                this.detalhes = resp;
            })
        },
    },
    created() {
        this.listarProdutos();
    },
})