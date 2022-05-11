<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard :user-profile="userProfile" :followings="followings"
    :initial-followed="isFollowed" />
    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingCard :user-followings="followings" />
        <!-- UserFollowersCard -->
        <UserFollowerCard :user-followers="followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :user-comments="userComments" />
        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard
          :favorited-comments="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingCard from "../components/UserFollowingCard.vue";
import UserFollowerCard from "../components/UserFollowerCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
// import { mapStage } from "vuex";
import userAPI from "./../apis/users";
import { Toast } from "./../utilities/helpers";
import { mapState } from 'vuex';

export default {
  components: {
    UserProfileCard,
    UserFollowingCard,
    UserFollowerCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      userProfile: {
        id: 0,
        image: "",
        name: "",
        email: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      userComments: [],
      favoritedRestaurants: [],
      followings: [],
      followers: [],
      isFollowed: false,
    };
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const {data} = await userAPI.get({userId})

        if (data.status === 'error') {
          throw new Error (data.message)
        }
        const {profile, isFollowed} = data
        const { 
          id,
          name,
          email,
          image,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants
        } = profile

        this.userProfile= {
          ...this.userProfile,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
        }
        this.userComments = Comments.filter (
          comment => comment.Restaurant
        )
        this.favoritedRestaurants = FavoritedRestaurants,
        this.followings = Followings
        this.followers = Followers
        this.isFollowed = isFollowed
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法成功載入使用者！",
        });
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    const {id} = to.params
    this.fetchUser(id)
    next ()
  }
};
</script>