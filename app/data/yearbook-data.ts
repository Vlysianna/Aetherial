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
      name: 'Widya Devi, M.Pd.',
      photo: '',
      subject: 'z'
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
const sekbidBase = 'https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/OSIS/Sekbid'

const buildSekbidPhotos = (n: number): [string, string, string] => [
  `${sekbidBase}%20${n}/1.JPG`,
  `${sekbidBase}%20${n}/2.JPG`,
  `${sekbidBase}%20${n}/3.JPG`
]

export const sekbidData: SekbidData[] = [
  {
    sekbidNumber: 1,
    sekbidName: 'Iman dan Ketakwaan',
    groupPhotos: buildSekbidPhotos(1)
  },
  {
    sekbidNumber: 2,
    sekbidName: 'Kepribadian Unggul, Wawasan Luas dan Bela Negara',
    groupPhotos: buildSekbidPhotos(2)
  },
  {
    sekbidNumber: 3,
    sekbidName: 'Prestasi Akademik/Olahraga',
    groupPhotos: buildSekbidPhotos(3)
  },
  {
    sekbidNumber: 4,
    sekbidName: 'Kewirausahaan dan Keterampilan',
    groupPhotos: buildSekbidPhotos(4)
  },
  {
    sekbidNumber: 5,
    sekbidName: 'Sastra Dan Budaya',
    groupPhotos: buildSekbidPhotos(5)
  },
  {
    sekbidNumber: 6,
    sekbidName: 'Humas',
    groupPhotos: buildSekbidPhotos(6)
  }
]

// Ekskul data
const ekskulBase = 'https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul'

function extractEkskulName(url: string): string {
  if (!url) return ''
  const filename = decodeURIComponent(url.split('/').pop() || '')
  const withoutExt = filename.replace(/\.[^/.]+$/, '')
  // Format: "Pembina _ Nama" or "Pembina Ikhwan - Nama" etc
  const match = withoutExt.match(/^(?:Pembina|Pelatih)[^_-]*[_-]\s*(.+)$/i)
  return match?.[1]?.trim() || withoutExt
}

function makeMember(url: string, role: 'Pembina' | 'Pelatih'): EkskulMember {
  return { name: extractEkskulName(url), photo: url, role, instagram: '' }
}

function buildEkskulPhotos(folder: string, count = 3): string[] {
  const encoded = folder.split(' ').join('%20')
  return Array.from({ length: count }, (_, i) => `${ekskulBase}/${encoded}/${i + 1}.JPG`)
}

type EkskulMember = import('~/types/yearbook').EkskulMember

