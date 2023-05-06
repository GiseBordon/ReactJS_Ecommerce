const productos = [
    {
        id: "1",
        title: "California Suite",
        category: "Producto A",
        author: "Sherlocke Bickardike",
        description: "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
        price: 23999.23,
        stock: "8",
        image: "https://picsum.photos/id/237/200/100"
    }, {
        id: "2",
        title: "California Suite",
        category: "Producto A",
        author: "Sherlocke Bickardike",
        description: "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
        price: 23999.23,
        stock: "5",
        image: "https://picsum.photos/id/236/200/100"
    }, {
        id: "3",
        title: "California Suite",
        category: "Producto A",
        author: "Sherlocke Bickardike",
        description: "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
        price: 23999.23,
        stock: "4",
        image: "https://picsum.photos/id/235/200/100"
    }, {
        id: "4",
        title: "California Suite",
        category: "Producto A",
        author: "Sherlocke Bickardike",
        description: "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
        price: 23999.23,
        stock: "10",
        image: "https://picsum.photos/id/234/200/100"
    }, {
        id: "5",
        title: "California Suite",
        category: "Producto B",
        author: "Sherlocke Bickardike",
        description: "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
        price: 23999.23,
        stock: "6",
        image: "https://picsum.photos/id/233/200/100"
    }, {
        id: "6",
        title: "California Suite",
        category: "Producto B",
        author: "Sherlocke Bickardike",
        description: "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
        price: 23999.23,
        stock: "4",
        image: "https://picsum.photos/id/232/200/100"
    }, {
        id: "7",
        title: "California Suite",
        category: "Producto B",
        author: "Sherlocke Bickardike",
        description: "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
        price: 23999.23,
        stock: "7",
        image: "https://picsum.photos/id/231/200/100"
    }, {
        id: "8",
        title: "California Suite",
        category: "Producto B",
        author: "Sherlocke Bickardike",
        description: "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
        price: 23999.23,
        stock: "3",
        image: "https://picsum.photos/id/229/200/100"
    }]


export const getProductos = (categoryId) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(categoryId ? productos.find(producto => producto.id === categoryId) : productos)
        }, 1000)
    })
}    

