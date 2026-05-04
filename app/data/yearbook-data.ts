import type { ClassData, BPHMember, SekbidData, EkskulData, Student } from '~/types/yearbook'

const allStudents = import.meta.glob<{ default: Student[] }>('~/data/json/students/*.json', { eager: true })


// Generate diverse students for a class
const generateStudents = (classCode: string, count: number = 36) => {
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

  const photoBase = photoBaseByClass[classCode] ?? ''

  const studentsData = computed(() => {
    const path = `/data/json/students/${classCode.toUpperCase()}.json`
    console.log(path)
    return allStudents[path]?.default || [] as Student[]
  })

  const studentsWithPhoto = studentsData.value?.map((student, index) => ({
    ...student,
    photo: photoBase ? `${photoBase}${index + 1}.JPG` : ''
  }))

  return studentsWithPhoto
}

// Sample class data with diverse students
export const classesData: ClassData[] = [
  {
    classCode: 'Ulw',
    className: 'Unggulan Wirausaha',
    students: generateStudents('Ulw', 36),
    teacher: {
      name: 'Dra. Siti Nurhasanah, M.Pd.',
      photo: '', // Add actual teacher photo
      subject: 'Kewirausahaan'
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
      name: 'Agus Winarto, S.Kom., M.T.',
      photo: '',
      subject: 'Pemrograman Web'
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
      name: 'Bambang Setiadi, S.T., M.Kom.',
      photo: '',
      subject: 'Basis Data'
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
      name: 'Dewi Kartika, S.Pd.',
      photo: '',
      subject: 'Konstruksi Pola'
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
      name: 'Maya Sari, S.Pd., M.Ds.',
      photo: '',
      subject: 'Fashion Illustration'
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
      name: 'Chef Indra Kusuma, S.Par.',
      photo: '',
      subject: 'Kuliner Nusantara'
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
      name: 'Chef Ratna Dewi, S.Par., M.M.',
      photo: '',
      subject: 'Patisserie'
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
    retroPhotos: ['', '', '']
  },
  {
    classCode: 'PH 2',
    className: 'Perhotelan 2',
    students: generateStudents('PH 2', 36),
    teacher: {
      name: 'Lila Sari, S.Par., M.M.',
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
