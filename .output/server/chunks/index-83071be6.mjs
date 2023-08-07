import { _ as __nuxt_component_0$1 } from './nuxt-link-80d3cee7.mjs';
import { u as useAuth } from './state-354a3b64.mjs';
import { useSSRContext, ref, withAsyncContext, computed, resolveComponent, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, isRef, withDirectives, vShow } from 'vue';
import { _ as _export_sfc, a as useStore, n as navigateTo } from './server.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useFetch } from './fetch-cf13354b.mjs';
import 'ufo';
import 'js-cookie';
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

const _sfc_main$2 = {
  __name: "ProductCard1",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    const { product } = __props;
    const auth = useAuth();
    const store = useStore();
    const cartSnackbar = ref(false);
    const rating = computed(() => {
      return Math.round(product.rating);
    });
    const handleAddToCart = () => {
      if (auth.value.isAuthenticated === false) {
        navigateTo("/login");
        alert("Please Login First");
      } else {
        cartSnackbar.value = true;
        store.commit("handleAddToCart", {
          product,
          quantity: 1
        });
      }
    };
    const isFavorite = computed(
      () => store.state.favorites.some((item) => item._id === product._id)
    );
    const handleAddToFavorite = () => {
      if (auth.value.isAuthenticated === false) {
        navigateTo("/login");
        alert("Please Login First");
      } else {
        store.commit("toggleFavoriteStatus", product);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_rating = resolveComponent("v-rating");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_v_snackbar = resolveComponent("v-snackbar");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_card, { class: "mx-auto p-card" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_img, {
              src: __props.product.image[0],
              height: "200px"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.product.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.product.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_subtitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`$${ssrInterpolate(__props.product.price)}.00 `);
                } else {
                  return [
                    createTextVNode("$" + toDisplayString(__props.product.price) + ".00 ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_actions, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_rating, {
                    modelValue: unref(rating),
                    "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                    size: "30px",
                    "bg-color": "#FFCA28",
                    color: "#FFCA28"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_rating, {
                      modelValue: unref(rating),
                      "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                      size: "30px",
                      "bg-color": "#FFCA28",
                      color: "#FFCA28"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_actions, { class: "heart" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    icon: "",
                    onClick: handleAddToFavorite
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, {
                          icon: "mdi-heart",
                          color: unref(isFavorite) ? "#e5345b" : ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_icon, {
                            icon: "mdi-heart",
                            color: unref(isFavorite) ? "#e5345b" : ""
                          }, null, 8, ["color"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      icon: "",
                      onClick: handleAddToFavorite
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          icon: "mdi-heart",
                          color: unref(isFavorite) ? "#e5345b" : ""
                        }, null, 8, ["color"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_actions, { class: "d-flex justify-space-between" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_nuxt_link, {
                    to: `shop/${__props.product._id}`,
                    style: { "text-decoration": "none" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "#e5345b",
                          variant: "text"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Read More `);
                            } else {
                              return [
                                createTextVNode(" Read More ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
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
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    class: "text-white",
                    style: { "background-color": "#e5345b" },
                    onClick: handleAddToCart
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Add To Cart `);
                        _push4(ssrRenderComponent(_component_v_icon, {
                          icon: "mdi-cart",
                          class: "ms-4",
                          style: { "font-size": "20px" }
                        }, null, _parent4, _scopeId3));
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
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_nuxt_link, {
                      to: `shop/${__props.product._id}`,
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
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_v_btn, {
                      class: "text-white",
                      style: { "background-color": "#e5345b" },
                      onClick: handleAddToCart
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
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_img, {
                src: __props.product.image[0],
                height: "200px"
              }, null, 8, ["src"]),
              createVNode(_component_v_card_title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.product.name), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_card_subtitle, null, {
                default: withCtx(() => [
                  createTextVNode("$" + toDisplayString(__props.product.price) + ".00 ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_card_actions, null, {
                default: withCtx(() => [
                  createVNode(_component_v_rating, {
                    modelValue: unref(rating),
                    "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                    size: "30px",
                    "bg-color": "#FFCA28",
                    color: "#FFCA28"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_card_actions, { class: "heart" }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    icon: "",
                    onClick: handleAddToFavorite
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, {
                        icon: "mdi-heart",
                        color: unref(isFavorite) ? "#e5345b" : ""
                      }, null, 8, ["color"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_card_actions, { class: "d-flex justify-space-between" }, {
                default: withCtx(() => [
                  createVNode(_component_nuxt_link, {
                    to: `shop/${__props.product._id}`,
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
                    _: 1
                  }, 8, ["to"]),
                  createVNode(_component_v_btn, {
                    class: "text-white",
                    style: { "background-color": "#e5345b" },
                    onClick: handleAddToCart
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
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_snackbar, {
        modelValue: unref(cartSnackbar),
        "onUpdate:modelValue": ($event) => isRef(cartSnackbar) ? cartSnackbar.value = $event : null,
        color: "green",
        bottom: "",
        right: ""
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "white",
              onClick: ($event) => cartSnackbar.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Close `);
                } else {
                  return [
                    createTextVNode(" Close ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, {
                color: "white",
                onClick: ($event) => cartSnackbar.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Product have been add to cart! \u{1F6D2} `);
          } else {
            return [
              createTextVNode(" Product have been add to cart! \u{1F6D2} ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a269ab26"]]);
const _sfc_main$1 = {
  __name: "ProductCard2",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    const { product } = __props;
    const auth = useAuth();
    const store = useStore();
    const rating = computed(() => {
      return Math.round(product.rating);
    });
    const cartSnackbar = ref(false);
    const handleAddToCart = () => {
      if (auth.value.isAuthenticated == false) {
        navigateTo("/login");
        alert("Please Login First");
      } else {
        cartSnackbar.value = true;
        store.commit("handleAddToCart", {
          product,
          quantity: 1
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_col = resolveComponent("v-col");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_progress_circular = resolveComponent("v-progress-circular");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_rating = resolveComponent("v-rating");
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_snackbar = resolveComponent("v-snackbar");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_col, { cols: "4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_img, {
              src: __props.product.image[0],
              height: "200px"
            }, {
              placeholder: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, {
                    align: "center",
                    class: "fill-height ma-0",
                    justify: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_progress_circular, {
                          color: "grey lighten-5",
                          indeterminate: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_progress_circular, {
                            color: "grey lighten-5",
                            indeterminate: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, {
                      align: "center",
                      class: "fill-height ma-0",
                      justify: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_progress_circular, {
                          color: "grey lighten-5",
                          indeterminate: ""
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
              createVNode(_component_v_img, {
                src: __props.product.image[0],
                height: "200px"
              }, {
                placeholder: withCtx(() => [
                  createVNode(_component_v_row, {
                    align: "center",
                    class: "fill-height ma-0",
                    justify: "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_progress_circular, {
                        color: "grey lighten-5",
                        indeterminate: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_col, {
        cols: "12",
        md: "8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_title, { class: "text-capitalize" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.product.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.product.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_subtitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` $${ssrInterpolate(__props.product.price)}.00 `);
                } else {
                  return [
                    createTextVNode(" $" + toDisplayString(__props.product.price) + ".00 ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.product.description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.product.description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_actions, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_rating, {
                    modelValue: unref(rating),
                    "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                    size: "30px",
                    "bg-color": "#FFCA28",
                    color: "#FFCA28"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_rating, {
                      modelValue: unref(rating),
                      "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                      size: "30px",
                      "bg-color": "#FFCA28",
                      color: "#FFCA28"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_actions, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_nuxt_link, {
                    to: `/shop/${__props.product._id}`,
                    style: { "text-decoration": "none" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, { color: "#e5345b" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Read More `);
                            } else {
                              return [
                                createTextVNode(" Read More ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, { color: "#e5345b" }, {
                            default: withCtx(() => [
                              createTextVNode(" Read More ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    class: "ml-15 text-white",
                    style: { "background-color": "#e5345b" },
                    onClick: handleAddToCart
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Add to Cart `);
                      } else {
                        return [
                          createTextVNode(" Add to Cart ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_nuxt_link, {
                      to: `/shop/${__props.product._id}`,
                      style: { "text-decoration": "none" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, { color: "#e5345b" }, {
                          default: withCtx(() => [
                            createTextVNode(" Read More ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_v_btn, {
                      class: "ml-15 text-white",
                      style: { "background-color": "#e5345b" },
                      onClick: handleAddToCart
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add to Cart ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_snackbar, {
              modelValue: unref(cartSnackbar),
              "onUpdate:modelValue": ($event) => isRef(cartSnackbar) ? cartSnackbar.value = $event : null,
              color: "green",
              bottom: "",
              right: ""
            }, {
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "white",
                    onClick: ($event) => cartSnackbar.value = false
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
                      onClick: ($event) => cartSnackbar.value = false
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
                  _push3(` Product have been add to cart! \u{1F6D2} `);
                } else {
                  return [
                    createTextVNode(" Product have been add to cart! \u{1F6D2} ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_title, { class: "text-capitalize" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.product.name), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_card_subtitle, null, {
                default: withCtx(() => [
                  createTextVNode(" $" + toDisplayString(__props.product.price) + ".00 ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.product.description), 1)
                ]),
                _: 1
              }),
              createVNode(_component_v_card_actions, null, {
                default: withCtx(() => [
                  createVNode(_component_v_rating, {
                    modelValue: unref(rating),
                    "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                    size: "30px",
                    "bg-color": "#FFCA28",
                    color: "#FFCA28"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_card_actions, null, {
                default: withCtx(() => [
                  createVNode(_component_nuxt_link, {
                    to: `/shop/${__props.product._id}`,
                    style: { "text-decoration": "none" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, { color: "#e5345b" }, {
                        default: withCtx(() => [
                          createTextVNode(" Read More ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode(_component_v_btn, {
                    class: "ml-15 text-white",
                    style: { "background-color": "#e5345b" },
                    onClick: handleAddToCart
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Add to Cart ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_snackbar, {
                modelValue: unref(cartSnackbar),
                "onUpdate:modelValue": ($event) => isRef(cartSnackbar) ? cartSnackbar.value = $event : null,
                color: "green",
                bottom: "",
                right: ""
              }, {
                actions: withCtx(() => [
                  createVNode(_component_v_btn, {
                    color: "white",
                    onClick: ($event) => cartSnackbar.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Close ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  createTextVNode(" Product have been add to cart! \u{1F6D2} ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const styles = ref([
      { title: "Lifestyle", count: "10" },
      { title: "Running", count: "7" },
      { title: "Training & Gym", count: "9" },
      { title: "Basketball", count: "5" },
      { title: "Football", count: "11" },
      { title: "Soccer", count: "8" },
      { title: "Baseball", count: "13" },
      { title: "Golf", count: "3" },
      { title: "Skateboarding", count: "6" }
    ]);
    const brands = ref([
      { title: "Lifestyle", state: false },
      { title: "Running", state: false },
      { title: "Training & Gym", state: false },
      { title: "Basketball", state: false }
    ]);
    const sizes = ref([35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]);
    ref(4);
    const searchTerm = ref("");
    const grid = ref(true);
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch("http://localhost:3002/api/products", "$E1A2NJhK9u")), __temp = await __temp, __restore(), __temp);
    console.log(products.value);
    const filteredProducts = computed(() => {
      if (searchTerm.value) {
        return [...products.value].filter((product) => {
          return searchTerm.value.toLocaleLowerCase().split(" ").every((v) => product.name.toLocaleLowerCase().includes(v));
        });
      } else {
        return products.value;
      }
    });
    const sortOptions = ref(["Name", "Price"]);
    const sortOption = ref("");
    const sortProducts = computed(() => {
      if (sortOption.value === "Name") {
        return [...filteredProducts.value].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (sortOption.value === "Price") {
        return [...filteredProducts.value].sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        return filteredProducts.value;
      }
    });
    const currentPage = ref(1);
    const itemPerPage = ref(12);
    const displayProducts = computed(() => {
      const start = (currentPage.value - 1) * itemPerPage.value;
      const end = start + itemPerPage.value;
      return sortProducts.value.slice(start, end);
    });
    const totalPages = computed(() => {
      return Math.ceil(sortProducts.value.length / itemPerPage.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_main = resolveComponent("v-main");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_subheader = resolveComponent("v-list-subheader");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_badge = resolveComponent("v-badge");
      const _component_v_range_slider = resolveComponent("v-range-slider");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_list_item_action = resolveComponent("v-list-item-action");
      const _component_v_checkbox_btn = resolveComponent("v-checkbox-btn");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_chip_group = resolveComponent("v-chip-group");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_carousel = resolveComponent("v-carousel");
      const _component_v_carousel_item = resolveComponent("v-carousel-item");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_product_card1 = __nuxt_component_0;
      const _component_product_card2 = __nuxt_component_1;
      const _component_v_pagination = resolveComponent("v-pagination");
      _push(ssrRenderComponent(_component_v_main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_img, {
                    src: "/images/b1.jpg",
                    height: "250",
                    width: "100%",
                    class: "bg-grey-lighten-2",
                    cover: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-overlay" data-v-f0d810db${_scopeId3}><p class="text" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId3}>#Stay Home</p><p class="text-white text-center" data-aos="fade-up" data-aos-delay="500" data-v-f0d810db${_scopeId3}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overlay" }, [
                            createVNode("p", {
                              class: "text",
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, "#Stay Home"),
                            createVNode("p", {
                              class: "text-white text-center",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_img, {
                      src: "/images/b1.jpg",
                      height: "250",
                      width: "100%",
                      class: "bg-grey-lighten-2",
                      cover: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-overlay" }, [
                          createVNode("p", {
                            class: "text",
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, "#Stay Home"),
                          createVNode("p", {
                            class: "text-white text-center",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. ")
                        ])
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
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "2",
                          class: "sidebar hidden-sm-and-down"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, {
                                      class: "mx-auto",
                                      "max-width": "256"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_subheader, {
                                            class: "font-weight-bold",
                                            style: { "font-size": "18px" },
                                            color: "black"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Categories`);
                                              } else {
                                                return [
                                                  createTextVNode("Categories")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(styles), (l) => {
                                            _push7(`<div data-v-f0d810db${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_list_item, {
                                              link: "",
                                              title: l.title
                                            }, {
                                              append: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_badge, {
                                                    color: "#e5345b",
                                                    content: l.count,
                                                    inline: ""
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_badge, {
                                                      color: "#e5345b",
                                                      content: l.count,
                                                      inline: ""
                                                    }, null, 8, ["content"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            createVNode(_component_v_list_subheader, {
                                              class: "font-weight-bold",
                                              style: { "font-size": "18px" },
                                              color: "black"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Categories")
                                              ]),
                                              _: 1
                                            }),
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(styles), (l) => {
                                              return openBlock(), createBlock("div", {
                                                key: l.title
                                              }, [
                                                createVNode(_component_v_list_item, {
                                                  link: "",
                                                  title: l.title
                                                }, {
                                                  append: withCtx(() => [
                                                    createVNode(_component_v_badge, {
                                                      color: "#e5345b",
                                                      content: l.count,
                                                      inline: ""
                                                    }, null, 8, ["content"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["title"])
                                              ]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, {
                                        class: "mx-auto",
                                        "max-width": "256"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_subheader, {
                                            class: "font-weight-bold",
                                            style: { "font-size": "18px" },
                                            color: "black"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Categories")
                                            ]),
                                            _: 1
                                          }),
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(styles), (l) => {
                                            return openBlock(), createBlock("div", {
                                              key: l.title
                                            }, [
                                              createVNode(_component_v_list_item, {
                                                link: "",
                                                title: l.title
                                              }, {
                                                append: withCtx(() => [
                                                  createVNode(_component_v_badge, {
                                                    color: "#e5345b",
                                                    content: l.count,
                                                    inline: ""
                                                  }, null, 8, ["content"])
                                                ]),
                                                _: 2
                                              }, 1032, ["title"])
                                            ]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, { class: "mx-auto" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_subheader, {
                                            class: "font-weight-bold",
                                            style: { "font-size": "18px" },
                                            color: "black"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Price`);
                                              } else {
                                                return [
                                                  createTextVNode("Price")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_range_slider, {
                                                  color: "#e5345b",
                                                  max: "40",
                                                  min: "30",
                                                  style: { "width": "220px" },
                                                  class: "mx-auto"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item_subtitle, { class: "font-weight-bold" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Price : $20 - $900`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Price : $20 - $900")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_range_slider, {
                                                    color: "#e5345b",
                                                    max: "40",
                                                    min: "30",
                                                    style: { "width": "220px" },
                                                    class: "mx-auto"
                                                  }),
                                                  createVNode(_component_v_list_item_subtitle, { class: "font-weight-bold" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Price : $20 - $900")
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
                                            createVNode(_component_v_list_subheader, {
                                              class: "font-weight-bold",
                                              style: { "font-size": "18px" },
                                              color: "black"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Price")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_range_slider, {
                                                  color: "#e5345b",
                                                  max: "40",
                                                  min: "30",
                                                  style: { "width": "220px" },
                                                  class: "mx-auto"
                                                }),
                                                createVNode(_component_v_list_item_subtitle, { class: "font-weight-bold" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Price : $20 - $900")
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
                                  } else {
                                    return [
                                      createVNode(_component_v_list, { class: "mx-auto" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_subheader, {
                                            class: "font-weight-bold",
                                            style: { "font-size": "18px" },
                                            color: "black"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Price")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_range_slider, {
                                                color: "#e5345b",
                                                max: "40",
                                                min: "30",
                                                style: { "width": "220px" },
                                                class: "mx-auto"
                                              }),
                                              createVNode(_component_v_list_item_subtitle, { class: "font-weight-bold" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Price : $20 - $900")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, { "select-strategy": "classic" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_subheader, {
                                            class: "font-weight-bold",
                                            style: { "font-size": "18px" },
                                            color: "black"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Brand`);
                                              } else {
                                                return [
                                                  createTextVNode("Brand")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(brands), (b) => {
                                            _push7(`<div data-v-f0d810db${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_list_item, { value: "notifications" }, {
                                              prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_list_item_action, { start: "" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_checkbox_btn, {
                                                          "model-value": b.state
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_checkbox_btn, {
                                                            "model-value": b.state
                                                          }, null, 8, ["model-value"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_list_item_action, { start: "" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox_btn, {
                                                          "model-value": b.state
                                                        }, null, 8, ["model-value"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(b.title)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(b.title), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_list_item_title, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(b.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            createVNode(_component_v_list_subheader, {
                                              class: "font-weight-bold",
                                              style: { "font-size": "18px" },
                                              color: "black"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Brand")
                                              ]),
                                              _: 1
                                            }),
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b) => {
                                              return openBlock(), createBlock("div", {
                                                key: b.title
                                              }, [
                                                createVNode(_component_v_list_item, { value: "notifications" }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(_component_v_list_item_action, { start: "" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_checkbox_btn, {
                                                          "model-value": b.state
                                                        }, null, 8, ["model-value"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_title, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(b.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, { "select-strategy": "classic" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_subheader, {
                                            class: "font-weight-bold",
                                            style: { "font-size": "18px" },
                                            color: "black"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Brand")
                                            ]),
                                            _: 1
                                          }),
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b) => {
                                            return openBlock(), createBlock("div", {
                                              key: b.title
                                            }, [
                                              createVNode(_component_v_list_item, { value: "notifications" }, {
                                                prepend: withCtx(() => [
                                                  createVNode(_component_v_list_item_action, { start: "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_checkbox_btn, {
                                                        "model-value": b.state
                                                      }, null, 8, ["model-value"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(b.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_subheader, {
                                            class: "font-weight-bold",
                                            style: { "font-size": "18px" },
                                            color: "black"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Color`);
                                              } else {
                                                return [
                                                  createTextVNode("Color")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_chip_group, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-black",
                                                        variant: "outlined",
                                                        style: { "border-radius": "50%", "background-color": "white" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-black",
                                                        style: { "border-radius": "50%", "background-color": "#e6e6e6" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#ffb500" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#f27229" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#eb3427" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#923fa3" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#3a51df" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#23a7f5" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#5eb524" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#7c5f4d" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "black" }
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "lime" }
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-black",
                                                          variant: "outlined",
                                                          style: { "border-radius": "50%", "background-color": "white" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-black",
                                                          style: { "border-radius": "50%", "background-color": "#e6e6e6" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-white",
                                                          style: { "border-radius": "50%", "background-color": "#ffb500" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-white",
                                                          style: { "border-radius": "50%", "background-color": "#f27229" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-white",
                                                          style: { "border-radius": "50%", "background-color": "#eb3427" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-white",
                                                          style: { "border-radius": "50%", "background-color": "#923fa3" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-white",
                                                          style: { "border-radius": "50%", "background-color": "#3a51df" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-white",
                                                          style: { "border-radius": "50%", "background-color": "#23a7f5" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-white",
                                                          style: { "border-radius": "50%", "background-color": "#5eb524" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-white",
                                                          style: { "border-radius": "50%", "background-color": "#7c5f4d" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-white",
                                                          style: { "border-radius": "50%", "background-color": "black" }
                                                        }),
                                                        createVNode(_component_v_chip, {
                                                          filter: "",
                                                          class: "text-white",
                                                          style: { "border-radius": "50%", "background-color": "lime" }
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_chip_group, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-black",
                                                        variant: "outlined",
                                                        style: { "border-radius": "50%", "background-color": "white" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-black",
                                                        style: { "border-radius": "50%", "background-color": "#e6e6e6" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#ffb500" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#f27229" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#eb3427" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#923fa3" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#3a51df" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#23a7f5" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#5eb524" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "#7c5f4d" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "black" }
                                                      }),
                                                      createVNode(_component_v_chip, {
                                                        filter: "",
                                                        class: "text-white",
                                                        style: { "border-radius": "50%", "background-color": "lime" }
                                                      })
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
                                            createVNode(_component_v_list_subheader, {
                                              class: "font-weight-bold",
                                              style: { "font-size": "18px" },
                                              color: "black"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Color")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_chip_group, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-black",
                                                      variant: "outlined",
                                                      style: { "border-radius": "50%", "background-color": "white" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-black",
                                                      style: { "border-radius": "50%", "background-color": "#e6e6e6" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-white",
                                                      style: { "border-radius": "50%", "background-color": "#ffb500" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-white",
                                                      style: { "border-radius": "50%", "background-color": "#f27229" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-white",
                                                      style: { "border-radius": "50%", "background-color": "#eb3427" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-white",
                                                      style: { "border-radius": "50%", "background-color": "#923fa3" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-white",
                                                      style: { "border-radius": "50%", "background-color": "#3a51df" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-white",
                                                      style: { "border-radius": "50%", "background-color": "#23a7f5" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-white",
                                                      style: { "border-radius": "50%", "background-color": "#5eb524" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-white",
                                                      style: { "border-radius": "50%", "background-color": "#7c5f4d" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-white",
                                                      style: { "border-radius": "50%", "background-color": "black" }
                                                    }),
                                                    createVNode(_component_v_chip, {
                                                      filter: "",
                                                      class: "text-white",
                                                      style: { "border-radius": "50%", "background-color": "lime" }
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_subheader, {
                                            class: "font-weight-bold",
                                            style: { "font-size": "18px" },
                                            color: "black"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Color")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_chip_group, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-black",
                                                    variant: "outlined",
                                                    style: { "border-radius": "50%", "background-color": "white" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-black",
                                                    style: { "border-radius": "50%", "background-color": "#e6e6e6" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-white",
                                                    style: { "border-radius": "50%", "background-color": "#ffb500" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-white",
                                                    style: { "border-radius": "50%", "background-color": "#f27229" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-white",
                                                    style: { "border-radius": "50%", "background-color": "#eb3427" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-white",
                                                    style: { "border-radius": "50%", "background-color": "#923fa3" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-white",
                                                    style: { "border-radius": "50%", "background-color": "#3a51df" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-white",
                                                    style: { "border-radius": "50%", "background-color": "#23a7f5" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-white",
                                                    style: { "border-radius": "50%", "background-color": "#5eb524" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-white",
                                                    style: { "border-radius": "50%", "background-color": "#7c5f4d" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-white",
                                                    style: { "border-radius": "50%", "background-color": "black" }
                                                  }),
                                                  createVNode(_component_v_chip, {
                                                    filter: "",
                                                    class: "text-white",
                                                    style: { "border-radius": "50%", "background-color": "lime" }
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_subheader, {
                                            class: "font-weight-bold",
                                            style: { "font-size": "18px" },
                                            color: "black"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Size`);
                                              } else {
                                                return [
                                                  createTextVNode("Size")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_chip_group, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<!--[-->`);
                                                      ssrRenderList(unref(sizes), (size) => {
                                                        _push9(ssrRenderComponent(_component_v_chip, {
                                                          filter: "",
                                                          key: size
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(size)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(size), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]-->`);
                                                    } else {
                                                      return [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(sizes), (size) => {
                                                          return openBlock(), createBlock(_component_v_chip, {
                                                            filter: "",
                                                            key: size
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(size), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_chip_group, null, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(sizes), (size) => {
                                                        return openBlock(), createBlock(_component_v_chip, {
                                                          filter: "",
                                                          key: size
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(size), 1)
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_list_subheader, {
                                              class: "font-weight-bold",
                                              style: { "font-size": "18px" },
                                              color: "black"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Size")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_chip_group, null, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sizes), (size) => {
                                                      return openBlock(), createBlock(_component_v_chip, {
                                                        filter: "",
                                                        key: size
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(size), 1)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_subheader, {
                                            class: "font-weight-bold",
                                            style: { "font-size": "18px" },
                                            color: "black"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Size")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_chip_group, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(sizes), (size) => {
                                                    return openBlock(), createBlock(_component_v_chip, {
                                                      filter: "",
                                                      key: size
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(size), 1)
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
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, {
                                  flat: "",
                                  border: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      class: "mx-auto",
                                      "max-width": "256"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_subheader, {
                                          class: "font-weight-bold",
                                          style: { "font-size": "18px" },
                                          color: "black"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Categories")
                                          ]),
                                          _: 1
                                        }),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(styles), (l) => {
                                          return openBlock(), createBlock("div", {
                                            key: l.title
                                          }, [
                                            createVNode(_component_v_list_item, {
                                              link: "",
                                              title: l.title
                                            }, {
                                              append: withCtx(() => [
                                                createVNode(_component_v_badge, {
                                                  color: "#e5345b",
                                                  content: l.count,
                                                  inline: ""
                                                }, null, 8, ["content"])
                                              ]),
                                              _: 2
                                            }, 1032, ["title"])
                                          ]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card, {
                                  flat: "",
                                  border: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, { class: "mx-auto" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_subheader, {
                                          class: "font-weight-bold",
                                          style: { "font-size": "18px" },
                                          color: "black"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Price")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_range_slider, {
                                              color: "#e5345b",
                                              max: "40",
                                              min: "30",
                                              style: { "width": "220px" },
                                              class: "mx-auto"
                                            }),
                                            createVNode(_component_v_list_item_subtitle, { class: "font-weight-bold" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Price : $20 - $900")
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
                                createVNode(_component_v_card, {
                                  flat: "",
                                  border: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, { "select-strategy": "classic" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_subheader, {
                                          class: "font-weight-bold",
                                          style: { "font-size": "18px" },
                                          color: "black"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Brand")
                                          ]),
                                          _: 1
                                        }),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b) => {
                                          return openBlock(), createBlock("div", {
                                            key: b.title
                                          }, [
                                            createVNode(_component_v_list_item, { value: "notifications" }, {
                                              prepend: withCtx(() => [
                                                createVNode(_component_v_list_item_action, { start: "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_checkbox_btn, {
                                                      "model-value": b.state
                                                    }, null, 8, ["model-value"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(b.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card, {
                                  flat: "",
                                  border: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_subheader, {
                                          class: "font-weight-bold",
                                          style: { "font-size": "18px" },
                                          color: "black"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Color")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_chip_group, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-black",
                                                  variant: "outlined",
                                                  style: { "border-radius": "50%", "background-color": "white" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-black",
                                                  style: { "border-radius": "50%", "background-color": "#e6e6e6" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-white",
                                                  style: { "border-radius": "50%", "background-color": "#ffb500" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-white",
                                                  style: { "border-radius": "50%", "background-color": "#f27229" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-white",
                                                  style: { "border-radius": "50%", "background-color": "#eb3427" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-white",
                                                  style: { "border-radius": "50%", "background-color": "#923fa3" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-white",
                                                  style: { "border-radius": "50%", "background-color": "#3a51df" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-white",
                                                  style: { "border-radius": "50%", "background-color": "#23a7f5" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-white",
                                                  style: { "border-radius": "50%", "background-color": "#5eb524" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-white",
                                                  style: { "border-radius": "50%", "background-color": "#7c5f4d" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-white",
                                                  style: { "border-radius": "50%", "background-color": "black" }
                                                }),
                                                createVNode(_component_v_chip, {
                                                  filter: "",
                                                  class: "text-white",
                                                  style: { "border-radius": "50%", "background-color": "lime" }
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
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_subheader, {
                                          class: "font-weight-bold",
                                          style: { "font-size": "18px" },
                                          color: "black"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Size")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_chip_group, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(sizes), (size) => {
                                                  return openBlock(), createBlock(_component_v_chip, {
                                                    filter: "",
                                                    key: size
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(size), 1)
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
                          md: "10"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_carousel, { "show-arrows": "hover" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_carousel_item, {
                                      src: "https://htmldemo.net/juta/juta-v1/img/slider/home-2-02.jpg",
                                      cover: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-overlayc" data-v-f0d810db${_scopeId6}><div data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId6}><span class="font-weight-bold text-white text-uppercase" style="${ssrRenderStyle({ "font-size": "80px" })}" data-v-f0d810db${_scopeId6}>Perfect</span><span class="ms-5 text-white text-uppercase" style="${ssrRenderStyle({ "font-size": "80px" })}" data-v-f0d810db${_scopeId6}>Design</span></div><p class="text-white" style="${ssrRenderStyle({ "font-size": "20px" })}" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId6}> Ready. experience. compfortable and indispensable in life </p>`);
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            variant: "outlined",
                                            color: "white",
                                            class: "mt-10",
                                            style: { "width": "200px", "height": "60px" },
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`SHOP NOW`);
                                              } else {
                                                return [
                                                  createTextVNode("SHOP NOW")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-overlayc" }, [
                                              createVNode("div", {
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, [
                                                createVNode("span", {
                                                  class: "font-weight-bold text-white text-uppercase",
                                                  style: { "font-size": "80px" }
                                                }, "Perfect"),
                                                createVNode("span", {
                                                  class: "ms-5 text-white text-uppercase",
                                                  style: { "font-size": "80px" }
                                                }, "Design")
                                              ]),
                                              createVNode("p", {
                                                class: "text-white",
                                                style: { "font-size": "20px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " Ready. experience. compfortable and indispensable in life "),
                                              createVNode(_component_v_btn, {
                                                variant: "outlined",
                                                color: "white",
                                                class: "mt-10",
                                                style: { "width": "200px", "height": "60px" },
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "500"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("SHOP NOW")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_carousel_item, {
                                      src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider3-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550149",
                                      cover: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-overlayc" data-v-f0d810db${_scopeId6}><p data-aos="fade-right" data-aos-delay="500" class="font-weight-bold text-white" style="${ssrRenderStyle({ "font-size": "20px" })}" data-v-f0d810db${_scopeId6}> New Arrivals 2023 </p><div data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId6}><span class="font-weight-bold text-white text-uppercase" style="${ssrRenderStyle({ "font-size": "80px" })}" data-v-f0d810db${_scopeId6}>Jacket</span><span class="ms-5 text-white text-uppercase" style="${ssrRenderStyle({ "font-size": "80px" })}" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId6}>Tech Pack</span></div><p class="text-white" style="${ssrRenderStyle({ "font-size": "20px" })}" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId6}> Aurora Shell Jacket is Ready For Any Adventure </p>`);
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            variant: "outlined",
                                            color: "white",
                                            class: "mt-10",
                                            style: { "width": "200px", "height": "60px" },
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`SHOP NOW`);
                                              } else {
                                                return [
                                                  createTextVNode("SHOP NOW")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-overlayc" }, [
                                              createVNode("p", {
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500",
                                                class: "font-weight-bold text-white",
                                                style: { "font-size": "20px" }
                                              }, " New Arrivals 2023 "),
                                              createVNode("div", {
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, [
                                                createVNode("span", {
                                                  class: "font-weight-bold text-white text-uppercase",
                                                  style: { "font-size": "80px" }
                                                }, "Jacket"),
                                                createVNode("span", {
                                                  class: "ms-5 text-white text-uppercase",
                                                  style: { "font-size": "80px" },
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, "Tech Pack")
                                              ]),
                                              createVNode("p", {
                                                class: "text-white",
                                                style: { "font-size": "20px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " Aurora Shell Jacket is Ready For Any Adventure "),
                                              createVNode(_component_v_btn, {
                                                variant: "outlined",
                                                color: "white",
                                                class: "mt-10",
                                                style: { "width": "200px", "height": "60px" },
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "500"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("SHOP NOW")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_carousel_item, {
                                      src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider1-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550446",
                                      cover: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-overlayc" data-v-f0d810db${_scopeId6}><div data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId6}><span class="font-weight-bold text-white" style="${ssrRenderStyle({ "font-size": "80px" })}" data-v-f0d810db${_scopeId6}>NIKE</span><span class="ms-5 text-white text-uppercase" style="${ssrRenderStyle({ "font-size": "80px" })}" data-v-f0d810db${_scopeId6}>Baseball</span></div><p class="text-white" style="${ssrRenderStyle({ "font-size": "20px" })}" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId6}> We&#39;ve handpicked our best gifts for all kinds of athleted. </p>`);
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            variant: "outlined",
                                            color: "white",
                                            class: "mt-10",
                                            style: { "width": "200px", "height": "60px" },
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`SHOP NOW`);
                                              } else {
                                                return [
                                                  createTextVNode("SHOP NOW")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-overlayc" }, [
                                              createVNode("div", {
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, [
                                                createVNode("span", {
                                                  class: "font-weight-bold text-white",
                                                  style: { "font-size": "80px" }
                                                }, "NIKE"),
                                                createVNode("span", {
                                                  class: "ms-5 text-white text-uppercase",
                                                  style: { "font-size": "80px" }
                                                }, "Baseball")
                                              ]),
                                              createVNode("p", {
                                                class: "text-white",
                                                style: { "font-size": "20px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " We've handpicked our best gifts for all kinds of athleted. "),
                                              createVNode(_component_v_btn, {
                                                variant: "outlined",
                                                color: "white",
                                                class: "mt-10",
                                                style: { "width": "200px", "height": "60px" },
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "500"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("SHOP NOW")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_carousel_item, {
                                        src: "https://htmldemo.net/juta/juta-v1/img/slider/home-2-02.jpg",
                                        cover: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overlayc" }, [
                                            createVNode("div", {
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("span", {
                                                class: "font-weight-bold text-white text-uppercase",
                                                style: { "font-size": "80px" }
                                              }, "Perfect"),
                                              createVNode("span", {
                                                class: "ms-5 text-white text-uppercase",
                                                style: { "font-size": "80px" }
                                              }, "Design")
                                            ]),
                                            createVNode("p", {
                                              class: "text-white",
                                              style: { "font-size": "20px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " Ready. experience. compfortable and indispensable in life "),
                                            createVNode(_component_v_btn, {
                                              variant: "outlined",
                                              color: "white",
                                              class: "mt-10",
                                              style: { "width": "200px", "height": "60px" },
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("SHOP NOW")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_carousel_item, {
                                        src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider3-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550149",
                                        cover: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overlayc" }, [
                                            createVNode("p", {
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500",
                                              class: "font-weight-bold text-white",
                                              style: { "font-size": "20px" }
                                            }, " New Arrivals 2023 "),
                                            createVNode("div", {
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("span", {
                                                class: "font-weight-bold text-white text-uppercase",
                                                style: { "font-size": "80px" }
                                              }, "Jacket"),
                                              createVNode("span", {
                                                class: "ms-5 text-white text-uppercase",
                                                style: { "font-size": "80px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, "Tech Pack")
                                            ]),
                                            createVNode("p", {
                                              class: "text-white",
                                              style: { "font-size": "20px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " Aurora Shell Jacket is Ready For Any Adventure "),
                                            createVNode(_component_v_btn, {
                                              variant: "outlined",
                                              color: "white",
                                              class: "mt-10",
                                              style: { "width": "200px", "height": "60px" },
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("SHOP NOW")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_carousel_item, {
                                        src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider1-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550446",
                                        cover: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overlayc" }, [
                                            createVNode("div", {
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("span", {
                                                class: "font-weight-bold text-white",
                                                style: { "font-size": "80px" }
                                              }, "NIKE"),
                                              createVNode("span", {
                                                class: "ms-5 text-white text-uppercase",
                                                style: { "font-size": "80px" }
                                              }, "Baseball")
                                            ]),
                                            createVNode("p", {
                                              class: "text-white",
                                              style: { "font-size": "20px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " We've handpicked our best gifts for all kinds of athleted. "),
                                            createVNode(_component_v_btn, {
                                              variant: "outlined",
                                              color: "white",
                                              class: "mt-10",
                                              style: { "width": "200px", "height": "60px" },
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("SHOP NOW")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, { class: "mt-15" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/1.webp" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-overlays" data-v-f0d810db${_scopeId7}><p class="text-white text-center" style="${ssrRenderStyle({ "font-size": "25px" })}" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId7}> Sale 30% off </p><p class="text" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId7}> SPORTS SHOES </p></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-overlays" }, [
                                                    createVNode("p", {
                                                      class: "text-white text-center",
                                                      style: { "font-size": "25px" },
                                                      "data-aos": "fade-right",
                                                      "data-aos-delay": "500"
                                                    }, " Sale 30% off "),
                                                    createVNode("p", {
                                                      class: "text",
                                                      "data-aos": "fade-right",
                                                      "data-aos-delay": "500"
                                                    }, " SPORTS SHOES ")
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/1.webp" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-overlays" }, [
                                                  createVNode("p", {
                                                    class: "text-white text-center",
                                                    style: { "font-size": "25px" },
                                                    "data-aos": "fade-right",
                                                    "data-aos-delay": "500"
                                                  }, " Sale 30% off "),
                                                  createVNode("p", {
                                                    class: "text",
                                                    "data-aos": "fade-right",
                                                    "data-aos-delay": "500"
                                                  }, " SPORTS SHOES ")
                                                ])
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
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/2.webp" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-overlays" data-v-f0d810db${_scopeId7}><p class="text-white text-center" style="${ssrRenderStyle({ "font-size": "25px" })}" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId7}> Sale 50% off </p><p class="text" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId7}> NEW ARRIVAL </p></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-overlays" }, [
                                                    createVNode("p", {
                                                      class: "text-white text-center",
                                                      style: { "font-size": "25px" },
                                                      "data-aos": "fade-right",
                                                      "data-aos-delay": "500"
                                                    }, " Sale 50% off "),
                                                    createVNode("p", {
                                                      class: "text",
                                                      "data-aos": "fade-right",
                                                      "data-aos-delay": "500"
                                                    }, " NEW ARRIVAL ")
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/2.webp" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-overlays" }, [
                                                  createVNode("p", {
                                                    class: "text-white text-center",
                                                    style: { "font-size": "25px" },
                                                    "data-aos": "fade-right",
                                                    "data-aos-delay": "500"
                                                  }, " Sale 50% off "),
                                                  createVNode("p", {
                                                    class: "text",
                                                    "data-aos": "fade-right",
                                                    "data-aos-delay": "500"
                                                  }, " NEW ARRIVAL ")
                                                ])
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
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/3.webp" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-overlays" data-v-f0d810db${_scopeId7}><p class="text-white text-center" style="${ssrRenderStyle({ "font-size": "25px" })}" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId7}> Sale 45% off </p><p class="text" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId7}> NEW SNEAKERS </p></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-overlays" }, [
                                                    createVNode("p", {
                                                      class: "text-white text-center",
                                                      style: { "font-size": "25px" },
                                                      "data-aos": "fade-right",
                                                      "data-aos-delay": "500"
                                                    }, " Sale 45% off "),
                                                    createVNode("p", {
                                                      class: "text",
                                                      "data-aos": "fade-right",
                                                      "data-aos-delay": "500"
                                                    }, " NEW SNEAKERS ")
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/3.webp" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-overlays" }, [
                                                  createVNode("p", {
                                                    class: "text-white text-center",
                                                    style: { "font-size": "25px" },
                                                    "data-aos": "fade-right",
                                                    "data-aos-delay": "500"
                                                  }, " Sale 45% off "),
                                                  createVNode("p", {
                                                    class: "text",
                                                    "data-aos": "fade-right",
                                                    "data-aos-delay": "500"
                                                  }, " NEW SNEAKERS ")
                                                ])
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
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/1.webp" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-overlays" }, [
                                                createVNode("p", {
                                                  class: "text-white text-center",
                                                  style: { "font-size": "25px" },
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, " Sale 30% off "),
                                                createVNode("p", {
                                                  class: "text",
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, " SPORTS SHOES ")
                                              ])
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
                                          createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/2.webp" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-overlays" }, [
                                                createVNode("p", {
                                                  class: "text-white text-center",
                                                  style: { "font-size": "25px" },
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, " Sale 50% off "),
                                                createVNode("p", {
                                                  class: "text",
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, " NEW ARRIVAL ")
                                              ])
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
                                          createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/3.webp" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-overlays" }, [
                                                createVNode("p", {
                                                  class: "text-white text-center",
                                                  style: { "font-size": "25px" },
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, " Sale 45% off "),
                                                createVNode("p", {
                                                  class: "text",
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, " NEW SNEAKERS ")
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
                              }, _parent5, _scopeId4));
                              _push5(`<h1 class="fw-bold fadeRight mt-10" data-aos="fade-right" data-aos-delay="500" data-v-f0d810db${_scopeId4}> New Arrivals. <span style="${ssrRenderStyle({ "color": "#6b7280" })}" data-v-f0d810db${_scopeId4}>Best selling of the month</span></h1>`);
                              _push5(ssrRenderComponent(_component_v_row, { class: "my-5 d-flex align-center mt-10" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            onClick: ($event) => grid.value = !unref(grid),
                                            class: { "grid-bg": unref(grid) }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` mdi-view-list `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" mdi-view-list ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" mdi-view-list ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            onClick: ($event) => grid.value = !unref(grid),
                                            class: [{ "grid-bg": !unref(grid) }, "ml-3"]
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` mdi-apps `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" mdi-apps ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" mdi-apps ")
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
                                            createVNode(_component_v_btn, {
                                              onClick: ($event) => grid.value = !unref(grid),
                                              class: { "grid-bg": unref(grid) }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-view-list ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick", "class"]),
                                            createVNode(_component_v_btn, {
                                              onClick: ($event) => grid.value = !unref(grid),
                                              class: [{ "grid-bg": !unref(grid) }, "ml-3"]
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-apps ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick", "class"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_select, {
                                            modelValue: unref(sortOption),
                                            "onUpdate:modelValue": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
                                            clearable: "",
                                            label: "Sorted by",
                                            items: unref(sortOptions),
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_select, {
                                              modelValue: unref(sortOption),
                                              "onUpdate:modelValue": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
                                              clearable: "",
                                              label: "Sorted by",
                                              items: unref(sortOptions),
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            label: "Search",
                                            modelValue: unref(searchTerm),
                                            "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
                                            variant: "outlined",
                                            "prepend-inner-icon": "mdi-magnify"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              label: "Search",
                                              modelValue: unref(searchTerm),
                                              "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
                                              variant: "outlined",
                                              "prepend-inner-icon": "mdi-magnify"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            onClick: ($event) => grid.value = !unref(grid),
                                            class: { "grid-bg": unref(grid) }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-view-list ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick", "class"]),
                                          createVNode(_component_v_btn, {
                                            onClick: ($event) => grid.value = !unref(grid),
                                            class: [{ "grid-bg": !unref(grid) }, "ml-3"]
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-apps ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick", "class"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            modelValue: unref(sortOption),
                                            "onUpdate:modelValue": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
                                            clearable: "",
                                            label: "Sorted by",
                                            items: unref(sortOptions),
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            label: "Search",
                                            modelValue: unref(searchTerm),
                                            "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
                                            variant: "outlined",
                                            "prepend-inner-icon": "mdi-magnify"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, {
                                            style: unref(grid) ? null : { display: "none" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(unref(displayProducts), (product) => {
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    cols: "12",
                                                    md: "4",
                                                    sm: "6",
                                                    key: product.id,
                                                    "data-aos": "zoom-in-up",
                                                    "data-aos-delay": "250"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_product_card1, { product }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_product_card1, { product }, null, 8, ["product"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                                    return openBlock(), createBlock(_component_v_col, {
                                                      cols: "12",
                                                      md: "4",
                                                      sm: "6",
                                                      key: product.id,
                                                      "data-aos": "zoom-in-up",
                                                      "data-aos-delay": "250"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_product_card1, { product }, null, 8, ["product"])
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(displayProducts), (product) => {
                                            _push7(ssrRenderComponent(_component_v_row, {
                                              style: !unref(grid) ? null : { display: "none" },
                                              key: product.id,
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_product_card2, { product }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_product_card2, { product }, null, 8, ["product"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            withDirectives(createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                                  return openBlock(), createBlock(_component_v_col, {
                                                    cols: "12",
                                                    md: "4",
                                                    sm: "6",
                                                    key: product.id,
                                                    "data-aos": "zoom-in-up",
                                                    "data-aos-delay": "250"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_product_card1, { product }, null, 8, ["product"])
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
                                              ]),
                                              _: 1
                                            }, 512), [
                                              [vShow, unref(grid)]
                                            ]),
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                              return withDirectives((openBlock(), createBlock(_component_v_row, {
                                                key: product.id,
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "500"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_product_card2, { product }, null, 8, ["product"])
                                                ]),
                                                _: 2
                                              }, 1024)), [
                                                [vShow, !unref(grid)]
                                              ]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          withDirectives(createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                                return openBlock(), createBlock(_component_v_col, {
                                                  cols: "12",
                                                  md: "4",
                                                  sm: "6",
                                                  key: product.id,
                                                  "data-aos": "zoom-in-up",
                                                  "data-aos-delay": "250"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_product_card1, { product }, null, 8, ["product"])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 1
                                          }, 512), [
                                            [vShow, unref(grid)]
                                          ]),
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                            return withDirectives((openBlock(), createBlock(_component_v_row, {
                                              key: product.id,
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_product_card2, { product }, null, 8, ["product"])
                                              ]),
                                              _: 2
                                            }, 1024)), [
                                              [vShow, !unref(grid)]
                                            ]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="mt-8 d-flex justify-center" data-v-f0d810db${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_pagination, {
                                length: unref(totalPages),
                                color: "black",
                                modelValue: unref(currentPage),
                                "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(_component_v_carousel, { "show-arrows": "hover" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_carousel_item, {
                                      src: "https://htmldemo.net/juta/juta-v1/img/slider/home-2-02.jpg",
                                      cover: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overlayc" }, [
                                          createVNode("div", {
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("span", {
                                              class: "font-weight-bold text-white text-uppercase",
                                              style: { "font-size": "80px" }
                                            }, "Perfect"),
                                            createVNode("span", {
                                              class: "ms-5 text-white text-uppercase",
                                              style: { "font-size": "80px" }
                                            }, "Design")
                                          ]),
                                          createVNode("p", {
                                            class: "text-white",
                                            style: { "font-size": "20px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " Ready. experience. compfortable and indispensable in life "),
                                          createVNode(_component_v_btn, {
                                            variant: "outlined",
                                            color: "white",
                                            class: "mt-10",
                                            style: { "width": "200px", "height": "60px" },
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("SHOP NOW")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_carousel_item, {
                                      src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider3-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550149",
                                      cover: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overlayc" }, [
                                          createVNode("p", {
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500",
                                            class: "font-weight-bold text-white",
                                            style: { "font-size": "20px" }
                                          }, " New Arrivals 2023 "),
                                          createVNode("div", {
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("span", {
                                              class: "font-weight-bold text-white text-uppercase",
                                              style: { "font-size": "80px" }
                                            }, "Jacket"),
                                            createVNode("span", {
                                              class: "ms-5 text-white text-uppercase",
                                              style: { "font-size": "80px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, "Tech Pack")
                                          ]),
                                          createVNode("p", {
                                            class: "text-white",
                                            style: { "font-size": "20px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " Aurora Shell Jacket is Ready For Any Adventure "),
                                          createVNode(_component_v_btn, {
                                            variant: "outlined",
                                            color: "white",
                                            class: "mt-10",
                                            style: { "width": "200px", "height": "60px" },
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("SHOP NOW")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_carousel_item, {
                                      src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider1-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550446",
                                      cover: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overlayc" }, [
                                          createVNode("div", {
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("span", {
                                              class: "font-weight-bold text-white",
                                              style: { "font-size": "80px" }
                                            }, "NIKE"),
                                            createVNode("span", {
                                              class: "ms-5 text-white text-uppercase",
                                              style: { "font-size": "80px" }
                                            }, "Baseball")
                                          ]),
                                          createVNode("p", {
                                            class: "text-white",
                                            style: { "font-size": "20px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " We've handpicked our best gifts for all kinds of athleted. "),
                                          createVNode(_component_v_btn, {
                                            variant: "outlined",
                                            color: "white",
                                            class: "mt-10",
                                            style: { "width": "200px", "height": "60px" },
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("SHOP NOW")
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
                                createVNode(_component_v_row, { class: "mt-15" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/1.webp" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-overlays" }, [
                                              createVNode("p", {
                                                class: "text-white text-center",
                                                style: { "font-size": "25px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " Sale 30% off "),
                                              createVNode("p", {
                                                class: "text",
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " SPORTS SHOES ")
                                            ])
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
                                        createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/2.webp" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-overlays" }, [
                                              createVNode("p", {
                                                class: "text-white text-center",
                                                style: { "font-size": "25px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " Sale 50% off "),
                                              createVNode("p", {
                                                class: "text",
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " NEW ARRIVAL ")
                                            ])
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
                                        createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/3.webp" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-overlays" }, [
                                              createVNode("p", {
                                                class: "text-white text-center",
                                                style: { "font-size": "25px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " Sale 45% off "),
                                              createVNode("p", {
                                                class: "text",
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, " NEW SNEAKERS ")
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
                                createVNode("h1", {
                                  class: "fw-bold fadeRight mt-10",
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, [
                                  createTextVNode(" New Arrivals. "),
                                  createVNode("span", { style: { "color": "#6b7280" } }, "Best selling of the month")
                                ]),
                                createVNode(_component_v_row, { class: "my-5 d-flex align-center mt-10" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          onClick: ($event) => grid.value = !unref(grid),
                                          class: { "grid-bg": unref(grid) }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi-view-list ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick", "class"]),
                                        createVNode(_component_v_btn, {
                                          onClick: ($event) => grid.value = !unref(grid),
                                          class: [{ "grid-bg": !unref(grid) }, "ml-3"]
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi-apps ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick", "class"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          modelValue: unref(sortOption),
                                          "onUpdate:modelValue": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
                                          clearable: "",
                                          label: "Sorted by",
                                          items: unref(sortOptions),
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          label: "Search",
                                          modelValue: unref(searchTerm),
                                          "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
                                          variant: "outlined",
                                          "prepend-inner-icon": "mdi-magnify"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        withDirectives(createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                              return openBlock(), createBlock(_component_v_col, {
                                                cols: "12",
                                                md: "4",
                                                sm: "6",
                                                key: product.id,
                                                "data-aos": "zoom-in-up",
                                                "data-aos-delay": "250"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_product_card1, { product }, null, 8, ["product"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 512), [
                                          [vShow, unref(grid)]
                                        ]),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                          return withDirectives((openBlock(), createBlock(_component_v_row, {
                                            key: product.id,
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_product_card2, { product }, null, 8, ["product"])
                                            ]),
                                            _: 2
                                          }, 1024)), [
                                            [vShow, !unref(grid)]
                                          ]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "mt-8 d-flex justify-center" }, [
                                  createVNode(_component_v_pagination, {
                                    length: unref(totalPages),
                                    color: "black",
                                    modelValue: unref(currentPage),
                                    "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null
                                  }, null, 8, ["length", "modelValue", "onUpdate:modelValue"])
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
                            md: "2",
                            class: "sidebar hidden-sm-and-down"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    class: "mx-auto",
                                    "max-width": "256"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_subheader, {
                                        class: "font-weight-bold",
                                        style: { "font-size": "18px" },
                                        color: "black"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Categories")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(styles), (l) => {
                                        return openBlock(), createBlock("div", {
                                          key: l.title
                                        }, [
                                          createVNode(_component_v_list_item, {
                                            link: "",
                                            title: l.title
                                          }, {
                                            append: withCtx(() => [
                                              createVNode(_component_v_badge, {
                                                color: "#e5345b",
                                                content: l.count,
                                                inline: ""
                                              }, null, 8, ["content"])
                                            ]),
                                            _: 2
                                          }, 1032, ["title"])
                                        ]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, { class: "mx-auto" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_subheader, {
                                        class: "font-weight-bold",
                                        style: { "font-size": "18px" },
                                        color: "black"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Price")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_range_slider, {
                                            color: "#e5345b",
                                            max: "40",
                                            min: "30",
                                            style: { "width": "220px" },
                                            class: "mx-auto"
                                          }),
                                          createVNode(_component_v_list_item_subtitle, { class: "font-weight-bold" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Price : $20 - $900")
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
                              createVNode(_component_v_card, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, { "select-strategy": "classic" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_subheader, {
                                        class: "font-weight-bold",
                                        style: { "font-size": "18px" },
                                        color: "black"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Brand")
                                        ]),
                                        _: 1
                                      }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b) => {
                                        return openBlock(), createBlock("div", {
                                          key: b.title
                                        }, [
                                          createVNode(_component_v_list_item, { value: "notifications" }, {
                                            prepend: withCtx(() => [
                                              createVNode(_component_v_list_item_action, { start: "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_checkbox_btn, {
                                                    "model-value": b.state
                                                  }, null, 8, ["model-value"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(b.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card, {
                                flat: "",
                                border: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_subheader, {
                                        class: "font-weight-bold",
                                        style: { "font-size": "18px" },
                                        color: "black"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Color")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_chip_group, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-black",
                                                variant: "outlined",
                                                style: { "border-radius": "50%", "background-color": "white" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-black",
                                                style: { "border-radius": "50%", "background-color": "#e6e6e6" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-white",
                                                style: { "border-radius": "50%", "background-color": "#ffb500" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-white",
                                                style: { "border-radius": "50%", "background-color": "#f27229" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-white",
                                                style: { "border-radius": "50%", "background-color": "#eb3427" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-white",
                                                style: { "border-radius": "50%", "background-color": "#923fa3" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-white",
                                                style: { "border-radius": "50%", "background-color": "#3a51df" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-white",
                                                style: { "border-radius": "50%", "background-color": "#23a7f5" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-white",
                                                style: { "border-radius": "50%", "background-color": "#5eb524" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-white",
                                                style: { "border-radius": "50%", "background-color": "#7c5f4d" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-white",
                                                style: { "border-radius": "50%", "background-color": "black" }
                                              }),
                                              createVNode(_component_v_chip, {
                                                filter: "",
                                                class: "text-white",
                                                style: { "border-radius": "50%", "background-color": "lime" }
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
                              createVNode(_component_v_card, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_subheader, {
                                        class: "font-weight-bold",
                                        style: { "font-size": "18px" },
                                        color: "black"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Size")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_chip_group, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(sizes), (size) => {
                                                return openBlock(), createBlock(_component_v_chip, {
                                                  filter: "",
                                                  key: size
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(size), 1)
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
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "10"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_carousel, { "show-arrows": "hover" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_carousel_item, {
                                    src: "https://htmldemo.net/juta/juta-v1/img/slider/home-2-02.jpg",
                                    cover: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-overlayc" }, [
                                        createVNode("div", {
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("span", {
                                            class: "font-weight-bold text-white text-uppercase",
                                            style: { "font-size": "80px" }
                                          }, "Perfect"),
                                          createVNode("span", {
                                            class: "ms-5 text-white text-uppercase",
                                            style: { "font-size": "80px" }
                                          }, "Design")
                                        ]),
                                        createVNode("p", {
                                          class: "text-white",
                                          style: { "font-size": "20px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " Ready. experience. compfortable and indispensable in life "),
                                        createVNode(_component_v_btn, {
                                          variant: "outlined",
                                          color: "white",
                                          class: "mt-10",
                                          style: { "width": "200px", "height": "60px" },
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("SHOP NOW")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_carousel_item, {
                                    src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider3-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550149",
                                    cover: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-overlayc" }, [
                                        createVNode("p", {
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500",
                                          class: "font-weight-bold text-white",
                                          style: { "font-size": "20px" }
                                        }, " New Arrivals 2023 "),
                                        createVNode("div", {
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("span", {
                                            class: "font-weight-bold text-white text-uppercase",
                                            style: { "font-size": "80px" }
                                          }, "Jacket"),
                                          createVNode("span", {
                                            class: "ms-5 text-white text-uppercase",
                                            style: { "font-size": "80px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, "Tech Pack")
                                        ]),
                                        createVNode("p", {
                                          class: "text-white",
                                          style: { "font-size": "20px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " Aurora Shell Jacket is Ready For Any Adventure "),
                                        createVNode(_component_v_btn, {
                                          variant: "outlined",
                                          color: "white",
                                          class: "mt-10",
                                          style: { "width": "200px", "height": "60px" },
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("SHOP NOW")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_carousel_item, {
                                    src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider1-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550446",
                                    cover: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-overlayc" }, [
                                        createVNode("div", {
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("span", {
                                            class: "font-weight-bold text-white",
                                            style: { "font-size": "80px" }
                                          }, "NIKE"),
                                          createVNode("span", {
                                            class: "ms-5 text-white text-uppercase",
                                            style: { "font-size": "80px" }
                                          }, "Baseball")
                                        ]),
                                        createVNode("p", {
                                          class: "text-white",
                                          style: { "font-size": "20px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " We've handpicked our best gifts for all kinds of athleted. "),
                                        createVNode(_component_v_btn, {
                                          variant: "outlined",
                                          color: "white",
                                          class: "mt-10",
                                          style: { "width": "200px", "height": "60px" },
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("SHOP NOW")
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
                              createVNode(_component_v_row, { class: "mt-15" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/1.webp" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overlays" }, [
                                            createVNode("p", {
                                              class: "text-white text-center",
                                              style: { "font-size": "25px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " Sale 30% off "),
                                            createVNode("p", {
                                              class: "text",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " SPORTS SHOES ")
                                          ])
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
                                      createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/2.webp" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overlays" }, [
                                            createVNode("p", {
                                              class: "text-white text-center",
                                              style: { "font-size": "25px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " Sale 50% off "),
                                            createVNode("p", {
                                              class: "text",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " NEW ARRIVAL ")
                                          ])
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
                                      createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/3.webp" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overlays" }, [
                                            createVNode("p", {
                                              class: "text-white text-center",
                                              style: { "font-size": "25px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " Sale 45% off "),
                                            createVNode("p", {
                                              class: "text",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, " NEW SNEAKERS ")
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
                              createVNode("h1", {
                                class: "fw-bold fadeRight mt-10",
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, [
                                createTextVNode(" New Arrivals. "),
                                createVNode("span", { style: { "color": "#6b7280" } }, "Best selling of the month")
                              ]),
                              createVNode(_component_v_row, { class: "my-5 d-flex align-center mt-10" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        onClick: ($event) => grid.value = !unref(grid),
                                        class: { "grid-bg": unref(grid) }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" mdi-view-list ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick", "class"]),
                                      createVNode(_component_v_btn, {
                                        onClick: ($event) => grid.value = !unref(grid),
                                        class: [{ "grid-bg": !unref(grid) }, "ml-3"]
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" mdi-apps ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick", "class"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        modelValue: unref(sortOption),
                                        "onUpdate:modelValue": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
                                        clearable: "",
                                        label: "Sorted by",
                                        items: unref(sortOptions),
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Search",
                                        modelValue: unref(searchTerm),
                                        "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
                                        variant: "outlined",
                                        "prepend-inner-icon": "mdi-magnify"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      withDirectives(createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                            return openBlock(), createBlock(_component_v_col, {
                                              cols: "12",
                                              md: "4",
                                              sm: "6",
                                              key: product.id,
                                              "data-aos": "zoom-in-up",
                                              "data-aos-delay": "250"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_product_card1, { product }, null, 8, ["product"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 512), [
                                        [vShow, unref(grid)]
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                        return withDirectives((openBlock(), createBlock(_component_v_row, {
                                          key: product.id,
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_product_card2, { product }, null, 8, ["product"])
                                          ]),
                                          _: 2
                                        }, 1024)), [
                                          [vShow, !unref(grid)]
                                        ]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "mt-8 d-flex justify-center" }, [
                                createVNode(_component_v_pagination, {
                                  length: unref(totalPages),
                                  color: "black",
                                  modelValue: unref(currentPage),
                                  "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null
                                }, null, 8, ["length", "modelValue", "onUpdate:modelValue"])
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
                    createVNode(_component_v_row, { class: "mt-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "2",
                          class: "sidebar hidden-sm-and-down"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              flat: "",
                              border: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, {
                                  class: "mx-auto",
                                  "max-width": "256"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_subheader, {
                                      class: "font-weight-bold",
                                      style: { "font-size": "18px" },
                                      color: "black"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Categories")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(styles), (l) => {
                                      return openBlock(), createBlock("div", {
                                        key: l.title
                                      }, [
                                        createVNode(_component_v_list_item, {
                                          link: "",
                                          title: l.title
                                        }, {
                                          append: withCtx(() => [
                                            createVNode(_component_v_badge, {
                                              color: "#e5345b",
                                              content: l.count,
                                              inline: ""
                                            }, null, 8, ["content"])
                                          ]),
                                          _: 2
                                        }, 1032, ["title"])
                                      ]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card, {
                              flat: "",
                              border: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, { class: "mx-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_subheader, {
                                      class: "font-weight-bold",
                                      style: { "font-size": "18px" },
                                      color: "black"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Price")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_range_slider, {
                                          color: "#e5345b",
                                          max: "40",
                                          min: "30",
                                          style: { "width": "220px" },
                                          class: "mx-auto"
                                        }),
                                        createVNode(_component_v_list_item_subtitle, { class: "font-weight-bold" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Price : $20 - $900")
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
                            createVNode(_component_v_card, {
                              flat: "",
                              border: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, { "select-strategy": "classic" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_subheader, {
                                      class: "font-weight-bold",
                                      style: { "font-size": "18px" },
                                      color: "black"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Brand")
                                      ]),
                                      _: 1
                                    }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b) => {
                                      return openBlock(), createBlock("div", {
                                        key: b.title
                                      }, [
                                        createVNode(_component_v_list_item, { value: "notifications" }, {
                                          prepend: withCtx(() => [
                                            createVNode(_component_v_list_item_action, { start: "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_checkbox_btn, {
                                                  "model-value": b.state
                                                }, null, 8, ["model-value"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(b.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card, {
                              flat: "",
                              border: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_subheader, {
                                      class: "font-weight-bold",
                                      style: { "font-size": "18px" },
                                      color: "black"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Color")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_chip_group, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-black",
                                              variant: "outlined",
                                              style: { "border-radius": "50%", "background-color": "white" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-black",
                                              style: { "border-radius": "50%", "background-color": "#e6e6e6" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-white",
                                              style: { "border-radius": "50%", "background-color": "#ffb500" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-white",
                                              style: { "border-radius": "50%", "background-color": "#f27229" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-white",
                                              style: { "border-radius": "50%", "background-color": "#eb3427" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-white",
                                              style: { "border-radius": "50%", "background-color": "#923fa3" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-white",
                                              style: { "border-radius": "50%", "background-color": "#3a51df" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-white",
                                              style: { "border-radius": "50%", "background-color": "#23a7f5" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-white",
                                              style: { "border-radius": "50%", "background-color": "#5eb524" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-white",
                                              style: { "border-radius": "50%", "background-color": "#7c5f4d" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-white",
                                              style: { "border-radius": "50%", "background-color": "black" }
                                            }),
                                            createVNode(_component_v_chip, {
                                              filter: "",
                                              class: "text-white",
                                              style: { "border-radius": "50%", "background-color": "lime" }
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
                            createVNode(_component_v_card, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_subheader, {
                                      class: "font-weight-bold",
                                      style: { "font-size": "18px" },
                                      color: "black"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Size")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_chip_group, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(sizes), (size) => {
                                              return openBlock(), createBlock(_component_v_chip, {
                                                filter: "",
                                                key: size
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(size), 1)
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
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "10"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_carousel, { "show-arrows": "hover" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_carousel_item, {
                                  src: "https://htmldemo.net/juta/juta-v1/img/slider/home-2-02.jpg",
                                  cover: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overlayc" }, [
                                      createVNode("div", {
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("span", {
                                          class: "font-weight-bold text-white text-uppercase",
                                          style: { "font-size": "80px" }
                                        }, "Perfect"),
                                        createVNode("span", {
                                          class: "ms-5 text-white text-uppercase",
                                          style: { "font-size": "80px" }
                                        }, "Design")
                                      ]),
                                      createVNode("p", {
                                        class: "text-white",
                                        style: { "font-size": "20px" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " Ready. experience. compfortable and indispensable in life "),
                                      createVNode(_component_v_btn, {
                                        variant: "outlined",
                                        color: "white",
                                        class: "mt-10",
                                        style: { "width": "200px", "height": "60px" },
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("SHOP NOW")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_carousel_item, {
                                  src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider3-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550149",
                                  cover: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overlayc" }, [
                                      createVNode("p", {
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500",
                                        class: "font-weight-bold text-white",
                                        style: { "font-size": "20px" }
                                      }, " New Arrivals 2023 "),
                                      createVNode("div", {
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("span", {
                                          class: "font-weight-bold text-white text-uppercase",
                                          style: { "font-size": "80px" }
                                        }, "Jacket"),
                                        createVNode("span", {
                                          class: "ms-5 text-white text-uppercase",
                                          style: { "font-size": "80px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, "Tech Pack")
                                      ]),
                                      createVNode("p", {
                                        class: "text-white",
                                        style: { "font-size": "20px" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " Aurora Shell Jacket is Ready For Any Adventure "),
                                      createVNode(_component_v_btn, {
                                        variant: "outlined",
                                        color: "white",
                                        class: "mt-10",
                                        style: { "width": "200px", "height": "60px" },
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("SHOP NOW")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_carousel_item, {
                                  src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider1-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550446",
                                  cover: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overlayc" }, [
                                      createVNode("div", {
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("span", {
                                          class: "font-weight-bold text-white",
                                          style: { "font-size": "80px" }
                                        }, "NIKE"),
                                        createVNode("span", {
                                          class: "ms-5 text-white text-uppercase",
                                          style: { "font-size": "80px" }
                                        }, "Baseball")
                                      ]),
                                      createVNode("p", {
                                        class: "text-white",
                                        style: { "font-size": "20px" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " We've handpicked our best gifts for all kinds of athleted. "),
                                      createVNode(_component_v_btn, {
                                        variant: "outlined",
                                        color: "white",
                                        class: "mt-10",
                                        style: { "width": "200px", "height": "60px" },
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("SHOP NOW")
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
                            createVNode(_component_v_row, { class: "mt-15" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/1.webp" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overlays" }, [
                                          createVNode("p", {
                                            class: "text-white text-center",
                                            style: { "font-size": "25px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " Sale 30% off "),
                                          createVNode("p", {
                                            class: "text",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " SPORTS SHOES ")
                                        ])
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
                                    createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/2.webp" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overlays" }, [
                                          createVNode("p", {
                                            class: "text-white text-center",
                                            style: { "font-size": "25px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " Sale 50% off "),
                                          createVNode("p", {
                                            class: "text",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " NEW ARRIVAL ")
                                        ])
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
                                    createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/3.webp" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overlays" }, [
                                          createVNode("p", {
                                            class: "text-white text-center",
                                            style: { "font-size": "25px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " Sale 45% off "),
                                          createVNode("p", {
                                            class: "text",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, " NEW SNEAKERS ")
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
                            createVNode("h1", {
                              class: "fw-bold fadeRight mt-10",
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, [
                              createTextVNode(" New Arrivals. "),
                              createVNode("span", { style: { "color": "#6b7280" } }, "Best selling of the month")
                            ]),
                            createVNode(_component_v_row, { class: "my-5 d-flex align-center mt-10" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      onClick: ($event) => grid.value = !unref(grid),
                                      class: { "grid-bg": unref(grid) }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" mdi-view-list ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick", "class"]),
                                    createVNode(_component_v_btn, {
                                      onClick: ($event) => grid.value = !unref(grid),
                                      class: [{ "grid-bg": !unref(grid) }, "ml-3"]
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" mdi-apps ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick", "class"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      modelValue: unref(sortOption),
                                      "onUpdate:modelValue": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
                                      clearable: "",
                                      label: "Sorted by",
                                      items: unref(sortOptions),
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Search",
                                      modelValue: unref(searchTerm),
                                      "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
                                      variant: "outlined",
                                      "prepend-inner-icon": "mdi-magnify"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    withDirectives(createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                          return openBlock(), createBlock(_component_v_col, {
                                            cols: "12",
                                            md: "4",
                                            sm: "6",
                                            key: product.id,
                                            "data-aos": "zoom-in-up",
                                            "data-aos-delay": "250"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_product_card1, { product }, null, 8, ["product"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 512), [
                                      [vShow, unref(grid)]
                                    ]),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                      return withDirectives((openBlock(), createBlock(_component_v_row, {
                                        key: product.id,
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_product_card2, { product }, null, 8, ["product"])
                                        ]),
                                        _: 2
                                      }, 1024)), [
                                        [vShow, !unref(grid)]
                                      ]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-8 d-flex justify-center" }, [
                              createVNode(_component_v_pagination, {
                                length: unref(totalPages),
                                color: "black",
                                modelValue: unref(currentPage),
                                "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null
                              }, null, 8, ["length", "modelValue", "onUpdate:modelValue"])
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
          } else {
            return [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_img, {
                    src: "/images/b1.jpg",
                    height: "250",
                    width: "100%",
                    class: "bg-grey-lighten-2",
                    cover: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-overlay" }, [
                        createVNode("p", {
                          class: "text",
                          "data-aos": "fade-right",
                          "data-aos-delay": "500"
                        }, "#Stay Home"),
                        createVNode("p", {
                          class: "text-white text-center",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. ")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "mt-5" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "2",
                        class: "sidebar hidden-sm-and-down"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            flat: "",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, {
                                class: "mx-auto",
                                "max-width": "256"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_subheader, {
                                    class: "font-weight-bold",
                                    style: { "font-size": "18px" },
                                    color: "black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Categories")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(styles), (l) => {
                                    return openBlock(), createBlock("div", {
                                      key: l.title
                                    }, [
                                      createVNode(_component_v_list_item, {
                                        link: "",
                                        title: l.title
                                      }, {
                                        append: withCtx(() => [
                                          createVNode(_component_v_badge, {
                                            color: "#e5345b",
                                            content: l.count,
                                            inline: ""
                                          }, null, 8, ["content"])
                                        ]),
                                        _: 2
                                      }, 1032, ["title"])
                                    ]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card, {
                            flat: "",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, { class: "mx-auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_subheader, {
                                    class: "font-weight-bold",
                                    style: { "font-size": "18px" },
                                    color: "black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Price")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_range_slider, {
                                        color: "#e5345b",
                                        max: "40",
                                        min: "30",
                                        style: { "width": "220px" },
                                        class: "mx-auto"
                                      }),
                                      createVNode(_component_v_list_item_subtitle, { class: "font-weight-bold" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Price : $20 - $900")
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
                          createVNode(_component_v_card, {
                            flat: "",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, { "select-strategy": "classic" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_subheader, {
                                    class: "font-weight-bold",
                                    style: { "font-size": "18px" },
                                    color: "black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Brand")
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (b) => {
                                    return openBlock(), createBlock("div", {
                                      key: b.title
                                    }, [
                                      createVNode(_component_v_list_item, { value: "notifications" }, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_list_item_action, { start: "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_checkbox_btn, {
                                                "model-value": b.state
                                              }, null, 8, ["model-value"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(b.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card, {
                            flat: "",
                            border: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_subheader, {
                                    class: "font-weight-bold",
                                    style: { "font-size": "18px" },
                                    color: "black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Color")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_chip_group, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-black",
                                            variant: "outlined",
                                            style: { "border-radius": "50%", "background-color": "white" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-black",
                                            style: { "border-radius": "50%", "background-color": "#e6e6e6" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-white",
                                            style: { "border-radius": "50%", "background-color": "#ffb500" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-white",
                                            style: { "border-radius": "50%", "background-color": "#f27229" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-white",
                                            style: { "border-radius": "50%", "background-color": "#eb3427" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-white",
                                            style: { "border-radius": "50%", "background-color": "#923fa3" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-white",
                                            style: { "border-radius": "50%", "background-color": "#3a51df" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-white",
                                            style: { "border-radius": "50%", "background-color": "#23a7f5" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-white",
                                            style: { "border-radius": "50%", "background-color": "#5eb524" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-white",
                                            style: { "border-radius": "50%", "background-color": "#7c5f4d" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-white",
                                            style: { "border-radius": "50%", "background-color": "black" }
                                          }),
                                          createVNode(_component_v_chip, {
                                            filter: "",
                                            class: "text-white",
                                            style: { "border-radius": "50%", "background-color": "lime" }
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
                          createVNode(_component_v_card, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_subheader, {
                                    class: "font-weight-bold",
                                    style: { "font-size": "18px" },
                                    color: "black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Size")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_chip_group, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(sizes), (size) => {
                                            return openBlock(), createBlock(_component_v_chip, {
                                              filter: "",
                                              key: size
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(size), 1)
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
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "10"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_carousel, { "show-arrows": "hover" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_carousel_item, {
                                src: "https://htmldemo.net/juta/juta-v1/img/slider/home-2-02.jpg",
                                cover: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overlayc" }, [
                                    createVNode("div", {
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("span", {
                                        class: "font-weight-bold text-white text-uppercase",
                                        style: { "font-size": "80px" }
                                      }, "Perfect"),
                                      createVNode("span", {
                                        class: "ms-5 text-white text-uppercase",
                                        style: { "font-size": "80px" }
                                      }, "Design")
                                    ]),
                                    createVNode("p", {
                                      class: "text-white",
                                      style: { "font-size": "20px" },
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, " Ready. experience. compfortable and indispensable in life "),
                                    createVNode(_component_v_btn, {
                                      variant: "outlined",
                                      color: "white",
                                      class: "mt-10",
                                      style: { "width": "200px", "height": "60px" },
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("SHOP NOW")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_carousel_item, {
                                src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider3-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550149",
                                cover: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overlayc" }, [
                                    createVNode("p", {
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500",
                                      class: "font-weight-bold text-white",
                                      style: { "font-size": "20px" }
                                    }, " New Arrivals 2023 "),
                                    createVNode("div", {
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("span", {
                                        class: "font-weight-bold text-white text-uppercase",
                                        style: { "font-size": "80px" }
                                      }, "Jacket"),
                                      createVNode("span", {
                                        class: "ms-5 text-white text-uppercase",
                                        style: { "font-size": "80px" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, "Tech Pack")
                                    ]),
                                    createVNode("p", {
                                      class: "text-white",
                                      style: { "font-size": "20px" },
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, " Aurora Shell Jacket is Ready For Any Adventure "),
                                    createVNode(_component_v_btn, {
                                      variant: "outlined",
                                      color: "white",
                                      class: "mt-10",
                                      style: { "width": "200px", "height": "60px" },
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("SHOP NOW")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_carousel_item, {
                                src: "https://cdn.shopify.com/s/files/1/0052/8164/4662/files/slider1-sneaker2-1920x765_1920x900.progressive.jpg?v=1613550446",
                                cover: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overlayc" }, [
                                    createVNode("div", {
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("span", {
                                        class: "font-weight-bold text-white",
                                        style: { "font-size": "80px" }
                                      }, "NIKE"),
                                      createVNode("span", {
                                        class: "ms-5 text-white text-uppercase",
                                        style: { "font-size": "80px" }
                                      }, "Baseball")
                                    ]),
                                    createVNode("p", {
                                      class: "text-white",
                                      style: { "font-size": "20px" },
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, " We've handpicked our best gifts for all kinds of athleted. "),
                                    createVNode(_component_v_btn, {
                                      variant: "outlined",
                                      color: "white",
                                      class: "mt-10",
                                      style: { "width": "200px", "height": "60px" },
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("SHOP NOW")
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
                          createVNode(_component_v_row, { class: "mt-15" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/1.webp" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-overlays" }, [
                                        createVNode("p", {
                                          class: "text-white text-center",
                                          style: { "font-size": "25px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " Sale 30% off "),
                                        createVNode("p", {
                                          class: "text",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " SPORTS SHOES ")
                                      ])
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
                                  createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/2.webp" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-overlays" }, [
                                        createVNode("p", {
                                          class: "text-white text-center",
                                          style: { "font-size": "25px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " Sale 50% off "),
                                        createVNode("p", {
                                          class: "text",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " NEW ARRIVAL ")
                                      ])
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
                                  createVNode(_component_v_img, { src: "https://htmldemo.net/shome/shome/assets/img/shop/category/3.webp" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-overlays" }, [
                                        createVNode("p", {
                                          class: "text-white text-center",
                                          style: { "font-size": "25px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " Sale 45% off "),
                                        createVNode("p", {
                                          class: "text",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, " NEW SNEAKERS ")
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
                          createVNode("h1", {
                            class: "fw-bold fadeRight mt-10",
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, [
                            createTextVNode(" New Arrivals. "),
                            createVNode("span", { style: { "color": "#6b7280" } }, "Best selling of the month")
                          ]),
                          createVNode(_component_v_row, { class: "my-5 d-flex align-center mt-10" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    onClick: ($event) => grid.value = !unref(grid),
                                    class: { "grid-bg": unref(grid) }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" mdi-view-list ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "class"]),
                                  createVNode(_component_v_btn, {
                                    onClick: ($event) => grid.value = !unref(grid),
                                    class: [{ "grid-bg": !unref(grid) }, "ml-3"]
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" mdi-apps ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "class"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    modelValue: unref(sortOption),
                                    "onUpdate:modelValue": ($event) => isRef(sortOption) ? sortOption.value = $event : null,
                                    clearable: "",
                                    label: "Sorted by",
                                    items: unref(sortOptions),
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Search",
                                    modelValue: unref(searchTerm),
                                    "onUpdate:modelValue": ($event) => isRef(searchTerm) ? searchTerm.value = $event : null,
                                    variant: "outlined",
                                    "prepend-inner-icon": "mdi-magnify"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  withDirectives(createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          cols: "12",
                                          md: "4",
                                          sm: "6",
                                          key: product.id,
                                          "data-aos": "zoom-in-up",
                                          "data-aos-delay": "250"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_product_card1, { product }, null, 8, ["product"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 512), [
                                    [vShow, unref(grid)]
                                  ]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(displayProducts), (product) => {
                                    return withDirectives((openBlock(), createBlock(_component_v_row, {
                                      key: product.id,
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_product_card2, { product }, null, 8, ["product"])
                                      ]),
                                      _: 2
                                    }, 1024)), [
                                      [vShow, !unref(grid)]
                                    ]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "mt-8 d-flex justify-center" }, [
                            createVNode(_component_v_pagination, {
                              length: unref(totalPages),
                              color: "black",
                              modelValue: unref(currentPage),
                              "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null
                            }, null, 8, ["length", "modelValue", "onUpdate:modelValue"])
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f0d810db"]]);

export { index as default };
//# sourceMappingURL=index-83071be6.mjs.map
