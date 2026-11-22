import type { MemberRow } from "../../types/types"

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
      <table className="w-full min-w-max">
        <thead>
          <tr className="text-left">
            <th>Role</th>
            <th>Semester</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Team leader</th>
            <th>Active contract</th>
            <th>Contract PDF</th>
            <th>Points</th>
            <th>Dugnads</th>
          </tr>
        </thead>
        <tbody>
          {sortedRows.map(({ member: m, role: r }) => (
            <tr key={`${m.email}-${r.period}-${r.role}`}>
              <td>{r.role}</td>
              <td>{r.period}</td>
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
