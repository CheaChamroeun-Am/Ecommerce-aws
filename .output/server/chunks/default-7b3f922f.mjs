import { _ as __nuxt_component_0$1 } from './nuxt-link-80d3cee7.mjs';
import { u as useAuth } from './state-354a3b64.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, renderSlot, useSSRContext, ref, computed, unref, isRef, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, withModifiers } from 'vue';
import { c as useNuxtApp, a as useStore, _ as _export_sfc, n as navigateTo } from './server.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuth();
    const store = useStore();
    const drawer = ref(false);
    const handleTheme = () => {
      store.commit("handleTheme");
    };
    const carts = computed(() => {
      return store.state.carts;
    });
    const handleRemoveCart = (product) => {
      store.commit("handleRemoveCart", product);
    };
    const handleProfile = () => {
      navigateTo("/profile");
    };
    const handleLogin = () => {
      navigateTo("/login");
    };
    const handleCheckout = () => {
      navigateTo("/checkout");
    };
    const formatNumber = (number) => {
      return Number(number).toFixed(2);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_badge = resolveComponent("v-badge");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_toolbar_items = resolveComponent("v-toolbar-items");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_navigation_drawer, {
        app: "",
        temporary: "",
        location: "right",
        modelValue: unref(drawer),
        "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
        width: "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pa-3"${_scopeId}><h2${_scopeId}>Order Menu</h2><p class="mt-4"${_scopeId}>Address Delivery</p><p class="font-weight-bold" style="${ssrRenderStyle({ "font-size": "18px" })}"${_scopeId}> 221 B Baker Street, London </p><div class="d-flex align-content-center"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_icon, {
              icon: "mdi-clock-time-four",
              color: "grey-darken-1",
              size: "small"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ma-2"${_scopeId}>30min</span>`);
            _push2(ssrRenderComponent(_component_v_icon, {
              icon: "mdi-map-marker",
              size: "small",
              color: "grey-darken-1"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>2km</span></div></div><div class="scrollable mt-5" style="${ssrRenderStyle({ "max-height": "450px", "overflow-y": "auto" })}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(carts), (cart) => {
              _push2(ssrRenderComponent(_component_v_card, {
                class: "mt-5",
                flat: "",
                key: cart
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex justify-space-around"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_icon, {
                      icon: "mdi-delete",
                      color: "red",
                      style: { "cursor": "pointer" },
                      onClick: ($event) => handleRemoveCart(cart.product)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_img, {
                      src: cart.product.image[0],
                      height: "100px",
                      width: 100,
                      "aspect-ratio": "16/9",
                      style: { "border-radius": "10px 10px 10px 10px" }
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="ms-3"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(cart.product.name)}</p><div${_scopeId2}> x `);
                    _push3(ssrRenderComponent(_component_v_badge, {
                      content: cart.quantity,
                      inline: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><p class="font-weight-bold"${_scopeId2}>$${ssrInterpolate(cart.product.price)}.00</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex justify-space-around" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-delete",
                          color: "red",
                          style: { "cursor": "pointer" },
                          onClick: ($event) => handleRemoveCart(cart.product)
                        }, null, 8, ["onClick"]),
                        createVNode(_component_v_img, {
                          src: cart.product.image[0],
                          height: "100px",
                          width: 100,
                          "aspect-ratio": "16/9",
                          style: { "border-radius": "10px 10px 10px 10px" }
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("p", null, toDisplayString(cart.product.name), 1),
                          createVNode("div", null, [
                            createTextVNode(" x "),
                            createVNode(_component_v_badge, {
                              content: cart.quantity,
                              inline: ""
                            }, null, 8, ["content"])
                          ])
                        ]),
                        createVNode("p", { class: "font-weight-bold" }, "$" + toDisplayString(cart.product.price) + ".00", 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_v_divider, { class: "mt-5" }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-space-between mt-5"${_scopeId}><p${_scopeId}>Subtotal</p><p class="font-weight-bold"${_scopeId}> $${ssrInterpolate(_ctx.$store.getters["subTotalPrice"])}.00 </p></div><div class="d-flex justify-space-between mt-5"${_scopeId}><p${_scopeId}>Tax(10%)</p><p class="font-weight-bold"${_scopeId}> $${ssrInterpolate(formatNumber(_ctx.$store.getters["taxPrice"]))}</p></div><div class="d-flex justify-space-between mt-5"${_scopeId}><p${_scopeId}>Delivery Fee</p><p class="font-weight-bold"${_scopeId}>$3.00</p></div><div class="d-flex justify-space-between mt-5"${_scopeId}><p${_scopeId}>Discount</p><p class="font-weight-bold"${_scopeId}>-$20.00</p></div>`);
            _push2(ssrRenderComponent(_component_v_divider, { class: "mt-5" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "mt-5 text-white",
              color: "#e5345b",
              block: "",
              onClick: handleCheckout
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Checkout`);
                } else {
                  return [
                    createTextVNode("Checkout")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pa-3" }, [
                createVNode("h2", null, "Order Menu"),
                createVNode("p", { class: "mt-4" }, "Address Delivery"),
                createVNode("p", {
                  class: "font-weight-bold",
                  style: { "font-size": "18px" }
                }, " 221 B Baker Street, London "),
                createVNode("div", { class: "d-flex align-content-center" }, [
                  createVNode("div", null, [
                    createVNode(_component_v_icon, {
                      icon: "mdi-clock-time-four",
                      color: "grey-darken-1",
                      size: "small"
                    }),
                    createVNode("span", { class: "ma-2" }, "30min"),
                    createVNode(_component_v_icon, {
                      icon: "mdi-map-marker",
                      size: "small",
                      color: "grey-darken-1"
                    }),
                    createVNode("span", null, "2km")
                  ])
                ]),
                createVNode("div", {
                  class: "scrollable mt-5",
                  style: { "max-height": "450px", "overflow-y": "auto" }
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(carts), (cart) => {
                    return openBlock(), createBlock(_component_v_card, {
                      class: "mt-5",
                      flat: "",
                      key: cart
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-space-around" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-delete",
                            color: "red",
                            style: { "cursor": "pointer" },
                            onClick: ($event) => handleRemoveCart(cart.product)
                          }, null, 8, ["onClick"]),
                          createVNode(_component_v_img, {
                            src: cart.product.image[0],
                            height: "100px",
                            width: 100,
                            "aspect-ratio": "16/9",
                            style: { "border-radius": "10px 10px 10px 10px" }
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "ms-3" }, [
                            createVNode("p", null, toDisplayString(cart.product.name), 1),
                            createVNode("div", null, [
                              createTextVNode(" x "),
                              createVNode(_component_v_badge, {
                                content: cart.quantity,
                                inline: ""
                              }, null, 8, ["content"])
                            ])
                          ]),
                          createVNode("p", { class: "font-weight-bold" }, "$" + toDisplayString(cart.product.price) + ".00", 1)
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                createVNode(_component_v_divider, { class: "mt-5" }),
                createVNode("div", { class: "d-flex justify-space-between mt-5" }, [
                  createVNode("p", null, "Subtotal"),
                  createVNode("p", { class: "font-weight-bold" }, " $" + toDisplayString(_ctx.$store.getters["subTotalPrice"]) + ".00 ", 1)
                ]),
                createVNode("div", { class: "d-flex justify-space-between mt-5" }, [
                  createVNode("p", null, "Tax(10%)"),
                  createVNode("p", { class: "font-weight-bold" }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["taxPrice"])), 1)
                ]),
                createVNode("div", { class: "d-flex justify-space-between mt-5" }, [
                  createVNode("p", null, "Delivery Fee"),
                  createVNode("p", { class: "font-weight-bold" }, "$3.00")
                ]),
                createVNode("div", { class: "d-flex justify-space-between mt-5" }, [
                  createVNode("p", null, "Discount"),
                  createVNode("p", { class: "font-weight-bold" }, "-$20.00")
                ]),
                createVNode(_component_v_divider, { class: "mt-5" }),
                createVNode(_component_v_btn, {
                  class: "mt-5 text-white",
                  color: "#e5345b",
                  block: "",
                  onClick: handleCheckout
                }, {
                  default: withCtx(() => [
                    createTextVNode("Checkout")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_app_bar, { color: "grey-darken-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_toolbar_title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-weight-light"${_scopeId2}>CamboShoe </span><span class="font-weight-bold"${_scopeId2}>Services</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-light" }, "CamboShoe "),
                    createVNode("span", { class: "font-weight-bold" }, "Services")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="hidden-sm-and-down"${_scopeId}><ul${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/",
              class: "font-weight-bold",
              style: { "color": "white", "text-decoration": "none", "font-size": "16px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`HOME`);
                } else {
                  return [
                    createTextVNode("HOME")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/shop",
              class: "font-weight-bold ms-10",
              style: { "color": "white", "text-decoration": "none", "font-size": "16px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`SHOP`);
                } else {
                  return [
                    createTextVNode("SHOP")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/blog",
              class: "font-weight-bold ms-10",
              style: { "color": "white", "text-decoration": "none", "font-size": "16px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`BLOG`);
                } else {
                  return [
                    createTextVNode("BLOG")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/about",
              class: "font-weight-bold ms-10",
              style: { "color": "white", "text-decoration": "none", "font-size": "16px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`ABOUT`);
                } else {
                  return [
                    createTextVNode("ABOUT")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/contact",
              class: "font-weight-bold ms-10",
              style: { "color": "white", "text-decoration": "none", "font-size": "16px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`CONTACT`);
                } else {
                  return [
                    createTextVNode("CONTACT")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</ul></div>`);
            _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_toolbar_items, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    variant: "text",
                    icon: _ctx.$store.state.theme === "light" ? "mdi-weather-sunny" : "mdi-weather-night",
                    onClick: handleTheme
                  }, null, _parent3, _scopeId2));
                  if (unref(auth).isAuthenticated) {
                    _push3(ssrRenderComponent(_component_v_btn, {
                      class: "hidden-sm-and-down",
                      icon: "mdi-account",
                      onClick: handleProfile
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_v_btn, {
                      class: "hidden-sm-and-down",
                      icon: "mdi-account-alert",
                      onClick: handleLogin
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(ssrRenderComponent(_component_v_btn, {
                    class: "text-none hidden-sm-and-down",
                    stacked: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_badge, {
                          content: _ctx.$store.getters["favoriteCount"],
                          color: "error"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-heart" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, { icon: "mdi-heart" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_badge, {
                            content: _ctx.$store.getters["favoriteCount"],
                            color: "error"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-heart" })
                            ]),
                            _: 1
                          }, 8, ["content"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    class: "text-none hidden-sm-and-down",
                    stacked: "",
                    onClick: ($event) => drawer.value = !unref(drawer)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_badge, {
                          content: _ctx.$store.getters["cartCount"],
                          color: "error"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-cart" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, { icon: "mdi-cart" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_badge, {
                            content: _ctx.$store.getters["cartCount"],
                            color: "error"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-cart" })
                            ]),
                            _: 1
                          }, 8, ["content"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      variant: "text",
                      icon: _ctx.$store.state.theme === "light" ? "mdi-weather-sunny" : "mdi-weather-night",
                      onClick: handleTheme
                    }, null, 8, ["icon"]),
                    unref(auth).isAuthenticated ? (openBlock(), createBlock(_component_v_btn, {
                      key: 0,
                      class: "hidden-sm-and-down",
                      icon: "mdi-account",
                      onClick: handleProfile
                    })) : (openBlock(), createBlock(_component_v_btn, {
                      key: 1,
                      class: "hidden-sm-and-down",
                      icon: "mdi-account-alert",
                      onClick: handleLogin
                    })),
                    createVNode(_component_v_btn, {
                      class: "text-none hidden-sm-and-down",
                      stacked: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_badge, {
                          content: _ctx.$store.getters["favoriteCount"],
                          color: "error"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-heart" })
                          ]),
                          _: 1
                        }, 8, ["content"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      class: "text-none hidden-sm-and-down",
                      stacked: "",
                      onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_badge, {
                          content: _ctx.$store.getters["cartCount"],
                          color: "error"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-cart" })
                          ]),
                          _: 1
                        }, 8, ["content"])
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="hidden-md-and-up"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_menu, null, {
              activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, mergeProps({ color: "white" }, props, {
                    variant: "text",
                    icon: "mdi-menu"
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, mergeProps({ color: "white" }, props, {
                      variant: "text",
                      icon: "mdi-menu"
                    }), null, 16)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list, { width: "300px" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_nuxt_link, {
                                      to: "/",
                                      style: { "text-decoration": "none" },
                                      class: "text-black"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`HOME`);
                                        } else {
                                          return [
                                            createTextVNode("HOME")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_nuxt_link, {
                                        to: "/",
                                        style: { "text-decoration": "none" },
                                        class: "text-black"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("HOME")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_divider, {
                                style: { "border": "none", "border-top": "3px solid black" },
                                class: "my-2"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_nuxt_link, {
                                      to: "/shop",
                                      style: { "text-decoration": "none" },
                                      class: "text-black"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`SHOP`);
                                        } else {
                                          return [
                                            createTextVNode("SHOP")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_nuxt_link, {
                                        to: "/shop",
                                        style: { "text-decoration": "none" },
                                        class: "text-black"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("SHOP")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_divider, {
                                style: { "border": "none", "border-top": "3px solid black" },
                                class: "my-2"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_nuxt_link, {
                                      to: "/blog",
                                      style: { "text-decoration": "none" },
                                      class: "text-black"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`BLOG`);
                                        } else {
                                          return [
                                            createTextVNode("BLOG")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_nuxt_link, {
                                        to: "/blog",
                                        style: { "text-decoration": "none" },
                                        class: "text-black"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("BLOG")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_divider, {
                                style: { "border": "none", "border-top": "3px solid black" },
                                class: "my-2"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_nuxt_link, {
                                      to: "/about",
                                      style: { "text-decoration": "none" },
                                      class: "text-black"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`ABOUT`);
                                        } else {
                                          return [
                                            createTextVNode("ABOUT")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_nuxt_link, {
                                        to: "/about",
                                        style: { "text-decoration": "none" },
                                        class: "text-black"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("ABOUT")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_divider, {
                                style: { "border": "none", "border-top": "3px solid black" },
                                class: "my-2"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_nuxt_link, {
                                      to: "/contact",
                                      style: { "text-decoration": "none" },
                                      class: "text-black"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`CONTACT`);
                                        } else {
                                          return [
                                            createTextVNode("CONTACT")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_nuxt_link, {
                                        to: "/contact",
                                        style: { "text-decoration": "none" },
                                        class: "text-black"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("CONTACT")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_divider, {
                                style: { "border": "none", "border-top": "3px solid black" },
                                class: "my-2"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex align-center justify-space-between"${_scopeId4}>`);
                              if (unref(auth).isAuthenticated) {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  icon: "mdi-account",
                                  onClick: handleProfile,
                                  flat: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  icon: "mdi-account-alert",
                                  onClick: handleLogin,
                                  flat: ""
                                }, null, _parent5, _scopeId4));
                              }
                              _push5(ssrRenderComponent(_component_v_btn, {
                                stacked: "",
                                flat: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_badge, {
                                      content: _ctx.$store.getters["favoriteCount"],
                                      color: "error"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_icon, { icon: "mdi-heart" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_icon, { icon: "mdi-heart" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_badge, {
                                        content: _ctx.$store.getters["favoriteCount"],
                                        color: "error"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { icon: "mdi-heart" })
                                        ]),
                                        _: 1
                                      }, 8, ["content"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                flat: "",
                                stacked: "",
                                onClick: ($event) => drawer.value = !unref(drawer)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_badge, {
                                      content: _ctx.$store.getters["cartCount"],
                                      color: "error"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_icon, { icon: "mdi-cart" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_icon, { icon: "mdi-cart" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_badge, {
                                        content: _ctx.$store.getters["cartCount"],
                                        color: "error"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { icon: "mdi-cart" })
                                        ]),
                                        _: 1
                                      }, 8, ["content"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_nuxt_link, {
                                      to: "/",
                                      style: { "text-decoration": "none" },
                                      class: "text-black"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("HOME")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider, {
                                  style: { "border": "none", "border-top": "3px solid black" },
                                  class: "my-2"
                                }),
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_nuxt_link, {
                                      to: "/shop",
                                      style: { "text-decoration": "none" },
                                      class: "text-black"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("SHOP")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider, {
                                  style: { "border": "none", "border-top": "3px solid black" },
                                  class: "my-2"
                                }),
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_nuxt_link, {
                                      to: "/blog",
                                      style: { "text-decoration": "none" },
                                      class: "text-black"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("BLOG")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider, {
                                  style: { "border": "none", "border-top": "3px solid black" },
                                  class: "my-2"
                                }),
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_nuxt_link, {
                                      to: "/about",
                                      style: { "text-decoration": "none" },
                                      class: "text-black"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("ABOUT")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider, {
                                  style: { "border": "none", "border-top": "3px solid black" },
                                  class: "my-2"
                                }),
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_nuxt_link, {
                                      to: "/contact",
                                      style: { "text-decoration": "none" },
                                      class: "text-black"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("CONTACT")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider, {
                                  style: { "border": "none", "border-top": "3px solid black" },
                                  class: "my-2"
                                }),
                                createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                  unref(auth).isAuthenticated ? (openBlock(), createBlock(_component_v_btn, {
                                    key: 0,
                                    icon: "mdi-account",
                                    onClick: handleProfile,
                                    flat: ""
                                  })) : (openBlock(), createBlock(_component_v_btn, {
                                    key: 1,
                                    icon: "mdi-account-alert",
                                    onClick: handleLogin,
                                    flat: ""
                                  })),
                                  createVNode(_component_v_btn, {
                                    stacked: "",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_badge, {
                                        content: _ctx.$store.getters["favoriteCount"],
                                        color: "error"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { icon: "mdi-heart" })
                                        ]),
                                        _: 1
                                      }, 8, ["content"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    flat: "",
                                    stacked: "",
                                    onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_badge, {
                                        content: _ctx.$store.getters["cartCount"],
                                        color: "error"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { icon: "mdi-cart" })
                                        ]),
                                        _: 1
                                      }, 8, ["content"])
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createVNode(_component_nuxt_link, {
                                    to: "/",
                                    style: { "text-decoration": "none" },
                                    class: "text-black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("HOME")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_divider, {
                                style: { "border": "none", "border-top": "3px solid black" },
                                class: "my-2"
                              }),
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createVNode(_component_nuxt_link, {
                                    to: "/shop",
                                    style: { "text-decoration": "none" },
                                    class: "text-black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("SHOP")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_divider, {
                                style: { "border": "none", "border-top": "3px solid black" },
                                class: "my-2"
                              }),
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createVNode(_component_nuxt_link, {
                                    to: "/blog",
                                    style: { "text-decoration": "none" },
                                    class: "text-black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("BLOG")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_divider, {
                                style: { "border": "none", "border-top": "3px solid black" },
                                class: "my-2"
                              }),
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createVNode(_component_nuxt_link, {
                                    to: "/about",
                                    style: { "text-decoration": "none" },
                                    class: "text-black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("ABOUT")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_divider, {
                                style: { "border": "none", "border-top": "3px solid black" },
                                class: "my-2"
                              }),
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createVNode(_component_nuxt_link, {
                                    to: "/contact",
                                    style: { "text-decoration": "none" },
                                    class: "text-black"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("CONTACT")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_divider, {
                                style: { "border": "none", "border-top": "3px solid black" },
                                class: "my-2"
                              }),
                              createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                unref(auth).isAuthenticated ? (openBlock(), createBlock(_component_v_btn, {
                                  key: 0,
                                  icon: "mdi-account",
                                  onClick: handleProfile,
                                  flat: ""
                                })) : (openBlock(), createBlock(_component_v_btn, {
                                  key: 1,
                                  icon: "mdi-account-alert",
                                  onClick: handleLogin,
                                  flat: ""
                                })),
                                createVNode(_component_v_btn, {
                                  stacked: "",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_badge, {
                                      content: _ctx.$store.getters["favoriteCount"],
                                      color: "error"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { icon: "mdi-heart" })
                                      ]),
                                      _: 1
                                    }, 8, ["content"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  flat: "",
                                  stacked: "",
                                  onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_badge, {
                                      content: _ctx.$store.getters["cartCount"],
                                      color: "error"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { icon: "mdi-cart" })
                                      ]),
                                      _: 1
                                    }, 8, ["content"])
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
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
                    createVNode(_component_v_list, { width: "300px" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: "/",
                                  style: { "text-decoration": "none" },
                                  class: "text-black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("HOME")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, {
                              style: { "border": "none", "border-top": "3px solid black" },
                              class: "my-2"
                            }),
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: "/shop",
                                  style: { "text-decoration": "none" },
                                  class: "text-black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("SHOP")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, {
                              style: { "border": "none", "border-top": "3px solid black" },
                              class: "my-2"
                            }),
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: "/blog",
                                  style: { "text-decoration": "none" },
                                  class: "text-black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("BLOG")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, {
                              style: { "border": "none", "border-top": "3px solid black" },
                              class: "my-2"
                            }),
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: "/about",
                                  style: { "text-decoration": "none" },
                                  class: "text-black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("ABOUT")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, {
                              style: { "border": "none", "border-top": "3px solid black" },
                              class: "my-2"
                            }),
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: "/contact",
                                  style: { "text-decoration": "none" },
                                  class: "text-black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("CONTACT")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, {
                              style: { "border": "none", "border-top": "3px solid black" },
                              class: "my-2"
                            }),
                            createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                              unref(auth).isAuthenticated ? (openBlock(), createBlock(_component_v_btn, {
                                key: 0,
                                icon: "mdi-account",
                                onClick: handleProfile,
                                flat: ""
                              })) : (openBlock(), createBlock(_component_v_btn, {
                                key: 1,
                                icon: "mdi-account-alert",
                                onClick: handleLogin,
                                flat: ""
                              })),
                              createVNode(_component_v_btn, {
                                stacked: "",
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_badge, {
                                    content: _ctx.$store.getters["favoriteCount"],
                                    color: "error"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-heart" })
                                    ]),
                                    _: 1
                                  }, 8, ["content"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                flat: "",
                                stacked: "",
                                onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_badge, {
                                    content: _ctx.$store.getters["cartCount"],
                                    color: "error"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-cart" })
                                    ]),
                                    _: 1
                                  }, 8, ["content"])
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_v_toolbar_title, null, {
                default: withCtx(() => [
                  createVNode("span", { class: "font-weight-light" }, "CamboShoe "),
                  createVNode("span", { class: "font-weight-bold" }, "Services")
                ]),
                _: 1
              }),
              createVNode("div", { class: "hidden-sm-and-down" }, [
                createVNode("ul", null, [
                  createVNode(_component_nuxt_link, {
                    to: "/",
                    class: "font-weight-bold",
                    style: { "color": "white", "text-decoration": "none", "font-size": "16px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("HOME")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_nuxt_link, {
                    to: "/shop",
                    class: "font-weight-bold ms-10",
                    style: { "color": "white", "text-decoration": "none", "font-size": "16px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("SHOP")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_nuxt_link, {
                    to: "/blog",
                    class: "font-weight-bold ms-10",
                    style: { "color": "white", "text-decoration": "none", "font-size": "16px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("BLOG")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_nuxt_link, {
                    to: "/about",
                    class: "font-weight-bold ms-10",
                    style: { "color": "white", "text-decoration": "none", "font-size": "16px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("ABOUT")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_nuxt_link, {
                    to: "/contact",
                    class: "font-weight-bold ms-10",
                    style: { "color": "white", "text-decoration": "none", "font-size": "16px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("CONTACT")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(_component_v_spacer),
              createVNode(_component_v_toolbar_items, null, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    variant: "text",
                    icon: _ctx.$store.state.theme === "light" ? "mdi-weather-sunny" : "mdi-weather-night",
                    onClick: handleTheme
                  }, null, 8, ["icon"]),
                  unref(auth).isAuthenticated ? (openBlock(), createBlock(_component_v_btn, {
                    key: 0,
                    class: "hidden-sm-and-down",
                    icon: "mdi-account",
                    onClick: handleProfile
                  })) : (openBlock(), createBlock(_component_v_btn, {
                    key: 1,
                    class: "hidden-sm-and-down",
                    icon: "mdi-account-alert",
                    onClick: handleLogin
                  })),
                  createVNode(_component_v_btn, {
                    class: "text-none hidden-sm-and-down",
                    stacked: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_badge, {
                        content: _ctx.$store.getters["favoriteCount"],
                        color: "error"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { icon: "mdi-heart" })
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    class: "text-none hidden-sm-and-down",
                    stacked: "",
                    onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_badge, {
                        content: _ctx.$store.getters["cartCount"],
                        color: "error"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { icon: "mdi-cart" })
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "hidden-md-and-up" }, [
                createVNode(_component_v_menu, null, {
                  activator: withCtx(({ props }) => [
                    createVNode(_component_v_btn, mergeProps({ color: "white" }, props, {
                      variant: "text",
                      icon: "mdi-menu"
                    }), null, 16)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_list, { width: "300px" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: "/",
                                  style: { "text-decoration": "none" },
                                  class: "text-black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("HOME")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, {
                              style: { "border": "none", "border-top": "3px solid black" },
                              class: "my-2"
                            }),
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: "/shop",
                                  style: { "text-decoration": "none" },
                                  class: "text-black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("SHOP")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, {
                              style: { "border": "none", "border-top": "3px solid black" },
                              class: "my-2"
                            }),
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: "/blog",
                                  style: { "text-decoration": "none" },
                                  class: "text-black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("BLOG")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, {
                              style: { "border": "none", "border-top": "3px solid black" },
                              class: "my-2"
                            }),
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: "/about",
                                  style: { "text-decoration": "none" },
                                  class: "text-black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("ABOUT")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, {
                              style: { "border": "none", "border-top": "3px solid black" },
                              class: "my-2"
                            }),
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: "/contact",
                                  style: { "text-decoration": "none" },
                                  class: "text-black"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("CONTACT")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, {
                              style: { "border": "none", "border-top": "3px solid black" },
                              class: "my-2"
                            }),
                            createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                              unref(auth).isAuthenticated ? (openBlock(), createBlock(_component_v_btn, {
                                key: 0,
                                icon: "mdi-account",
                                onClick: handleProfile,
                                flat: ""
                              })) : (openBlock(), createBlock(_component_v_btn, {
                                key: 1,
                                icon: "mdi-account-alert",
                                onClick: handleLogin,
                                flat: ""
                              })),
                              createVNode(_component_v_btn, {
                                stacked: "",
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_badge, {
                                    content: _ctx.$store.getters["favoriteCount"],
                                    color: "error"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-heart" })
                                    ]),
                                    _: 1
                                  }, 8, ["content"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                flat: "",
                                stacked: "",
                                onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_badge, {
                                    content: _ctx.$store.getters["cartCount"],
                                    color: "error"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { icon: "mdi-cart" })
                                    ]),
                                    _: 1
                                  }, 8, ["content"])
                                ]),
                                _: 1
                              }, 8, ["onClick"])
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
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_footer = resolveComponent("v-footer");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_v_divider = resolveComponent("v-divider");
  _push(ssrRenderComponent(_component_v_footer, mergeProps({ color: "black  pt-10" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_container, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-uppercase" style="${ssrRenderStyle({ "font-size": "20px" })}"${_scopeId4}>Our Store</p><p class="mt-5" style="${ssrRenderStyle({ "color": "grey" })}"${_scopeId4}> Cambodian-based sneaker store aimed to bringing about the culture surrounding footwear. </p>`);
                        } else {
                          return [
                            createVNode("p", {
                              class: "text-uppercase",
                              style: { "font-size": "20px" }
                            }, "Our Store"),
                            createVNode("p", {
                              class: "mt-5",
                              style: { "color": "grey" }
                            }, " Cambodian-based sneaker store aimed to bringing about the culture surrounding footwear. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-uppercase" style="${ssrRenderStyle({ "font-size": "20px" })}"${_scopeId4}>Link</p><div class="mt-5"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-greater-than",
                            color: "grey"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_nuxt_link, {
                            to: "/",
                            class: "ms-3",
                            style: { "text-decoration": "none", "color": "grey" }
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Home`);
                              } else {
                                return [
                                  createTextVNode("Home")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div><div class="my-3"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-greater-than",
                            color: "grey"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_nuxt_link, {
                            to: "/shop",
                            class: "ms-3",
                            style: { "text-decoration": "none", "color": "grey" }
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Shop`);
                              } else {
                                return [
                                  createTextVNode("Shop")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div><div class="my-3"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-greater-than",
                            color: "grey"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_nuxt_link, {
                            to: "/blog",
                            class: "ms-3",
                            style: { "text-decoration": "none", "color": "grey" }
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Blog`);
                              } else {
                                return [
                                  createTextVNode("Blog")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div><div class="my-3"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-greater-than",
                            color: "grey"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_nuxt_link, {
                            to: "/about",
                            class: "ms-3",
                            style: { "text-decoration": "none", "color": "grey" }
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`About`);
                              } else {
                                return [
                                  createTextVNode("About")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div><div class="my-3"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-greater-than",
                            color: "grey"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_nuxt_link, {
                            to: "/contact",
                            class: "ms-3",
                            style: { "text-decoration": "none", "color": "grey" }
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Contact`);
                              } else {
                                return [
                                  createTextVNode("Contact")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("p", {
                              class: "text-uppercase",
                              style: { "font-size": "20px" }
                            }, "Link"),
                            createVNode("div", { class: "mt-5" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-greater-than",
                                color: "grey"
                              }),
                              createVNode(_component_nuxt_link, {
                                to: "/",
                                class: "ms-3",
                                style: { "text-decoration": "none", "color": "grey" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Home")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "my-3" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-greater-than",
                                color: "grey"
                              }),
                              createVNode(_component_nuxt_link, {
                                to: "/shop",
                                class: "ms-3",
                                style: { "text-decoration": "none", "color": "grey" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Shop")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "my-3" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-greater-than",
                                color: "grey"
                              }),
                              createVNode(_component_nuxt_link, {
                                to: "/blog",
                                class: "ms-3",
                                style: { "text-decoration": "none", "color": "grey" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Blog")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "my-3" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-greater-than",
                                color: "grey"
                              }),
                              createVNode(_component_nuxt_link, {
                                to: "/about",
                                class: "ms-3",
                                style: { "text-decoration": "none", "color": "grey" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("About")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "my-3" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-greater-than",
                                color: "grey"
                              }),
                              createVNode(_component_nuxt_link, {
                                to: "/contact",
                                class: "ms-3",
                                style: { "text-decoration": "none", "color": "grey" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Contact")
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-uppercase" style="${ssrRenderStyle({ "font-size": "20px" })}"${_scopeId4}>Contact Us</p><div class="mt-5"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-map-marker",
                            color: "grey"
                          }, null, _parent5, _scopeId4));
                          _push5(`<span class="ms-3" style="${ssrRenderStyle({ "color": "grey" })}"${_scopeId4}>56 Glassford Street 234 Toulkok PhnomPenh Cambodia</span></div><div class="mt-8"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-email",
                            color: "grey"
                          }, null, _parent5, _scopeId4));
                          _push5(`<span class="ms-3" style="${ssrRenderStyle({ "color": "grey" })}"${_scopeId4}>amcheachamroeun20@kit.edu.kh</span></div><div class="mt-8"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-phone",
                            color: "grey"
                          }, null, _parent5, _scopeId4));
                          _push5(`<span class="ms-3" style="${ssrRenderStyle({ "color": "grey" })}"${_scopeId4}>+9786 6776 236</span></div>`);
                        } else {
                          return [
                            createVNode("p", {
                              class: "text-uppercase",
                              style: { "font-size": "20px" }
                            }, "Contact Us"),
                            createVNode("div", { class: "mt-5" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-map-marker",
                                color: "grey"
                              }),
                              createVNode("span", {
                                class: "ms-3",
                                style: { "color": "grey" }
                              }, "56 Glassford Street 234 Toulkok PhnomPenh Cambodia")
                            ]),
                            createVNode("div", { class: "mt-8" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-email",
                                color: "grey"
                              }),
                              createVNode("span", {
                                class: "ms-3",
                                style: { "color": "grey" }
                              }, "amcheachamroeun20@kit.edu.kh")
                            ]),
                            createVNode("div", { class: "mt-8" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-phone",
                                color: "grey"
                              }),
                              createVNode("span", {
                                class: "ms-3",
                                style: { "color": "grey" }
                              }, "+9786 6776 236")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-uppercase" style="${ssrRenderStyle({ "font-size": "20px" })}"${_scopeId4}>Follow Us</p><div class="d-flex mt-5"${_scopeId4}><a href="https://www.instagram.com/" target="_blank" class="text-white" style="${ssrRenderStyle({ "cursor": "pointer", "text-decoration": "none" })}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-instagram",
                            color: "grey"
                          }, null, _parent5, _scopeId4));
                          _push5(`</a><a href="https://www.facebook.com/" target="_blank" class="text-white" style="${ssrRenderStyle({ "cursor": "pointer", "text-decoration": "none" })}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-facebook",
                            color: "grey",
                            class: "ms-5"
                          }, null, _parent5, _scopeId4));
                          _push5(`</a><a href="https://twitter.com/" target="_blank" class="text-white" style="${ssrRenderStyle({ "cursor": "pointer", "text-decoration": "none" })}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-twitter",
                            color: "grey",
                            class: "ms-5"
                          }, null, _parent5, _scopeId4));
                          _push5(`</a><a href="https://www.pinterest.com/" target="_blank" class="text-white" style="${ssrRenderStyle({ "cursor": "pointer", "text-decoration": "none" })}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-pinterest",
                            color: "grey",
                            class: "ms-5"
                          }, null, _parent5, _scopeId4));
                          _push5(`</a></div>`);
                        } else {
                          return [
                            createVNode("p", {
                              class: "text-uppercase",
                              style: { "font-size": "20px" }
                            }, "Follow Us"),
                            createVNode("div", { class: "d-flex mt-5" }, [
                              createVNode("a", {
                                href: "https://www.instagram.com/",
                                target: "_blank",
                                class: "text-white",
                                style: { "cursor": "pointer", "text-decoration": "none" }
                              }, [
                                createVNode(_component_v_icon, {
                                  icon: "mdi-instagram",
                                  color: "grey"
                                })
                              ]),
                              createVNode("a", {
                                href: "https://www.facebook.com/",
                                target: "_blank",
                                class: "text-white",
                                style: { "cursor": "pointer", "text-decoration": "none" }
                              }, [
                                createVNode(_component_v_icon, {
                                  icon: "mdi-facebook",
                                  color: "grey",
                                  class: "ms-5"
                                })
                              ]),
                              createVNode("a", {
                                href: "https://twitter.com/",
                                target: "_blank",
                                class: "text-white",
                                style: { "cursor": "pointer", "text-decoration": "none" }
                              }, [
                                createVNode(_component_v_icon, {
                                  icon: "mdi-twitter",
                                  color: "grey",
                                  class: "ms-5"
                                })
                              ]),
                              createVNode("a", {
                                href: "https://www.pinterest.com/",
                                target: "_blank",
                                class: "text-white",
                                style: { "cursor": "pointer", "text-decoration": "none" }
                              }, [
                                createVNode(_component_v_icon, {
                                  icon: "mdi-pinterest",
                                  color: "grey",
                                  class: "ms-5"
                                })
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
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", {
                            class: "text-uppercase",
                            style: { "font-size": "20px" }
                          }, "Our Store"),
                          createVNode("p", {
                            class: "mt-5",
                            style: { "color": "grey" }
                          }, " Cambodian-based sneaker store aimed to bringing about the culture surrounding footwear. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", {
                            class: "text-uppercase",
                            style: { "font-size": "20px" }
                          }, "Link"),
                          createVNode("div", { class: "mt-5" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-greater-than",
                              color: "grey"
                            }),
                            createVNode(_component_nuxt_link, {
                              to: "/",
                              class: "ms-3",
                              style: { "text-decoration": "none", "color": "grey" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "my-3" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-greater-than",
                              color: "grey"
                            }),
                            createVNode(_component_nuxt_link, {
                              to: "/shop",
                              class: "ms-3",
                              style: { "text-decoration": "none", "color": "grey" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Shop")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "my-3" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-greater-than",
                              color: "grey"
                            }),
                            createVNode(_component_nuxt_link, {
                              to: "/blog",
                              class: "ms-3",
                              style: { "text-decoration": "none", "color": "grey" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Blog")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "my-3" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-greater-than",
                              color: "grey"
                            }),
                            createVNode(_component_nuxt_link, {
                              to: "/about",
                              class: "ms-3",
                              style: { "text-decoration": "none", "color": "grey" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("About")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "my-3" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-greater-than",
                              color: "grey"
                            }),
                            createVNode(_component_nuxt_link, {
                              to: "/contact",
                              class: "ms-3",
                              style: { "text-decoration": "none", "color": "grey" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Contact")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", {
                            class: "text-uppercase",
                            style: { "font-size": "20px" }
                          }, "Contact Us"),
                          createVNode("div", { class: "mt-5" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-map-marker",
                              color: "grey"
                            }),
                            createVNode("span", {
                              class: "ms-3",
                              style: { "color": "grey" }
                            }, "56 Glassford Street 234 Toulkok PhnomPenh Cambodia")
                          ]),
                          createVNode("div", { class: "mt-8" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-email",
                              color: "grey"
                            }),
                            createVNode("span", {
                              class: "ms-3",
                              style: { "color": "grey" }
                            }, "amcheachamroeun20@kit.edu.kh")
                          ]),
                          createVNode("div", { class: "mt-8" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-phone",
                              color: "grey"
                            }),
                            createVNode("span", {
                              class: "ms-3",
                              style: { "color": "grey" }
                            }, "+9786 6776 236")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", {
                            class: "text-uppercase",
                            style: { "font-size": "20px" }
                          }, "Follow Us"),
                          createVNode("div", { class: "d-flex mt-5" }, [
                            createVNode("a", {
                              href: "https://www.instagram.com/",
                              target: "_blank",
                              class: "text-white",
                              style: { "cursor": "pointer", "text-decoration": "none" }
                            }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-instagram",
                                color: "grey"
                              })
                            ]),
                            createVNode("a", {
                              href: "https://www.facebook.com/",
                              target: "_blank",
                              class: "text-white",
                              style: { "cursor": "pointer", "text-decoration": "none" }
                            }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-facebook",
                                color: "grey",
                                class: "ms-5"
                              })
                            ]),
                            createVNode("a", {
                              href: "https://twitter.com/",
                              target: "_blank",
                              class: "text-white",
                              style: { "cursor": "pointer", "text-decoration": "none" }
                            }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-twitter",
                                color: "grey",
                                class: "ms-5"
                              })
                            ]),
                            createVNode("a", {
                              href: "https://www.pinterest.com/",
                              target: "_blank",
                              class: "text-white",
                              style: { "cursor": "pointer", "text-decoration": "none" }
                            }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-pinterest",
                                color: "grey",
                                class: "ms-5"
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
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
              _push3(`<div class="px-4 mt-5 bg-black text-center w-100"${_scopeId2}>${ssrInterpolate(( new Date()).getFullYear())} \u2014 <strong${_scopeId2}>Am Cheachamroeun</strong></div>`);
            } else {
              return [
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", {
                          class: "text-uppercase",
                          style: { "font-size": "20px" }
                        }, "Our Store"),
                        createVNode("p", {
                          class: "mt-5",
                          style: { "color": "grey" }
                        }, " Cambodian-based sneaker store aimed to bringing about the culture surrounding footwear. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", {
                          class: "text-uppercase",
                          style: { "font-size": "20px" }
                        }, "Link"),
                        createVNode("div", { class: "mt-5" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-greater-than",
                            color: "grey"
                          }),
                          createVNode(_component_nuxt_link, {
                            to: "/",
                            class: "ms-3",
                            style: { "text-decoration": "none", "color": "grey" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Home")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "my-3" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-greater-than",
                            color: "grey"
                          }),
                          createVNode(_component_nuxt_link, {
                            to: "/shop",
                            class: "ms-3",
                            style: { "text-decoration": "none", "color": "grey" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Shop")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "my-3" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-greater-than",
                            color: "grey"
                          }),
                          createVNode(_component_nuxt_link, {
                            to: "/blog",
                            class: "ms-3",
                            style: { "text-decoration": "none", "color": "grey" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Blog")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "my-3" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-greater-than",
                            color: "grey"
                          }),
                          createVNode(_component_nuxt_link, {
                            to: "/about",
                            class: "ms-3",
                            style: { "text-decoration": "none", "color": "grey" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("About")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "my-3" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-greater-than",
                            color: "grey"
                          }),
                          createVNode(_component_nuxt_link, {
                            to: "/contact",
                            class: "ms-3",
                            style: { "text-decoration": "none", "color": "grey" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Contact")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", {
                          class: "text-uppercase",
                          style: { "font-size": "20px" }
                        }, "Contact Us"),
                        createVNode("div", { class: "mt-5" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-map-marker",
                            color: "grey"
                          }),
                          createVNode("span", {
                            class: "ms-3",
                            style: { "color": "grey" }
                          }, "56 Glassford Street 234 Toulkok PhnomPenh Cambodia")
                        ]),
                        createVNode("div", { class: "mt-8" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-email",
                            color: "grey"
                          }),
                          createVNode("span", {
                            class: "ms-3",
                            style: { "color": "grey" }
                          }, "amcheachamroeun20@kit.edu.kh")
                        ]),
                        createVNode("div", { class: "mt-8" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-phone",
                            color: "grey"
                          }),
                          createVNode("span", {
                            class: "ms-3",
                            style: { "color": "grey" }
                          }, "+9786 6776 236")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", {
                          class: "text-uppercase",
                          style: { "font-size": "20px" }
                        }, "Follow Us"),
                        createVNode("div", { class: "d-flex mt-5" }, [
                          createVNode("a", {
                            href: "https://www.instagram.com/",
                            target: "_blank",
                            class: "text-white",
                            style: { "cursor": "pointer", "text-decoration": "none" }
                          }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-instagram",
                              color: "grey"
                            })
                          ]),
                          createVNode("a", {
                            href: "https://www.facebook.com/",
                            target: "_blank",
                            class: "text-white",
                            style: { "cursor": "pointer", "text-decoration": "none" }
                          }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-facebook",
                              color: "grey",
                              class: "ms-5"
                            })
                          ]),
                          createVNode("a", {
                            href: "https://twitter.com/",
                            target: "_blank",
                            class: "text-white",
                            style: { "cursor": "pointer", "text-decoration": "none" }
                          }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-twitter",
                              color: "grey",
                              class: "ms-5"
                            })
                          ]),
                          createVNode("a", {
                            href: "https://www.pinterest.com/",
                            target: "_blank",
                            class: "text-white",
                            style: { "cursor": "pointer", "text-decoration": "none" }
                          }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-pinterest",
                              color: "grey",
                              class: "ms-5"
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider),
                createVNode("div", { class: "px-4 mt-5 bg-black text-center w-100" }, [
                  createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " \u2014 ", 1),
                  createVNode("strong", null, "Am Cheachamroeun")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_container, null, {
            default: withCtx(() => [
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", {
                        class: "text-uppercase",
                        style: { "font-size": "20px" }
                      }, "Our Store"),
                      createVNode("p", {
                        class: "mt-5",
                        style: { "color": "grey" }
                      }, " Cambodian-based sneaker store aimed to bringing about the culture surrounding footwear. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", {
                        class: "text-uppercase",
                        style: { "font-size": "20px" }
                      }, "Link"),
                      createVNode("div", { class: "mt-5" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-greater-than",
                          color: "grey"
                        }),
                        createVNode(_component_nuxt_link, {
                          to: "/",
                          class: "ms-3",
                          style: { "text-decoration": "none", "color": "grey" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Home")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "my-3" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-greater-than",
                          color: "grey"
                        }),
                        createVNode(_component_nuxt_link, {
                          to: "/shop",
                          class: "ms-3",
                          style: { "text-decoration": "none", "color": "grey" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Shop")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "my-3" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-greater-than",
                          color: "grey"
                        }),
                        createVNode(_component_nuxt_link, {
                          to: "/blog",
                          class: "ms-3",
                          style: { "text-decoration": "none", "color": "grey" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Blog")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "my-3" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-greater-than",
                          color: "grey"
                        }),
                        createVNode(_component_nuxt_link, {
                          to: "/about",
                          class: "ms-3",
                          style: { "text-decoration": "none", "color": "grey" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("About")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "my-3" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-greater-than",
                          color: "grey"
                        }),
                        createVNode(_component_nuxt_link, {
                          to: "/contact",
                          class: "ms-3",
                          style: { "text-decoration": "none", "color": "grey" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Contact")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", {
                        class: "text-uppercase",
                        style: { "font-size": "20px" }
                      }, "Contact Us"),
                      createVNode("div", { class: "mt-5" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-map-marker",
                          color: "grey"
                        }),
                        createVNode("span", {
                          class: "ms-3",
                          style: { "color": "grey" }
                        }, "56 Glassford Street 234 Toulkok PhnomPenh Cambodia")
                      ]),
                      createVNode("div", { class: "mt-8" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-email",
                          color: "grey"
                        }),
                        createVNode("span", {
                          class: "ms-3",
                          style: { "color": "grey" }
                        }, "amcheachamroeun20@kit.edu.kh")
                      ]),
                      createVNode("div", { class: "mt-8" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-phone",
                          color: "grey"
                        }),
                        createVNode("span", {
                          class: "ms-3",
                          style: { "color": "grey" }
                        }, "+9786 6776 236")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", {
                        class: "text-uppercase",
                        style: { "font-size": "20px" }
                      }, "Follow Us"),
                      createVNode("div", { class: "d-flex mt-5" }, [
                        createVNode("a", {
                          href: "https://www.instagram.com/",
                          target: "_blank",
                          class: "text-white",
                          style: { "cursor": "pointer", "text-decoration": "none" }
                        }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-instagram",
                            color: "grey"
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.facebook.com/",
                          target: "_blank",
                          class: "text-white",
                          style: { "cursor": "pointer", "text-decoration": "none" }
                        }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-facebook",
                            color: "grey",
                            class: "ms-5"
                          })
                        ]),
                        createVNode("a", {
                          href: "https://twitter.com/",
                          target: "_blank",
                          class: "text-white",
                          style: { "cursor": "pointer", "text-decoration": "none" }
                        }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-twitter",
                            color: "grey",
                            class: "ms-5"
                          })
                        ]),
                        createVNode("a", {
                          href: "https://www.pinterest.com/",
                          target: "_blank",
                          class: "text-white",
                          style: { "cursor": "pointer", "text-decoration": "none" }
                        }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi-pinterest",
                            color: "grey",
                            class: "ms-5"
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode("div", { class: "px-4 mt-5 bg-black text-center w-100" }, [
                createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " \u2014 ", 1),
                createVNode("strong", null, "Am Cheachamroeun")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "CamboShoe",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My Shoe Shop"
        }
      ],
      //icon for website
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(ssrRenderComponent(_component_v_app, mergeProps({
        id: "inspire",
        theme: _ctx.$store.state.theme
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Navbar, null, null, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Navbar),
              renderSlot(_ctx.$slots, "default"),
              createVNode(_component_Footer)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-7b3f922f.mjs.map
