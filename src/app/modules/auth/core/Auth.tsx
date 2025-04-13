/* eslint-disable react-refresh/only-export-components */
import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { LayoutSplashScreen } from "../../../../_metronic/layout/core";
import { AuthModel, UserModel } from "./_models";
import * as authHelper from "./AuthHelpers";
import { getUserByToken } from "./_requests";
import { WithChildren } from "../../../../_metronic/helpers";

type AuthContextProps = {
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: UserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
  logout: () => void;
};

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>();
  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };

  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthInit: FC<WithChildren> = ({ children }) => {
  const { auth, currentUser, logout, setCurrentUser } = useAuth();
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  console.log(auth);

  // useEffect(() => {
  //   const requestUser = async (apiToken: string) => {
  //     try {
  //       if (!currentUser) {
  //         const { data } = await getUserByToken();
  //         if (data) {
  //           setCurrentUser(data);
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       logout();
  //     } finally {
  //       setShowSplashScreen(false);
  //     }
  //   };

  //   if (auth && auth.api_token) {
  //     if (authHelper.isTokenExpired(auth.expires_in)) {
  //       logout();
  //       setShowSplashScreen(false);
  //       return; // ⬅️ Esto es lo importante
  //     }

  //     requestUser(auth.api_token);
  //   } else {
  //     logout();
  //     setShowSplashScreen(false);
  //   }
  // }, []);
  useEffect(() => {
    if (auth && auth.api_token) {
      if (authHelper.isTokenExpired(auth.expires_in)) {
        logout();
      } else {
        setCurrentUser(auth.user); // ✅ Asignamos el user guardado en login
      }
    } else {
      logout();
    }

    setShowSplashScreen(false);
  }, []);

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>;
};

export { AuthProvider, AuthInit, useAuth };
