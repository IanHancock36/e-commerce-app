
// this is how the data is fetched. 

const { reviews } = require("../db")

exports.Query = {
    products: (parent, { filter }, { products }) => {
        // you have to return an array of objects here.
        let filteredProducts = products
        if (filter) {
            const { onSale, avgRating } = filter
            if (onSale) {
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale
                })
            }
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0
                    let numberOfReviews
                    reviews.forEach(review => {
                        if (review.productId === product.id) {
                            sumRating += review.rating
                            numberOfReviews++
                        }
                    })
                    const avgProductRating = sumRating/numberOfReviews
                    return avgProductRating >= avgRating
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