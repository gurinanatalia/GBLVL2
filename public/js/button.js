class Button {
    _text = '';
    _callback = null;

    constructor(text, callback) {
        this._text = text;
        this._callback = callback;
    }

    onBtnClick() {
        const callback = this._callback;
        if (typeof callback === 'function') {
            callback();
        }
    }

    getTemplate() {
        const btn = document.createElement('a');
        btn.classList.add('product__add');
        btn.setAttribute('href', 'cart.html');
        return btn;
    }

    render(placeToRender) {
        if (placeToRender) {
            const btn = this.getTemplate();
            btn.innerHTML = `
            <img src="img/cart.svg" alt="cart">${this._text}</a>
            `;
            placeToRender.appendChild(btn);

            btn.addEventListener('click', () => {
                this.onBtnClick();
            })
        }
    }
}
