import { useState, useEffect } from "react"
import Filters from "../Filters/Filters"
import Table from "../Table/Table"
import { getMembers } from "../../api/members"
import type { Member } from "../../types/types"

// DataArea.tsx
export default function DataArea() {
  const [members, setMembers] = useState<Member[]>([])
  useEffect(() => {
    getMembers().then(setMembers)
  }, [])

  return (
    <>
      <Filters members={members} />
      <Table members={members} />
    </>
  )
}
