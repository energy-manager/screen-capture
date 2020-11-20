/*!
 * energy-manager-screen-capture v0.0.3
 * (c) energy-manager
 * Released under the MIT License.
 */
'use strict';

var html2canvas = require('html2canvas');
var vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var html2canvas__default = /*#__PURE__*/_interopDefaultLegacy(html2canvas);

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

var canvasScreenshot = {
  methods: {
    $html2canvas: function $html2canvas(el) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      try {
        var type = options.type;
        return _await(html2canvas__default['default'](el, options), function (canvas) {
          if (type && type === 'dataURL') {
            return canvas.toDataURL();
          } else {
            console.warn('Vue Html2Canvas Warn: Invalid option type. Use \'dataURL\' instead. Returning canvas.');
            return canvas;
          }
        });
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
};

var script = {
  data: function data() {
    return {
      form: {
        title: null,
        description: null,
        "private": false,
        type: 'bug'
      }
    };
  },
  methods: {
    submit: function submit() {
      var data = {
        title: this.form.title,
        description: this.form.description,
        "private": this.form["private"],
        type: this.form.type
      };
      this.$emit('submited', data);
    }
  }
};

var _hoisted_1 = {
  "class": "modal-mask"
};
var _hoisted_2 = {
  "class": "modal-wrapper"
};
var _hoisted_3 = {
  "class": "modal-container"
};
var _hoisted_4 = {
  "class": "modal-header"
};
var _hoisted_5 = {
  "class": "modal-body"
};

var _hoisted_6 = /*#__PURE__*/vue.createVNode("label", {
  "for": "text"
}, "Text", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/vue.createTextVNode(" br> ");

var _hoisted_8 = /*#__PURE__*/vue.createVNode("label", {
  "for": "description"
}, "Text", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/vue.createTextVNode(" br> ");

var _hoisted_10 = /*#__PURE__*/vue.createVNode("label", {
  "for": "private"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/vue.createVNode("label", {
  "for": "bug"
}, "Bug", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/vue.createVNode("br", null, null, -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/vue.createVNode("label", {
  "for": "feature"
}, "Feature", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/vue.createVNode("br", null, null, -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/vue.createVNode("button", {
  type: "submit",
  "class": "modal-default-button"
}, " Submit ", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/vue.createVNode("div", {
  "class": "modal-footer"
}, " default footer ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("div", _hoisted_2, [vue.createVNode("div", _hoisted_3, [vue.createVNode("div", _hoisted_4, [vue.createVNode("button", {
    "class": "modal-default-button",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('close');
    })
  }, " OK ")]), vue.createVNode("div", _hoisted_5, [vue.createVNode("form", {
    onSubmit: _cache[7] || (_cache[7] = vue.withModifiers(function ($event) {
      return $options.submit();
    }, ["prevent"]))
  }, [_hoisted_6, vue.withDirectives(vue.createVNode("input", {
    id: "text",
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.title = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue.vModelText, $data.form.title]]), _hoisted_7, _hoisted_8, vue.withDirectives(vue.createVNode("textarea", {
    id: "description",
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.description = $event;
    }),
    placeholder: "Description"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue.vModelText, $data.form.description]]), _hoisted_9, _hoisted_10, vue.withDirectives(vue.createVNode("input", {
    id: "private",
    type: "checkbox",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form["private"] = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue.vModelCheckbox, $data.form["private"]]]), vue.withDirectives(vue.createVNode("input", {
    type: "radio",
    id: "bug",
    value: "bug",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.type = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue.vModelRadio, $data.form.type]]), _hoisted_11, _hoisted_12, vue.withDirectives(vue.createVNode("input", {
    type: "radio",
    id: "feature",
    value: "feature",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.type = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue.vModelRadio, $data.form.type]]), _hoisted_13, _hoisted_14, _hoisted_15], 32
  /* HYDRATE_EVENTS */
  )]), _hoisted_16])])]);
}

script.render = render;

function _await$1(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

var script$1 = {
  data: function data() {
    return {
      output: null,
      title: null,
      showModal: false
    };
  },
  mixins: [canvasScreenshot],
  components: {
    ScreenCaptureModal: script
  },
  methods: {
    takeScreenshot: function takeScreenshot() {
      try {
        var _this2 = this;

        var el = _this2.$refs.printMe; // add option type to get the image version
        // if not provided the promise will return
        // the canvas.

        var options = {
          type: 'dataURL'
        };
        return _await$1(_this2.$html2canvas(el, options), function (_this$$html2canvas) {
          _this2.output = _this$$html2canvas;
          _this2.showModal = true;
        });
      } catch (e) {
        return Promise.reject(e);
      }
    },
    submit: function submit(data) {
      console.log(data);
      this.showModal = false;
      data['screenshot'] = this.output;
      console.log(data);
      this.$emit('submit', data);
    }
  }
};

var _hoisted_1$1 = {
  ref: "printMe"
};

var _hoisted_2$1 = /*#__PURE__*/vue.createVNode("h1", null, "Print me!", -1
/* HOISTED */
);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_screen_capture_modal = vue.resolveComponent("screen-capture-modal");

  return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.takeScreenshot.apply($options, arguments);
    })
  }, "Click"), vue.createCommentVNode(" SOURCE "), vue.createVNode("div", _hoisted_1$1, [_hoisted_2$1], 512
  /* NEED_PATCH */
  ), vue.createCommentVNode(" OUTPUT "), $data.showModal ? (vue.openBlock(), vue.createBlock(_component_screen_capture_modal, {
    key: 0,
    onClose: _cache[2] || (_cache[2] = function ($event) {
      return $data.showModal = false;
    }),
    onSubmited: $options.submit
  }, null, 8
  /* PROPS */
  , ["onSubmited"])) : vue.createCommentVNode("v-if", true)]);
}

script$1.render = render$1;

var index = {
  install: function install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("screen-capture-button", script$1);
  }
};

module.exports = index;
