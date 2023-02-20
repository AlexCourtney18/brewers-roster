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
        } else if (player.value.primaryPosition === "C") {
            position.value = "Catcher"
        } else if (player.value.primaryPosition === "1B") {
            position.value = "First Base"
        } else if (player.value.primaryPosition === "2B") {
            position.value = "Second Base"
        } else if (player.value.primaryPosition === "SS") {
            position.value = "Shortstop"
        } else if (player.value.primaryPosition === "3B") {
            position.value = "Third Base"
        } else if (player.value.primaryPosition === "LF") {
            position.value = "Left Field"
        } else if (player.value.primaryPosition === "CF") {
            position.value = "Center Field"
        } else if (player.value.primaryPosition === "RF") {
            position.value = "Right Field"
        } 

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