<template>
  <nav>
    <router-link to="/">Home</router-link>
  
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkblue;
  background: #eee;
}

nav {
  padding: 30px;
}

nav a, button {
  font-weight: bold;
  color: #ffe156;
  background: #3777FF;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

.playerName {
  font-weight: bold;
  color: #ffe156;
  background: #3777FF;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  max-width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
.active {
  background: #ffe156;
  color: #3777FF;
}
</style>
