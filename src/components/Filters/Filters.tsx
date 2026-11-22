import { ROLES, SEMESTERS } from "../../types/types"
import type { RoleFilter, SemesterFilter } from "../../types/types"

type FiltersProps = {
  role: RoleFilter
  onRoleChange: (role: RoleFilter) => void
  semester: SemesterFilter
  onSemesterChange: (semester: SemesterFilter) => void
}

export default function Filters({ role, onRoleChange, semester, onSemesterChange }: FiltersProps) {
  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="role" className="sr-only">
          Role
        </label>
        <select id="role" value={role} onChange={(e) => onRoleChange(e.target.value as RoleFilter)}>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <label htmlFor="semester" className="sr-only">
          Semester
        </label>
        <select id="semester" value={semester} onChange={(e) => onSemesterChange(e.target.value as SemesterFilter)}>
          {SEMESTERS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* Implement a search field here later */}

        {/* <label htmlFor="search"></label>
        <input type="text" id="search" placeholder="Search by name, email, role..." /> */}
      </form>
    </section>
  )
}
