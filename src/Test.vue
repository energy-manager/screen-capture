<template>
  <div>
    <h1 ref="title">
      Print me!
    </h1>

    <ScreenCaptureButton element-ref="title" @submit="submit"></ScreenCaptureButton>
  </div>
</template>

<script>
  import ScreenCaptureButton from "./ScreenCaptureButton";

  export default {
    components : {
      ScreenCaptureButton
    },
    methods: {
      submit(data) {
        console.log(data)
      }
    }
  }
</script>