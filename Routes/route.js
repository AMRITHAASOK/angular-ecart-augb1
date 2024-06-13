const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const wishlistController = require('../Controllers/wishlistController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const router = new express.Router()
const cartController = require('../Controllers/cartController')


//get all products
router.get('/all-products',productController.getAllProducts)


//register
router.post('/user/register',userController.register)

//login
router.post('/user/login',userController.login)


//get a product
router.get('/view-product/:id',productController.getProduct)

router.post('/wishlist',jwtMiddleware,wishlistController.addWishlist)

//get a wishlist item
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)

//delete a wishlist item
router.delete('/delete-wishlist/:id',jwtMiddleware,wishlistController.deleteFromWishlist)

//add to cart
router.post('/add-cart',jwtMiddleware,cartController.addToCart)

//get cart items
router.get('/get-cart',jwtMiddleware,cartController.getCart)

router.delete('/delete-cart/:id',jwtMiddleware,cartController.deleteCart)


router.get('/increment-cart/:id',jwtMiddleware,cartController.incrementCart)

router.get('/decrement-cart/:id',jwtMiddleware,cartController.decrementCart)

module.exports = router