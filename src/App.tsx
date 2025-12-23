import { Navigate, Route, Routes } from "react-router-dom"

// Global Components
import Header from "@/components/layout/Header"

// Static Pages
import HomePage  from "./pages/static/Homepage"

// Layouts
import DocLayout from "./components/layout/DocLayout"

// Doc Pages
import NeoButtonDocPage from "@/pages/NeoButtonDocPage"
import NeoSelectDocPage from "@/pages/NeoSelectDocPage"
import NeoAccordionDocPage from "@/pages/NeoAccordionDocPage"
import NeoCardDocPage from "@/pages/NeoCardDocPage"
import NeoInputDocPage from "./pages/NeoInputDocPage.tsx"



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocLayout />}>
          <Route index element={<Navigate to="NeoButton" replace />} />
          <Route path="NeoButton" element={<NeoButtonDocPage />} />
          <Route path="NeoSelect" element={<NeoSelectDocPage />} />
          <Route path="NeoAccordion" element={<NeoAccordionDocPage />} />
          <Route path="NeoCard" element={<NeoCardDocPage />} />
          <Route path="NeoInput" element={<NeoInputDocPage />} />


        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
