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
      <table className="w-full min-w-300 text-left">
        <thead>
          <tr className="text-left">
            <th className="pl-3 pr-5 whitespace-nowrap">Role</th>
            <th className="pl-3 pr-5 whitespace-nowrap">Semester</th>
            <th className="pl-3 pr-5 whitespace-nowrap">Name</th>
            <th className="pl-3 pr-5 whitespace-nowrap">Email</th>
            <th className="pl-3 pr-5 whitespace-nowrap">Phone</th>
            <th className="pl-3 pr-5 whitespace-nowrap">Team leader</th>
            <th className="pl-3 pr-5 whitespace-nowrap">Active contract</th>
            <th className="pl-3 pr-5 whitespace-nowrap">Contract</th>
            <th className="pl-3 pr-5 whitespace-nowrap">Points</th>
            <th className="pl-3 pr-5 whitespace-nowrap">Dugnads</th>
          </tr>
        </thead>
        <tbody>
          {sortedRows.map(({ member: m, role: r }) => (
            <tr key={`${m.email}-${r.period}-${r.role}`} className="hover:bg-white/5">
              <td className="pl-3 pr-5 whitespace-nowrap">{r.role}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">{formatPeriod(r.period)}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">{m.full_name}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">{m.email}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">{m.phone_number}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">{m.is_team_leader && "Yep"}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">{m.active_contract ? "Yep" : "Nope"}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">
                <a href="./../../../sample-contract-models/contract-sample.pdf" target="_blank">
                  PDF
                </a>
              </td>
              <td className="pl-3 pr-5 whitespace-nowrap">{m.points}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">{m.dugnads.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
