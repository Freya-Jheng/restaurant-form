<template>
  <form @submit.stop.prevent="handleSubmit" v-show="!isLoading">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        v-model="restaurant.name"
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        v-model="restaurant.categoryId"
        id="categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        v-model="restaurant.tel"
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        v-model="restaurant.address"
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        v-model="restaurant.openingHours"
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        v-model="restaurant.description"
        id="description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        width="200"
        height="200"
        class="d-block img-thumbnail mb-3"
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary" :disabled="isProcessing">
      {{ isProcessing ? "處理中..." : "送出" }}
    </button>
  </form>
</template>



<script>
import { Toast } from "./../utilities/helpers";
import adminAPI from "./../apis/admin";

export default {
  props: {
    initialRestaurant: {
      type: Object,
      // 這裡因為資料不是必須且需要設定為預設值（因為是修改完的狀態）
      default: () => ({
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      }),
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      restaurant: {
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      categories: [],
      isLoading: true,
    };
  },
  watch: {
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  created() {
    this.fetchRestaurant();
  },
  methods: {
    async fetchRestaurant() {
      try {
        const { data } = await adminAPI.categories.get();
        console.log("categories", this.dummyData, data);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.categories = data.categories;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = true;
        Toast.fire({
          icon: "error",
          title: "無法成功取得餐廳類別，請稍等！",
        });
      }
    },
    handleFileChange(e) {
      // const files = e.target.files
      const { files } = e.target;

      if (files.length === 0) {
        this.restaurant.image = "";
      } else if (files.length > 0) {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      }
    },
    handleSubmit(e) {
      if (!this.restaurant.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫餐廳名稱！",
        });
        return;
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: "warning",
          title: "請選擇餐廳類別！",
        });
        return;
      }

      const form = e.target;
      const formData = new FormData(form);
      console.log("data from AdminRestForm", formData);
      this.$emit("after-submit", formData);
    },
  },
};
</script>
