import { ROLES, SEMESTERS } from "../../types/types"
import type { RoleFilter, SemesterFilter } from "../../types/types"
import { formatPeriod } from "../../ultils/formatPeriod"

type FiltersProps = {
  role: RoleFilter
  onRoleChange: (role: RoleFilter) => void
  semester: SemesterFilter
  onSemesterChange: (semester: SemesterFilter) => void
}
export default function Filters({ role, onRoleChange, semester, onSemesterChange }: FiltersProps) {
  return (
    <section className="py-6">
      <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-3">
        <label htmlFor="role" className="sr-only">
          Role
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => onRoleChange(e.target.value as RoleFilter)}
          className="text-base md:text-lg w-full min-w-0 border-2 border-white/50 rounded-none appearance-none bg-dark px-3 py-3 text-white focus:border-hulen-yellow focus:outline-none"
        >
          <option value="All roles">All roles</option>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <label htmlFor="semester" className="sr-only">
          Semester
        </label>
        <select
          id="semester"
          value={semester}
          onChange={(e) => onSemesterChange(e.target.value as SemesterFilter)}
          className="text-base md:text-lg w-full min-w-0 border-2 border-white/50 rounded-none appearance-none bg-dark px-3 py-3 text-white focus:border-hulen-yellow focus:outline-none"
        >
          <option value="All semesters">All semesters</option>
          {SEMESTERS.map((s) => (
            <option key={s} value={s}>
              {formatPeriod(s)}
            </option>
          ))}
        </select>
        <input
          type="search"
          placeholder="Search by name, role, semester, meh, whatever..."
          className="text-base md:text-lg col-span-2 w-full min-w-0 border-2 border-white/50 bg-dark px-3 py-3 text-white focus:border-hulen-yellow focus:outline-none md:col-span-1"
        ></input>
      </form>
    </section>
  )
}
