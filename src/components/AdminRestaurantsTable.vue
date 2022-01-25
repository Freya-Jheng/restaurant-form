<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{name: 'admin-restaurant-edit',params:{
                id: restaurant.id,
            }}"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Albert Gottlieb DVM",
            "tel": "747-225-7090",
            "address": "76818 Jerde Course",
            "opening_hours": "08:00",
            "description": "Officiis repellat repellendus reiciendis dolore esse.\nIpsa culpa ducimus voluptatum tenetur.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.83383915249684",
            "viewCounts": 9,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2022-01-20T03:35:55.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 2,
            "name": "Quinten Lynch",
            "tel": "(620) 679-2296",
            "address": "08715 Maiya Ports",
            "opening_hours": "08:00",
            "description": "Consequatur fuga eaque sint dolorem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.26402706894967",
            "viewCounts": 3,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2022-01-20T03:22:53.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
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
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
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
            }
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
            }
        },
        {
            "id": 6,
            "name": "Savanna Yundt II",
            "tel": "1-353-307-9181 x521",
            "address": "8892 Kris Tunnel",
            "opening_hours": "08:00",
            "description": "Esse autem quo placeat optio facilis quas. Amet non ut enim et aliquam non. Reprehenderit ab corrupti recusandae fuga consequatur eos unde praesentium tenetur. Veniam quia accusantium ab ut.\n \rPraesentium sit deleniti doloribus laudantium placeat totam non et sequi. Consequatur ea quibusdam ut reprehenderit soluta blanditiis porro est saepe. Voluptas ad sunt nostrum quidem aut magni aut dolore. Quos quis a ut.\n \rAspernatur quo tempora deleniti eveniet repudiandae officia repudiandae eos quia. In consequatur nam ipsam facilis. Harum rerum non qui quaerat ab. Dolorum id hic in fugit commodi explicabo quis excepturi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.103129737629374",
            "viewCounts": 1,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2022-01-02T15:05:40.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 7,
            "name": "Roman McKenzie",
            "tel": "1-826-767-9120",
            "address": "31781 Loy Squares",
            "opening_hours": "08:00",
            "description": "Ea nihil vitae neque aut harum corporis sed sit modi.\nVoluptate explicabo veniam incidunt nemo suscipit ut repellat.\nUt non aut non.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.250841577141973",
            "viewCounts": 1,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2022-01-02T15:05:43.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 8,
            "name": "Eusebio Stanton",
            "tel": "674.908.3398 x6712",
            "address": "205 Jose Road",
            "opening_hours": "08:00",
            "description": "Accusantium doloremque accusantium nisi qui iste.\nVoluptatem accusantium eum et quia ut magnam.",
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
            }
        },
        {
            "id": 9,
            "name": "Jack Waelchi",
            "tel": "625-153-7894 x2483",
            "address": "2284 Gottlieb Inlet",
            "opening_hours": "08:00",
            "description": "Ullam non rerum quis qui iure et nam. Qui et aut. Quo eum sed. Voluptas dolor et sed ut soluta. Tempore rerum dolorum quo quo facere cum dolorem.",
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
            }
        },
        {
            "id": 10,
            "name": "Ahmed Russel",
            "tel": "889.435.7465 x8040",
            "address": "798 Kayla Spurs",
            "opening_hours": "08:00",
            "description": "Quasi eaque modi quos quod possimus voluptas possimus. Et omnis blanditiis sint. Et maiores voluptatum quos. Quidem unde accusamus expedita itaque similique voluptatibus saepe. Non cumque voluptas voluptas. Est ipsum consequatur.\n \rAut consequuntur accusamus eos. Et sequi ad modi nihil mollitia. Illo ducimus omnis reprehenderit eos ratione nisi doloremque. Vel iusto necessitatibus. Consequuntur voluptatum sunt molestiae. Ut officia sed sint cumque quia.\n \rVoluptatum tempora ut non dolorem quisquam velit quam. Rerum et porro reprehenderit tenetur sit nobis vel. Velit voluptate quasi. In illo et et reiciendis. Iste tenetur vel ea dolore reprehenderit blanditiis esse.",
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
            }
        },
        {
            "id": 11,
            "name": "Dana Howe",
            "tel": "(601) 579-7104 x11724",
            "address": "134 Dangelo Ville",
            "opening_hours": "08:00",
            "description": "Aut dolore tempore quidem tempora ipsa qui ea perspiciatis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.62007428022889",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 12,
            "name": "Janelle Lind",
            "tel": "1-610-235-4033 x63539",
            "address": "72006 Eichmann Lane",
            "opening_hours": "08:00",
            "description": "Molestiae harum voluptatibus quidem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.87674651916557",
            "viewCounts": 8,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2022-01-02T15:06:39.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 13,
            "name": "Peggie Wyman III",
            "tel": "949.651.1685",
            "address": "503 Gerda Stream",
            "opening_hours": "08:00",
            "description": "Eius quibusdam quis autem aperiam voluptates. Voluptatem eos tempore ex culpa. Quaerat dignissimos voluptatum praesentium dolores unde nihil numquam unde.\n \rMaiores fugit veritatis eveniet aliquam quibusdam. Est nam ut a qui ut sed. Corrupti quod et autem sint saepe.\n \rNesciunt adipisci consequatur corrupti tempora id pariatur. Omnis adipisci placeat veniam. Assumenda dolorum minus. Dolore atque qui dolorum quibusdam corporis deleniti aut sed exercitationem. Qui velit quas debitis qui nihil sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.779392198578284",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 14,
            "name": "Minerva King",
            "tel": "(873) 916-3565 x073",
            "address": "9942 Schmitt Prairie",
            "opening_hours": "08:00",
            "description": "Dolor et sunt excepturi mollitia non perferendis. Excepturi delectus animi ut. Voluptatem laborum ut commodi et nam rerum quia perspiciatis et. Sequi nostrum eaque quae tenetur quis eius et.\n \rVelit qui magnam explicabo. Qui ab commodi pariatur voluptas sapiente consequatur. Voluptas exercitationem eius vel at natus fugit fuga eius. Vitae et et sit placeat.\n \rDelectus pariatur at ipsam veritatis natus asperiores deserunt. Iure perferendis reprehenderit modi voluptatem officiis. Natus aut iste. Suscipit doloremque odio et quasi. Et amet est molestiae. Dolorem temporibus odio deleniti architecto corrupti voluptatem consequatur eius.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.28565286786426",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 15,
            "name": "Brandon Farrell",
            "tel": "702-732-2244",
            "address": "578 Paucek Lakes",
            "opening_hours": "08:00",
            "description": "Blanditiis molestiae necessitatibus. Officiis libero atque quos ut enim culpa. Et quibusdam quia beatae earum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.20220053275118",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 16,
            "name": "Dr. Aaron Ratke",
            "tel": "269-034-6508",
            "address": "9499 Elna Rest",
            "opening_hours": "08:00",
            "description": "Quod dolorem dolores explicabo veritatis aut voluptatem. Perspiciatis est placeat omnis est et. Hic ut optio dolor veniam. In magnam sapiente voluptatem omnis. Aut deserunt ut sapiente.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.66353385311639",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 17,
            "name": "Lambert Bailey",
            "tel": "593.020.6065",
            "address": "44589 Willms Views",
            "opening_hours": "08:00",
            "description": "Impedit distinctio et.\nDistinctio culpa omnis.\nEt fuga ut deleniti quasi debitis.\nQuae et possimus dolores veritatis eos in.\nQuia aliquam earum tempora neque vel.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.313786860798029",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 18,
            "name": "Myrtice Kozey",
            "tel": "(011) 970-2228 x9742",
            "address": "780 Amely Forest",
            "opening_hours": "08:00",
            "description": "Ex id enim nisi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.062032065632696",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 19,
            "name": "Mrs. Glen Corkery",
            "tel": "(005) 955-2033",
            "address": "64787 Darren Pass",
            "opening_hours": "08:00",
            "description": "Laudantium eveniet non quo tempore.\nConsequuntur vero culpa natus eum quaerat vel fugiat autem ipsam.\nSapiente voluptatum minima voluptatem dolores et.\nReprehenderit ducimus vel iste blanditiis quo magni sequi excepturi.\nFuga quo at voluptas sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.43441101586495",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 20,
            "name": "Jamaal Langosh",
            "tel": "715.186.9709 x5411",
            "address": "1360 Goldner Isle",
            "opening_hours": "08:00",
            "description": "facilis molestias asperiores",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.040394741023324",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 21,
            "name": "Keanu Purdy II",
            "tel": "267-034-3653 x66768",
            "address": "99966 Ramona Loaf",
            "opening_hours": "08:00",
            "description": "Et earum dicta ea at. Accusantium ipsam repellendus facilis. Eos commodi nesciunt totam deserunt cumque dignissimos minus nobis provident.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.02852191154406",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 22,
            "name": "Elmer Crooks",
            "tel": "790.063.2112 x71081",
            "address": "11584 Laura Mountains",
            "opening_hours": "08:00",
            "description": "Debitis et voluptas minima.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.366199965468928",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 23,
            "name": "Rex Rohan",
            "tel": "(556) 685-2522 x75709",
            "address": "113 Julio Ridges",
            "opening_hours": "08:00",
            "description": "et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.01621845776669",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 24,
            "name": "Miss Colt Bernier",
            "tel": "1-481-728-4682 x922",
            "address": "52192 Kling Mews",
            "opening_hours": "08:00",
            "description": "nihil",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.52864217367896",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 25,
            "name": "Toni Kilback",
            "tel": "587.605.6494",
            "address": "818 Lenora Drive",
            "opening_hours": "08:00",
            "description": "enim deserunt sed",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.288359755387326",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 26,
            "name": "Kristina Raynor",
            "tel": "(003) 218-8689",
            "address": "27262 Kenna Centers",
            "opening_hours": "08:00",
            "description": "Aut ut repellat dolorem quo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.20734070200365",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 27,
            "name": "Deion Roob",
            "tel": "418.101.9984 x40889",
            "address": "498 Torrance Cove",
            "opening_hours": "08:00",
            "description": "Veritatis molestias ea. Dicta est recusandae. Minima consequatur reprehenderit eaque. Laudantium sit facilis et necessitatibus praesentium autem est voluptatum. Dignissimos fugiat libero quos rem doloremque. Eveniet delectus tenetur ut qui placeat veniam praesentium.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.45113723014625",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 28,
            "name": "Ron Flatley",
            "tel": "1-683-967-5261 x582",
            "address": "91610 Gleichner Fords",
            "opening_hours": "08:00",
            "description": "Natus eligendi et cum dolorum inventore sit rerum reiciendis. Ducimus est et eveniet voluptatum. Repudiandae dolores ea eaque.\n \rConsequatur dolor ad odit eius autem et. Et dicta nisi voluptas. Esse vel necessitatibus. Asperiores et ut facilis aut exercitationem.\n \rSoluta accusantium quia nulla ab quis et natus aut nulla. Et et non voluptate. Minus non quo necessitatibus velit non quaerat enim. Vitae enim in. Sunt exercitationem aliquam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.7018484839375",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 29,
            "name": "Marquise Wisoky",
            "tel": "(380) 815-0318 x54597",
            "address": "99514 Emard Circle",
            "opening_hours": "08:00",
            "description": "Laboriosam dignissimos enim sint quibusdam expedita. Deserunt vero est. Quos ut laborum nesciunt ea quia beatae.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.25986144667999",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 30,
            "name": "Vincenzo Schmitt",
            "tel": "(615) 161-6275 x839",
            "address": "828 Greta Rapids",
            "opening_hours": "08:00",
            "description": "Quaerat ea ab amet est fuga necessitatibus nisi non numquam.\nFugiat aspernatur et repudiandae esse rem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.99617542962037",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 31,
            "name": "Clark Leuschke PhD",
            "tel": "089-033-5089",
            "address": "25586 Sanford Cliffs",
            "opening_hours": "08:00",
            "description": "Sequi velit repellat recusandae ut quaerat provident et modi quia. Rerum dolorem illum eos quas est libero tempora et in. Cum sed debitis culpa praesentium eum dignissimos esse non. Tempore voluptatem fugiat ut quo non ut ea.\n \rQuis soluta sit veniam ab facilis enim molestiae at. Libero rerum et eum ea cum vel ea aliquid quibusdam. Harum aut perspiciatis in ut occaecati. Minima excepturi et rerum commodi. Sint quis iste dolorum placeat consectetur ab at.\n \rAut vel voluptatum eos est. Placeat quasi architecto. Assumenda sunt non neque provident reiciendis error accusamus cumque.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.94820360925133",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 32,
            "name": "Willis Murazik",
            "tel": "(318) 356-7533",
            "address": "2419 Jackie Parks",
            "opening_hours": "08:00",
            "description": "Sed placeat id. Rerum delectus amet repellendus eius fugit fugiat non saepe. Molestias maxime officiis animi.\n \rMinima nobis repellat quasi a. Repudiandae illum commodi odit quod iste nemo. Excepturi enim repellat autem ut sit veritatis. Perspiciatis exercitationem quia nulla quisquam vel omnis quam molestiae nisi.\n \rIllo quis magnam minima. Et nisi in ex rerum ut mollitia vel qui voluptas. Aliquid ut consequatur deserunt sequi ab quaerat numquam. Repellat fugit ea quidem occaecati dolore ut enim commodi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.75068438773935",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 33,
            "name": "Ms. Wiley Sporer",
            "tel": "1-037-057-0409",
            "address": "0806 Kunde Village",
            "opening_hours": "08:00",
            "description": "Possimus et doloribus unde veniam. Tempore sit quod. Dignissimos earum sed similique ut. Ipsa natus perspiciatis consequatur in voluptatem eos voluptatum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.03362127767427",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 34,
            "name": "Liam Kohler",
            "tel": "(315) 511-8576",
            "address": "77575 Lesch Way",
            "opening_hours": "08:00",
            "description": "Molestiae ex ut a explicabo qui. Velit consequatur inventore aut dolorem esse quos animi excepturi. Sint doloremque eaque dicta cumque. Asperiores consequuntur esse officiis et. Eum quis magnam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.915625893455224",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 35,
            "name": "Ashtyn Brekke",
            "tel": "(479) 900-9860",
            "address": "146 Lavon Estate",
            "opening_hours": "08:00",
            "description": "Commodi sint ipsam est fugit quis soluta. Et debitis dolorum non et. Ad quod eum quisquam optio magni nesciunt.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.48361443029469",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 36,
            "name": "Christopher Bosco",
            "tel": "422-081-5370 x140",
            "address": "40989 Schmeler Plains",
            "opening_hours": "08:00",
            "description": "Modi dolor accusamus vitae eligendi laborum cum. Ut enim dicta quia asperiores nihil. Culpa eligendi dolorum doloribus et consequatur dolore quia maxime. Ab porro veniam assumenda.\n \rIncidunt sed voluptas tempore. Sed reiciendis voluptas molestias distinctio sequi non quibusdam alias. Neque quos et quis est debitis modi voluptatem blanditiis.\n \rAmet error provident veritatis molestiae esse. Et assumenda earum omnis. Maiores temporibus rerum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.8220064868054",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 37,
            "name": "Mauricio Hoppe",
            "tel": "792-924-0667 x7519",
            "address": "169 Dexter Village",
            "opening_hours": "08:00",
            "description": "Laboriosam nisi molestias omnis quia maiores rerum placeat.\nIncidunt blanditiis porro placeat ea vel omnis saepe.\nAliquid porro culpa eaque ratione qui sit et maxime temporibus.\nDolorem repellendus quod dolor voluptatem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.5320641552709633",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 38,
            "name": "Kolby Bruen",
            "tel": "446-947-5766",
            "address": "93013 White Street",
            "opening_hours": "08:00",
            "description": "Voluptas aut harum dolor dolor omnis voluptatem quis debitis.\nVoluptas earum eum veritatis ipsum.\nAutem exercitationem aliquam perferendis sit aut officiis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.59495820047322",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 39,
            "name": "Carey Kirlin",
            "tel": "(263) 567-3048 x493",
            "address": "27347 Maureen Mission",
            "opening_hours": "08:00",
            "description": "Nesciunt provident inventore commodi repellendus quis ipsum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.947197784842157",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 40,
            "name": "Kian Conroy",
            "tel": "(602) 987-4040 x1034",
            "address": "50430 Reilly Club",
            "opening_hours": "08:00",
            "description": "Non error sint non fugit animi.\nNam corrupti laudantium deserunt quo ex sequi tenetur vel.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.51728117650774",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 41,
            "name": "Immanuel Boyer",
            "tel": "(800) 577-0640",
            "address": "774 Cormier Fields",
            "opening_hours": "08:00",
            "description": "Harum et rerum omnis possimus ea. Labore rem laboriosam facilis dolor officia et aut veritatis tenetur. Minus eaque saepe suscipit placeat explicabo et repudiandae quis. Itaque maiores error nostrum sit similique iste vero. Molestias consequatur quam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.8171150478876",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 42,
            "name": "Irwin Kuvalis DDS",
            "tel": "(832) 497-4410 x6107",
            "address": "043 Clarissa Orchard",
            "opening_hours": "08:00",
            "description": "Vero et error et debitis aliquid quidem omnis quo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.026154705759155",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
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
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 44,
            "name": "Brennon Brown",
            "tel": "065-367-8904",
            "address": "62190 Rhiannon Mills",
            "opening_hours": "08:00",
            "description": "Enim rerum quia ullam quia temporibus veritatis accusamus harum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.64972640250343",
            "viewCounts": 1,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2022-01-02T15:04:24.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
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
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 46,
            "name": "Caitlyn Rutherford",
            "tel": "1-882-010-8903 x2848",
            "address": "11700 Jamil Point",
            "opening_hours": "08:00",
            "description": "Quo in in facere optio. Ut aut molestiae dolorem deserunt quia fugit facilis aut aut. Excepturi ut blanditiis quibusdam vel voluptate tenetur nemo. Vero natus voluptatem est est id. Recusandae et quo ut dolores et ex odio. Aliquam excepturi hic officiis aliquid voluptas eligendi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.52922369973324",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 47,
            "name": "Jarrell Wintheiser",
            "tel": "589.712.8946",
            "address": "748 Icie Port",
            "opening_hours": "08:00",
            "description": "Recusandae suscipit tempore. Et et aut. Non sint quia.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.12624665534226",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 48,
            "name": "Mr. Arturo Paucek",
            "tel": "112.067.1948 x625",
            "address": "9234 Emery Villages",
            "opening_hours": "08:00",
            "description": "Iure nemo quia. Qui et sunt eligendi commodi. Ratione voluptatibus et iure aut magni temporibus sed. Quia assumenda libero provident. Consequatur et deleniti incidunt.\n \rLaudantium quas et nam sapiente quo rerum sed occaecati vel. Dolores voluptas dolores voluptates sint temporibus. Aliquid reprehenderit quia sint dignissimos nulla at. Animi itaque et ab rerum soluta autem minima iure. Magni et repellat voluptatem repudiandae.\n \rIpsum quod quia nam autem doloribus eveniet consectetur voluptatibus labore. Dolorem qui aliquid voluptas necessitatibus ipsum. Autem ut quia ea consequatur.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.718698672658354",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        },
        {
            "id": 49,
            "name": "Destini Cartwright",
            "tel": "1-951-849-1379",
            "address": "8322 Osborne Gateway",
            "opening_hours": "08:00",
            "description": "Maxime vel consequatur ut deleniti est illum est illo. Et non consequatur ipsam eius accusamus qui quod voluptatem rerum. Esse qui ex sint eaque ex. Ipsum ipsum ratione molestias velit numquam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.693934231711687",
            "viewCounts": 0,
            "createdAt": "2021-12-29T15:47:04.000Z",
            "updatedAt": "2021-12-29T15:47:04.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
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
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-12-29T15:47:04.000Z",
                "updatedAt": "2021-12-29T15:47:04.000Z"
            }
        }
    ]
}

export default {
  data () {
    return {
      restaurants: [],
    }
  },
  created () {
    this.fetchAdminRestaurants()
  },
  methods: {
    fetchAdminRestaurants () {
      const {restaurants} = dummyData
      this.restaurants = restaurants
    },
    deleteRestaurant(restaurantId) {
        this.restaurants = this.restaurants.filter( restaurant => restaurant.id !== restaurantId )
        console.log('toggole function: deleteRestaurant')
    }
  }
}




</script>