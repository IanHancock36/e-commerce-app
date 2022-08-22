
exports.Product = {
    category: ({categoryId}, args, {db}) => {
        return db.categories.find((category) => {
            return category.id === categoryId
        })
    },
    reviews:({id}, args, {db})=>{
        return db.reviews.filter(review =>review.productId === id)

    }
}   