import "./bootstrap";
import { createRoot } from "react-dom/client";
import { App } from "./App";

document.addEventListener("DOMContentLoaded", () => {
    const appElement = document.getElementById("app");

    if (!appElement) {
        console.error("No se encuentra el elemento #app");
        return;
    }

    const root = createRoot(appElement);
    root.render(<App />);
});
