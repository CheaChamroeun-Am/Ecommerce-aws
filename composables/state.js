import Cookies from "js-cookie";
export const useAuth = () =>
  useState(() => ({
    isAuthenticated: !!Cookies.get("token"),
  }));
