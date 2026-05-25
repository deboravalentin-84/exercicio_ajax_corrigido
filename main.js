```javascript
async function carregarProdutos() {

    try {

        const resposta = await fetch('https://fakestoreapi.com/products')

        const produtos = await resposta.json()

        let cards = ''

        produtos.forEach(produto => {

            cards += `
                <div class="card">
                    <img src="${produto.image}" alt="${produto.title}">
                    <h3>${produto.title}</h3>
                    <p>R$ ${produto.price}</p>
                </div>
            `
        })

        document.getElementById('produtos').innerHTML = cards

    } catch (erro) {

        console.log('Erro ao carregar produtos')

        console.log(erro)
    }
}

carregarProdutos()
```
