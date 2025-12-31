import { Navigate, Route, Routes } from "react-router-dom"

// Global Components
import Header from "@/components/layout/Header"
import ScrollToTop from "@/components/layout/ScrollToTop"

// Static Pages
import HomePage from "./pages/static/Homepage"

// Layouts
import DocLayout from "./components/layout/DocLayout"

// Doc Pages
import GettingStartedPage from "@/pages/GettingStartedPage"
import NeoAccordionDocPage from "@/pages/NeoAccordionDocPage"
import NeoButtonDocPage from "@/pages/NeoButtonDocPage"
import NeoCardDocPage from "@/pages/NeoCardDocPage"

import NeoSelectDocPage from "@/pages/NeoSelectDocPage"
import NeoInputDocPage from "./pages/NeoInputDocPage.tsx"
import NeoDropdownDocPage from "@/pages/NeoDropdownDocPage"

import NeoSwitchDocPage from "@/pages/NeoSwitchDocPage"
import NeoDialogDocPage from "@/pages/NeoDialogDocPage"
import NeoTabsDocPage from "@/pages/NeoTabsDocPage"


function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocLayout />}>
          <Route index element={<Navigate to="getting-started" replace />} />
          <Route path="getting-started" element={<GettingStartedPage />} />
          <Route path="NeoButton" element={<NeoButtonDocPage />} />
          <Route path="NeoSelect" element={<NeoSelectDocPage />} />
          <Route path="NeoAccordion" element={<NeoAccordionDocPage />} />
          <Route path="NeoCard" element={<NeoCardDocPage />} />
          <Route path="NeoInput" element={<NeoInputDocPage />} />
          <Route path="NeoDropdown" element={<NeoDropdownDocPage />} />

          <Route path="NeoSwitch" element={<NeoSwitchDocPage />} />
          <Route path="NeoDialog" element={<NeoDialogDocPage />} />
          <Route path="NeoTabs" element={<NeoTabsDocPage />} />

        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
