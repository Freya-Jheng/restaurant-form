<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <UsersCard v-for="user in users" :key="user.id" :initial-user="user"/>
    </div>
  </div>
</template>

<script>
const dummyData = {
  "users": [
    {
      "id": 1,
      "name": "root",
      "email": "root@example.com",
      "password": "$2a$10$wXsyGVxev3nf2zq2/40lM./bLZM2oXS6A7XCs5e40W/bRA1V4.58.",
      "isAdmin": true,
      "image": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Sunglasses&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Black",
      "createdAt": "2021-12-29T15:47:04.000Z",
      "updatedAt": "2021-12-29T15:47:04.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 2,
      "name": "user1",
      "email": "user1@example.com",
      "password": "$2a$10$gjUFXuaSmM3c/LGWVXPfFOXWbVdyvvQOOBPOd7BxRTlBc9pYXJvPy",
      "isAdmin": false,
      "image": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Prescription01&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=GraphicShirt&clotheColor=Blue02&graphicType=Skull&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Light",
      "createdAt": "2021-12-29T15:47:04.000Z",
      "updatedAt": "2021-12-29T15:47:04.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 3,
      "name": "user2",
      "email": "user2@example.com",
      "password": "$2a$10$ht637wTD5MbNfDCBaUhX7e4OGv9SsBaXT7Y51l8eZ9dcFDgqe2/xu",
      "isAdmin": false,
      "image": "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Round&hatColor=PastelRed&hairColor=Platinum&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=DarkBrown",
      "createdAt": "2021-12-29T15:47:04.000Z",
      "updatedAt": "2021-12-29T15:47:04.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    }
  ]
}

import NavTabs from './../components/NavTabs.vue'
import UsersCard from './../components/UsersCard.vue'

export default {
  components: {
    NavTabs,
    UsersCard,
  },
  data () {
    return {
      users: [],
    }
  },
  created(){
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      const {users} = dummyData 
      this.users = users
    }
  }
}
</script>
