export type SemesterName = "spring" | "autumn"

export type DugnadSemester = `${number}_${SemesterName}`

export type Period = `${number}_${1 | 2}`

export type PreviousRole = {
  period: Period
  role: string
}

export type Member = {
  full_name: string
  email: string
  phone_number: string
  address_line_1: string
  address_line_2: string | null
  postal_code: string // string, not number: Norwegian codes can start with 0
  city: string
  date_of_birth: string // ISO date, YYYY-MM-DD
  active_contract: boolean
  contract_path: string | null
  is_call_attendant: boolean
  current_role: string | null
  previous_roles: PreviousRole[] // newest first
  is_volunteer: boolean
  is_staff: boolean
  is_board_member: boolean
  points: number
  dugnads: DugnadSemester[] // newest first
  next_of_kin_full_name: string | null
  next_of_kin_phone_number: string | null
}
