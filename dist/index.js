import html2canvas from 'html2canvas';

var canvasScreenshot = {
    methods: {
        async $html2canvas (el, options = {}) {
            const { type } = options;
            const canvas = await html2canvas(el, options);
            if (type && type === 'dataURL') {
                return canvas.toDataURL();
            } else {
                console.warn('Vue Html2Canvas Warn: Invalid option type. Use \'dataURL\' instead. Returning canvas.');
                return canvas;
            }
        }
    }
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
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
      };
      this.$emit('submited', data);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "modal-mask" }, [
    _c("div", { staticClass: "modal-wrapper" }, [
      _c("div", { staticClass: "modal-container" }, [
        _c("div", { staticClass: "modal-header" }, [
          _c("h3", [
            _vm._v("\n            Please enter screen comment\n          ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "close",
              on: {
                click: function($event) {
                  return _vm.$emit("close")
                }
              }
            },
            [_c("strong", [_vm._v("x")])]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault();
                  return _vm.submit()
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "title" } }, [_vm._v("Title")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.title,
                      expression: "form.title"
                    }
                  ],
                  staticClass: "input",
                  attrs: { id: "title", type: "text" },
                  domProps: { value: _vm.form.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "title", $event.target.value);
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "description" } }, [
                  _vm._v("Description")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.description,
                      expression: "form.description"
                    }
                  ],
                  staticClass: "textarea input",
                  attrs: { id: "description", placeholder: "Description" },
                  domProps: { value: _vm.form.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "description", $event.target.value);
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group checkbox-input" }, [
                _c("label", { attrs: { for: "private" } }, [_vm._v("Private")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.private,
                      expression: "form.private"
                    }
                  ],
                  attrs: { id: "private", type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(_vm.form.private)
                      ? _vm._i(_vm.form.private, null) > -1
                      : _vm.form.private
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.private,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false;
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v);
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(_vm.form, "private", $$a.concat([$$v]));
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form,
                              "private",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            );
                        }
                      } else {
                        _vm.$set(_vm.form, "private", $$c);
                      }
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Type")]),
                _vm._v(" "),
                _c("div", { staticClass: "radio-input" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.type,
                        expression: "form.type"
                      }
                    ],
                    attrs: { type: "radio", id: "bug", value: "bug" },
                    domProps: { checked: _vm._q(_vm.form.type, "bug") },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.form, "type", "bug")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "bug" } }, [_vm._v("Bug")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "radio-input" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.type,
                        expression: "form.type"
                      }
                    ],
                    attrs: { type: "radio", id: "feature", value: "feature" },
                    domProps: { checked: _vm._q(_vm.form.type, "feature") },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.form, "type", "feature")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "feature" } }, [
                    _vm._v("Feature")
                  ])
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-footer" }, [
          _c(
            "button",
            {
              staticClass: "modal-default-button",
              attrs: { type: "submit" },
              on: { click: _vm.submit }
            },
            [_vm._v("\n          Submit\n        ")]
          )
        ])
      ])
    ])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-0c057cab_0", { source: "\n.modal-mask[data-v-0c057cab] {\r\n  position: fixed;\r\n  z-index: 9998;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: table;\r\n  transition: opacity 0.3s ease;\n}\n.modal-wrapper[data-v-0c057cab] {\r\n  display: table-cell;\r\n  vertical-align: middle;\n}\n.modal-container[data-v-0c057cab] {\r\n  width: 400px;\r\n  margin: 0px auto;\r\n  padding: 20px 30px;\r\n  background-color: #fff;\r\n  border-radius: 2px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\r\n  transition: all 0.3s ease;\r\n  font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header[data-v-0c057cab] {\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.modal-body[data-v-0c057cab] {\r\n  margin: 20px 0;\n}\n.modal-footer[data-v-0c057cab] {\r\n  padding: 10px 0;\n}\n.modal-default-button[data-v-0c057cab] {\r\n  float: right;\n}\r\n\r\n/*\r\n * The following styles are auto-applied to elements with\r\n * transition=\"modal\" when their visibility is toggled\r\n * by Vue.js.\r\n *\r\n * You can easily play with the modal transition by editing\r\n * these styles.\r\n */\n.modal-enter[data-v-0c057cab] {\r\n  opacity: 0;\n}\n.modal-leave-active[data-v-0c057cab] {\r\n  opacity: 0;\n}\n.modal-enter .modal-container[data-v-0c057cab],\r\n.modal-leave-active .modal-container[data-v-0c057cab] {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\n}\n.form-group[data-v-0c057cab] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 10px;\n}\n.input[data-v-0c057cab]{\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  border: 1px solid #ccc;\r\n  outline:none;\r\n  padding: 6px;\n}\n.input[data-v-0c057cab]:focus{\r\n  border:1px solid #56b4ef;\r\n  box-shadow: 0px 0px 3px 1px #c8def0;\n}\n.checkbox-input[data-v-0c057cab] {\r\n  flex-direction: row;\n}\n.radio-input[data-v-0c057cab] {\r\n  display: flex;\n}\n.textarea[data-v-0c057cab] {\r\n  min-height: 100px;\r\n  resize: vertical;\n}\n.close[data-v-0c057cab] {\r\n  cursor: pointer;\n}\r\n\r\n", map: {"version":3,"sources":["C:\\Users\\ermin\\Code\\energyManager\\screenCapture\\src\\ScreenCaptureModal.vue"],"names":[],"mappings":";AA4EA;EACA,eAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,cAAA;EACA,6BAAA;AACA;AAEA;EACA,mBAAA;EACA,sBAAA;AACA;AAEA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,yCAAA;EACA,yBAAA;EACA,yCAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,YAAA;AAEA;;AAEA;;;;;;;EAOA;AAEA;EACA,UAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;;EAEA,6BAAA;EACA,qBAAA;AACA;AAEA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;AACA;AAEA;EACA,wBAAA;EACA,mCAAA;AACA;AAEA;EACA,mBAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,iBAAA;EACA,gBAAA;AACA;AAEA;EACA,eAAA;AACA","file":"ScreenCaptureModal.vue","sourcesContent":["<template>\r\n  <div class=\"modal-mask\">\r\n    <div class=\"modal-wrapper\">\r\n      <div class=\"modal-container\">\r\n        <div class=\"modal-header\">\r\n            <h3>\r\n              Please enter screen comment\r\n            </h3>\r\n            <div class=\"close\" @click=\"$emit('close')\">\r\n              <strong>x</strong>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form v-on:submit.prevent=\"submit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"title\">Title</label>\r\n              <input id=\"title\" class=\"input\" type=\"text\" v-model=\"form.title\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"description\">Description</label>\r\n              <textarea class=\"textarea input\"  id=\"description\" v-model=\"form.description\" placeholder=\"Description\"></textarea>\r\n            </div>\r\n            <div class=\"form-group checkbox-input\">\r\n              <label for=\"private\">Private</label>\r\n              <input id=\"private\" type=\"checkbox\" v-model=\"form.private\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Type</label>\r\n              <div class=\"radio-input\">\r\n                <input type=\"radio\" id=\"bug\" value=\"bug\" v-model=\"form.type\">\r\n                <label for=\"bug\">Bug</label>\r\n              </div>\r\n              <div class=\"radio-input\">\r\n                <input type=\"radio\" id=\"feature\" value=\"feature\" v-model=\"form.type\">\r\n                <label for=\"feature\">Feature</label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" @click=\"submit\" class=\"modal-default-button\">\r\n            Submit\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      form: {\r\n        title: null,\r\n        description: null,\r\n        private: false,\r\n        type: 'bug'\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    submit() {\r\n      let data = {\r\n        title: this.form.title,\r\n        description: this.form.description,\r\n        private: this.form.private,\r\n        type: this.form.type\r\n      }\r\n      this.$emit('submited', data)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.modal-mask {\r\n  position: fixed;\r\n  z-index: 9998;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: table;\r\n  transition: opacity 0.3s ease;\r\n}\r\n\r\n.modal-wrapper {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.modal-container {\r\n  width: 400px;\r\n  margin: 0px auto;\r\n  padding: 20px 30px;\r\n  background-color: #fff;\r\n  border-radius: 2px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\r\n  transition: all 0.3s ease;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.modal-body {\r\n  margin: 20px 0;\r\n}\r\n\r\n.modal-footer {\r\n  padding: 10px 0;\r\n}\r\n\r\n.modal-default-button {\r\n  float: right;\r\n\r\n}\r\n\r\n/*\r\n * The following styles are auto-applied to elements with\r\n * transition=\"modal\" when their visibility is toggled\r\n * by Vue.js.\r\n *\r\n * You can easily play with the modal transition by editing\r\n * these styles.\r\n */\r\n\r\n.modal-enter {\r\n  opacity: 0;\r\n}\r\n\r\n.modal-leave-active {\r\n  opacity: 0;\r\n}\r\n\r\n.modal-enter .modal-container,\r\n.modal-leave-active .modal-container {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.input{\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  border: 1px solid #ccc;\r\n  outline:none;\r\n  padding: 6px;\r\n}\r\n\r\n.input:focus{\r\n  border:1px solid #56b4ef;\r\n  box-shadow: 0px 0px 3px 1px #c8def0;\r\n}\r\n\r\n.checkbox-input {\r\n  flex-direction: row;\r\n}\r\n\r\n.radio-input {\r\n  display: flex;\r\n}\r\n\r\n.textarea {\r\n  min-height: 100px;\r\n  resize: vertical;\r\n}\r\n\r\n.close {\r\n  cursor: pointer;\r\n}\r\n\r\n</style>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-0c057cab";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

//
var script$1 = {
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
    ScreenCaptureModal: __vue_component__
  },
  methods: {
    async takeScreenshot() {
      const el = this.$parent.$refs[this.elementRef];

      const options = {
        type: 'dataURL'
      };
      this.output = await this.$html2canvas(el, options);

      this.showModal = true;
    },
    submit(data) {
      this.showModal = false;
      data['screenshot'] = this.output;

      this.$emit('submit', data);
    }
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("button", { on: { click: _vm.takeScreenshot } }, [_vm._v("Click")]),
      _vm._v(" "),
      _vm.showModal
        ? _c("screen-capture-modal", {
            on: {
              close: function($event) {
                _vm.showModal = false;
              },
              submited: _vm.submit
            }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

var index = {
    install(Vue) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("screen-capture-button", __vue_component__$1);
    }
};

export default index;
