// const mongoose = require("mongoose")
// // const userId = mongoose.


// const cartSchema = new mongoose.Schema({
//     userId: {
//         type: ObjectId,
//         ref: "user",
//         required: true,
//         unique: true,
//         trim: true
//     },
//     items: [{
//         productId: {
//             type: ObjectId,
//             ref: "product",
//             required: true,
//             trim: true
//         },
//         quantity: {
//             type: Number,
//             require: true,
//             trim: true
//             //  min 1
//         }
//     }],
//     totalPrice: {
//         type: Number,
//         required: true,
//         trim: true,
//         //  comment: "Holds total price of all the items in the cart"},
//         totalItems: {
//             type: Number,
//             required: true,
//             trim: true,
//             //  comment: "Holds total number of items in the cart"},

//         }
//     }, { timestamps: true })

// module.exports = mongoose.model("cart", cartSchema)