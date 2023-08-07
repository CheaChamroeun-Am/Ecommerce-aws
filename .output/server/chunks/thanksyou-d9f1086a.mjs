import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
import 'vue-devtools-stub';
import 'js-cookie';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_main = resolveComponent("v-main");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_main, mergeProps({ style: { "background-color": "#ebebeb" } }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_container, { style: { "background-color": "#ebebeb" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="text-center mt-15"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_img, {
                "max-width": "670",
                "max-height": "600",
                class: "mx-auto image",
                src: "http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
              }, null, _parent3, _scopeId2));
              _push3(`<h1${_scopeId2}>Thank you for your order!</h1><p${_scopeId2}>Thank you for your order. We will be in touch with you shortly.</p>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "#e5345b",
                to: "/",
                class: "text-white mt-15",
                style: { "width": "185px", "height": "50px", "border-radius": "20px" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Back to Home`);
                  } else {
                    return [
                      createTextVNode("Back to Home")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="d-flex justify-center"${_scopeId2}><hr class="mt-10" style="${ssrRenderStyle({ "width": "400px", "border": "none", "border-top": "7px solid #fafafa" })}"${_scopeId2}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center mt-15" }, [
                  createVNode(_component_v_img, {
                    "max-width": "670",
                    "max-height": "600",
                    class: "mx-auto image",
                    src: "http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
                  }),
                  createVNode("h1", null, "Thank you for your order!"),
                  createVNode("p", null, "Thank you for your order. We will be in touch with you shortly."),
                  createVNode(_component_v_btn, {
                    color: "#e5345b",
                    to: "/",
                    class: "text-white mt-15",
                    style: { "width": "185px", "height": "50px", "border-radius": "20px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back to Home")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "d-flex justify-center" }, [
                    createVNode("hr", {
                      class: "mt-10",
                      style: { "width": "400px", "border": "none", "border-top": "7px solid #fafafa" }
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_container, { style: { "background-color": "#ebebeb" } }, {
            default: withCtx(() => [
              createVNode("div", { class: "text-center mt-15" }, [
                createVNode(_component_v_img, {
                  "max-width": "670",
                  "max-height": "600",
                  class: "mx-auto image",
                  src: "http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
                }),
                createVNode("h1", null, "Thank you for your order!"),
                createVNode("p", null, "Thank you for your order. We will be in touch with you shortly."),
                createVNode(_component_v_btn, {
                  color: "#e5345b",
                  to: "/",
                  class: "text-white mt-15",
                  style: { "width": "185px", "height": "50px", "border-radius": "20px" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Back to Home")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "d-flex justify-center" }, [
                  createVNode("hr", {
                    class: "mt-10",
                    style: { "width": "400px", "border": "none", "border-top": "7px solid #fafafa" }
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/thanksyou.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thanksyou = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { thanksyou as default };
//# sourceMappingURL=thanksyou-d9f1086a.mjs.map
