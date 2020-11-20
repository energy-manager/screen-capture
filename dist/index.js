/*!
 * screen-capture v0.0.1
 * (c) energy-manager
 * Released under the MIT License.
 */
'use strict';

var vue = require('vue');

var script = {
  props: {
    color: {
      type: String,
      "default": "blue",
      validator: function validator(x) {
        return ["blue", "green", "red"].indexOf(x) !== -1;
      }
    },
    rounded: {
      type: Boolean,
      "default": true
    },
    size: {
      type: String,
      "default": "default",
      validator: function validator(x) {
        return ["small", "default", "large"].indexOf(x) !== -1;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit("click", event);
    },
    onDoubleClick: function onDoubleClick(event) {
      this.$emit("dblclick", event);
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.onClick.apply($options, arguments);
    }),
    onDblclick: _cache[2] || (_cache[2] = function () {
      return $options.onDoubleClick.apply($options, arguments);
    }),
    "class": ['nice-handsome-button', 'nice-handsome-button--' + $props.color, 'nice-handsome-button--' + $props.size, {
      'nice-handsome-button--rounded': $props.rounded
    }]
  }, [vue.renderSlot(_ctx.$slots, "default")], 34
  /* CLASS, HYDRATE_EVENTS */
  );
}

script.render = render;

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("button", script);
  }
};

module.exports = index;
