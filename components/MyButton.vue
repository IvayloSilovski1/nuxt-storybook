<template>
  <div>
    <b-button :size="btnSize" class="button" @click="clickMe">Click Me</b-button>
  </div>
</template>

<script>
  export default {
    name: 'MyButton',
    props: {
      size: {
        type: String,
        required: false,
        default: 'is-small'
      }
    },
    computed: {
      btnSize(){
        console.log('Size:',this.size)
        return this.size
      }
    },
    methods: {
      clickMe() {
          this.$buefy.notification.open('Clicked!!')
      }
    }
  }
</script>
