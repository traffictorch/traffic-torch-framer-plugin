import { framer } from "framer-plugin"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

framer.showUI({
  title: "Traffic Torch",
  width: 380,
  height: 660,
  position: "top right",
})

const root = createRoot(document.getElementById("root")!)
root.render(<App />)