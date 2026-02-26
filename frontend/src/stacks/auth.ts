import { AppConfig, UserSession, showConnect } from "@stacks/connect";
export const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });
export function authenticate() {
  showConnect({
    appDetails: { name: "PayDay", icon: window.location.origin + "/icon.png" },
    redirectTo: "/",
    onFinish: () => { window.location.reload(); },
    userSession,