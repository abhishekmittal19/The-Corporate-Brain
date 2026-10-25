# Organizational Memory Portal (React)

A responsive, high-performance Organizational Memory & Micro-Tool Portal built with **React**, **Tailwind CSS**, and **ECharts**.

---

## 🚀 Ways to Run

### Method 1: Standard Modern React (Vite)
If you have Node.js installed:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
```

The app will be available at: `http://localhost:3000`

---

### Method 2: Instant Zero-Install Preview
If you want to view the React version immediately in any browser without running `npm install`:
- Simply open **`react-standalone.html`** in your browser (double-click it or open via VS Code Live Server).
- It runs React 18, Babel, and ECharts directly in the browser with 0 configuration.

---

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx              # Responsive collapsible & mobile drawer sidebar
│   │   ├── MobileHeader.jsx         # Mobile top bar with hamburger menu & fullscreen toggle
│   │   ├── MicroToolGrid.jsx        # 15 micro-tool cards with 3D raised effects
│   │   ├── DepartmentCards.jsx      # HR, Finance, Projects, Operations cards
│   │   ├── DocumentAccessChart.jsx  # Responsive ECharts donut chart with ResizeObserver
│   │   ├── MetricCards.jsx          # Documents Viewed & Downloads statistics
│   │   └── Sparkline.jsx            # High-DPI Canvas sparklines
│   ├── data/
│   │   ├── navigation.js            # Sidebar navigation links
│   │   ├── tools.js                 # Micro-tool and department card metadata
│   │   └── metrics.js               # Statistics and chart data
│   ├── hooks/
│   │   └── useFullscreen.js         # Fullscreen synchronization hook
│   ├── App.jsx                      # Main layout container
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Tailwind directives & 3D raised card styles
├── index.html                       # Vite React HTML entry point
├── react-standalone.html            # Standalone zero-install React preview
├── index.vanilla.html               # Backup of the original vanilla HTML
├── package.json                     # NPM dependencies and scripts
├── vite.config.js                   # Vite configuration
└── tailwind.config.js               # Tailwind CSS theme configuration
```

---

## ✨ Features

- **100% React-based**: Modular components, unidirectional data flow, custom hooks.
- **Fully Responsive**: Adapts seamlessly to smartphones (`< 768px`), tablets (`768px - 1024px`), laptops (`1024px - 1440px`), and desktop monitors (`1440px+`).
- **Collapsible Sidebar**: Compact 72px icon view or 260px expanded view on desktop; off-canvas slide-out drawer on mobile.
- **Synchronized Fullscreen**: Toggle fullscreen mode with automatic icon sync across desktop and mobile.
- **Interactive ECharts**: Donut chart with smooth `ResizeObserver` responsiveness and custom rich tooltips.
- **3D Raised Card Aesthetics**: Tactile hover and press animations with realistic lighting gradients.