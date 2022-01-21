<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;">
      <div v-for="restaurant in topRestaurants" :key="restaurant.id" class="row no-gutters">
        <div class="col-md-4">
          <a :href="restaurant.image">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              Mrs. Mckenzie Johnston
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const dummyData = {  
  "restaurants": [
      {
          "id": 49,
          "name": "Destini Cartwright",
          "tel": "1-951-849-1379",
          "address": "8322 Osborne Gateway",
          "opening_hours": "08:00",
          "description": "Maxime vel consequatur ut deleniti est illum est i",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.693934231711687",
          "viewCounts": 0,
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [
              {
                  "id": 1,
                  "name": "root",
                  "email": "root@example.com",
                  "password": "$2a$10$wXsyGVxev3nf2zq2/40lM./bLZM2oXS6A7XCs5e40W/bRA1V4.58.",
                  "isAdmin": true,
                  "image": null,
                  "createdAt": "2021-12-29T15:47:04.000Z",
                  "updatedAt": "2021-12-29T15:47:04.000Z",
                  "Favorite": {
                      "UserId": 1,
                      "RestaurantId": 49,
                      "createdAt": "2022-01-02T15:04:30.000Z",
                      "updatedAt": "2022-01-02T15:04:30.000Z"
                  }
              }
          ],
          "isFavorited": true,
          "FavoriteCount": 1
      },
      {
          "id": 48,
          "name": "Mr. Arturo Paucek",
          "tel": "112.067.1948 x625",
          "address": "9234 Emery Villages",
          "opening_hours": "08:00",
          "description": "Iure nemo quia. Qui et sunt eligendi commodi. Rati",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.718698672658354",
          "viewCounts": 0,
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z",
          "CategoryId": 5,
          "FavoritedUsers": [
              {
                  "id": 1,
                  "name": "root",
                  "email": "root@example.com",
                  "password": "$2a$10$wXsyGVxev3nf2zq2/40lM./bLZM2oXS6A7XCs5e40W/bRA1V4.58.",
                  "isAdmin": true,
                  "image": null,
                  "createdAt": "2021-12-29T15:47:04.000Z",
                  "updatedAt": "2021-12-29T15:47:04.000Z",
                  "Favorite": {
                      "UserId": 1,
                      "RestaurantId": 48,
                      "createdAt": "2022-01-02T15:04:32.000Z",
                      "updatedAt": "2022-01-02T15:04:32.000Z"
                  }
              }
          ],
          "isFavorited": true,
          "FavoriteCount": 1
      },
      {
          "id": 3,
          "name": "Gregory Leuschke",
          "tel": "1-952-248-2124",
          "address": "56718 Raynor Stream",
          "opening_hours": "08:00",
          "description": "quidem",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.90046587878092",
          "viewCounts": 2,
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2022-01-03T02:45:11.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [
              {
                  "id": 1,
                  "name": "root",
                  "email": "root@example.com",
                  "password": "$2a$10$wXsyGVxev3nf2zq2/40lM./bLZM2oXS6A7XCs5e40W/bRA1V4.58.",
                  "isAdmin": true,
                  "image": null,
                  "createdAt": "2021-12-29T15:47:04.000Z",
                  "updatedAt": "2021-12-29T15:47:04.000Z",
                  "Favorite": {
                      "UserId": 1,
                      "RestaurantId": 3,
                      "createdAt": "2022-01-03T02:45:07.000Z",
                      "updatedAt": "2022-01-03T02:45:07.000Z"
                  }
              }
          ],
          "isFavorited": true,
          "FavoriteCount": 1
      },
      {
          "id": 1,
          "name": "Albert Gottlieb DVM",
          "tel": "747-225-7090",
          "address": "76818 Jerde Course",
          "opening_hours": "08:00",
          "description": "Officiis repellat repellendus reiciendis dolore es",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.83383915249684",
          "viewCounts": 7,
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2022-01-02T15:05:21.000Z",
          "CategoryId": 4,
          "FavoritedUsers": [
              {
                  "id": 1,
                  "name": "root",
                  "email": "root@example.com",
                  "password": "$2a$10$wXsyGVxev3nf2zq2/40lM./bLZM2oXS6A7XCs5e40W/bRA1V4.58.",
                  "isAdmin": true,
                  "image": null,
                  "createdAt": "2021-12-29T15:47:04.000Z",
                  "updatedAt": "2021-12-29T15:47:04.000Z",
                  "Favorite": {
                      "UserId": 1,
                      "RestaurantId": 1,
                      "createdAt": "2022-01-02T15:05:15.000Z",
                      "updatedAt": "2022-01-02T15:05:15.000Z"
                  }
              }
          ],
          "isFavorited": true,
          "FavoriteCount": 1
      },
      {
          "id": 50,
          "name": "Zula Keebler",
          "tel": "478.735.1638 x305",
          "address": "8441 Greenfelder Shores",
          "opening_hours": "08:00",
          "description": "sint reprehenderit non",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.774930924075883",
          "viewCounts": 0,
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z",
          "CategoryId": 1,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 47,
          "name": "Jarrell Wintheiser",
          "tel": "589.712.8946",
          "address": "748 Icie Port",
          "opening_hours": "08:00",
          "description": "Recusandae suscipit tempore. Et et aut. Non sint q",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.12624665534226",
          "viewCounts": 0,
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z",
          "CategoryId": 1,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 46,
          "name": "Caitlyn Rutherford",
          "tel": "1-882-010-8903 x2848",
          "address": "11700 Jamil Point",
          "opening_hours": "08:00",
          "description": "Quo in in facere optio. Ut aut molestiae dolorem d",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.52922369973324",
          "viewCounts": 0,
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z",
          "CategoryId": 1,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 45,
          "name": "Edna Torp",
          "tel": "1-907-647-6632",
          "address": "883 Jan Mission",
          "opening_hours": "08:00",
          "description": "Placeat earum pariatur at.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.32189006742713",
          "viewCounts": 0,
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z",
          "CategoryId": 5,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 44,
          "name": "Brennon Brown",
          "tel": "065-367-8904",
          "address": "62190 Rhiannon Mills",
          "opening_hours": "08:00",
          "description": "Enim rerum quia ullam quia temporibus veritatis ac",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.64972640250343",
          "viewCounts": 1,
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2022-01-02T15:04:24.000Z",
          "CategoryId": 3,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      },
      {
          "id": 43,
          "name": "Jose MacGyver",
          "tel": "630.070.5246 x898",
          "address": "82350 Elenora Ferry",
          "opening_hours": "08:00",
          "description": "facilis quam amet",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.33999683283712",
          "viewCounts": 0,
          "createdAt": "2021-12-29T15:47:04.000Z",
          "updatedAt": "2021-12-29T15:47:04.000Z",
          "CategoryId": 2,
          "FavoritedUsers": [],
          "isFavorited": false,
          "FavoriteCount": 0
      }
  ]
}

import NavTabs from './../components/NavTabs.vue'

export default {
  components: {
    NavTabs,
  },
  data () {
    return {
      topRestaurants: [] 
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {restaurants} = dummyData
      this.topRestaurants = restaurants
    }
  }
}
</script>
