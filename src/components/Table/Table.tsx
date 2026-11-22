import type { MemberRow } from "../../types/types"
import { formatPeriod } from "../../ultils/formatPeriod"
type TableProps = {
  rows: MemberRow[]
}

export default function Table({ rows }: TableProps) {
  if (rows.length === 0) return <p>Oops, no matches for these filters!</p>

  const sortedRows = [...rows].sort(
    (a, b) =>
      a.role.role.localeCompare(b.role.role, "nb") ||
      a.member.full_name.localeCompare(b.member.full_name, "nb") ||
      b.role.period.localeCompare(a.role.period)
  )

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-max text-left">
        <thead>
          <tr className="text-left">
            <th className="pr-4">Role</th>
            <th className="pr-4">Semester</th>
            <th className="pr-4">Name</th>
            <th className="pr-4">Email</th>
            <th className="pr-4">Phone</th>
            <th className="pr-4">Team leader</th>
            <th className="pr-4">Active contract</th>
            <th className="pr-4">Contract PDF</th>
            <th className="pr-4">Points</th>
            <th className="pr-4">Dugnads</th>
          </tr>
        </thead>
        <tbody>
          {sortedRows.map(({ member: m, role: r }) => (
            <tr key={`${m.email}-${r.period}-${r.role}`} className="hover:bg-white/5">
              <td>{r.role}</td>
              <td>{formatPeriod(r.period)}</td>
              <td>{m.full_name}</td>
              <td>{m.email}</td>
              <td>{m.phone_number}</td>
              <td>{m.is_team_leader && "Yep"}</td>
              <td>{m.active_contract ? "Yep" : "Nope"}</td>
              <td>
                <a href="./../../../sample-contract-models/contract-sample.pdf" target="_blank">
                  Go
                </a>
              </td>
              <td>{m.points}</td>
              <td>{m.dugnads.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
