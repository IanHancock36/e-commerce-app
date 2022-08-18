const { reviews } = require("../db")

exports.Review = {
   review: ({id}, args, {categories}) => {
        return reviews.find((review) => {
            return review.id === id
        })
    }
}  