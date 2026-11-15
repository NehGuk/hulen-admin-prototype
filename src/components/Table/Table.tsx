import type { Member } from "../../types/types"

type TableProps = {
  members: Member[]
}

export default function Table({ members }: TableProps) {
  const sortedMembers: Member[] = [...members].sort((a, b) => {
    const roleA = a.current_role
    const roleB = b.current_role
    if (roleA === roleB) return a.full_name.localeCompare(b.full_name, "nb")
    if (roleA === null) return 1
    if (roleB === null) return -1
    return roleA.localeCompare(roleB, "nb")
  })
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-max">
        <thead>
          <tr className="text-left">
            <th>Role</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active contract</th>
            <th>Contract PDF</th>
            <th>Points</th>
            <th>Dugnads</th>
          </tr>
        </thead>
        <tbody>
          {sortedMembers.map((m) => (
            <tr key={m.email}>
              <td>{m.current_role}</td>
              <td>{m.full_name}</td>
              <td>{m.email}</td>
              <td>{m.phone_number}</td>
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
