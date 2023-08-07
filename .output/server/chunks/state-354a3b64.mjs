import { g as useState } from './server.mjs';
import Cookies from 'js-cookie';

const useAuth = () => useState(() => ({
  isAuthenticated: !!Cookies.get("token")
}), "$rAUQHWnqKs");

export { useAuth as u };
//# sourceMappingURL=state-354a3b64.mjs.map
