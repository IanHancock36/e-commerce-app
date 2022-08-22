const { v4: uuid } = require("uuid")
// pulling in the categories data the array of categories we made reusable 
exports.Mutation = {
    addCategory: (parents, { input }, { db }) => {
        const { name } = input
        const newCategory = {
            id: uuid(),
            // name comes from the input whatever in the front end thats types in or selected.
            name
        }
        // this will take a random generated id and the name either selected or typed in
        // and push it to the end of the categories array. 
        db.categories.push(newCategory)
        // the new category must be returned from this function basically
        return newCategory
    },
    // I am extracting the input and the products array from context. 
    addProduct: (parent, { input }, { db }) => {
        const {
            name,
            image,
            price,
            onSale,
            quantity,
            categoryId } = input

        const newProduct = {
            id: uuid(),
            name,
            image,
            price,
            onSale,
            quantity,
            categoryId
        }
        db.products.push(newProduct)
        return newProduct
    },

    addReview: (parent, { input }, { db }) => {
        const { date, title, comment, rating } = input
        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId
        }
        db.reviews.push(newReview)
        return newReview
    },
    deleteCategory: (parent, { id }, { db }) => {
        db.categories === db.categories.filter(category => category.id !== id)
        db.products = db.products.map((product) => {

            if (product.categoryId === id)return {
                    ...product,
                    categoryId: null
                }
                else {
                return product
            }
        })
        return true

    }
}