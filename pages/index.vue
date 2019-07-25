<template>
  <div class="container">
    <div>
      <h1 class="title">
        Douglas Glover
      </h1>
      <h2 class="subtitle">
        Call me Doug
      </h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {}
  },
  mounted() {
    // This gets XML from my CodePen blogs feed and logs the first post to the console
    let myPost;
    axios
      .get('https://codepen.io/DouglasGlover/posts/feed')
      .then(response => {
        const parseString = require('xml2js').parseString
        const xml = response.data
        // console.log(xml);
        parseString(xml, (err, result) => {
          if (!err) {
            // Success
            const firstPost = result.rss.channel[0].item[0];
            myPost = firstPost.description[0];
            console.log(myPost);
          } else {
            // Handle error
            console.log(err)
          }
        })
      })
      .catch(err => console.log(err))
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 5vw;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 2.5vw;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

form {
  display: block;
  margin: 10px auto;
  max-width: 100%;
  padding: 10px;
  text-align: left;
  transition: 0.25s ease;
}

form:focus-within,
form:hover {
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.25);
}

input,
textarea {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

input {
  height: 2em;
}

textarea {
  height: 8em;
}

button {
  display: block;
  margin: 0 auto;
  background: lightseagreen;
  border: none;
  color: white;
  padding: 1em 3em;
  font-weight: bold;
  cursor: pointer;
}

@media (max-width: 700px) {
  .title {
    font-size: 10vw;
  }

  .subtitle {
    font-size: 5vw;
  }
}
</style>
