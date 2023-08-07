import { u as useRoute } from './server.mjs';
import { withAsyncContext, ref, resolveComponent, withCtx, createVNode, unref, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-cf13354b.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { data: blog } = ([__temp, __restore] = withAsyncContext(() => useFetch(`http://localhost:3002/api/blog/${id}`, "$b6624wP6pv")), __temp = await __temp, __restore(), __temp);
    console.log(blog.value);
    const comments = ref([
      {
        id: 1,
        date: "April 21, 2021",
        name: "Hyein",
        comment: "This what I am looking for great article ma man."
      },
      {
        id: 2,
        date: "December 29, 2020",
        name: "Minji",
        comment: "Hi we are accounting company providing resources for sellers like you, check out this article on sales tax and let us know if it is beneficial to you. https://letsledger.com/blog/taxes/sales-tax-nexus-for-small-businesses/."
      },
      {
        id: 3,
        date: "October 28, 2019",
        name: "Jisoo",
        comment: "Interesting article."
      },
      {
        id: 4,
        date: "June 9, 2020",
        name: "Suzy",
        comment: "Great article."
      },
      {
        id: 5,
        date: "July 8, 2018",
        name: "Jihoo",
        comment: "nice article."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_img, {
              src: "/images/b2.jpg",
              height: "250",
              width: "100%",
              class: "bg-grey-lighten-2",
              cover: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-overlay"${_scopeId2}><p class="text" data-aos="fade-right" data-aos-delay="500"${_scopeId2}>#Read More</p><p class="text-white text-center" data-aos="fade-up" data-aos-delay="500"${_scopeId2}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-overlay" }, [
                      createVNode("p", {
                        class: "text",
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, "#Read More"),
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
            }, _parent2, _scopeId));
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
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, "#Read More"),
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
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_img, {
              src: unref(blog).image,
              height: "450",
              width: "100%",
              class: "bg-grey-lighten-2 mt-10",
              "data-aos": "zoom-in-up",
              "data-aos-delay": "250"
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="mt-8" data-aos="fade-right" data-aos-delay="500"${_scopeId}>${ssrInterpolate(unref(blog).title)}</h1><p style="${ssrRenderStyle({ "color": "grey" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId}>Published At : 02/07/2023</p><div class="d-flex mt-4" data-aos="fade-up" data-aos-delay="500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_icon, {
              icon: "mdi-comment-text-outline",
              color: "#e5345b"
            }, null, _parent2, _scopeId));
            _push2(`<p class="ml-2"${_scopeId}>5 Comments</p></div><p class="mt-10" data-aos="fade-up" data-aos-delay="500"${_scopeId}>${ssrInterpolate(unref(blog).article)}</p><p class="mt-7 font-weight-bold" data-aos="fade-up" data-aos-delay="500"${_scopeId}> \u201CRidiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.\u201D </p><p class="mt-7" data-aos="fade-up" data-aos-delay="500"${_scopeId}> As a result, the store \u201Cremained empty and could not operate from the early hours of the afternoon\u201D on Friday. Dior claims the problem was \u201Camplified\u201D by the event being scheduled on a Friday, \u201Ca day when surely proceeds are [significant]\u201D. It is claimed that the French house is requesting \u20AC100,000 (\xA385,000) in compensation for lost business. According to the letter, if Valentino fails to pay the full amount within 15 days Dior, will \u201Cadopt all the necessary measures to protect its rights\u201D. </p><p class="mt-7" data-aos="fade-up" data-aos-delay="500"${_scopeId}> This article is more than 7 months old Dior v Valentino: row breaks out after Rome show allegedly blocks boutique This article is more than 7 months old Dior reportedly demands \u20AC100,000 compensation from Valentino after Spanish Steps show \u2018hampered\u2019 access to store Fleur Britten Mon 11 Jul 2022 16.43 BST A row has broken out in the world of high fashion after the French house Dior demanded compensation from Italian rival Valentino for allegedly blocking access to a Dior boutique during a show on the Spanish Steps in Rome, according to a claim by fashion website Women\u2019s Wear Daily. Valentino positioned its audience of fashion editors, photographers and celebrities \u2013 among them Naomi Campbell, Kate Hudson and Anne Hathaway \u2013 at the foot of the 18th-century travertine staircase in Piazza di Spagna. The Dior shop on Via Condotti looks on to the piazza. </p><p class="mt-7" data-aos="fade-up" data-aos-delay="500"${_scopeId}> It is claimed that the French house is requesting \u20AC100,000 (\xA385,000) in compensation for lost business. According to the letter, if Valentino fails to pay the full amount within 15 days Dior, will \u201Cadopt all the necessary measures to protect its rights\u201D. Dior claims that Valentino had written to local retailers on 27 June, stating \u201Cguaranteed regular foot traffic to the stores\u201D. Dior maintains this was \u201Cnot reflected in any way\u201D on the night. </p>`);
            _push2(ssrRenderComponent(_component_v_card, { class: "mt-15 pa-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex" data-aos="fade-right" data-aos-delay="500"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_icon, {
                    icon: "mdi-comment-text-outline",
                    color: "#e5345b"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="ml-2"${_scopeId2}>5 Comments</p></div><!--[-->`);
                  ssrRenderList(unref(comments), (c) => {
                    _push3(`<div class="d-flex mt-8"${_scopeId2}><p data-aos="fade-right" data-aos-delay="500"${_scopeId2}>${ssrInterpolate(c.id)}.</p>`);
                    _push3(ssrRenderComponent(_component_v_card, {
                      class: "ml-5 pa-5",
                      width: "100%",
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi-calendar-month-outline",
                            color: "#e5345b"
                          }, null, _parent4, _scopeId3));
                          _push4(`<p class="ml-2"${_scopeId3}>${ssrInterpolate(c.date)}</p>`);
                          _push4(ssrRenderComponent(_component_v_icon, {
                            class: "ml-5",
                            icon: "mdi-account-circle-outline",
                            color: "#e5345b"
                          }, null, _parent4, _scopeId3));
                          _push4(`<p class="ml-2"${_scopeId3}>${ssrInterpolate(c.name)}</p></div>`);
                          _push4(ssrRenderComponent(_component_v_divider, {
                            class: "my-5",
                            style: { "border": "none", "border-top": "2px solid black" }
                          }, null, _parent4, _scopeId3));
                          _push4(`<p${_scopeId3}>${ssrInterpolate(c.comment)}</p>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-calendar-month-outline",
                                color: "#e5345b"
                              }),
                              createVNode("p", { class: "ml-2" }, toDisplayString(c.date), 1),
                              createVNode(_component_v_icon, {
                                class: "ml-5",
                                icon: "mdi-account-circle-outline",
                                color: "#e5345b"
                              }),
                              createVNode("p", { class: "ml-2" }, toDisplayString(c.name), 1)
                            ]),
                            createVNode(_component_v_divider, {
                              class: "my-5",
                              style: { "border": "none", "border-top": "2px solid black" }
                            }),
                            createVNode("p", null, toDisplayString(c.comment), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--><p class="text-uppercase mt-15 font-weight-medium" style="${ssrRenderStyle({ "font-size": "20px" })}" data-aos="fade-right" data-aos-delay="500"${_scopeId2}> Leave a comment </p>`);
                  _push3(ssrRenderComponent(_component_v_form, {
                    class: "mt-5",
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          label: "Name",
                          variant: "outlined",
                          class: "mr-5",
                          style: { "width": "50%" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          label: "Email",
                          variant: "outlined",
                          style: { "width": "50%" }
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_v_textarea, {
                          label: "Comment",
                          variant: "outlined",
                          class: "mt-5",
                          style: { "width": "100%" }
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="d-flex justify-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          class: "mt-5",
                          color: "#e5345b",
                          type: "submit",
                          height: "60px",
                          style: { "color": "white" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Post Comment `);
                            } else {
                              return [
                                createTextVNode(" Post Comment ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex" }, [
                            createVNode(_component_v_text_field, {
                              label: "Name",
                              variant: "outlined",
                              class: "mr-5",
                              style: { "width": "50%" }
                            }),
                            createVNode(_component_v_text_field, {
                              label: "Email",
                              variant: "outlined",
                              style: { "width": "50%" }
                            })
                          ]),
                          createVNode(_component_v_textarea, {
                            label: "Comment",
                            variant: "outlined",
                            class: "mt-5",
                            style: { "width": "100%" }
                          }),
                          createVNode("div", { class: "d-flex justify-end" }, [
                            createVNode(_component_v_btn, {
                              class: "mt-5",
                              color: "#e5345b",
                              type: "submit",
                              height: "60px",
                              style: { "color": "white" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Post Comment ")
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
                    createVNode("div", {
                      class: "d-flex",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, [
                      createVNode(_component_v_icon, {
                        icon: "mdi-comment-text-outline",
                        color: "#e5345b"
                      }),
                      createVNode("p", { class: "ml-2" }, "5 Comments")
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(comments), (c) => {
                      return openBlock(), createBlock("div", {
                        class: "d-flex mt-8",
                        key: c
                      }, [
                        createVNode("p", {
                          "data-aos": "fade-right",
                          "data-aos-delay": "500"
                        }, toDisplayString(c.id) + ".", 1),
                        createVNode(_component_v_card, {
                          class: "ml-5 pa-5",
                          width: "100%",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi-calendar-month-outline",
                                color: "#e5345b"
                              }),
                              createVNode("p", { class: "ml-2" }, toDisplayString(c.date), 1),
                              createVNode(_component_v_icon, {
                                class: "ml-5",
                                icon: "mdi-account-circle-outline",
                                color: "#e5345b"
                              }),
                              createVNode("p", { class: "ml-2" }, toDisplayString(c.name), 1)
                            ]),
                            createVNode(_component_v_divider, {
                              class: "my-5",
                              style: { "border": "none", "border-top": "2px solid black" }
                            }),
                            createVNode("p", null, toDisplayString(c.comment), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]);
                    }), 128)),
                    createVNode("p", {
                      class: "text-uppercase mt-15 font-weight-medium",
                      style: { "font-size": "20px" },
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, " Leave a comment "),
                    createVNode(_component_v_form, {
                      class: "mt-5",
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex" }, [
                          createVNode(_component_v_text_field, {
                            label: "Name",
                            variant: "outlined",
                            class: "mr-5",
                            style: { "width": "50%" }
                          }),
                          createVNode(_component_v_text_field, {
                            label: "Email",
                            variant: "outlined",
                            style: { "width": "50%" }
                          })
                        ]),
                        createVNode(_component_v_textarea, {
                          label: "Comment",
                          variant: "outlined",
                          class: "mt-5",
                          style: { "width": "100%" }
                        }),
                        createVNode("div", { class: "d-flex justify-end" }, [
                          createVNode(_component_v_btn, {
                            class: "mt-5",
                            color: "#e5345b",
                            type: "submit",
                            height: "60px",
                            style: { "color": "white" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Post Comment ")
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
              createVNode(_component_v_img, {
                src: unref(blog).image,
                height: "450",
                width: "100%",
                class: "bg-grey-lighten-2 mt-10",
                "data-aos": "zoom-in-up",
                "data-aos-delay": "250"
              }, null, 8, ["src"]),
              createVNode("h1", {
                class: "mt-8",
                "data-aos": "fade-right",
                "data-aos-delay": "500"
              }, toDisplayString(unref(blog).title), 1),
              createVNode("p", {
                style: { "color": "grey" },
                "data-aos": "fade-up",
                "data-aos-delay": "500"
              }, "Published At : 02/07/2023"),
              createVNode("div", {
                class: "d-flex mt-4",
                "data-aos": "fade-up",
                "data-aos-delay": "500"
              }, [
                createVNode(_component_v_icon, {
                  icon: "mdi-comment-text-outline",
                  color: "#e5345b"
                }),
                createVNode("p", { class: "ml-2" }, "5 Comments")
              ]),
              createVNode("p", {
                class: "mt-10",
                "data-aos": "fade-up",
                "data-aos-delay": "500"
              }, toDisplayString(unref(blog).article), 1),
              createVNode("p", {
                class: "mt-7 font-weight-bold",
                "data-aos": "fade-up",
                "data-aos-delay": "500"
              }, " \u201CRidiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.\u201D "),
              createVNode("p", {
                class: "mt-7",
                "data-aos": "fade-up",
                "data-aos-delay": "500"
              }, " As a result, the store \u201Cremained empty and could not operate from the early hours of the afternoon\u201D on Friday. Dior claims the problem was \u201Camplified\u201D by the event being scheduled on a Friday, \u201Ca day when surely proceeds are [significant]\u201D. It is claimed that the French house is requesting \u20AC100,000 (\xA385,000) in compensation for lost business. According to the letter, if Valentino fails to pay the full amount within 15 days Dior, will \u201Cadopt all the necessary measures to protect its rights\u201D. "),
              createVNode("p", {
                class: "mt-7",
                "data-aos": "fade-up",
                "data-aos-delay": "500"
              }, " This article is more than 7 months old Dior v Valentino: row breaks out after Rome show allegedly blocks boutique This article is more than 7 months old Dior reportedly demands \u20AC100,000 compensation from Valentino after Spanish Steps show \u2018hampered\u2019 access to store Fleur Britten Mon 11 Jul 2022 16.43 BST A row has broken out in the world of high fashion after the French house Dior demanded compensation from Italian rival Valentino for allegedly blocking access to a Dior boutique during a show on the Spanish Steps in Rome, according to a claim by fashion website Women\u2019s Wear Daily. Valentino positioned its audience of fashion editors, photographers and celebrities \u2013 among them Naomi Campbell, Kate Hudson and Anne Hathaway \u2013 at the foot of the 18th-century travertine staircase in Piazza di Spagna. The Dior shop on Via Condotti looks on to the piazza. "),
              createVNode("p", {
                class: "mt-7",
                "data-aos": "fade-up",
                "data-aos-delay": "500"
              }, " It is claimed that the French house is requesting \u20AC100,000 (\xA385,000) in compensation for lost business. According to the letter, if Valentino fails to pay the full amount within 15 days Dior, will \u201Cadopt all the necessary measures to protect its rights\u201D. Dior claims that Valentino had written to local retailers on 27 June, stating \u201Cguaranteed regular foot traffic to the stores\u201D. Dior maintains this was \u201Cnot reflected in any way\u201D on the night. "),
              createVNode(_component_v_card, { class: "mt-15 pa-5" }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "d-flex",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, [
                    createVNode(_component_v_icon, {
                      icon: "mdi-comment-text-outline",
                      color: "#e5345b"
                    }),
                    createVNode("p", { class: "ml-2" }, "5 Comments")
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(comments), (c) => {
                    return openBlock(), createBlock("div", {
                      class: "d-flex mt-8",
                      key: c
                    }, [
                      createVNode("p", {
                        "data-aos": "fade-right",
                        "data-aos-delay": "500"
                      }, toDisplayString(c.id) + ".", 1),
                      createVNode(_component_v_card, {
                        class: "ml-5 pa-5",
                        width: "100%",
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi-calendar-month-outline",
                              color: "#e5345b"
                            }),
                            createVNode("p", { class: "ml-2" }, toDisplayString(c.date), 1),
                            createVNode(_component_v_icon, {
                              class: "ml-5",
                              icon: "mdi-account-circle-outline",
                              color: "#e5345b"
                            }),
                            createVNode("p", { class: "ml-2" }, toDisplayString(c.name), 1)
                          ]),
                          createVNode(_component_v_divider, {
                            class: "my-5",
                            style: { "border": "none", "border-top": "2px solid black" }
                          }),
                          createVNode("p", null, toDisplayString(c.comment), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]);
                  }), 128)),
                  createVNode("p", {
                    class: "text-uppercase mt-15 font-weight-medium",
                    style: { "font-size": "20px" },
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, " Leave a comment "),
                  createVNode(_component_v_form, {
                    class: "mt-5",
                    "data-aos": "fade-up",
                    "data-aos-delay": "500"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex" }, [
                        createVNode(_component_v_text_field, {
                          label: "Name",
                          variant: "outlined",
                          class: "mr-5",
                          style: { "width": "50%" }
                        }),
                        createVNode(_component_v_text_field, {
                          label: "Email",
                          variant: "outlined",
                          style: { "width": "50%" }
                        })
                      ]),
                      createVNode(_component_v_textarea, {
                        label: "Comment",
                        variant: "outlined",
                        class: "mt-5",
                        style: { "width": "100%" }
                      }),
                      createVNode("div", { class: "d-flex justify-end" }, [
                        createVNode(_component_v_btn, {
                          class: "mt-5",
                          color: "#e5345b",
                          type: "submit",
                          height: "60px",
                          style: { "color": "white" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Post Comment ")
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-c18ea9d5.mjs.map
