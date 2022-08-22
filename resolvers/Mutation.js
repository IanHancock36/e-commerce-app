const { v4: uuid } = require("uuid")
// pulling in the categories data the array of categories we made reusable 
exports.Mutation = {
    addCategory: (parents, { input }, { categories }) => {
        const { name } = input
        const newCategory = {
            id: uuid(),
            // name comes from the input whatever in the front end thats types in or selected.
            name
        }
        // this will take a random generated id and the name either selected or typed in
        // and push it to the end of the categories array. 
        categories.push(newCategory)
        // the new category must be returned from this function basically
        return newCategory
    },
    // I am extracting the input and the products array from context. 
    addProduct: (parent, { input }, { products }) => {
        const {
            name,
            image,
            price,
            onSale,
            quantity,
            categoryId } = input

    }
}