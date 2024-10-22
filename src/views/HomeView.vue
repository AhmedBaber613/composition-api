<template>
  <h1>Home</h1>
  <div class="home">
    <p ref="p">
      my name is {{ name }} my age is {{ age }}
    </p>

    <button @click="clickMe">ClickMe :D</button>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    console.log('setup')

    const name = ref('mario')
    const age = ref(30)

    const p = ref(null)

    const clickMe = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      name.value = 'luigi'
    }

    return { name, age, clickMe, p }
  }
}
</script>
