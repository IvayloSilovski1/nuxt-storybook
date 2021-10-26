<template>
  <div>
    <b-button class="button" @click="clickMe">Click Me</b-button>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    methods: {
      clickMe() {
          this.$buefy.notification.open('Clicked!!')
      }
    }
  }
</script>
