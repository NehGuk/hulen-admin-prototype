import { useState, useEffect } from "react"
import Filters from "../Filters/Filters"
import Table from "../Table/Table"
import { getMembers } from "../../api/getMembers"
import { type Member, type MemberRow, type RoleFilter, type SemesterFilter, CURRENT_PERIOD } from "../../types/types"

export default function DataArea() {
  const [members, setMembers] = useState<Member[]>([])
  const [role, setRole] = useState<RoleFilter>("All roles")
  const [semester, setSemester] = useState<SemesterFilter>(CURRENT_PERIOD)

  useEffect(() => {
    getMembers().then(setMembers)
  }, [])

  // One row for every role entry that matches BOTH filters
  const rows: MemberRow[] = members.flatMap((member) =>
    member.roles
      .filter((r) => (role === "All roles" || r.role === role) && (semester === "All semesters" || r.period === semester))
      .map((r) => ({ member, role: r }))
  )

  return (
    <>
      <Filters role={role} onRoleChange={setRole} semester={semester} onSemesterChange={setSemester} />
      <Table rows={rows} />
    </>
  )
}
