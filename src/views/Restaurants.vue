<template>
  <div class="container py-5">
    <NavTabs />
    <!-- RestaurantsNavPills 餐廳類別 -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- RestaurantCard 餐廳卡片 -->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>

    <!-- RestaurantPagination 分頁標籤 -->
    <RestaurantsPagination 
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage" />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'

const dummyData = {
  "restaurants": [
        {
            "id": 1,
            "name": "Albert Gottlieb DVM",
            "tel": "747-225-7090",
            "address": "76818 Jerde Course",
            "opening_hours": "08:00",
            "description": "Officiis repellat repellendus reiciendis dolore es",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.83383915249684",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Quinten Lynch",
            "tel": "(620) 679-2296",
            "address": "08715 Maiya Ports",
            "opening_hours": "08:00",
            "description": "Consequatur fuga eaque sint dolorem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.26402706894967",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Gregory Leuschke",
            "tel": "1-952-248-2124",
            "address": "56718 Raynor Stream",
            "opening_hours": "08:00",
            "description": "quidem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.90046587878092",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Regan Muller",
            "tel": "825-622-0949 x006",
            "address": "3292 Helena Creek",
            "opening_hours": "08:00",
            "description": "rerum placeat quae",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.44121760058988",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Chaz Bechtelar",
            "tel": "1-584-648-1924 x6405",
            "address": "1805 Seth Avenue",
            "opening_hours": "08:00",
            "description": "Facilis mollitia sunt beatae harum aut laborum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.84599355863176",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Savanna Yundt II",
            "tel": "1-353-307-9181 x521",
            "address": "8892 Kris Tunnel",
            "opening_hours": "08:00",
            "description": "Esse autem quo placeat optio facilis quas. Amet no",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.103129737629374",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Roman McKenzie",
            "tel": "1-826-767-9120",
            "address": "31781 Loy Squares",
            "opening_hours": "08:00",
            "description": "Ea nihil vitae neque aut harum corporis sed sit mo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.250841577141973",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Eusebio Stanton",
            "tel": "674.908.3398 x6712",
            "address": "205 Jose Road",
            "opening_hours": "08:00",
            "description": "Accusantium doloremque accusantium nisi qui iste.\n",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.21657261824419",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Jack Waelchi",
            "tel": "625-153-7894 x2483",
            "address": "2284 Gottlieb Inlet",
            "opening_hours": "08:00",
            "description": "Ullam non rerum quis qui iure et nam. Qui et aut. ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.770988852912872",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Ahmed Russel",
            "tel": "889.435.7465 x8040",
            "address": "798 Kayla Spurs",
            "opening_hours": "08:00",
            "description": "Quasi eaque modi quos quod possimus voluptas possi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.58139882457196",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
  "categories": [
      {
          "id": 1,
          "name": "中式料理",
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z"
      },
      {
          "id": 2,
          "name": "日本料理",
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z"
      },
      {
          "id": 3,
          "name": "義大利料理",
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z"
      },
      {
          "id": 4,
          "name": "墨西哥料理",
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z"
      },
      {
          "id": 5,
          "name": "素食料理",
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z"
      },
      {
          "id": 6,
          "name": "美式料理",
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z"
      },
      {
          "id": 7,
          "name": "複合式料理",
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z"
      }
  ],
  "page": 1,
  "totalPage": [
      1,
      2,
      3,
      4,
      5
  ],
  "prev": 1,
  "next": 2,
  "categoryId": "",
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>
