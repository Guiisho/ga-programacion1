<template>
    <h3> Proyecto Final </h3>
    <HelloWorld msg="Aprobar programación is my passion"/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
