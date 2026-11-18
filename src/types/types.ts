export const ROLES = [
  "Artistvert",
  "Bartender",
  "Booking",
  "Catering",
  "Design",
  "DJ",
  "Foto",
  "IT-utvikler",
  "Materialforvalter",
  "Plakat",
  "Redaksjon",
  "SoMe",
  "Stagecrew",
  "Vert",
  "Styret",
] as const

export type RoleName = (typeof ROLES)[number]

export type SemesterName = "spring" | "autumn"

export type DugnadSemester = `${number}_${SemesterName}`

export type Period = `${number}_${1 | 2}`

export type PreviousRole = {
  period: Period
  role: RoleName
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
  is_team_leader: boolean
  current_role: RoleName | null // null = no role this semester
  previous_roles: PreviousRole[] // newest first
  points: number
  dugnads: DugnadSemester[] // newest first
  next_of_kin_full_name: string | null
  next_of_kin_phone_number: string | null
}
