import App from "./1_app/";

import bridge from "@vkontakte/vk-bridge";
import "@vkontakte/vkui/dist/vkui.css";
import { createRoot } from "react-dom/client";

import "./6_shared/styles/styles.css";

const container = document.getElementById("root");
const root = createRoot(container as Element);
bridge.send("VKWebAppInit");
root.render(<App />);
