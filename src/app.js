document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Roti Bakar', img: '1.jpg', price: 25000 },
            { id: 2, name: 'Burger', img: '2.jpg', price: 30000 },
            { id: 3, name: 'Roti Bakar', img: '3.jpg', price: 25000 },
            { id: 4, name: 'Roti Bakar', img: '4.jpg', price: 25000 },
            { id: 5, name: 'Espreso',  img: '5.jpg', price: 25000 },


        ],
    }));
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek apakah ada barang yang sama di cart

            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada / cart masih kosong
            if(!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            }else{
                // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart

                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if(item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika barang sudah ada, tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }        
        },
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