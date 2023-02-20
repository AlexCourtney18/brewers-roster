<template>
  <div class="player">
    <h3>{{ player.firstName }} {{player.lastName }}</h3>
    <img :src="player.picture" alt="" @click="handleClick">
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