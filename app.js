const vm = Vue.createApp({
  data() {
    return { 
      rotateX: 0, 
      rotateY: 0,
      rotateZ: 0,
      perspective: 400,
    }
  },
  computed: {
    boxStyle() {
      return { transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)` }
    },
  },
  methods: {
    resetOptions() {
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.perspective = 400;
    },
    copy() {
      navigator.clipboard.writeText(`X rotation: ${this.rotateX}deg, Y rotation: ${this.rotateY}deg, Z rotation: ${this.rotateZ}deg, perspective: ${this.perspective}px`);
    }
  }
});

vm.mount('#app');
