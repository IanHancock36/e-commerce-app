exports.Query = {
    products: (parent, args, { products }) => {
        // you have to return an array of objects here.
        return products
    },
    product: (parent, { id }, { products }) => {

        return products.find((product) => product.id === id)
    },
    categories: () => {
        return categories
    },
    category: (parent, { id }, { categories }) => {
        return categories.find((category) => category.id === id)
    },
}