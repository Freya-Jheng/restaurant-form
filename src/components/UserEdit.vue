<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img v-if="image" :src="image" class="image d-block img-thumbnail mb-3" style="width: 90px; height: 90px;">
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          v-model="email"
          id="email"
          type="text"
          name="email"
          class="form-control"
          placeholder="Enter Email"
          required
        >
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          type="text"
          name="password"
          class="form-control"
          placeholder="Enter Password"
          required
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import userAPI from './../apis/users'
// import { Toast } from './../utilities/helpers'

export default {
  data () {
    return {
      id: 0,
      name: '',
      email: ' ',
      password: '',
      image: '',
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser(userId){
      if (userId === -1) return
      const {id} = this.$route.params
      this.setUser(id)
    }
  },
  created(){
    if (this.currentUser.id === -1) return
    const {id} = this.$route.params
    this.setUser(id)
  },
  methods: {
    setUser (userId) {
        const { id, name, email, image, password} = this.currentUser
        console.log(userId, id)
        console.log(this.currentUser)
        // 在這裏console.log出來id 跟 userId兩者，同樣的名字但是id卻是不一樣的，是否為後端資料有被更動？
        // if (id.toString() !== userId.toString()) {
        //   this.$router.push({ name: 'not-found' })
        //   return
        // }

        this.id = id,
        this.name = name,
        this.email = email,
        this.password = password,
        this.image = image
    },
    handleSubmit(e){
      const form = e.target
      const formData = new FormData(form)
      for(let[name, value]of formData){
        console.log(name + ":" + value)
      }
      console.log('Data from UserEdit', formData)
    },
    handleFileChange(e) {
      const files = e.target.files
      if (files.length === 0) {
        this.userData.image = ''
      } else if(files.length > 0) {
        const fileURL = window.URL.createObjectURL(files[0])
        this.userData.image = fileURL
      }
    }
  }
}
</script>
