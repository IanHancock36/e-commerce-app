
exports.Category = {
    // now we can basically pass it as a prop below for the 'parent param'
    products: ({ id: categoryId }, { filter }, { db }) => {

        // this is what it used to be const 
        //categoryId = parent.id
        const categoryProducts = db.products.filter((product) => {
            product.categoryId === categoryId
            let filteredCategoryProducts = categoryProducts
            if (filter) {
                if (filter.onSale === true) {
                    filteredCategoryProducts = filteredCategoryProducts.filter(product => {
                        return product.onSale
                    })
                }
            }
            return filteredCategoryProducts
        })
    }
}

