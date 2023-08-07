import { u as useAuth } from './state-354a3b64.mjs';
import { b as useRouter$1, n as navigateTo } from './server.mjs';
import { withAsyncContext, ref, resolveComponent, withCtx, createVNode, unref, createTextVNode, withModifiers, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-cf13354b.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import Cookies from 'js-cookie';
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
  __name: "profile",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const auth = useAuth();
    useRouter$1();
    const handleFavorite = () => {
      navigateTo("/favorite");
    };
    const handleLogout = () => {
      auth.value.isAuthenticated = false;
      Cookies.remove("token");
      navigateTo("/");
    };
    const { data: purchase } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "http://18.208.219.245:3002/api/orders",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      },
      "$62j1b1lrVm"
    )), __temp = await __temp, __restore(), __temp);
    console.log(purchase);
    const drawer = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_main = resolveComponent("v-main");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_badge = resolveComponent("v-badge");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_table = resolveComponent("v-table");
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
                        _push4(`<div class="text-overlay"${_scopeId3}><p class="text" data-aos="fade-right" data-aos-delay="500"${_scopeId3}> #AboutYourSelf </p><p class="text-white text-center" data-aos="fade-up" data-aos-delay="500"${_scopeId3}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overlay" }, [
                            createVNode("p", {
                              class: "text",
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " #AboutYourSelf "),
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
                          }, " #AboutYourSelf "),
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
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, {
                                class: "pa-5",
                                color: "rgb(198, 196, 196)"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex justify-space-around align-center"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_avatar, {
                                      color: "surface-variant",
                                      size: "80",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<p data-aos="fade-up" data-aos-delay="500"${_scopeId5}>Lionel Messi</p></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex justify-space-around align-center" }, [
                                        createVNode(_component_v_avatar, {
                                          color: "surface-variant",
                                          size: "80",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("p", {
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, "Lionel Messi")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card, {
                                class: "mt-3",
                                flat: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, {
                                      border: "",
                                      class: "mx-auto"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            link: "",
                                            title: "My Cart",
                                            stacked: "",
                                            onClick: ($event) => drawer.value = !unref(drawer),
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, {
                                            append: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_badge, {
                                                  color: "#e5345b",
                                                  content: _ctx.$store.getters["cartCount"],
                                                  inline: "",
                                                  "data-aos": "fade-up",
                                                  "data-aos-delay": "500"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_badge, {
                                                    color: "#e5345b",
                                                    content: _ctx.$store.getters["cartCount"],
                                                    inline: "",
                                                    "data-aos": "fade-up",
                                                    "data-aos-delay": "500"
                                                  }, null, 8, ["content"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            link: "",
                                            title: "My Favorite",
                                            onClick: handleFavorite,
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, {
                                            append: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_badge, {
                                                  color: "#e5345b",
                                                  content: _ctx.$store.getters["favoriteCount"],
                                                  inline: "",
                                                  "data-aos": "fade-up",
                                                  "data-aos-delay": "500"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_badge, {
                                                    color: "#e5345b",
                                                    content: _ctx.$store.getters["favoriteCount"],
                                                    inline: "",
                                                    "data-aos": "fade-up",
                                                    "data-aos-delay": "500"
                                                  }, null, 8, ["content"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            link: "",
                                            title: "Notification",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            link: "",
                                            title: "Setting",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            class: "my-5",
                                            onClick: handleLogout,
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-logout`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-logout")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(` Logout `);
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-logout")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Logout ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_list_item, {
                                              link: "",
                                              title: "My Cart",
                                              stacked: "",
                                              onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"]),
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, {
                                              append: withCtx(() => [
                                                createVNode(_component_v_badge, {
                                                  color: "#e5345b",
                                                  content: _ctx.$store.getters["cartCount"],
                                                  inline: "",
                                                  "data-aos": "fade-up",
                                                  "data-aos-delay": "500"
                                                }, null, 8, ["content"])
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(_component_v_list_item, {
                                              link: "",
                                              title: "My Favorite",
                                              onClick: handleFavorite,
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, {
                                              append: withCtx(() => [
                                                createVNode(_component_v_badge, {
                                                  color: "#e5345b",
                                                  content: _ctx.$store.getters["favoriteCount"],
                                                  inline: "",
                                                  "data-aos": "fade-up",
                                                  "data-aos-delay": "500"
                                                }, null, 8, ["content"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, {
                                              link: "",
                                              title: "Notification",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              link: "",
                                              title: "Setting",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }),
                                            createVNode(_component_v_divider),
                                            createVNode(_component_v_btn, {
                                              class: "my-5",
                                              onClick: handleLogout,
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-logout")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Logout ")
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
                                      createVNode(_component_v_list, {
                                        border: "",
                                        class: "mx-auto"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, {
                                            link: "",
                                            title: "My Cart",
                                            stacked: "",
                                            onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"]),
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, {
                                            append: withCtx(() => [
                                              createVNode(_component_v_badge, {
                                                color: "#e5345b",
                                                content: _ctx.$store.getters["cartCount"],
                                                inline: "",
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "500"
                                              }, null, 8, ["content"])
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(_component_v_list_item, {
                                            link: "",
                                            title: "My Favorite",
                                            onClick: handleFavorite,
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, {
                                            append: withCtx(() => [
                                              createVNode(_component_v_badge, {
                                                color: "#e5345b",
                                                content: _ctx.$store.getters["favoriteCount"],
                                                inline: "",
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "500"
                                              }, null, 8, ["content"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, {
                                            link: "",
                                            title: "Notification",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            link: "",
                                            title: "Setting",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }),
                                          createVNode(_component_v_divider),
                                          createVNode(_component_v_btn, {
                                            class: "my-5",
                                            onClick: handleLogout,
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-logout")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Logout ")
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
                                  class: "pa-5",
                                  color: "rgb(198, 196, 196)"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-around align-center" }, [
                                      createVNode(_component_v_avatar, {
                                        color: "surface-variant",
                                        size: "80",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("p", {
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, "Lionel Messi")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card, {
                                  class: "mt-3",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, {
                                      border: "",
                                      class: "mx-auto"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          link: "",
                                          title: "My Cart",
                                          stacked: "",
                                          onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"]),
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, {
                                          append: withCtx(() => [
                                            createVNode(_component_v_badge, {
                                              color: "#e5345b",
                                              content: _ctx.$store.getters["cartCount"],
                                              inline: "",
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, null, 8, ["content"])
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_v_list_item, {
                                          link: "",
                                          title: "My Favorite",
                                          onClick: handleFavorite,
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, {
                                          append: withCtx(() => [
                                            createVNode(_component_v_badge, {
                                              color: "#e5345b",
                                              content: _ctx.$store.getters["favoriteCount"],
                                              inline: "",
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, null, 8, ["content"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, {
                                          link: "",
                                          title: "Notification",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          link: "",
                                          title: "Setting",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_btn, {
                                          class: "my-5",
                                          onClick: handleLogout,
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-logout")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Logout ")
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
                              _push5(ssrRenderComponent(_component_v_card, { class: "pa-5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-center" style="${ssrRenderStyle({ "border": "1px solid rgb(198, 196, 196)" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId5}> Customer Profile </h1>`);
                                    _push6(ssrRenderComponent(_component_v_row, {
                                      class: "mt-5 d-flex align-center",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex"${_scopeId7}><p${_scopeId7}>First Name</p><p class="ms-10"${_scopeId7}>Messi</p></div><div class="d-flex mt-5"${_scopeId7}><p${_scopeId7}>Last Name</p><p class="ms-10"${_scopeId7}>Messi</p></div><div class="d-flex mt-5"${_scopeId7}><p${_scopeId7}>Address</p><p class="ms-10"${_scopeId7}> 56 Glassford Street 234 Toulkok PhnomPenh Cambodia </p></div><div class="d-flex mt-5"${_scopeId7}><p${_scopeId7}>Email</p><p class="ms-10"${_scopeId7}>messi@gmail.com</p></div><div class="d-flex mt-5"${_scopeId7}><p${_scopeId7}>Phone number</p><p class="ms-10"${_scopeId7}>078 220 698</p></div>`);
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  class: "mt-5",
                                                  variant: "outlined"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Change Password`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Change Password")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex" }, [
                                                    createVNode("p", null, "First Name"),
                                                    createVNode("p", { class: "ms-10" }, "Messi")
                                                  ]),
                                                  createVNode("div", { class: "d-flex mt-5" }, [
                                                    createVNode("p", null, "Last Name"),
                                                    createVNode("p", { class: "ms-10" }, "Messi")
                                                  ]),
                                                  createVNode("div", { class: "d-flex mt-5" }, [
                                                    createVNode("p", null, "Address"),
                                                    createVNode("p", { class: "ms-10" }, " 56 Glassford Street 234 Toulkok PhnomPenh Cambodia ")
                                                  ]),
                                                  createVNode("div", { class: "d-flex mt-5" }, [
                                                    createVNode("p", null, "Email"),
                                                    createVNode("p", { class: "ms-10" }, "messi@gmail.com")
                                                  ]),
                                                  createVNode("div", { class: "d-flex mt-5" }, [
                                                    createVNode("p", null, "Phone number"),
                                                    createVNode("p", { class: "ms-10" }, "078 220 698")
                                                  ]),
                                                  createVNode(_component_v_btn, {
                                                    class: "mt-5",
                                                    variant: "outlined"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Change Password")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6",
                                            class: "text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<p${_scopeId7}>Profile Image</p>`);
                                                _push8(ssrRenderComponent(_component_v_img, {
                                                  src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                                  height: "130",
                                                  width: "110",
                                                  class: "bg-grey-lighten-2 mt-5 mx-auto",
                                                  cover: ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  class: "mt-5",
                                                  variant: "outlined"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Upload New`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Upload New")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("p", null, "Profile Image"),
                                                  createVNode(_component_v_img, {
                                                    src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                                    height: "130",
                                                    width: "110",
                                                    class: "bg-grey-lighten-2 mt-5 mx-auto",
                                                    cover: ""
                                                  }),
                                                  createVNode(_component_v_btn, {
                                                    class: "mt-5",
                                                    variant: "outlined"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Upload New")
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
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex" }, [
                                                  createVNode("p", null, "First Name"),
                                                  createVNode("p", { class: "ms-10" }, "Messi")
                                                ]),
                                                createVNode("div", { class: "d-flex mt-5" }, [
                                                  createVNode("p", null, "Last Name"),
                                                  createVNode("p", { class: "ms-10" }, "Messi")
                                                ]),
                                                createVNode("div", { class: "d-flex mt-5" }, [
                                                  createVNode("p", null, "Address"),
                                                  createVNode("p", { class: "ms-10" }, " 56 Glassford Street 234 Toulkok PhnomPenh Cambodia ")
                                                ]),
                                                createVNode("div", { class: "d-flex mt-5" }, [
                                                  createVNode("p", null, "Email"),
                                                  createVNode("p", { class: "ms-10" }, "messi@gmail.com")
                                                ]),
                                                createVNode("div", { class: "d-flex mt-5" }, [
                                                  createVNode("p", null, "Phone number"),
                                                  createVNode("p", { class: "ms-10" }, "078 220 698")
                                                ]),
                                                createVNode(_component_v_btn, {
                                                  class: "mt-5",
                                                  variant: "outlined"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Change Password")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6",
                                              class: "text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, "Profile Image"),
                                                createVNode(_component_v_img, {
                                                  src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                                  height: "130",
                                                  width: "110",
                                                  class: "bg-grey-lighten-2 mt-5 mx-auto",
                                                  cover: ""
                                                }),
                                                createVNode(_component_v_btn, {
                                                  class: "mt-5",
                                                  variant: "outlined"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Upload New")
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
                                    _push6(`<div class="mt-15" style="${ssrRenderStyle({ "border-top": "1px solid rgb(198, 196, 196)" })}"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_row, { class: "mt-5" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<p${_scopeId7}>Customer ID</p><p class="mt-3"${_scopeId7}>63d7384232cb502f4145fc73</p>`);
                                              } else {
                                                return [
                                                  createVNode("p", null, "Customer ID"),
                                                  createVNode("p", { class: "mt-3" }, "63d7384232cb502f4145fc73")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6",
                                            class: "text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  color: "#e5345b",
                                                  class: "text-white",
                                                  "data-aos": "fade-up",
                                                  "data-aos-delay": "500"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Edit Profile `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Edit Profile ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_btn, {
                                                    color: "#e5345b",
                                                    class: "text-white",
                                                    "data-aos": "fade-up",
                                                    "data-aos-delay": "500"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Edit Profile ")
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
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, "Customer ID"),
                                                createVNode("p", { class: "mt-3" }, "63d7384232cb502f4145fc73")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6",
                                              class: "text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  color: "#e5345b",
                                                  class: "text-white",
                                                  "data-aos": "fade-up",
                                                  "data-aos-delay": "500"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Edit Profile ")
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
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("h1", {
                                        class: "text-center",
                                        style: { "border": "1px solid rgb(198, 196, 196)" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, " Customer Profile "),
                                      createVNode(_component_v_row, {
                                        class: "mt-5 d-flex align-center",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex" }, [
                                                createVNode("p", null, "First Name"),
                                                createVNode("p", { class: "ms-10" }, "Messi")
                                              ]),
                                              createVNode("div", { class: "d-flex mt-5" }, [
                                                createVNode("p", null, "Last Name"),
                                                createVNode("p", { class: "ms-10" }, "Messi")
                                              ]),
                                              createVNode("div", { class: "d-flex mt-5" }, [
                                                createVNode("p", null, "Address"),
                                                createVNode("p", { class: "ms-10" }, " 56 Glassford Street 234 Toulkok PhnomPenh Cambodia ")
                                              ]),
                                              createVNode("div", { class: "d-flex mt-5" }, [
                                                createVNode("p", null, "Email"),
                                                createVNode("p", { class: "ms-10" }, "messi@gmail.com")
                                              ]),
                                              createVNode("div", { class: "d-flex mt-5" }, [
                                                createVNode("p", null, "Phone number"),
                                                createVNode("p", { class: "ms-10" }, "078 220 698")
                                              ]),
                                              createVNode(_component_v_btn, {
                                                class: "mt-5",
                                                variant: "outlined"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Change Password")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6",
                                            class: "text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, "Profile Image"),
                                              createVNode(_component_v_img, {
                                                src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                                height: "130",
                                                width: "110",
                                                class: "bg-grey-lighten-2 mt-5 mx-auto",
                                                cover: ""
                                              }),
                                              createVNode(_component_v_btn, {
                                                class: "mt-5",
                                                variant: "outlined"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Upload New")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", {
                                        class: "mt-15",
                                        style: { "border-top": "1px solid rgb(198, 196, 196)" }
                                      }, [
                                        createVNode(_component_v_row, { class: "mt-5" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, "Customer ID"),
                                                createVNode("p", { class: "mt-3" }, "63d7384232cb502f4145fc73")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6",
                                              class: "text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  color: "#e5345b",
                                                  class: "text-white",
                                                  "data-aos": "fade-up",
                                                  "data-aos-delay": "500"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Edit Profile ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, { class: "pa-5" }, {
                                  default: withCtx(() => [
                                    createVNode("h1", {
                                      class: "text-center",
                                      style: { "border": "1px solid rgb(198, 196, 196)" },
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, " Customer Profile "),
                                    createVNode(_component_v_row, {
                                      class: "mt-5 d-flex align-center",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex" }, [
                                              createVNode("p", null, "First Name"),
                                              createVNode("p", { class: "ms-10" }, "Messi")
                                            ]),
                                            createVNode("div", { class: "d-flex mt-5" }, [
                                              createVNode("p", null, "Last Name"),
                                              createVNode("p", { class: "ms-10" }, "Messi")
                                            ]),
                                            createVNode("div", { class: "d-flex mt-5" }, [
                                              createVNode("p", null, "Address"),
                                              createVNode("p", { class: "ms-10" }, " 56 Glassford Street 234 Toulkok PhnomPenh Cambodia ")
                                            ]),
                                            createVNode("div", { class: "d-flex mt-5" }, [
                                              createVNode("p", null, "Email"),
                                              createVNode("p", { class: "ms-10" }, "messi@gmail.com")
                                            ]),
                                            createVNode("div", { class: "d-flex mt-5" }, [
                                              createVNode("p", null, "Phone number"),
                                              createVNode("p", { class: "ms-10" }, "078 220 698")
                                            ]),
                                            createVNode(_component_v_btn, {
                                              class: "mt-5",
                                              variant: "outlined"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Change Password")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("p", null, "Profile Image"),
                                            createVNode(_component_v_img, {
                                              src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                              height: "130",
                                              width: "110",
                                              class: "bg-grey-lighten-2 mt-5 mx-auto",
                                              cover: ""
                                            }),
                                            createVNode(_component_v_btn, {
                                              class: "mt-5",
                                              variant: "outlined"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Upload New")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", {
                                      class: "mt-15",
                                      style: { "border-top": "1px solid rgb(198, 196, 196)" }
                                    }, [
                                      createVNode(_component_v_row, { class: "mt-5" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, "Customer ID"),
                                              createVNode("p", { class: "mt-3" }, "63d7384232cb502f4145fc73")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6",
                                            class: "text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                color: "#e5345b",
                                                class: "text-white",
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "500"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Edit Profile ")
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
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                class: "pa-5",
                                color: "rgb(198, 196, 196)"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-space-around align-center" }, [
                                    createVNode(_component_v_avatar, {
                                      color: "surface-variant",
                                      size: "80",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("p", {
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, "Lionel Messi")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card, {
                                class: "mt-3",
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, {
                                    border: "",
                                    class: "mx-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        link: "",
                                        title: "My Cart",
                                        stacked: "",
                                        onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"]),
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, {
                                        append: withCtx(() => [
                                          createVNode(_component_v_badge, {
                                            color: "#e5345b",
                                            content: _ctx.$store.getters["cartCount"],
                                            inline: "",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, null, 8, ["content"])
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_v_list_item, {
                                        link: "",
                                        title: "My Favorite",
                                        onClick: handleFavorite,
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, {
                                        append: withCtx(() => [
                                          createVNode(_component_v_badge, {
                                            color: "#e5345b",
                                            content: _ctx.$store.getters["favoriteCount"],
                                            inline: "",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, null, 8, ["content"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, {
                                        link: "",
                                        title: "Notification",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        link: "",
                                        title: "Setting",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_btn, {
                                        class: "my-5",
                                        onClick: handleLogout,
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-logout")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Logout ")
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
                              createVNode(_component_v_card, { class: "pa-5" }, {
                                default: withCtx(() => [
                                  createVNode("h1", {
                                    class: "text-center",
                                    style: { "border": "1px solid rgb(198, 196, 196)" },
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, " Customer Profile "),
                                  createVNode(_component_v_row, {
                                    class: "mt-5 d-flex align-center",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("p", null, "First Name"),
                                            createVNode("p", { class: "ms-10" }, "Messi")
                                          ]),
                                          createVNode("div", { class: "d-flex mt-5" }, [
                                            createVNode("p", null, "Last Name"),
                                            createVNode("p", { class: "ms-10" }, "Messi")
                                          ]),
                                          createVNode("div", { class: "d-flex mt-5" }, [
                                            createVNode("p", null, "Address"),
                                            createVNode("p", { class: "ms-10" }, " 56 Glassford Street 234 Toulkok PhnomPenh Cambodia ")
                                          ]),
                                          createVNode("div", { class: "d-flex mt-5" }, [
                                            createVNode("p", null, "Email"),
                                            createVNode("p", { class: "ms-10" }, "messi@gmail.com")
                                          ]),
                                          createVNode("div", { class: "d-flex mt-5" }, [
                                            createVNode("p", null, "Phone number"),
                                            createVNode("p", { class: "ms-10" }, "078 220 698")
                                          ]),
                                          createVNode(_component_v_btn, {
                                            class: "mt-5",
                                            variant: "outlined"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Change Password")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, "Profile Image"),
                                          createVNode(_component_v_img, {
                                            src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                            height: "130",
                                            width: "110",
                                            class: "bg-grey-lighten-2 mt-5 mx-auto",
                                            cover: ""
                                          }),
                                          createVNode(_component_v_btn, {
                                            class: "mt-5",
                                            variant: "outlined"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Upload New")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", {
                                    class: "mt-15",
                                    style: { "border-top": "1px solid rgb(198, 196, 196)" }
                                  }, [
                                    createVNode(_component_v_row, { class: "mt-5" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("p", null, "Customer ID"),
                                            createVNode("p", { class: "mt-3" }, "63d7384232cb502f4145fc73")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "#e5345b",
                                              class: "text-white",
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Edit Profile ")
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
                  _push3(`<h1 class="mt-15" data-aos="fade-right" data-aos-delay="500"${_scopeId2}> Purchase History </h1>`);
                  _push3(ssrRenderComponent(_component_v_table, {
                    "fixed-header": "",
                    height: "300px",
                    class: "mt-10"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr data-aos="fade-right" data-aos-delay="500"${_scopeId3}><th class="text-center"${_scopeId3}>REMOVE</th><th class="text-center"${_scopeId3}>IMAGE</th><th class="text-center"${_scopeId3}>PRODUCT</th><th class="text-center"${_scopeId3}>PRICE</th></tr></thead><tbody class="text-center"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(purchase), (p) => {
                          _push4(`<tr data-aos="fade-up" data-aos-delay="500"${_scopeId3}><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_btn, { icon: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_icon, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`mdi-delete`);
                                    } else {
                                      return [
                                        createTextVNode("mdi-delete")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_icon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-delete")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_img, {
                            src: p.orderItems[0].image[0],
                            height: "70px",
                            width: "70px",
                            class: "bg-grey-lighten-2 mx-auto",
                            cover: ""
                          }, null, _parent4, _scopeId3));
                          _push4(`</td><td${_scopeId3}>${ssrInterpolate(p.orderItems[0].name)}</td><td${_scopeId3}>$${ssrInterpolate(p.orderItems[0].price)}.00</td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", {
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, [
                              createVNode("th", { class: "text-center" }, "REMOVE"),
                              createVNode("th", { class: "text-center" }, "IMAGE"),
                              createVNode("th", { class: "text-center" }, "PRODUCT"),
                              createVNode("th", { class: "text-center" }, "PRICE")
                            ])
                          ]),
                          createVNode("tbody", { class: "text-center" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(purchase), (p) => {
                              return openBlock(), createBlock("tr", {
                                key: p._id,
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, [
                                createVNode("td", null, [
                                  createVNode(_component_v_btn, { icon: "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-delete")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_img, {
                                    src: p.orderItems[0].image[0],
                                    height: "70px",
                                    width: "70px",
                                    class: "bg-grey-lighten-2 mx-auto",
                                    cover: ""
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("td", null, toDisplayString(p.orderItems[0].name), 1),
                                createVNode("td", null, "$" + toDisplayString(p.orderItems[0].price) + ".00", 1)
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              class: "pa-5",
                              color: "rgb(198, 196, 196)"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-space-around align-center" }, [
                                  createVNode(_component_v_avatar, {
                                    color: "surface-variant",
                                    size: "80",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("p", {
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, "Lionel Messi")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card, {
                              class: "mt-3",
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, {
                                  border: "",
                                  class: "mx-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      link: "",
                                      title: "My Cart",
                                      stacked: "",
                                      onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"]),
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(_component_v_badge, {
                                          color: "#e5345b",
                                          content: _ctx.$store.getters["cartCount"],
                                          inline: "",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, null, 8, ["content"])
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_v_list_item, {
                                      link: "",
                                      title: "My Favorite",
                                      onClick: handleFavorite,
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(_component_v_badge, {
                                          color: "#e5345b",
                                          content: _ctx.$store.getters["favoriteCount"],
                                          inline: "",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, null, 8, ["content"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, {
                                      link: "",
                                      title: "Notification",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      link: "",
                                      title: "Setting",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_btn, {
                                      class: "my-5",
                                      onClick: handleLogout,
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-logout")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Logout ")
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
                            createVNode(_component_v_card, { class: "pa-5" }, {
                              default: withCtx(() => [
                                createVNode("h1", {
                                  class: "text-center",
                                  style: { "border": "1px solid rgb(198, 196, 196)" },
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " Customer Profile "),
                                createVNode(_component_v_row, {
                                  class: "mt-5 d-flex align-center",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex" }, [
                                          createVNode("p", null, "First Name"),
                                          createVNode("p", { class: "ms-10" }, "Messi")
                                        ]),
                                        createVNode("div", { class: "d-flex mt-5" }, [
                                          createVNode("p", null, "Last Name"),
                                          createVNode("p", { class: "ms-10" }, "Messi")
                                        ]),
                                        createVNode("div", { class: "d-flex mt-5" }, [
                                          createVNode("p", null, "Address"),
                                          createVNode("p", { class: "ms-10" }, " 56 Glassford Street 234 Toulkok PhnomPenh Cambodia ")
                                        ]),
                                        createVNode("div", { class: "d-flex mt-5" }, [
                                          createVNode("p", null, "Email"),
                                          createVNode("p", { class: "ms-10" }, "messi@gmail.com")
                                        ]),
                                        createVNode("div", { class: "d-flex mt-5" }, [
                                          createVNode("p", null, "Phone number"),
                                          createVNode("p", { class: "ms-10" }, "078 220 698")
                                        ]),
                                        createVNode(_component_v_btn, {
                                          class: "mt-5",
                                          variant: "outlined"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Change Password")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", null, "Profile Image"),
                                        createVNode(_component_v_img, {
                                          src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                          height: "130",
                                          width: "110",
                                          class: "bg-grey-lighten-2 mt-5 mx-auto",
                                          cover: ""
                                        }),
                                        createVNode(_component_v_btn, {
                                          class: "mt-5",
                                          variant: "outlined"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Upload New")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", {
                                  class: "mt-15",
                                  style: { "border-top": "1px solid rgb(198, 196, 196)" }
                                }, [
                                  createVNode(_component_v_row, { class: "mt-5" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, "Customer ID"),
                                          createVNode("p", { class: "mt-3" }, "63d7384232cb502f4145fc73")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "#e5345b",
                                            class: "text-white",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Edit Profile ")
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
                      class: "mt-15",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, " Purchase History "),
                    createVNode(_component_v_table, {
                      "fixed-header": "",
                      height: "300px",
                      class: "mt-10"
                    }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", {
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, [
                            createVNode("th", { class: "text-center" }, "REMOVE"),
                            createVNode("th", { class: "text-center" }, "IMAGE"),
                            createVNode("th", { class: "text-center" }, "PRODUCT"),
                            createVNode("th", { class: "text-center" }, "PRICE")
                          ])
                        ]),
                        createVNode("tbody", { class: "text-center" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(purchase), (p) => {
                            return openBlock(), createBlock("tr", {
                              key: p._id,
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, [
                              createVNode("td", null, [
                                createVNode(_component_v_btn, { icon: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-delete")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("td", null, [
                                createVNode(_component_v_img, {
                                  src: p.orderItems[0].image[0],
                                  height: "70px",
                                  width: "70px",
                                  class: "bg-grey-lighten-2 mx-auto",
                                  cover: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("td", null, toDisplayString(p.orderItems[0].name), 1),
                              createVNode("td", null, "$" + toDisplayString(p.orderItems[0].price) + ".00", 1)
                            ]);
                          }), 128))
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
                        }, " #AboutYourSelf "),
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
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "pa-5",
                            color: "rgb(198, 196, 196)"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-space-around align-center" }, [
                                createVNode(_component_v_avatar, {
                                  color: "surface-variant",
                                  size: "80",
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, { src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("p", {
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, "Lionel Messi")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card, {
                            class: "mt-3",
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, {
                                border: "",
                                class: "mx-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    link: "",
                                    title: "My Cart",
                                    stacked: "",
                                    onClick: withModifiers(($event) => drawer.value = !unref(drawer), ["stop"]),
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, {
                                    append: withCtx(() => [
                                      createVNode(_component_v_badge, {
                                        color: "#e5345b",
                                        content: _ctx.$store.getters["cartCount"],
                                        inline: "",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, null, 8, ["content"])
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_list_item, {
                                    link: "",
                                    title: "My Favorite",
                                    onClick: handleFavorite,
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, {
                                    append: withCtx(() => [
                                      createVNode(_component_v_badge, {
                                        color: "#e5345b",
                                        content: _ctx.$store.getters["favoriteCount"],
                                        inline: "",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, null, 8, ["content"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, {
                                    link: "",
                                    title: "Notification",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    link: "",
                                    title: "Setting",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_btn, {
                                    class: "my-5",
                                    onClick: handleLogout,
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-logout")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Logout ")
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
                          createVNode(_component_v_card, { class: "pa-5" }, {
                            default: withCtx(() => [
                              createVNode("h1", {
                                class: "text-center",
                                style: { "border": "1px solid rgb(198, 196, 196)" },
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " Customer Profile "),
                              createVNode(_component_v_row, {
                                class: "mt-5 d-flex align-center",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex" }, [
                                        createVNode("p", null, "First Name"),
                                        createVNode("p", { class: "ms-10" }, "Messi")
                                      ]),
                                      createVNode("div", { class: "d-flex mt-5" }, [
                                        createVNode("p", null, "Last Name"),
                                        createVNode("p", { class: "ms-10" }, "Messi")
                                      ]),
                                      createVNode("div", { class: "d-flex mt-5" }, [
                                        createVNode("p", null, "Address"),
                                        createVNode("p", { class: "ms-10" }, " 56 Glassford Street 234 Toulkok PhnomPenh Cambodia ")
                                      ]),
                                      createVNode("div", { class: "d-flex mt-5" }, [
                                        createVNode("p", null, "Email"),
                                        createVNode("p", { class: "ms-10" }, "messi@gmail.com")
                                      ]),
                                      createVNode("div", { class: "d-flex mt-5" }, [
                                        createVNode("p", null, "Phone number"),
                                        createVNode("p", { class: "ms-10" }, "078 220 698")
                                      ]),
                                      createVNode(_component_v_btn, {
                                        class: "mt-5",
                                        variant: "outlined"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Change Password")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", null, "Profile Image"),
                                      createVNode(_component_v_img, {
                                        src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                        height: "130",
                                        width: "110",
                                        class: "bg-grey-lighten-2 mt-5 mx-auto",
                                        cover: ""
                                      }),
                                      createVNode(_component_v_btn, {
                                        class: "mt-5",
                                        variant: "outlined"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Upload New")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", {
                                class: "mt-15",
                                style: { "border-top": "1px solid rgb(198, 196, 196)" }
                              }, [
                                createVNode(_component_v_row, { class: "mt-5" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", null, "Customer ID"),
                                        createVNode("p", { class: "mt-3" }, "63d7384232cb502f4145fc73")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          color: "#e5345b",
                                          class: "text-white",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Edit Profile ")
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
                    class: "mt-15",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, " Purchase History "),
                  createVNode(_component_v_table, {
                    "fixed-header": "",
                    height: "300px",
                    class: "mt-10"
                  }, {
                    default: withCtx(() => [
                      createVNode("thead", null, [
                        createVNode("tr", {
                          "data-aos": "fade-right",
                          "data-aos-delay": "500"
                        }, [
                          createVNode("th", { class: "text-center" }, "REMOVE"),
                          createVNode("th", { class: "text-center" }, "IMAGE"),
                          createVNode("th", { class: "text-center" }, "PRODUCT"),
                          createVNode("th", { class: "text-center" }, "PRICE")
                        ])
                      ]),
                      createVNode("tbody", { class: "text-center" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(purchase), (p) => {
                          return openBlock(), createBlock("tr", {
                            key: p._id,
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, [
                            createVNode("td", null, [
                              createVNode(_component_v_btn, { icon: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-delete")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("td", null, [
                              createVNode(_component_v_img, {
                                src: p.orderItems[0].image[0],
                                height: "70px",
                                width: "70px",
                                class: "bg-grey-lighten-2 mx-auto",
                                cover: ""
                              }, null, 8, ["src"])
                            ]),
                            createVNode("td", null, toDisplayString(p.orderItems[0].name), 1),
                            createVNode("td", null, "$" + toDisplayString(p.orderItems[0].price) + ".00", 1)
                          ]);
                        }), 128))
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-dffdcbb8.mjs.map
