
exports.Category = {
    // now we can basically pass it as a prop below for the 'parent param'
    products: ( {id: categoryId}, args, {products} ) => {
       // this is what it used to be const 
       //categoryId = parent.id
        return products.filter((product) => {
            return product.categoryId === categoryId
        })
    }
}