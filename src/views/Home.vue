<template>
  <div class="home">
    <h1>Milwaukee Brewers 2022 Roster</h1>
    <br/>
    <div>
      <h2>Filter By Position:</h2>
      <button v-for="position in positions" :key="position" @click="filterPosition($event)" :class="{ active:  position  === activeFilter }">
        {{ position }}
      </button>
    </div>
    <br/>
    <div v-if="players.length">
      <PlayerList :players="getPositions" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import PlayerList from "../components/PlayerList.vue";
import getPlayers from "../composables/getPlayers";

export default {
  name: "Home",
  components: { PlayerList },
  setup() {
    const { players, error, load } = getPlayers();
    
    load();

    const positions= ref(["All", "P", "C", "1B", "2B", "SS", "3B", "LF", "CF", "RF"])
    const activeFilter = ref('All')

    const getPositions = computed(() => {
       if (activeFilter.value === 'All') {
         return players.value.filter((player) => player.primaryPosition === "P" || "C" )
       }
       return players.value.filter((player) => player.primaryPosition === activeFilter.value);
     });

    const filterPosition = (e) => {
      activeFilter.value = e.target.innerHTML;
      return getPositions
    } 


    return { players, error, positions, activeFilter, filterPosition, getPositions };
  },
};
</script>
