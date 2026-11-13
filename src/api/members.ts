import type { Member } from "../types/types"
import data from "../../sample-data/sample-data.json"

export async function getMembers(): Promise<Member[]> {
  return data as Member[]
}

/*
After the database is ready, this function will look like this:

export async function getMembers(): Promise<Member[]> {
  const res = await fetch("https://your-api/members")
  return res.json()
}
*/
