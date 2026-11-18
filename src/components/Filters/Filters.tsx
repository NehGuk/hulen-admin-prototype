export default function Filters() {
  return (
    <section>
      <form>
        <label htmlFor="choosePeriod">Semester</label>
        <select id="choosePeriod">
          <option>2026 2</option>
          <option>2026 1</option>
          <option>2025 2</option>
          <option>2024 2</option>
          <option>2024 1</option>
          <option>2023 2</option>
          <option>2023 1</option>
        </select>

        <label htmlFor="chooseRole">Role</label>
        <select id="chooseRole">
          <option>Stagecrew</option>
          <option>Bartender</option>
          <option>Host</option>
          <option>DJ</option>
          <option>Lighting</option>
          <option>Sound</option>
          <option>IT</option>
          <option>Maintenance</option>
        </select>

        <label htmlFor="search">Search</label>
        <input type="text" id="search" placeholder="Search by name, email, role..." />
      </form>
      Filters here
    </section>
  )
}
