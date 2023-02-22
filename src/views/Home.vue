<template>
  <div class="home">
    <h1>Milwaukee Brewers 2022 Roster</h1>
    <br/>
    <div>
      <h2>Search By Position:</h2>
      <button v-for="position in positions" :key="position.id" @click="handleClick($event)" ref="p">
        {{ position.id }}
      </button>
    </div>
    <br/>
    <div v-if="players.length">
      <PlayerList :players="players" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import PlayerList from "../components/PlayerList.vue";
import getPlayers from "../composables/getPlayers";

export default {
  // data() {
  //   return {
  //     positions: [{ id: "P" }, { id: "C" }, { id: "1B" }, { id: "2B" }, { id: "SS" }, { id: "3B" }, { id: "LF" }, { id: "CF" }, { id: "RF" },],
  //   };
  // },
  name: "Home",
  components: { PlayerList },
  setup() {
    const { players, error, load } = getPlayers();

    load();

    const p = ref(null)

    let positions= [{ id: "P" }, { id: "C" }, { id: "1B" }, { id: "2B" }, { id: "SS" }, { id: "3B" }, { id: "LF" }, { id: "CF" }, { id: "RF" },]

    const handleClick = (e) => {
      
      const buttonValue = e.target.innerHTML
      console.log(buttonValue)
    }

    return { players, error, handleClick, positions, p };
  },
};
</script>
