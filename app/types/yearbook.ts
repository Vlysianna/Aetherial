// Data types for BTS Yearbook

export interface Student {
  name: string
  photo: string
  instagram?: string
  tiktok?: string
}

export interface ClassOfficer extends Student {
  role: 'Ketua' | 'Wakil' | 'Sekretaris' | 'Bendahara'
}

export interface Teacher {
  name: string
  photo: string
  subject?: string
}

export interface ClassData {
  classCode: string
  className: string
  students: Student[]
  teacher: Teacher
  officers: ClassOfficer[]
  retroPhotos: string[]
}

export interface BPHMember {
  name: string
  photo: string
  role: 'Ketua' | 'Wakil Ketua' | 'Sekretaris 1' | 'Sekretaris 2' | 'Bendahara 1' | 'Bendahara 2'
  instagram?: string
  tiktok?: string
}

export interface SekbidMember {
  name: string
  formalPhoto: string
  activityPhoto: string
  casualPhoto: string
  role: string
  instagram?: string
  tiktok?: string
}

export interface SekbidData {
  sekbidNumber: number
  sekbidName: string
  members: SekbidMember[]
}

export interface EkskulMember {
  name: string
  photo: string
  role: 'Pembina' | 'Pelatih' | 'Ketua' | 'Wakil' | 'Sekretaris' | 'Bendahara'
  instagram?: string
  tiktok?: string
}

export interface EkskulData {
  ekskulName: string
  ekskulIcon?: string
  members: EkskulMember[]
  coverPhoto?: string
}

// Class order as specified
export const CLASS_ORDER = [
  'Ulw',
  'RPL 1', 'RPL 2',
  'TBS 1', 'TBS 2', 'TBS 3',
  'Boga 1', 'Boga 2', 'Boga 3',
  'PH 1', 'PH 2', 'PH 3'
] as const
