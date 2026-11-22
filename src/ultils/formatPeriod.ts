export const formatPeriod = (period: string) => {
  if (period === "All semesters") return "All semesters"

  const [year, season] = period.split("_")

  return `${year} ${season === "1" ? "Spring" : "Autumn"}`
}
