import type { ClassData, BPHMember, SekbidData, EkskulData, Student } from '~/types/yearbook'

const allStudents = import.meta.glob<{ default: Student[] }>('~/data/json/students/*.json', { eager: true })

const photoBaseByClass: Record<string, string> = {
  'RPL 1': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/RPL%201/',
  'RPL 2': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/RPL%202/',
  'PH 1': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/PH%201/',
  'PH 2': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/PH%202/',
  'PH 3': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/PH%203/',
  'TBG 1': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/TBG%201/',
  'TBG 2': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/TBG%202/',
  'TBG 3': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/TBG%203/',
  'TBS 1': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/TBS%201/',
  'TBS 2': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/TBS%202/',
  'TBS 3': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/TBS%203/',
  'ULW': 'https://xvjjgubskwigdzdugoxg.supabase.co//storage/v1/object/public/aetherial/Siswa/ULW/'
}

// Generate diverse students for a class
const generateStudents = (classCode: string, count: number = 36) => {
  const photoBase = photoBaseByClass[classCode] ?? ''

  const path = `/data/json/students/${classCode.toUpperCase()}.json`
  const studentsData = allStudents[path]?.default || []

  return studentsData.map((student, index) => ({
    ...student,
    photo: photoBase ? `${photoBase}${index + 1}.JPG` : ''
  }))
}

