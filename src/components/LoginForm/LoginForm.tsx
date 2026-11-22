import { useState } from "react"
import type { FormEvent } from "react"

type LoginProps = {
  onLogin: () => void
}

const DEMO_EMAIL = import.meta.env.VITE_DEMO_EMAIL
const DEMO_PASSWORD = import.meta.env.VITE_DEMO_PASSWORD

export default function LoginForm({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("admin@hulen.example.no")
  const [password, setPassword] = useState("admin")
  const [error, setError] = useState<string | null>(null)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setError(null)
      onLogin()
    } else {
      setError("Wrong email or password")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Log in</button>
      {error && <p>{error}</p>}
    </form>
  )
}
