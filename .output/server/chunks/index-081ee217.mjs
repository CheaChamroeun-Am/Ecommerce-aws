import { _ as __nuxt_component_0 } from './nuxt-link-80d3cee7.mjs';
import { ref, withAsyncContext, computed, resolveComponent, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { u as useFetch } from './fetch-cf13354b.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const rating = ref(5);
    const recent = ref([
      {
        id: 1,
        title: "25 km cross country cycling using All Terrain Cycles",
        image: "https://cdn.shopify.com/s/files/1/1811/9799/articles/blog9.jpg?v=1494403859"
      },
      {
        id: 2,
        title: "Decathlon training routine",
        image: "https://cdn.shopify.com/s/files/1/1811/9799/articles/Blog8_470x.jpg?v=1494403616"
      },
      {
        id: 3,
        title: "Obstacle course racing on Huge Shoes",
        image: "https://cdn.shopify.com/s/files/1/1811/9799/articles/blog1_470x.jpg?v=1494403118"
      }
    ]);
    const { data: blogs } = ([__temp, __restore] = withAsyncContext(() => useFetch("http://3.90.217.148:3002/api/blog", "$ansXcfZp0C")), __temp = await __temp, __restore(), __temp);
    console.log(blogs.value);
    const currentPage = ref(1);
    const itemPerPage = ref(3);
    const displayBlogs = computed(() => {
      const start = (currentPage.value - 1) * itemPerPage.value;
      const end = start + itemPerPage.value;
      return blogs.value.slice(start, end);
    });
    const totalPages = computed(() => {
      return Math.ceil(blogs.value.length / itemPerPage.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_main = resolveComponent("v-main");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_nuxt_link = __nuxt_component_0;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_rating = resolveComponent("v-rating");
      const _component_v_pagination = resolveComponent("v-pagination");
      _push(ssrRenderComponent(_component_v_main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_img, {
                    src: "/images/b2.jpg",
                    height: "250",
                    width: "100%",
                    class: "bg-grey-lighten-2",
                    cover: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-overlay" data-v-35bf0b00${_scopeId3}><p class="text" data-aos="fade-up" data-aos-delay="500" data-v-35bf0b00${_scopeId3}>#Read More</p><p class="text-white text-center" data-aos="fade-right" data-aos-delay="500" data-v-35bf0b00${_scopeId3}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overlay" }, [
                            createVNode("p", {
                              class: "text",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, "#Read More"),
                            createVNode("p", {
                              class: "text-white text-center",
                              "data-aos": "fade-right",
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
                      src: "/images/b2.jpg",
                      height: "250",
                      width: "100%",
                      class: "bg-grey-lighten-2",
                      cover: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-overlay" }, [
                          createVNode("p", {
                            class: "text",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, "#Read More"),
                          createVNode("p", {
                            class: "text-white text-center",
                            "data-aos": "fade-right",
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
                  _push3(`<h1 class="fw-bold mt-10" data-aos="fade-right" data-aos-delay="500" data-v-35bf0b00${_scopeId2}> Blogs <span style="${ssrRenderStyle({ "color": "#6b7280" })}" data-v-35bf0b00${_scopeId2}>on latest fashion trends</span></h1>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-15" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(displayBlogs), (b) => {
                                _push5(ssrRenderComponent(_component_v_row, { key: b }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: b.image,
                                              width: "100%",
                                              height: "630px",
                                              "data-aos": "zoom-in-up",
                                              "data-aos-delay": "250"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<div class="pa-5" data-v-35bf0b00${_scopeId6}><div class="d-flex" data-aos="fade-right" data-aos-delay="500" data-v-35bf0b00${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_icon, { icon: "mdi-account-circle-outline" }, null, _parent7, _scopeId6));
                                            _push7(`<p class="ml-2" data-v-35bf0b00${_scopeId6}>Admin</p>`);
                                            _push7(ssrRenderComponent(_component_v_divider, {
                                              vertical: "",
                                              class: "border-opacity-100 mx-5"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_icon, { icon: "mdi-calendar-month-outline" }, null, _parent7, _scopeId6));
                                            _push7(`<p class="ml-2" data-v-35bf0b00${_scopeId6}>May 10, 2017</p>`);
                                            _push7(ssrRenderComponent(_component_v_divider, {
                                              vertical: "",
                                              class: "border-opacity-100 mx-5"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_icon, { icon: "mdi-comment-text-outline" }, null, _parent7, _scopeId6));
                                            _push7(`<p class="ml-2" data-v-35bf0b00${_scopeId6}>2 Comments</p></div><p class="font-weight-bold mt-3" style="${ssrRenderStyle({ "font-size": "25px" })}" data-aos="fade-right" data-aos-delay="500" data-v-35bf0b00${_scopeId6}>${ssrInterpolate(b.title)}</p><p class="mt-3 article-text" data-aos="fade-right" data-aos-delay="500" data-v-35bf0b00${_scopeId6}>${ssrInterpolate(b.article)}</p><div class="mt-5" data-aos="fade-up" data-aos-delay="500" data-v-35bf0b00${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_nuxt_link, {
                                              to: `blog/${b._id}`,
                                              style: { "text-decoration": "none" }
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_btn, {
                                                    color: "#e5345b ",
                                                    variant: "outlined"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Continue reading `);
                                                        _push9(ssrRenderComponent(_component_v_icon, {
                                                          end: "",
                                                          icon: "mdi-arrow-right"
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createTextVNode(" Continue reading "),
                                                          createVNode(_component_v_icon, {
                                                            end: "",
                                                            icon: "mdi-arrow-right"
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_btn, {
                                                      color: "#e5345b ",
                                                      variant: "outlined"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Continue reading "),
                                                        createVNode(_component_v_icon, {
                                                          end: "",
                                                          icon: "mdi-arrow-right"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div></div>`);
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: b.image,
                                                width: "100%",
                                                height: "630px",
                                                "data-aos": "zoom-in-up",
                                                "data-aos-delay": "250"
                                              }, null, 8, ["src"]),
                                              createVNode("div", { class: "pa-5" }, [
                                                createVNode("div", {
                                                  class: "d-flex",
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, [
                                                  createVNode(_component_v_icon, { icon: "mdi-account-circle-outline" }),
                                                  createVNode("p", { class: "ml-2" }, "Admin"),
                                                  createVNode(_component_v_divider, {
                                                    vertical: "",
                                                    class: "border-opacity-100 mx-5"
                                                  }),
                                                  createVNode(_component_v_icon, { icon: "mdi-calendar-month-outline" }),
                                                  createVNode("p", { class: "ml-2" }, "May 10, 2017"),
                                                  createVNode(_component_v_divider, {
                                                    vertical: "",
                                                    class: "border-opacity-100 mx-5"
                                                  }),
                                                  createVNode(_component_v_icon, { icon: "mdi-comment-text-outline" }),
                                                  createVNode("p", { class: "ml-2" }, "2 Comments")
                                                ]),
                                                createVNode("p", {
                                                  class: "font-weight-bold mt-3",
                                                  style: { "font-size": "25px" },
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, toDisplayString(b.title), 1),
                                                createVNode("p", {
                                                  class: "mt-3 article-text",
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, toDisplayString(b.article), 1),
                                                createVNode("div", {
                                                  class: "mt-5",
                                                  "data-aos": "fade-up",
                                                  "data-aos-delay": "500"
                                                }, [
                                                  createVNode(_component_nuxt_link, {
                                                    to: `blog/${b._id}`,
                                                    style: { "text-decoration": "none" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        color: "#e5345b ",
                                                        variant: "outlined"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Continue reading "),
                                                          createVNode(_component_v_icon, {
                                                            end: "",
                                                            icon: "mdi-arrow-right"
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to"])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_card, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: b.image,
                                              width: "100%",
                                              height: "630px",
                                              "data-aos": "zoom-in-up",
                                              "data-aos-delay": "250"
                                            }, null, 8, ["src"]),
                                            createVNode("div", { class: "pa-5" }, [
                                              createVNode("div", {
                                                class: "d-flex",
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, [
                                                createVNode(_component_v_icon, { icon: "mdi-account-circle-outline" }),
                                                createVNode("p", { class: "ml-2" }, "Admin"),
                                                createVNode(_component_v_divider, {
                                                  vertical: "",
                                                  class: "border-opacity-100 mx-5"
                                                }),
                                                createVNode(_component_v_icon, { icon: "mdi-calendar-month-outline" }),
                                                createVNode("p", { class: "ml-2" }, "May 10, 2017"),
                                                createVNode(_component_v_divider, {
                                                  vertical: "",
                                                  class: "border-opacity-100 mx-5"
                                                }),
                                                createVNode(_component_v_icon, { icon: "mdi-comment-text-outline" }),
                                                createVNode("p", { class: "ml-2" }, "2 Comments")
                                              ]),
                                              createVNode("p", {
                                                class: "font-weight-bold mt-3",
                                                style: { "font-size": "25px" },
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, toDisplayString(b.title), 1),
                                              createVNode("p", {
                                                class: "mt-3 article-text",
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, toDisplayString(b.article), 1),
                                              createVNode("div", {
                                                class: "mt-5",
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "500"
                                              }, [
                                                createVNode(_component_nuxt_link, {
                                                  to: `blog/${b._id}`,
                                                  style: { "text-decoration": "none" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      color: "#e5345b ",
                                                      variant: "outlined"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Continue reading "),
                                                        createVNode(_component_v_icon, {
                                                          end: "",
                                                          icon: "mdi-arrow-right"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to"])
                                              ])
                                            ])
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(displayBlogs), (b) => {
                                  return openBlock(), createBlock(_component_v_row, { key: b }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: b.image,
                                            width: "100%",
                                            height: "630px",
                                            "data-aos": "zoom-in-up",
                                            "data-aos-delay": "250"
                                          }, null, 8, ["src"]),
                                          createVNode("div", { class: "pa-5" }, [
                                            createVNode("div", {
                                              class: "d-flex",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode(_component_v_icon, { icon: "mdi-account-circle-outline" }),
                                              createVNode("p", { class: "ml-2" }, "Admin"),
                                              createVNode(_component_v_divider, {
                                                vertical: "",
                                                class: "border-opacity-100 mx-5"
                                              }),
                                              createVNode(_component_v_icon, { icon: "mdi-calendar-month-outline" }),
                                              createVNode("p", { class: "ml-2" }, "May 10, 2017"),
                                              createVNode(_component_v_divider, {
                                                vertical: "",
                                                class: "border-opacity-100 mx-5"
                                              }),
                                              createVNode(_component_v_icon, { icon: "mdi-comment-text-outline" }),
                                              createVNode("p", { class: "ml-2" }, "2 Comments")
                                            ]),
                                            createVNode("p", {
                                              class: "font-weight-bold mt-3",
                                              style: { "font-size": "25px" },
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, toDisplayString(b.title), 1),
                                            createVNode("p", {
                                              class: "mt-3 article-text",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, toDisplayString(b.article), 1),
                                            createVNode("div", {
                                              class: "mt-5",
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode(_component_nuxt_link, {
                                                to: `blog/${b._id}`,
                                                style: { "text-decoration": "none" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    color: "#e5345b ",
                                                    variant: "outlined"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Continue reading "),
                                                      createVNode(_component_v_icon, {
                                                        end: "",
                                                        icon: "mdi-arrow-right"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1032, ["to"])
                                            ])
                                          ])
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
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "3",
                          class: "sidebar hidden-md-and-down"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { class: "pa-3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div data-v-35bf0b00${_scopeId5}><p style="${ssrRenderStyle({ "font-size": "20px" })}" data-v-35bf0b00${_scopeId5}>Recent Article</p>`);
                                    _push6(ssrRenderComponent(_component_v_divider, { class: "border-opacity-100 my-5" }, null, _parent6, _scopeId5));
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(recent), (r) => {
                                      _push6(`<div class="d-flex mt-10" data-v-35bf0b00${_scopeId5}><div data-v-35bf0b00${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_img, {
                                        width: "120px",
                                        height: "120px",
                                        cover: "",
                                        src: r.image
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div><div class="ms-3" data-v-35bf0b00${_scopeId5}><p style="${ssrRenderStyle({ "max-width": "160px" })}" data-v-35bf0b00${_scopeId5}>${ssrInterpolate(r.title)}</p></div></div>`);
                                    });
                                    _push6(`<!--]--><p class="mt-10" style="${ssrRenderStyle({ "font-size": "20px" })}" data-v-35bf0b00${_scopeId5}>Tags</p>`);
                                    _push6(ssrRenderComponent(_component_v_divider, { class: "border-opacity-100 my-5" }, null, _parent6, _scopeId5));
                                    _push6(`<p data-v-35bf0b00${_scopeId5}>Dancing</p><p data-v-35bf0b00${_scopeId5}>Heel</p><p data-v-35bf0b00${_scopeId5}>Hiking</p><p data-v-35bf0b00${_scopeId5}>Racing</p><p data-v-35bf0b00${_scopeId5}>Running</p><p data-v-35bf0b00${_scopeId5}>Sneakers</p><p class="mt-10" style="${ssrRenderStyle({ "font-size": "20px" })}" data-v-35bf0b00${_scopeId5}>Best Shoe</p>`);
                                    _push6(ssrRenderComponent(_component_v_divider, { class: "border-opacity-100 my-5" }, null, _parent6, _scopeId5));
                                    _push6(`<div class="my-10" data-v-35bf0b00${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_img, { src: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png" }, null, _parent6, _scopeId5));
                                    _push6(`<h2 class="mt-10 text-center" data-v-35bf0b00${_scopeId5}>Messi Addidas</h2>`);
                                    _push6(ssrRenderComponent(_component_v_divider, { class: "border-opacity-100 my-5" }, null, _parent6, _scopeId5));
                                    _push6(`<h2 data-v-35bf0b00${_scopeId5}>$275.00</h2>`);
                                    _push6(ssrRenderComponent(_component_v_rating, {
                                      modelValue: unref(rating),
                                      "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                                      size: "30px",
                                      "bg-color": "#FFCA28",
                                      color: "#FFCA28"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, [
                                        createVNode("p", { style: { "font-size": "20px" } }, "Recent Article"),
                                        createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(recent), (r) => {
                                          return openBlock(), createBlock("div", {
                                            class: "d-flex mt-10",
                                            key: r.id
                                          }, [
                                            createVNode("div", null, [
                                              createVNode(_component_v_img, {
                                                width: "120px",
                                                height: "120px",
                                                cover: "",
                                                src: r.image
                                              }, null, 8, ["src"])
                                            ]),
                                            createVNode("div", { class: "ms-3" }, [
                                              createVNode("p", { style: { "max-width": "160px" } }, toDisplayString(r.title), 1)
                                            ])
                                          ]);
                                        }), 128)),
                                        createVNode("p", {
                                          class: "mt-10",
                                          style: { "font-size": "20px" }
                                        }, "Tags"),
                                        createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                        createVNode("p", null, "Dancing"),
                                        createVNode("p", null, "Heel"),
                                        createVNode("p", null, "Hiking"),
                                        createVNode("p", null, "Racing"),
                                        createVNode("p", null, "Running"),
                                        createVNode("p", null, "Sneakers"),
                                        createVNode("p", {
                                          class: "mt-10",
                                          style: { "font-size": "20px" }
                                        }, "Best Shoe"),
                                        createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                        createVNode("div", { class: "my-10" }, [
                                          createVNode(_component_v_img, { src: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png" }),
                                          createVNode("h2", { class: "mt-10 text-center" }, "Messi Addidas"),
                                          createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                          createVNode("h2", null, "$275.00"),
                                          createVNode(_component_v_rating, {
                                            modelValue: unref(rating),
                                            "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                                            size: "30px",
                                            "bg-color": "#FFCA28",
                                            color: "#FFCA28"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, { class: "pa-3" }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("p", { style: { "font-size": "20px" } }, "Recent Article"),
                                      createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(recent), (r) => {
                                        return openBlock(), createBlock("div", {
                                          class: "d-flex mt-10",
                                          key: r.id
                                        }, [
                                          createVNode("div", null, [
                                            createVNode(_component_v_img, {
                                              width: "120px",
                                              height: "120px",
                                              cover: "",
                                              src: r.image
                                            }, null, 8, ["src"])
                                          ]),
                                          createVNode("div", { class: "ms-3" }, [
                                            createVNode("p", { style: { "max-width": "160px" } }, toDisplayString(r.title), 1)
                                          ])
                                        ]);
                                      }), 128)),
                                      createVNode("p", {
                                        class: "mt-10",
                                        style: { "font-size": "20px" }
                                      }, "Tags"),
                                      createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                      createVNode("p", null, "Dancing"),
                                      createVNode("p", null, "Heel"),
                                      createVNode("p", null, "Hiking"),
                                      createVNode("p", null, "Racing"),
                                      createVNode("p", null, "Running"),
                                      createVNode("p", null, "Sneakers"),
                                      createVNode("p", {
                                        class: "mt-10",
                                        style: { "font-size": "20px" }
                                      }, "Best Shoe"),
                                      createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                      createVNode("div", { class: "my-10" }, [
                                        createVNode(_component_v_img, { src: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png" }),
                                        createVNode("h2", { class: "mt-10 text-center" }, "Messi Addidas"),
                                        createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                        createVNode("h2", null, "$275.00"),
                                        createVNode(_component_v_rating, {
                                          modelValue: unref(rating),
                                          "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                                          size: "30px",
                                          "bg-color": "#FFCA28",
                                          color: "#FFCA28"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
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
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(displayBlogs), (b) => {
                                return openBlock(), createBlock(_component_v_row, { key: b }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: b.image,
                                          width: "100%",
                                          height: "630px",
                                          "data-aos": "zoom-in-up",
                                          "data-aos-delay": "250"
                                        }, null, 8, ["src"]),
                                        createVNode("div", { class: "pa-5" }, [
                                          createVNode("div", {
                                            class: "d-flex",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode(_component_v_icon, { icon: "mdi-account-circle-outline" }),
                                            createVNode("p", { class: "ml-2" }, "Admin"),
                                            createVNode(_component_v_divider, {
                                              vertical: "",
                                              class: "border-opacity-100 mx-5"
                                            }),
                                            createVNode(_component_v_icon, { icon: "mdi-calendar-month-outline" }),
                                            createVNode("p", { class: "ml-2" }, "May 10, 2017"),
                                            createVNode(_component_v_divider, {
                                              vertical: "",
                                              class: "border-opacity-100 mx-5"
                                            }),
                                            createVNode(_component_v_icon, { icon: "mdi-comment-text-outline" }),
                                            createVNode("p", { class: "ml-2" }, "2 Comments")
                                          ]),
                                          createVNode("p", {
                                            class: "font-weight-bold mt-3",
                                            style: { "font-size": "25px" },
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, toDisplayString(b.title), 1),
                                          createVNode("p", {
                                            class: "mt-3 article-text",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, toDisplayString(b.article), 1),
                                          createVNode("div", {
                                            class: "mt-5",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode(_component_nuxt_link, {
                                              to: `blog/${b._id}`,
                                              style: { "text-decoration": "none" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  color: "#e5345b ",
                                                  variant: "outlined"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Continue reading "),
                                                    createVNode(_component_v_icon, {
                                                      end: "",
                                                      icon: "mdi-arrow-right"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])
                                          ])
                                        ])
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
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "3",
                            class: "sidebar hidden-md-and-down"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { class: "pa-3" }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("p", { style: { "font-size": "20px" } }, "Recent Article"),
                                    createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(recent), (r) => {
                                      return openBlock(), createBlock("div", {
                                        class: "d-flex mt-10",
                                        key: r.id
                                      }, [
                                        createVNode("div", null, [
                                          createVNode(_component_v_img, {
                                            width: "120px",
                                            height: "120px",
                                            cover: "",
                                            src: r.image
                                          }, null, 8, ["src"])
                                        ]),
                                        createVNode("div", { class: "ms-3" }, [
                                          createVNode("p", { style: { "max-width": "160px" } }, toDisplayString(r.title), 1)
                                        ])
                                      ]);
                                    }), 128)),
                                    createVNode("p", {
                                      class: "mt-10",
                                      style: { "font-size": "20px" }
                                    }, "Tags"),
                                    createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                    createVNode("p", null, "Dancing"),
                                    createVNode("p", null, "Heel"),
                                    createVNode("p", null, "Hiking"),
                                    createVNode("p", null, "Racing"),
                                    createVNode("p", null, "Running"),
                                    createVNode("p", null, "Sneakers"),
                                    createVNode("p", {
                                      class: "mt-10",
                                      style: { "font-size": "20px" }
                                    }, "Best Shoe"),
                                    createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                    createVNode("div", { class: "my-10" }, [
                                      createVNode(_component_v_img, { src: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png" }),
                                      createVNode("h2", { class: "mt-10 text-center" }, "Messi Addidas"),
                                      createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                      createVNode("h2", null, "$275.00"),
                                      createVNode(_component_v_rating, {
                                        modelValue: unref(rating),
                                        "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                                        size: "30px",
                                        "bg-color": "#FFCA28",
                                        color: "#FFCA28"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_pagination, {
                    length: unref(totalPages),
                    class: "mt-6",
                    modelValue: unref(currentPage),
                    "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h1", {
                      class: "fw-bold mt-10",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, [
                      createTextVNode(" Blogs "),
                      createVNode("span", { style: { "color": "#6b7280" } }, "on latest fashion trends")
                    ]),
                    createVNode(_component_v_row, { class: "mt-15" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "9"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(displayBlogs), (b) => {
                              return openBlock(), createBlock(_component_v_row, { key: b }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: b.image,
                                        width: "100%",
                                        height: "630px",
                                        "data-aos": "zoom-in-up",
                                        "data-aos-delay": "250"
                                      }, null, 8, ["src"]),
                                      createVNode("div", { class: "pa-5" }, [
                                        createVNode("div", {
                                          class: "d-flex",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode(_component_v_icon, { icon: "mdi-account-circle-outline" }),
                                          createVNode("p", { class: "ml-2" }, "Admin"),
                                          createVNode(_component_v_divider, {
                                            vertical: "",
                                            class: "border-opacity-100 mx-5"
                                          }),
                                          createVNode(_component_v_icon, { icon: "mdi-calendar-month-outline" }),
                                          createVNode("p", { class: "ml-2" }, "May 10, 2017"),
                                          createVNode(_component_v_divider, {
                                            vertical: "",
                                            class: "border-opacity-100 mx-5"
                                          }),
                                          createVNode(_component_v_icon, { icon: "mdi-comment-text-outline" }),
                                          createVNode("p", { class: "ml-2" }, "2 Comments")
                                        ]),
                                        createVNode("p", {
                                          class: "font-weight-bold mt-3",
                                          style: { "font-size": "25px" },
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, toDisplayString(b.title), 1),
                                        createVNode("p", {
                                          class: "mt-3 article-text",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, toDisplayString(b.article), 1),
                                        createVNode("div", {
                                          class: "mt-5",
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode(_component_nuxt_link, {
                                            to: `blog/${b._id}`,
                                            style: { "text-decoration": "none" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                color: "#e5345b ",
                                                variant: "outlined"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Continue reading "),
                                                  createVNode(_component_v_icon, {
                                                    end: "",
                                                    icon: "mdi-arrow-right"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ])
                                      ])
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
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "3",
                          class: "sidebar hidden-md-and-down"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { class: "pa-3" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("p", { style: { "font-size": "20px" } }, "Recent Article"),
                                  createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(recent), (r) => {
                                    return openBlock(), createBlock("div", {
                                      class: "d-flex mt-10",
                                      key: r.id
                                    }, [
                                      createVNode("div", null, [
                                        createVNode(_component_v_img, {
                                          width: "120px",
                                          height: "120px",
                                          cover: "",
                                          src: r.image
                                        }, null, 8, ["src"])
                                      ]),
                                      createVNode("div", { class: "ms-3" }, [
                                        createVNode("p", { style: { "max-width": "160px" } }, toDisplayString(r.title), 1)
                                      ])
                                    ]);
                                  }), 128)),
                                  createVNode("p", {
                                    class: "mt-10",
                                    style: { "font-size": "20px" }
                                  }, "Tags"),
                                  createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                  createVNode("p", null, "Dancing"),
                                  createVNode("p", null, "Heel"),
                                  createVNode("p", null, "Hiking"),
                                  createVNode("p", null, "Racing"),
                                  createVNode("p", null, "Running"),
                                  createVNode("p", null, "Sneakers"),
                                  createVNode("p", {
                                    class: "mt-10",
                                    style: { "font-size": "20px" }
                                  }, "Best Shoe"),
                                  createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                  createVNode("div", { class: "my-10" }, [
                                    createVNode(_component_v_img, { src: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png" }),
                                    createVNode("h2", { class: "mt-10 text-center" }, "Messi Addidas"),
                                    createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                    createVNode("h2", null, "$275.00"),
                                    createVNode(_component_v_rating, {
                                      modelValue: unref(rating),
                                      "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                                      size: "30px",
                                      "bg-color": "#FFCA28",
                                      color: "#FFCA28"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(_component_v_pagination, {
                      length: unref(totalPages),
                      class: "mt-6",
                      modelValue: unref(currentPage),
                      "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null
                    }, null, 8, ["length", "modelValue", "onUpdate:modelValue"])
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
                    src: "/images/b2.jpg",
                    height: "250",
                    width: "100%",
                    class: "bg-grey-lighten-2",
                    cover: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-overlay" }, [
                        createVNode("p", {
                          class: "text",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, "#Read More"),
                        createVNode("p", {
                          class: "text-white text-center",
                          "data-aos": "fade-right",
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
                  createVNode("h1", {
                    class: "fw-bold mt-10",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, [
                    createTextVNode(" Blogs "),
                    createVNode("span", { style: { "color": "#6b7280" } }, "on latest fashion trends")
                  ]),
                  createVNode(_component_v_row, { class: "mt-15" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "9"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(displayBlogs), (b) => {
                            return openBlock(), createBlock(_component_v_row, { key: b }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: b.image,
                                      width: "100%",
                                      height: "630px",
                                      "data-aos": "zoom-in-up",
                                      "data-aos-delay": "250"
                                    }, null, 8, ["src"]),
                                    createVNode("div", { class: "pa-5" }, [
                                      createVNode("div", {
                                        class: "d-flex",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode(_component_v_icon, { icon: "mdi-account-circle-outline" }),
                                        createVNode("p", { class: "ml-2" }, "Admin"),
                                        createVNode(_component_v_divider, {
                                          vertical: "",
                                          class: "border-opacity-100 mx-5"
                                        }),
                                        createVNode(_component_v_icon, { icon: "mdi-calendar-month-outline" }),
                                        createVNode("p", { class: "ml-2" }, "May 10, 2017"),
                                        createVNode(_component_v_divider, {
                                          vertical: "",
                                          class: "border-opacity-100 mx-5"
                                        }),
                                        createVNode(_component_v_icon, { icon: "mdi-comment-text-outline" }),
                                        createVNode("p", { class: "ml-2" }, "2 Comments")
                                      ]),
                                      createVNode("p", {
                                        class: "font-weight-bold mt-3",
                                        style: { "font-size": "25px" },
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, toDisplayString(b.title), 1),
                                      createVNode("p", {
                                        class: "mt-3 article-text",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, toDisplayString(b.article), 1),
                                      createVNode("div", {
                                        class: "mt-5",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode(_component_nuxt_link, {
                                          to: `blog/${b._id}`,
                                          style: { "text-decoration": "none" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "#e5345b ",
                                              variant: "outlined"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Continue reading "),
                                                createVNode(_component_v_icon, {
                                                  end: "",
                                                  icon: "mdi-arrow-right"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ])
                                    ])
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
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "3",
                        class: "sidebar hidden-md-and-down"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, { class: "pa-3" }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("p", { style: { "font-size": "20px" } }, "Recent Article"),
                                createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(recent), (r) => {
                                  return openBlock(), createBlock("div", {
                                    class: "d-flex mt-10",
                                    key: r.id
                                  }, [
                                    createVNode("div", null, [
                                      createVNode(_component_v_img, {
                                        width: "120px",
                                        height: "120px",
                                        cover: "",
                                        src: r.image
                                      }, null, 8, ["src"])
                                    ]),
                                    createVNode("div", { class: "ms-3" }, [
                                      createVNode("p", { style: { "max-width": "160px" } }, toDisplayString(r.title), 1)
                                    ])
                                  ]);
                                }), 128)),
                                createVNode("p", {
                                  class: "mt-10",
                                  style: { "font-size": "20px" }
                                }, "Tags"),
                                createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                createVNode("p", null, "Dancing"),
                                createVNode("p", null, "Heel"),
                                createVNode("p", null, "Hiking"),
                                createVNode("p", null, "Racing"),
                                createVNode("p", null, "Running"),
                                createVNode("p", null, "Sneakers"),
                                createVNode("p", {
                                  class: "mt-10",
                                  style: { "font-size": "20px" }
                                }, "Best Shoe"),
                                createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                createVNode("div", { class: "my-10" }, [
                                  createVNode(_component_v_img, { src: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png" }),
                                  createVNode("h2", { class: "mt-10 text-center" }, "Messi Addidas"),
                                  createVNode(_component_v_divider, { class: "border-opacity-100 my-5" }),
                                  createVNode("h2", null, "$275.00"),
                                  createVNode(_component_v_rating, {
                                    modelValue: unref(rating),
                                    "onUpdate:modelValue": ($event) => isRef(rating) ? rating.value = $event : null,
                                    size: "30px",
                                    "bg-color": "#FFCA28",
                                    color: "#FFCA28"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  createVNode(_component_v_pagination, {
                    length: unref(totalPages),
                    class: "mt-6",
                    modelValue: unref(currentPage),
                    "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null
                  }, null, 8, ["length", "modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35bf0b00"]]);

export { index as default };
//# sourceMappingURL=index-081ee217.mjs.map
