const {products} = require("../db")
exports.Category = {
    products: (parent, args, context) => {
        console.log(parent)
        const categoryId = parent.id
        return products.filter((product) => {
            return product.categoryId === categoryId
        })
    }
}