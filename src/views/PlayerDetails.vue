<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="player" class="player">
    <h1>{{ player.firstName }} {{ player.lastName }}</h1>
    <h2>Position {{ player.primaryPosition }}</h2>
    <img :src="player.picture" alt="" @click="handleClick">
    <ul>
        <li>Bats {{ player.batSide }}</li>
        <li>Throws {{ player.throwSide }}</li>
        <li>Wears Number # {{ player.number }}</li>
        <li>Born In {{ player.birthCity }}, {{ player.birthStateProvince}} - {{ player.birthCountry }} </li>
    </ul>
  </div>
</template>

<script>
import getPlayer from "../composables/getPlayer";

export default {
  props: ['id'],
  setup(props) {
    const { player, error, load } = getPlayer(props.id);

    load();

    return { player, error };
  },
};
</script>

<style>
</style>