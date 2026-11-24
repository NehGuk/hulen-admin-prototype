import { useState } from "react"
import type { FormEvent } from "react"

type LoginProps = {
  onLogin: () => void
}

const DEMO_EMAIL = "admin@hulen.example.no"
const DEMO_PASSWORD = "admin"

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
      setError("Wrong email or password!")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 mx-auto w-4/5 md:max-w-sm flex-col items-center gap-4">
      <div className="flex w-full flex-col gap-5 mt-12">
        <input
          type="email"
          value={email}
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="text-base border p-3 focus:border-deep-yellow focus:outline-0"
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="text-base border p-3 focus:border-deep-yellow focus:outline-0"
        />
        <button
          type="submit"
          className="bg-white py-3 uppercase font-extrabold text-dark hover:bg-deep-yellow focus:bg-deep-yellow focus:outline-0"
        >
          Log in
        </button>
        {error && <p className="text-red text-center">{error}</p>}
      </div>
    </form>
  )
}
