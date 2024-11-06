export default interface DoctorsConsultation {
  id?: number
  vid?: number
  msk: boolean
  cvs: boolean
  respi: boolean
  gu: boolean
  git: boolean
  eye: boolean
  derm: boolean
  others: string
  consultationNotes: string | null
  diagnosis: string | null
  treatment: string | null
  referralNeeded: boolean
  referralLoc: string | null
  remarks: string | null
}
