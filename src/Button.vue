<template>
  <div>
    <button @click="takeScreenshot">Click</button>
    <!-- SOURCE -->
    <div ref="printMe">
      <h1>Print me!</h1>
    </div>
    <!-- OUTPUT -->
    <modal v-if="showModal" @close="showModal = false" @submited="submit" />
  </div>
</template>

<script>
  import  myMixin  from './mixin.js';
  import Modal from './Modal';
  export default {
    data() {
      return {
        output: null,
        title: null,
        showModal: false
      }
    },
    mixins: [myMixin],
    components: {
      Modal
    },
    methods: {
      async takeScreenshot() {
        const el = this.$refs.printMe;
        // add option type to get the image version
        // if not provided the promise will return
        // the canvas.
        const options = {
          type: 'dataURL'
        }
        this.output = await this.$html2canvas(el, options);

        this.showModal = true
      },
      submit(data) {
        console.log(data)
        this.showModal = false;
        data['screenshot'] = this.output
        console.log(data);

        this.$emit('submit', data)
      }
    }
  }
</script>