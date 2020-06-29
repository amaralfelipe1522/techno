const vm = new Vue ({
    el: "#app",
    data: {
        produtos: [],
    },
    methods: {
        listarProdutos() {
            fetch("/api/produtos.json")
            .then(resp => resp.json())
            .then(resp => {
                this.produtos = resp
            })
        },
    },
    created() {
        this.listarProdutos();
    }
})