<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import { Toast } from "./../utilities/helpers";
import restaurantsAPI from "./../apis/restaurants";

export default {
  name: "CreateComment",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // 如果什麼都沒有輸入的話，請return並跳出警告
        if (!this.text) {
          Toast.fire ({
            icon: 'warning',
            title: '請確認填寫留言！'
          })
        }

        const {data} = await restaurantsAPI.createComments({
          restaurantId: this.restaurantId,
          text: this.text
        })
        console.log('createComment', data)

        if (data.status === 'error') {
          throw new Error (data.message)
          // console.log('error')
        }

        // 將資料回傳給父層
        this.$emit('after-create-comment', {
          commentId: data.commentId,
          restaurantsAPI: this.restaurantId,
          text: this.text
        })

        // 新增留言後，清空留言區
        this.text = ''
        Toast.fire({
          icon: 'success',
          title: '成功新增留言！'
        })
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法成功新增留言！",
        });
      }
    },
  },
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
};
</script>
