const vm = Vue.createApp({
  data() {
    return { 
      rotateX: 0, 
      rotateY: 0,
      rotateZ: 0,
      perspective: 0,
    }
  },
  computed: {
    boxStyle() {
      return [
        {
          transform: `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg) perspective(${this.perspective}px)`
        }
      ]
    },
  },
}).mount('#app');
