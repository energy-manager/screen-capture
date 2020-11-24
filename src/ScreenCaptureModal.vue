<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
            <h3>
              Please enter screen comment
            </h3>
            <div class="close" @click="$emit('close')">
              <strong>x</strong>
            </div>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="submit()">
            <div class="form-group">
              <label for="title">Title</label>
              <input id="title" class="input" type="text" v-model="form.title">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea class="textarea input"  id="description" v-model="form.description" placeholder="Description"></textarea>
            </div>
            <div class="form-group checkbox-input">
              <label for="private">Private</label>
              <input id="private" type="checkbox" v-model="form.private">
            </div>
            <div class="form-group">
              <label>Type</label>
              <div class="radio-input">
                <input type="radio" id="bug" value="bug" v-model="form.type">
                <label for="bug">Bug</label>
              </div>
              <div class="radio-input">
                <input type="radio" id="feature" value="feature" v-model="form.type">
                <label for="feature">Feature</label>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="submit" @click="submit" class="modal-default-button">
            Submit
          </button>
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

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  padding: 10px 0;
}

.modal-default-button {
  float: right;

}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.input{
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ccc;
  outline:none;
  padding: 6px;
}

.input:focus{
  border:1px solid #56b4ef;
  box-shadow: 0px 0px 3px 1px #c8def0;
}

.checkbox-input {
  flex-direction: row;
}

.radio-input {
  display: flex;
}

.textarea {
  min-height: 100px;
  resize: vertical;
}

.close {
  cursor: pointer;
}

</style>
