import type { Member } from "../../types/types"
type FilterProps = {
  members: Member[]
}

export default function Filters({ members }: FilterProps) {
  console.log(members)
  return (
    <section>
      <form>
        <label htmlFor="choosePeriod">Semester</label>
        <select id="choosePeriod" defaultValue="2026 2">
          <option>2026 2</option>
          <option>2026 1</option>
          <option>2025 2</option>
          <option>2024 2</option>
          <option>2024 1</option>
          <option>2023 2</option>
          <option>2023 1</option>
          <option>All time</option>
        </select>

        <label htmlFor="chooseRole">Role</label>
        <select id="chooseRole" defaultValue="All roles">
          <option>Artistvert</option>
          <option>Bartender</option>
          <option>Booking</option>
          <option>Catering</option>
          <option>Design</option>
          <option>DJ</option>
          <option>Foto</option>
          <option>IT-utvikler</option>
          <option>Materialforvalter</option>
          <option>Plakat</option>
          <option>Redaksjon</option>
          <option>SoMe</option>
          <option>Stagecrew</option>
          <option>Vert</option>
          <option>Styret</option>
          <option>All roles</option>
        </select>

        <label htmlFor="active">Active</label>
        <input id="active" type="checkbox" defaultChecked />
        <label htmlFor="active">Inactive</label>
        <input id="inactive" type="checkbox" />

        <label htmlFor="search">Search</label>
        <input type="text" id="search" placeholder="Search by name, email, role..." />
      </form>
    </section>
  )
}
