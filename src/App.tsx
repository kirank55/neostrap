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
import InstallationPage from "@/pages/InstallationPage"
import EssentialDocPage from "@/pages/EssentialDocPage"
// import NeoAccordionDocPage from "@/pages/NeoAccordionDocPage"
// import NeoButtonDocPage from "@/pages/NeoButtonDocPage"
// import NeoCardDocPage from "@/pages/NeoCardDocPage"

// import NeoSelectDocPage from "@/pages/NeoSelectDocPage"
// import NeoInputDocPage from "@/pages/NeoInputDocPage"
// import NeoDropdownDocPage from "@/pages/NeoDropdownDocPage"
// import NeoSwitchDocPage from "@/pages/NeoSwitchDocPage"
import NeoTabsDocPage from "@/pages/NeoTabsDocPage"
import NeoCarouselDocPage from "@/pages/NeoCarouselDocPage"
import NeoAnimatedTooltipDocPage from "@/pages/NeoAnimatedTooltipDocPage"
import NeoViewSwitchDocPage from "@/pages/NeoViewSwitchDocPage/NeoViewSwitchDocPage"
import ExploreDocPage from "@/pages/ExploreDocPage"


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
          <Route path="installation" element={<InstallationPage />} />
          <Route path="essential" element={<EssentialDocPage />} />
          <Route path="explore" element={<ExploreDocPage />} />


          {/* <Route path="NeoButton" element={<NeoButtonDocPage />} />
          <Route path="NeoSelect" element={<NeoSelectDocPage />} />
          <Route path="NeoAccordion" element={<NeoAccordionDocPage />} />
          <Route path="NeoInput" element={<NeoInputDocPage />} />
          <Route path="NeoDropdown" element={<NeoDropdownDocPage />} />
          <Route path="NeoSwitch" element={<NeoSwitchDocPage />} />
          <Route path="NeoCard" element={<NeoCardDocPage />} /> */}

          
          <Route path="NeoAnimatedTooltip" element={<NeoAnimatedTooltipDocPage />} />
          <Route path="NeoCarousel" element={<NeoCarouselDocPage />} />
          <Route path="NeoTabs" element={<NeoTabsDocPage />} />
          <Route path="NeoViewSwitch" element={<NeoViewSwitchDocPage />} />
          
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
