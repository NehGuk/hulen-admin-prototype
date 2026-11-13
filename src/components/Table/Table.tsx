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
            <th>Points</th>
            <th>Dugnads</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>blablabla</td>
            <td>blablabla</td>
            <td>blablabla</td>
            <td>blablabla</td>
            <td>blablabla</td>
            <td>blablabla</td>
            <td>blablabla</td>
          </tr>
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
