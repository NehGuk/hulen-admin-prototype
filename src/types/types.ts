export const ROLES = [
  "All roles",
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

export type RoleName = Exclude<(typeof ROLES)[number], "All roles">

export type RoleFilter = RoleName | "All roles"

export type SemesterName = "spring" | "autumn"

export type DugnadSemester = `${number}_${SemesterName}`

export type Period = `${number}_${1 | 2}`

export type Role = {
  period: Period
  role: RoleName
}

export type Member = {
  full_name: string
  email: string
  phone_number: string
  address_line_1: string
  address_line_2: string | null
  postal_code: string
  city: string
  date_of_birth: string
  active_contract: boolean
  contract_path: string | null
  is_call_attendant: boolean
  is_team_leader: boolean
  roles: Role[] // newest first
  points: number
  dugnads: DugnadSemester[]
  next_of_kin_full_name: string | null
  next_of_kin_phone_number: string | null
}