export const ekskulData: import('~/types/yearbook').EkskulData[] = [
  {
    ekskulName: 'Basket',
    ekskulIcon: 'i-lucide-dribbble',
    groupPhotos: buildEkskulPhotos('Basket'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Basket/Pembina%20_%20Bunga%20Mahardika,%20S.Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Basket/Pelatih%20_%20Ikbal%20Wahyu%20Dermawan%20S.Pd..png', 'Pelatih')
    ]
  },
  {
    ekskulName: 'Futsal',
    ekskulIcon: 'i-lucide-sport-shoe',
    groupPhotos: buildEkskulPhotos('Futsal'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Futsal/Pembina%20_%20Ibnu%20Widianto%20S.pd.png', 'Pembina')
    ]
  },
  {
    ekskulName: 'Voli',
    ekskulIcon: 'i-lucide-volleyball',
    groupPhotos: buildEkskulPhotos('Voli'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Voli/Pembina%20Waluya%20Priyatna%20S.Kom.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Voli/Pelatih%20Teguh%20Atmadji.png', 'Pelatih')
    ]
  },
  {
    ekskulName: 'Silat',
    ekskulIcon: 'i-lucide-swords',
    groupPhotos: buildEkskulPhotos('Silat'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Silat/Pembina%20_%20Chairul%20Fajri%20S.Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Silat/Pelatih%20_%20Muhammad%20Ivan%20Fadhilah.png', 'Pelatih')
    ]
  },
  {
    ekskulName: 'Hadroh',
    ekskulIcon: 'i-lucide-music-2',
    groupPhotos: buildEkskulPhotos('Hadroh'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Hadroh/Pembina%20_%20Ari%20Al%20Ghifari,%20M.Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Hadroh/Pelatih%20_%20Fahrozi%20Fritama%20Putra.png', 'Pelatih')
    ]
  },
  {
    ekskulName: 'Modern Dance',
    ekskulIcon: 'i-lucide-music',
    groupPhotos: buildEkskulPhotos('Modern%20Dance'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Modern%20Dance/Pembina%20_%20Kameliyanti,%20S.Pd.,%20M.Pd.png', 'Pembina')
    ]
  },
  {
    ekskulName: 'Paskibra',
    ekskulIcon: 'i-lucide-flag',
    groupPhotos: buildEkskulPhotos('Paskibra'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Paskibra/Pembina%20_%20Khairunnisa,%20S.Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Paskibra/Pelatih%20-%20Wahyu%20Navis%20Ridho.png', 'Pelatih')
    ]
  },
  {
    ekskulName: 'PIK-R',
    ekskulIcon: 'i-lucide-heart',
    groupPhotos: buildEkskulPhotos('PIK-R'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/PIK-R/Pembina%20_%20Putri%20Maharnovitasari,%20S.Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/PIK-R/Pelatih%20_%20Rizkiya.png', 'Pelatih')
    ]
  },
  {
    ekskulName: 'PMR',
    ekskulIcon: 'i-lucide-heart-pulse',
    groupPhotos: buildEkskulPhotos('PMR'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/PMR/Pembina%20_%20Dini%20%20Rachmawatu%20S.Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/PMR/Pelatih%20_%20Rido%20Mulyadi.png', 'Pelatih')
    ]
  },
  {
    ekskulName: 'Pramuka',
    ekskulIcon: 'i-lucide-tent',
    groupPhotos: buildEkskulPhotos('Pramuka'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Pramuka/Pembina%20-%20Yanti%20Sabartina%20S.Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Pramuka/Pembina%20-%20Kartina%20ST.Par.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Pramuka/Pembina%20-%20Hadi%20Santoso%20S.Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Pramuka/Pembina%20-%20Retno%20Widowati%20S.Pd.png', 'Pembina')
    ]
  },
  {
    ekskulName: 'Rohis',
    ekskulIcon: 'i-lucide-book-open',
    groupPhotos: buildEkskulPhotos('Rohis'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Rohis/Pembina%20Ikhwan%20-%20Yazid%20Umami,%20S.Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Rohis/Pembina%20%20Akhwat%20-%20Tjandra%20Sarie%20Astoeti,%20M.Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Rohis/Pelatih%20Ikhwan%20-%20Ishomullah.png', 'Pelatih'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Rohis/Pelatih%20Akhwat%20-%20Nurul%20Aulia%20Rahma,%20S.Pd.png', 'Pelatih')
    ]
  },
  {
    ekskulName: 'Rokhris',
    ekskulIcon: 'i-lucide-book-open',
    groupPhotos: buildEkskulPhotos('Rokhris'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Rokhris/Yari%20Zega%20S.Pd.png', 'Pembina')
    ]
  },
  {
    ekskulName: 'Tari Saman',
    ekskulIcon: 'i-lucide-sparkles',
    groupPhotos: buildEkskulPhotos('Tari%20Saman'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Tari%20Saman/Pembina%20_%20Christiana%20Sukmawati%20M.pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Tari%20Saman/Pelatih%20_%20Dedi%20Suherman.png', 'Pelatih')
    ]
  },
  {
    ekskulName: 'Tari Tradisional',
    ekskulIcon: 'i-lucide-star',
    groupPhotos: buildEkskulPhotos('Tari%20Tradisional'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Tari%20Tradisional/Pembina%20-%20Kholifa%20Qisti%20Rohima,%20M.%20Pd.png', 'Pembina'),
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Tari%20Tradisional/Pelatih%20-%20Kurniasih.png', 'Pelatih')
    ]
  },
  {
    ekskulName: 'Teater',
    ekskulIcon: 'i-lucide-theater',
    groupPhotos: buildEkskulPhotos('Teater'),
    members: [
      makeMember('https://xvjjgubskwigdzdugoxg.supabase.co/storage/v1/object/public/aetherial/Siswa/Ekskul/Teater/Pembina%20_%20Kameliyanti,%20S.Pd.,%20M.Pd.png', 'Pembina')
    ]
  }
]
