<template>
  <div class="post">
    <h3>{{ player.firstName }} {{player.lastName }}</h3>
  </div>
</template>

<script>

export default {
    props: ['player'],
    setup(props) {
        
    }
}
</script>

<style>

</style>