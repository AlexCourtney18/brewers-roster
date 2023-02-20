<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="player" class="player">
    <h1>{{ player.firstName }} {{ player.lastName }}</h1>
    <h2>Position: {{ player.primaryPosition }}</h2>
    <img :src="player.picture" alt="" @click="handleClick" />
    <ul>
      <li>Bats {{ player.batSide }}</li>
      <li>Throws {{ player.throwSide }}</li>
      <li>Wears Number # {{ player.number }}</li>
      <li>
        Born In {{ player.birthCity }}, {{ player.birthStateProvince }} -
        {{ player.birthCountry }}
      </li>
    </ul>
  </div>
</template>

<script>
import getPlayer from "../composables/getPlayer";

export default {
  props: ["id"],
  setup(props) {
    const { player, error, load } = getPlayer(props.id);

    load();

    return { player, error };
  },
};
</script>

<style>
p,
h3,
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  color: #ffe156;
  background: #3777ff;
  margin: 10px auto;
  padding: 10px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  max-width: 100%;
}
</style>