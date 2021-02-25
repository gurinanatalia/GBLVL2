






// let num = (a) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a) {
//                 resolve(a+10);
//             } else {
//                 reject('err !!!');
//             }
//         }, 1500);
//     });
// }

// // num(10)
// //     .then((data) => {
// //         console.log(data);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// // });

// async function asyncFoo (a) {
//     try {
//         const result = await num(a);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// asyncFoo();




// class ProductList {
//     constructor(container = '.product-content') {
//         this.container = container;
//         this._goods = [];
//         this._allProducts = [];
//         this._fetchGoods();
//         this._render();
//     }
//     _fetchGoods() {
//         this._goods = [
//             { id: 1, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img1.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//             { id: 2, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img2.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//             { id: 3, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img3.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//             { id: 4, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img4.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//             { id: 5, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img5.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//             { id: 6, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img6.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//         ]
//     }

//     _render() {
//         const container = document.querySelector(this.container);

//         for (let product of this._goods) {
//             const productObject = new ProductItem(product);

//             this._allProducts.push(productObject);

//             container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
//         }
        
//     }
    
// }

// class ProductItem {
//     constructor(product) {
//         this.id = product.id;
//         this.name = product.name;
//         this.price = product.price;
//         this.img = product.img;
//         this.text = product.text;
//     }

//     getHTMLString () {
//         return `<div class="product product_mb" data-id="${this.id}">
//                         <a href="product.html"><img src="${this.img}" alt="photo product" class="product__img"></a>
//                         <a href="cart.html" class="product__add"><img src="img/cart.svg" alt="cart"> Add to Cart</a>
//                         <div class="product__info">
//                         <a class="product__name" href="product.html">${this.name}</a>
//                         <p class="product__text">${this.text}</p>
//                         <div class="product__price">$${this.price}</div>
//                         </div>
//                     </div>`
//     }
// }

// const productList = new ProductList();


// const products = [
//     { id: 1, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img1.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//     { id: 2, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img2.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//     { id: 3, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img3.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//     { id: 4, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img4.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//     { id: 5, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img5.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
//     { id: 6, name: "ELLERY X M'O CAPSULE", price: 52.00, img: '/img/products__img6.jpg', text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
// ]

// const renderProduct = (item, name, price, img, text) => {
//     return `<div class="product product_mb" data-id="${this.id}">
//                 <a href="product.html"><img src="${item.img}" alt="photo product" class="product__img"></a>
//                 <a href="cart.html" class="product__add"><img src="img/cart.svg" alt="cart"> Add to Cart</a>
//                 <div class="product__info">
//                 <a class="product__name" href="product.html">${item.name}</a>
//                 <p class="product__text">${item.text}</p>
//                 <div class="product__price">$${item.price}</div>
//                 </div>
//             </div>`
// };

// const renderProducts = list => {
//     document.querySelector('.product-content').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''))
// };

// renderProducts(products);  