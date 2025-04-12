import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { I18nProvider } from "../_metronic/i18n/i18nProvider";
import { LayoutProvider, LayoutSplashScreen } from "../_metronic/layout/core";
import { MasterInit } from "../_metronic/layout/MasterInit";
import { AuthInit } from "./modules/auth";
import { ThemeModeProvider } from "../_metronic/partials";
import { AuthProvider } from "./modules/context/AuthContext";

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <ThemeModeProvider>
            {/* <AuthInit> */}
            <AuthProvider>
              <Outlet />
              <MasterInit />
            </AuthProvider>
            {/* </AuthInit> */}
          </ThemeModeProvider>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  );
};

export { App };
