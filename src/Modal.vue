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

<style>
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
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
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

</style>

