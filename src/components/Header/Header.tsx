/* import logo from "../../assets/logo-sample.png" */
type HeaderProps = {
  isLoggedIn: boolean
  onLogout: () => void
}

export default function Header({ isLoggedIn, onLogout }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-3">
      <h1>
        <span className="text-hulen-yellow">Hulen</span> Admin
      </h1>
      {isLoggedIn && <button onClick={onLogout}>Log out</button>}
    </header>
  )
}
