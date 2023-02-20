<template>
  <div class="player-list">
    <div v-for="player in players" :key="player.id">
        <SinglePlayer :player="player" />
    </div>
  </div>
</template>

<script>

import SinglePlayer from './SinglePlayer.vue'


export default {
    props: ['players'],
    components: { SinglePlayer },
    setup() {

    }
}
</script>

<style>

</style>