import type { ClassData, BPHMember, SekbidData, EkskulData } from '~/types/yearbook'

// Sample data - Replace with actual data

// Generate placeholder students for a class
const generateStudents = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    name: `Siswa ${i + 1}`,
    photo: '',
    instagram: `siswa${i + 1}`,
    tiktok: ''
  }))
}

// Sample class data
export const classesData: ClassData[] = [
  {
    classCode: 'Ulw',
    className: 'Unggulan Wirausaha',
    students: generateStudents(30),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Mata Pelajaran'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'RPL 1',
    className: 'Rekayasa Perangkat Lunak 1',
    students: generateStudents(32),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Pemrograman'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'RPL 2',
    className: 'Rekayasa Perangkat Lunak 2',
    students: generateStudents(32),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Pemrograman'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'TBS 1',
    className: 'Tata Busana 1',
    students: generateStudents(28),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Tata Busana'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'TBS 2',
    className: 'Tata Busana 2',
    students: generateStudents(28),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Tata Busana'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'TBS 3',
    className: 'Tata Busana 3',
    students: generateStudents(28),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Tata Busana'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'Boga 1',
    className: 'Tata Boga 1',
    students: generateStudents(30),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Tata Boga'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'Boga 2',
    className: 'Tata Boga 2',
    students: generateStudents(30),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Tata Boga'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'Boga 3',
    className: 'Tata Boga 3',
    students: generateStudents(30),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Tata Boga'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'PH 1',
    className: 'Perhotelan 1',
    students: generateStudents(32),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Perhotelan'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'PH 2',
    className: 'Perhotelan 2',
    students: generateStudents(32),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Perhotelan'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'PH 3',
    className: 'Perhotelan 3',
    students: generateStudents(32),
    teacher: {
      name: 'Nama Wali Kelas',
      photo: '',
      subject: 'Perhotelan'
    },
    officers: [
      { name: 'Ketua Kelas', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Wakil Ketua', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ],
    retroPhotos: ['', '', '']
  }
]

// BPH OSIS data
export const osisBPH: BPHMember[] = [
  { name: 'Nama Ketua OSIS', photo: '', role: 'Ketua', instagram: '' },
  { name: 'Nama Wakil Ketua', photo: '', role: 'Wakil Ketua', instagram: '' },
  { name: 'Nama Sekretaris 1', photo: '', role: 'Sekretaris 1', instagram: '' },
  { name: 'Nama Sekretaris 2', photo: '', role: 'Sekretaris 2', instagram: '' },
  { name: 'Nama Bendahara 1', photo: '', role: 'Bendahara 1', instagram: '' },
  { name: 'Nama Bendahara 2', photo: '', role: 'Bendahara 2', instagram: '' }
]

// Sekbid data
export const sekbidData: SekbidData[] = [
  {
    sekbidNumber: 1,
    sekbidName: 'Ketakwaan Terhadap Tuhan Yang Maha Esa',
    members: [
      {
        name: 'Koordinator Sekbid 1',
        role: 'Koordinator',
        formalPhoto: '',
        activityPhoto: '',
        casualPhoto: '',
        instagram: ''
      },
      {
        name: 'Anggota Sekbid 1',
        role: 'Anggota',
        formalPhoto: '',
        activityPhoto: '',
        casualPhoto: '',
        instagram: ''
      }
    ]
  },
  {
    sekbidNumber: 2,
    sekbidName: 'Kehidupan Berbangsa dan Bernegara',
    members: [
      {
        name: 'Koordinator Sekbid 2',
        role: 'Koordinator',
        formalPhoto: '',
        activityPhoto: '',
        casualPhoto: '',
        instagram: ''
      }
    ]
  },
  {
    sekbidNumber: 3,
    sekbidName: 'Pendidikan Pendahuluan Bela Negara',
    members: [
      {
        name: 'Koordinator Sekbid 3',
        role: 'Koordinator',
        formalPhoto: '',
        activityPhoto: '',
        casualPhoto: '',
        instagram: ''
      }
    ]
  },
  {
    sekbidNumber: 4,
    sekbidName: 'Kepribadian dan Budi Pekerti Luhur',
    members: [
      {
        name: 'Koordinator Sekbid 4',
        role: 'Koordinator',
        formalPhoto: '',
        activityPhoto: '',
        casualPhoto: '',
        instagram: ''
      }
    ]
  },
  {
    sekbidNumber: 5,
    sekbidName: 'Berorganisasi, Pendidikan Politik dan Kepemimpinan',
    members: [
      {
        name: 'Koordinator Sekbid 5',
        role: 'Koordinator',
        formalPhoto: '',
        activityPhoto: '',
        casualPhoto: '',
        instagram: ''
      }
    ]
  },
  {
    sekbidNumber: 6,
    sekbidName: 'Keterampilan dan Kewirausahaan',
    members: [
      {
        name: 'Koordinator Sekbid 6',
        role: 'Koordinator',
        formalPhoto: '',
        activityPhoto: '',
        casualPhoto: '',
        instagram: ''
      }
    ]
  }
]

// Ekskul data
export const ekskulData: EkskulData[] = [
  {
    ekskulName: 'Pramuka',
    ekskulIcon: 'i-lucide-tent',
    coverPhoto: '',
    members: [
      { name: 'Nama Pembina', photo: '', role: 'Pembina', instagram: '' },
      { name: 'Nama Pelatih', photo: '', role: 'Pelatih', instagram: '' },
      { name: 'Nama Ketua', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Nama Wakil', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Nama Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Nama Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ]
  },
  {
    ekskulName: 'PMR',
    ekskulIcon: 'i-lucide-heart-pulse',
    coverPhoto: '',
    members: [
      { name: 'Nama Pembina', photo: '', role: 'Pembina', instagram: '' },
      { name: 'Nama Pelatih', photo: '', role: 'Pelatih', instagram: '' },
      { name: 'Nama Ketua', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Nama Wakil', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Nama Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Nama Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ]
  },
  {
    ekskulName: 'Basket',
    ekskulIcon: 'i-lucide-dribbble',
    coverPhoto: '',
    members: [
      { name: 'Nama Pembina', photo: '', role: 'Pembina', instagram: '' },
      { name: 'Nama Pelatih', photo: '', role: 'Pelatih', instagram: '' },
      { name: 'Nama Ketua', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Nama Wakil', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Nama Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Nama Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ]
  },
  {
    ekskulName: 'Paduan Suara',
    ekskulIcon: 'i-lucide-music',
    coverPhoto: '',
    members: [
      { name: 'Nama Pembina', photo: '', role: 'Pembina', instagram: '' },
      { name: 'Nama Pelatih', photo: '', role: 'Pelatih', instagram: '' },
      { name: 'Nama Ketua', photo: '', role: 'Ketua', instagram: '' },
      { name: 'Nama Wakil', photo: '', role: 'Wakil', instagram: '' },
      { name: 'Nama Sekretaris', photo: '', role: 'Sekretaris', instagram: '' },
      { name: 'Nama Bendahara', photo: '', role: 'Bendahara', instagram: '' }
    ]
  }
]
