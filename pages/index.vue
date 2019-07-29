<template>
  <div class="container">
    <div>
      <h1 class="title">
        DouglasGlover.ca
      </h1>
      <h2 class="subtitle">
        Call me Doug
      </h2>
    </div>
  </div>
</template>

<script>
// Using Axios to get posts from CodePen
// import axios from 'axios'
// export default {
//   data() {
//     return {}
//   },
//   mounted() {
//     // This gets XML from my CodePen blogs feed and logs the first post to the console
//     let myPost;
//     axios
//       .get('https://codepen.io/DouglasGlover/posts/feed')
//       .then(response => {
//         const parseString = require('xml2js').parseString
//         const xml = response.data
//         // console.log(xml);
//         parseString(xml, (err, result) => {
//           if (!err) {
//             // Success
//             const firstPost = result.rss.channel[0].item[0];
//             myPost = firstPost.description[0];
//             console.log(myPost);
//           } else {
//             // Handle error
//             console.log(err)
//           }
//         })
//       })
//       .catch(err => console.log(err))
//   }
// }
</script>

<style lang="scss" scoped></style>
