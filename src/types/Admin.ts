export default interface Admin {
  id?: number
  familyGroup: string
  queueNo: string
  regDate: string // ISO date string
  name: string
  khmerName: string
  dob: string // ISO date string
  age: number
  gender: 'M' | 'F'
  village: string
  contactNo: string
  pregnant: boolean
  lastMenstrualPeriod: string | null // ISO date string
  drugAllergies: string | null
  sentToId: boolean
  photo: string | null // base64 string
}
