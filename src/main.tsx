import { framer } from "framer-plugin"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

framer.showUI({
  title: "Traffic Torch AI SEO Toolkit",
  width: 380,
  height: 680,
  position: "top right",
})

const root = createRoot(document.getElementById("root")!)
root.render(<App />)