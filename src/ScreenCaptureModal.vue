<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
            <h3>
              {{$t('backlog: addBacklogItem')}}
            </h3>
            <div class="close" @click="$emit('close')">
              <strong>x</strong>
            </div>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="submit()">
            <div class="form-group">
              <label for="title">{{$t('common: title')}}</label>
              <input id="title" class="input" type="text" v-model="form.title">
            </div>
            <div class="form-group">
              <label for="description">{{$t('common: description')}}</label>
              <!--textarea class="textarea input"  id="description" v-model="form.description" placeholder="Description"></textarea-->
              <froala :tag="'textarea'" :config="config" v-model="form.description">Init text</froala>
            </div>
            <div class="form-group checkbox-input">
              <label for="private">{{$t('backlog: isPublic')}}</label>
              <input id="private" type="checkbox" v-model="form.private">
            </div>
            <div class="form-group">
              <label>{{$t('common: type')}}</label>
              <select
              ></select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
           <button type="submit" @click="submit">
           {{$t('common: cancel')}}
          </button>
          <button type="submit" @click="submit">
           {{$t('common: save')}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VueFroala from 'vue-froala-wysiwyg'
import i18n from './locale/i18n';

export default {
  data() {
    return {
      form: {
        title: null,
        description: null,
        private: false,
        type: 1, 
        backlogTypes: [],
        config: {
         placeholderText: 'Edit Your Content Here!',
        charCounterCount: false
}
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
  },

  components: {
    VueFroala,
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
  width: 500px;
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

.textarea {
  min-height: 100px;
  resize: vertical;
}

.close {
  cursor: pointer;
}

</style>
