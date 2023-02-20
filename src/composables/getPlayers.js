import { ref } from 'vue'

const getPlayers = () => {
    const players = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/players')
        if (!data.ok) {
          throw Error('no data available')
        }
        players.value = await data.json()
        console.log(players)
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { players, error, load }
}


export default getPlayers