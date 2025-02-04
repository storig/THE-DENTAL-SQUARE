import Header from "./components/Header"
import Navigation from "./components/Navigation"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  )
}

