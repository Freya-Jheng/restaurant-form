<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px; margin-bottom: 25px"
        />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utilities/mixins";
import { Toast } from "./../utilities/helpers";
import adminAPI from "./../apis/admin";

export default {
  mixins: [emptyImageFilter],
  name: "AdminRestaurant",
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
      },
    };
  },
  mounted() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate (to, from, next) {
    const {id} = to.params
    this.fetchRestaurant(id)
    console.log(from)
    next ()
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const {data} = await adminAPI.restaurants.getDetail({restaurantId})
        console.log('unit',data)

        if (data.status === 'error') {
          throw new Error (data.message)
        }

        const {
          id,
          name,
          Category: category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
        } = data.restaurant

        const {categoryName} = category.name

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName,
          image,
          openingHours,
          tel,
          address,
          description,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法成功顯示餐廳個案！",
        });
      }
    },
  },
};
</script>
