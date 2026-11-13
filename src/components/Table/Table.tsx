import type { Member } from "../../types/types"

type TableProps = {
  members: Member[]
}
export default function Table({ members }: TableProps) {
  console.log(members)
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-max">
        <thead>
          <tr>
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
          {members.map((m) => (
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

    /* Table here: {members.length} */
  )
}

/* ;<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    {members.map((member) => (
      <tr key={member.email}>
        <td>{member.full_name}</td>
        <td>{member.email}</td>
        <td>{member.phone_number}</td>
      </tr>
    ))}
  </tbody>
</table>
 */
