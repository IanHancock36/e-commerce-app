
exports.Product = {
    category: ({categoryId}, args, {categories}) => {
        return categories.find((category) => {
            return category.id === categoryId
        })
    }
}   