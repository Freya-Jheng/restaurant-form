<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
        <!-- required 為瀏覽器預先設定，容易被破解 -->
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from ".././apis/authorization";
import { Toast } from ".././utilities/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
      isAuthorized: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "Wrong email and password !",
          });
          return;
        }
        // 在按下submit後，先將處理狀態改為true
        this.isProcessing = true;
        // TODO: 向後端驗證使用者登入資訊是否合法
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        })
        const { data } = response;
        if (data.status != "success") {
          throw new Error(data.message);
        }
        this.isAuthorized = true
        localStorage.setItem("token", data.token);
        this.$router.push("/restaurants");
      } catch (error) {
        this.isAuthorized = false
        this.password = "";
        // 因為登錄失敗，因此需要將isProcessing狀態改回來
        this.isProcessing = false;

        // show warning
        Toast.fire({
          icon: "warning",
          title: "Wrong email and password !",
        });
        
        console.log("error", error);
      }
    },
  },
};
</script>