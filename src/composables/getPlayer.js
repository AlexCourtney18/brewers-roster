import { ref } from 'vue'

const getPlayer = () => {
    const player = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/players' + id)
        if (!data.ok) {
          throw Error('no data available')
        }
        player.value = await data.json()
        console.log(player)
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { player, error, load }
}


export default getPlayer