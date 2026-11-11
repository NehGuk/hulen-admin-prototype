// App.tsx
import { useState } from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import LoginForm from "./components/LoginForm/LoginForm"
import DataArea from "./components/DataArea/DataArea"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
      {isLoggedIn ? <DataArea /> : <LoginForm onLogin={() => setIsLoggedIn(true)} />}
      <Footer />
    </>
  )
}

export default App
