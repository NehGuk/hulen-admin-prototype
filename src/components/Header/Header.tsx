// Header.tsx
type HeaderProps = {
  isLoggedIn: boolean
  onLogout: () => void
}

export default function Header({ isLoggedIn, onLogout }: HeaderProps) {
  return (
    <header>
      <h1>Hulen Admin</h1>
      {isLoggedIn && <button onClick={onLogout}>Log out</button>}
    </header>
  )
}
