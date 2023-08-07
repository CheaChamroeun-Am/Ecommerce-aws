import { p as publicAssetsURL } from './renderer.mjs';
import { withAsyncContext, ref, resolveComponent, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as useStore, u as useRoute, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-80d3cee7.mjs';
import { u as useFetch } from './fetch-cf13354b.mjs';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue-bundle-renderer/runtime';
import 'h3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'defu';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'vue-devtools-stub';
import 'js-cookie';

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_parallax = resolveComponent("v-parallax");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_img = resolveComponent("v-img");
  _push(ssrRenderComponent(_component_v_card, mergeProps({ flat: "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_parallax, {
          src: "/images/home-bg-1.jpg",
          class: "home-img"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_container, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text-overlay2 pa-15" data-v-99a6bd23${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_row, { class: "d-flex align-center" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h4 class="font-weight-bold" style="${ssrRenderStyle({ "font-size": "25px" })}" data-aos="fade-right" data-aos-delay="500" data-v-99a6bd23${_scopeId5}> In this season, find the best \u{1F525} </h4><h1 class="font-weight-bold" style="${ssrRenderStyle({ "font-size": "45px" })}" data-aos="fade-right" data-aos-delay="500" data-v-99a6bd23${_scopeId5}> Exclusive collection for everyone </h1><p data-aos="fade-right" data-aos-delay="500" data-v-99a6bd23${_scopeId5}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere, libero non suscipit officia vero eum dignissimos esse in enim dolorum sequi! Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere. </p>`);
                                _push6(ssrRenderComponent(_component_v_btn, {
                                  class: "mt-5",
                                  rounded: "pill",
                                  variant: "outlined",
                                  color: "#e5345b",
                                  width: "200px",
                                  height: "50px",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Explore More `);
                                    } else {
                                      return [
                                        createTextVNode(" Explore More ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("h4", {
                                    class: "font-weight-bold",
                                    style: { "font-size": "25px" },
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, " In this season, find the best \u{1F525} "),
                                  createVNode("h1", {
                                    class: "font-weight-bold",
                                    style: { "font-size": "45px" },
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, " Exclusive collection for everyone "),
                                  createVNode("p", {
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere, libero non suscipit officia vero eum dignissimos esse in enim dolorum sequi! Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere. "),
                                  createVNode(_component_v_btn, {
                                    class: "mt-5",
                                    rounded: "pill",
                                    variant: "outlined",
                                    color: "#e5345b",
                                    width: "200px",
                                    height: "50px",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Explore More ")
                                    ]),
                                    _: 1
                                  })
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
                                _push6(ssrRenderComponent(_component_v_img, {
                                  width: "85%",
                                  "max-height": "700",
                                  class: "shoe-img",
                                  src: "/images/logshoes.png"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_img, {
                                    width: "85%",
                                    "max-height": "700",
                                    class: "shoe-img",
                                    src: "/images/logshoes.png"
                                  })
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
                                createVNode("h4", {
                                  class: "font-weight-bold",
                                  style: { "font-size": "25px" },
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " In this season, find the best \u{1F525} "),
                                createVNode("h1", {
                                  class: "font-weight-bold",
                                  style: { "font-size": "45px" },
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " Exclusive collection for everyone "),
                                createVNode("p", {
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere, libero non suscipit officia vero eum dignissimos esse in enim dolorum sequi! Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere. "),
                                createVNode(_component_v_btn, {
                                  class: "mt-5",
                                  rounded: "pill",
                                  variant: "outlined",
                                  color: "#e5345b",
                                  width: "200px",
                                  height: "50px",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Explore More ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  width: "85%",
                                  "max-height": "700",
                                  class: "shoe-img",
                                  src: "/images/logshoes.png"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-overlay2 pa-15" }, [
                        createVNode(_component_v_row, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("h4", {
                                  class: "font-weight-bold",
                                  style: { "font-size": "25px" },
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " In this season, find the best \u{1F525} "),
                                createVNode("h1", {
                                  class: "font-weight-bold",
                                  style: { "font-size": "45px" },
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " Exclusive collection for everyone "),
                                createVNode("p", {
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere, libero non suscipit officia vero eum dignissimos esse in enim dolorum sequi! Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere. "),
                                createVNode(_component_v_btn, {
                                  class: "mt-5",
                                  rounded: "pill",
                                  variant: "outlined",
                                  color: "#e5345b",
                                  width: "200px",
                                  height: "50px",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Explore More ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  width: "85%",
                                  "max-height": "700",
                                  class: "shoe-img",
                                  src: "/images/logshoes.png"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_container, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-overlay2 pa-15" }, [
                      createVNode(_component_v_row, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", {
                                class: "font-weight-bold",
                                style: { "font-size": "25px" },
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " In this season, find the best \u{1F525} "),
                              createVNode("h1", {
                                class: "font-weight-bold",
                                style: { "font-size": "45px" },
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " Exclusive collection for everyone "),
                              createVNode("p", {
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere, libero non suscipit officia vero eum dignissimos esse in enim dolorum sequi! Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere. "),
                              createVNode(_component_v_btn, {
                                class: "mt-5",
                                rounded: "pill",
                                variant: "outlined",
                                color: "#e5345b",
                                width: "200px",
                                height: "50px",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Explore More ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                width: "85%",
                                "max-height": "700",
                                class: "shoe-img",
                                src: "/images/logshoes.png"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_parallax, {
            src: "/images/home-bg-1.jpg",
            class: "home-img"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-overlay2 pa-15" }, [
                    createVNode(_component_v_row, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("h4", {
                              class: "font-weight-bold",
                              style: { "font-size": "25px" },
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " In this season, find the best \u{1F525} "),
                            createVNode("h1", {
                              class: "font-weight-bold",
                              style: { "font-size": "45px" },
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " Exclusive collection for everyone "),
                            createVNode("p", {
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere, libero non suscipit officia vero eum dignissimos esse in enim dolorum sequi! Culpa ratione voluptas recusandae eveniet excepturi tempore earum nesciunt facere. "),
                            createVNode(_component_v_btn, {
                              class: "mt-5",
                              rounded: "pill",
                              variant: "outlined",
                              color: "#e5345b",
                              width: "200px",
                              height: "50px",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Explore More ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_img, {
                              width: "85%",
                              "max-height": "700",
                              class: "shoe-img",
                              src: "/images/logshoes.png"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
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
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-99a6bd23"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_icon = resolveComponent("v-icon");
  _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "mt-15 pa-10" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "mt-5" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4",
                class: "text-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_icon, {
                      icon: "mdi-truck",
                      style: { "font-size": "2rem" },
                      color: "#e5345b",
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, null, _parent4, _scopeId3));
                    _push4(`<h3 class="mt-3" data-aos="fade-right" data-aos-delay="500"${_scopeId3}> fast delivery </h3><p class="mt-3" data-aos="fade-right" data-aos-delay="500"${_scopeId3}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. </p>`);
                  } else {
                    return [
                      createVNode(_component_v_icon, {
                        icon: "mdi-truck",
                        style: { "font-size": "2rem" },
                        color: "#e5345b",
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }),
                      createVNode("h3", {
                        class: "mt-3",
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, " fast delivery "),
                      createVNode("p", {
                        class: "mt-3",
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4",
                class: "text-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_icon, {
                      icon: "mdi-restore",
                      style: { "font-size": "2rem" },
                      color: "#e5345b",
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, null, _parent4, _scopeId3));
                    _push4(`<h3 class="mt-3" data-aos="fade-right" data-aos-delay="500"${_scopeId3}> fast delivery </h3><p class="mt-3" data-aos="fade-right" data-aos-delay="500"${_scopeId3}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. </p>`);
                  } else {
                    return [
                      createVNode(_component_v_icon, {
                        icon: "mdi-restore",
                        style: { "font-size": "2rem" },
                        color: "#e5345b",
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }),
                      createVNode("h3", {
                        class: "mt-3",
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, " fast delivery "),
                      createVNode("p", {
                        class: "mt-3",
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4",
                class: "text-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_icon, {
                      icon: "mdi-headset",
                      style: { "font-size": "2rem" },
                      color: "#e5345b",
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, null, _parent4, _scopeId3));
                    _push4(`<h3 class="mt-3" data-aos="fade-right" data-aos-delay="500"${_scopeId3}> fast delivery </h3><p class="mt-3" data-aos="fade-right" data-aos-delay="500"${_scopeId3}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. </p>`);
                  } else {
                    return [
                      createVNode(_component_v_icon, {
                        icon: "mdi-headset",
                        style: { "font-size": "2rem" },
                        color: "#e5345b",
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }),
                      createVNode("h3", {
                        class: "mt-3",
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, " fast delivery "),
                      createVNode("p", {
                        class: "mt-3",
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "4",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_icon, {
                      icon: "mdi-truck",
                      style: { "font-size": "2rem" },
                      color: "#e5345b",
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }),
                    createVNode("h3", {
                      class: "mt-3",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, " fast delivery "),
                    createVNode("p", {
                      class: "mt-3",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "4",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_icon, {
                      icon: "mdi-restore",
                      style: { "font-size": "2rem" },
                      color: "#e5345b",
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }),
                    createVNode("h3", {
                      class: "mt-3",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, " fast delivery "),
                    createVNode("p", {
                      class: "mt-3",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "4",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_icon, {
                      icon: "mdi-headset",
                      style: { "font-size": "2rem" },
                      color: "#e5345b",
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }),
                    createVNode("h3", {
                      class: "mt-3",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, " fast delivery "),
                    createVNode("p", {
                      class: "mt-3",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, { class: "mt-5" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                md: "4",
                class: "text-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, {
                    icon: "mdi-truck",
                    style: { "font-size": "2rem" },
                    color: "#e5345b",
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }),
                  createVNode("h3", {
                    class: "mt-3",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, " fast delivery "),
                  createVNode("p", {
                    class: "mt-3",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. ")
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "4",
                class: "text-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, {
                    icon: "mdi-restore",
                    style: { "font-size": "2rem" },
                    color: "#e5345b",
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }),
                  createVNode("h3", {
                    class: "mt-3",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, " fast delivery "),
                  createVNode("p", {
                    class: "mt-3",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. ")
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "4",
                class: "text-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, {
                    icon: "mdi-headset",
                    style: { "font-size": "2rem" },
                    color: "#e5345b",
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }),
                  createVNode("h3", {
                    class: "mt-3",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, " fast delivery "),
                  createVNode("p", {
                    class: "mt-3",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit. ")
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
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Service.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_img = resolveComponent("v-img");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    class: "mt-15 pa-5",
    flat: "",
    color: "#f4f4f4"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="font-weight-bold text-center" data-aos="fade-right" data-aos-delay="500"${_scopeId}> Popular <span style="${ssrRenderStyle({ "color": "#6b7280" })}"${_scopeId}>of the year</span></h1><p class="text-center mt-3" data-aos="fade-up" data-aos-delay="500"${_scopeId}> Find a bright ideal to suit your taste with our great selection of Product, Nike, Addidas, Puma. </p>`);
        _push2(ssrRenderComponent(_component_v_row, { class: "mt-10 text-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p style="${ssrRenderStyle({ "font-size": "20px" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId3}>Top Rated</p><div class="d-flex align-center mt-5 mx-auto" style="${ssrRenderStyle({ "width": "30%" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_img, {
                      src: "/images/1.webp",
                      height: "80px",
                      width: "80px"
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="ms-3"${_scopeId3}><p${_scopeId3}>Jodan 1</p><p${_scopeId3}>$20.00</p></div></div><div class="d-flex align-center mt-5 mx-auto" style="${ssrRenderStyle({ "width": "30%" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_img, {
                      src: "/images/2.webp",
                      height: "80px",
                      width: "80px"
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="ms-3"${_scopeId3}><p${_scopeId3}>Jodan 1</p><p${_scopeId3}>$20.00</p></div></div><div class="d-flex align-center mt-5 mx-auto" style="${ssrRenderStyle({ "width": "30%" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_img, {
                      src: "/images/3.webp",
                      height: "80px",
                      width: "80px"
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="ms-3"${_scopeId3}><p${_scopeId3}>Jodan 1</p><p${_scopeId3}>$20.00</p></div></div>`);
                  } else {
                    return [
                      createVNode("p", {
                        style: { "font-size": "20px" },
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, "Top Rated"),
                      createVNode("div", {
                        class: "d-flex align-center mt-5 mx-auto",
                        style: { "width": "30%" },
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, [
                        createVNode(_component_v_img, {
                          src: "/images/1.webp",
                          height: "80px",
                          width: "80px"
                        }),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("p", null, "Jodan 1"),
                          createVNode("p", null, "$20.00")
                        ])
                      ]),
                      createVNode("div", {
                        class: "d-flex align-center mt-5 mx-auto",
                        style: { "width": "30%" },
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, [
                        createVNode(_component_v_img, {
                          src: "/images/2.webp",
                          height: "80px",
                          width: "80px"
                        }),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("p", null, "Jodan 1"),
                          createVNode("p", null, "$20.00")
                        ])
                      ]),
                      createVNode("div", {
                        class: "d-flex align-center mt-5 mx-auto",
                        style: { "width": "30%" },
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, [
                        createVNode(_component_v_img, {
                          src: "/images/3.webp",
                          height: "80px",
                          width: "80px"
                        }),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("p", null, "Jodan 1"),
                          createVNode("p", null, "$20.00")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p style="${ssrRenderStyle({ "font-size": "20px" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId3}>Best Selling</p><div class="d-flex align-center mt-5 mx-auto" style="${ssrRenderStyle({ "width": "30%" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_img, {
                      src: "/images/4.webp",
                      height: "80px",
                      width: "80px"
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="ms-3"${_scopeId3}><p${_scopeId3}>Jodan 1</p><p${_scopeId3}>$20.00</p></div></div><div class="d-flex align-center mt-5 mx-auto" style="${ssrRenderStyle({ "width": "30%" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_img, {
                      src: "/images/5.webp",
                      height: "80px",
                      width: "80px"
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="ms-3"${_scopeId3}><p${_scopeId3}>Jodan 1</p><p${_scopeId3}>$20.00</p></div></div><div class="d-flex align-center mt-5 mx-auto" style="${ssrRenderStyle({ "width": "30%" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_img, {
                      src: "/images/6.webp",
                      height: "80px",
                      width: "80px"
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="ms-3"${_scopeId3}><p${_scopeId3}>Jodan 1</p><p${_scopeId3}>$20.00</p></div></div>`);
                  } else {
                    return [
                      createVNode("p", {
                        style: { "font-size": "20px" },
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, "Best Selling"),
                      createVNode("div", {
                        class: "d-flex align-center mt-5 mx-auto",
                        style: { "width": "30%" },
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, [
                        createVNode(_component_v_img, {
                          src: "/images/4.webp",
                          height: "80px",
                          width: "80px"
                        }),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("p", null, "Jodan 1"),
                          createVNode("p", null, "$20.00")
                        ])
                      ]),
                      createVNode("div", {
                        class: "d-flex align-center mt-5 mx-auto",
                        style: { "width": "30%" },
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, [
                        createVNode(_component_v_img, {
                          src: "/images/5.webp",
                          height: "80px",
                          width: "80px"
                        }),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("p", null, "Jodan 1"),
                          createVNode("p", null, "$20.00")
                        ])
                      ]),
                      createVNode("div", {
                        class: "d-flex align-center mt-5 mx-auto",
                        style: { "width": "30%" },
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, [
                        createVNode(_component_v_img, {
                          src: "/images/6.webp",
                          height: "80px",
                          width: "80px"
                        }),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("p", null, "Jodan 1"),
                          createVNode("p", null, "$20.00")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_img, {
                      src: "https://cdn.shopify.com/s/files/1/0265/2146/8985/files/59_port_375x.jpg?v=1652517481",
                      height: "350px",
                      width: "300px",
                      class: "mx-auto",
                      "data-aos": "zoom-in-up",
                      "data-aos-delay": "500"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` &gt;`);
                        } else {
                          return [
                            createTextVNode(" >")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_img, {
                        src: "https://cdn.shopify.com/s/files/1/0265/2146/8985/files/59_port_375x.jpg?v=1652517481",
                        height: "350px",
                        width: "300px",
                        class: "mx-auto",
                        "data-aos": "zoom-in-up",
                        "data-aos-delay": "500"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" >")
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
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode("p", {
                      style: { "font-size": "20px" },
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, "Top Rated"),
                    createVNode("div", {
                      class: "d-flex align-center mt-5 mx-auto",
                      style: { "width": "30%" },
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, [
                      createVNode(_component_v_img, {
                        src: "/images/1.webp",
                        height: "80px",
                        width: "80px"
                      }),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("p", null, "Jodan 1"),
                        createVNode("p", null, "$20.00")
                      ])
                    ]),
                    createVNode("div", {
                      class: "d-flex align-center mt-5 mx-auto",
                      style: { "width": "30%" },
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, [
                      createVNode(_component_v_img, {
                        src: "/images/2.webp",
                        height: "80px",
                        width: "80px"
                      }),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("p", null, "Jodan 1"),
                        createVNode("p", null, "$20.00")
                      ])
                    ]),
                    createVNode("div", {
                      class: "d-flex align-center mt-5 mx-auto",
                      style: { "width": "30%" },
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, [
                      createVNode(_component_v_img, {
                        src: "/images/3.webp",
                        height: "80px",
                        width: "80px"
                      }),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("p", null, "Jodan 1"),
                        createVNode("p", null, "$20.00")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode("p", {
                      style: { "font-size": "20px" },
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, "Best Selling"),
                    createVNode("div", {
                      class: "d-flex align-center mt-5 mx-auto",
                      style: { "width": "30%" },
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, [
                      createVNode(_component_v_img, {
                        src: "/images/4.webp",
                        height: "80px",
                        width: "80px"
                      }),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("p", null, "Jodan 1"),
                        createVNode("p", null, "$20.00")
                      ])
                    ]),
                    createVNode("div", {
                      class: "d-flex align-center mt-5 mx-auto",
                      style: { "width": "30%" },
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, [
                      createVNode(_component_v_img, {
                        src: "/images/5.webp",
                        height: "80px",
                        width: "80px"
                      }),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("p", null, "Jodan 1"),
                        createVNode("p", null, "$20.00")
                      ])
                    ]),
                    createVNode("div", {
                      class: "d-flex align-center mt-5 mx-auto",
                      style: { "width": "30%" },
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, [
                      createVNode(_component_v_img, {
                        src: "/images/6.webp",
                        height: "80px",
                        width: "80px"
                      }),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("p", null, "Jodan 1"),
                        createVNode("p", null, "$20.00")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_img, {
                      src: "https://cdn.shopify.com/s/files/1/0265/2146/8985/files/59_port_375x.jpg?v=1652517481",
                      height: "350px",
                      width: "300px",
                      class: "mx-auto",
                      "data-aos": "zoom-in-up",
                      "data-aos-delay": "500"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" >")
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
      } else {
        return [
          createVNode("h1", {
            class: "font-weight-bold text-center",
            "data-aos": "fade-right",
            "data-aos-delay": "500"
          }, [
            createTextVNode(" Popular "),
            createVNode("span", { style: { "color": "#6b7280" } }, "of the year")
          ]),
          createVNode("p", {
            class: "text-center mt-3",
            "data-aos": "fade-up",
            "data-aos-delay": "500"
          }, " Find a bright ideal to suit your taste with our great selection of Product, Nike, Addidas, Puma. "),
          createVNode(_component_v_row, { class: "mt-10 text-center" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode("p", {
                    style: { "font-size": "20px" },
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, "Top Rated"),
                  createVNode("div", {
                    class: "d-flex align-center mt-5 mx-auto",
                    style: { "width": "30%" },
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }, [
                    createVNode(_component_v_img, {
                      src: "/images/1.webp",
                      height: "80px",
                      width: "80px"
                    }),
                    createVNode("div", { class: "ms-3" }, [
                      createVNode("p", null, "Jodan 1"),
                      createVNode("p", null, "$20.00")
                    ])
                  ]),
                  createVNode("div", {
                    class: "d-flex align-center mt-5 mx-auto",
                    style: { "width": "30%" },
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }, [
                    createVNode(_component_v_img, {
                      src: "/images/2.webp",
                      height: "80px",
                      width: "80px"
                    }),
                    createVNode("div", { class: "ms-3" }, [
                      createVNode("p", null, "Jodan 1"),
                      createVNode("p", null, "$20.00")
                    ])
                  ]),
                  createVNode("div", {
                    class: "d-flex align-center mt-5 mx-auto",
                    style: { "width": "30%" },
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }, [
                    createVNode(_component_v_img, {
                      src: "/images/3.webp",
                      height: "80px",
                      width: "80px"
                    }),
                    createVNode("div", { class: "ms-3" }, [
                      createVNode("p", null, "Jodan 1"),
                      createVNode("p", null, "$20.00")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode("p", {
                    style: { "font-size": "20px" },
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, "Best Selling"),
                  createVNode("div", {
                    class: "d-flex align-center mt-5 mx-auto",
                    style: { "width": "30%" },
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }, [
                    createVNode(_component_v_img, {
                      src: "/images/4.webp",
                      height: "80px",
                      width: "80px"
                    }),
                    createVNode("div", { class: "ms-3" }, [
                      createVNode("p", null, "Jodan 1"),
                      createVNode("p", null, "$20.00")
                    ])
                  ]),
                  createVNode("div", {
                    class: "d-flex align-center mt-5 mx-auto",
                    style: { "width": "30%" },
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }, [
                    createVNode(_component_v_img, {
                      src: "/images/5.webp",
                      height: "80px",
                      width: "80px"
                    }),
                    createVNode("div", { class: "ms-3" }, [
                      createVNode("p", null, "Jodan 1"),
                      createVNode("p", null, "$20.00")
                    ])
                  ]),
                  createVNode("div", {
                    class: "d-flex align-center mt-5 mx-auto",
                    style: { "width": "30%" },
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }, [
                    createVNode(_component_v_img, {
                      src: "/images/6.webp",
                      height: "80px",
                      width: "80px"
                    }),
                    createVNode("div", { class: "ms-3" }, [
                      createVNode("p", null, "Jodan 1"),
                      createVNode("p", null, "$20.00")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_img, {
                    src: "https://cdn.shopify.com/s/files/1/0265/2146/8985/files/59_port_375x.jpg?v=1652517481",
                    height: "350px",
                    width: "300px",
                    class: "mx-auto",
                    "data-aos": "zoom-in-up",
                    "data-aos-delay": "500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" >")
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
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopularItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + publicAssetsURL("videos/commercial.mp4");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useStore();
    useRoute();
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "http://18.208.219.245:3002/api/products",
      "$PslAyef5YX"
    )), __temp = await __temp, __restore(), __temp);
    const handleFollow = () => {
      window.open("https://www.facebook.com/", "_blank");
    };
    const faq = ref([
      {
        title: "How do you charge for delevery?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        title: "How do I know if my order has been shipped?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        title: "How do I return an item?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_main = resolveComponent("v-main");
      const _component_home_section = __nuxt_component_0;
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_carousel = resolveComponent("v-carousel");
      const _component_v_carousel_item = resolveComponent("v-carousel-item");
      const _component_Service = __nuxt_component_1;
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_rating = resolveComponent("v-rating");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_popular_item = __nuxt_component_3;
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      _push(ssrRenderComponent(_component_v_main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_home_section, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-15 d-flex" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "8"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card, {
                                            width: "100%",
                                            height: "400",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection3_large.jpg?v=1613156071" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<p class="mt-15 ms-10 font-weight-medium" style="${ssrRenderStyle({ "font-size": "25px" })}"${_scopeId8}> GYM SNEAKER </p>`);
                                                    } else {
                                                      return [
                                                        createVNode("p", {
                                                          class: "mt-15 ms-10 font-weight-medium",
                                                          style: { "font-size": "25px" }
                                                        }, " GYM SNEAKER ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection3_large.jpg?v=1613156071" }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", {
                                                        class: "mt-15 ms-10 font-weight-medium",
                                                        style: { "font-size": "25px" }
                                                      }, " GYM SNEAKER ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card, {
                                              width: "100%",
                                              height: "400",
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection3_large.jpg?v=1613156071" }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", {
                                                      class: "mt-15 ms-10 font-weight-medium",
                                                      style: { "font-size": "25px" }
                                                    }, " GYM SNEAKER ")
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card, {
                                            width: "100%",
                                            height: "400",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<p class="mt-15 ms-10 font-weight-medium" style="${ssrRenderStyle({ "font-size": "25px" })}"${_scopeId8}> HIKING BOOTS </p>`);
                                                    } else {
                                                      return [
                                                        createVNode("p", {
                                                          class: "mt-15 ms-10 font-weight-medium",
                                                          style: { "font-size": "25px" }
                                                        }, " HIKING BOOTS ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025" }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", {
                                                        class: "mt-15 ms-10 font-weight-medium",
                                                        style: { "font-size": "25px" }
                                                      }, " HIKING BOOTS ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card, {
                                              width: "100%",
                                              height: "400",
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025" }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", {
                                                      class: "mt-15 ms-10 font-weight-medium",
                                                      style: { "font-size": "25px" }
                                                    }, " HIKING BOOTS ")
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card, {
                                            width: "100%",
                                            height: "400",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg?v=1613157026" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<p class="mt-15 ms-10 font-weight-medium" style="${ssrRenderStyle({ "font-size": "25px" })}"${_scopeId8}> WORK BOOTS </p>`);
                                                    } else {
                                                      return [
                                                        createVNode("p", {
                                                          class: "mt-15 ms-10 font-weight-medium",
                                                          style: { "font-size": "25px" }
                                                        }, " WORK BOOTS ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg?v=1613157026" }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", {
                                                        class: "mt-15 ms-10 font-weight-medium",
                                                        style: { "font-size": "25px" }
                                                      }, " WORK BOOTS ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card, {
                                              width: "100%",
                                              height: "400",
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg?v=1613157026" }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", {
                                                      class: "mt-15 ms-10 font-weight-medium",
                                                      style: { "font-size": "25px" }
                                                    }, " WORK BOOTS ")
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card, {
                                            width: "100%",
                                            height: "400",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<video${ssrRenderAttr("src", _imports_0)} poster="https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026" controls width="640" height="360"${_scopeId7}></video>`);
                                              } else {
                                                return [
                                                  createVNode("video", {
                                                    src: _imports_0,
                                                    poster: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026",
                                                    controls: "",
                                                    width: "640",
                                                    height: "360"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card, {
                                              width: "100%",
                                              height: "400",
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("video", {
                                                  src: _imports_0,
                                                  poster: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026",
                                                  controls: "",
                                                  width: "640",
                                                  height: "360"
                                                })
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
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            width: "100%",
                                            height: "400",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection3_large.jpg?v=1613156071" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", {
                                                    class: "mt-15 ms-10 font-weight-medium",
                                                    style: { "font-size": "25px" }
                                                  }, " GYM SNEAKER ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            width: "100%",
                                            height: "400",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", {
                                                    class: "mt-15 ms-10 font-weight-medium",
                                                    style: { "font-size": "25px" }
                                                  }, " HIKING BOOTS ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            width: "100%",
                                            height: "400",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg?v=1613157026" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", {
                                                    class: "mt-15 ms-10 font-weight-medium",
                                                    style: { "font-size": "25px" }
                                                  }, " WORK BOOTS ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            width: "100%",
                                            height: "400",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("video", {
                                                src: _imports_0,
                                                poster: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026",
                                                controls: "",
                                                width: "640",
                                                height: "360"
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          width: "100%",
                                          height: "400",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection3_large.jpg?v=1613156071" }, {
                                              default: withCtx(() => [
                                                createVNode("p", {
                                                  class: "mt-15 ms-10 font-weight-medium",
                                                  style: { "font-size": "25px" }
                                                }, " GYM SNEAKER ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          width: "100%",
                                          height: "400",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025" }, {
                                              default: withCtx(() => [
                                                createVNode("p", {
                                                  class: "mt-15 ms-10 font-weight-medium",
                                                  style: { "font-size": "25px" }
                                                }, " HIKING BOOTS ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          width: "100%",
                                          height: "400",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg?v=1613157026" }, {
                                              default: withCtx(() => [
                                                createVNode("p", {
                                                  class: "mt-15 ms-10 font-weight-medium",
                                                  style: { "font-size": "25px" }
                                                }, " WORK BOOTS ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          width: "100%",
                                          height: "400",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("video", {
                                              src: _imports_0,
                                              poster: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026",
                                              controls: "",
                                              width: "640",
                                              height: "360"
                                            })
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_carousel, {
                                "hide-delimiters": "",
                                "show-arrows": "hover",
                                width: "100%",
                                height: "823px",
                                cycle: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_carousel_item, {
                                      src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_2.jpg?v=1613157025",
                                      cover: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-overlay3"${_scopeId6}><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "50px", "left": "80px" })}"${_scopeId6}><h1 class="text-uppercase font-weight-black" style="${ssrRenderStyle({ "font-size": "60px" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId6}> Sneek Peek </h1><hr style="${ssrRenderStyle({ "width": "30%", "border": "none", "border-top": "6px black solid" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId6}><p class="mt-5" style="${ssrRenderStyle({ "letter-spacing": "7px" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId6}> MAKE THIS SEASOBN YOUR </p></div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-overlay3" }, [
                                              createVNode("div", { style: { "position": "absolute", "bottom": "50px", "left": "80px" } }, [
                                                createVNode("h1", {
                                                  class: "text-uppercase font-weight-black",
                                                  style: { "font-size": "60px" },
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, " Sneek Peek "),
                                                createVNode("hr", {
                                                  style: { "width": "30%", "border": "none", "border-top": "6px black solid" },
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }),
                                                createVNode("p", {
                                                  class: "mt-5",
                                                  style: { "letter-spacing": "7px" },
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, " MAKE THIS SEASOBN YOUR ")
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_carousel_item, {
                                      src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_3.jpg?v=1613157025",
                                      cover: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-overlay3"${_scopeId6}><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "50px", "left": "80px" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId6}><h1 class="text-uppercase font-weight-black" style="${ssrRenderStyle({ "font-size": "60px" })}"${_scopeId6}> Signs </h1><hr style="${ssrRenderStyle({ "width": "30%", "border": "none", "border-top": "6px black solid" })}"${_scopeId6}><p class="mt-5" style="${ssrRenderStyle({ "letter-spacing": "7px" })}"${_scopeId6}> MAKE THIS SEASOBN YOUR </p></div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-overlay3" }, [
                                              createVNode("div", {
                                                style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, [
                                                createVNode("h1", {
                                                  class: "text-uppercase font-weight-black",
                                                  style: { "font-size": "60px" }
                                                }, " Signs "),
                                                createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                                createVNode("p", {
                                                  class: "mt-5",
                                                  style: { "letter-spacing": "7px" }
                                                }, " MAKE THIS SEASOBN YOUR ")
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_carousel_item, {
                                      src: "https://cdn.shopify.com/s/files/1/1811/9799/files/dropdown_3_menu_image_3.jpg?v=1613524987 ",
                                      cover: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-overlay3"${_scopeId6}><div style="${ssrRenderStyle({ "position": "absolute", "bottom": "50px", "left": "80px" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId6}><h1 class="text-uppercase font-weight-black" style="${ssrRenderStyle({ "font-size": "60px" })}"${_scopeId6}> Cambos <br${_scopeId6}> Stores </h1><hr style="${ssrRenderStyle({ "width": "30%", "border": "none", "border-top": "6px black solid" })}"${_scopeId6}><p class="mt-5" style="${ssrRenderStyle({ "letter-spacing": "7px" })}"${_scopeId6}> MAKE THIS SEASOBN YOUR </p></div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-overlay3" }, [
                                              createVNode("div", {
                                                style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, [
                                                createVNode("h1", {
                                                  class: "text-uppercase font-weight-black",
                                                  style: { "font-size": "60px" }
                                                }, [
                                                  createTextVNode(" Cambos "),
                                                  createVNode("br"),
                                                  createTextVNode(" Stores ")
                                                ]),
                                                createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                                createVNode("p", {
                                                  class: "mt-5",
                                                  style: { "letter-spacing": "7px" }
                                                }, " MAKE THIS SEASOBN YOUR ")
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_carousel_item, {
                                        src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_2.jpg?v=1613157025",
                                        cover: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overlay3" }, [
                                            createVNode("div", { style: { "position": "absolute", "bottom": "50px", "left": "80px" } }, [
                                              createVNode("h1", {
                                                class: "text-uppercase font-weight-black",
                                                style: { "font-size": "60px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " Sneek Peek "),
                                              createVNode("hr", {
                                                style: { "width": "30%", "border": "none", "border-top": "6px black solid" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }),
                                              createVNode("p", {
                                                class: "mt-5",
                                                style: { "letter-spacing": "7px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " MAKE THIS SEASOBN YOUR ")
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_carousel_item, {
                                        src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_3.jpg?v=1613157025",
                                        cover: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overlay3" }, [
                                            createVNode("div", {
                                              style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("h1", {
                                                class: "text-uppercase font-weight-black",
                                                style: { "font-size": "60px" }
                                              }, " Signs "),
                                              createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                              createVNode("p", {
                                                class: "mt-5",
                                                style: { "letter-spacing": "7px" }
                                              }, " MAKE THIS SEASOBN YOUR ")
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_carousel_item, {
                                        src: "https://cdn.shopify.com/s/files/1/1811/9799/files/dropdown_3_menu_image_3.jpg?v=1613524987 ",
                                        cover: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overlay3" }, [
                                            createVNode("div", {
                                              style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("h1", {
                                                class: "text-uppercase font-weight-black",
                                                style: { "font-size": "60px" }
                                              }, [
                                                createTextVNode(" Cambos "),
                                                createVNode("br"),
                                                createTextVNode(" Stores ")
                                              ]),
                                              createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                              createVNode("p", {
                                                class: "mt-5",
                                                style: { "letter-spacing": "7px" }
                                              }, " MAKE THIS SEASOBN YOUR ")
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_carousel, {
                                  "hide-delimiters": "",
                                  "show-arrows": "hover",
                                  width: "100%",
                                  height: "823px",
                                  cycle: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_carousel_item, {
                                      src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_2.jpg?v=1613157025",
                                      cover: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overlay3" }, [
                                          createVNode("div", { style: { "position": "absolute", "bottom": "50px", "left": "80px" } }, [
                                            createVNode("h1", {
                                              class: "text-uppercase font-weight-black",
                                              style: { "font-size": "60px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " Sneek Peek "),
                                            createVNode("hr", {
                                              style: { "width": "30%", "border": "none", "border-top": "6px black solid" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }),
                                            createVNode("p", {
                                              class: "mt-5",
                                              style: { "letter-spacing": "7px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " MAKE THIS SEASOBN YOUR ")
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_carousel_item, {
                                      src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_3.jpg?v=1613157025",
                                      cover: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overlay3" }, [
                                          createVNode("div", {
                                            style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("h1", {
                                              class: "text-uppercase font-weight-black",
                                              style: { "font-size": "60px" }
                                            }, " Signs "),
                                            createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                            createVNode("p", {
                                              class: "mt-5",
                                              style: { "letter-spacing": "7px" }
                                            }, " MAKE THIS SEASOBN YOUR ")
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_carousel_item, {
                                      src: "https://cdn.shopify.com/s/files/1/1811/9799/files/dropdown_3_menu_image_3.jpg?v=1613524987 ",
                                      cover: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overlay3" }, [
                                          createVNode("div", {
                                            style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("h1", {
                                              class: "text-uppercase font-weight-black",
                                              style: { "font-size": "60px" }
                                            }, [
                                              createTextVNode(" Cambos "),
                                              createVNode("br"),
                                              createTextVNode(" Stores ")
                                            ]),
                                            createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                            createVNode("p", {
                                              class: "mt-5",
                                              style: { "letter-spacing": "7px" }
                                            }, " MAKE THIS SEASOBN YOUR ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        width: "100%",
                                        height: "400",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection3_large.jpg?v=1613156071" }, {
                                            default: withCtx(() => [
                                              createVNode("p", {
                                                class: "mt-15 ms-10 font-weight-medium",
                                                style: { "font-size": "25px" }
                                              }, " GYM SNEAKER ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        width: "100%",
                                        height: "400",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025" }, {
                                            default: withCtx(() => [
                                              createVNode("p", {
                                                class: "mt-15 ms-10 font-weight-medium",
                                                style: { "font-size": "25px" }
                                              }, " HIKING BOOTS ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        width: "100%",
                                        height: "400",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg?v=1613157026" }, {
                                            default: withCtx(() => [
                                              createVNode("p", {
                                                class: "mt-15 ms-10 font-weight-medium",
                                                style: { "font-size": "25px" }
                                              }, " WORK BOOTS ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        width: "100%",
                                        height: "400",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("video", {
                                            src: _imports_0,
                                            poster: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026",
                                            controls: "",
                                            width: "640",
                                            height: "360"
                                          })
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
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_carousel, {
                                "hide-delimiters": "",
                                "show-arrows": "hover",
                                width: "100%",
                                height: "823px",
                                cycle: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_carousel_item, {
                                    src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_2.jpg?v=1613157025",
                                    cover: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-overlay3" }, [
                                        createVNode("div", { style: { "position": "absolute", "bottom": "50px", "left": "80px" } }, [
                                          createVNode("h1", {
                                            class: "text-uppercase font-weight-black",
                                            style: { "font-size": "60px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " Sneek Peek "),
                                          createVNode("hr", {
                                            style: { "width": "30%", "border": "none", "border-top": "6px black solid" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }),
                                          createVNode("p", {
                                            class: "mt-5",
                                            style: { "letter-spacing": "7px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " MAKE THIS SEASOBN YOUR ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_carousel_item, {
                                    src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_3.jpg?v=1613157025",
                                    cover: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-overlay3" }, [
                                        createVNode("div", {
                                          style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("h1", {
                                            class: "text-uppercase font-weight-black",
                                            style: { "font-size": "60px" }
                                          }, " Signs "),
                                          createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                          createVNode("p", {
                                            class: "mt-5",
                                            style: { "letter-spacing": "7px" }
                                          }, " MAKE THIS SEASOBN YOUR ")
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_carousel_item, {
                                    src: "https://cdn.shopify.com/s/files/1/1811/9799/files/dropdown_3_menu_image_3.jpg?v=1613524987 ",
                                    cover: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-overlay3" }, [
                                        createVNode("div", {
                                          style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("h1", {
                                            class: "text-uppercase font-weight-black",
                                            style: { "font-size": "60px" }
                                          }, [
                                            createTextVNode(" Cambos "),
                                            createVNode("br"),
                                            createTextVNode(" Stores ")
                                          ]),
                                          createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                          createVNode("p", {
                                            class: "mt-5",
                                            style: { "letter-spacing": "7px" }
                                          }, " MAKE THIS SEASOBN YOUR ")
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
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Service, null, null, _parent3, _scopeId2));
                  _push3(`<h1 class="font-weight-bold mt-15 text-center" data-aos="fade-right" data-aos-delay="500"${_scopeId2}> Top <span style="${ssrRenderStyle({ "color": "#6b7280" })}"${_scopeId2}>pick for you</span></h1><p class="text-center mt-3" data-aos="fade-up" data-aos-delay="500"${_scopeId2}> Find a bright ideal to suit your taste with our great selection of Product, Nike, Addidas, Puma. </p>`);
                  _push3(ssrRenderComponent(unref(Carousel), {
                    "items-to-show": 3,
                    class: "mt-15",
                    "data-aos": "zoom-in-up",
                    "data-aos-delay": "500"
                  }, {
                    addons: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Navigation), null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Pagination), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Navigation)),
                          createVNode(unref(Pagination))
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(products).slice(0, 8), (product) => {
                          _push4(ssrRenderComponent(unref(Slide), { key: product }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  width: "800px",
                                  height: "400px",
                                  class: "ml-3 pa-5"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_img, {
                                        src: product.image[0],
                                        width: "100%",
                                        height: "200px",
                                        class: "mx-auto"
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_card_title, { class: "d-flex justify-start" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(product.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(product.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_card_subtitle, { class: "d-flex justify-start" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` $${ssrInterpolate(product.price)}.00 `);
                                          } else {
                                            return [
                                              createTextVNode(" $" + toDisplayString(product.price) + ".00 ", 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_card_actions, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_rating, {
                                              modelValue: product.rating,
                                              "onUpdate:modelValue": ($event) => product.rating = $event,
                                              size: "30px",
                                              "bg-color": "#FFCA28",
                                              color: "#FFCA28"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_rating, {
                                                modelValue: product.rating,
                                                "onUpdate:modelValue": ($event) => product.rating = $event,
                                                size: "30px",
                                                "bg-color": "#FFCA28",
                                                color: "#FFCA28"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_card_actions, { class: "heart" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_icon, {
                                              icon: "mdi-heart",
                                              color: "b;acl"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_icon, {
                                                icon: "mdi-heart",
                                                color: "b;acl"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_card_actions, { class: "d-flex justify-space-between" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_nuxt_link, {
                                              to: `/shop/${product._id}`,
                                              style: { "text-decoration": "none" }
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_btn, {
                                                    color: "#e5345b",
                                                    variant: "text"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Read More `);
                                                      } else {
                                                        return [
                                                          createTextVNode(" Read More ")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_btn, {
                                                      color: "#e5345b",
                                                      variant: "text"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Read More ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_btn, {
                                              class: "text-white",
                                              style: { "background-color": "#e5345b" }
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Add To Cart `);
                                                  _push8(ssrRenderComponent(_component_v_icon, {
                                                    icon: "mdi-cart",
                                                    class: "ms-4",
                                                    style: { "font-size": "20px" }
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createTextVNode("Add To Cart "),
                                                    createVNode(_component_v_icon, {
                                                      icon: "mdi-cart",
                                                      class: "ms-4",
                                                      style: { "font-size": "20px" }
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_nuxt_link, {
                                                to: `/shop/${product._id}`,
                                                style: { "text-decoration": "none" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    color: "#e5345b",
                                                    variant: "text"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Read More ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1032, ["to"]),
                                              createVNode(_component_v_btn, {
                                                class: "text-white",
                                                style: { "background-color": "#e5345b" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Add To Cart "),
                                                  createVNode(_component_v_icon, {
                                                    icon: "mdi-cart",
                                                    class: "ms-4",
                                                    style: { "font-size": "20px" }
                                                  })
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
                                        createVNode(_component_v_img, {
                                          src: product.image[0],
                                          width: "100%",
                                          height: "200px",
                                          class: "mx-auto"
                                        }, null, 8, ["src"]),
                                        createVNode(_component_v_card_title, { class: "d-flex justify-start" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(product.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_subtitle, { class: "d-flex justify-start" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" $" + toDisplayString(product.price) + ".00 ", 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_actions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_rating, {
                                              modelValue: product.rating,
                                              "onUpdate:modelValue": ($event) => product.rating = $event,
                                              size: "30px",
                                              "bg-color": "#FFCA28",
                                              color: "#FFCA28"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_actions, { class: "heart" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              icon: "mdi-heart",
                                              color: "b;acl"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_actions, { class: "d-flex justify-space-between" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_nuxt_link, {
                                              to: `/shop/${product._id}`,
                                              style: { "text-decoration": "none" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  color: "#e5345b",
                                                  variant: "text"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Read More ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["to"]),
                                            createVNode(_component_v_btn, {
                                              class: "text-white",
                                              style: { "background-color": "#e5345b" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Add To Cart "),
                                                createVNode(_component_v_icon, {
                                                  icon: "mdi-cart",
                                                  class: "ms-4",
                                                  style: { "font-size": "20px" }
                                                })
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
                              } else {
                                return [
                                  createVNode(_component_v_card, {
                                    width: "800px",
                                    height: "400px",
                                    class: "ml-3 pa-5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: product.image[0],
                                        width: "100%",
                                        height: "200px",
                                        class: "mx-auto"
                                      }, null, 8, ["src"]),
                                      createVNode(_component_v_card_title, { class: "d-flex justify-start" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(product.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_subtitle, { class: "d-flex justify-start" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" $" + toDisplayString(product.price) + ".00 ", 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_rating, {
                                            modelValue: product.rating,
                                            "onUpdate:modelValue": ($event) => product.rating = $event,
                                            size: "30px",
                                            "bg-color": "#FFCA28",
                                            color: "#FFCA28"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_actions, { class: "heart" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, {
                                            icon: "mdi-heart",
                                            color: "b;acl"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_actions, { class: "d-flex justify-space-between" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_nuxt_link, {
                                            to: `/shop/${product._id}`,
                                            style: { "text-decoration": "none" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                color: "#e5345b",
                                                variant: "text"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Read More ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["to"]),
                                          createVNode(_component_v_btn, {
                                            class: "text-white",
                                            style: { "background-color": "#e5345b" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Add To Cart "),
                                              createVNode(_component_v_icon, {
                                                icon: "mdi-cart",
                                                class: "ms-4",
                                                style: { "font-size": "20px" }
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(products).slice(0, 8), (product) => {
                            return openBlock(), createBlock(unref(Slide), { key: product }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  width: "800px",
                                  height: "400px",
                                  class: "ml-3 pa-5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: product.image[0],
                                      width: "100%",
                                      height: "200px",
                                      class: "mx-auto"
                                    }, null, 8, ["src"]),
                                    createVNode(_component_v_card_title, { class: "d-flex justify-start" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(product.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_subtitle, { class: "d-flex justify-start" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" $" + toDisplayString(product.price) + ".00 ", 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_actions, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_rating, {
                                          modelValue: product.rating,
                                          "onUpdate:modelValue": ($event) => product.rating = $event,
                                          size: "30px",
                                          "bg-color": "#FFCA28",
                                          color: "#FFCA28"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_actions, { class: "heart" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          icon: "mdi-heart",
                                          color: "b;acl"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_actions, { class: "d-flex justify-space-between" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_nuxt_link, {
                                          to: `/shop/${product._id}`,
                                          style: { "text-decoration": "none" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "#e5345b",
                                              variant: "text"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Read More ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["to"]),
                                        createVNode(_component_v_btn, {
                                          class: "text-white",
                                          style: { "background-color": "#e5345b" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Add To Cart "),
                                            createVNode(_component_v_icon, {
                                              icon: "mdi-cart",
                                              class: "ms-4",
                                              style: { "font-size": "20px" }
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card, { class: "mt-15" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_img, {
                          src: "https://s3-alpha-sig.figma.com/img/e49f/7c37/5c86e4d8f910d443c83a97a723571602?Expires=1679270400&Signature=GCKCp72dwrGo4JEQgfVZsbPqYWLtLrvPAeYxfaRR0wsI-pZhRNdfXQvwf87UQCoF07iHzVgORxhJOHIgUocYxTCU2SjbRUpNs2B-CzLKh0-MMoNqIxI-ir6mf5FH5YD5c6EzYyw18rQUnMNcRTygSbVlMk4Nix5lm2dvG2ZFu-p2at6bEW1R~IPfEHnFVsAqEKh-xpT-bfhy1MZzkYZ84cYokgvxbYTKtj66KtJNtHmadw-paSaRtxwTCmD4DnBdCMr2VLS0TP3EUexaxxn576Txs1WXoQ-TA~-yFX6xCVbHRQ~8t65RfA5yPobAt5mYxBDKEDQc-b4j7VFzee7ZFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                          height: "450",
                          width: "100%",
                          cover: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-overlay1"${_scopeId4}><p class="text1" data-aos="fade-right" data-aos-delay="500"${_scopeId4}> Our Facebook Page </p><p class="text-black text-center" data-aos="fade-up" data-aos-delay="500"${_scopeId4}> Follow our store on Facebook </p>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                class: "mt-5 px-10 text-white",
                                color: "#e5345b",
                                rounded: "pill",
                                onClick: handleFollow,
                                "data-aos": "fade-up"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Follow Us`);
                                  } else {
                                    return [
                                      createTextVNode("Follow Us")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-overlay1" }, [
                                  createVNode("p", {
                                    class: "text1",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, " Our Facebook Page "),
                                  createVNode("p", {
                                    class: "text-black text-center",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, " Follow our store on Facebook "),
                                  createVNode(_component_v_btn, {
                                    class: "mt-5 px-10 text-white",
                                    color: "#e5345b",
                                    rounded: "pill",
                                    onClick: handleFollow,
                                    "data-aos": "fade-up"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Follow Us")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_img, {
                            src: "https://s3-alpha-sig.figma.com/img/e49f/7c37/5c86e4d8f910d443c83a97a723571602?Expires=1679270400&Signature=GCKCp72dwrGo4JEQgfVZsbPqYWLtLrvPAeYxfaRR0wsI-pZhRNdfXQvwf87UQCoF07iHzVgORxhJOHIgUocYxTCU2SjbRUpNs2B-CzLKh0-MMoNqIxI-ir6mf5FH5YD5c6EzYyw18rQUnMNcRTygSbVlMk4Nix5lm2dvG2ZFu-p2at6bEW1R~IPfEHnFVsAqEKh-xpT-bfhy1MZzkYZ84cYokgvxbYTKtj66KtJNtHmadw-paSaRtxwTCmD4DnBdCMr2VLS0TP3EUexaxxn576Txs1WXoQ-TA~-yFX6xCVbHRQ~8t65RfA5yPobAt5mYxBDKEDQc-b4j7VFzee7ZFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            height: "450",
                            width: "100%",
                            cover: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-overlay1" }, [
                                createVNode("p", {
                                  class: "text1",
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " Our Facebook Page "),
                                createVNode("p", {
                                  class: "text-black text-center",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, " Follow our store on Facebook "),
                                createVNode(_component_v_btn, {
                                  class: "mt-5 px-10 text-white",
                                  color: "#e5345b",
                                  rounded: "pill",
                                  onClick: handleFollow,
                                  "data-aos": "fade-up"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Follow Us")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_popular_item, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card, {
                    class: "mt-15",
                    color: "#f5f5f7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-center" style="${ssrRenderStyle({ "font-size": "100px" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId5}> FAQ&#39;s </h1>`);
                                  } else {
                                    return [
                                      createVNode("h1", {
                                        class: "text-center",
                                        style: { "font-size": "100px" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " FAQ's ")
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
                                    _push6(ssrRenderComponent(_component_v_expansion_panels, { style: { "background-color": "#f5f5f7", "padding": "16px" } }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(faq), (f) => {
                                            _push7(ssrRenderComponent(_component_v_expansion_panel, {
                                              class: "mt-5 pa-2",
                                              key: f,
                                              title: f.title,
                                              text: f.text
                                            }, null, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(faq), (f) => {
                                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                                class: "mt-5 pa-2",
                                                key: f,
                                                title: f.title,
                                                text: f.text
                                              }, null, 8, ["title", "text"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_expansion_panels, { style: { "background-color": "#f5f5f7", "padding": "16px" } }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(faq), (f) => {
                                            return openBlock(), createBlock(_component_v_expansion_panel, {
                                              class: "mt-5 pa-2",
                                              key: f,
                                              title: f.title,
                                              text: f.text
                                            }, null, 8, ["title", "text"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
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
                                    createVNode("h1", {
                                      class: "text-center",
                                      style: { "font-size": "100px" },
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, " FAQ's ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_expansion_panels, { style: { "background-color": "#f5f5f7", "padding": "16px" } }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(faq), (f) => {
                                          return openBlock(), createBlock(_component_v_expansion_panel, {
                                            class: "mt-5 pa-2",
                                            key: f,
                                            title: f.title,
                                            text: f.text
                                          }, null, 8, ["title", "text"]);
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h1", {
                                    class: "text-center",
                                    style: { "font-size": "100px" },
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, " FAQ's ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panels, { style: { "background-color": "#f5f5f7", "padding": "16px" } }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(faq), (f) => {
                                        return openBlock(), createBlock(_component_v_expansion_panel, {
                                          class: "mt-5 pa-2",
                                          key: f,
                                          title: f.title,
                                          text: f.text
                                        }, null, 8, ["title", "text"]);
                                      }), 128))
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, { class: "mt-15 d-flex" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "8"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      width: "100%",
                                      height: "400",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection3_large.jpg?v=1613156071" }, {
                                          default: withCtx(() => [
                                            createVNode("p", {
                                              class: "mt-15 ms-10 font-weight-medium",
                                              style: { "font-size": "25px" }
                                            }, " GYM SNEAKER ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      width: "100%",
                                      height: "400",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025" }, {
                                          default: withCtx(() => [
                                            createVNode("p", {
                                              class: "mt-15 ms-10 font-weight-medium",
                                              style: { "font-size": "25px" }
                                            }, " HIKING BOOTS ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      width: "100%",
                                      height: "400",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg?v=1613157026" }, {
                                          default: withCtx(() => [
                                            createVNode("p", {
                                              class: "mt-15 ms-10 font-weight-medium",
                                              style: { "font-size": "25px" }
                                            }, " WORK BOOTS ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      width: "100%",
                                      height: "400",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("video", {
                                          src: _imports_0,
                                          poster: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026",
                                          controls: "",
                                          width: "640",
                                          height: "360"
                                        })
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
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_carousel, {
                              "hide-delimiters": "",
                              "show-arrows": "hover",
                              width: "100%",
                              height: "823px",
                              cycle: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_carousel_item, {
                                  src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_2.jpg?v=1613157025",
                                  cover: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overlay3" }, [
                                      createVNode("div", { style: { "position": "absolute", "bottom": "50px", "left": "80px" } }, [
                                        createVNode("h1", {
                                          class: "text-uppercase font-weight-black",
                                          style: { "font-size": "60px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " Sneek Peek "),
                                        createVNode("hr", {
                                          style: { "width": "30%", "border": "none", "border-top": "6px black solid" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }),
                                        createVNode("p", {
                                          class: "mt-5",
                                          style: { "letter-spacing": "7px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " MAKE THIS SEASOBN YOUR ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_carousel_item, {
                                  src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_3.jpg?v=1613157025",
                                  cover: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overlay3" }, [
                                      createVNode("div", {
                                        style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("h1", {
                                          class: "text-uppercase font-weight-black",
                                          style: { "font-size": "60px" }
                                        }, " Signs "),
                                        createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                        createVNode("p", {
                                          class: "mt-5",
                                          style: { "letter-spacing": "7px" }
                                        }, " MAKE THIS SEASOBN YOUR ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_carousel_item, {
                                  src: "https://cdn.shopify.com/s/files/1/1811/9799/files/dropdown_3_menu_image_3.jpg?v=1613524987 ",
                                  cover: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overlay3" }, [
                                      createVNode("div", {
                                        style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("h1", {
                                          class: "text-uppercase font-weight-black",
                                          style: { "font-size": "60px" }
                                        }, [
                                          createTextVNode(" Cambos "),
                                          createVNode("br"),
                                          createTextVNode(" Stores ")
                                        ]),
                                        createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                        createVNode("p", {
                                          class: "mt-5",
                                          style: { "letter-spacing": "7px" }
                                        }, " MAKE THIS SEASOBN YOUR ")
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
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Service),
                    createVNode("h1", {
                      class: "font-weight-bold mt-15 text-center",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, [
                      createTextVNode(" Top "),
                      createVNode("span", { style: { "color": "#6b7280" } }, "pick for you")
                    ]),
                    createVNode("p", {
                      class: "text-center mt-3",
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, " Find a bright ideal to suit your taste with our great selection of Product, Nike, Addidas, Puma. "),
                    createVNode(unref(Carousel), {
                      "items-to-show": 3,
                      class: "mt-15",
                      "data-aos": "zoom-in-up",
                      "data-aos-delay": "500"
                    }, {
                      addons: withCtx(() => [
                        createVNode(unref(Navigation)),
                        createVNode(unref(Pagination))
                      ]),
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(products).slice(0, 8), (product) => {
                          return openBlock(), createBlock(unref(Slide), { key: product }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                width: "800px",
                                height: "400px",
                                class: "ml-3 pa-5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: product.image[0],
                                    width: "100%",
                                    height: "200px",
                                    class: "mx-auto"
                                  }, null, 8, ["src"]),
                                  createVNode(_component_v_card_title, { class: "d-flex justify-start" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_subtitle, { class: "d-flex justify-start" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" $" + toDisplayString(product.price) + ".00 ", 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_rating, {
                                        modelValue: product.rating,
                                        "onUpdate:modelValue": ($event) => product.rating = $event,
                                        size: "30px",
                                        "bg-color": "#FFCA28",
                                        color: "#FFCA28"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_actions, { class: "heart" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        icon: "mdi-heart",
                                        color: "b;acl"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_actions, { class: "d-flex justify-space-between" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_nuxt_link, {
                                        to: `/shop/${product._id}`,
                                        style: { "text-decoration": "none" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "#e5345b",
                                            variant: "text"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Read More ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]),
                                      createVNode(_component_v_btn, {
                                        class: "text-white",
                                        style: { "background-color": "#e5345b" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Add To Cart "),
                                          createVNode(_component_v_icon, {
                                            icon: "mdi-cart",
                                            class: "ms-4",
                                            style: { "font-size": "20px" }
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card, { class: "mt-15" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_img, {
                          src: "https://s3-alpha-sig.figma.com/img/e49f/7c37/5c86e4d8f910d443c83a97a723571602?Expires=1679270400&Signature=GCKCp72dwrGo4JEQgfVZsbPqYWLtLrvPAeYxfaRR0wsI-pZhRNdfXQvwf87UQCoF07iHzVgORxhJOHIgUocYxTCU2SjbRUpNs2B-CzLKh0-MMoNqIxI-ir6mf5FH5YD5c6EzYyw18rQUnMNcRTygSbVlMk4Nix5lm2dvG2ZFu-p2at6bEW1R~IPfEHnFVsAqEKh-xpT-bfhy1MZzkYZ84cYokgvxbYTKtj66KtJNtHmadw-paSaRtxwTCmD4DnBdCMr2VLS0TP3EUexaxxn576Txs1WXoQ-TA~-yFX6xCVbHRQ~8t65RfA5yPobAt5mYxBDKEDQc-b4j7VFzee7ZFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                          height: "450",
                          width: "100%",
                          cover: ""
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-overlay1" }, [
                              createVNode("p", {
                                class: "text1",
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " Our Facebook Page "),
                              createVNode("p", {
                                class: "text-black text-center",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, " Follow our store on Facebook "),
                              createVNode(_component_v_btn, {
                                class: "mt-5 px-10 text-white",
                                color: "#e5345b",
                                rounded: "pill",
                                onClick: handleFollow,
                                "data-aos": "fade-up"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Follow Us")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_popular_item),
                    createVNode(_component_v_card, {
                      class: "mt-15",
                      color: "#f5f5f7"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("h1", {
                                  class: "text-center",
                                  style: { "font-size": "100px" },
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " FAQ's ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panels, { style: { "background-color": "#f5f5f7", "padding": "16px" } }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(faq), (f) => {
                                      return openBlock(), createBlock(_component_v_expansion_panel, {
                                        class: "mt-5 pa-2",
                                        key: f,
                                        title: f.title,
                                        text: f.text
                                      }, null, 8, ["title", "text"]);
                                    }), 128))
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_home_section),
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "mt-15 d-flex" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "8"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    width: "100%",
                                    height: "400",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection3_large.jpg?v=1613156071" }, {
                                        default: withCtx(() => [
                                          createVNode("p", {
                                            class: "mt-15 ms-10 font-weight-medium",
                                            style: { "font-size": "25px" }
                                          }, " GYM SNEAKER ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    width: "100%",
                                    height: "400",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection5_47277ffa-efcf-413d-a764-b4b5be9e4e99_large.jpg?v=1613157025" }, {
                                        default: withCtx(() => [
                                          createVNode("p", {
                                            class: "mt-15 ms-10 font-weight-medium",
                                            style: { "font-size": "25px" }
                                          }, " HIKING BOOTS ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    width: "100%",
                                    height: "400",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection2_6fd1e403-7021-427d-8be1-8bf857c8aacf_large.jpg?v=1613157026" }, {
                                        default: withCtx(() => [
                                          createVNode("p", {
                                            class: "mt-15 ms-10 font-weight-medium",
                                            style: { "font-size": "25px" }
                                          }, " WORK BOOTS ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    width: "100%",
                                    height: "400",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("video", {
                                        src: _imports_0,
                                        poster: "https://cdn.shopify.com/s/files/1/1811/9799/files/collection4_1d1d931a-3265-4eae-ac45-7e8a9cb3702e_large.jpg?v=1613157026",
                                        controls: "",
                                        width: "640",
                                        height: "360"
                                      })
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
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_carousel, {
                            "hide-delimiters": "",
                            "show-arrows": "hover",
                            width: "100%",
                            height: "823px",
                            cycle: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_carousel_item, {
                                src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_2.jpg?v=1613157025",
                                cover: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overlay3" }, [
                                    createVNode("div", { style: { "position": "absolute", "bottom": "50px", "left": "80px" } }, [
                                      createVNode("h1", {
                                        class: "text-uppercase font-weight-black",
                                        style: { "font-size": "60px" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " Sneek Peek "),
                                      createVNode("hr", {
                                        style: { "width": "30%", "border": "none", "border-top": "6px black solid" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }),
                                      createVNode("p", {
                                        class: "mt-5",
                                        style: { "letter-spacing": "7px" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " MAKE THIS SEASOBN YOUR ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_carousel_item, {
                                src: "https://cdn.shopify.com/s/files/1/1811/9799/files/Shoe_3.jpg?v=1613157025",
                                cover: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overlay3" }, [
                                    createVNode("div", {
                                      style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("h1", {
                                        class: "text-uppercase font-weight-black",
                                        style: { "font-size": "60px" }
                                      }, " Signs "),
                                      createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                      createVNode("p", {
                                        class: "mt-5",
                                        style: { "letter-spacing": "7px" }
                                      }, " MAKE THIS SEASOBN YOUR ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_carousel_item, {
                                src: "https://cdn.shopify.com/s/files/1/1811/9799/files/dropdown_3_menu_image_3.jpg?v=1613524987 ",
                                cover: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overlay3" }, [
                                    createVNode("div", {
                                      style: { "position": "absolute", "bottom": "50px", "left": "80px" },
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("h1", {
                                        class: "text-uppercase font-weight-black",
                                        style: { "font-size": "60px" }
                                      }, [
                                        createTextVNode(" Cambos "),
                                        createVNode("br"),
                                        createTextVNode(" Stores ")
                                      ]),
                                      createVNode("hr", { style: { "width": "30%", "border": "none", "border-top": "6px black solid" } }),
                                      createVNode("p", {
                                        class: "mt-5",
                                        style: { "letter-spacing": "7px" }
                                      }, " MAKE THIS SEASOBN YOUR ")
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
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Service),
                  createVNode("h1", {
                    class: "font-weight-bold mt-15 text-center",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, [
                    createTextVNode(" Top "),
                    createVNode("span", { style: { "color": "#6b7280" } }, "pick for you")
                  ]),
                  createVNode("p", {
                    class: "text-center mt-3",
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }, " Find a bright ideal to suit your taste with our great selection of Product, Nike, Addidas, Puma. "),
                  createVNode(unref(Carousel), {
                    "items-to-show": 3,
                    class: "mt-15",
                    "data-aos": "zoom-in-up",
                    "data-aos-delay": "500"
                  }, {
                    addons: withCtx(() => [
                      createVNode(unref(Navigation)),
                      createVNode(unref(Pagination))
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(products).slice(0, 8), (product) => {
                        return openBlock(), createBlock(unref(Slide), { key: product }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              width: "800px",
                              height: "400px",
                              class: "ml-3 pa-5"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: product.image[0],
                                  width: "100%",
                                  height: "200px",
                                  class: "mx-auto"
                                }, null, 8, ["src"]),
                                createVNode(_component_v_card_title, { class: "d-flex justify-start" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_subtitle, { class: "d-flex justify-start" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" $" + toDisplayString(product.price) + ".00 ", 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_rating, {
                                      modelValue: product.rating,
                                      "onUpdate:modelValue": ($event) => product.rating = $event,
                                      size: "30px",
                                      "bg-color": "#FFCA28",
                                      color: "#FFCA28"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_actions, { class: "heart" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      icon: "mdi-heart",
                                      color: "b;acl"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_actions, { class: "d-flex justify-space-between" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_nuxt_link, {
                                      to: `/shop/${product._id}`,
                                      style: { "text-decoration": "none" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          color: "#e5345b",
                                          variant: "text"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Read More ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_v_btn, {
                                      class: "text-white",
                                      style: { "background-color": "#e5345b" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Add To Cart "),
                                        createVNode(_component_v_icon, {
                                          icon: "mdi-cart",
                                          class: "ms-4",
                                          style: { "font-size": "20px" }
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card, { class: "mt-15" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_img, {
                        src: "https://s3-alpha-sig.figma.com/img/e49f/7c37/5c86e4d8f910d443c83a97a723571602?Expires=1679270400&Signature=GCKCp72dwrGo4JEQgfVZsbPqYWLtLrvPAeYxfaRR0wsI-pZhRNdfXQvwf87UQCoF07iHzVgORxhJOHIgUocYxTCU2SjbRUpNs2B-CzLKh0-MMoNqIxI-ir6mf5FH5YD5c6EzYyw18rQUnMNcRTygSbVlMk4Nix5lm2dvG2ZFu-p2at6bEW1R~IPfEHnFVsAqEKh-xpT-bfhy1MZzkYZ84cYokgvxbYTKtj66KtJNtHmadw-paSaRtxwTCmD4DnBdCMr2VLS0TP3EUexaxxn576Txs1WXoQ-TA~-yFX6xCVbHRQ~8t65RfA5yPobAt5mYxBDKEDQc-b4j7VFzee7ZFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                        height: "450",
                        width: "100%",
                        cover: ""
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-overlay1" }, [
                            createVNode("p", {
                              class: "text1",
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " Our Facebook Page "),
                            createVNode("p", {
                              class: "text-black text-center",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, " Follow our store on Facebook "),
                            createVNode(_component_v_btn, {
                              class: "mt-5 px-10 text-white",
                              color: "#e5345b",
                              rounded: "pill",
                              onClick: handleFollow,
                              "data-aos": "fade-up"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Follow Us")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_popular_item),
                  createVNode(_component_v_card, {
                    class: "mt-15",
                    color: "#f5f5f7"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("h1", {
                                class: "text-center",
                                style: { "font-size": "100px" },
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " FAQ's ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panels, { style: { "background-color": "#f5f5f7", "padding": "16px" } }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(faq), (f) => {
                                    return openBlock(), createBlock(_component_v_expansion_panel, {
                                      class: "mt-5 pa-2",
                                      key: f,
                                      title: f.title,
                                      text: f.text
                                    }, null, 8, ["title", "text"]);
                                  }), 128))
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
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-bb3e36ad.mjs.map
