<template>
  <div class="player">
    <router-link style="text-decoration: none;" :to="{ name: 'Details', params: { id: player.id }}" >
      <div class="playerName">
        <h3>{{ player.firstName }} {{player.lastName }}</h3>
      </div>
    </router-link>
    
    <img :src="player.picture" alt="brewers player" @click="handleClick">
  </div>
</template>

<script>

export default {
    props: ['player'],
    setup(props) {
       
       const handleClick = () => {
        console.log(props.player.id, 'clicked')
       }

        return { handleClick }
    }
}
</script>

<style>

</style>