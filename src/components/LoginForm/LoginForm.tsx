export default function LoginForm() {
  return (
    <>
      <form>
        <label>Email</label>
        <input id="email" type="email"></input>
        <label>Password</label>
        <input type="password"></input>
        <button type="submit">Login</button>
      </form>
    </>
  )
}
