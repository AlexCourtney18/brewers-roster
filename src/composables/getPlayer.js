import { ref } from 'vue'

const getPlayer = (id) => {
    const player = ref([])
    const error = ref(null)
    const position = ref(null)
    const bats = ref(null)
    const throws = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/players/' + id)
        if (!data.ok) {
          throw Error('no data available')
        }
        player.value = await data.json()
        if (player.value.primaryPosition === "P") {
            position.value = "Pitcher"
        } else position.value = player.value.primaryPosition

        if (player.value.batSide === "R") {
            bats.value = "Right"
        } else if (player.value.batSide === "L") {
            bats.value = "Left"
        }

        if (player.value.throwSide === "L") {
            throws.value = "Left"
        } else if (player.value.throwSide === "R") {
            throws.value = "Right"
        }
        
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    

    return { player, error, position, bats, throws, load }
}


export default getPlayer