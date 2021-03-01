class ProductList {
    constructor(container = '.product-content') {
        this.container = container;
        this._goods = [];
        this._allProducts = [];
        this._fetchGoods()
            .then((data) => {
                this._goods = Array.from(data);
                this._render();
;            });
        
    }
    _fetchGoods() {
        return fetch('data.json')
            .then(response => response.json())
            .catch((err) => {
                console.log('Error !!!');
            });
    }

    _render() {
        const container = document.querySelector(this.container);

        for (let product of this._goods) {
            const productObject = new ProductItem(product);

            this._allProducts.push(productObject);

            container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
        
    }
    
}

class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.img = product.img;
        this.text = product.text;
    }

    getHTMLString () {
        return `<div class="product product_mb" data-id="${this.id}">
                        <a href="product.html"><img src="${this.img}" alt="photo product" class="product__img"></a>
                        <a href="cart.html" class="product__add"><img src="img/cart.svg" alt="cart"> Add to Cart</a>
                        <div class="product__info">
                        <a class="product__name" href="product.html">${this.name}</a>
                        <p class="product__text">${this.text}</p>
                        <div class="product__price">$${this.price}</div>
                        </div>
                    </div>`
    }

    // addToCart () {

    // }
}

const productList = new ProductList();

// class CartList () {

// }


// const addToCartButton = document.querySelectorAll('.product__add');
// addToCartButton.addEventListener('click', addToCart());

