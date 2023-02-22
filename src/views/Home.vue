<template>
  <div class="home">
    <h1>Milwaukee Brewers 2022 Roster</h1>
    <br/>
    <div>
      <h2>Filter By Position:</h2>
      <button v-for="position in positions" :key="position" @click="filterPosition($event)">
        {{ position }}
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
import { ref, computed } from 'vue';
import PlayerList from "../components/PlayerList.vue";
import getPlayers from "../composables/getPlayers";

export default {
  name: "Home",
  components: { PlayerList },
  setup() {
    const { players, error, load } = getPlayers();
    

    load();

    const displayedPlayers = ref(players.value)
    //console.log(displayedPlayers.value)


    const positions= ref(["P", "C", "1B", "2B", "SS", "3B", "LF", "CF", "RF"])
    const activeFilter = ref('All')
    // console.log(activeFilter.value, 'activeFilter ON LOAD')

    const filterPosition = (e) => {
      activeFilter.value = e.target.innerHTML;
      console.log(activeFilter.value, 'activeFilter')
      console.log(players.value)

      const getPositions = computed(() => {
       if (activeFilter.value === 'All') {
         return players
       }
       return players.value.filter((player) => player.primaryPosition === activeFilter.value);
     });

      console.log(getPositions.value)
      return getPositions

    } 


    return { players, error, positions, activeFilter, filterPosition };
  },
};
</script>
