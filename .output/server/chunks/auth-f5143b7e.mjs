import { f as defineNuxtRouteMiddleware } from './server.mjs';
import { u as useAuth } from './state-354a3b64.mjs';
import 'vue';
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
import 'vue/server-renderer';
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

const auth = defineNuxtRouteMiddleware(() => {
  const auth2 = useAuth();
  return auth2.value.isAuthenticated;
});

export { auth as default };
//# sourceMappingURL=auth-f5143b7e.mjs.map
