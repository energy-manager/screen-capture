import VueFroala from 'vue-froala-wysiwyg';
import Vue from 'vue';
import i18next from 'i18next';
import Locize from 'i18next-locize-backend';
import VueI18Next from '@panter/vue-i18next';

Vue.use(VueI18Next);

const i18nextOptions = {
	backend: {
		projectId: '2c0a136a-e84b-4380-bbdd-8c7e033c41a3',
		apiKey: '5e9e1de2-bf79-4fbd-a74e-05772a0a1d12',
		referenceLng: 'en-US'
	},
	lng: 'en-US',
	fallbackLng: 'en-US',
	ns: [
		'common',
    'backlog',

	],
	defaultNS: 'common',
	saveMissing: true,

	missingKeyHandler: (lng, ns, key, fallbackValue) => {
		// eslint-disable-next-line
		// console.error('Missing key in translations', lng, ns, key, fallbackValue);
	},
};

i18next
	.use(Locize)
	.init(i18nextOptions, error => {
    if (error) {
      // eslint-disable-next-line
      // console.error('Error loading i18next', error);
      throw error;
    }
  });

new VueI18Next(i18next);

//

var script = {
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
},
 screenshot: null,
      },
      
    }
  },

  mixins: [canvasScreenshot],
  created() {
    this.takeScreenshot();
  },

 props: {
    captureElementId: {
      type: String,
      default: 'app'
    }
  },

  methods: {
    submit() {
      let data = {
        title: this.form.title,
        description: this.form.description,
        private: this.form.private,
        type: this.form.type,
        screenshot: this.form.screenshot,
      };
      this.$emit('submit', data);
      this.$emit('close');
    },

     async takeScreenshot() {
      const el = document.getElementById(this.captureElementId);
      const options = {
        type: 'dataURL'
      };
      this.screenshot = await this.$html2canvas(el, options);
    },
  },

  components: {
    VueFroala,
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
            _vm._v(
              "\n            " +
                _vm._s(_vm.$t("backlog: addBacklogItem")) +
                "\n          "
            )
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
                _c("label", { attrs: { for: "title" } }, [
                  _vm._v(_vm._s(_vm.$t("common: title")))
                ]),
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
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "description" } }, [
                    _vm._v(_vm._s(_vm.$t("common: description")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "froala",
                    {
                      attrs: { tag: "textarea", config: _vm.config },
                      model: {
                        value: _vm.form.description,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "description", $$v);
                        },
                        expression: "form.description"
                      }
                    },
                    [_vm._v("Init text")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group checkbox-input" }, [
                _c("label", { attrs: { for: "private" } }, [
                  _vm._v(_vm._s(_vm.$t("backlog: isPublic")))
                ]),
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
                _c("label", [_vm._v(_vm._s(_vm.$t("common: type")))]),
                _vm._v(" "),
                _c("select")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-footer" }, [
          _c(
            "button",
            { attrs: { type: "submit" }, on: { click: _vm.submit } },
            [
              _vm._v(
                "\n         " + _vm._s(_vm.$t("common: cancel")) + "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            { attrs: { type: "submit" }, on: { click: _vm.submit } },
            [
              _vm._v(
                "\n         " + _vm._s(_vm.$t("common: save")) + "\n        "
              )
            ]
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
    inject("data-v-0b6a38de_0", { source: "\n.modal-mask[data-v-0b6a38de] {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: table;\n  transition: opacity 0.3s ease;\n}\n.modal-wrapper[data-v-0b6a38de] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.modal-container[data-v-0b6a38de] {\n  width: 500px;\n  margin: 0px auto;\n  padding: 20px 30px;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  transition: all 0.3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header[data-v-0b6a38de] {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-body[data-v-0b6a38de] {\n  margin: 20px 0;\n}\n.modal-footer[data-v-0b6a38de] {\n  padding: 10px 0;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-0b6a38de] {\n  opacity: 0;\n}\n.modal-leave-active[data-v-0b6a38de] {\n  opacity: 0;\n}\n.modal-enter .modal-container[data-v-0b6a38de],\n.modal-leave-active .modal-container[data-v-0b6a38de] {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n.textarea[data-v-0b6a38de] {\n  min-height: 100px;\n  resize: vertical;\n}\n.close[data-v-0b6a38de] {\n  cursor: pointer;\n}\n\n", map: {"version":3,"sources":["/Users/dinahajric/Projects/scrcapt/src/ScreenCaptureModal.vue"],"names":[],"mappings":";AAgHA;EACA,eAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,cAAA;EACA,6BAAA;AACA;AAEA;EACA,mBAAA;EACA,sBAAA;AACA;AAEA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,yCAAA;EACA,yBAAA;EACA,yCAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,eAAA;AACA;;AAEA;;;;;;;EAOA;AAEA;EACA,UAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;;EAEA,6BAAA;EACA,qBAAA;AACA;AAEA;EACA,iBAAA;EACA,gBAAA;AACA;AAEA;EACA,eAAA;AACA","file":"ScreenCaptureModal.vue","sourcesContent":["<template>\n  <div class=\"modal-mask\">\n    <div class=\"modal-wrapper\">\n      <div class=\"modal-container\">\n        <div class=\"modal-header\">\n            <h3>\n              {{$t('backlog: addBacklogItem')}}\n            </h3>\n            <div class=\"close\" @click=\"$emit('close')\">\n              <strong>x</strong>\n            </div>\n        </div>\n        <div class=\"modal-body\">\n          <form v-on:submit.prevent=\"submit()\">\n            <div class=\"form-group\">\n              <label for=\"title\">{{$t('common: title')}}</label>\n              <input id=\"title\" class=\"input\" type=\"text\" v-model=\"form.title\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"description\">{{$t('common: description')}}</label>\n              <!--textarea class=\"textarea input\"  id=\"description\" v-model=\"form.description\" placeholder=\"Description\"></textarea-->\n              <froala :tag=\"'textarea'\" :config=\"config\" v-model=\"form.description\">Init text</froala>\n            </div>\n            <div class=\"form-group checkbox-input\">\n              <label for=\"private\">{{$t('backlog: isPublic')}}</label>\n              <input id=\"private\" type=\"checkbox\" v-model=\"form.private\">\n            </div>\n            <div class=\"form-group\">\n              <label>{{$t('common: type')}}</label>\n              <select\n              ></select>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n           <button type=\"submit\" @click=\"submit\">\n           {{$t('common: cancel')}}\n          </button>\n          <button type=\"submit\" @click=\"submit\">\n           {{$t('common: save')}}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n\nimport VueFroala from 'vue-froala-wysiwyg'\nimport i18n from './locale/i18n';\n\nexport default {\n  data() {\n    return {\n      form: {\n        title: null,\n        description: null,\n        private: false,\n        type: 1, \n        backlogTypes: [],\n        config: {\n         placeholderText: 'Edit Your Content Here!',\n        charCounterCount: false\n},\n screenshot: null,\n      },\n      \n    }\n  },\n\n  mixins: [canvasScreenshot],\n  created() {\n    this.takeScreenshot();\n  },\n\n props: {\n    captureElementId: {\n      type: String,\n      default: 'app'\n    }\n  },\n\n  methods: {\n    submit() {\n      let data = {\n        title: this.form.title,\n        description: this.form.description,\n        private: this.form.private,\n        type: this.form.type,\n        screenshot: this.form.screenshot,\n      }\n      this.$emit('submit', data)\n      this.$emit('close');\n    },\n\n     async takeScreenshot() {\n      const el = document.getElementById(this.captureElementId);\n      const options = {\n        type: 'dataURL'\n      };\n      this.screenshot = await this.$html2canvas(el, options);\n    },\n  },\n\n  components: {\n    VueFroala,\n  }\n}\n</script>\n\n<style scoped>\n.modal-mask {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: table;\n  transition: opacity 0.3s ease;\n}\n\n.modal-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.modal-container {\n  width: 500px;\n  margin: 0px auto;\n  padding: 20px 30px;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  transition: all 0.3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.modal-body {\n  margin: 20px 0;\n}\n\n.modal-footer {\n  padding: 10px 0;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n\n.modal-enter {\n  opacity: 0;\n}\n\n.modal-leave-active {\n  opacity: 0;\n}\n\n.modal-enter .modal-container,\n.modal-leave-active .modal-container {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n.textarea {\n  min-height: 100px;\n  resize: vertical;\n}\n\n.close {\n  cursor: pointer;\n}\n\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-0b6a38de";
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

var index = {
    install(Vue) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("screen-capture-modal", __vue_component__);
    }
};

export default index;
