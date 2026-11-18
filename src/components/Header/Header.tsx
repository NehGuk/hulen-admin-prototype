/* import logo from "../../assets/logo-sample.png" */
type HeaderProps = {
  isLoggedIn: boolean
  onLogout: () => void
}

export default function Header({ isLoggedIn, onLogout }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <h1>HulenAdmin</h1>
      {isLoggedIn && <button onClick={onLogout}>Log out</button>}
    </header>
  )
}
