import { ref, resolveComponent, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      {
        title: "Free Shipping",
        image: "/images/f1.png"
      },
      {
        title: "Online Order",
        image: "/images/f2.png"
      },
      {
        title: "Save Money",
        image: "/images/f3.png"
      },
      {
        title: "Promotions",
        image: "/images/f4.png"
      },
      {
        title: "Happy Sell",
        image: "/images/f5.png"
      },
      {
        title: "F24/7 Support",
        image: "/images/f6.png"
      }
    ]);
    const instagram = ref([
      {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram2.jpg?v=15258598092433906800"
      },
      {
        id: 2,
        image: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/bg-blog.jpg?v=1613769904"
      },
      {
        id: 3,
        image: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram4.jpg?v=4815545228466784132"
      },
      {
        id: 4,
        image: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram5.jpg?v=15130270389561427225"
      },
      {
        id: 5,
        image: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram6.jpg?v=6913742429301337905"
      },
      {
        id: 6,
        image: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram7.jpg?v=2228065968177078398"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_main = resolveComponent("v-main");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
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
                        _push4(`<div class="text-overlay" data-v-0a7881f3${_scopeId3}><p class="text" data-aos="fade-right" data-aos-delay="500" data-v-0a7881f3${_scopeId3}>#KnowUs</p><p class="text-white text-center" data-aos="fade-up" data-aos-delay="500" data-v-0a7881f3${_scopeId3}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overlay" }, [
                            createVNode("p", {
                              class: "text",
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, "#KnowUs"),
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
                          }, "#KnowUs"),
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
                  _push3(`<h1 data-aos="fade-right" data-aos-delay="500" class="mt-5" style="${ssrRenderStyle({ "font-size": "50px" })}" data-v-0a7881f3${_scopeId2}> About Us </h1>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="font-weight-bold" data-v-0a7881f3${_scopeId4}> Founded in 1986, I.D. Jewelry, LLC, a family owned &amp; operated business has become a house-hold name in states all over the USA as well as countries all over the world. </p><p class="mt-10" data-v-0a7881f3${_scopeId4}> For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond. </p><p class="mt-10" data-v-0a7881f3${_scopeId4}> Based in the heart of New York\u2019s Diamond District, also known as the NYC diamond district, I. D. Jewelry has some of the most competitively priced in the market. It is our goal to supply our clients. </p><div style="${ssrRenderStyle({ "border-left": "#e5345b 4px solid" })}" class="mt-10" data-v-0a7881f3${_scopeId4}><p class="ms-5" data-v-0a7881f3${_scopeId4}> Low price best shoes Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. Etiam pretium varius quam in aliquam. Curabitur malesuada elit sed enim placerat, vitae interdum erat cursus. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. </p></div>`);
                            } else {
                              return [
                                createVNode("p", { class: "font-weight-bold" }, " Founded in 1986, I.D. Jewelry, LLC, a family owned & operated business has become a house-hold name in states all over the USA as well as countries all over the world. "),
                                createVNode("p", { class: "mt-10" }, " For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond. "),
                                createVNode("p", { class: "mt-10" }, " Based in the heart of New York\u2019s Diamond District, also known as the NYC diamond district, I. D. Jewelry has some of the most competitively priced in the market. It is our goal to supply our clients. "),
                                createVNode("div", {
                                  style: { "border-left": "#e5345b 4px solid" },
                                  class: "mt-10"
                                }, [
                                  createVNode("p", { class: "ms-5" }, " Low price best shoes Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. Etiam pretium varius quam in aliquam. Curabitur malesuada elit sed enim placerat, vitae interdum erat cursus. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6",
                          "data-aos": "zoom-in-up",
                          "data-aos-delay": "500"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_img, {
                                src: "https://cdn.shopify.com/s/files/1/0616/7376/7164/files/bg02.jpg?v=1640859428",
                                width: "100%",
                                height: "550",
                                class: "about1-img"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_img, {
                                  src: "https://cdn.shopify.com/s/files/1/0616/7376/7164/files/bg02.jpg?v=1640859428",
                                  width: "100%",
                                  height: "550",
                                  class: "about1-img"
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
                            md: "6",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "font-weight-bold" }, " Founded in 1986, I.D. Jewelry, LLC, a family owned & operated business has become a house-hold name in states all over the USA as well as countries all over the world. "),
                              createVNode("p", { class: "mt-10" }, " For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond. "),
                              createVNode("p", { class: "mt-10" }, " Based in the heart of New York\u2019s Diamond District, also known as the NYC diamond district, I. D. Jewelry has some of the most competitively priced in the market. It is our goal to supply our clients. "),
                              createVNode("div", {
                                style: { "border-left": "#e5345b 4px solid" },
                                class: "mt-10"
                              }, [
                                createVNode("p", { class: "ms-5" }, " Low price best shoes Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. Etiam pretium varius quam in aliquam. Curabitur malesuada elit sed enim placerat, vitae interdum erat cursus. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6",
                            "data-aos": "zoom-in-up",
                            "data-aos-delay": "500"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                src: "https://cdn.shopify.com/s/files/1/0616/7376/7164/files/bg02.jpg?v=1640859428",
                                width: "100%",
                                height: "550",
                                class: "about1-img"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-15" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6",
                          "data-aos": "zoom-in-up",
                          "data-aos-delay": "500"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_img, {
                                src: "https://htmldemo.net/shome/shome/assets/img/about/1.webp",
                                width: "100%",
                                height: "350",
                                class: "about1-img"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_img, {
                                  src: "https://htmldemo.net/shome/shome/assets/img/about/1.webp",
                                  width: "100%",
                                  height: "350",
                                  class: "about1-img"
                                })
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
                              _push5(`<p style="${ssrRenderStyle({ "font-size": "50px" })}" data-aos="fade-right" data-aos-delay="500" data-v-0a7881f3${_scopeId4}> Smart Life </p><p class="font-weight-bold" style="${ssrRenderStyle({ "font-size": "50px" })}" data-aos="fade-right" data-aos-delay="500" data-v-0a7881f3${_scopeId4}> With Smart Shoes </p><p class="mt-5" data-aos="fade-up" data-aos-delay="500" data-v-0a7881f3${_scopeId4}> Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our Ciloe Brands in more than 30 sizes \u2013 and we&#39;re committed to providing all sizes at the same price \u2013 so you can be confident we\u2019ve got the perfect thing for you. We\u2019re also proud to partner with GLAAD, one of the biggest voices in LGBTQ activism, on a gender-neutral collection to unite in accelerating acceptance. </p>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "#e5345b",
                                class: "text-white mt-12",
                                style: { "width": "200px", "height": "60px" },
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Contact Us`);
                                  } else {
                                    return [
                                      createTextVNode("Contact Us")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("p", {
                                  style: { "font-size": "50px" },
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " Smart Life "),
                                createVNode("p", {
                                  class: "font-weight-bold",
                                  style: { "font-size": "50px" },
                                  "data-aos": "fade-right",
                                  "data-aos-delay": "500"
                                }, " With Smart Shoes "),
                                createVNode("p", {
                                  class: "mt-5",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, " Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our Ciloe Brands in more than 30 sizes \u2013 and we're committed to providing all sizes at the same price \u2013 so you can be confident we\u2019ve got the perfect thing for you. We\u2019re also proud to partner with GLAAD, one of the biggest voices in LGBTQ activism, on a gender-neutral collection to unite in accelerating acceptance. "),
                                createVNode(_component_v_btn, {
                                  color: "#e5345b",
                                  class: "text-white mt-12",
                                  style: { "width": "200px", "height": "60px" },
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Contact Us")
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
                            md: "6",
                            "data-aos": "zoom-in-up",
                            "data-aos-delay": "500"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                src: "https://htmldemo.net/shome/shome/assets/img/about/1.webp",
                                width: "100%",
                                height: "350",
                                class: "about1-img"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", {
                                style: { "font-size": "50px" },
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " Smart Life "),
                              createVNode("p", {
                                class: "font-weight-bold",
                                style: { "font-size": "50px" },
                                "data-aos": "fade-right",
                                "data-aos-delay": "500"
                              }, " With Smart Shoes "),
                              createVNode("p", {
                                class: "mt-5",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, " Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our Ciloe Brands in more than 30 sizes \u2013 and we're committed to providing all sizes at the same price \u2013 so you can be confident we\u2019ve got the perfect thing for you. We\u2019re also proud to partner with GLAAD, one of the biggest voices in LGBTQ activism, on a gender-neutral collection to unite in accelerating acceptance. "),
                              createVNode(_component_v_btn, {
                                color: "#e5345b",
                                class: "text-white mt-12",
                                style: { "width": "200px", "height": "60px" },
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Contact Us")
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
                  _push3(ssrRenderComponent(_component_v_img, {
                    src: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/bg-video.jpg?v=1613749308",
                    class: "mt-15",
                    height: "500px",
                    width: "100%",
                    cover: "",
                    "data-aos": "zoom-in-up",
                    "data-aos-delay": "500"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-overlayb" data-v-0a7881f3${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          variant: "outlined",
                          icon: "mdi-play",
                          style: { "width": "80px", "height": "80px", "border-radius": "50%" }
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overlayb" }, [
                            createVNode(_component_v_btn, {
                              variant: "outlined",
                              icon: "mdi-play",
                              style: { "width": "80px", "height": "80px", "border-radius": "50%" }
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h1", {
                      "data-aos": "fade-right",
                      "data-aos-delay": "500",
                      class: "mt-5",
                      style: { "font-size": "50px" }
                    }, " About Us "),
                    createVNode(_component_v_row, { class: "mt-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "font-weight-bold" }, " Founded in 1986, I.D. Jewelry, LLC, a family owned & operated business has become a house-hold name in states all over the USA as well as countries all over the world. "),
                            createVNode("p", { class: "mt-10" }, " For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond. "),
                            createVNode("p", { class: "mt-10" }, " Based in the heart of New York\u2019s Diamond District, also known as the NYC diamond district, I. D. Jewelry has some of the most competitively priced in the market. It is our goal to supply our clients. "),
                            createVNode("div", {
                              style: { "border-left": "#e5345b 4px solid" },
                              class: "mt-10"
                            }, [
                              createVNode("p", { class: "ms-5" }, " Low price best shoes Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. Etiam pretium varius quam in aliquam. Curabitur malesuada elit sed enim placerat, vitae interdum erat cursus. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6",
                          "data-aos": "zoom-in-up",
                          "data-aos-delay": "500"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_img, {
                              src: "https://cdn.shopify.com/s/files/1/0616/7376/7164/files/bg02.jpg?v=1640859428",
                              width: "100%",
                              height: "550",
                              class: "about1-img"
                            })
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
                          md: "6",
                          "data-aos": "zoom-in-up",
                          "data-aos-delay": "500"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_img, {
                              src: "https://htmldemo.net/shome/shome/assets/img/about/1.webp",
                              width: "100%",
                              height: "350",
                              class: "about1-img"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", {
                              style: { "font-size": "50px" },
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " Smart Life "),
                            createVNode("p", {
                              class: "font-weight-bold",
                              style: { "font-size": "50px" },
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " With Smart Shoes "),
                            createVNode("p", {
                              class: "mt-5",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, " Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our Ciloe Brands in more than 30 sizes \u2013 and we're committed to providing all sizes at the same price \u2013 so you can be confident we\u2019ve got the perfect thing for you. We\u2019re also proud to partner with GLAAD, one of the biggest voices in LGBTQ activism, on a gender-neutral collection to unite in accelerating acceptance. "),
                            createVNode(_component_v_btn, {
                              color: "#e5345b",
                              class: "text-white mt-12",
                              style: { "width": "200px", "height": "60px" },
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Contact Us")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_img, {
                      src: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/bg-video.jpg?v=1613749308",
                      class: "mt-15",
                      height: "500px",
                      width: "100%",
                      cover: "",
                      "data-aos": "zoom-in-up",
                      "data-aos-delay": "500"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-overlayb" }, [
                          createVNode(_component_v_btn, {
                            variant: "outlined",
                            icon: "mdi-play",
                            style: { "width": "80px", "height": "80px", "border-radius": "50%" }
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
            _push2(ssrRenderComponent(_component_v_card, {
              class: "mt-15 pa-5",
              flat: "",
              color: "#f4f4f4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-column justify-center" data-v-0a7881f3${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_icon, {
                    icon: "mdi-instagram",
                    class: "mx-auto",
                    style: { "font-size": "50px" },
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-center font-weight-bold mt-2" style="${ssrRenderStyle({ "font-size": "50px" })}" data-aos="fade-right" data-aos-delay="500" data-v-0a7881f3${_scopeId2}> # Instagram </p></div><div data-v-0a7881f3${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "3",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_img, {
                                src: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram1.jpg?v=15498024826686967000\\",
                                width: "100%",
                                height: "525px",
                                cover: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_img, {
                                  src: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram1.jpg?v=15498024826686967000\\",
                                  width: "100%",
                                  height: "525px",
                                  cover: ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(instagram), (insta) => {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "4",
                                        key: insta.id,
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: insta.image,
                                              width: "100%",
                                              height: "250px",
                                              cover: ""
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: insta.image,
                                                width: "100%",
                                                height: "250px",
                                                cover: ""
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(instagram), (insta) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          cols: "12",
                                          md: "4",
                                          key: insta.id,
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: insta.image,
                                              width: "100%",
                                              height: "250px",
                                              cover: ""
                                            }, null, 8, ["src"])
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
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(instagram), (insta) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        cols: "12",
                                        md: "4",
                                        key: insta.id,
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: insta.image,
                                            width: "100%",
                                            height: "250px",
                                            cover: ""
                                          }, null, 8, ["src"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "3",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                src: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram1.jpg?v=15498024826686967000\\",
                                width: "100%",
                                height: "525px",
                                cover: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(instagram), (insta) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      cols: "12",
                                      md: "4",
                                      key: insta.id,
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: insta.image,
                                          width: "100%",
                                          height: "250px",
                                          cover: ""
                                        }, null, 8, ["src"])
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex flex-column justify-center" }, [
                      createVNode(_component_v_icon, {
                        icon: "mdi-instagram",
                        class: "mx-auto",
                        style: { "font-size": "50px" },
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }),
                      createVNode("p", {
                        class: "text-center font-weight-bold mt-2",
                        style: { "font-size": "50px" },
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, " # Instagram ")
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_v_row, { class: "mt-10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "3",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                src: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram1.jpg?v=15498024826686967000\\",
                                width: "100%",
                                height: "525px",
                                cover: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(instagram), (insta) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      cols: "12",
                                      md: "4",
                                      key: insta.id,
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: insta.image,
                                          width: "100%",
                                          height: "250px",
                                          cover: ""
                                        }, null, 8, ["src"])
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
                    ])
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
                        }, "#KnowUs"),
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
                  createVNode("h1", {
                    "data-aos": "fade-right",
                    "data-aos-delay": "500",
                    class: "mt-5",
                    style: { "font-size": "50px" }
                  }, " About Us "),
                  createVNode(_component_v_row, { class: "mt-5" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "font-weight-bold" }, " Founded in 1986, I.D. Jewelry, LLC, a family owned & operated business has become a house-hold name in states all over the USA as well as countries all over the world. "),
                          createVNode("p", { class: "mt-10" }, " For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond. "),
                          createVNode("p", { class: "mt-10" }, " Based in the heart of New York\u2019s Diamond District, also known as the NYC diamond district, I. D. Jewelry has some of the most competitively priced in the market. It is our goal to supply our clients. "),
                          createVNode("div", {
                            style: { "border-left": "#e5345b 4px solid" },
                            class: "mt-10"
                          }, [
                            createVNode("p", { class: "ms-5" }, " Low price best shoes Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. Etiam pretium varius quam in aliquam. Curabitur malesuada elit sed enim placerat, vitae interdum erat cursus. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequate. ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        "data-aos": "zoom-in-up",
                        "data-aos-delay": "500"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_img, {
                            src: "https://cdn.shopify.com/s/files/1/0616/7376/7164/files/bg02.jpg?v=1640859428",
                            width: "100%",
                            height: "550",
                            class: "about1-img"
                          })
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
                        md: "6",
                        "data-aos": "zoom-in-up",
                        "data-aos-delay": "500"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_img, {
                            src: "https://htmldemo.net/shome/shome/assets/img/about/1.webp",
                            width: "100%",
                            height: "350",
                            class: "about1-img"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", {
                            style: { "font-size": "50px" },
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, " Smart Life "),
                          createVNode("p", {
                            class: "font-weight-bold",
                            style: { "font-size": "50px" },
                            "data-aos": "fade-right",
                            "data-aos-delay": "500"
                          }, " With Smart Shoes "),
                          createVNode("p", {
                            class: "mt-5",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, " Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our Ciloe Brands in more than 30 sizes \u2013 and we're committed to providing all sizes at the same price \u2013 so you can be confident we\u2019ve got the perfect thing for you. We\u2019re also proud to partner with GLAAD, one of the biggest voices in LGBTQ activism, on a gender-neutral collection to unite in accelerating acceptance. "),
                          createVNode(_component_v_btn, {
                            color: "#e5345b",
                            class: "text-white mt-12",
                            style: { "width": "200px", "height": "60px" },
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Contact Us")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_img, {
                    src: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/bg-video.jpg?v=1613749308",
                    class: "mt-15",
                    height: "500px",
                    width: "100%",
                    cover: "",
                    "data-aos": "zoom-in-up",
                    "data-aos-delay": "500"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-overlayb" }, [
                        createVNode(_component_v_btn, {
                          variant: "outlined",
                          icon: "mdi-play",
                          style: { "width": "80px", "height": "80px", "border-radius": "50%" }
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_card, {
                class: "mt-15 pa-5",
                flat: "",
                color: "#f4f4f4"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex flex-column justify-center" }, [
                    createVNode(_component_v_icon, {
                      icon: "mdi-instagram",
                      class: "mx-auto",
                      style: { "font-size": "50px" },
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }),
                    createVNode("p", {
                      class: "text-center font-weight-bold mt-2",
                      style: { "font-size": "50px" },
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, " # Instagram ")
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_v_row, { class: "mt-10" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "3",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_img, {
                              src: "https://cdn.shopify.com/s/files/1/0145/5613/5478/files/instagram1.jpg?v=15498024826686967000\\",
                              width: "100%",
                              height: "525px",
                              cover: ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(instagram), (insta) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    md: "4",
                                    key: insta.id,
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: insta.image,
                                        width: "100%",
                                        height: "250px",
                                        cover: ""
                                      }, null, 8, ["src"])
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
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a7881f3"]]);

export { about as default };
//# sourceMappingURL=about-373d5226.mjs.map
