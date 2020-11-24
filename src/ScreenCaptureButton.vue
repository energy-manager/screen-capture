<template>
  <div>
    <button @click="takeScreenshot">Click</button>
    <screen-capture-modal v-if="showModal" @close="showModal = false" @submited="submit" />
  </div>
</template>

<script>
  import canvasScreenshot  from './canvasScreenshot.js';
  import ScreenCaptureModal from './ScreenCaptureModal.vue';
  export default {
    props: {
      elementRef: String
    },
    data() {
      return {
        output: null,
        showModal: false
      }
    },
    mixins: [canvasScreenshot],
    components: {
      ScreenCaptureModal
    },
    methods: {
      async takeScreenshot() {
        const el = this.$parent.$refs[this.elementRef];

        const options = {
          type: 'dataURL'
        }
        this.output = await this.$html2canvas(el, options);

        this.showModal = true
      },
      submit(data) {
        this.showModal = false;
        data['screenshot'] = this.output

        this.$emit('submit', data)
      }
    }
  }
</script>