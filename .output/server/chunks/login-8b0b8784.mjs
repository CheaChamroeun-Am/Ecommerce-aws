import { _ as _export_sfc, n as navigateTo } from './server.mjs';
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, createTextVNode, withModifiers, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-cf13354b.mjs';
import { u as useAuth } from './state-354a3b64.mjs';
import Cookies from 'js-cookie';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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
  data: () => ({
    hasError: null,
    step: 1,
    valid: false,
    email: "hyein@gmail.com",
    password: "hyein123",
    passwordShow: false,
    signupName: "",
    signupEmail: "",
    signupPassword: "",
    isLoading: false,
    loginSnackbar: false,
    signupSnackbar: false,
    loginErrorSnackbar: false,
    emailRules: [
      (value) => {
        if (value)
          return true;
        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value))
          return true;
        return "E-mail must be valid.";
      },
      (value) => {
        if ((value == null ? void 0 : value.length) <= 50)
          return true;
        return "Email must be less than 50 characters.";
      }
    ],
    passwordRules: [
      (value) => {
        if (value)
          return true;
        return "Password is requred.";
      },
      (value) => {
        if (value.length >= 8)
          return true;
        return "Password must be at least 8 characters.";
      },
      (value) => {
        if ((value == null ? void 0 : value.length) <= 50)
          return true;
        return "Password must be less than 50 characters.";
      }
    ],
    nameRules: [
      (value) => {
        if (value)
          return true;
        return "Username is requred.";
      },
      (value) => {
        if ((value == null ? void 0 : value.length) <= 50)
          return true;
        return "Username must be less than 50 characters.";
      }
    ]
  }),
  methods: {
    async handleLogin() {
      if (this.isLoading)
        return;
      this.isLoading = true;
      const { data, error } = await useFetch(
        "http://18.208.219.245:3002/api/users/login",
        {
          method: "post",
          body: {
            email: this.email,
            password: this.password
          }
        },
        "$MnW08vEsNn"
      );
      if (error.value) {
        this.loginErrorSnackbar = true;
        this.isLoading = false;
        return;
      }
      const auth = useAuth();
      auth.value.isAuthenticated = true;
      Cookies.set("token", data.value.token);
      this.isLoading = false;
      this.loginSnackbar = true;
      navigateTo("/");
    },
    async handleSignup() {
      const { data } = await useFetch("http://18.208.219.245:3002/api/users", {
        method: "post",
        body: {
          name: this.signupName,
          email: this.signupEmail,
          password: this.signupPassword
        }
      }, "$buj25HlDg1");
      console.log(data.value);
      this.signupSnackbar = true;
      this.step--;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_main = resolveComponent("v-main");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_window = resolveComponent("v-window");
  const _component_v_window_item = resolveComponent("v-window-item");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_form = resolveComponent("v-form");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_switch = resolveComponent("v-switch");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_v_snackbar = resolveComponent("v-snackbar");
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
                    _push4(`<div class="text-overlay"${_scopeId3}><p class="text" data-aos="fade-up" data-aos-delay="500"${_scopeId3}>#Login</p><p class="text-white text-center" data-aos="fade-right" data-aos-delay="500"${_scopeId3}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-overlay" }, [
                        createVNode("p", {
                          class: "text",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500"
                        }, "#Login"),
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
                        "data-aos": "fade-up",
                        "data-aos-delay": "500"
                      }, "#Login"),
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
              _push3(ssrRenderComponent(_component_v_container, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_row, { class: "d-flex align-center justify-center" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "8",
                            sm: "8"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_window, {
                                        modelValue: _ctx.step,
                                        "onUpdate:modelValue": ($event) => _ctx.step = $event
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_window_item, { value: 1 }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_row, null, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_col, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_card_text, {
                                                                "data-aos": "fade-right",
                                                                "data-aos-delay": "500"
                                                              }, {
                                                                default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                  if (_push12) {
                                                                    _push12(`<p class="text-h4 font-weight-bold"${_scopeId11}> Hi, Welcome Back! \u{1F44B} </p><p class="grey--text"${_scopeId11}> Hello again, you&#39;ve been missed ! </p>`);
                                                                  } else {
                                                                    return [
                                                                      createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                                      createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 1
                                                              }, _parent11, _scopeId10));
                                                              _push11(ssrRenderComponent(_component_v_form, {
                                                                modelValue: _ctx.valid,
                                                                "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                                class: "mt-5",
                                                                onSubmit: $options.handleLogin,
                                                                "data-aos": "fade-up",
                                                                "data-aos-delay": "500"
                                                              }, {
                                                                default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                  if (_push12) {
                                                                    _push12(ssrRenderComponent(_component_v_text_field, {
                                                                      modelValue: _ctx.email,
                                                                      "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                                      rules: _ctx.emailRules,
                                                                      counter: 50,
                                                                      label: "Email",
                                                                      variant: "outlined",
                                                                      "prepend-inner-icon": "mdi-email",
                                                                      required: ""
                                                                    }, null, _parent12, _scopeId11));
                                                                    _push12(ssrRenderComponent(_component_v_text_field, {
                                                                      modelValue: _ctx.password,
                                                                      "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                                      rules: _ctx.passwordRules,
                                                                      counter: 50,
                                                                      label: "Password",
                                                                      variant: "outlined",
                                                                      "prepend-inner-icon": "mdi-lock",
                                                                      "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                      "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                      type: _ctx.passwordShow ? "text" : "password",
                                                                      required: ""
                                                                    }, null, _parent12, _scopeId11));
                                                                    _push12(`<div class="d-flex justify-space-between align-center"${_scopeId11}>`);
                                                                    _push12(ssrRenderComponent(_component_v_switch, {
                                                                      label: "Remember me",
                                                                      color: "#e5345b",
                                                                      class: "mt-4"
                                                                    }, null, _parent12, _scopeId11));
                                                                    _push12(`<p class="text-grey" style="${ssrRenderStyle({ "text-decoration": "none", "cursor": "pointer", "font-size": "13px" })}"${_scopeId11}> Forgot Password? </p></div>`);
                                                                    _push12(ssrRenderComponent(_component_v_btn, {
                                                                      class: "mt-2 text-white",
                                                                      color: "#e5345b",
                                                                      block: "",
                                                                      large: "",
                                                                      depressed: "",
                                                                      type: "submit",
                                                                      disabled: !_ctx.valid
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          if (!_ctx.isLoading) {
                                                                            _push13(`<span${_scopeId12}> Login </span>`);
                                                                          } else {
                                                                            _push13(`<span${_scopeId12}> Loading... </span>`);
                                                                          }
                                                                        } else {
                                                                          return [
                                                                            !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                    _push12(`<h5 class="text-center mt-9 text-grey"${_scopeId11}> Or Log in using </h5><div class="d-flex align-center justify-space-between mt-9"${_scopeId11}>`);
                                                                    _push12(ssrRenderComponent(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          _push13(ssrRenderComponent(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-google",
                                                                            color: "red"
                                                                          }, null, _parent13, _scopeId12));
                                                                          _push13(` Google `);
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-google",
                                                                              color: "red"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                    _push12(ssrRenderComponent(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          _push13(ssrRenderComponent(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-facebook",
                                                                            color: "blue"
                                                                          }, null, _parent13, _scopeId12));
                                                                          _push13(` Google `);
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-facebook",
                                                                              color: "blue"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                    _push12(ssrRenderComponent(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          _push13(ssrRenderComponent(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-twitter",
                                                                            color: "blue-lighten-3"
                                                                          }, null, _parent13, _scopeId12));
                                                                          _push13(` Google `);
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-twitter",
                                                                              color: "blue-lighten-3"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                    _push12(`</div>`);
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: _ctx.email,
                                                                        "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                                        rules: _ctx.emailRules,
                                                                        counter: 50,
                                                                        label: "Email",
                                                                        variant: "outlined",
                                                                        "prepend-inner-icon": "mdi-email",
                                                                        required: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: _ctx.password,
                                                                        "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                                        rules: _ctx.passwordRules,
                                                                        counter: 50,
                                                                        label: "Password",
                                                                        variant: "outlined",
                                                                        "prepend-inner-icon": "mdi-lock",
                                                                        "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                        "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                        type: _ctx.passwordShow ? "text" : "password",
                                                                        required: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                                      createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                                        createVNode(_component_v_switch, {
                                                                          label: "Remember me",
                                                                          color: "#e5345b",
                                                                          class: "mt-4"
                                                                        }),
                                                                        createVNode("p", {
                                                                          class: "text-grey",
                                                                          style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                                        }, " Forgot Password? ")
                                                                      ]),
                                                                      createVNode(_component_v_btn, {
                                                                        class: "mt-2 text-white",
                                                                        color: "#e5345b",
                                                                        block: "",
                                                                        large: "",
                                                                        depressed: "",
                                                                        type: "submit",
                                                                        disabled: !_ctx.valid
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                                        ]),
                                                                        _: 1
                                                                      }, 8, ["disabled"]),
                                                                      createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                                      createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                                        createVNode(_component_v_btn, {
                                                                          class: "ma-2",
                                                                          variant: "outlined",
                                                                          color: "grey"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-google",
                                                                              color: "red"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_v_btn, {
                                                                          class: "ma-2",
                                                                          variant: "outlined",
                                                                          color: "grey"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-facebook",
                                                                              color: "blue"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_v_btn, {
                                                                          class: "ma-2",
                                                                          variant: "outlined",
                                                                          color: "grey"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-twitter",
                                                                              color: "blue-lighten-3"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ]),
                                                                          _: 1
                                                                        })
                                                                      ])
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 1
                                                              }, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_card_text, {
                                                                  "data-aos": "fade-right",
                                                                  "data-aos-delay": "500"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                                    createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_form, {
                                                                  modelValue: _ctx.valid,
                                                                  "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                                  class: "mt-5",
                                                                  onSubmit: withModifiers($options.handleLogin, ["prevent"]),
                                                                  "data-aos": "fade-up",
                                                                  "data-aos-delay": "500"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: _ctx.email,
                                                                      "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                                      rules: _ctx.emailRules,
                                                                      counter: 50,
                                                                      label: "Email",
                                                                      variant: "outlined",
                                                                      "prepend-inner-icon": "mdi-email",
                                                                      required: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: _ctx.password,
                                                                      "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                                      rules: _ctx.passwordRules,
                                                                      counter: 50,
                                                                      label: "Password",
                                                                      variant: "outlined",
                                                                      "prepend-inner-icon": "mdi-lock",
                                                                      "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                      "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                      type: _ctx.passwordShow ? "text" : "password",
                                                                      required: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                                    createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                                      createVNode(_component_v_switch, {
                                                                        label: "Remember me",
                                                                        color: "#e5345b",
                                                                        class: "mt-4"
                                                                      }),
                                                                      createVNode("p", {
                                                                        class: "text-grey",
                                                                        style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                                      }, " Forgot Password? ")
                                                                    ]),
                                                                    createVNode(_component_v_btn, {
                                                                      class: "mt-2 text-white",
                                                                      color: "#e5345b",
                                                                      block: "",
                                                                      large: "",
                                                                      depressed: "",
                                                                      type: "submit",
                                                                      disabled: !_ctx.valid
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                                      ]),
                                                                      _: 1
                                                                    }, 8, ["disabled"]),
                                                                    createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                                    createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                                      createVNode(_component_v_btn, {
                                                                        class: "ma-2",
                                                                        variant: "outlined",
                                                                        color: "grey"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-google",
                                                                            color: "red"
                                                                          }),
                                                                          createTextVNode(" Google ")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_v_btn, {
                                                                        class: "ma-2",
                                                                        variant: "outlined",
                                                                        color: "grey"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-facebook",
                                                                            color: "blue"
                                                                          }),
                                                                          createTextVNode(" Google ")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_v_btn, {
                                                                        class: "ma-2",
                                                                        variant: "outlined",
                                                                        color: "grey"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-twitter",
                                                                            color: "blue-lighten-3"
                                                                          }),
                                                                          createTextVNode(" Google ")
                                                                        ]),
                                                                        _: 1
                                                                      })
                                                                    ])
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                        _push10(ssrRenderComponent(_component_v_col, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_sheet, {
                                                                color: "#EEEEEE",
                                                                height: "100%",
                                                                width: "100%",
                                                                style: { "border-radius": "0 40px 0px 0px" }
                                                              }, {
                                                                default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                  if (_push12) {
                                                                    _push12(`<div style="${ssrRenderStyle({ "text-align": "center", "padding": "180px 0" })}"${_scopeId11}><h3 class="text-h5" data-aos="fade-right" data-aos-delay="500"${_scopeId11}> Don&#39;t have an account </h3><p class="mt-3 text-grey" style="${ssrRenderStyle({ "font-size": "15px" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId11}> Enter your personal <br${_scopeId11}> information and join us! </p>`);
                                                                    _push12(ssrRenderComponent(_component_v_btn, {
                                                                      rounded: "",
                                                                      width: "250px",
                                                                      class: "mt-6",
                                                                      onClick: ($event) => _ctx.step++,
                                                                      "data-aos": "fade-up",
                                                                      "data-aos-delay": "500"
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          _push13(`Signup`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode("Signup")
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                    _push12(`</div>`);
                                                                  } else {
                                                                    return [
                                                                      createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                                        createVNode("h3", {
                                                                          class: "text-h5",
                                                                          "data-aos": "fade-right",
                                                                          "data-aos-delay": "500"
                                                                        }, " Don't have an account "),
                                                                        createVNode("p", {
                                                                          class: "mt-3 text-grey",
                                                                          style: { "font-size": "15px" },
                                                                          "data-aos": "fade-up",
                                                                          "data-aos-delay": "500"
                                                                        }, [
                                                                          createTextVNode(" Enter your personal "),
                                                                          createVNode("br"),
                                                                          createTextVNode(" information and join us! ")
                                                                        ]),
                                                                        createVNode(_component_v_btn, {
                                                                          rounded: "",
                                                                          width: "250px",
                                                                          class: "mt-6",
                                                                          onClick: ($event) => _ctx.step++,
                                                                          "data-aos": "fade-up",
                                                                          "data-aos-delay": "500"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Signup")
                                                                          ]),
                                                                          _: 1
                                                                        }, 8, ["onClick"])
                                                                      ])
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 1
                                                              }, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_sheet, {
                                                                  color: "#EEEEEE",
                                                                  height: "100%",
                                                                  width: "100%",
                                                                  style: { "border-radius": "0 40px 0px 0px" }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                                      createVNode("h3", {
                                                                        class: "text-h5",
                                                                        "data-aos": "fade-right",
                                                                        "data-aos-delay": "500"
                                                                      }, " Don't have an account "),
                                                                      createVNode("p", {
                                                                        class: "mt-3 text-grey",
                                                                        style: { "font-size": "15px" },
                                                                        "data-aos": "fade-up",
                                                                        "data-aos-delay": "500"
                                                                      }, [
                                                                        createTextVNode(" Enter your personal "),
                                                                        createVNode("br"),
                                                                        createTextVNode(" information and join us! ")
                                                                      ]),
                                                                      createVNode(_component_v_btn, {
                                                                        rounded: "",
                                                                        width: "250px",
                                                                        class: "mt-6",
                                                                        onClick: ($event) => _ctx.step++,
                                                                        "data-aos": "fade-up",
                                                                        "data-aos-delay": "500"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Signup")
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
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_col, {
                                                            cols: "12",
                                                            md: "6"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_text, {
                                                                "data-aos": "fade-right",
                                                                "data-aos-delay": "500"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                                  createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_form, {
                                                                modelValue: _ctx.valid,
                                                                "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                                class: "mt-5",
                                                                onSubmit: withModifiers($options.handleLogin, ["prevent"]),
                                                                "data-aos": "fade-up",
                                                                "data-aos-delay": "500"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: _ctx.email,
                                                                    "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                                    rules: _ctx.emailRules,
                                                                    counter: 50,
                                                                    label: "Email",
                                                                    variant: "outlined",
                                                                    "prepend-inner-icon": "mdi-email",
                                                                    required: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: _ctx.password,
                                                                    "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                                    rules: _ctx.passwordRules,
                                                                    counter: 50,
                                                                    label: "Password",
                                                                    variant: "outlined",
                                                                    "prepend-inner-icon": "mdi-lock",
                                                                    "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                    "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                    type: _ctx.passwordShow ? "text" : "password",
                                                                    required: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                                  createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                                    createVNode(_component_v_switch, {
                                                                      label: "Remember me",
                                                                      color: "#e5345b",
                                                                      class: "mt-4"
                                                                    }),
                                                                    createVNode("p", {
                                                                      class: "text-grey",
                                                                      style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                                    }, " Forgot Password? ")
                                                                  ]),
                                                                  createVNode(_component_v_btn, {
                                                                    class: "mt-2 text-white",
                                                                    color: "#e5345b",
                                                                    block: "",
                                                                    large: "",
                                                                    depressed: "",
                                                                    type: "submit",
                                                                    disabled: !_ctx.valid
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                                    ]),
                                                                    _: 1
                                                                  }, 8, ["disabled"]),
                                                                  createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                                  createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                                    createVNode(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_icon, {
                                                                          start: "",
                                                                          icon: "mdi-google",
                                                                          color: "red"
                                                                        }),
                                                                        createTextVNode(" Google ")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_icon, {
                                                                          start: "",
                                                                          icon: "mdi-facebook",
                                                                          color: "blue"
                                                                        }),
                                                                        createTextVNode(" Google ")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_icon, {
                                                                          start: "",
                                                                          icon: "mdi-twitter",
                                                                          color: "blue-lighten-3"
                                                                        }),
                                                                        createTextVNode(" Google ")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ])
                                                                ]),
                                                                _: 1
                                                              }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, {
                                                            cols: "12",
                                                            md: "6"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_sheet, {
                                                                color: "#EEEEEE",
                                                                height: "100%",
                                                                width: "100%",
                                                                style: { "border-radius": "0 40px 0px 0px" }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                                    createVNode("h3", {
                                                                      class: "text-h5",
                                                                      "data-aos": "fade-right",
                                                                      "data-aos-delay": "500"
                                                                    }, " Don't have an account "),
                                                                    createVNode("p", {
                                                                      class: "mt-3 text-grey",
                                                                      style: { "font-size": "15px" },
                                                                      "data-aos": "fade-up",
                                                                      "data-aos-delay": "500"
                                                                    }, [
                                                                      createTextVNode(" Enter your personal "),
                                                                      createVNode("br"),
                                                                      createTextVNode(" information and join us! ")
                                                                    ]),
                                                                    createVNode(_component_v_btn, {
                                                                      rounded: "",
                                                                      width: "250px",
                                                                      class: "mt-6",
                                                                      onClick: ($event) => _ctx.step++,
                                                                      "data-aos": "fade-up",
                                                                      "data-aos-delay": "500"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Signup")
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
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_text, {
                                                              "data-aos": "fade-right",
                                                              "data-aos-delay": "500"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                                createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_form, {
                                                              modelValue: _ctx.valid,
                                                              "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                              class: "mt-5",
                                                              onSubmit: withModifiers($options.handleLogin, ["prevent"]),
                                                              "data-aos": "fade-up",
                                                              "data-aos-delay": "500"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: _ctx.email,
                                                                  "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                                  rules: _ctx.emailRules,
                                                                  counter: 50,
                                                                  label: "Email",
                                                                  variant: "outlined",
                                                                  "prepend-inner-icon": "mdi-email",
                                                                  required: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: _ctx.password,
                                                                  "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                                  rules: _ctx.passwordRules,
                                                                  counter: 50,
                                                                  label: "Password",
                                                                  variant: "outlined",
                                                                  "prepend-inner-icon": "mdi-lock",
                                                                  "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                  "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                  type: _ctx.passwordShow ? "text" : "password",
                                                                  required: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                                createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                                  createVNode(_component_v_switch, {
                                                                    label: "Remember me",
                                                                    color: "#e5345b",
                                                                    class: "mt-4"
                                                                  }),
                                                                  createVNode("p", {
                                                                    class: "text-grey",
                                                                    style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                                  }, " Forgot Password? ")
                                                                ]),
                                                                createVNode(_component_v_btn, {
                                                                  class: "mt-2 text-white",
                                                                  color: "#e5345b",
                                                                  block: "",
                                                                  large: "",
                                                                  depressed: "",
                                                                  type: "submit",
                                                                  disabled: !_ctx.valid
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["disabled"]),
                                                                createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                                createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                                  createVNode(_component_v_btn, {
                                                                    class: "ma-2",
                                                                    variant: "outlined",
                                                                    color: "grey"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_icon, {
                                                                        start: "",
                                                                        icon: "mdi-google",
                                                                        color: "red"
                                                                      }),
                                                                      createTextVNode(" Google ")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_btn, {
                                                                    class: "ma-2",
                                                                    variant: "outlined",
                                                                    color: "grey"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_icon, {
                                                                        start: "",
                                                                        icon: "mdi-facebook",
                                                                        color: "blue"
                                                                      }),
                                                                      createTextVNode(" Google ")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_btn, {
                                                                    class: "ma-2",
                                                                    variant: "outlined",
                                                                    color: "grey"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_icon, {
                                                                        start: "",
                                                                        icon: "mdi-twitter",
                                                                        color: "blue-lighten-3"
                                                                      }),
                                                                      createTextVNode(" Google ")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ])
                                                              ]),
                                                              _: 1
                                                            }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_sheet, {
                                                              color: "#EEEEEE",
                                                              height: "100%",
                                                              width: "100%",
                                                              style: { "border-radius": "0 40px 0px 0px" }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                                  createVNode("h3", {
                                                                    class: "text-h5",
                                                                    "data-aos": "fade-right",
                                                                    "data-aos-delay": "500"
                                                                  }, " Don't have an account "),
                                                                  createVNode("p", {
                                                                    class: "mt-3 text-grey",
                                                                    style: { "font-size": "15px" },
                                                                    "data-aos": "fade-up",
                                                                    "data-aos-delay": "500"
                                                                  }, [
                                                                    createTextVNode(" Enter your personal "),
                                                                    createVNode("br"),
                                                                    createTextVNode(" information and join us! ")
                                                                  ]),
                                                                  createVNode(_component_v_btn, {
                                                                    rounded: "",
                                                                    width: "250px",
                                                                    class: "mt-6",
                                                                    onClick: ($event) => _ctx.step++,
                                                                    "data-aos": "fade-up",
                                                                    "data-aos-delay": "500"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Signup")
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
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                            _push8(ssrRenderComponent(_component_v_window_item, { value: 2 }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_row, null, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_col, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_sheet, {
                                                                color: "#EEEEEE",
                                                                height: "100%",
                                                                width: "100%",
                                                                style: { "border-radius": "40px 0 0 0" }
                                                              }, {
                                                                default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                  if (_push12) {
                                                                    _push12(`<div style="${ssrRenderStyle({ "text-align": "center", "padding": "180px 0" })}"${_scopeId11}><h3 class="text-h5" data-aos="fade-up" data-aos-delay="500"${_scopeId11}> Already have an account ? </h3><p class="mt-3 text-grey" style="${ssrRenderStyle({ "font-size": "15px" })}" data-aos="fade-up" data-aos-delay="500"${_scopeId11}> Keep connect with us and <br${_scopeId11}> login with your personal info </p>`);
                                                                    _push12(ssrRenderComponent(_component_v_btn, {
                                                                      rounded: "",
                                                                      width: "250px",
                                                                      class: "mt-6",
                                                                      onClick: ($event) => _ctx.step--,
                                                                      "data-aos": "fade-up",
                                                                      "data-aos-delay": "500"
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          _push13(`Login`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode("Login")
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                    _push12(`</div>`);
                                                                  } else {
                                                                    return [
                                                                      createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                                        createVNode("h3", {
                                                                          class: "text-h5",
                                                                          "data-aos": "fade-up",
                                                                          "data-aos-delay": "500"
                                                                        }, " Already have an account ? "),
                                                                        createVNode("p", {
                                                                          class: "mt-3 text-grey",
                                                                          style: { "font-size": "15px" },
                                                                          "data-aos": "fade-up",
                                                                          "data-aos-delay": "500"
                                                                        }, [
                                                                          createTextVNode(" Keep connect with us and "),
                                                                          createVNode("br"),
                                                                          createTextVNode(" login with your personal info ")
                                                                        ]),
                                                                        createVNode(_component_v_btn, {
                                                                          rounded: "",
                                                                          width: "250px",
                                                                          class: "mt-6",
                                                                          onClick: ($event) => _ctx.step--,
                                                                          "data-aos": "fade-up",
                                                                          "data-aos-delay": "500"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("Login")
                                                                          ]),
                                                                          _: 1
                                                                        }, 8, ["onClick"])
                                                                      ])
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 1
                                                              }, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_sheet, {
                                                                  color: "#EEEEEE",
                                                                  height: "100%",
                                                                  width: "100%",
                                                                  style: { "border-radius": "40px 0 0 0" }
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                                      createVNode("h3", {
                                                                        class: "text-h5",
                                                                        "data-aos": "fade-up",
                                                                        "data-aos-delay": "500"
                                                                      }, " Already have an account ? "),
                                                                      createVNode("p", {
                                                                        class: "mt-3 text-grey",
                                                                        style: { "font-size": "15px" },
                                                                        "data-aos": "fade-up",
                                                                        "data-aos-delay": "500"
                                                                      }, [
                                                                        createTextVNode(" Keep connect with us and "),
                                                                        createVNode("br"),
                                                                        createTextVNode(" login with your personal info ")
                                                                      ]),
                                                                      createVNode(_component_v_btn, {
                                                                        rounded: "",
                                                                        width: "250px",
                                                                        class: "mt-6",
                                                                        onClick: ($event) => _ctx.step--,
                                                                        "data-aos": "fade-up",
                                                                        "data-aos-delay": "500"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Login")
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
                                                        }, _parent10, _scopeId9));
                                                        _push10(ssrRenderComponent(_component_v_col, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_card_text, {
                                                                "data-aos": "fade-right",
                                                                "data-aos-delay": "500"
                                                              }, {
                                                                default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                  if (_push12) {
                                                                    _push12(`<p class="text-h4 font-weight-bold"${_scopeId11}> Become one of us \u{1F918} </p><p class="text-grey"${_scopeId11}> Start control your financial today! </p>`);
                                                                  } else {
                                                                    return [
                                                                      createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                                      createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 1
                                                              }, _parent11, _scopeId10));
                                                              _push11(ssrRenderComponent(_component_v_form, {
                                                                modelValue: _ctx.valid,
                                                                "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                                class: "mt-5",
                                                                onSubmit: $options.handleSignup,
                                                                "data-aos": "fade-up",
                                                                "data-aos-delay": "500"
                                                              }, {
                                                                default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                  if (_push12) {
                                                                    _push12(ssrRenderComponent(_component_v_text_field, {
                                                                      modelValue: _ctx.signupName,
                                                                      "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                                      rules: _ctx.nameRules,
                                                                      counter: 50,
                                                                      label: "Username",
                                                                      variant: "outlined",
                                                                      "prepend-inner-icon": "mdi-account",
                                                                      required: ""
                                                                    }, null, _parent12, _scopeId11));
                                                                    _push12(ssrRenderComponent(_component_v_text_field, {
                                                                      modelValue: _ctx.signupEmail,
                                                                      "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                                      rules: _ctx.emailRules,
                                                                      counter: 50,
                                                                      label: "Email",
                                                                      variant: "outlined",
                                                                      "prepend-inner-icon": "mdi-email",
                                                                      required: ""
                                                                    }, null, _parent12, _scopeId11));
                                                                    _push12(ssrRenderComponent(_component_v_text_field, {
                                                                      modelValue: _ctx.signupPassword,
                                                                      "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                                      rules: _ctx.passwordRules,
                                                                      counter: 50,
                                                                      label: "Password",
                                                                      variant: "outlined",
                                                                      "prepend-inner-icon": "mdi-lock",
                                                                      "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                      "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                      type: _ctx.passwordShow ? "text" : "password",
                                                                      required: ""
                                                                    }, null, _parent12, _scopeId11));
                                                                    _push12(ssrRenderComponent(_component_v_btn, {
                                                                      class: "mt-2 text-white",
                                                                      color: "#e5345b",
                                                                      block: "",
                                                                      large: "",
                                                                      depressed: "",
                                                                      type: "submit",
                                                                      disabled: !_ctx.valid
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          _push13(`Signup`);
                                                                        } else {
                                                                          return [
                                                                            createTextVNode("Signup")
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                    _push12(`<h5 class="text-center mt-9 text-grey"${_scopeId11}> Or Log in using </h5><div class="d-flex align-center justify-space-between mt-9"${_scopeId11}>`);
                                                                    _push12(ssrRenderComponent(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          _push13(ssrRenderComponent(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-google",
                                                                            color: "red"
                                                                          }, null, _parent13, _scopeId12));
                                                                          _push13(` Google `);
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-google",
                                                                              color: "red"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                    _push12(ssrRenderComponent(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          _push13(ssrRenderComponent(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-facebook",
                                                                            color: "blue"
                                                                          }, null, _parent13, _scopeId12));
                                                                          _push13(` Google `);
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-facebook",
                                                                              color: "blue"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                    _push12(ssrRenderComponent(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          _push13(ssrRenderComponent(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-twitter",
                                                                            color: "blue-lighten-3"
                                                                          }, null, _parent13, _scopeId12));
                                                                          _push13(` Google `);
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-twitter",
                                                                              color: "blue-lighten-3"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                    _push12(`</div>`);
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: _ctx.signupName,
                                                                        "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                                        rules: _ctx.nameRules,
                                                                        counter: 50,
                                                                        label: "Username",
                                                                        variant: "outlined",
                                                                        "prepend-inner-icon": "mdi-account",
                                                                        required: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: _ctx.signupEmail,
                                                                        "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                                        rules: _ctx.emailRules,
                                                                        counter: 50,
                                                                        label: "Email",
                                                                        variant: "outlined",
                                                                        "prepend-inner-icon": "mdi-email",
                                                                        required: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                      createVNode(_component_v_text_field, {
                                                                        modelValue: _ctx.signupPassword,
                                                                        "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                                        rules: _ctx.passwordRules,
                                                                        counter: 50,
                                                                        label: "Password",
                                                                        variant: "outlined",
                                                                        "prepend-inner-icon": "mdi-lock",
                                                                        "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                        "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                        type: _ctx.passwordShow ? "text" : "password",
                                                                        required: ""
                                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                                      createVNode(_component_v_btn, {
                                                                        class: "mt-2 text-white",
                                                                        color: "#e5345b",
                                                                        block: "",
                                                                        large: "",
                                                                        depressed: "",
                                                                        type: "submit",
                                                                        disabled: !_ctx.valid
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("Signup")
                                                                        ]),
                                                                        _: 1
                                                                      }, 8, ["disabled"]),
                                                                      createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                                      createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                                        createVNode(_component_v_btn, {
                                                                          class: "ma-2",
                                                                          variant: "outlined",
                                                                          color: "grey"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-google",
                                                                              color: "red"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_v_btn, {
                                                                          class: "ma-2",
                                                                          variant: "outlined",
                                                                          color: "grey"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-facebook",
                                                                              color: "blue"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(_component_v_btn, {
                                                                          class: "ma-2",
                                                                          variant: "outlined",
                                                                          color: "grey"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_icon, {
                                                                              start: "",
                                                                              icon: "mdi-twitter",
                                                                              color: "blue-lighten-3"
                                                                            }),
                                                                            createTextVNode(" Google ")
                                                                          ]),
                                                                          _: 1
                                                                        })
                                                                      ])
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 1
                                                              }, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_card_text, {
                                                                  "data-aos": "fade-right",
                                                                  "data-aos-delay": "500"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                                    createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_form, {
                                                                  modelValue: _ctx.valid,
                                                                  "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                                  class: "mt-5",
                                                                  onSubmit: withModifiers($options.handleSignup, ["prevent"]),
                                                                  "data-aos": "fade-up",
                                                                  "data-aos-delay": "500"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: _ctx.signupName,
                                                                      "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                                      rules: _ctx.nameRules,
                                                                      counter: 50,
                                                                      label: "Username",
                                                                      variant: "outlined",
                                                                      "prepend-inner-icon": "mdi-account",
                                                                      required: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: _ctx.signupEmail,
                                                                      "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                                      rules: _ctx.emailRules,
                                                                      counter: 50,
                                                                      label: "Email",
                                                                      variant: "outlined",
                                                                      "prepend-inner-icon": "mdi-email",
                                                                      required: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                    createVNode(_component_v_text_field, {
                                                                      modelValue: _ctx.signupPassword,
                                                                      "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                                      rules: _ctx.passwordRules,
                                                                      counter: 50,
                                                                      label: "Password",
                                                                      variant: "outlined",
                                                                      "prepend-inner-icon": "mdi-lock",
                                                                      "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                      "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                      type: _ctx.passwordShow ? "text" : "password",
                                                                      required: ""
                                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                                    createVNode(_component_v_btn, {
                                                                      class: "mt-2 text-white",
                                                                      color: "#e5345b",
                                                                      block: "",
                                                                      large: "",
                                                                      depressed: "",
                                                                      type: "submit",
                                                                      disabled: !_ctx.valid
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Signup")
                                                                      ]),
                                                                      _: 1
                                                                    }, 8, ["disabled"]),
                                                                    createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                                    createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                                      createVNode(_component_v_btn, {
                                                                        class: "ma-2",
                                                                        variant: "outlined",
                                                                        color: "grey"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-google",
                                                                            color: "red"
                                                                          }),
                                                                          createTextVNode(" Google ")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_v_btn, {
                                                                        class: "ma-2",
                                                                        variant: "outlined",
                                                                        color: "grey"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-facebook",
                                                                            color: "blue"
                                                                          }),
                                                                          createTextVNode(" Google ")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(_component_v_btn, {
                                                                        class: "ma-2",
                                                                        variant: "outlined",
                                                                        color: "grey"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_icon, {
                                                                            start: "",
                                                                            icon: "mdi-twitter",
                                                                            color: "blue-lighten-3"
                                                                          }),
                                                                          createTextVNode(" Google ")
                                                                        ]),
                                                                        _: 1
                                                                      })
                                                                    ])
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_col, {
                                                            cols: "12",
                                                            md: "6"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_sheet, {
                                                                color: "#EEEEEE",
                                                                height: "100%",
                                                                width: "100%",
                                                                style: { "border-radius": "40px 0 0 0" }
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                                    createVNode("h3", {
                                                                      class: "text-h5",
                                                                      "data-aos": "fade-up",
                                                                      "data-aos-delay": "500"
                                                                    }, " Already have an account ? "),
                                                                    createVNode("p", {
                                                                      class: "mt-3 text-grey",
                                                                      style: { "font-size": "15px" },
                                                                      "data-aos": "fade-up",
                                                                      "data-aos-delay": "500"
                                                                    }, [
                                                                      createTextVNode(" Keep connect with us and "),
                                                                      createVNode("br"),
                                                                      createTextVNode(" login with your personal info ")
                                                                    ]),
                                                                    createVNode(_component_v_btn, {
                                                                      rounded: "",
                                                                      width: "250px",
                                                                      class: "mt-6",
                                                                      onClick: ($event) => _ctx.step--,
                                                                      "data-aos": "fade-up",
                                                                      "data-aos-delay": "500"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("Login")
                                                                      ]),
                                                                      _: 1
                                                                    }, 8, ["onClick"])
                                                                  ])
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
                                                              createVNode(_component_v_card_text, {
                                                                "data-aos": "fade-right",
                                                                "data-aos-delay": "500"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                                  createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_form, {
                                                                modelValue: _ctx.valid,
                                                                "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                                class: "mt-5",
                                                                onSubmit: withModifiers($options.handleSignup, ["prevent"]),
                                                                "data-aos": "fade-up",
                                                                "data-aos-delay": "500"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: _ctx.signupName,
                                                                    "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                                    rules: _ctx.nameRules,
                                                                    counter: 50,
                                                                    label: "Username",
                                                                    variant: "outlined",
                                                                    "prepend-inner-icon": "mdi-account",
                                                                    required: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: _ctx.signupEmail,
                                                                    "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                                    rules: _ctx.emailRules,
                                                                    counter: 50,
                                                                    label: "Email",
                                                                    variant: "outlined",
                                                                    "prepend-inner-icon": "mdi-email",
                                                                    required: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                  createVNode(_component_v_text_field, {
                                                                    modelValue: _ctx.signupPassword,
                                                                    "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                                    rules: _ctx.passwordRules,
                                                                    counter: 50,
                                                                    label: "Password",
                                                                    variant: "outlined",
                                                                    "prepend-inner-icon": "mdi-lock",
                                                                    "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                    "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                    type: _ctx.passwordShow ? "text" : "password",
                                                                    required: ""
                                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                                  createVNode(_component_v_btn, {
                                                                    class: "mt-2 text-white",
                                                                    color: "#e5345b",
                                                                    block: "",
                                                                    large: "",
                                                                    depressed: "",
                                                                    type: "submit",
                                                                    disabled: !_ctx.valid
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Signup")
                                                                    ]),
                                                                    _: 1
                                                                  }, 8, ["disabled"]),
                                                                  createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                                  createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                                    createVNode(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_icon, {
                                                                          start: "",
                                                                          icon: "mdi-google",
                                                                          color: "red"
                                                                        }),
                                                                        createTextVNode(" Google ")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_icon, {
                                                                          start: "",
                                                                          icon: "mdi-facebook",
                                                                          color: "blue"
                                                                        }),
                                                                        createTextVNode(" Google ")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(_component_v_btn, {
                                                                      class: "ma-2",
                                                                      variant: "outlined",
                                                                      color: "grey"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_icon, {
                                                                          start: "",
                                                                          icon: "mdi-twitter",
                                                                          color: "blue-lighten-3"
                                                                        }),
                                                                        createTextVNode(" Google ")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ])
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
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_row, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_sheet, {
                                                              color: "#EEEEEE",
                                                              height: "100%",
                                                              width: "100%",
                                                              style: { "border-radius": "40px 0 0 0" }
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                                  createVNode("h3", {
                                                                    class: "text-h5",
                                                                    "data-aos": "fade-up",
                                                                    "data-aos-delay": "500"
                                                                  }, " Already have an account ? "),
                                                                  createVNode("p", {
                                                                    class: "mt-3 text-grey",
                                                                    style: { "font-size": "15px" },
                                                                    "data-aos": "fade-up",
                                                                    "data-aos-delay": "500"
                                                                  }, [
                                                                    createTextVNode(" Keep connect with us and "),
                                                                    createVNode("br"),
                                                                    createTextVNode(" login with your personal info ")
                                                                  ]),
                                                                  createVNode(_component_v_btn, {
                                                                    rounded: "",
                                                                    width: "250px",
                                                                    class: "mt-6",
                                                                    onClick: ($event) => _ctx.step--,
                                                                    "data-aos": "fade-up",
                                                                    "data-aos-delay": "500"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("Login")
                                                                    ]),
                                                                    _: 1
                                                                  }, 8, ["onClick"])
                                                                ])
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
                                                            createVNode(_component_v_card_text, {
                                                              "data-aos": "fade-right",
                                                              "data-aos-delay": "500"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                                createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_form, {
                                                              modelValue: _ctx.valid,
                                                              "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                              class: "mt-5",
                                                              onSubmit: withModifiers($options.handleSignup, ["prevent"]),
                                                              "data-aos": "fade-up",
                                                              "data-aos-delay": "500"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: _ctx.signupName,
                                                                  "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                                  rules: _ctx.nameRules,
                                                                  counter: 50,
                                                                  label: "Username",
                                                                  variant: "outlined",
                                                                  "prepend-inner-icon": "mdi-account",
                                                                  required: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: _ctx.signupEmail,
                                                                  "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                                  rules: _ctx.emailRules,
                                                                  counter: 50,
                                                                  label: "Email",
                                                                  variant: "outlined",
                                                                  "prepend-inner-icon": "mdi-email",
                                                                  required: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                                createVNode(_component_v_text_field, {
                                                                  modelValue: _ctx.signupPassword,
                                                                  "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                                  rules: _ctx.passwordRules,
                                                                  counter: 50,
                                                                  label: "Password",
                                                                  variant: "outlined",
                                                                  "prepend-inner-icon": "mdi-lock",
                                                                  "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                  "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                  type: _ctx.passwordShow ? "text" : "password",
                                                                  required: ""
                                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                                createVNode(_component_v_btn, {
                                                                  class: "mt-2 text-white",
                                                                  color: "#e5345b",
                                                                  block: "",
                                                                  large: "",
                                                                  depressed: "",
                                                                  type: "submit",
                                                                  disabled: !_ctx.valid
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Signup")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["disabled"]),
                                                                createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                                createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                                  createVNode(_component_v_btn, {
                                                                    class: "ma-2",
                                                                    variant: "outlined",
                                                                    color: "grey"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_icon, {
                                                                        start: "",
                                                                        icon: "mdi-google",
                                                                        color: "red"
                                                                      }),
                                                                      createTextVNode(" Google ")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_btn, {
                                                                    class: "ma-2",
                                                                    variant: "outlined",
                                                                    color: "grey"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_icon, {
                                                                        start: "",
                                                                        icon: "mdi-facebook",
                                                                        color: "blue"
                                                                      }),
                                                                      createTextVNode(" Google ")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(_component_v_btn, {
                                                                    class: "ma-2",
                                                                    variant: "outlined",
                                                                    color: "grey"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_icon, {
                                                                        start: "",
                                                                        icon: "mdi-twitter",
                                                                        color: "blue-lighten-3"
                                                                      }),
                                                                      createTextVNode(" Google ")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ])
                                                              ]),
                                                              _: 1
                                                            }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_window_item, { value: 1 }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_text, {
                                                            "data-aos": "fade-right",
                                                            "data-aos-delay": "500"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                              createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_form, {
                                                            modelValue: _ctx.valid,
                                                            "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                            class: "mt-5",
                                                            onSubmit: withModifiers($options.handleLogin, ["prevent"]),
                                                            "data-aos": "fade-up",
                                                            "data-aos-delay": "500"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: _ctx.email,
                                                                "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                                rules: _ctx.emailRules,
                                                                counter: 50,
                                                                label: "Email",
                                                                variant: "outlined",
                                                                "prepend-inner-icon": "mdi-email",
                                                                required: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: _ctx.password,
                                                                "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                                rules: _ctx.passwordRules,
                                                                counter: 50,
                                                                label: "Password",
                                                                variant: "outlined",
                                                                "prepend-inner-icon": "mdi-lock",
                                                                "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                type: _ctx.passwordShow ? "text" : "password",
                                                                required: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                              createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                                createVNode(_component_v_switch, {
                                                                  label: "Remember me",
                                                                  color: "#e5345b",
                                                                  class: "mt-4"
                                                                }),
                                                                createVNode("p", {
                                                                  class: "text-grey",
                                                                  style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                                }, " Forgot Password? ")
                                                              ]),
                                                              createVNode(_component_v_btn, {
                                                                class: "mt-2 text-white",
                                                                color: "#e5345b",
                                                                block: "",
                                                                large: "",
                                                                depressed: "",
                                                                type: "submit",
                                                                disabled: !_ctx.valid
                                                              }, {
                                                                default: withCtx(() => [
                                                                  !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                                ]),
                                                                _: 1
                                                              }, 8, ["disabled"]),
                                                              createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                              createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                                createVNode(_component_v_btn, {
                                                                  class: "ma-2",
                                                                  variant: "outlined",
                                                                  color: "grey"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_icon, {
                                                                      start: "",
                                                                      icon: "mdi-google",
                                                                      color: "red"
                                                                    }),
                                                                    createTextVNode(" Google ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_btn, {
                                                                  class: "ma-2",
                                                                  variant: "outlined",
                                                                  color: "grey"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_icon, {
                                                                      start: "",
                                                                      icon: "mdi-facebook",
                                                                      color: "blue"
                                                                    }),
                                                                    createTextVNode(" Google ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_btn, {
                                                                  class: "ma-2",
                                                                  variant: "outlined",
                                                                  color: "grey"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_icon, {
                                                                      start: "",
                                                                      icon: "mdi-twitter",
                                                                      color: "blue-lighten-3"
                                                                    }),
                                                                    createTextVNode(" Google ")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ])
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_sheet, {
                                                            color: "#EEEEEE",
                                                            height: "100%",
                                                            width: "100%",
                                                            style: { "border-radius": "0 40px 0px 0px" }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                                createVNode("h3", {
                                                                  class: "text-h5",
                                                                  "data-aos": "fade-right",
                                                                  "data-aos-delay": "500"
                                                                }, " Don't have an account "),
                                                                createVNode("p", {
                                                                  class: "mt-3 text-grey",
                                                                  style: { "font-size": "15px" },
                                                                  "data-aos": "fade-up",
                                                                  "data-aos-delay": "500"
                                                                }, [
                                                                  createTextVNode(" Enter your personal "),
                                                                  createVNode("br"),
                                                                  createTextVNode(" information and join us! ")
                                                                ]),
                                                                createVNode(_component_v_btn, {
                                                                  rounded: "",
                                                                  width: "250px",
                                                                  class: "mt-6",
                                                                  onClick: ($event) => _ctx.step++,
                                                                  "data-aos": "fade-up",
                                                                  "data-aos-delay": "500"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Signup")
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
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_window_item, { value: 2 }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_sheet, {
                                                            color: "#EEEEEE",
                                                            height: "100%",
                                                            width: "100%",
                                                            style: { "border-radius": "40px 0 0 0" }
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                                createVNode("h3", {
                                                                  class: "text-h5",
                                                                  "data-aos": "fade-up",
                                                                  "data-aos-delay": "500"
                                                                }, " Already have an account ? "),
                                                                createVNode("p", {
                                                                  class: "mt-3 text-grey",
                                                                  style: { "font-size": "15px" },
                                                                  "data-aos": "fade-up",
                                                                  "data-aos-delay": "500"
                                                                }, [
                                                                  createTextVNode(" Keep connect with us and "),
                                                                  createVNode("br"),
                                                                  createTextVNode(" login with your personal info ")
                                                                ]),
                                                                createVNode(_component_v_btn, {
                                                                  rounded: "",
                                                                  width: "250px",
                                                                  class: "mt-6",
                                                                  onClick: ($event) => _ctx.step--,
                                                                  "data-aos": "fade-up",
                                                                  "data-aos-delay": "500"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("Login")
                                                                  ]),
                                                                  _: 1
                                                                }, 8, ["onClick"])
                                                              ])
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
                                                          createVNode(_component_v_card_text, {
                                                            "data-aos": "fade-right",
                                                            "data-aos-delay": "500"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                              createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_form, {
                                                            modelValue: _ctx.valid,
                                                            "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                            class: "mt-5",
                                                            onSubmit: withModifiers($options.handleSignup, ["prevent"]),
                                                            "data-aos": "fade-up",
                                                            "data-aos-delay": "500"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: _ctx.signupName,
                                                                "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                                rules: _ctx.nameRules,
                                                                counter: 50,
                                                                label: "Username",
                                                                variant: "outlined",
                                                                "prepend-inner-icon": "mdi-account",
                                                                required: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: _ctx.signupEmail,
                                                                "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                                rules: _ctx.emailRules,
                                                                counter: 50,
                                                                label: "Email",
                                                                variant: "outlined",
                                                                "prepend-inner-icon": "mdi-email",
                                                                required: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                              createVNode(_component_v_text_field, {
                                                                modelValue: _ctx.signupPassword,
                                                                "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                                rules: _ctx.passwordRules,
                                                                counter: 50,
                                                                label: "Password",
                                                                variant: "outlined",
                                                                "prepend-inner-icon": "mdi-lock",
                                                                "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                                "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                                type: _ctx.passwordShow ? "text" : "password",
                                                                required: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                              createVNode(_component_v_btn, {
                                                                class: "mt-2 text-white",
                                                                color: "#e5345b",
                                                                block: "",
                                                                large: "",
                                                                depressed: "",
                                                                type: "submit",
                                                                disabled: !_ctx.valid
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Signup")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["disabled"]),
                                                              createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                              createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                                createVNode(_component_v_btn, {
                                                                  class: "ma-2",
                                                                  variant: "outlined",
                                                                  color: "grey"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_icon, {
                                                                      start: "",
                                                                      icon: "mdi-google",
                                                                      color: "red"
                                                                    }),
                                                                    createTextVNode(" Google ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_btn, {
                                                                  class: "ma-2",
                                                                  variant: "outlined",
                                                                  color: "grey"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_icon, {
                                                                      start: "",
                                                                      icon: "mdi-facebook",
                                                                      color: "blue"
                                                                    }),
                                                                    createTextVNode(" Google ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_btn, {
                                                                  class: "ma-2",
                                                                  variant: "outlined",
                                                                  color: "grey"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_icon, {
                                                                      start: "",
                                                                      icon: "mdi-twitter",
                                                                      color: "blue-lighten-3"
                                                                    }),
                                                                    createTextVNode(" Google ")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ])
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_window, {
                                          modelValue: _ctx.step,
                                          "onUpdate:modelValue": ($event) => _ctx.step = $event
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_window_item, { value: 1 }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_text, {
                                                          "data-aos": "fade-right",
                                                          "data-aos-delay": "500"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                            createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_form, {
                                                          modelValue: _ctx.valid,
                                                          "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                          class: "mt-5",
                                                          onSubmit: withModifiers($options.handleLogin, ["prevent"]),
                                                          "data-aos": "fade-up",
                                                          "data-aos-delay": "500"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: _ctx.email,
                                                              "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                              rules: _ctx.emailRules,
                                                              counter: 50,
                                                              label: "Email",
                                                              variant: "outlined",
                                                              "prepend-inner-icon": "mdi-email",
                                                              required: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: _ctx.password,
                                                              "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                              rules: _ctx.passwordRules,
                                                              counter: 50,
                                                              label: "Password",
                                                              variant: "outlined",
                                                              "prepend-inner-icon": "mdi-lock",
                                                              "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                              "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                              type: _ctx.passwordShow ? "text" : "password",
                                                              required: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                            createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                              createVNode(_component_v_switch, {
                                                                label: "Remember me",
                                                                color: "#e5345b",
                                                                class: "mt-4"
                                                              }),
                                                              createVNode("p", {
                                                                class: "text-grey",
                                                                style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                              }, " Forgot Password? ")
                                                            ]),
                                                            createVNode(_component_v_btn, {
                                                              class: "mt-2 text-white",
                                                              color: "#e5345b",
                                                              block: "",
                                                              large: "",
                                                              depressed: "",
                                                              type: "submit",
                                                              disabled: !_ctx.valid
                                                            }, {
                                                              default: withCtx(() => [
                                                                !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                              ]),
                                                              _: 1
                                                            }, 8, ["disabled"]),
                                                            createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                            createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                              createVNode(_component_v_btn, {
                                                                class: "ma-2",
                                                                variant: "outlined",
                                                                color: "grey"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_icon, {
                                                                    start: "",
                                                                    icon: "mdi-google",
                                                                    color: "red"
                                                                  }),
                                                                  createTextVNode(" Google ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_btn, {
                                                                class: "ma-2",
                                                                variant: "outlined",
                                                                color: "grey"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_icon, {
                                                                    start: "",
                                                                    icon: "mdi-facebook",
                                                                    color: "blue"
                                                                  }),
                                                                  createTextVNode(" Google ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_btn, {
                                                                class: "ma-2",
                                                                variant: "outlined",
                                                                color: "grey"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_icon, {
                                                                    start: "",
                                                                    icon: "mdi-twitter",
                                                                    color: "blue-lighten-3"
                                                                  }),
                                                                  createTextVNode(" Google ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_sheet, {
                                                          color: "#EEEEEE",
                                                          height: "100%",
                                                          width: "100%",
                                                          style: { "border-radius": "0 40px 0px 0px" }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                              createVNode("h3", {
                                                                class: "text-h5",
                                                                "data-aos": "fade-right",
                                                                "data-aos-delay": "500"
                                                              }, " Don't have an account "),
                                                              createVNode("p", {
                                                                class: "mt-3 text-grey",
                                                                style: { "font-size": "15px" },
                                                                "data-aos": "fade-up",
                                                                "data-aos-delay": "500"
                                                              }, [
                                                                createTextVNode(" Enter your personal "),
                                                                createVNode("br"),
                                                                createTextVNode(" information and join us! ")
                                                              ]),
                                                              createVNode(_component_v_btn, {
                                                                rounded: "",
                                                                width: "250px",
                                                                class: "mt-6",
                                                                onClick: ($event) => _ctx.step++,
                                                                "data-aos": "fade-up",
                                                                "data-aos-delay": "500"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Signup")
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
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_window_item, { value: 2 }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_sheet, {
                                                          color: "#EEEEEE",
                                                          height: "100%",
                                                          width: "100%",
                                                          style: { "border-radius": "40px 0 0 0" }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                              createVNode("h3", {
                                                                class: "text-h5",
                                                                "data-aos": "fade-up",
                                                                "data-aos-delay": "500"
                                                              }, " Already have an account ? "),
                                                              createVNode("p", {
                                                                class: "mt-3 text-grey",
                                                                style: { "font-size": "15px" },
                                                                "data-aos": "fade-up",
                                                                "data-aos-delay": "500"
                                                              }, [
                                                                createTextVNode(" Keep connect with us and "),
                                                                createVNode("br"),
                                                                createTextVNode(" login with your personal info ")
                                                              ]),
                                                              createVNode(_component_v_btn, {
                                                                rounded: "",
                                                                width: "250px",
                                                                class: "mt-6",
                                                                onClick: ($event) => _ctx.step--,
                                                                "data-aos": "fade-up",
                                                                "data-aos-delay": "500"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("Login")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["onClick"])
                                                            ])
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
                                                        createVNode(_component_v_card_text, {
                                                          "data-aos": "fade-right",
                                                          "data-aos-delay": "500"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                            createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_form, {
                                                          modelValue: _ctx.valid,
                                                          "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                          class: "mt-5",
                                                          onSubmit: withModifiers($options.handleSignup, ["prevent"]),
                                                          "data-aos": "fade-up",
                                                          "data-aos-delay": "500"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: _ctx.signupName,
                                                              "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                              rules: _ctx.nameRules,
                                                              counter: 50,
                                                              label: "Username",
                                                              variant: "outlined",
                                                              "prepend-inner-icon": "mdi-account",
                                                              required: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: _ctx.signupEmail,
                                                              "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                              rules: _ctx.emailRules,
                                                              counter: 50,
                                                              label: "Email",
                                                              variant: "outlined",
                                                              "prepend-inner-icon": "mdi-email",
                                                              required: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                            createVNode(_component_v_text_field, {
                                                              modelValue: _ctx.signupPassword,
                                                              "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                              rules: _ctx.passwordRules,
                                                              counter: 50,
                                                              label: "Password",
                                                              variant: "outlined",
                                                              "prepend-inner-icon": "mdi-lock",
                                                              "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                              "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                              type: _ctx.passwordShow ? "text" : "password",
                                                              required: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                            createVNode(_component_v_btn, {
                                                              class: "mt-2 text-white",
                                                              color: "#e5345b",
                                                              block: "",
                                                              large: "",
                                                              depressed: "",
                                                              type: "submit",
                                                              disabled: !_ctx.valid
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Signup")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["disabled"]),
                                                            createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                            createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                              createVNode(_component_v_btn, {
                                                                class: "ma-2",
                                                                variant: "outlined",
                                                                color: "grey"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_icon, {
                                                                    start: "",
                                                                    icon: "mdi-google",
                                                                    color: "red"
                                                                  }),
                                                                  createTextVNode(" Google ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_btn, {
                                                                class: "ma-2",
                                                                variant: "outlined",
                                                                color: "grey"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_icon, {
                                                                    start: "",
                                                                    icon: "mdi-facebook",
                                                                    color: "blue"
                                                                  }),
                                                                  createTextVNode(" Google ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_btn, {
                                                                class: "ma-2",
                                                                variant: "outlined",
                                                                color: "grey"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_icon, {
                                                                    start: "",
                                                                    icon: "mdi-twitter",
                                                                    color: "blue-lighten-3"
                                                                  }),
                                                                  createTextVNode(" Google ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_card, { flat: "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_window, {
                                        modelValue: _ctx.step,
                                        "onUpdate:modelValue": ($event) => _ctx.step = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_window_item, { value: 1 }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_text, {
                                                        "data-aos": "fade-right",
                                                        "data-aos-delay": "500"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                          createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_form, {
                                                        modelValue: _ctx.valid,
                                                        "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                        class: "mt-5",
                                                        onSubmit: withModifiers($options.handleLogin, ["prevent"]),
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": "500"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: _ctx.email,
                                                            "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                            rules: _ctx.emailRules,
                                                            counter: 50,
                                                            label: "Email",
                                                            variant: "outlined",
                                                            "prepend-inner-icon": "mdi-email",
                                                            required: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: _ctx.password,
                                                            "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                            rules: _ctx.passwordRules,
                                                            counter: 50,
                                                            label: "Password",
                                                            variant: "outlined",
                                                            "prepend-inner-icon": "mdi-lock",
                                                            "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                            "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                            type: _ctx.passwordShow ? "text" : "password",
                                                            required: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                          createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                            createVNode(_component_v_switch, {
                                                              label: "Remember me",
                                                              color: "#e5345b",
                                                              class: "mt-4"
                                                            }),
                                                            createVNode("p", {
                                                              class: "text-grey",
                                                              style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                            }, " Forgot Password? ")
                                                          ]),
                                                          createVNode(_component_v_btn, {
                                                            class: "mt-2 text-white",
                                                            color: "#e5345b",
                                                            block: "",
                                                            large: "",
                                                            depressed: "",
                                                            type: "submit",
                                                            disabled: !_ctx.valid
                                                          }, {
                                                            default: withCtx(() => [
                                                              !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                            ]),
                                                            _: 1
                                                          }, 8, ["disabled"]),
                                                          createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                          createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                            createVNode(_component_v_btn, {
                                                              class: "ma-2",
                                                              variant: "outlined",
                                                              color: "grey"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_icon, {
                                                                  start: "",
                                                                  icon: "mdi-google",
                                                                  color: "red"
                                                                }),
                                                                createTextVNode(" Google ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_btn, {
                                                              class: "ma-2",
                                                              variant: "outlined",
                                                              color: "grey"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_icon, {
                                                                  start: "",
                                                                  icon: "mdi-facebook",
                                                                  color: "blue"
                                                                }),
                                                                createTextVNode(" Google ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_btn, {
                                                              class: "ma-2",
                                                              variant: "outlined",
                                                              color: "grey"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_icon, {
                                                                  start: "",
                                                                  icon: "mdi-twitter",
                                                                  color: "blue-lighten-3"
                                                                }),
                                                                createTextVNode(" Google ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_sheet, {
                                                        color: "#EEEEEE",
                                                        height: "100%",
                                                        width: "100%",
                                                        style: { "border-radius": "0 40px 0px 0px" }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                            createVNode("h3", {
                                                              class: "text-h5",
                                                              "data-aos": "fade-right",
                                                              "data-aos-delay": "500"
                                                            }, " Don't have an account "),
                                                            createVNode("p", {
                                                              class: "mt-3 text-grey",
                                                              style: { "font-size": "15px" },
                                                              "data-aos": "fade-up",
                                                              "data-aos-delay": "500"
                                                            }, [
                                                              createTextVNode(" Enter your personal "),
                                                              createVNode("br"),
                                                              createTextVNode(" information and join us! ")
                                                            ]),
                                                            createVNode(_component_v_btn, {
                                                              rounded: "",
                                                              width: "250px",
                                                              class: "mt-6",
                                                              onClick: ($event) => _ctx.step++,
                                                              "data-aos": "fade-up",
                                                              "data-aos-delay": "500"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Signup")
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
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_window_item, { value: 2 }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_sheet, {
                                                        color: "#EEEEEE",
                                                        height: "100%",
                                                        width: "100%",
                                                        style: { "border-radius": "40px 0 0 0" }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                            createVNode("h3", {
                                                              class: "text-h5",
                                                              "data-aos": "fade-up",
                                                              "data-aos-delay": "500"
                                                            }, " Already have an account ? "),
                                                            createVNode("p", {
                                                              class: "mt-3 text-grey",
                                                              style: { "font-size": "15px" },
                                                              "data-aos": "fade-up",
                                                              "data-aos-delay": "500"
                                                            }, [
                                                              createTextVNode(" Keep connect with us and "),
                                                              createVNode("br"),
                                                              createTextVNode(" login with your personal info ")
                                                            ]),
                                                            createVNode(_component_v_btn, {
                                                              rounded: "",
                                                              width: "250px",
                                                              class: "mt-6",
                                                              onClick: ($event) => _ctx.step--,
                                                              "data-aos": "fade-up",
                                                              "data-aos-delay": "500"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Login")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["onClick"])
                                                          ])
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
                                                      createVNode(_component_v_card_text, {
                                                        "data-aos": "fade-right",
                                                        "data-aos-delay": "500"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                          createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_form, {
                                                        modelValue: _ctx.valid,
                                                        "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                        class: "mt-5",
                                                        onSubmit: withModifiers($options.handleSignup, ["prevent"]),
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": "500"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: _ctx.signupName,
                                                            "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                            rules: _ctx.nameRules,
                                                            counter: 50,
                                                            label: "Username",
                                                            variant: "outlined",
                                                            "prepend-inner-icon": "mdi-account",
                                                            required: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: _ctx.signupEmail,
                                                            "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                            rules: _ctx.emailRules,
                                                            counter: 50,
                                                            label: "Email",
                                                            variant: "outlined",
                                                            "prepend-inner-icon": "mdi-email",
                                                            required: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                          createVNode(_component_v_text_field, {
                                                            modelValue: _ctx.signupPassword,
                                                            "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                            rules: _ctx.passwordRules,
                                                            counter: 50,
                                                            label: "Password",
                                                            variant: "outlined",
                                                            "prepend-inner-icon": "mdi-lock",
                                                            "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                            "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                            type: _ctx.passwordShow ? "text" : "password",
                                                            required: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                          createVNode(_component_v_btn, {
                                                            class: "mt-2 text-white",
                                                            color: "#e5345b",
                                                            block: "",
                                                            large: "",
                                                            depressed: "",
                                                            type: "submit",
                                                            disabled: !_ctx.valid
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Signup")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["disabled"]),
                                                          createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                          createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                            createVNode(_component_v_btn, {
                                                              class: "ma-2",
                                                              variant: "outlined",
                                                              color: "grey"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_icon, {
                                                                  start: "",
                                                                  icon: "mdi-google",
                                                                  color: "red"
                                                                }),
                                                                createTextVNode(" Google ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_btn, {
                                                              class: "ma-2",
                                                              variant: "outlined",
                                                              color: "grey"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_icon, {
                                                                  start: "",
                                                                  icon: "mdi-facebook",
                                                                  color: "blue"
                                                                }),
                                                                createTextVNode(" Google ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_btn, {
                                                              class: "ma-2",
                                                              variant: "outlined",
                                                              color: "grey"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_icon, {
                                                                  start: "",
                                                                  icon: "mdi-twitter",
                                                                  color: "blue-lighten-3"
                                                                }),
                                                                createTextVNode(" Google ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
                              sm: "8"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_window, {
                                      modelValue: _ctx.step,
                                      "onUpdate:modelValue": ($event) => _ctx.step = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_window_item, { value: 1 }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_text, {
                                                      "data-aos": "fade-right",
                                                      "data-aos-delay": "500"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                        createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_form, {
                                                      modelValue: _ctx.valid,
                                                      "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                      class: "mt-5",
                                                      onSubmit: withModifiers($options.handleLogin, ["prevent"]),
                                                      "data-aos": "fade-up",
                                                      "data-aos-delay": "500"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: _ctx.email,
                                                          "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                          rules: _ctx.emailRules,
                                                          counter: 50,
                                                          label: "Email",
                                                          variant: "outlined",
                                                          "prepend-inner-icon": "mdi-email",
                                                          required: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: _ctx.password,
                                                          "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                          rules: _ctx.passwordRules,
                                                          counter: 50,
                                                          label: "Password",
                                                          variant: "outlined",
                                                          "prepend-inner-icon": "mdi-lock",
                                                          "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                          "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                          type: _ctx.passwordShow ? "text" : "password",
                                                          required: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                        createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                          createVNode(_component_v_switch, {
                                                            label: "Remember me",
                                                            color: "#e5345b",
                                                            class: "mt-4"
                                                          }),
                                                          createVNode("p", {
                                                            class: "text-grey",
                                                            style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                          }, " Forgot Password? ")
                                                        ]),
                                                        createVNode(_component_v_btn, {
                                                          class: "mt-2 text-white",
                                                          color: "#e5345b",
                                                          block: "",
                                                          large: "",
                                                          depressed: "",
                                                          type: "submit",
                                                          disabled: !_ctx.valid
                                                        }, {
                                                          default: withCtx(() => [
                                                            !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                          ]),
                                                          _: 1
                                                        }, 8, ["disabled"]),
                                                        createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                        createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                          createVNode(_component_v_btn, {
                                                            class: "ma-2",
                                                            variant: "outlined",
                                                            color: "grey"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, {
                                                                start: "",
                                                                icon: "mdi-google",
                                                                color: "red"
                                                              }),
                                                              createTextVNode(" Google ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_btn, {
                                                            class: "ma-2",
                                                            variant: "outlined",
                                                            color: "grey"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, {
                                                                start: "",
                                                                icon: "mdi-facebook",
                                                                color: "blue"
                                                              }),
                                                              createTextVNode(" Google ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_btn, {
                                                            class: "ma-2",
                                                            variant: "outlined",
                                                            color: "grey"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, {
                                                                start: "",
                                                                icon: "mdi-twitter",
                                                                color: "blue-lighten-3"
                                                              }),
                                                              createTextVNode(" Google ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_sheet, {
                                                      color: "#EEEEEE",
                                                      height: "100%",
                                                      width: "100%",
                                                      style: { "border-radius": "0 40px 0px 0px" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                          createVNode("h3", {
                                                            class: "text-h5",
                                                            "data-aos": "fade-right",
                                                            "data-aos-delay": "500"
                                                          }, " Don't have an account "),
                                                          createVNode("p", {
                                                            class: "mt-3 text-grey",
                                                            style: { "font-size": "15px" },
                                                            "data-aos": "fade-up",
                                                            "data-aos-delay": "500"
                                                          }, [
                                                            createTextVNode(" Enter your personal "),
                                                            createVNode("br"),
                                                            createTextVNode(" information and join us! ")
                                                          ]),
                                                          createVNode(_component_v_btn, {
                                                            rounded: "",
                                                            width: "250px",
                                                            class: "mt-6",
                                                            onClick: ($event) => _ctx.step++,
                                                            "data-aos": "fade-up",
                                                            "data-aos-delay": "500"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Signup")
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
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_window_item, { value: 2 }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_sheet, {
                                                      color: "#EEEEEE",
                                                      height: "100%",
                                                      width: "100%",
                                                      style: { "border-radius": "40px 0 0 0" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                          createVNode("h3", {
                                                            class: "text-h5",
                                                            "data-aos": "fade-up",
                                                            "data-aos-delay": "500"
                                                          }, " Already have an account ? "),
                                                          createVNode("p", {
                                                            class: "mt-3 text-grey",
                                                            style: { "font-size": "15px" },
                                                            "data-aos": "fade-up",
                                                            "data-aos-delay": "500"
                                                          }, [
                                                            createTextVNode(" Keep connect with us and "),
                                                            createVNode("br"),
                                                            createTextVNode(" login with your personal info ")
                                                          ]),
                                                          createVNode(_component_v_btn, {
                                                            rounded: "",
                                                            width: "250px",
                                                            class: "mt-6",
                                                            onClick: ($event) => _ctx.step--,
                                                            "data-aos": "fade-up",
                                                            "data-aos-delay": "500"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Login")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["onClick"])
                                                        ])
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
                                                    createVNode(_component_v_card_text, {
                                                      "data-aos": "fade-right",
                                                      "data-aos-delay": "500"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                        createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_form, {
                                                      modelValue: _ctx.valid,
                                                      "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                      class: "mt-5",
                                                      onSubmit: withModifiers($options.handleSignup, ["prevent"]),
                                                      "data-aos": "fade-up",
                                                      "data-aos-delay": "500"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: _ctx.signupName,
                                                          "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                          rules: _ctx.nameRules,
                                                          counter: 50,
                                                          label: "Username",
                                                          variant: "outlined",
                                                          "prepend-inner-icon": "mdi-account",
                                                          required: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: _ctx.signupEmail,
                                                          "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                          rules: _ctx.emailRules,
                                                          counter: 50,
                                                          label: "Email",
                                                          variant: "outlined",
                                                          "prepend-inner-icon": "mdi-email",
                                                          required: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                        createVNode(_component_v_text_field, {
                                                          modelValue: _ctx.signupPassword,
                                                          "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                          rules: _ctx.passwordRules,
                                                          counter: 50,
                                                          label: "Password",
                                                          variant: "outlined",
                                                          "prepend-inner-icon": "mdi-lock",
                                                          "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                          "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                          type: _ctx.passwordShow ? "text" : "password",
                                                          required: ""
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                        createVNode(_component_v_btn, {
                                                          class: "mt-2 text-white",
                                                          color: "#e5345b",
                                                          block: "",
                                                          large: "",
                                                          depressed: "",
                                                          type: "submit",
                                                          disabled: !_ctx.valid
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Signup")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["disabled"]),
                                                        createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                        createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                          createVNode(_component_v_btn, {
                                                            class: "ma-2",
                                                            variant: "outlined",
                                                            color: "grey"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, {
                                                                start: "",
                                                                icon: "mdi-google",
                                                                color: "red"
                                                              }),
                                                              createTextVNode(" Google ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_btn, {
                                                            class: "ma-2",
                                                            variant: "outlined",
                                                            color: "grey"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, {
                                                                start: "",
                                                                icon: "mdi-facebook",
                                                                color: "blue"
                                                              }),
                                                              createTextVNode(" Google ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_btn, {
                                                            class: "ma-2",
                                                            variant: "outlined",
                                                            color: "grey"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, {
                                                                start: "",
                                                                icon: "mdi-twitter",
                                                                color: "blue-lighten-3"
                                                              }),
                                                              createTextVNode(" Google ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
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
                      createVNode(_component_v_row, { class: "d-flex align-center justify-center" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "8",
                            sm: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_window, {
                                    modelValue: _ctx.step,
                                    "onUpdate:modelValue": ($event) => _ctx.step = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_window_item, { value: 1 }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_text, {
                                                    "data-aos": "fade-right",
                                                    "data-aos-delay": "500"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                      createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_form, {
                                                    modelValue: _ctx.valid,
                                                    "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                    class: "mt-5",
                                                    onSubmit: withModifiers($options.handleLogin, ["prevent"]),
                                                    "data-aos": "fade-up",
                                                    "data-aos-delay": "500"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: _ctx.email,
                                                        "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                        rules: _ctx.emailRules,
                                                        counter: 50,
                                                        label: "Email",
                                                        variant: "outlined",
                                                        "prepend-inner-icon": "mdi-email",
                                                        required: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: _ctx.password,
                                                        "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                        rules: _ctx.passwordRules,
                                                        counter: 50,
                                                        label: "Password",
                                                        variant: "outlined",
                                                        "prepend-inner-icon": "mdi-lock",
                                                        "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                        "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                        type: _ctx.passwordShow ? "text" : "password",
                                                        required: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                      createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                        createVNode(_component_v_switch, {
                                                          label: "Remember me",
                                                          color: "#e5345b",
                                                          class: "mt-4"
                                                        }),
                                                        createVNode("p", {
                                                          class: "text-grey",
                                                          style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                        }, " Forgot Password? ")
                                                      ]),
                                                      createVNode(_component_v_btn, {
                                                        class: "mt-2 text-white",
                                                        color: "#e5345b",
                                                        block: "",
                                                        large: "",
                                                        depressed: "",
                                                        type: "submit",
                                                        disabled: !_ctx.valid
                                                      }, {
                                                        default: withCtx(() => [
                                                          !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                        ]),
                                                        _: 1
                                                      }, 8, ["disabled"]),
                                                      createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                      createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                        createVNode(_component_v_btn, {
                                                          class: "ma-2",
                                                          variant: "outlined",
                                                          color: "grey"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, {
                                                              start: "",
                                                              icon: "mdi-google",
                                                              color: "red"
                                                            }),
                                                            createTextVNode(" Google ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_btn, {
                                                          class: "ma-2",
                                                          variant: "outlined",
                                                          color: "grey"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, {
                                                              start: "",
                                                              icon: "mdi-facebook",
                                                              color: "blue"
                                                            }),
                                                            createTextVNode(" Google ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_btn, {
                                                          class: "ma-2",
                                                          variant: "outlined",
                                                          color: "grey"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, {
                                                              start: "",
                                                              icon: "mdi-twitter",
                                                              color: "blue-lighten-3"
                                                            }),
                                                            createTextVNode(" Google ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_sheet, {
                                                    color: "#EEEEEE",
                                                    height: "100%",
                                                    width: "100%",
                                                    style: { "border-radius": "0 40px 0px 0px" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                        createVNode("h3", {
                                                          class: "text-h5",
                                                          "data-aos": "fade-right",
                                                          "data-aos-delay": "500"
                                                        }, " Don't have an account "),
                                                        createVNode("p", {
                                                          class: "mt-3 text-grey",
                                                          style: { "font-size": "15px" },
                                                          "data-aos": "fade-up",
                                                          "data-aos-delay": "500"
                                                        }, [
                                                          createTextVNode(" Enter your personal "),
                                                          createVNode("br"),
                                                          createTextVNode(" information and join us! ")
                                                        ]),
                                                        createVNode(_component_v_btn, {
                                                          rounded: "",
                                                          width: "250px",
                                                          class: "mt-6",
                                                          onClick: ($event) => _ctx.step++,
                                                          "data-aos": "fade-up",
                                                          "data-aos-delay": "500"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Signup")
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
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_window_item, { value: 2 }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_sheet, {
                                                    color: "#EEEEEE",
                                                    height: "100%",
                                                    width: "100%",
                                                    style: { "border-radius": "40px 0 0 0" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                        createVNode("h3", {
                                                          class: "text-h5",
                                                          "data-aos": "fade-up",
                                                          "data-aos-delay": "500"
                                                        }, " Already have an account ? "),
                                                        createVNode("p", {
                                                          class: "mt-3 text-grey",
                                                          style: { "font-size": "15px" },
                                                          "data-aos": "fade-up",
                                                          "data-aos-delay": "500"
                                                        }, [
                                                          createTextVNode(" Keep connect with us and "),
                                                          createVNode("br"),
                                                          createTextVNode(" login with your personal info ")
                                                        ]),
                                                        createVNode(_component_v_btn, {
                                                          rounded: "",
                                                          width: "250px",
                                                          class: "mt-6",
                                                          onClick: ($event) => _ctx.step--,
                                                          "data-aos": "fade-up",
                                                          "data-aos-delay": "500"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Login")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["onClick"])
                                                      ])
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
                                                  createVNode(_component_v_card_text, {
                                                    "data-aos": "fade-right",
                                                    "data-aos-delay": "500"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                      createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_form, {
                                                    modelValue: _ctx.valid,
                                                    "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                    class: "mt-5",
                                                    onSubmit: withModifiers($options.handleSignup, ["prevent"]),
                                                    "data-aos": "fade-up",
                                                    "data-aos-delay": "500"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: _ctx.signupName,
                                                        "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                        rules: _ctx.nameRules,
                                                        counter: 50,
                                                        label: "Username",
                                                        variant: "outlined",
                                                        "prepend-inner-icon": "mdi-account",
                                                        required: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: _ctx.signupEmail,
                                                        "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                        rules: _ctx.emailRules,
                                                        counter: 50,
                                                        label: "Email",
                                                        variant: "outlined",
                                                        "prepend-inner-icon": "mdi-email",
                                                        required: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                      createVNode(_component_v_text_field, {
                                                        modelValue: _ctx.signupPassword,
                                                        "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                        rules: _ctx.passwordRules,
                                                        counter: 50,
                                                        label: "Password",
                                                        variant: "outlined",
                                                        "prepend-inner-icon": "mdi-lock",
                                                        "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                        "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                        type: _ctx.passwordShow ? "text" : "password",
                                                        required: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                      createVNode(_component_v_btn, {
                                                        class: "mt-2 text-white",
                                                        color: "#e5345b",
                                                        block: "",
                                                        large: "",
                                                        depressed: "",
                                                        type: "submit",
                                                        disabled: !_ctx.valid
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Signup")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["disabled"]),
                                                      createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                      createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                        createVNode(_component_v_btn, {
                                                          class: "ma-2",
                                                          variant: "outlined",
                                                          color: "grey"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, {
                                                              start: "",
                                                              icon: "mdi-google",
                                                              color: "red"
                                                            }),
                                                            createTextVNode(" Google ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_btn, {
                                                          class: "ma-2",
                                                          variant: "outlined",
                                                          color: "grey"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, {
                                                              start: "",
                                                              icon: "mdi-facebook",
                                                              color: "blue"
                                                            }),
                                                            createTextVNode(" Google ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_btn, {
                                                          class: "ma-2",
                                                          variant: "outlined",
                                                          color: "grey"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, {
                                                              start: "",
                                                              icon: "mdi-twitter",
                                                              color: "blue-lighten-3"
                                                            }),
                                                            createTextVNode(" Google ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
                createVNode(_component_v_container, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, { class: "d-flex align-center justify-center" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "8",
                          sm: "8"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_window, {
                                  modelValue: _ctx.step,
                                  "onUpdate:modelValue": ($event) => _ctx.step = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_window_item, { value: 1 }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_text, {
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                    createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_form, {
                                                  modelValue: _ctx.valid,
                                                  "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                  class: "mt-5",
                                                  onSubmit: withModifiers($options.handleLogin, ["prevent"]),
                                                  "data-aos": "fade-up",
                                                  "data-aos-delay": "500"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: _ctx.email,
                                                      "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                      rules: _ctx.emailRules,
                                                      counter: 50,
                                                      label: "Email",
                                                      variant: "outlined",
                                                      "prepend-inner-icon": "mdi-email",
                                                      required: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: _ctx.password,
                                                      "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                      rules: _ctx.passwordRules,
                                                      counter: 50,
                                                      label: "Password",
                                                      variant: "outlined",
                                                      "prepend-inner-icon": "mdi-lock",
                                                      "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                      "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                      type: _ctx.passwordShow ? "text" : "password",
                                                      required: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                    createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                      createVNode(_component_v_switch, {
                                                        label: "Remember me",
                                                        color: "#e5345b",
                                                        class: "mt-4"
                                                      }),
                                                      createVNode("p", {
                                                        class: "text-grey",
                                                        style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                      }, " Forgot Password? ")
                                                    ]),
                                                    createVNode(_component_v_btn, {
                                                      class: "mt-2 text-white",
                                                      color: "#e5345b",
                                                      block: "",
                                                      large: "",
                                                      depressed: "",
                                                      type: "submit",
                                                      disabled: !_ctx.valid
                                                    }, {
                                                      default: withCtx(() => [
                                                        !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                      ]),
                                                      _: 1
                                                    }, 8, ["disabled"]),
                                                    createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                    createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                      createVNode(_component_v_btn, {
                                                        class: "ma-2",
                                                        variant: "outlined",
                                                        color: "grey"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, {
                                                            start: "",
                                                            icon: "mdi-google",
                                                            color: "red"
                                                          }),
                                                          createTextVNode(" Google ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_btn, {
                                                        class: "ma-2",
                                                        variant: "outlined",
                                                        color: "grey"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, {
                                                            start: "",
                                                            icon: "mdi-facebook",
                                                            color: "blue"
                                                          }),
                                                          createTextVNode(" Google ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_btn, {
                                                        class: "ma-2",
                                                        variant: "outlined",
                                                        color: "grey"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, {
                                                            start: "",
                                                            icon: "mdi-twitter",
                                                            color: "blue-lighten-3"
                                                          }),
                                                          createTextVNode(" Google ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_sheet, {
                                                  color: "#EEEEEE",
                                                  height: "100%",
                                                  width: "100%",
                                                  style: { "border-radius": "0 40px 0px 0px" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                      createVNode("h3", {
                                                        class: "text-h5",
                                                        "data-aos": "fade-right",
                                                        "data-aos-delay": "500"
                                                      }, " Don't have an account "),
                                                      createVNode("p", {
                                                        class: "mt-3 text-grey",
                                                        style: { "font-size": "15px" },
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": "500"
                                                      }, [
                                                        createTextVNode(" Enter your personal "),
                                                        createVNode("br"),
                                                        createTextVNode(" information and join us! ")
                                                      ]),
                                                      createVNode(_component_v_btn, {
                                                        rounded: "",
                                                        width: "250px",
                                                        class: "mt-6",
                                                        onClick: ($event) => _ctx.step++,
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": "500"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Signup")
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
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_window_item, { value: 2 }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_sheet, {
                                                  color: "#EEEEEE",
                                                  height: "100%",
                                                  width: "100%",
                                                  style: { "border-radius": "40px 0 0 0" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                      createVNode("h3", {
                                                        class: "text-h5",
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": "500"
                                                      }, " Already have an account ? "),
                                                      createVNode("p", {
                                                        class: "mt-3 text-grey",
                                                        style: { "font-size": "15px" },
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": "500"
                                                      }, [
                                                        createTextVNode(" Keep connect with us and "),
                                                        createVNode("br"),
                                                        createTextVNode(" login with your personal info ")
                                                      ]),
                                                      createVNode(_component_v_btn, {
                                                        rounded: "",
                                                        width: "250px",
                                                        class: "mt-6",
                                                        onClick: ($event) => _ctx.step--,
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": "500"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Login")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["onClick"])
                                                    ])
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
                                                createVNode(_component_v_card_text, {
                                                  "data-aos": "fade-right",
                                                  "data-aos-delay": "500"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                    createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_form, {
                                                  modelValue: _ctx.valid,
                                                  "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                  class: "mt-5",
                                                  onSubmit: withModifiers($options.handleSignup, ["prevent"]),
                                                  "data-aos": "fade-up",
                                                  "data-aos-delay": "500"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: _ctx.signupName,
                                                      "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                      rules: _ctx.nameRules,
                                                      counter: 50,
                                                      label: "Username",
                                                      variant: "outlined",
                                                      "prepend-inner-icon": "mdi-account",
                                                      required: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: _ctx.signupEmail,
                                                      "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                      rules: _ctx.emailRules,
                                                      counter: 50,
                                                      label: "Email",
                                                      variant: "outlined",
                                                      "prepend-inner-icon": "mdi-email",
                                                      required: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                    createVNode(_component_v_text_field, {
                                                      modelValue: _ctx.signupPassword,
                                                      "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                      rules: _ctx.passwordRules,
                                                      counter: 50,
                                                      label: "Password",
                                                      variant: "outlined",
                                                      "prepend-inner-icon": "mdi-lock",
                                                      "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                      "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                      type: _ctx.passwordShow ? "text" : "password",
                                                      required: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                    createVNode(_component_v_btn, {
                                                      class: "mt-2 text-white",
                                                      color: "#e5345b",
                                                      block: "",
                                                      large: "",
                                                      depressed: "",
                                                      type: "submit",
                                                      disabled: !_ctx.valid
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Signup")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["disabled"]),
                                                    createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                    createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                      createVNode(_component_v_btn, {
                                                        class: "ma-2",
                                                        variant: "outlined",
                                                        color: "grey"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, {
                                                            start: "",
                                                            icon: "mdi-google",
                                                            color: "red"
                                                          }),
                                                          createTextVNode(" Google ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_btn, {
                                                        class: "ma-2",
                                                        variant: "outlined",
                                                        color: "grey"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, {
                                                            start: "",
                                                            icon: "mdi-facebook",
                                                            color: "blue"
                                                          }),
                                                          createTextVNode(" Google ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_btn, {
                                                        class: "ma-2",
                                                        variant: "outlined",
                                                        color: "grey"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, {
                                                            start: "",
                                                            icon: "mdi-twitter",
                                                            color: "blue-lighten-3"
                                                          }),
                                                          createTextVNode(" Google ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
                                }, 8, ["modelValue", "onUpdate:modelValue"])
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
        _push2(ssrRenderComponent(_component_v_snackbar, {
          modelValue: _ctx.loginSnackbar,
          "onUpdate:modelValue": ($event) => _ctx.loginSnackbar = $event,
          color: "green",
          bottom: "",
          right: ""
        }, {
          actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "white",
                onClick: ($event) => _ctx.loginSnackbar = false
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
                  onClick: ($event) => _ctx.loginSnackbar = false
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
              _push3(` Login Successfully!\u{1F389} `);
            } else {
              return [
                createTextVNode(" Login Successfully!\u{1F389} ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_snackbar, {
          modelValue: _ctx.loginErrorSnackbar,
          "onUpdate:modelValue": ($event) => _ctx.loginErrorSnackbar = $event,
          color: "red",
          bottom: "",
          right: ""
        }, {
          actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "white",
                onClick: ($event) => _ctx.loginSnackbar = false
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
                  onClick: ($event) => _ctx.loginSnackbar = false
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
              _push3(` This user is not found!\u{1F645}\u200D\u2642\uFE0F `);
            } else {
              return [
                createTextVNode(" This user is not found!\u{1F645}\u200D\u2642\uFE0F ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_snackbar, {
          modelValue: _ctx.signupSnackbar,
          "onUpdate:modelValue": ($event) => _ctx.signupSnackbar = $event,
          color: "green",
          bottom: "",
          right: ""
        }, {
          actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "white",
                onClick: ($event) => _ctx.signupSnackbar = false
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
                  onClick: ($event) => _ctx.signupSnackbar = false
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
              _push3(` Signup Successfully!\u{1F389} `);
            } else {
              return [
                createTextVNode(" Signup Successfully!\u{1F389} ")
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
                      "data-aos": "fade-up",
                      "data-aos-delay": "500"
                    }, "#Login"),
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
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "d-flex align-center justify-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "8",
                        sm: "8"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_window, {
                                modelValue: _ctx.step,
                                "onUpdate:modelValue": ($event) => _ctx.step = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_window_item, { value: 1 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_text, {
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("p", { class: "text-h4 font-weight-bold" }, " Hi, Welcome Back! \u{1F44B} "),
                                                  createVNode("p", { class: "grey--text" }, " Hello again, you've been missed ! ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_form, {
                                                modelValue: _ctx.valid,
                                                "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                class: "mt-5",
                                                onSubmit: withModifiers($options.handleLogin, ["prevent"]),
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "500"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: _ctx.email,
                                                    "onUpdate:modelValue": ($event) => _ctx.email = $event,
                                                    rules: _ctx.emailRules,
                                                    counter: 50,
                                                    label: "Email",
                                                    variant: "outlined",
                                                    "prepend-inner-icon": "mdi-email",
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: _ctx.password,
                                                    "onUpdate:modelValue": ($event) => _ctx.password = $event,
                                                    rules: _ctx.passwordRules,
                                                    counter: 50,
                                                    label: "Password",
                                                    variant: "outlined",
                                                    "prepend-inner-icon": "mdi-lock",
                                                    "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                    "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                    type: _ctx.passwordShow ? "text" : "password",
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                  createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                    createVNode(_component_v_switch, {
                                                      label: "Remember me",
                                                      color: "#e5345b",
                                                      class: "mt-4"
                                                    }),
                                                    createVNode("p", {
                                                      class: "text-grey",
                                                      style: { "text-decoration": "none", "cursor": "pointer", "font-size": "13px" }
                                                    }, " Forgot Password? ")
                                                  ]),
                                                  createVNode(_component_v_btn, {
                                                    class: "mt-2 text-white",
                                                    color: "#e5345b",
                                                    block: "",
                                                    large: "",
                                                    depressed: "",
                                                    type: "submit",
                                                    disabled: !_ctx.valid
                                                  }, {
                                                    default: withCtx(() => [
                                                      !_ctx.isLoading ? (openBlock(), createBlock("span", { key: 0 }, " Login ")) : (openBlock(), createBlock("span", { key: 1 }, " Loading... "))
                                                    ]),
                                                    _: 1
                                                  }, 8, ["disabled"]),
                                                  createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                  createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                    createVNode(_component_v_btn, {
                                                      class: "ma-2",
                                                      variant: "outlined",
                                                      color: "grey"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, {
                                                          start: "",
                                                          icon: "mdi-google",
                                                          color: "red"
                                                        }),
                                                        createTextVNode(" Google ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_btn, {
                                                      class: "ma-2",
                                                      variant: "outlined",
                                                      color: "grey"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, {
                                                          start: "",
                                                          icon: "mdi-facebook",
                                                          color: "blue"
                                                        }),
                                                        createTextVNode(" Google ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_btn, {
                                                      class: "ma-2",
                                                      variant: "outlined",
                                                      color: "grey"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, {
                                                          start: "",
                                                          icon: "mdi-twitter",
                                                          color: "blue-lighten-3"
                                                        }),
                                                        createTextVNode(" Google ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_sheet, {
                                                color: "#EEEEEE",
                                                height: "100%",
                                                width: "100%",
                                                style: { "border-radius": "0 40px 0px 0px" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                    createVNode("h3", {
                                                      class: "text-h5",
                                                      "data-aos": "fade-right",
                                                      "data-aos-delay": "500"
                                                    }, " Don't have an account "),
                                                    createVNode("p", {
                                                      class: "mt-3 text-grey",
                                                      style: { "font-size": "15px" },
                                                      "data-aos": "fade-up",
                                                      "data-aos-delay": "500"
                                                    }, [
                                                      createTextVNode(" Enter your personal "),
                                                      createVNode("br"),
                                                      createTextVNode(" information and join us! ")
                                                    ]),
                                                    createVNode(_component_v_btn, {
                                                      rounded: "",
                                                      width: "250px",
                                                      class: "mt-6",
                                                      onClick: ($event) => _ctx.step++,
                                                      "data-aos": "fade-up",
                                                      "data-aos-delay": "500"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Signup")
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
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_window_item, { value: 2 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_sheet, {
                                                color: "#EEEEEE",
                                                height: "100%",
                                                width: "100%",
                                                style: { "border-radius": "40px 0 0 0" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { style: { "text-align": "center", "padding": "180px 0" } }, [
                                                    createVNode("h3", {
                                                      class: "text-h5",
                                                      "data-aos": "fade-up",
                                                      "data-aos-delay": "500"
                                                    }, " Already have an account ? "),
                                                    createVNode("p", {
                                                      class: "mt-3 text-grey",
                                                      style: { "font-size": "15px" },
                                                      "data-aos": "fade-up",
                                                      "data-aos-delay": "500"
                                                    }, [
                                                      createTextVNode(" Keep connect with us and "),
                                                      createVNode("br"),
                                                      createTextVNode(" login with your personal info ")
                                                    ]),
                                                    createVNode(_component_v_btn, {
                                                      rounded: "",
                                                      width: "250px",
                                                      class: "mt-6",
                                                      onClick: ($event) => _ctx.step--,
                                                      "data-aos": "fade-up",
                                                      "data-aos-delay": "500"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Login")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick"])
                                                  ])
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
                                              createVNode(_component_v_card_text, {
                                                "data-aos": "fade-right",
                                                "data-aos-delay": "500"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("p", { class: "text-h4 font-weight-bold" }, " Become one of us \u{1F918} "),
                                                  createVNode("p", { class: "text-grey" }, " Start control your financial today! ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_form, {
                                                modelValue: _ctx.valid,
                                                "onUpdate:modelValue": ($event) => _ctx.valid = $event,
                                                class: "mt-5",
                                                onSubmit: withModifiers($options.handleSignup, ["prevent"]),
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "500"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: _ctx.signupName,
                                                    "onUpdate:modelValue": ($event) => _ctx.signupName = $event,
                                                    rules: _ctx.nameRules,
                                                    counter: 50,
                                                    label: "Username",
                                                    variant: "outlined",
                                                    "prepend-inner-icon": "mdi-account",
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: _ctx.signupEmail,
                                                    "onUpdate:modelValue": ($event) => _ctx.signupEmail = $event,
                                                    rules: _ctx.emailRules,
                                                    counter: 50,
                                                    label: "Email",
                                                    variant: "outlined",
                                                    "prepend-inner-icon": "mdi-email",
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: _ctx.signupPassword,
                                                    "onUpdate:modelValue": ($event) => _ctx.signupPassword = $event,
                                                    rules: _ctx.passwordRules,
                                                    counter: 50,
                                                    label: "Password",
                                                    variant: "outlined",
                                                    "prepend-inner-icon": "mdi-lock",
                                                    "onClick:appendInner": ($event) => _ctx.passwordShow = !_ctx.passwordShow,
                                                    "append-inner-icon": _ctx.passwordShow ? "mdi-eye" : "mdi-eye-off",
                                                    type: _ctx.passwordShow ? "text" : "password",
                                                    required: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick:appendInner", "append-inner-icon", "type"]),
                                                  createVNode(_component_v_btn, {
                                                    class: "mt-2 text-white",
                                                    color: "#e5345b",
                                                    block: "",
                                                    large: "",
                                                    depressed: "",
                                                    type: "submit",
                                                    disabled: !_ctx.valid
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Signup")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["disabled"]),
                                                  createVNode("h5", { class: "text-center mt-9 text-grey" }, " Or Log in using "),
                                                  createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                                                    createVNode(_component_v_btn, {
                                                      class: "ma-2",
                                                      variant: "outlined",
                                                      color: "grey"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, {
                                                          start: "",
                                                          icon: "mdi-google",
                                                          color: "red"
                                                        }),
                                                        createTextVNode(" Google ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_btn, {
                                                      class: "ma-2",
                                                      variant: "outlined",
                                                      color: "grey"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, {
                                                          start: "",
                                                          icon: "mdi-facebook",
                                                          color: "blue"
                                                        }),
                                                        createTextVNode(" Google ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_btn, {
                                                      class: "ma-2",
                                                      variant: "outlined",
                                                      color: "grey"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, {
                                                          start: "",
                                                          icon: "mdi-twitter",
                                                          color: "blue-lighten-3"
                                                        }),
                                                        createTextVNode(" Google ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
          createVNode(_component_v_snackbar, {
            modelValue: _ctx.loginSnackbar,
            "onUpdate:modelValue": ($event) => _ctx.loginSnackbar = $event,
            color: "green",
            bottom: "",
            right: ""
          }, {
            actions: withCtx(() => [
              createVNode(_component_v_btn, {
                color: "white",
                onClick: ($event) => _ctx.loginSnackbar = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            default: withCtx(() => [
              createTextVNode(" Login Successfully!\u{1F389} ")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_v_snackbar, {
            modelValue: _ctx.loginErrorSnackbar,
            "onUpdate:modelValue": ($event) => _ctx.loginErrorSnackbar = $event,
            color: "red",
            bottom: "",
            right: ""
          }, {
            actions: withCtx(() => [
              createVNode(_component_v_btn, {
                color: "white",
                onClick: ($event) => _ctx.loginSnackbar = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            default: withCtx(() => [
              createTextVNode(" This user is not found!\u{1F645}\u200D\u2642\uFE0F ")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_v_snackbar, {
            modelValue: _ctx.signupSnackbar,
            "onUpdate:modelValue": ($event) => _ctx.signupSnackbar = $event,
            color: "green",
            bottom: "",
            right: ""
          }, {
            actions: withCtx(() => [
              createVNode(_component_v_btn, {
                color: "white",
                onClick: ($event) => _ctx.signupSnackbar = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            default: withCtx(() => [
              createTextVNode(" Signup Successfully!\u{1F389} ")
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-8b0b8784.mjs.map
