<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
            <button class="modal-default-button" @click="$emit('close')">
              OK
            </button>
        </div>

        <div class="modal-body">
          <form v-on:submit.prevent="submit()">
            <label for="text">Text</label>
            <input id="text" type="text" v-model="form.title">
            br>
            <label for="description">Text</label>
            <textarea id="description" type="text" v-model="form.description" placeholder="Description">
          </textarea>
            br>
            <label for="private"></label>
            <input id="private" type="checkbox" v-model="form.private">

            <input type="radio" id="bug" value="bug" v-model="form.type">
            <label for="bug">Bug</label>
            <br>
            <input type="radio" id="feature" value="feature" v-model="form.type">
            <label for="feature">Feature</label>
            <br>
            <button type="submit" class="modal-default-button">
              Submit
            </button>
          </form>
        </div>
        <div class="modal-footer">
            default footer

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: null,
        description: null,
        private: false,
        type: 'bug'
      }
    }
  },
  methods: {
    submit() {
      let data = {
        title: this.form.title,
        description: this.form.description,
        private: this.form.private,
        type: this.form.type
      }
      this.$emit('submited', data)
    }
  }
}
</script>
