import { useState } from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import LoginForm from "./components/LoginForm/LoginForm"
import DataArea from "./components/DataArea/DataArea"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <section className="grid min-h-dvh grid-rows-[auto_1fr_auto] mx-auto max-w-600">
      <Header isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
      {isLoggedIn ? <DataArea /> : <LoginForm onLogin={() => setIsLoggedIn(true)} />}
      <Footer />
    </section>
  )
}

export default App
