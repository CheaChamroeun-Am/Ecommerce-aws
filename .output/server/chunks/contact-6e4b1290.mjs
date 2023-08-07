import { resolveComponent, resolveDirective, withCtx, createVNode, createTextVNode, mergeProps, withDirectives, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList } from 'vue/server-renderer';
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
  const _component_v_card = resolveComponent("v-card");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_form = resolveComponent("v-form");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_textarea = resolveComponent("v-textarea");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _directive_scroll_y = resolveDirective("scroll-y");
  _push(ssrRenderComponent(_component_v_main, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_img, {
                src: "/images/b3.png",
                height: "250",
                width: "100%",
                class: "bg-grey-lighten-2",
                cover: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text-overlay"${_scopeId3}><p class="text" data-aos="fade-right" data-aos-delay="500"${_scopeId3}>#let&#39;s_talk</p><p class="text-white text-center" data-aos="fade-up" data-aos-delay="500"${_scopeId3}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-overlay" }, [
                        createVNode("p", {
                          class: "text",
                          "data-aos": "fade-right",
                          "data-aos-delay": "500"
                        }, "#let's_talk"),
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
                  src: "/images/b3.png",
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
                      }, "#let's_talk"),
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
                      md: "6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-uppercase" data-aos="fade-right" data-aos-delay="500"${_scopeId4}>Get in touch</p><h2 class="font-weight-bold mt-5" data-aos="fade-right" data-aos-delay="500"${_scopeId4}> Visit one of our agency locations or contact use today </h2><h6 class="font-weight-bold mt-4" style="${ssrRenderStyle({ "font-size": "15px" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId4}> Head Office </h6><div class="mt-8" data-aos="fade-up" data-aos-delay="500"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-map-outline" }, null, _parent5, _scopeId4));
                          _push5(`<span class="ms-5" style="${ssrRenderStyle({ "color": "#6c757d" })}"${_scopeId4}>56 Glassford Street 234 Toulkok PhnomPenh Cambodia</span></div><div class="mt-6" data-aos="fade-up" data-aos-delay="500"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-email-outline" }, null, _parent5, _scopeId4));
                          _push5(`<span class="ms-5" style="${ssrRenderStyle({ "color": "#6c757d" })}"${_scopeId4}>contact@example.com</span></div><div class="mt-6" data-aos="fade-up" data-aos-delay="500"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-phone" }, null, _parent5, _scopeId4));
                          _push5(`<span class="ms-5" style="${ssrRenderStyle({ "color": "#6c757d" })}"${_scopeId4}>023 456 789</span></div><div class="mt-6" data-aos="fade-up" data-aos-delay="500"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-clock-time-four-outline" }, null, _parent5, _scopeId4));
                          _push5(`<span class="ms-5" style="${ssrRenderStyle({ "color": "#6c757d" })}"${_scopeId4}>Monday to Saturday: 9:00am to 16.pm</span></div>`);
                        } else {
                          return [
                            createVNode("p", {
                              class: "text-uppercase",
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, "Get in touch"),
                            createVNode("h2", {
                              class: "font-weight-bold mt-5",
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " Visit one of our agency locations or contact use today "),
                            createVNode("h6", {
                              class: "font-weight-bold mt-4",
                              style: { "font-size": "15px" },
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " Head Office "),
                            createVNode("div", {
                              class: "mt-8",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, [
                              createVNode(_component_v_icon, { icon: "mdi-map-outline" }),
                              createVNode("span", {
                                class: "ms-5",
                                style: { "color": "#6c757d" }
                              }, "56 Glassford Street 234 Toulkok PhnomPenh Cambodia")
                            ]),
                            createVNode("div", {
                              class: "mt-6",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, [
                              createVNode(_component_v_icon, { icon: "mdi-email-outline" }),
                              createVNode("span", {
                                class: "ms-5",
                                style: { "color": "#6c757d" }
                              }, "contact@example.com")
                            ]),
                            createVNode("div", {
                              class: "mt-6",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, [
                              createVNode(_component_v_icon, { icon: "mdi-phone" }),
                              createVNode("span", {
                                class: "ms-5",
                                style: { "color": "#6c757d" }
                              }, "023 456 789")
                            ]),
                            createVNode("div", {
                              class: "mt-6",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, [
                              createVNode(_component_v_icon, { icon: "mdi-clock-time-four-outline" }),
                              createVNode("span", {
                                class: "ms-5",
                                style: { "color": "#6c757d" }
                              }, "Monday to Saturday: 9:00am to 16.pm")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "d-flex justify-center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31270.029650438657!2d104.88003710996237!3d11.569505918028316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951725d8c4835%3A0x2047e2df9364f385!2sKhan%20Tuol%20Kouk%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1674752758033!5m2!1sen!2skh" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-aos="zoom-in-up" data-aos-delay="250"${_scopeId4}></iframe>`);
                        } else {
                          return [
                            createVNode("iframe", {
                              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31270.029650438657!2d104.88003710996237!3d11.569505918028316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951725d8c4835%3A0x2047e2df9364f385!2sKhan%20Tuol%20Kouk%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1674752758033!5m2!1sen!2skh",
                              width: "600",
                              height: "450",
                              style: { "border": "0" },
                              allowfullscreen: "",
                              loading: "lazy",
                              referrerpolicy: "no-referrer-when-downgrade",
                              "data-aos": "zoom-in-up",
                              "data-aos-delay": "250"
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
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", {
                            class: "text-uppercase",
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, "Get in touch"),
                          createVNode("h2", {
                            class: "font-weight-bold mt-5",
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, " Visit one of our agency locations or contact use today "),
                          createVNode("h6", {
                            class: "font-weight-bold mt-4",
                            style: { "font-size": "15px" },
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, " Head Office "),
                          createVNode("div", {
                            class: "mt-8",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, [
                            createVNode(_component_v_icon, { icon: "mdi-map-outline" }),
                            createVNode("span", {
                              class: "ms-5",
                              style: { "color": "#6c757d" }
                            }, "56 Glassford Street 234 Toulkok PhnomPenh Cambodia")
                          ]),
                          createVNode("div", {
                            class: "mt-6",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, [
                            createVNode(_component_v_icon, { icon: "mdi-email-outline" }),
                            createVNode("span", {
                              class: "ms-5",
                              style: { "color": "#6c757d" }
                            }, "contact@example.com")
                          ]),
                          createVNode("div", {
                            class: "mt-6",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, [
                            createVNode(_component_v_icon, { icon: "mdi-phone" }),
                            createVNode("span", {
                              class: "ms-5",
                              style: { "color": "#6c757d" }
                            }, "023 456 789")
                          ]),
                          createVNode("div", {
                            class: "mt-6",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, [
                            createVNode(_component_v_icon, { icon: "mdi-clock-time-four-outline" }),
                            createVNode("span", {
                              class: "ms-5",
                              style: { "color": "#6c757d" }
                            }, "Monday to Saturday: 9:00am to 16.pm")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "d-flex justify-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("iframe", {
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31270.029650438657!2d104.88003710996237!3d11.569505918028316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951725d8c4835%3A0x2047e2df9364f385!2sKhan%20Tuol%20Kouk%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1674752758033!5m2!1sen!2skh",
                            width: "600",
                            height: "450",
                            style: { "border": "0" },
                            allowfullscreen: "",
                            loading: "lazy",
                            referrerpolicy: "no-referrer-when-downgrade",
                            "data-aos": "zoom-in-up",
                            "data-aos-delay": "250"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_card, { class: "pa-5 mt-10" }, {
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
                                _push6(`<p class="text-uppercase" data-aos="fade-right" data-aos-delay="500"${_scopeId5}>Leave a message</p><h3 data-aos="fade-right" data-aos-delay="500"${_scopeId5}>We love to hear from you</h3>`);
                                _push6(ssrRenderComponent(_component_v_form, {
                                  class: "mt-6",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_text_field, {
                                        label: "Name",
                                        variant: "outlined",
                                        dense: "",
                                        placeholder: "Enter your name"
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_text_field, {
                                        label: "Email",
                                        variant: "outlined",
                                        dense: "",
                                        placeholder: "Enter your email"
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_text_field, {
                                        label: "Phone",
                                        variant: "outlined",
                                        dense: "",
                                        placeholder: "Enter your phone"
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_textarea, {
                                        label: "Message",
                                        variant: "outlined",
                                        dense: "",
                                        placeholder: "Enter your message"
                                      }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_btn, {
                                        color: "#e5345b",
                                        class: "mt-5 text-white px-15"
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
                                        createVNode(_component_v_text_field, {
                                          label: "Name",
                                          variant: "outlined",
                                          dense: "",
                                          placeholder: "Enter your name"
                                        }),
                                        createVNode(_component_v_text_field, {
                                          label: "Email",
                                          variant: "outlined",
                                          dense: "",
                                          placeholder: "Enter your email"
                                        }),
                                        createVNode(_component_v_text_field, {
                                          label: "Phone",
                                          variant: "outlined",
                                          dense: "",
                                          placeholder: "Enter your phone"
                                        }),
                                        createVNode(_component_v_textarea, {
                                          label: "Message",
                                          variant: "outlined",
                                          dense: "",
                                          placeholder: "Enter your message"
                                        }),
                                        createVNode(_component_v_btn, {
                                          color: "#e5345b",
                                          class: "mt-5 text-white px-15"
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
                                  }, "Leave a message"),
                                  createVNode("h3", {
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, "We love to hear from you"),
                                  createVNode(_component_v_form, {
                                    class: "mt-6",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Name",
                                        variant: "outlined",
                                        dense: "",
                                        placeholder: "Enter your name"
                                      }),
                                      createVNode(_component_v_text_field, {
                                        label: "Email",
                                        variant: "outlined",
                                        dense: "",
                                        placeholder: "Enter your email"
                                      }),
                                      createVNode(_component_v_text_field, {
                                        label: "Phone",
                                        variant: "outlined",
                                        dense: "",
                                        placeholder: "Enter your phone"
                                      }),
                                      createVNode(_component_v_textarea, {
                                        label: "Message",
                                        variant: "outlined",
                                        dense: "",
                                        placeholder: "Enter your message"
                                      }),
                                      createVNode(_component_v_btn, {
                                        color: "#e5345b",
                                        class: "mt-5 text-white px-15"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Send")
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
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "6",
                            class: "ps-10"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div${ssrRenderAttrs(mergeProps({ style: { "height": "500px", "overflow-y": "auto" } }, ssrGetDirectiveProps(_ctx, _directive_scroll_y)))}${_scopeId5}><!--[-->`);
                                ssrRenderList(5, (c) => {
                                  _push6(`<div class="d-flex mt-5"${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_v_avatar, { size: "x-large" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<img src="https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819" alt="avatar" style="${ssrRenderStyle({ "width": "100%", "height": "100%" })}" data-aos="zoom-in-up" data-aos-delay="500"${_scopeId6}>`);
                                      } else {
                                        return [
                                          createVNode("img", {
                                            src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                            alt: "avatar",
                                            style: { "width": "100%", "height": "100%" },
                                            "data-aos": "zoom-in-up",
                                            "data-aos-delay": "500"
                                          })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(`<div class="ms-5" data-aos="fade-up" data-aos-delay="500"${_scopeId5}><h3${_scopeId5}>John Doe</h3><p class="mt-2 text-muted"${_scopeId5}>Senior: Marketing Manager</p><p class="text-muted"${_scopeId5}>Email: contact@example.com</p><p class="text-muted"${_scopeId5}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, alias aliquid incidunt minima debitis eum nemo . </p></div></div>`);
                                });
                                _push6(`<!--]--></div>`);
                              } else {
                                return [
                                  withDirectives((openBlock(), createBlock("div", { style: { "height": "500px", "overflow-y": "auto" } }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(5, (c) => {
                                      return createVNode("div", {
                                        class: "d-flex mt-5",
                                        key: c
                                      }, [
                                        createVNode(_component_v_avatar, { size: "x-large" }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                              alt: "avatar",
                                              style: { "width": "100%", "height": "100%" },
                                              "data-aos": "zoom-in-up",
                                              "data-aos-delay": "500"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", {
                                          class: "ms-5",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("h3", null, "John Doe"),
                                          createVNode("p", { class: "mt-2 text-muted" }, "Senior: Marketing Manager"),
                                          createVNode("p", { class: "text-muted" }, "Email: contact@example.com"),
                                          createVNode("p", { class: "text-muted" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, alias aliquid incidunt minima debitis eum nemo . ")
                                        ])
                                      ]);
                                    }), 64))
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
                                }, "Leave a message"),
                                createVNode("h3", {
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, "We love to hear from you"),
                                createVNode(_component_v_form, {
                                  class: "mt-6",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Name",
                                      variant: "outlined",
                                      dense: "",
                                      placeholder: "Enter your name"
                                    }),
                                    createVNode(_component_v_text_field, {
                                      label: "Email",
                                      variant: "outlined",
                                      dense: "",
                                      placeholder: "Enter your email"
                                    }),
                                    createVNode(_component_v_text_field, {
                                      label: "Phone",
                                      variant: "outlined",
                                      dense: "",
                                      placeholder: "Enter your phone"
                                    }),
                                    createVNode(_component_v_textarea, {
                                      label: "Message",
                                      variant: "outlined",
                                      dense: "",
                                      placeholder: "Enter your message"
                                    }),
                                    createVNode(_component_v_btn, {
                                      color: "#e5345b",
                                      class: "mt-5 text-white px-15"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Send")
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
                              class: "ps-10"
                            }, {
                              default: withCtx(() => [
                                withDirectives((openBlock(), createBlock("div", { style: { "height": "500px", "overflow-y": "auto" } }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(5, (c) => {
                                    return createVNode("div", {
                                      class: "d-flex mt-5",
                                      key: c
                                    }, [
                                      createVNode(_component_v_avatar, { size: "x-large" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                            alt: "avatar",
                                            style: { "width": "100%", "height": "100%" },
                                            "data-aos": "zoom-in-up",
                                            "data-aos-delay": "500"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", {
                                        class: "ms-5",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("h3", null, "John Doe"),
                                        createVNode("p", { class: "mt-2 text-muted" }, "Senior: Marketing Manager"),
                                        createVNode("p", { class: "text-muted" }, "Email: contact@example.com"),
                                        createVNode("p", { class: "text-muted" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, alias aliquid incidunt minima debitis eum nemo . ")
                                      ])
                                    ]);
                                  }), 64))
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
                              }, "Leave a message"),
                              createVNode("h3", {
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, "We love to hear from you"),
                              createVNode(_component_v_form, {
                                class: "mt-6",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Name",
                                    variant: "outlined",
                                    dense: "",
                                    placeholder: "Enter your name"
                                  }),
                                  createVNode(_component_v_text_field, {
                                    label: "Email",
                                    variant: "outlined",
                                    dense: "",
                                    placeholder: "Enter your email"
                                  }),
                                  createVNode(_component_v_text_field, {
                                    label: "Phone",
                                    variant: "outlined",
                                    dense: "",
                                    placeholder: "Enter your phone"
                                  }),
                                  createVNode(_component_v_textarea, {
                                    label: "Message",
                                    variant: "outlined",
                                    dense: "",
                                    placeholder: "Enter your message"
                                  }),
                                  createVNode(_component_v_btn, {
                                    color: "#e5345b",
                                    class: "mt-5 text-white px-15"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Send")
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
                            class: "ps-10"
                          }, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock("div", { style: { "height": "500px", "overflow-y": "auto" } }, [
                                (openBlock(), createBlock(Fragment, null, renderList(5, (c) => {
                                  return createVNode("div", {
                                    class: "d-flex mt-5",
                                    key: c
                                  }, [
                                    createVNode(_component_v_avatar, { size: "x-large" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                          alt: "avatar",
                                          style: { "width": "100%", "height": "100%" },
                                          "data-aos": "zoom-in-up",
                                          "data-aos-delay": "500"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", {
                                      class: "ms-5",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("h3", null, "John Doe"),
                                      createVNode("p", { class: "mt-2 text-muted" }, "Senior: Marketing Manager"),
                                      createVNode("p", { class: "text-muted" }, "Email: contact@example.com"),
                                      createVNode("p", { class: "text-muted" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, alias aliquid incidunt minima debitis eum nemo . ")
                                    ])
                                  ]);
                                }), 64))
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
                        }, "Get in touch"),
                        createVNode("h2", {
                          class: "font-weight-bold mt-5",
                          "data-aos": "fade-right",
                          "data-aos-delay": "500"
                        }, " Visit one of our agency locations or contact use today "),
                        createVNode("h6", {
                          class: "font-weight-bold mt-4",
                          style: { "font-size": "15px" },
                          "data-aos": "fade-right",
                          "data-aos-delay": "500"
                        }, " Head Office "),
                        createVNode("div", {
                          class: "mt-8",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, [
                          createVNode(_component_v_icon, { icon: "mdi-map-outline" }),
                          createVNode("span", {
                            class: "ms-5",
                            style: { "color": "#6c757d" }
                          }, "56 Glassford Street 234 Toulkok PhnomPenh Cambodia")
                        ]),
                        createVNode("div", {
                          class: "mt-6",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, [
                          createVNode(_component_v_icon, { icon: "mdi-email-outline" }),
                          createVNode("span", {
                            class: "ms-5",
                            style: { "color": "#6c757d" }
                          }, "contact@example.com")
                        ]),
                        createVNode("div", {
                          class: "mt-6",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, [
                          createVNode(_component_v_icon, { icon: "mdi-phone" }),
                          createVNode("span", {
                            class: "ms-5",
                            style: { "color": "#6c757d" }
                          }, "023 456 789")
                        ]),
                        createVNode("div", {
                          class: "mt-6",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, [
                          createVNode(_component_v_icon, { icon: "mdi-clock-time-four-outline" }),
                          createVNode("span", {
                            class: "ms-5",
                            style: { "color": "#6c757d" }
                          }, "Monday to Saturday: 9:00am to 16.pm")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "d-flex justify-center"
                    }, {
                      default: withCtx(() => [
                        createVNode("iframe", {
                          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31270.029650438657!2d104.88003710996237!3d11.569505918028316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951725d8c4835%3A0x2047e2df9364f385!2sKhan%20Tuol%20Kouk%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1674752758033!5m2!1sen!2skh",
                          width: "600",
                          height: "450",
                          style: { "border": "0" },
                          allowfullscreen: "",
                          loading: "lazy",
                          referrerpolicy: "no-referrer-when-downgrade",
                          "data-aos": "zoom-in-up",
                          "data-aos-delay": "250"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
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
                            }, "Leave a message"),
                            createVNode("h3", {
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, "We love to hear from you"),
                            createVNode(_component_v_form, {
                              class: "mt-6",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  label: "Name",
                                  variant: "outlined",
                                  dense: "",
                                  placeholder: "Enter your name"
                                }),
                                createVNode(_component_v_text_field, {
                                  label: "Email",
                                  variant: "outlined",
                                  dense: "",
                                  placeholder: "Enter your email"
                                }),
                                createVNode(_component_v_text_field, {
                                  label: "Phone",
                                  variant: "outlined",
                                  dense: "",
                                  placeholder: "Enter your phone"
                                }),
                                createVNode(_component_v_textarea, {
                                  label: "Message",
                                  variant: "outlined",
                                  dense: "",
                                  placeholder: "Enter your message"
                                }),
                                createVNode(_component_v_btn, {
                                  color: "#e5345b",
                                  class: "mt-5 text-white px-15"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Send")
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
                          class: "ps-10"
                        }, {
                          default: withCtx(() => [
                            withDirectives((openBlock(), createBlock("div", { style: { "height": "500px", "overflow-y": "auto" } }, [
                              (openBlock(), createBlock(Fragment, null, renderList(5, (c) => {
                                return createVNode("div", {
                                  class: "d-flex mt-5",
                                  key: c
                                }, [
                                  createVNode(_component_v_avatar, { size: "x-large" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                        alt: "avatar",
                                        style: { "width": "100%", "height": "100%" },
                                        "data-aos": "zoom-in-up",
                                        "data-aos-delay": "500"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", {
                                    class: "ms-5",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("h3", null, "John Doe"),
                                    createVNode("p", { class: "mt-2 text-muted" }, "Senior: Marketing Manager"),
                                    createVNode("p", { class: "text-muted" }, "Email: contact@example.com"),
                                    createVNode("p", { class: "text-muted" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, alias aliquid incidunt minima debitis eum nemo . ")
                                  ])
                                ]);
                              }), 64))
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
                src: "/images/b3.png",
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
                    }, "#let's_talk"),
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
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", {
                        class: "text-uppercase",
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, "Get in touch"),
                      createVNode("h2", {
                        class: "font-weight-bold mt-5",
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, " Visit one of our agency locations or contact use today "),
                      createVNode("h6", {
                        class: "font-weight-bold mt-4",
                        style: { "font-size": "15px" },
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, " Head Office "),
                      createVNode("div", {
                        class: "mt-8",
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, [
                        createVNode(_component_v_icon, { icon: "mdi-map-outline" }),
                        createVNode("span", {
                          class: "ms-5",
                          style: { "color": "#6c757d" }
                        }, "56 Glassford Street 234 Toulkok PhnomPenh Cambodia")
                      ]),
                      createVNode("div", {
                        class: "mt-6",
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, [
                        createVNode(_component_v_icon, { icon: "mdi-email-outline" }),
                        createVNode("span", {
                          class: "ms-5",
                          style: { "color": "#6c757d" }
                        }, "contact@example.com")
                      ]),
                      createVNode("div", {
                        class: "mt-6",
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, [
                        createVNode(_component_v_icon, { icon: "mdi-phone" }),
                        createVNode("span", {
                          class: "ms-5",
                          style: { "color": "#6c757d" }
                        }, "023 456 789")
                      ]),
                      createVNode("div", {
                        class: "mt-6",
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, [
                        createVNode(_component_v_icon, { icon: "mdi-clock-time-four-outline" }),
                        createVNode("span", {
                          class: "ms-5",
                          style: { "color": "#6c757d" }
                        }, "Monday to Saturday: 9:00am to 16.pm")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "6",
                    class: "d-flex justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31270.029650438657!2d104.88003710996237!3d11.569505918028316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951725d8c4835%3A0x2047e2df9364f385!2sKhan%20Tuol%20Kouk%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1674752758033!5m2!1sen!2skh",
                        width: "600",
                        height: "450",
                        style: { "border": "0" },
                        allowfullscreen: "",
                        loading: "lazy",
                        referrerpolicy: "no-referrer-when-downgrade",
                        "data-aos": "zoom-in-up",
                        "data-aos-delay": "250"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
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
                          }, "Leave a message"),
                          createVNode("h3", {
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, "We love to hear from you"),
                          createVNode(_component_v_form, {
                            class: "mt-6",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                label: "Name",
                                variant: "outlined",
                                dense: "",
                                placeholder: "Enter your name"
                              }),
                              createVNode(_component_v_text_field, {
                                label: "Email",
                                variant: "outlined",
                                dense: "",
                                placeholder: "Enter your email"
                              }),
                              createVNode(_component_v_text_field, {
                                label: "Phone",
                                variant: "outlined",
                                dense: "",
                                placeholder: "Enter your phone"
                              }),
                              createVNode(_component_v_textarea, {
                                label: "Message",
                                variant: "outlined",
                                dense: "",
                                placeholder: "Enter your message"
                              }),
                              createVNode(_component_v_btn, {
                                color: "#e5345b",
                                class: "mt-5 text-white px-15"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Send")
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
                        class: "ps-10"
                      }, {
                        default: withCtx(() => [
                          withDirectives((openBlock(), createBlock("div", { style: { "height": "500px", "overflow-y": "auto" } }, [
                            (openBlock(), createBlock(Fragment, null, renderList(5, (c) => {
                              return createVNode("div", {
                                class: "d-flex mt-5",
                                key: c
                              }, [
                                createVNode(_component_v_avatar, { size: "x-large" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: "https://cdn.shopify.com/s/files/1/0469/3927/5428/t/21/assets/bildschirmfoto20230102um142358--edited-1672668816767.jpg?v=1672668819",
                                      alt: "avatar",
                                      style: { "width": "100%", "height": "100%" },
                                      "data-aos": "zoom-in-up",
                                      "data-aos-delay": "500"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", {
                                  class: "ms-5",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, [
                                  createVNode("h3", null, "John Doe"),
                                  createVNode("p", { class: "mt-2 text-muted" }, "Senior: Marketing Manager"),
                                  createVNode("p", { class: "text-muted" }, "Email: contact@example.com"),
                                  createVNode("p", { class: "text-muted" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, alias aliquid incidunt minima debitis eum nemo . ")
                                ])
                              ]);
                            }), 64))
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-6e4b1290.mjs.map
