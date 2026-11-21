import { useState, useEffect } from "react"
import Filters from "../Filters/Filters"
import Table from "../Table/Table"
import { getMembers } from "../../api/getMembers"
import type { Member, RoleFilter } from "../../types/types"

export default function DataArea() {
  const [role, setRole] = useState<RoleFilter>("All roles")
  console.log(role)
  const [members, setMembers] = useState<Member[]>([])
  const visible = members.filter((m) => role === "All roles" || m.current_role === role)
  useEffect(() => {
    getMembers().then(setMembers)
  }, [])

  return (
    <>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="All roles">All roles</option>
        <option value="Styret">Styret</option>
        <option value="Bartender">Bartender</option>
      </select>
      <Filters role={role} onRoleChange={setRole} />
      <Table members={visible} />
    </>
  )
}
