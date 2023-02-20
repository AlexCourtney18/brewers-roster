<template>
  <div class="home">
    <h1>Milwaukee Brewers 2022 Roster</h1>
    <div v-if="players.length">
      <PlayerList :players="players" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PlayerList from '../components/PlayerList.vue'
import getPlayers from '../composables/getPlayers'

export default {
  name: 'Home',
  components: { PlayerList },
  setup () {
    const { players, error, load } = getPlayers()

    load()


    return { players, error}
  },
}
</script>
