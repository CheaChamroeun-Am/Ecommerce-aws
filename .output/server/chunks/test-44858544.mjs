import { ref, resolveComponent, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import axios from 'axios';

const _sfc_main = {
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const searchTerm = ref("");
    const queryTimeout = ref(null);
    const products = ref([]);
    const handleAllSearch = () => {
      clearTimeout(queryTimeout.value);
      queryTimeout.value = setTimeout(async () => {
        if (searchTerm !== "") {
          const res = await axios.get(
            `http://3.90.217.148:3002/api/products/${searchTerm.value}`
          );
          console.log(res.data);
        }
        products.value = null;
      }, 300);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_main = resolveComponent("v-main");
      const _component_v_text_field = resolveComponent("v-text-field");
      _push(ssrRenderComponent(_component_v_main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_text_field, {
              class: "mt-5",
              label: "Search",
              modelValue: unref(searchTerm),
              "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
              onInput: handleAllSearch,
              variant: "outlined",
              "prepend-inner-icon": "mdi-magnify"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_text_field, {
                class: "mt-5",
                label: "Search",
                modelValue: unref(searchTerm),
                "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
                onInput: handleAllSearch,
                variant: "outlined",
                "prepend-inner-icon": "mdi-magnify"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-44858544.mjs.map
