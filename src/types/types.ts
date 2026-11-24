/* All types live here, except the Props types, which stay next to their component */

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

export const SEMESTERS = ["2026_2", "2026_1", "2025_2", "2025_1", "2024_2", "2024_1", "2023_2", "2023_1"] as const

export const CURRENT_PERIOD = "2026_2"

export type RoleName = (typeof ROLES)[number]

export type Period = (typeof SEMESTERS)[number]

export type RoleFilter = RoleName | "All roles"

export type SemesterFilter = Period | "All semesters"

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
  dugnads: Period[] // newest first
  next_of_kin_full_name: string | null
  next_of_kin_phone_number: string | null
}

export type MemberRow = {
  member: Member
  role: Role
}
