import { ref, computed, resolveComponent, withCtx, createVNode, unref, isRef, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { a as useStore, n as navigateTo } from './server.mjs';
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
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const phoneNumber = ref("");
    const address = ref("");
    const city = ref("");
    const district = ref("");
    const country = ref("");
    const firstnameRules = [
      (v) => !!v || "First name is required",
      (v) => v && v.length <= 100 || "First name must be less than 100"
    ];
    const lastnameRules = [
      (v) => !!v || "Last name is required",
      (v) => v && v.length <= 100 || "Last name must be less than 100"
    ];
    const emailRules = [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      (v) => v && v.length <= 100 || "E-mail must be less than 100"
    ];
    const phoneNumberRules = [
      (v) => !!v || "Phone number is required",
      (v) => v && v.length <= 100 || "Phone number must be less than 100",
      (v) => /^\d+$/.test(v) || "Phone number must be number"
    ];
    const addressRules = [
      (v) => !!v || "Address is required",
      (v) => v && v.length <= 100 || "Address must be less than 100"
    ];
    const cityRules = [
      (v) => !!v || "City is required",
      (v) => v && v.length <= 100 || "City must be less than 100"
    ];
    const districtRules = [
      (v) => !!v || "District is required",
      (v) => v && v.length <= 100 || "District must be less than 100"
    ];
    const countryRules = [
      (v) => !!v || "Country is required",
      (v) => v && v.length <= 100 || "Country must be less than 100"
    ];
    const formatNumber = (number) => {
      return Number(number).toFixed(2);
    };
    const valid = ref(false);
    const paypalLoaded = ref(false);
    const carts = computed(() => {
      return store.state.carts;
    });
    let orderItems = [];
    carts.value.forEach((cart) => {
      orderItems.push({
        name: cart.product.name,
        price: cart.product.price,
        qty: cart.quantity,
        image: cart.product.image,
        product: cart.product._id
      });
    });
    const totalPrice = computed(() => {
      return store.getters.totalPrice;
    });
    const handleCheckout = () => {
      const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=AQPoC9EOinXnLoH3gdHHrlPYtU10WqZmxMgZ28GGIp1H873kI9bGWncgeFr5pGc4tXwveEtEBzfpc7-0";
      script.onload = () => {
        paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPrice.value.toString()
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const token = Cookies.get("token");
            console.log(carts.value);
            await fetch("http://18.208.219.245:3002/api/orders", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({
                orderItems,
                shippingAddress: {
                  address: address.value,
                  city: city.value,
                  postalCode: "94111",
                  country: country.value
                },
                paymentMethod: "paypal",
                totalPrice: totalPrice.value,
                taxPrice: 0,
                shippingPrice: 0
              })
            });
            store.commit("clearCard");
            navigateTo("/thanksyou");
          }
        }).render("#paypal-button-container");
        paypalLoaded.value = true;
      };
      document.body.appendChild(script);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_main = resolveComponent("v-main");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_badge = resolveComponent("v-badge");
      const _component_v_btn = resolveComponent("v-btn");
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
                        _push4(`<div class="text-overlay"${_scopeId3}><p class="text" data-aos="fade-right" data-aos-delay="500"${_scopeId3}> #Checkout </p><p class="text-white text-center" data-aos="fade-up" data-aos-delay="500"${_scopeId3}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overlay" }, [
                            createVNode("p", {
                              class: "text",
                              "data-aos": "fade-right",
                              "data-aos-delay": "500"
                            }, " #Checkout "),
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
                          }, " #Checkout "),
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
                  _push3(`<h1 class="fw-bold mt-5 fadeRight" data-aos="fade-right" data-aos-delay="500"${_scopeId2}> Billing <span style="${ssrRenderStyle({ "color": "#6b7280" })}"${_scopeId2}>Details</span></h1>`);
                  _push3(ssrRenderComponent(_component_v_form, {
                    modelValue: unref(valid),
                    "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                    onSubmit: handleCheckout
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "8",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card, { class: "pa-5 mt-10" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        modelValue: unref(firstname),
                                                        "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                                        rules: firstnameRules,
                                                        counter: 100,
                                                        label: "First Name",
                                                        required: "",
                                                        variant: "outlined"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: unref(firstname),
                                                          "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                                          rules: firstnameRules,
                                                          counter: 100,
                                                          label: "First Name",
                                                          required: "",
                                                          variant: "outlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        modelValue: unref(lastname),
                                                        "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                                        rules: lastnameRules,
                                                        counter: 100,
                                                        label: "Last Name",
                                                        required: "",
                                                        variant: "outlined"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: unref(lastname),
                                                          "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                                          rules: lastnameRules,
                                                          counter: 100,
                                                          label: "Last Name",
                                                          required: "",
                                                          variant: "outlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: unref(firstname),
                                                        "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                                        rules: firstnameRules,
                                                        counter: 100,
                                                        label: "First Name",
                                                        required: "",
                                                        variant: "outlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: unref(lastname),
                                                        "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                                        rules: lastnameRules,
                                                        counter: 100,
                                                        label: "Last Name",
                                                        required: "",
                                                        variant: "outlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            modelValue: unref(email),
                                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                            rules: emailRules,
                                            counter: 100,
                                            label: "Email Address",
                                            required: "",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            modelValue: unref(phoneNumber),
                                            "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                            rules: phoneNumberRules,
                                            counter: 100,
                                            label: "Phone Number",
                                            required: "",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            modelValue: unref(address),
                                            "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                            rules: addressRules,
                                            counter: 100,
                                            label: "Address",
                                            required: "",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_row, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        modelValue: unref(city),
                                                        "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                                                        rules: cityRules,
                                                        counter: 100,
                                                        label: "City/Province",
                                                        required: "",
                                                        variant: "outlined"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: unref(city),
                                                          "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                                                          rules: cityRules,
                                                          counter: 100,
                                                          label: "City/Province",
                                                          required: "",
                                                          variant: "outlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_text_field, {
                                                        modelValue: unref(district),
                                                        "onUpdate:modelValue": ($event) => isRef(district) ? district.value = $event : null,
                                                        rules: districtRules,
                                                        counter: 100,
                                                        label: "District/Khan",
                                                        required: "",
                                                        variant: "outlined"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: unref(district),
                                                          "onUpdate:modelValue": ($event) => isRef(district) ? district.value = $event : null,
                                                          rules: districtRules,
                                                          counter: 100,
                                                          label: "District/Khan",
                                                          required: "",
                                                          variant: "outlined"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: unref(city),
                                                        "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                                                        rules: cityRules,
                                                        counter: 100,
                                                        label: "City/Province",
                                                        required: "",
                                                        variant: "outlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: unref(district),
                                                        "onUpdate:modelValue": ($event) => isRef(district) ? district.value = $event : null,
                                                        rules: districtRules,
                                                        counter: 100,
                                                        label: "District/Khan",
                                                        required: "",
                                                        variant: "outlined"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            modelValue: unref(country),
                                            "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                            rules: countryRules,
                                            counter: 100,
                                            label: "Country",
                                            required: "",
                                            variant: "outlined"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<div class="d-flex align-center"${_scopeId6}><div${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_checkbox, {
                                            class: "mt-5",
                                            style: { "font-size": "15px" }
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_img, {
                                            height: "80px",
                                            width: "160px",
                                            class: "ms-4",
                                            src: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                        } else {
                                          return [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: unref(firstname),
                                                      "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                                      rules: firstnameRules,
                                                      counter: 100,
                                                      label: "First Name",
                                                      required: "",
                                                      variant: "outlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: unref(lastname),
                                                      "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                                      rules: lastnameRules,
                                                      counter: 100,
                                                      label: "Last Name",
                                                      required: "",
                                                      variant: "outlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(email),
                                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                              rules: emailRules,
                                              counter: 100,
                                              label: "Email Address",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(phoneNumber),
                                              "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                              rules: phoneNumberRules,
                                              counter: 100,
                                              label: "Phone Number",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(address),
                                              "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                              rules: addressRules,
                                              counter: 100,
                                              label: "Address",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: unref(city),
                                                      "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                                                      rules: cityRules,
                                                      counter: 100,
                                                      label: "City/Province",
                                                      required: "",
                                                      variant: "outlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: unref(district),
                                                      "onUpdate:modelValue": ($event) => isRef(district) ? district.value = $event : null,
                                                      rules: districtRules,
                                                      counter: 100,
                                                      label: "District/Khan",
                                                      required: "",
                                                      variant: "outlined"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(country),
                                              "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                              rules: countryRules,
                                              counter: 100,
                                              label: "Country",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode("div", null, [
                                                createVNode(_component_v_checkbox, {
                                                  class: "mt-5",
                                                  style: { "font-size": "15px" }
                                                })
                                              ]),
                                              createVNode("div", null, [
                                                createVNode(_component_v_img, {
                                                  height: "80px",
                                                  width: "160px",
                                                  class: "ms-4",
                                                  src: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                                                })
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(firstname),
                                                    "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                                    rules: firstnameRules,
                                                    counter: 100,
                                                    label: "First Name",
                                                    required: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(lastname),
                                                    "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                                    rules: lastnameRules,
                                                    counter: 100,
                                                    label: "Last Name",
                                                    required: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(email),
                                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                            rules: emailRules,
                                            counter: 100,
                                            label: "Email Address",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(phoneNumber),
                                            "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                            rules: phoneNumberRules,
                                            counter: 100,
                                            label: "Phone Number",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(address),
                                            "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                            rules: addressRules,
                                            counter: 100,
                                            label: "Address",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(city),
                                                    "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                                                    rules: cityRules,
                                                    counter: 100,
                                                    label: "City/Province",
                                                    required: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(district),
                                                    "onUpdate:modelValue": ($event) => isRef(district) ? district.value = $event : null,
                                                    rules: districtRules,
                                                    counter: 100,
                                                    label: "District/Khan",
                                                    required: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(country),
                                            "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                            rules: countryRules,
                                            counter: 100,
                                            label: "Country",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode("div", null, [
                                              createVNode(_component_v_checkbox, {
                                                class: "mt-5",
                                                style: { "font-size": "15px" }
                                              })
                                            ]),
                                            createVNode("div", null, [
                                              createVNode(_component_v_img, {
                                                height: "80px",
                                                width: "160px",
                                                class: "ms-4",
                                                src: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card, { class: "pa-5 mt-10" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex align-center justify-space-between" data-aos="fade-right" data-aos-delay="500"${_scopeId6}><p${_scopeId6}>Product</p><p class="ms-10"${_scopeId6}>Subtotal</p></div><!--[-->`);
                                          ssrRenderList(_ctx.$store.state.carts, (cart) => {
                                            _push7(`<div class="d-flex mt-5 align-center justify-space-between" data-aos="fade-right" data-aos-delay="500"${_scopeId6}><p${_scopeId6}>${ssrInterpolate(cart.product.name)} x `);
                                            _push7(ssrRenderComponent(_component_v_badge, {
                                              content: cart.quantity,
                                              inline: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</p><p class="ms-10"${_scopeId6}>$${ssrInterpolate(cart.product.price)}.00</p></div>`);
                                          });
                                          _push7(`<!--]--><div class="d-flex mt-5 align-center justify-space-between" data-aos="fade-right" data-aos-delay="500"${_scopeId6}><p${_scopeId6}>Subtotal</p><p class="ms-10"${_scopeId6}>$${ssrInterpolate(_ctx.$store.getters["subTotalPrice"])}.00</p></div><div class="d-flex mt-5 align-center justify-space-between" data-aos="fade-right" data-aos-delay="500"${_scopeId6}><p${_scopeId6}>Tax(10%)</p><p class="ms-10"${_scopeId6}> $${ssrInterpolate(formatNumber(_ctx.$store.getters["taxPrice"]))}</p></div><div class="d-flex mt-5 align-center justify-space-between" data-aos="fade-right" data-aos-delay="500"${_scopeId6}><p${_scopeId6}>Delivery Fee</p><p class="ms-10"${_scopeId6}>$3.00</p></div><div class="d-flex mt-5 align-center justify-space-between" data-aos="fade-right" data-aos-delay="500"${_scopeId6}><p${_scopeId6}>Discount</p><p class="ms-10"${_scopeId6}>-$20.00</p></div><div class="d-flex mt-5 align-center justify-space-between" data-aos="fade-right" data-aos-delay="500"${_scopeId6}><p${_scopeId6}>Total</p><p class="ms-10 font-weight-bold" style="${ssrRenderStyle({ "font-size": "25px", "color": "#e5345b" })}"${_scopeId6}> $${ssrInterpolate(formatNumber(_ctx.$store.getters["totalPrice"]))}</p></div><div class="mt-10" style="${ssrRenderStyle({ "border-top": "1px solid gray" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId6}><p class="mt-10"${_scopeId6}> Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy. </p><div class="mt-5 d-flex justify-center align-center"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            disabled: !unref(valid),
                                            type: "submit",
                                            class: "text-white",
                                            style: { "background-color": "#e5345b", "width": "200px" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Place order`);
                                              } else {
                                                return [
                                                  createTextVNode("Place order")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div><div class="d-flex justify-center mt-5"${_scopeId6}>`);
                                          if (unref(paypalLoaded)) {
                                            _push7(`<div${_scopeId6}><div id="paypal-button-container" class="mt-4"${_scopeId6}></div></div>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`<div id="paypal-button-container"${_scopeId6}></div></div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", {
                                              class: "d-flex align-center justify-space-between",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("p", null, "Product"),
                                              createVNode("p", { class: "ms-10" }, "Subtotal")
                                            ]),
                                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$store.state.carts, (cart) => {
                                              return openBlock(), createBlock("div", {
                                                class: "d-flex mt-5 align-center justify-space-between",
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500",
                                                key: cart
                                              }, [
                                                createVNode("p", null, [
                                                  createTextVNode(toDisplayString(cart.product.name) + " x ", 1),
                                                  createVNode(_component_v_badge, {
                                                    content: cart.quantity,
                                                    inline: ""
                                                  }, null, 8, ["content"])
                                                ]),
                                                createVNode("p", { class: "ms-10" }, "$" + toDisplayString(cart.product.price) + ".00", 1)
                                              ]);
                                            }), 128)),
                                            createVNode("div", {
                                              class: "d-flex mt-5 align-center justify-space-between",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("p", null, "Subtotal"),
                                              createVNode("p", { class: "ms-10" }, "$" + toDisplayString(_ctx.$store.getters["subTotalPrice"]) + ".00", 1)
                                            ]),
                                            createVNode("div", {
                                              class: "d-flex mt-5 align-center justify-space-between",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("p", null, "Tax(10%)"),
                                              createVNode("p", { class: "ms-10" }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["taxPrice"])), 1)
                                            ]),
                                            createVNode("div", {
                                              class: "d-flex mt-5 align-center justify-space-between",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("p", null, "Delivery Fee"),
                                              createVNode("p", { class: "ms-10" }, "$3.00")
                                            ]),
                                            createVNode("div", {
                                              class: "d-flex mt-5 align-center justify-space-between",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("p", null, "Discount"),
                                              createVNode("p", { class: "ms-10" }, "-$20.00")
                                            ]),
                                            createVNode("div", {
                                              class: "d-flex mt-5 align-center justify-space-between",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("p", null, "Total"),
                                              createVNode("p", {
                                                class: "ms-10 font-weight-bold",
                                                style: { "font-size": "25px", "color": "#e5345b" }
                                              }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["totalPrice"])), 1)
                                            ]),
                                            createVNode("div", {
                                              class: "mt-10",
                                              style: { "border-top": "1px solid gray" },
                                              "data-aos": "fade-up",
                                              "data-aos-delay": "500"
                                            }, [
                                              createVNode("p", { class: "mt-10" }, " Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy. "),
                                              createVNode("div", { class: "mt-5 d-flex justify-center align-center" }, [
                                                createVNode(_component_v_btn, {
                                                  disabled: !unref(valid),
                                                  type: "submit",
                                                  class: "text-white",
                                                  style: { "background-color": "#e5345b", "width": "200px" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Place order")
                                                  ]),
                                                  _: 1
                                                }, 8, ["disabled"])
                                              ]),
                                              createVNode("div", { class: "d-flex justify-center mt-5" }, [
                                                unref(paypalLoaded) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                  createVNode("div", {
                                                    id: "paypal-button-container",
                                                    class: "mt-4"
                                                  })
                                                ])) : createCommentVNode("", true),
                                                createVNode("div", { id: "paypal-button-container" })
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "d-flex align-center justify-space-between",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("p", null, "Product"),
                                            createVNode("p", { class: "ms-10" }, "Subtotal")
                                          ]),
                                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$store.state.carts, (cart) => {
                                            return openBlock(), createBlock("div", {
                                              class: "d-flex mt-5 align-center justify-space-between",
                                              "data-aos": "fade-right",
                                              "data-aos-delay": "500",
                                              key: cart
                                            }, [
                                              createVNode("p", null, [
                                                createTextVNode(toDisplayString(cart.product.name) + " x ", 1),
                                                createVNode(_component_v_badge, {
                                                  content: cart.quantity,
                                                  inline: ""
                                                }, null, 8, ["content"])
                                              ]),
                                              createVNode("p", { class: "ms-10" }, "$" + toDisplayString(cart.product.price) + ".00", 1)
                                            ]);
                                          }), 128)),
                                          createVNode("div", {
                                            class: "d-flex mt-5 align-center justify-space-between",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("p", null, "Subtotal"),
                                            createVNode("p", { class: "ms-10" }, "$" + toDisplayString(_ctx.$store.getters["subTotalPrice"]) + ".00", 1)
                                          ]),
                                          createVNode("div", {
                                            class: "d-flex mt-5 align-center justify-space-between",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("p", null, "Tax(10%)"),
                                            createVNode("p", { class: "ms-10" }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["taxPrice"])), 1)
                                          ]),
                                          createVNode("div", {
                                            class: "d-flex mt-5 align-center justify-space-between",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("p", null, "Delivery Fee"),
                                            createVNode("p", { class: "ms-10" }, "$3.00")
                                          ]),
                                          createVNode("div", {
                                            class: "d-flex mt-5 align-center justify-space-between",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("p", null, "Discount"),
                                            createVNode("p", { class: "ms-10" }, "-$20.00")
                                          ]),
                                          createVNode("div", {
                                            class: "d-flex mt-5 align-center justify-space-between",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("p", null, "Total"),
                                            createVNode("p", {
                                              class: "ms-10 font-weight-bold",
                                              style: { "font-size": "25px", "color": "#e5345b" }
                                            }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["totalPrice"])), 1)
                                          ]),
                                          createVNode("div", {
                                            class: "mt-10",
                                            style: { "border-top": "1px solid gray" },
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "500"
                                          }, [
                                            createVNode("p", { class: "mt-10" }, " Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy. "),
                                            createVNode("div", { class: "mt-5 d-flex justify-center align-center" }, [
                                              createVNode(_component_v_btn, {
                                                disabled: !unref(valid),
                                                type: "submit",
                                                class: "text-white",
                                                style: { "background-color": "#e5345b", "width": "200px" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Place order")
                                                ]),
                                                _: 1
                                              }, 8, ["disabled"])
                                            ]),
                                            createVNode("div", { class: "d-flex justify-center mt-5" }, [
                                              unref(paypalLoaded) ? (openBlock(), createBlock("div", { key: 0 }, [
                                                createVNode("div", {
                                                  id: "paypal-button-container",
                                                  class: "mt-4"
                                                })
                                              ])) : createCommentVNode("", true),
                                              createVNode("div", { id: "paypal-button-container" })
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
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "8",
                                  "data-aos": "fade-up",
                                  "data-aos-delay": "500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(firstname),
                                                  "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                                  rules: firstnameRules,
                                                  counter: 100,
                                                  label: "First Name",
                                                  required: "",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(lastname),
                                                  "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                                  rules: lastnameRules,
                                                  counter: 100,
                                                  label: "Last Name",
                                                  required: "",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(email),
                                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                          rules: emailRules,
                                          counter: 100,
                                          label: "Email Address",
                                          required: "",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(phoneNumber),
                                          "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                          rules: phoneNumberRules,
                                          counter: 100,
                                          label: "Phone Number",
                                          required: "",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(address),
                                          "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                          rules: addressRules,
                                          counter: 100,
                                          label: "Address",
                                          required: "",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(city),
                                                  "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                                                  rules: cityRules,
                                                  counter: 100,
                                                  label: "City/Province",
                                                  required: "",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(district),
                                                  "onUpdate:modelValue": ($event) => isRef(district) ? district.value = $event : null,
                                                  rules: districtRules,
                                                  counter: 100,
                                                  label: "District/Khan",
                                                  required: "",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(country),
                                          "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                          rules: countryRules,
                                          counter: 100,
                                          label: "Country",
                                          required: "",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode("div", null, [
                                            createVNode(_component_v_checkbox, {
                                              class: "mt-5",
                                              style: { "font-size": "15px" }
                                            })
                                          ]),
                                          createVNode("div", null, [
                                            createVNode(_component_v_img, {
                                              height: "80px",
                                              width: "160px",
                                              class: "ms-4",
                                              src: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                                            })
                                          ])
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
                                    createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "d-flex align-center justify-space-between",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("p", null, "Product"),
                                          createVNode("p", { class: "ms-10" }, "Subtotal")
                                        ]),
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$store.state.carts, (cart) => {
                                          return openBlock(), createBlock("div", {
                                            class: "d-flex mt-5 align-center justify-space-between",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "500",
                                            key: cart
                                          }, [
                                            createVNode("p", null, [
                                              createTextVNode(toDisplayString(cart.product.name) + " x ", 1),
                                              createVNode(_component_v_badge, {
                                                content: cart.quantity,
                                                inline: ""
                                              }, null, 8, ["content"])
                                            ]),
                                            createVNode("p", { class: "ms-10" }, "$" + toDisplayString(cart.product.price) + ".00", 1)
                                          ]);
                                        }), 128)),
                                        createVNode("div", {
                                          class: "d-flex mt-5 align-center justify-space-between",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("p", null, "Subtotal"),
                                          createVNode("p", { class: "ms-10" }, "$" + toDisplayString(_ctx.$store.getters["subTotalPrice"]) + ".00", 1)
                                        ]),
                                        createVNode("div", {
                                          class: "d-flex mt-5 align-center justify-space-between",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("p", null, "Tax(10%)"),
                                          createVNode("p", { class: "ms-10" }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["taxPrice"])), 1)
                                        ]),
                                        createVNode("div", {
                                          class: "d-flex mt-5 align-center justify-space-between",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("p", null, "Delivery Fee"),
                                          createVNode("p", { class: "ms-10" }, "$3.00")
                                        ]),
                                        createVNode("div", {
                                          class: "d-flex mt-5 align-center justify-space-between",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("p", null, "Discount"),
                                          createVNode("p", { class: "ms-10" }, "-$20.00")
                                        ]),
                                        createVNode("div", {
                                          class: "d-flex mt-5 align-center justify-space-between",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("p", null, "Total"),
                                          createVNode("p", {
                                            class: "ms-10 font-weight-bold",
                                            style: { "font-size": "25px", "color": "#e5345b" }
                                          }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["totalPrice"])), 1)
                                        ]),
                                        createVNode("div", {
                                          class: "mt-10",
                                          style: { "border-top": "1px solid gray" },
                                          "data-aos": "fade-up",
                                          "data-aos-delay": "500"
                                        }, [
                                          createVNode("p", { class: "mt-10" }, " Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy. "),
                                          createVNode("div", { class: "mt-5 d-flex justify-center align-center" }, [
                                            createVNode(_component_v_btn, {
                                              disabled: !unref(valid),
                                              type: "submit",
                                              class: "text-white",
                                              style: { "background-color": "#e5345b", "width": "200px" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Place order")
                                              ]),
                                              _: 1
                                            }, 8, ["disabled"])
                                          ]),
                                          createVNode("div", { class: "d-flex justify-center mt-5" }, [
                                            unref(paypalLoaded) ? (openBlock(), createBlock("div", { key: 0 }, [
                                              createVNode("div", {
                                                id: "paypal-button-container",
                                                class: "mt-4"
                                              })
                                            ])) : createCommentVNode("", true),
                                            createVNode("div", { id: "paypal-button-container" })
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
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "8",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(firstname),
                                                "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                                rules: firstnameRules,
                                                counter: 100,
                                                label: "First Name",
                                                required: "",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(lastname),
                                                "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                                rules: lastnameRules,
                                                counter: 100,
                                                label: "Last Name",
                                                required: "",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        rules: emailRules,
                                        counter: 100,
                                        label: "Email Address",
                                        required: "",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(phoneNumber),
                                        "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                        rules: phoneNumberRules,
                                        counter: 100,
                                        label: "Phone Number",
                                        required: "",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(address),
                                        "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                        rules: addressRules,
                                        counter: 100,
                                        label: "Address",
                                        required: "",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(city),
                                                "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                                                rules: cityRules,
                                                counter: 100,
                                                label: "City/Province",
                                                required: "",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(district),
                                                "onUpdate:modelValue": ($event) => isRef(district) ? district.value = $event : null,
                                                rules: districtRules,
                                                counter: 100,
                                                label: "District/Khan",
                                                required: "",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        modelValue: unref(country),
                                        "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                        rules: countryRules,
                                        counter: 100,
                                        label: "Country",
                                        required: "",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode("div", null, [
                                          createVNode(_component_v_checkbox, {
                                            class: "mt-5",
                                            style: { "font-size": "15px" }
                                          })
                                        ]),
                                        createVNode("div", null, [
                                          createVNode(_component_v_img, {
                                            height: "80px",
                                            width: "160px",
                                            class: "ms-4",
                                            src: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                                          })
                                        ])
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
                                  createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: "d-flex align-center justify-space-between",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("p", null, "Product"),
                                        createVNode("p", { class: "ms-10" }, "Subtotal")
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$store.state.carts, (cart) => {
                                        return openBlock(), createBlock("div", {
                                          class: "d-flex mt-5 align-center justify-space-between",
                                          "data-aos": "fade-right",
                                          "data-aos-delay": "500",
                                          key: cart
                                        }, [
                                          createVNode("p", null, [
                                            createTextVNode(toDisplayString(cart.product.name) + " x ", 1),
                                            createVNode(_component_v_badge, {
                                              content: cart.quantity,
                                              inline: ""
                                            }, null, 8, ["content"])
                                          ]),
                                          createVNode("p", { class: "ms-10" }, "$" + toDisplayString(cart.product.price) + ".00", 1)
                                        ]);
                                      }), 128)),
                                      createVNode("div", {
                                        class: "d-flex mt-5 align-center justify-space-between",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("p", null, "Subtotal"),
                                        createVNode("p", { class: "ms-10" }, "$" + toDisplayString(_ctx.$store.getters["subTotalPrice"]) + ".00", 1)
                                      ]),
                                      createVNode("div", {
                                        class: "d-flex mt-5 align-center justify-space-between",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("p", null, "Tax(10%)"),
                                        createVNode("p", { class: "ms-10" }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["taxPrice"])), 1)
                                      ]),
                                      createVNode("div", {
                                        class: "d-flex mt-5 align-center justify-space-between",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("p", null, "Delivery Fee"),
                                        createVNode("p", { class: "ms-10" }, "$3.00")
                                      ]),
                                      createVNode("div", {
                                        class: "d-flex mt-5 align-center justify-space-between",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("p", null, "Discount"),
                                        createVNode("p", { class: "ms-10" }, "-$20.00")
                                      ]),
                                      createVNode("div", {
                                        class: "d-flex mt-5 align-center justify-space-between",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("p", null, "Total"),
                                        createVNode("p", {
                                          class: "ms-10 font-weight-bold",
                                          style: { "font-size": "25px", "color": "#e5345b" }
                                        }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["totalPrice"])), 1)
                                      ]),
                                      createVNode("div", {
                                        class: "mt-10",
                                        style: { "border-top": "1px solid gray" },
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "500"
                                      }, [
                                        createVNode("p", { class: "mt-10" }, " Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy. "),
                                        createVNode("div", { class: "mt-5 d-flex justify-center align-center" }, [
                                          createVNode(_component_v_btn, {
                                            disabled: !unref(valid),
                                            type: "submit",
                                            class: "text-white",
                                            style: { "background-color": "#e5345b", "width": "200px" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Place order")
                                            ]),
                                            _: 1
                                          }, 8, ["disabled"])
                                        ]),
                                        createVNode("div", { class: "d-flex justify-center mt-5" }, [
                                          unref(paypalLoaded) ? (openBlock(), createBlock("div", { key: 0 }, [
                                            createVNode("div", {
                                              id: "paypal-button-container",
                                              class: "mt-4"
                                            })
                                          ])) : createCommentVNode("", true),
                                          createVNode("div", { id: "paypal-button-container" })
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
                } else {
                  return [
                    createVNode("h1", {
                      class: "fw-bold mt-5 fadeRight",
                      "data-aos": "fade-right",
                      "data-aos-delay": "500"
                    }, [
                      createTextVNode(" Billing "),
                      createVNode("span", { style: { "color": "#6b7280" } }, "Details")
                    ]),
                    createVNode(_component_v_form, {
                      modelValue: unref(valid),
                      "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                      onSubmit: withModifiers(handleCheckout, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "8",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(firstname),
                                              "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                              rules: firstnameRules,
                                              counter: 100,
                                              label: "First Name",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(lastname),
                                              "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                              rules: lastnameRules,
                                              counter: 100,
                                              label: "Last Name",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      rules: emailRules,
                                      counter: 100,
                                      label: "Email Address",
                                      required: "",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: unref(phoneNumber),
                                      "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                      rules: phoneNumberRules,
                                      counter: 100,
                                      label: "Phone Number",
                                      required: "",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_text_field, {
                                      modelValue: unref(address),
                                      "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                      rules: addressRules,
                                      counter: 100,
                                      label: "Address",
                                      required: "",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(city),
                                              "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                                              rules: cityRules,
                                              counter: 100,
                                              label: "City/Province",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(district),
                                              "onUpdate:modelValue": ($event) => isRef(district) ? district.value = $event : null,
                                              rules: districtRules,
                                              counter: 100,
                                              label: "District/Khan",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      modelValue: unref(country),
                                      "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                      rules: countryRules,
                                      counter: 100,
                                      label: "Country",
                                      required: "",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode("div", null, [
                                        createVNode(_component_v_checkbox, {
                                          class: "mt-5",
                                          style: { "font-size": "15px" }
                                        })
                                      ]),
                                      createVNode("div", null, [
                                        createVNode(_component_v_img, {
                                          height: "80px",
                                          width: "160px",
                                          class: "ms-4",
                                          src: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                                        })
                                      ])
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
                                createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "d-flex align-center justify-space-between",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("p", null, "Product"),
                                      createVNode("p", { class: "ms-10" }, "Subtotal")
                                    ]),
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$store.state.carts, (cart) => {
                                      return openBlock(), createBlock("div", {
                                        class: "d-flex mt-5 align-center justify-space-between",
                                        "data-aos": "fade-right",
                                        "data-aos-delay": "500",
                                        key: cart
                                      }, [
                                        createVNode("p", null, [
                                          createTextVNode(toDisplayString(cart.product.name) + " x ", 1),
                                          createVNode(_component_v_badge, {
                                            content: cart.quantity,
                                            inline: ""
                                          }, null, 8, ["content"])
                                        ]),
                                        createVNode("p", { class: "ms-10" }, "$" + toDisplayString(cart.product.price) + ".00", 1)
                                      ]);
                                    }), 128)),
                                    createVNode("div", {
                                      class: "d-flex mt-5 align-center justify-space-between",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("p", null, "Subtotal"),
                                      createVNode("p", { class: "ms-10" }, "$" + toDisplayString(_ctx.$store.getters["subTotalPrice"]) + ".00", 1)
                                    ]),
                                    createVNode("div", {
                                      class: "d-flex mt-5 align-center justify-space-between",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("p", null, "Tax(10%)"),
                                      createVNode("p", { class: "ms-10" }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["taxPrice"])), 1)
                                    ]),
                                    createVNode("div", {
                                      class: "d-flex mt-5 align-center justify-space-between",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("p", null, "Delivery Fee"),
                                      createVNode("p", { class: "ms-10" }, "$3.00")
                                    ]),
                                    createVNode("div", {
                                      class: "d-flex mt-5 align-center justify-space-between",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("p", null, "Discount"),
                                      createVNode("p", { class: "ms-10" }, "-$20.00")
                                    ]),
                                    createVNode("div", {
                                      class: "d-flex mt-5 align-center justify-space-between",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("p", null, "Total"),
                                      createVNode("p", {
                                        class: "ms-10 font-weight-bold",
                                        style: { "font-size": "25px", "color": "#e5345b" }
                                      }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["totalPrice"])), 1)
                                    ]),
                                    createVNode("div", {
                                      class: "mt-10",
                                      style: { "border-top": "1px solid gray" },
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "500"
                                    }, [
                                      createVNode("p", { class: "mt-10" }, " Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy. "),
                                      createVNode("div", { class: "mt-5 d-flex justify-center align-center" }, [
                                        createVNode(_component_v_btn, {
                                          disabled: !unref(valid),
                                          type: "submit",
                                          class: "text-white",
                                          style: { "background-color": "#e5345b", "width": "200px" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Place order")
                                          ]),
                                          _: 1
                                        }, 8, ["disabled"])
                                      ]),
                                      createVNode("div", { class: "d-flex justify-center mt-5" }, [
                                        unref(paypalLoaded) ? (openBlock(), createBlock("div", { key: 0 }, [
                                          createVNode("div", {
                                            id: "paypal-button-container",
                                            class: "mt-4"
                                          })
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { id: "paypal-button-container" })
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
                    }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
                          "data-aos": "fade-right",
                          "data-aos-delay": "500"
                        }, " #Checkout "),
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
                    class: "fw-bold mt-5 fadeRight",
                    "data-aos": "fade-right",
                    "data-aos-delay": "500"
                  }, [
                    createTextVNode(" Billing "),
                    createVNode("span", { style: { "color": "#6b7280" } }, "Details")
                  ]),
                  createVNode(_component_v_form, {
                    modelValue: unref(valid),
                    "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                    onSubmit: withModifiers(handleCheckout, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "8",
                            "data-aos": "fade-up",
                            "data-aos-delay": "500"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(firstname),
                                            "onUpdate:modelValue": ($event) => isRef(firstname) ? firstname.value = $event : null,
                                            rules: firstnameRules,
                                            counter: 100,
                                            label: "First Name",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(lastname),
                                            "onUpdate:modelValue": ($event) => isRef(lastname) ? lastname.value = $event : null,
                                            rules: lastnameRules,
                                            counter: 100,
                                            label: "Last Name",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    modelValue: unref(email),
                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                    rules: emailRules,
                                    counter: 100,
                                    label: "Email Address",
                                    required: "",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_text_field, {
                                    modelValue: unref(phoneNumber),
                                    "onUpdate:modelValue": ($event) => isRef(phoneNumber) ? phoneNumber.value = $event : null,
                                    rules: phoneNumberRules,
                                    counter: 100,
                                    label: "Phone Number",
                                    required: "",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_text_field, {
                                    modelValue: unref(address),
                                    "onUpdate:modelValue": ($event) => isRef(address) ? address.value = $event : null,
                                    rules: addressRules,
                                    counter: 100,
                                    label: "Address",
                                    required: "",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(city),
                                            "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
                                            rules: cityRules,
                                            counter: 100,
                                            label: "City/Province",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(district),
                                            "onUpdate:modelValue": ($event) => isRef(district) ? district.value = $event : null,
                                            rules: districtRules,
                                            counter: 100,
                                            label: "District/Khan",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    modelValue: unref(country),
                                    "onUpdate:modelValue": ($event) => isRef(country) ? country.value = $event : null,
                                    rules: countryRules,
                                    counter: 100,
                                    label: "Country",
                                    required: "",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode("div", null, [
                                      createVNode(_component_v_checkbox, {
                                        class: "mt-5",
                                        style: { "font-size": "15px" }
                                      })
                                    ]),
                                    createVNode("div", null, [
                                      createVNode(_component_v_img, {
                                        height: "80px",
                                        width: "160px",
                                        class: "ms-4",
                                        src: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                                      })
                                    ])
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
                              createVNode(_component_v_card, { class: "pa-5 mt-10" }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "d-flex align-center justify-space-between",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("p", null, "Product"),
                                    createVNode("p", { class: "ms-10" }, "Subtotal")
                                  ]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$store.state.carts, (cart) => {
                                    return openBlock(), createBlock("div", {
                                      class: "d-flex mt-5 align-center justify-space-between",
                                      "data-aos": "fade-right",
                                      "data-aos-delay": "500",
                                      key: cart
                                    }, [
                                      createVNode("p", null, [
                                        createTextVNode(toDisplayString(cart.product.name) + " x ", 1),
                                        createVNode(_component_v_badge, {
                                          content: cart.quantity,
                                          inline: ""
                                        }, null, 8, ["content"])
                                      ]),
                                      createVNode("p", { class: "ms-10" }, "$" + toDisplayString(cart.product.price) + ".00", 1)
                                    ]);
                                  }), 128)),
                                  createVNode("div", {
                                    class: "d-flex mt-5 align-center justify-space-between",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("p", null, "Subtotal"),
                                    createVNode("p", { class: "ms-10" }, "$" + toDisplayString(_ctx.$store.getters["subTotalPrice"]) + ".00", 1)
                                  ]),
                                  createVNode("div", {
                                    class: "d-flex mt-5 align-center justify-space-between",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("p", null, "Tax(10%)"),
                                    createVNode("p", { class: "ms-10" }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["taxPrice"])), 1)
                                  ]),
                                  createVNode("div", {
                                    class: "d-flex mt-5 align-center justify-space-between",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("p", null, "Delivery Fee"),
                                    createVNode("p", { class: "ms-10" }, "$3.00")
                                  ]),
                                  createVNode("div", {
                                    class: "d-flex mt-5 align-center justify-space-between",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("p", null, "Discount"),
                                    createVNode("p", { class: "ms-10" }, "-$20.00")
                                  ]),
                                  createVNode("div", {
                                    class: "d-flex mt-5 align-center justify-space-between",
                                    "data-aos": "fade-right",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("p", null, "Total"),
                                    createVNode("p", {
                                      class: "ms-10 font-weight-bold",
                                      style: { "font-size": "25px", "color": "#e5345b" }
                                    }, " $" + toDisplayString(formatNumber(_ctx.$store.getters["totalPrice"])), 1)
                                  ]),
                                  createVNode("div", {
                                    class: "mt-10",
                                    style: { "border-top": "1px solid gray" },
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500"
                                  }, [
                                    createVNode("p", { class: "mt-10" }, " Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy. "),
                                    createVNode("div", { class: "mt-5 d-flex justify-center align-center" }, [
                                      createVNode(_component_v_btn, {
                                        disabled: !unref(valid),
                                        type: "submit",
                                        class: "text-white",
                                        style: { "background-color": "#e5345b", "width": "200px" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Place order")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    createVNode("div", { class: "d-flex justify-center mt-5" }, [
                                      unref(paypalLoaded) ? (openBlock(), createBlock("div", { key: 0 }, [
                                        createVNode("div", {
                                          id: "paypal-button-container",
                                          class: "mt-4"
                                        })
                                      ])) : createCommentVNode("", true),
                                      createVNode("div", { id: "paypal-button-container" })
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
                  }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout-2519cce8.mjs.map
