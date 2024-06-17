import type Admin from "./Admin"
import type VisualAcuity from "./VisualAcuity"
import type DoctorsConsultation from "./DoctorsConsultation"
import type PastMedicalHistory from "./PastMedicalHistory"
import type SocialHistory from "./SocialHistory"
import type HeightAndWeight from "./HeightAndWeight"
import type VitalStatistics from "./VitalStatistics"

export default interface Patient {
  admin: Admin
  pastmedicalhistory: PastMedicalHistory | null
  socialhistory: SocialHistory | null
  vitalstatistics: VitalStatistics | null
  heightandweight: HeightAndWeight | null
  visualacuity: VisualAcuity | null
  doctorsconsultation: DoctorsConsultation | null
}







