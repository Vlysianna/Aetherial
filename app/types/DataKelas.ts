export interface DataKelas {
  kelas: string;
  siswa: Siswa[];
}

export interface Siswa {
  id: number;
  name: string;
  instagram?: string;
  tiktok?: string;
}
