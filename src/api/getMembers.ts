/* Once we get the DB in place, I think this function will look a bit like this:

export async function getMembers(): Promise<Member[]> {
  const res = await fetch("https://your-api/members")
  return res.json()
}

But for now we're using the sample-data.json file to simulate that.
 */

import type { Member } from "../types/types"
import data from "../../sample-data/sample-data.json"

export async function getMembers(): Promise<Member[]> {
  return data as Member[]
}
