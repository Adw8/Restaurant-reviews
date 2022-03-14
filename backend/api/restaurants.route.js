import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
import Reviewsctrl from './reviews.controller.js'

const router = express.Router()
router.route('/').get(RestaurantsCtrl.apiGetRestaurants)
router.route('/id/:id').get(RestaurantsCtrl.apiGetRestaurantsById)
router.route('/cuisines').get(RestaurantsCtrl.apiGetRestaurantCuisines)

router
    .route('/review')
    .post(Reviewsctrl.apiPostReview)
    .put(Reviewsctrl.apiUpdateReview)
    .delete(Reviewsctrl.apiDeleteReview)

export default router