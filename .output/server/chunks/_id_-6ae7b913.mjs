import { _ as __nuxt_component_0 } from './nuxt-link-80d3cee7.mjs';
import { a as useStore, u as useRoute, n as navigateTo } from './server.mjs';
import { ref, withAsyncContext, computed, resolveComponent, resolveDirective, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, isRef, vModelText, createTextVNode, withModifiers, mergeProps, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-cf13354b.mjs';
import { u as useAuth } from './state-354a3b64.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs, ssrGetDirectiveProps } from 'vue/server-renderer';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import Cookies from 'js-cookie';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'vue-devtools-stub';
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

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useStore();
    const route = useRoute();
    const auth = useAuth();
    const commentSnackbar = ref(false);
    const id = route.params.id;
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `http://18.208.219.245:3002/api/products/${id}`,
      "$korT56tLwZ"
    )), __temp = await __temp, __restore(), __temp);
    computed(() => {
      return product.value.rating;
    });
    console.log(product.value);
    const similarProduct = ref([
      {
        id: 1,
        name: "Nike Air Force 1 Low Supreme",
        image: "/images/Nike1.webp",
        price: 200,
        rating: 4
      },
      {
        id: 2,
        name: "Nike Air Max Plus Black Volt Solar Red (W)",
        image: "/images/Nike2.webp",
        price: 200,
        rating: 5
      },
      {
        id: 3,
        name: "Nike Air Zoom Pegasus 37",
        image: "/images/Nike3.webp",
        price: 200,
        rating: 3
      },
      {
        id: 4,
        name: "Nike Dunk Low UCLA",
        image: "/images/Nike4.webp",
        price: 200,
        rating: 4
      }
    ]);
    const selectedRating = ref(null);
    const ratingNumber = ref([1, 2, 3, 4, 5]);
    const comment = ref("");
    const handleReview = async () => {
      let cookieValue = Cookies.get("token");
      if (cookieValue == void 0) {
        alert("Please login to review");
        navigateTo("/login");
      } else {
        const { data } = await useFetch(
          `http://18.208.219.245:3002/api/products/${id}/review`,
          {
            method: "POST",
            body: {
              rating: selectedRating.value,
              comment: comment.value
            },
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`
            }
          },
          "$XI3oguT8RV"
        );
        commentSnackbar.value = true;
        selectedRating.value = null;
        comment.value = "";
        console.log(data.value);
      }
    };
    const quantity = ref(1);
    const handleAddToCart = () => {
      if (auth.value.isAuthenticated == false) {
        navigateTo("/login");
        alert("Please login to add to cart");
      } else {
        store.commit("handleAddToCart", {
          product: product.value,
          quantity: quantity.value
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      const _component_nuxt_link = __nuxt_component_0;
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_rating = resolveComponent("v-rating");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_snackbar = resolveComponent("v-snackbar");
      const _directive_scroll_y = resolveDirective("scroll-y");
      _push(ssrRenderComponent(_component_v_main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_nuxt_link, {
                    to: "/",
                    style: { "text-decoration": "none", "color": "black" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Home</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Home")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_icon, {
                    icon: "mdi-greater-than",
                    class: "ms-3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_nuxt_link, {
                    to: "/shop",
                    style: { "text-decoration": "none", "color": "black" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="ms-3"${_scopeId3}>Shop</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "ms-3" }, "Shop")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="font-weight-bold ms-5"${_scopeId2}>|</span><span class="ms-5"${_scopeId2}>${ssrInterpolate(unref(product).name)}</span></div>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-15" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex justify-content-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_img, {
                                src: unref(product).image[0],
                                height: "400px",
                                width: "400px",
                                "data-aos": "zoom-in-up",
                                "data-aos-delay": "250"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(unref(Carousel), { "items-to-show": 3.7 }, {
                                addons: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Navigation), null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(Pagination), null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Navigation)),
                                      createVNode(unref(Pagination))
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(product).image, (p) => {
                                      _push6(ssrRenderComponent(unref(Slide), { key: p }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: p,
                                              height: "150px",
                                              width: "150px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", null, [
                                                createVNode(_component_v_img, {
                                                  src: p,
                                                  height: "150px",
                                                  width: "150px"
                                                }, null, 8, ["src"])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(product).image, (p) => {
                                        return openBlock(), createBlock(unref(Slide), { key: p }, {
                                          default: withCtx(() => [
                                            createVNode("div", null, [
                                              createVNode(_component_v_img, {
                                                src: p,
                                                height: "150px",
                                                width: "150px"
                                              }, null, 8, ["src"])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "d-flex justify-content-center" }, [
                                  createVNode(_component_v_img, {
                                    src: unref(product).image[0],
                                    height: "400px",
                                    width: "400px",
                                    "data-aos": "zoom-in-up",
                                    "data-aos-delay": "250"
                                  }, null, 8, ["src"])
                                ]),
                                createVNode(unref(Carousel), { "items-to-show": 3.7 }, {
                                  addons: withCtx(() => [
                                    createVNode(unref(Navigation)),
                                    createVNode(unref(Pagination))
                                  ]),
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(product).image, (p) => {
                                      return openBlock(), createBlock(unref(Slide), { key: p }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode(_component_v_img, {
                                              src: p,
                                              height: "150px",
                                              width: "150px"
                                            }, null, 8, ["src"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["items-to-show"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p style="${ssrRenderStyle({ "color": "#e5345b" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId4}> Sneaker Company </p><h1 class="font-weight-bold" data-aos="fade-right" data-aos-delay="500"${_scopeId4}>${ssrInterpolate(unref(product).name)}</h1><div class="d-flex" data-aos="fade-right" data-aos-delay="500"${_scopeId4}><div class="text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_rating, {
                                modelValue: _ctx.rating,
                                "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                size: "30px",
                                "bg-color": "#FFCA28",
                                color: "#FFCA28"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><span class="ms-3 font-weight-bold" style="${ssrRenderStyle({ "line-height": "30px" })}"${_scopeId4}>|</span><span class="ms-3 mt-1" style="${ssrRenderStyle({ "color": "grey" })}"${_scopeId4}>5 Customer Review</span></div><p style="${ssrRenderStyle({ "color": "grey" })}" class="mt-7" data-aos="fade-up" data-aos-delay="500"${_scopeId4}>${ssrInterpolate(unref(product).description)}</p><h2 class="mt-3" data-aos="fade-up" data-aos-delay="500"${_scopeId4}> $${ssrInterpolate(unref(product).price)}.00 </h2><div class="d-flex align-center justify-space-between mt-5"${_scopeId4}><div${_scopeId4}><input${ssrRenderAttr("value", unref(quantity))} type="number" class="px-2" min="1" style="${ssrRenderStyle({ "border": "1px solid black", "width": "70px" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId4}></div>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "#e5345b",
                                class: "text-white mt-4",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      icon: "mdi-cart",
                                      class: "ms-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span class="ms-4"${_scopeId5}>Add To Cart</span>`);
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, {
                                        icon: "mdi-cart",
                                        class: "ms-3"
                                      }),
                                      createVNode("span", {
                                        class: "ms-4",
                                        onClick: handleAddToCart
                                      }, "Add To Cart")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="mt-16" style="${ssrRenderStyle({ "border-top": "black 1px solid" })}"${_scopeId4}><div class="d-flex mt-5" style="${ssrRenderStyle({ "color": "grey" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId4}><span${_scopeId4}>SKU</span><span class="ms-16"${_scopeId4}>:</span><span class="ms-3"${_scopeId4}>SS001</span></div><div class="d-flex mt-5" style="${ssrRenderStyle({ "color": "grey" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId4}><span${_scopeId4}>Category</span><span class="ms-5"${_scopeId4}>:</span><span class="ms-3"${_scopeId4}>Nike</span></div><div class="d-flex mt-5" style="${ssrRenderStyle({ "color": "grey" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId4}><span${_scopeId4}>Tags</span><span class="ms-14"${_scopeId4}>:</span><span class="ms-3"${_scopeId4}>Running, Gym</span></div><div class="d-flex mt-5" style="${ssrRenderStyle({ "color": "grey" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId4}><span${_scopeId4}>Share</span><span class="ms-12"${_scopeId4}>:</span><div class="ms-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-facebook" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_icon, {
                                icon: "mdi-twitter",
                                class: "ms-3"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_icon, {
                                icon: "mdi-instagram",
                                class: "ms-3"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_icon, {
                                icon: "mdi-linkedin",
                                class: "ms-3"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div></div>`);
                            } else {
                              return [
                                createVNode("p", {
                                  style: { "color": "#e5345b" },
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " Sneaker Company "),
                                createVNode("h1", {
                                  class: "font-weight-bold",
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, toDisplayString(unref(product).name), 1),
                                createVNode("div", {
                                  class: "d-flex",
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode(_component_v_rating, {
                                      modelValue: _ctx.rating,
                                      "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                      size: "30px",
                                      "bg-color": "#FFCA28",
                                      color: "#FFCA28"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("span", {
                                    class: "ms-3 font-weight-bold",
                                    style: { "line-height": "30px" }
                                  }, "|"),
                                  createVNode("span", {
                                    class: "ms-3 mt-1",
                                    style: { "color": "grey" }
                                  }, "5 Customer Review")
                                ]),
                                createVNode("p", {
                                  style: { "color": "grey" },
                                  class: "mt-7",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, toDisplayString(unref(product).description), 1),
                                createVNode("h2", {
                                  class: "mt-3",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, " $" + toDisplayString(unref(product).price) + ".00 ", 1),
                                createVNode("div", { class: "d-flex align-center justify-space-between mt-5" }, [
                                  createVNode("div", null, [
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                      type: "number",
                                      class: "px-2",
                                      min: "1",
                                      style: { "border": "1px solid black", "width": "70px" },
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, unref(quantity)]
                                    ])
                                  ]),
                                  createVNode(_component_v_btn, {
                                    color: "#e5345b",
                                    class: "text-white mt-4",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        icon: "mdi-cart",
                                        class: "ms-3"
                                      }),
                                      createVNode("span", {
                                        class: "ms-4",
                                        onClick: handleAddToCart
                                      }, "Add To Cart")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", {
                                  class: "mt-16",
                                  style: { "border-top": "black 1px solid" }
                                }, [
                                  createVNode("div", {
                                    class: "d-flex mt-5",
                                    style: { "color": "grey" },
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("span", null, "SKU"),
                                    createVNode("span", { class: "ms-16" }, ":"),
                                    createVNode("span", { class: "ms-3" }, "SS001")
                                  ]),
                                  createVNode("div", {
                                    class: "d-flex mt-5",
                                    style: { "color": "grey" },
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("span", null, "Category"),
                                    createVNode("span", { class: "ms-5" }, ":"),
                                    createVNode("span", { class: "ms-3" }, "Nike")
                                  ]),
                                  createVNode("div", {
                                    class: "d-flex mt-5",
                                    style: { "color": "grey" },
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("span", null, "Tags"),
                                    createVNode("span", { class: "ms-14" }, ":"),
                                    createVNode("span", { class: "ms-3" }, "Running, Gym")
                                  ]),
                                  createVNode("div", {
                                    class: "d-flex mt-5",
                                    style: { "color": "grey" },
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("span", null, "Share"),
                                    createVNode("span", { class: "ms-12" }, ":"),
                                    createVNode("div", { class: "ms-3" }, [
                                      createVNode(_component_v_icon, { icon: "mdi-facebook" }),
                                      createVNode(_component_v_icon, {
                                        icon: "mdi-twitter",
                                        class: "ms-3"
                                      }),
                                      createVNode(_component_v_icon, {
                                        icon: "mdi-instagram",
                                        class: "ms-3"
                                      }),
                                      createVNode(_component_v_icon, {
                                        icon: "mdi-linkedin",
                                        class: "ms-3"
                                      })
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-content-center" }, [
                                createVNode(_component_v_img, {
                                  src: unref(product).image[0],
                                  height: "400px",
                                  width: "400px",
                                  "data-aos": "zoom-in-up",
                                  "data-aos-delay": "250"
                                }, null, 8, ["src"])
                              ]),
                              createVNode(unref(Carousel), { "items-to-show": 3.7 }, {
                                addons: withCtx(() => [
                                  createVNode(unref(Navigation)),
                                  createVNode(unref(Pagination))
                                ]),
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(product).image, (p) => {
                                    return openBlock(), createBlock(unref(Slide), { key: p }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode(_component_v_img, {
                                            src: p,
                                            height: "150px",
                                            width: "150px"
                                          }, null, 8, ["src"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["items-to-show"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", {
                                style: { "color": "#e5345b" },
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " Sneaker Company "),
                              createVNode("h1", {
                                class: "font-weight-bold",
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, toDisplayString(unref(product).name), 1),
                              createVNode("div", {
                                class: "d-flex",
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, [
                                createVNode("div", { class: "text-center" }, [
                                  createVNode(_component_v_rating, {
                                    modelValue: _ctx.rating,
                                    "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                    size: "30px",
                                    "bg-color": "#FFCA28",
                                    color: "#FFCA28"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("span", {
                                  class: "ms-3 font-weight-bold",
                                  style: { "line-height": "30px" }
                                }, "|"),
                                createVNode("span", {
                                  class: "ms-3 mt-1",
                                  style: { "color": "grey" }
                                }, "5 Customer Review")
                              ]),
                              createVNode("p", {
                                style: { "color": "grey" },
                                class: "mt-7",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, toDisplayString(unref(product).description), 1),
                              createVNode("h2", {
                                class: "mt-3",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, " $" + toDisplayString(unref(product).price) + ".00 ", 1),
                              createVNode("div", { class: "d-flex align-center justify-space-between mt-5" }, [
                                createVNode("div", null, [
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                    type: "number",
                                    class: "px-2",
                                    min: "1",
                                    style: { "border": "1px solid black", "width": "70px" },
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(quantity)]
                                  ])
                                ]),
                                createVNode(_component_v_btn, {
                                  color: "#e5345b",
                                  class: "text-white mt-4",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      icon: "mdi-cart",
                                      class: "ms-3"
                                    }),
                                    createVNode("span", {
                                      class: "ms-4",
                                      onClick: handleAddToCart
                                    }, "Add To Cart")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", {
                                class: "mt-16",
                                style: { "border-top": "black 1px solid" }
                              }, [
                                createVNode("div", {
                                  class: "d-flex mt-5",
                                  style: { "color": "grey" },
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, [
                                  createVNode("span", null, "SKU"),
                                  createVNode("span", { class: "ms-16" }, ":"),
                                  createVNode("span", { class: "ms-3" }, "SS001")
                                ]),
                                createVNode("div", {
                                  class: "d-flex mt-5",
                                  style: { "color": "grey" },
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, [
                                  createVNode("span", null, "Category"),
                                  createVNode("span", { class: "ms-5" }, ":"),
                                  createVNode("span", { class: "ms-3" }, "Nike")
                                ]),
                                createVNode("div", {
                                  class: "d-flex mt-5",
                                  style: { "color": "grey" },
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, [
                                  createVNode("span", null, "Tags"),
                                  createVNode("span", { class: "ms-14" }, ":"),
                                  createVNode("span", { class: "ms-3" }, "Running, Gym")
                                ]),
                                createVNode("div", {
                                  class: "d-flex mt-5",
                                  style: { "color": "grey" },
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, [
                                  createVNode("span", null, "Share"),
                                  createVNode("span", { class: "ms-12" }, ":"),
                                  createVNode("div", { class: "ms-3" }, [
                                    createVNode(_component_v_icon, { icon: "mdi-facebook" }),
                                    createVNode(_component_v_icon, {
                                      icon: "mdi-twitter",
                                      class: "ms-3"
                                    }),
                                    createVNode(_component_v_icon, {
                                      icon: "mdi-instagram",
                                      class: "ms-3"
                                    }),
                                    createVNode(_component_v_icon, {
                                      icon: "mdi-linkedin",
                                      class: "ms-3"
                                    })
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex" }, [
                      createVNode(_component_nuxt_link, {
                        to: "/",
                        style: { "text-decoration": "none", "color": "black" }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Home")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_icon, {
                        icon: "mdi-greater-than",
                        class: "ms-3"
                      }),
                      createVNode(_component_nuxt_link, {
                        to: "/shop",
                        style: { "text-decoration": "none", "color": "black" }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "ms-3" }, "Shop")
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "font-weight-bold ms-5" }, "|"),
                      createVNode("span", { class: "ms-5" }, toDisplayString(unref(product).name), 1)
                    ]),
                    createVNode(_component_v_row, { class: "mt-15" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex justify-content-center" }, [
                              createVNode(_component_v_img, {
                                src: unref(product).image[0],
                                height: "400px",
                                width: "400px",
                                "data-aos": "zoom-in-up",
                                "data-aos-delay": "250"
                              }, null, 8, ["src"])
                            ]),
                            createVNode(unref(Carousel), { "items-to-show": 3.7 }, {
                              addons: withCtx(() => [
                                createVNode(unref(Navigation)),
                                createVNode(unref(Pagination))
                              ]),
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(product).image, (p) => {
                                  return openBlock(), createBlock(unref(Slide), { key: p }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode(_component_v_img, {
                                          src: p,
                                          height: "150px",
                                          width: "150px"
                                        }, null, 8, ["src"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["items-to-show"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", {
                              style: { "color": "#e5345b" },
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " Sneaker Company "),
                            createVNode("h1", {
                              class: "font-weight-bold",
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, toDisplayString(unref(product).name), 1),
                            createVNode("div", {
                              class: "d-flex",
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, [
                              createVNode("div", { class: "text-center" }, [
                                createVNode(_component_v_rating, {
                                  modelValue: _ctx.rating,
                                  "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                  size: "30px",
                                  "bg-color": "#FFCA28",
                                  color: "#FFCA28"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("span", {
                                class: "ms-3 font-weight-bold",
                                style: { "line-height": "30px" }
                              }, "|"),
                              createVNode("span", {
                                class: "ms-3 mt-1",
                                style: { "color": "grey" }
                              }, "5 Customer Review")
                            ]),
                            createVNode("p", {
                              style: { "color": "grey" },
                              class: "mt-7",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, toDisplayString(unref(product).description), 1),
                            createVNode("h2", {
                              class: "mt-3",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, " $" + toDisplayString(unref(product).price) + ".00 ", 1),
                            createVNode("div", { class: "d-flex align-center justify-space-between mt-5" }, [
                              createVNode("div", null, [
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                  type: "number",
                                  class: "px-2",
                                  min: "1",
                                  style: { "border": "1px solid black", "width": "70px" },
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, unref(quantity)]
                                ])
                              ]),
                              createVNode(_component_v_btn, {
                                color: "#e5345b",
                                class: "text-white mt-4",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    icon: "mdi-cart",
                                    class: "ms-3"
                                  }),
                                  createVNode("span", {
                                    class: "ms-4",
                                    onClick: handleAddToCart
                                  }, "Add To Cart")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", {
                              class: "mt-16",
                              style: { "border-top": "black 1px solid" }
                            }, [
                              createVNode("div", {
                                class: "d-flex mt-5",
                                style: { "color": "grey" },
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, [
                                createVNode("span", null, "SKU"),
                                createVNode("span", { class: "ms-16" }, ":"),
                                createVNode("span", { class: "ms-3" }, "SS001")
                              ]),
                              createVNode("div", {
                                class: "d-flex mt-5",
                                style: { "color": "grey" },
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, [
                                createVNode("span", null, "Category"),
                                createVNode("span", { class: "ms-5" }, ":"),
                                createVNode("span", { class: "ms-3" }, "Nike")
                              ]),
                              createVNode("div", {
                                class: "d-flex mt-5",
                                style: { "color": "grey" },
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, [
                                createVNode("span", null, "Tags"),
                                createVNode("span", { class: "ms-14" }, ":"),
                                createVNode("span", { class: "ms-3" }, "Running, Gym")
                              ]),
                              createVNode("div", {
                                class: "d-flex mt-5",
                                style: { "color": "grey" },
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, [
                                createVNode("span", null, "Share"),
                                createVNode("span", { class: "ms-12" }, ":"),
                                createVNode("div", { class: "ms-3" }, [
                                  createVNode(_component_v_icon, { icon: "mdi-facebook" }),
                                  createVNode(_component_v_icon, {
                                    icon: "mdi-twitter",
                                    class: "ms-3"
                                  }),
                                  createVNode(_component_v_icon, {
                                    icon: "mdi-instagram",
                                    class: "ms-3"
                                  }),
                                  createVNode(_component_v_icon, {
                                    icon: "mdi-linkedin",
                                    class: "ms-3"
                                  })
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card, {
              width: "100%",
              color: "#f5f5f7",
              class: "pa-5 mt-16",
              flat: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-center" data-aos="fade-right" data-aos-delay="500"${_scopeId3}> Similar Product </h1><p class="text-center" data-aos="fade-up" data-aos-delay="500"${_scopeId3}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>`);
                        _push4(ssrRenderComponent(_component_v_row, { class: "mt-15" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(similarProduct), (s) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  md: "3",
                                  key: s,
                                  "data-aos": "zoom-in-up",
                                  "data-aos-delay": "250"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, {
                                        class: "mx-auto",
                                        "max-width": "344"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: s.image,
                                              height: "200px",
                                              width: "100%",
                                              cover: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_card_subtitle, { class: "mt-4" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` Nike `);
                                                } else {
                                                  return [
                                                    createTextVNode(" Nike ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_card_title, { class: "font-weight-bold" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(s.name)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(s.name), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_card_subtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` New Design 2023 `);
                                                } else {
                                                  return [
                                                    createTextVNode(" New Design 2023 ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_card_actions, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_rating, {
                                                    modelValue: _ctx.rating,
                                                    "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                                    size: "30px",
                                                    "bg-color": "#FFCA28",
                                                    color: "#FFCA28"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_rating, {
                                                      modelValue: _ctx.rating,
                                                      "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                                      size: "30px",
                                                      "bg-color": "#FFCA28",
                                                      color: "#FFCA28"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: s.image,
                                                height: "200px",
                                                width: "100%",
                                                cover: ""
                                              }, null, 8, ["src"]),
                                              createVNode(_component_v_card_subtitle, { class: "mt-4" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Nike ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_title, { class: "font-weight-bold" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(s.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_card_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" New Design 2023 ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_actions, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_rating, {
                                                    modelValue: _ctx.rating,
                                                    "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                                    size: "30px",
                                                    "bg-color": "#FFCA28",
                                                    color: "#FFCA28"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_card, {
                                          class: "mx-auto",
                                          "max-width": "344"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: s.image,
                                              height: "200px",
                                              width: "100%",
                                              cover: ""
                                            }, null, 8, ["src"]),
                                            createVNode(_component_v_card_subtitle, { class: "mt-4" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Nike ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_title, { class: "font-weight-bold" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(s.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_card_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" New Design 2023 ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_actions, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_rating, {
                                                  modelValue: _ctx.rating,
                                                  "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                                  size: "30px",
                                                  "bg-color": "#FFCA28",
                                                  color: "#FFCA28"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(similarProduct), (s) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    md: "3",
                                    key: s,
                                    "data-aos": "zoom-in-up",
                                    "data-aos-delay": "250"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        class: "mx-auto",
                                        "max-width": "344"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: s.image,
                                            height: "200px",
                                            width: "100%",
                                            cover: ""
                                          }, null, 8, ["src"]),
                                          createVNode(_component_v_card_subtitle, { class: "mt-4" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Nike ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_title, { class: "font-weight-bold" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(s.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" New Design 2023 ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_actions, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_rating, {
                                                modelValue: _ctx.rating,
                                                "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                                size: "30px",
                                                "bg-color": "#FFCA28",
                                                color: "#FFCA28"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", {
                            class: "text-center",
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, " Similar Product "),
                          createVNode("p", {
                            class: "text-center",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. "),
                          createVNode(_component_v_row, { class: "mt-15" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(similarProduct), (s) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  cols: "12",
                                  md: "3",
                                  key: s,
                                  "data-aos": "zoom-in-up",
                                  "data-aos-delay": "250"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      class: "mx-auto",
                                      "max-width": "344"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: s.image,
                                          height: "200px",
                                          width: "100%",
                                          cover: ""
                                        }, null, 8, ["src"]),
                                        createVNode(_component_v_card_subtitle, { class: "mt-4" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Nike ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_title, { class: "font-weight-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(s.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_subtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" New Design 2023 ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_actions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_rating, {
                                              modelValue: _ctx.rating,
                                              "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                              size: "30px",
                                              "bg-color": "#FFCA28",
                                              color: "#FFCA28"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, null, {
                      default: withCtx(() => [
                        createVNode("h1", {
                          class: "text-center",
                          "data-aos": "fade-right",
                          "data-aos-delay": "500"
                        }, " Similar Product "),
                        createVNode("p", {
                          class: "text-center",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. "),
                        createVNode(_component_v_row, { class: "mt-15" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(similarProduct), (s) => {
                              return openBlock(), createBlock(_component_v_col, {
                                cols: "12",
                                md: "3",
                                key: s,
                                "data-aos": "zoom-in-up",
                                "data-aos-delay": "250"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    class: "mx-auto",
                                    "max-width": "344"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: s.image,
                                        height: "200px",
                                        width: "100%",
                                        cover: ""
                                      }, null, 8, ["src"]),
                                      createVNode(_component_v_card_subtitle, { class: "mt-4" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Nike ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_title, { class: "font-weight-bold" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(s.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" New Design 2023 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_rating, {
                                            modelValue: _ctx.rating,
                                            "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                            size: "30px",
                                            "bg-color": "#FFCA28",
                                            color: "#FFCA28"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    variant: "outlined",
                    width: "100%",
                    class: "pa-5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, { class: "mt-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p class="text-uppercase" data-aos="fade-right" data-aos-delay="500"${_scopeId5}> WRITE A CUSTOMER REVIEW </p><h3 class="mt-3" data-aos="fade-right" data-aos-delay="500"${_scopeId5}> We love to hear from you </h3>`);
                                    _push6(ssrRenderComponent(_component_v_form, {
                                      class: "mt-6",
                                      onSubmit: handleReview
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_select, {
                                            modelValue: unref(selectedRating),
                                            "onUpdate:modelValue": ($event) => isRef(selectedRating) ? selectedRating.value = $event : null,
                                            label: "Rate this product",
                                            variant: "outlined",
                                            items: unref(ratingNumber)
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_textarea, {
                                            modelValue: unref(comment),
                                            "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                            label: "Message",
                                            variant: "outlined",
                                            dense: "",
                                            placeholder: "Enter your message",
                                            style: { "height": "250px" }
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            color: "#e5345b",
                                            type: "submit",
                                            class: "mt-5 text-white px-15",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Send`);
                                              } else {
                                                return [
                                                  createTextVNode("Send")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_select, {
                                              modelValue: unref(selectedRating),
                                              "onUpdate:modelValue": ($event) => isRef(selectedRating) ? selectedRating.value = $event : null,
                                              label: "Rate this product",
                                              variant: "outlined",
                                              items: unref(ratingNumber)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode(_component_v_textarea, {
                                              modelValue: unref(comment),
                                              "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                              label: "Message",
                                              variant: "outlined",
                                              dense: "",
                                              placeholder: "Enter your message",
                                              style: { "height": "250px" }
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_btn, {
                                              color: "#e5345b",
                                              type: "submit",
                                              class: "mt-5 text-white px-15",
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Send")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("p", {
                                        class: "text-uppercase",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " WRITE A CUSTOMER REVIEW "),
                                      createVNode("h3", {
                                        class: "mt-3",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " We love to hear from you "),
                                      createVNode(_component_v_form, {
                                        class: "mt-6",
                                        onSubmit: withModifiers(handleReview, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            modelValue: unref(selectedRating),
                                            "onUpdate:modelValue": ($event) => isRef(selectedRating) ? selectedRating.value = $event : null,
                                            label: "Rate this product",
                                            variant: "outlined",
                                            items: unref(ratingNumber)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode(_component_v_textarea, {
                                            modelValue: unref(comment),
                                            "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                            label: "Message",
                                            variant: "outlined",
                                            dense: "",
                                            placeholder: "Enter your message",
                                            style: { "height": "250px" }
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_btn, {
                                            color: "#e5345b",
                                            type: "submit",
                                            class: "mt-5 text-white px-15",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Send")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onSubmit"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6",
                                class: "ps-10"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${ssrRenderAttrs(mergeProps({ style: { "height": "400px", "overflow-y": "auto" } }, ssrGetDirectiveProps(_ctx, _directive_scroll_y)))}${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(product).reviews, (r) => {
                                      _push6(`<div class="d-flex mt-5"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_avatar, { size: "x-large" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<img src="https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819" alt="avatar" style="${ssrRenderStyle({ "width": "100%", "height": "100%" })}"${_scopeId6}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                                alt: "avatar",
                                                style: { "width": "100%", "height": "100%" }
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="ms-5"${_scopeId5}><h3${_scopeId5}>${ssrInterpolate(r.name)}</h3>`);
                                      _push6(ssrRenderComponent(_component_v_rating, {
                                        length: "5",
                                        "model-value": r.rating,
                                        size: "20px",
                                        "bg-color": "#FFCA28",
                                        color: "#FFCA28"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<p${_scopeId5}>${ssrInterpolate(r.comment)}</p><p class="mt-2 text-grey"${_scopeId5}>${ssrInterpolate(( new Date()).toLocaleDateString())}</p></div></div>`);
                                    });
                                    _push6(`<!--]--></div>`);
                                  } else {
                                    return [
                                      withDirectives((openBlock(), createBlock("div", { style: { "height": "400px", "overflow-y": "auto" } }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(product).reviews, (r) => {
                                          return openBlock(), createBlock("div", {
                                            class: "d-flex mt-5",
                                            key: r
                                          }, [
                                            createVNode(_component_v_avatar, { size: "x-large" }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                                  alt: "avatar",
                                                  style: { "width": "100%", "height": "100%" }
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "ms-5" }, [
                                              createVNode("h3", null, toDisplayString(r.name), 1),
                                              createVNode(_component_v_rating, {
                                                length: "5",
                                                "model-value": r.rating,
                                                size: "20px",
                                                "bg-color": "#FFCA28",
                                                color: "#FFCA28"
                                              }, null, 8, ["model-value"]),
                                              createVNode("p", null, toDisplayString(r.comment), 1),
                                              createVNode("p", { class: "mt-2 text-grey" }, toDisplayString((/* @__PURE__ */ new Date()).toLocaleDateString()), 1)
                                            ])
                                          ]);
                                        }), 128))
                                      ])), [
                                        [_directive_scroll_y]
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", {
                                      class: "text-uppercase",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, " WRITE A CUSTOMER REVIEW "),
                                    createVNode("h3", {
                                      class: "mt-3",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, " We love to hear from you "),
                                    createVNode(_component_v_form, {
                                      class: "mt-6",
                                      onSubmit: withModifiers(handleReview, ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          modelValue: unref(selectedRating),
                                          "onUpdate:modelValue": ($event) => isRef(selectedRating) ? selectedRating.value = $event : null,
                                          label: "Rate this product",
                                          variant: "outlined",
                                          items: unref(ratingNumber)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                        createVNode(_component_v_textarea, {
                                          modelValue: unref(comment),
                                          "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                          label: "Message",
                                          variant: "outlined",
                                          dense: "",
                                          placeholder: "Enter your message",
                                          style: { "height": "250px" }
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_btn, {
                                          color: "#e5345b",
                                          type: "submit",
                                          class: "mt-5 text-white px-15",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Send")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onSubmit"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "ps-10"
                                }, {
                                  default: withCtx(() => [
                                    withDirectives((openBlock(), createBlock("div", { style: { "height": "400px", "overflow-y": "auto" } }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(product).reviews, (r) => {
                                        return openBlock(), createBlock("div", {
                                          class: "d-flex mt-5",
                                          key: r
                                        }, [
                                          createVNode(_component_v_avatar, { size: "x-large" }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                                alt: "avatar",
                                                style: { "width": "100%", "height": "100%" }
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "ms-5" }, [
                                            createVNode("h3", null, toDisplayString(r.name), 1),
                                            createVNode(_component_v_rating, {
                                              length: "5",
                                              "model-value": r.rating,
                                              size: "20px",
                                              "bg-color": "#FFCA28",
                                              color: "#FFCA28"
                                            }, null, 8, ["model-value"]),
                                            createVNode("p", null, toDisplayString(r.comment), 1),
                                            createVNode("p", { class: "mt-2 text-grey" }, toDisplayString((/* @__PURE__ */ new Date()).toLocaleDateString()), 1)
                                          ])
                                        ]);
                                      }), 128))
                                    ])), [
                                      [_directive_scroll_y]
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, { class: "mt-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", {
                                    class: "text-uppercase",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, " WRITE A CUSTOMER REVIEW "),
                                  createVNode("h3", {
                                    class: "mt-3",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, " We love to hear from you "),
                                  createVNode(_component_v_form, {
                                    class: "mt-6",
                                    onSubmit: withModifiers(handleReview, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        modelValue: unref(selectedRating),
                                        "onUpdate:modelValue": ($event) => isRef(selectedRating) ? selectedRating.value = $event : null,
                                        label: "Rate this product",
                                        variant: "outlined",
                                        items: unref(ratingNumber)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                      createVNode(_component_v_textarea, {
                                        modelValue: unref(comment),
                                        "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                        label: "Message",
                                        variant: "outlined",
                                        dense: "",
                                        placeholder: "Enter your message",
                                        style: { "height": "250px" }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_btn, {
                                        color: "#e5345b",
                                        type: "submit",
                                        class: "mt-5 text-white px-15",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Send")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onSubmit"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6",
                                class: "ps-10"
                              }, {
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock("div", { style: { "height": "400px", "overflow-y": "auto" } }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(product).reviews, (r) => {
                                      return openBlock(), createBlock("div", {
                                        class: "d-flex mt-5",
                                        key: r
                                      }, [
                                        createVNode(_component_v_avatar, { size: "x-large" }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                              alt: "avatar",
                                              style: { "width": "100%", "height": "100%" }
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "ms-5" }, [
                                          createVNode("h3", null, toDisplayString(r.name), 1),
                                          createVNode(_component_v_rating, {
                                            length: "5",
                                            "model-value": r.rating,
                                            size: "20px",
                                            "bg-color": "#FFCA28",
                                            color: "#FFCA28"
                                          }, null, 8, ["model-value"]),
                                          createVNode("p", null, toDisplayString(r.comment), 1),
                                          createVNode("p", { class: "mt-2 text-grey" }, toDisplayString((/* @__PURE__ */ new Date()).toLocaleDateString()), 1)
                                        ])
                                      ]);
                                    }), 128))
                                  ])), [
                                    [_directive_scroll_y]
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card, {
                    width: "100%",
                    class: "mt-15",
                    flat: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, { class: "text-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex justify-center"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_img, {
                                      width: "100px",
                                      height: "100px",
                                      src: "https://www.cambokicks.com/Icons/money.svg",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><h3 class="mt-5" data-aos="fade-right" data-aos-delay="500"${_scopeId5}> 100% AUTHENTIC </h3><p class="mt-3" data-aos="fade-up" data-aos-delay="500"${_scopeId5}> All items are verified by our teams and are guaranteed 100% authentic or your money back. </p>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex justify-center" }, [
                                        createVNode(_component_v_img, {
                                          width: "100px",
                                          height: "100px",
                                          src: "https://www.cambokicks.com/Icons/money.svg",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        })
                                      ]),
                                      createVNode("h3", {
                                        class: "mt-5",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " 100% AUTHENTIC "),
                                      createVNode("p", {
                                        class: "mt-3",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, " All items are verified by our teams and are guaranteed 100% authentic or your money back. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex justify-center"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_img, {
                                      width: "100px",
                                      height: "100px",
                                      src: "https://www.cambokicks.com/Icons/shield.svg",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><h3 class="mt-5" data-aos="fade-right" data-aos-delay="500"${_scopeId5}> SECURE CHECKOUT </h3><p class="mt-3" data-aos="fade-up" data-aos-delay="500"${_scopeId5}> Our payment gateway is optimized to ensure a secure shopping experience for our customers. </p>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex justify-center" }, [
                                        createVNode(_component_v_img, {
                                          width: "100px",
                                          height: "100px",
                                          src: "https://www.cambokicks.com/Icons/shield.svg",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        })
                                      ]),
                                      createVNode("h3", {
                                        class: "mt-5",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " SECURE CHECKOUT "),
                                      createVNode("p", {
                                        class: "mt-3",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, " Our payment gateway is optimized to ensure a secure shopping experience for our customers. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-center" }, [
                                      createVNode(_component_v_img, {
                                        width: "100px",
                                        height: "100px",
                                        src: "https://www.cambokicks.com/Icons/money.svg",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      })
                                    ]),
                                    createVNode("h3", {
                                      class: "mt-5",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, " 100% AUTHENTIC "),
                                    createVNode("p", {
                                      class: "mt-3",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, " All items are verified by our teams and are guaranteed 100% authentic or your money back. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-center" }, [
                                      createVNode(_component_v_img, {
                                        width: "100px",
                                        height: "100px",
                                        src: "https://www.cambokicks.com/Icons/shield.svg",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      })
                                    ]),
                                    createVNode("h3", {
                                      class: "mt-5",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, " SECURE CHECKOUT "),
                                    createVNode("p", {
                                      class: "mt-3",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, " Our payment gateway is optimized to ensure a secure shopping experience for our customers. ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, { class: "text-center" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-center" }, [
                                    createVNode(_component_v_img, {
                                      width: "100px",
                                      height: "100px",
                                      src: "https://www.cambokicks.com/Icons/money.svg",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    })
                                  ]),
                                  createVNode("h3", {
                                    class: "mt-5",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, " 100% AUTHENTIC "),
                                  createVNode("p", {
                                    class: "mt-3",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, " All items are verified by our teams and are guaranteed 100% authentic or your money back. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-center" }, [
                                    createVNode(_component_v_img, {
                                      width: "100px",
                                      height: "100px",
                                      src: "https://www.cambokicks.com/Icons/shield.svg",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    })
                                  ]),
                                  createVNode("h3", {
                                    class: "mt-5",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, " SECURE CHECKOUT "),
                                  createVNode("p", {
                                    class: "mt-3",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, " Our payment gateway is optimized to ensure a secure shopping experience for our customers. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, {
                      variant: "outlined",
                      width: "100%",
                      class: "pa-5"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, { class: "mt-5" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", {
                                  class: "text-uppercase",
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " WRITE A CUSTOMER REVIEW "),
                                createVNode("h3", {
                                  class: "mt-3",
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " We love to hear from you "),
                                createVNode(_component_v_form, {
                                  class: "mt-6",
                                  onSubmit: withModifiers(handleReview, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      modelValue: unref(selectedRating),
                                      "onUpdate:modelValue": ($event) => isRef(selectedRating) ? selectedRating.value = $event : null,
                                      label: "Rate this product",
                                      variant: "outlined",
                                      items: unref(ratingNumber)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                    createVNode(_component_v_textarea, {
                                      modelValue: unref(comment),
                                      "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                      label: "Message",
                                      variant: "outlined",
                                      dense: "",
                                      placeholder: "Enter your message",
                                      style: { "height": "250px" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_btn, {
                                      color: "#e5345b",
                                      type: "submit",
                                      class: "mt-5 text-white px-15",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Send")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6",
                              class: "ps-10"
                            }, {
                              default: withCtx(() => [
                                withDirectives((openBlock(), createBlock("div", { style: { "height": "400px", "overflow-y": "auto" } }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(product).reviews, (r) => {
                                    return openBlock(), createBlock("div", {
                                      class: "d-flex mt-5",
                                      key: r
                                    }, [
                                      createVNode(_component_v_avatar, { size: "x-large" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                            alt: "avatar",
                                            style: { "width": "100%", "height": "100%" }
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "ms-5" }, [
                                        createVNode("h3", null, toDisplayString(r.name), 1),
                                        createVNode(_component_v_rating, {
                                          length: "5",
                                          "model-value": r.rating,
                                          size: "20px",
                                          "bg-color": "#FFCA28",
                                          color: "#FFCA28"
                                        }, null, 8, ["model-value"]),
                                        createVNode("p", null, toDisplayString(r.comment), 1),
                                        createVNode("p", { class: "mt-2 text-grey" }, toDisplayString((/* @__PURE__ */ new Date()).toLocaleDateString()), 1)
                                      ])
                                    ]);
                                  }), 128))
                                ])), [
                                  [_directive_scroll_y]
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card, {
                      width: "100%",
                      class: "mt-15",
                      flat: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, { class: "text-center" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-center" }, [
                                  createVNode(_component_v_img, {
                                    width: "100px",
                                    height: "100px",
                                    src: "https://www.cambokicks.com/Icons/money.svg",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  })
                                ]),
                                createVNode("h3", {
                                  class: "mt-5",
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " 100% AUTHENTIC "),
                                createVNode("p", {
                                  class: "mt-3",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, " All items are verified by our teams and are guaranteed 100% authentic or your money back. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-center" }, [
                                  createVNode(_component_v_img, {
                                    width: "100px",
                                    height: "100px",
                                    src: "https://www.cambokicks.com/Icons/shield.svg",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  })
                                ]),
                                createVNode("h3", {
                                  class: "mt-5",
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " SECURE CHECKOUT "),
                                createVNode("p", {
                                  class: "mt-3",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, " Our payment gateway is optimized to ensure a secure shopping experience for our customers. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_snackbar, {
              modelValue: unref(commentSnackbar),
              "onUpdate:modelValue": ($event) => isRef(commentSnackbar) ? commentSnackbar.value = $event : null,
              color: "green",
              bottom: "",
              right: ""
            }, {
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "white",
                    onClick: ($event) => commentSnackbar.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Close `);
                      } else {
                        return [
                          createTextVNode(" Close ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      color: "white",
                      onClick: ($event) => commentSnackbar.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Close ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Comment added \u{1F4AC} `);
                } else {
                  return [
                    createTextVNode(" Comment added \u{1F4AC} ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex" }, [
                    createVNode(_component_nuxt_link, {
                      to: "/",
                      style: { "text-decoration": "none", "color": "black" }
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Home")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_icon, {
                      icon: "mdi-greater-than",
                      class: "ms-3"
                    }),
                    createVNode(_component_nuxt_link, {
                      to: "/shop",
                      style: { "text-decoration": "none", "color": "black" }
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "ms-3" }, "Shop")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "font-weight-bold ms-5" }, "|"),
                    createVNode("span", { class: "ms-5" }, toDisplayString(unref(product).name), 1)
                  ]),
                  createVNode(_component_v_row, { class: "mt-15" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-content-center" }, [
                            createVNode(_component_v_img, {
                              src: unref(product).image[0],
                              height: "400px",
                              width: "400px",
                              "data-aos": "zoom-in-up",
                              "data-aos-delay": "250"
                            }, null, 8, ["src"])
                          ]),
                          createVNode(unref(Carousel), { "items-to-show": 3.7 }, {
                            addons: withCtx(() => [
                              createVNode(unref(Navigation)),
                              createVNode(unref(Pagination))
                            ]),
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(product).image, (p) => {
                                return openBlock(), createBlock(unref(Slide), { key: p }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode(_component_v_img, {
                                        src: p,
                                        height: "150px",
                                        width: "150px"
                                      }, null, 8, ["src"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["items-to-show"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", {
                            style: { "color": "#e5345b" },
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, " Sneaker Company "),
                          createVNode("h1", {
                            class: "font-weight-bold",
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, toDisplayString(unref(product).name), 1),
                          createVNode("div", {
                            class: "d-flex",
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, [
                            createVNode("div", { class: "text-center" }, [
                              createVNode(_component_v_rating, {
                                modelValue: _ctx.rating,
                                "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                size: "30px",
                                "bg-color": "#FFCA28",
                                color: "#FFCA28"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("span", {
                              class: "ms-3 font-weight-bold",
                              style: { "line-height": "30px" }
                            }, "|"),
                            createVNode("span", {
                              class: "ms-3 mt-1",
                              style: { "color": "grey" }
                            }, "5 Customer Review")
                          ]),
                          createVNode("p", {
                            style: { "color": "grey" },
                            class: "mt-7",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, toDisplayString(unref(product).description), 1),
                          createVNode("h2", {
                            class: "mt-3",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, " $" + toDisplayString(unref(product).price) + ".00 ", 1),
                          createVNode("div", { class: "d-flex align-center justify-space-between mt-5" }, [
                            createVNode("div", null, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                type: "number",
                                class: "px-2",
                                min: "1",
                                style: { "border": "1px solid black", "width": "70px" },
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(quantity)]
                              ])
                            ]),
                            createVNode(_component_v_btn, {
                              color: "#e5345b",
                              class: "text-white mt-4",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  icon: "mdi-cart",
                                  class: "ms-3"
                                }),
                                createVNode("span", {
                                  class: "ms-4",
                                  onClick: handleAddToCart
                                }, "Add To Cart")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", {
                            class: "mt-16",
                            style: { "border-top": "black 1px solid" }
                          }, [
                            createVNode("div", {
                              class: "d-flex mt-5",
                              style: { "color": "grey" },
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, [
                              createVNode("span", null, "SKU"),
                              createVNode("span", { class: "ms-16" }, ":"),
                              createVNode("span", { class: "ms-3" }, "SS001")
                            ]),
                            createVNode("div", {
                              class: "d-flex mt-5",
                              style: { "color": "grey" },
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, [
                              createVNode("span", null, "Category"),
                              createVNode("span", { class: "ms-5" }, ":"),
                              createVNode("span", { class: "ms-3" }, "Nike")
                            ]),
                            createVNode("div", {
                              class: "d-flex mt-5",
                              style: { "color": "grey" },
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, [
                              createVNode("span", null, "Tags"),
                              createVNode("span", { class: "ms-14" }, ":"),
                              createVNode("span", { class: "ms-3" }, "Running, Gym")
                            ]),
                            createVNode("div", {
                              class: "d-flex mt-5",
                              style: { "color": "grey" },
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, [
                              createVNode("span", null, "Share"),
                              createVNode("span", { class: "ms-12" }, ":"),
                              createVNode("div", { class: "ms-3" }, [
                                createVNode(_component_v_icon, { icon: "mdi-facebook" }),
                                createVNode(_component_v_icon, {
                                  icon: "mdi-twitter",
                                  class: "ms-3"
                                }),
                                createVNode(_component_v_icon, {
                                  icon: "mdi-instagram",
                                  class: "ms-3"
                                }),
                                createVNode(_component_v_icon, {
                                  icon: "mdi-linkedin",
                                  class: "ms-3"
                                })
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_card, {
                width: "100%",
                color: "#f5f5f7",
                class: "pa-5 mt-16",
                flat: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, null, {
                    default: withCtx(() => [
                      createVNode("h1", {
                        class: "text-center",
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, " Similar Product "),
                      createVNode("p", {
                        class: "text-center",
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. "),
                      createVNode(_component_v_row, { class: "mt-15" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(similarProduct), (s) => {
                            return openBlock(), createBlock(_component_v_col, {
                              cols: "12",
                              md: "3",
                              key: s,
                              "data-aos": "zoom-in-up",
                              "data-aos-delay": "250"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  class: "mx-auto",
                                  "max-width": "344"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: s.image,
                                      height: "200px",
                                      width: "100%",
                                      cover: ""
                                    }, null, 8, ["src"]),
                                    createVNode(_component_v_card_subtitle, { class: "mt-4" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Nike ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_title, { class: "font-weight-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(s.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_subtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" New Design 2023 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_actions, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_rating, {
                                          modelValue: _ctx.rating,
                                          "onUpdate:modelValue": ($event) => _ctx.rating = $event,
                                          size: "30px",
                                          "bg-color": "#FFCA28",
                                          color: "#FFCA28"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    variant: "outlined",
                    width: "100%",
                    class: "pa-5"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, { class: "mt-5" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", {
                                class: "text-uppercase",
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " WRITE A CUSTOMER REVIEW "),
                              createVNode("h3", {
                                class: "mt-3",
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " We love to hear from you "),
                              createVNode(_component_v_form, {
                                class: "mt-6",
                                onSubmit: withModifiers(handleReview, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    modelValue: unref(selectedRating),
                                    "onUpdate:modelValue": ($event) => isRef(selectedRating) ? selectedRating.value = $event : null,
                                    label: "Rate this product",
                                    variant: "outlined",
                                    items: unref(ratingNumber)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                  createVNode(_component_v_textarea, {
                                    modelValue: unref(comment),
                                    "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                    label: "Message",
                                    variant: "outlined",
                                    dense: "",
                                    placeholder: "Enter your message",
                                    style: { "height": "250px" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_btn, {
                                    color: "#e5345b",
                                    type: "submit",
                                    class: "mt-5 text-white px-15",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Send")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onSubmit"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6",
                            class: "ps-10"
                          }, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock("div", { style: { "height": "400px", "overflow-y": "auto" } }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(product).reviews, (r) => {
                                  return openBlock(), createBlock("div", {
                                    class: "d-flex mt-5",
                                    key: r
                                  }, [
                                    createVNode(_component_v_avatar, { size: "x-large" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                          alt: "avatar",
                                          style: { "width": "100%", "height": "100%" }
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "ms-5" }, [
                                      createVNode("h3", null, toDisplayString(r.name), 1),
                                      createVNode(_component_v_rating, {
                                        length: "5",
                                        "model-value": r.rating,
                                        size: "20px",
                                        "bg-color": "#FFCA28",
                                        color: "#FFCA28"
                                      }, null, 8, ["model-value"]),
                                      createVNode("p", null, toDisplayString(r.comment), 1),
                                      createVNode("p", { class: "mt-2 text-grey" }, toDisplayString((/* @__PURE__ */ new Date()).toLocaleDateString()), 1)
                                    ])
                                  ]);
                                }), 128))
                              ])), [
                                [_directive_scroll_y]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card, {
                    width: "100%",
                    class: "mt-15",
                    flat: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, { class: "text-center" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-center" }, [
                                createVNode(_component_v_img, {
                                  width: "100px",
                                  height: "100px",
                                  src: "https://www.cambokicks.com/Icons/money.svg",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                })
                              ]),
                              createVNode("h3", {
                                class: "mt-5",
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " 100% AUTHENTIC "),
                              createVNode("p", {
                                class: "mt-3",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, " All items are verified by our teams and are guaranteed 100% authentic or your money back. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-center" }, [
                                createVNode(_component_v_img, {
                                  width: "100px",
                                  height: "100px",
                                  src: "https://www.cambokicks.com/Icons/shield.svg",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                })
                              ]),
                              createVNode("h3", {
                                class: "mt-5",
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " SECURE CHECKOUT "),
                              createVNode("p", {
                                class: "mt-3",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, " Our payment gateway is optimized to ensure a secure shopping experience for our customers. ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_snackbar, {
                modelValue: unref(commentSnackbar),
                "onUpdate:modelValue": ($event) => isRef(commentSnackbar) ? commentSnackbar.value = $event : null,
                color: "green",
                bottom: "",
                right: ""
              }, {
                actions: withCtx(() => [
                  createVNode(_component_v_btn, {
                    color: "white",
                    onClick: ($event) => commentSnackbar.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Close ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  createTextVNode(" Comment added \u{1F4AC} ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-6ae7b913.mjs.map
