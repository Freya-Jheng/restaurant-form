<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit"/>
  </div>
</template>

<script>


import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

export default {
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit(formData){
      //  在這裡要將傳回來的formData傳到伺服器上去，但因為目前我們尚未連結API，因此先沒有這個操作
      for (let[name, value] of formData.entries()) {
        console.log(name + ':' + value)
      }
    } 
  }
}
</script>
