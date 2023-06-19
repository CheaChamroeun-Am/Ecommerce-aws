import Cookies from 'js-cookie';
export const useAuth = () =>
  useState(() => ({

    //check if have cookie it is authenticated

    isAuthenticated: !!Cookies.get('token'),
    //this code when i refesh the page it will be false
    //can you help me to fix it




    


  }));
