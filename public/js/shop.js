class ProductList {
    constructor(container = '.product-content') {
        this.container = container;
        this._goods = [];
        this._allProducts = [];
        this._fetchGoods();
        this._render();
    }
    _fetchGoods() {
        this._goods = [
            { id: 1, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img1.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
            { id: 2, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img2.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
            { id: 3, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img3.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
            { id: 4, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img4.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
            { id: 5, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img5.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
            { id: 6, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img6.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
        ]
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

    addToCart () {

    }
}

const productList = new ProductList();

class CartList () {

}


const addToCartButton = document.querySelectorAll('.product__add');
addToCartButton.addEventListener('click', addToCart());