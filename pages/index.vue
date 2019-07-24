<template>
  <div class="container">
    <div>
      <h1 class="title">
        DouglasGlover.ca
      </h1>
      <h2 class="subtitle">
        Currently under construction (July 2019)
      </h2>

      <p>In the meantime, feel free to reach out:</p>
      <form action="POST" netlify>
        <p>
          <label>Name: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Email: <input type="email" name="email"/></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script></script>

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
  border: 1px solid lightblue;
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
