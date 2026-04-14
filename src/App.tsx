import { useState, useEffect } from "react"
import { framer } from "framer-plugin"

interface Tool {
  emoji: string
  name: string
  path: string
}

const tools: Tool[] = [
  { emoji: "⚜️", name: "Topical Authority Tool", path: "/topical-authority-audit-tool/" },
  { emoji: "🧬", name: "SEO Entity Tool", path: "/seo-entity-extractor-tool/" },
  { emoji: "🎯", name: "SEO Intent Tool", path: "/seo-intent-tool/" },
  { emoji: "📍", name: "Local SEO Tool", path: "/local-seo-tool/" },
  { emoji: "🛒", name: "Product SEO Tool", path: "/product-seo-tool/" },
  { emoji: "🔍", name: "AI Search Optimization Tool", path: "/ai-search-optimization-tool/" },
  { emoji: "🤖", name: "AI Content Audit Tool", path: "/ai-audit-tool/" },
  { emoji: "🎙️", name: "AI Voice Search Tool", path: "/ai-voice-search-tool/" },
  { emoji: "⚖️", name: "SEO + UX Audit", path: "/" },
  { emoji: "⚠️", name: "Quit Risk Tool", path: "/quit-risk-tool/" },
  { emoji: "🔑", name: "Keyword Research", path: "/keyword-research-tool/" },
  { emoji: "🗝️", name: "Keyword Placement Tool", path: "/keyword-tool/" },
  { emoji: "🆚", name: "Keyword vs Competition Tool", path: "/keyword-vs-tool/" },
  { emoji: "⚙️", name: "Schema Generator", path: "/schema-generator/" },
]

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [url, setUrl] = useState("")

  useEffect(() => {
    const unsubscribe = framer.subscribeToPublishInfo((info) => {
      if (info?.url && !url) setUrl(info.url)
    })
    return unsubscribe
  }, [url])

  const selectedTool = tools[selectedIndex]

  const launchTool = () => {
    const base = `https://traffictorch.net${selectedTool.path}`
    const finalUrl = url ? `${base}?url=${encodeURIComponent(url)}` : base
    window.open(finalUrl, "_blank")
    framer.showNotification(`✅ Launched ${selectedTool.name}`, { variant: "success" })
  }

  return (
    <div className="h-full bg-white dark:bg-zinc-950 text-gray-800 dark:text-gray-200 p-6 flex flex-col overflow-auto font-sans">
      {/* Header - Your tweak kept + improved */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-sm">🚥</div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Traffic Torch</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">UX AI & SEO Health Analysis Tools</p>
        </div>
      </div>

      {/* Strong Educational Message */}
      <div className="mb-6 p-5 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-3xl text-sm leading-relaxed">
        <strong className="text-amber-600 dark:text-amber-400 block mb-1">Please use a publicly published site URL for accurate SEO + UX analysis.</strong>
      </div>

      {/* Tool Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">Choose Tool</label>
        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className="w-full p-4 rounded-2xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {tools.map((tool, i) => (
            <option key={i} value={i}>
              {tool.emoji} {tool.name}
            </option>
          ))}
        </select>
      </div>

      {/* Site URL Input */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">Site URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="yoursite.com"
          className="w-full p-4 rounded-2xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Big Green Launch Button */}
      <button
        onClick={launchTool}
        className="w-full py-5 text-lg font-semibold bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-3xl flex items-center justify-center gap-3 transition-all mb-8 shadow-sm"
      >
        Launch Tool with URL →
      </button>

      {/* Help Guides */}
      <button
        onClick={() => window.open("https://traffictorch.net/ai-ux-seo-help-guides/", "_blank")}
        className="w-full py-4 text-sm font-medium border border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-2xl transition-colors"
      >
        📚 Help Guides & Documentation
      </button>

      {/* Footer */}
      <p className="mt-auto text-xs text-center text-gray-400 dark:text-gray-500 pt-8">
        Traffic Torch • Instant 360° SEO & UX Health Analysis • Built for Framer
      </p>
    </div>
  )
}