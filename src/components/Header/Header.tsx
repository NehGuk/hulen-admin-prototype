/* import logo from "../../assets/logo-sample.png" */
type HeaderProps = {
  isLoggedIn: boolean
  onLogout: () => void
}

export default function Header({ isLoggedIn, onLogout }: HeaderProps) {
  return (
    <header className={`p-3 ${isLoggedIn ? "flex justify-between" : "text-center mt-24"}`}>
      <h1>
        <span className="text-hulen-yellow">Hulen</span> Admin
      </h1>
      {isLoggedIn && (
        <button onClick={onLogout} className="font-sans uppercase text-md hover:underline hover:underline-offset-3">
          Log out
        </button>
      )}
    </header>
  )
}
