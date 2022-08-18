
// this is how the data is fetched. 

exports.Query = {
    products: (parent, {filter}, { products }) => {
        // you have to return an array of objects here.
        let filteredProducts = products
        if(filter){
            if(filter.onSale === true){
                filteredProducts = filteredProducts.filter(product =>{
                    return product.onSale
                })
            }
        }
      return filteredProducts
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