<template>
  <b-button :size="btnSize" @click="onClick" >{{ label }}</b-button>
</template>

<script>

import "../assets/main.scss";

export default {
  name: 'Button',

  props: {
    label: {
      type: String,
      required: false,
      default: 'Button'
    },
    size: {
      type: String,
      default: 'is-small'
    }
  },
  computed: {
    btnSize(){
      return this.size
    }
  },
  methods: {
    onClick() {
      this.$buefy.notification.open('Clicked!!')
    },
  },
};
</script>
