import type { MemberRow } from "../../types/types"
import { formatPeriod } from "../../ultils/formatPeriod"
import { Check, FileText } from "lucide-react"

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
          <tr className="text-left border-t-4 border-deep-yellow/30">
            <th className="pl-3 pr-5 pt-3 pb-3 whitespace-nowrap">Role</th>
            <th className="pl-3 pr-5 pt-3 pb-3 whitespace-nowrap">Semester</th>
            <th className="pl-3 pr-5 pt-3 pb-3 whitespace-nowrap">Name</th>
            <th className="pl-3 pr-5 pt-3 pb-3 whitespace-nowrap">Email</th>
            <th className="pl-3 pr-5 pt-3 pb-3 whitespace-nowrap">Phone</th>
            <th className="pl-3 pr-5 pt-3 pb-3 whitespace-nowrap">Team leader</th>
            <th className="pl-3 pr-5 pt-3 pb-3 whitespace-nowrap">Active contract</th>
            <th className="pl-3 pr-5 pt-3 pb-3 whitespace-nowrap">Contract</th>
            <th className="pl-3 pr-5 pt-3 pb-3 whitespace-nowrap">Points</th>
            <th className="pl-3 pr-5 pt-3 pb-3 whitespace-nowrap">Dugnad</th>
          </tr>
        </thead>
        <tbody>
          {sortedRows.map(({ member: m, role: r }) => (
            <tr key={`${m.email}-${r.period}-${r.role}`} className="border-b border-white/5 hover:bg-white/5">
              <td className="py-4 md:py-2 pl-3 pr-5 whitespace-nowrap">{r.role}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">{formatPeriod(r.period)}</td>
              <td
                className={`pl-3 pr-5 whitespace-nowrap transition-transform duration-200 hover:underline cursor-pointer ${m.is_team_leader ? "text-deep-yellow font-medium" : ""}`}
              >
                {m.full_name}
              </td>
              <td className="pl-3 pr-5 whitespace-nowrap">{m.email}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">{m.phone_number}</td>
              <td className="pl-3 pr-5 whitespace-nowrap text-deep-yellow">
                {m.is_team_leader && <Check size={20} className="text-deep-yellow" strokeWidth={1} />}
              </td>
              <td className="pl-3 pr-5 whitespace-nowrap">{m.active_contract ? "Yep" : "Nope"}</td>
              <td className="pl-3 pr-5 whitespace-nowrap">
                <a href="./../../../sample-contract-models/contract-sample.pdf" target="_blank">
                  <FileText
                    size={18}
                    strokeWidth={1}
                    className={`${m.active_contract ? "text-white hover:text-deep-yellow" : "text-white/50 hover:text-deep-yellow"}`}
                  />
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
