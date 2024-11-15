document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Roti Bakar', products: '1.jpg', price: 25000 },
            { id: 2, name: 'Burger', products: '2.jpg', price: 30000 },
            { id: 3, name: 'Roti Bakar', products: '3.jpg', price: 25000 },
            { id: 4, name: 'Roti Bakar', products: '4.jpg', price: 25000 },
            { id: 5, name: 'Espreso', products: '5.jpg', price: 25000 },


        ],
    }));
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            this.items.push(newItem);
            this.quantity++;
            this.total+= newItem.price;
            console.log(this.total);
        }
    });
});


//  Konversi ke Rupiah

const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};