// Sample class data with diverse students
const rawClassesData: ClassData[] = [
  {
    classCode: 'ULW',
    className: 'Unggulan Wirausaha',
    students: generateStudents('ULW', 36),
    teacher: {
      name: 'Nurlatifah Ismail,S.pd,M.par.',
      photo: '', // Add actual teacher photo
      subject: 'Pariwisata'
    },
    officers: [
      { name: 'Muhammad Rayhan', photo: '', role: 'Ketua', instagram: 'rayhan_ulw' },
      { name: 'Putri Melinda', photo: '', role: 'Wakil', instagram: 'putrimelinda_' },
      { name: 'Alya Zahra', photo: '', role: 'Sekretaris', instagram: 'alyazhra' },
      { name: 'Daffa Hakim', photo: '', role: 'Bendahara', instagram: 'daffahkm' }
    ],
    retroPhotos: ['', '', ''] // Add actual retro photo paths
  },
  {
    classCode: 'RPL 1',
    className: 'Rekayasa Perangkat Lunak 1',
    students: generateStudents('RPL 1', 36),
    teacher: {
      name: 'DRS. Ajisar',
      photo: '',
      subject: 'Pemrograman Java'
    },
    officers: [
      { name: 'Farhan Adiputra', photo: '', role: 'Ketua', instagram: 'farhan_code' },
      { name: 'Nabila Azzahra', photo: '', role: 'Wakil', instagram: 'nabilazzhr' },
      { name: 'Kevin Pratama', photo: '', role: 'Sekretaris', instagram: 'kevinprtm' },
      { name: 'Salsa Amalia', photo: '', role: 'Bendahara', instagram: 'salsaamalia' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'RPL 2',
    className: 'Rekayasa Perangkat Lunak 2',
    students: generateStudents('RPL 2', 36),
    teacher: {
      name: 'Ahmad Hilal M.Kom',
      photo: '',
      subject: 'Pemrogaman Web'
    },
    officers: [
      { name: 'Ryan Maulana', photo: '', role: 'Ketua', instagram: 'ryanmlna' },
      { name: 'Dinda Safira', photo: '', role: 'Wakil', instagram: 'dindasfr' },
      { name: 'Arief Budiman', photo: '', role: 'Sekretaris', instagram: 'ariefbudmn' },
      { name: 'Kirana Putri', photo: '', role: 'Bendahara', instagram: 'kiranaputri_' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'TBS 1',
    className: 'Tata Busana 1',
    students: generateStudents('TBS 1', 36),
    teacher: {
      name: 'Rina Susanti, S.Pd.',
      photo: '',
      subject: 'Desain Busana'
    },
    officers: [
      { name: 'Bella Cantika', photo: '', role: 'Ketua', instagram: 'bellacntk' },
      { name: 'Zahra Amini', photo: '', role: 'Wakil', instagram: 'zahraamini_' },
      { name: 'Anisa Rahma', photo: '', role: 'Sekretaris', instagram: 'anisarhma' },
      { name: 'Tasya Putri', photo: '', role: 'Bendahara', instagram: 'tasyaputri' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'TBS 2',
    className: 'Tata Busana 2',
    students: generateStudents('TBS 2', 36),
    teacher: {
      name: 'Retno widowati,S.Pd',
      photo: '',
      subject: 'Desain Busana'
    },
    officers: [
      { name: 'Valeria Sari', photo: '', role: 'Ketua', instagram: 'valeriasari_' },
      { name: 'Citra Dewi', photo: '', role: 'Wakil', instagram: 'citradewi' },
      { name: 'Nazwa Fitri', photo: '', role: 'Sekretaris', instagram: 'nazwafitri' },
      { name: 'Aulia Rahman', photo: '', role: 'Bendahara', instagram: 'auliarhman' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'TBS 3',
    className: 'Tata Busana 3',
    students: generateStudents('TBS 3', 36),
    teacher: {
      name: 'Oktaviana Tegar Marpaung, S.Sn., M.Pd',
      photo: '',
      subject: 'Desain Busana'
    },
    officers: [
      { name: 'Luna Maharani', photo: '', role: 'Ketua', instagram: 'lunamhrni' },
      { name: 'Kania Salsabila', photo: '', role: 'Wakil', instagram: 'kaniasalsa' },
      { name: 'Nadia Permata', photo: '', role: 'Sekretaris', instagram: 'nadiaprmta' },
      { name: 'Rara Anjani', photo: '', role: 'Bendahara', instagram: 'raraanjani' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'TBG 1',
    className: 'Tata Boga 1',
    students: generateStudents('TBG 1', 36),
    teacher: {
      name: 'Zulfadina, S.Pd',
      photo: '',
      subject: 'Kuliner'
    },
    officers: [
      { name: 'Gilang Ramadhan', photo: '', role: 'Ketua', instagram: 'gilang_chef' },
      { name: 'Ayu Lestari', photo: '', role: 'Wakil', instagram: 'ayulestari_' },
      { name: 'Fikri Habibi', photo: '', role: 'Sekretaris', instagram: 'fikrihbb' },
      { name: 'Sari Wulandari', photo: '', role: 'Bendahara', instagram: 'sariwlndr' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'TBG 2',
    className: 'Tata Boga 2',
    students: generateStudents('TBG 2', 36),
    teacher: {
      name: 'Khairunnisa, S.Pd',
      photo: '',
      subject: 'Kuliner'
    },
    officers: [
      { name: 'Rafi Pratama', photo: '', role: 'Ketua', instagram: 'rafiprtm_' },
      { name: 'Dina Amelia', photo: '', role: 'Wakil', instagram: 'dinaamelia' },
      { name: 'Haris Firmansyah', photo: '', role: 'Sekretaris', instagram: 'harisfrmnsyh' },
      { name: 'Vina Safitri', photo: '', role: 'Bendahara', instagram: 'vinasftri' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'TBG 3',
    className: 'Tata Boga 3',
    students: generateStudents('TBG 3', 36),
    teacher: {
      name: 'Chef Budi Hartono, S.Par.',
      photo: '',
      subject: 'Food & Beverage Service'
    },
    officers: [
      { name: 'Alvin Gunawan', photo: '', role: 'Ketua', instagram: 'alvingnwn' },
      { name: 'Mira Anggraini', photo: '', role: 'Wakil', instagram: 'miraanggr' },
      { name: 'Bagas Setiawan', photo: '', role: 'Sekretaris', instagram: 'bagassetia' },
      { name: 'Lala Permatasari', photo: '', role: 'Bendahara', instagram: 'lalaprmta' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'PH 1',
    className: 'Perhotelan 1',
    students: generateStudents('PH 1', 36),
    teacher: {
      name: 'Drs. Surya Wijaya, M.Par.',
      photo: '',
      subject: 'Front Office Operations'
    },
    officers: [
      { name: 'Daniel Pratama', photo: '', role: 'Ketua', instagram: 'danielprtm' },
      { name: 'Celine Maharani', photo: '', role: 'Wakil', instagram: 'celinemhrni' },
      { name: 'Fadli Rahman', photo: '', role: 'Sekretaris', instagram: 'fadlirhman' },
      { name: 'Intan Permata', photo: '', role: 'Bendahara', instagram: 'intanprmta' }
    ],
    retroPhotos: ['https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/PH%201/fotobersama/1111.JPG', 'https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/PH%201/fotobersama/2222.JPG', 'https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/PH%201/fotobersama/3333.JPG']
  },
  {
    classCode: 'PH 2',
    className: 'Perhotelan 2',
    students: generateStudents('PH 2', 36),
    teacher: {
      name: 'Kartina, ST.Par.',
      photo: '',
      subject: 'Housekeeping Operations'
    },
    officers: [
      { name: 'Kevin Alexander', photo: '', role: 'Ketua', instagram: 'kevinalex_' },
      { name: 'Nadya Putri', photo: '', role: 'Wakil', instagram: 'nadyaputri' },
      { name: 'Rizky Maulana', photo: '', role: 'Sekretaris', instagram: 'rizkymlna' },
      { name: 'Shabrina Aulia', photo: '', role: 'Bendahara', instagram: 'shabrinaul' }
    ],
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'PH 3',
    className: 'Perhotelan 3',
    students: generateStudents('PH 3', 36),
    teacher: {
      name: 'Ahmad Fauzi, S.Par.',
      photo: '',
      subject: 'Event Management'
    },
    officers: [
      { name: 'Raihan Sakti', photo: '', role: 'Ketua', instagram: 'raihansakti' },
      { name: 'Kalista Dewi', photo: '', role: 'Wakil', instagram: 'kalistadewi' },
      { name: 'Farrel Aditya', photo: '', role: 'Sekretaris', instagram: 'farreladitya' },
      { name: 'Aisyah Nabila', photo: '', role: 'Bendahara', instagram: 'aisyahnbl' }
    ],
    retroPhotos: ['', '', '']
  }
]

export const classesData: ClassData[] = rawClassesData.map(c => {
  const photoBase = photoBaseByClass[c.classCode] ?? ''
  return {
    ...c,
    teacher: {
      ...c.teacher,
      photo: photoBase ? `${photoBase}0.JPG` : ''
    },
    retroPhotos: photoBase ? [
      `${photoBase}fotobersama/1111.JPG`,
      `${photoBase}fotobersama/2222.JPG`,
      `${photoBase}fotobersama/3333.JPG`
    ] : ['', '', '']
  }
})

// BPH OSIS data
const bphUrls = [
  'https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/OSIS/BPH/1.%20Muhammad%20Rafie%20Faeza%20Arrumi%20-%20Ketua%20Osis.JPG',
  'https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/OSIS/BPH/2.%20Kirana%20Amanda%20Putri%20Firmansyah%20-%20Wakil%20Ketua%20Osis.JPG',
  'https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/OSIS/BPH/3.%20Adelia%20Tri%20Ramadhani%20-%20Sekretaris%201.JPG',
  'https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/OSIS/BPH/5.%20Amara%20Maulida%20Syaharani%20-%20Bendahara%201.JPG',
  'https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/OSIS/BPH/6.%20Caesal%20Pandu%20Rifolia%20-%20Bendahara%202.JPG'
]

const defaultBphRoles: BPHMember['role'][] = ['Ketua', 'Wakil Ketua', 'Sekretaris', 'Bendahara 1', 'Bendahara 2']

export const osisBPH: BPHMember[] = bphUrls.map((url, index) => {
  let name = `Anggota ${index + 1}`
  try {
    const filename = decodeURIComponent(url.split('/').pop() || '')
    const withoutExt = filename.replace(/\.[^/.]+$/, "") // Hapus ekstensi .JPG

    // Ekstrak nama dari format "1. Nama - Jabatan" atau "1. Nama"
    const match = withoutExt.match(/^\d+\.\s*(.+?)(?:\s*-\s*.+)?$/)
    if (match && match[1]) {
      name = match[1].trim()
    } else {
      name = withoutExt
    }
  } catch (e) { }

  return {
    name,
    photo: url,
    role: defaultBphRoles[index] || 'Ketua',
    instagram: ''
  }
})

// Sekbid data
export const sekbidData: SekbidData[] = [
  {
    sekbidNumber: 1,
    sekbidName: 'Ketakwaan Terhadap Tuhan Yang Maha Esa',
    groupPhotos: ['', '']
  },
  {
    sekbidNumber: 2,
    sekbidName: 'Kehidupan Berbangsa dan Bernegara',
    groupPhotos: ['', '']
  },
  {
    sekbidNumber: 3,
    sekbidName: 'Pendidikan Pendahuluan Bela Negara',
    groupPhotos: ['', '']
  },
  {
    sekbidNumber: 4,
    sekbidName: 'Kepribadian dan Budi Pekerti Luhur',
    groupPhotos: ['', '']
  },
  {
    sekbidNumber: 5,
    sekbidName: 'Berorganisasi, Pendidikan Politik dan Kepemimpinan',
    groupPhotos: ['', '']
  },
  {
    sekbidNumber: 6,
    sekbidName: 'Keterampilan dan Kewirausahaan',
    groupPhotos: ['', '']
  }
]

// Ekskul data
export const ekskulData: EkskulData[] = [
  {
    ekskulName: 'Pramuka',
    ekskulIcon: 'i-lucide-tent',
    groupPhotos: ['', ''],
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
    groupPhotos: ['', ''],
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
    groupPhotos: ['', ''],
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
    groupPhotos: ['', ''],
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
