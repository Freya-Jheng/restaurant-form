import {apiHelper} from './../utilities/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurant ({restaurantId}) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  getRestaurants({page, categoryId}) {
    const searchParams = new URLSearchParams({page, categoryId})
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  getFeeds () {
    return apiHelper.get('restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  getTopRestaurant() {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  createComments ({ restaurantId, text}) {
    return apiHelper.post('/comments', {
      restaurantId,
      text,
    })
  },
  deleteComments(restaurantId) {
    return apiHelper.delete(`/comments/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  }
}