/* import logo from "../../assets/hulen-admin-h.png" */
type HeaderProps = {
  isLoggedIn: boolean
  onLogout: () => void
}

export default function Header({ isLoggedIn, onLogout }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <h1>LOGO</h1>
      {/* <img src={logo} alt="Hulen Admin logo" className="h-12 max-w-auto" /> */}
      {isLoggedIn && <button onClick={onLogout}>Log out</button>}
    </header>
  )
}
