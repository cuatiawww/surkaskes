'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Printer, Activity, Thermometer, AlertCircle, BarChart3, Home, User, Phone, LogIn, TrendingDown, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const assets = {
  logo: '/Logo-Kemenkes.png',
}

export default function LaporanDetailPage({ params }: { params: { minggu: string } }) {
  const navItems = [
    { label: 'BERANDA', icon: Home, href: '/' },
    { label: 'PROFIL', icon: User, href: '#' },
    { label: 'KONTAK', icon: Phone, href: '#' },
    { label: 'LOGIN', icon: LogIn, href: '#', isPrimary: true },
  ]

  const [activeSection, setActiveSection] = useState('poin-utama')
  const [activeSurveillanceTab, setActiveSurveillanceTab] = useState('influenza')

  // Sample data - akan diganti dengan data dinamis berdasarkan minggu
  const laporanData = {
    minggu_ke: 53,
    tanggal: '03 Jan 2026',
    tahun: 2025,
    updated_at: '03 Jan 2026',
    ringkasan: 'Ringkasan laporan ini menyajikan data epidemiologi rutin untuk penyakit pernapasan (Influenza, COVID-19, dll.) di Indonesia, mencakup tren penyakit, tingkat perawatan di rumah sakit, positivity rate, pemeriksaan molekuler, dan analisis varian.',
    poinUtama: [
      'Influenza dan COVID-19 dipantau rutin melalui sentinel-sentinel fasilitas pelayanan kesehatan di 35 Provinsi, 35 Rumah Sakit, 14 Balai Karantina Kesehatan (pintu masuk negara). Pemantauan ini dilakukan untuk monitoring kasus dan karakteristik virus serta gejala keeparahan.',
      'Per Minggu 53 (3 Desember 2025-3 Januari 2026) dari 492 pemeriksaan COVID-19, terdapat 10 kasus positif dengan positivity rate sebesar 2.03%',
      'Varian dominan di Indonesia adalah XFG (57%), LF.7 (29%), XFG 3.4.3 (14%) di bulan Agustus',
      'Varian dominan COVID-19 yang ada di Indonesia saat ini termasuk dalam kategori varian dengan risiko rendah, sehingga tidak perlu panik, namun tetap perlu pengawasan mengenai produksi kesehatan',
      'Tingkat Aktivitas Influenza Rendah: tidak ada peningkatan proporsi kasus influenza di minggu ini dan tingkat aktivitas influenza sudah masuk dalam kategori aktivitas rendah, situasi masih berpotensial.',
      'Jumlah kasus konfirmasi HMPV di Indonesia pada tahun 2025 yang dilaporkan sampai dengan minggu ke 52 berjumlah 59 kasus. Kasus HMPV ditemukan dari hasil pemeriksaan ILI/ SARI',
      'Distribusi kasus H3N2 Subclade K didomnasi oleh Jawa Timur (37.1%) dan Kalimantan Selatan (29%), dikuti Jawa Barat (16.1%).',
    ],
    surveillanceActivities: {
      influenza: [
        { indikator: 'Kasus ILI dari total kunjungan Puskesmas Sentinel', tren: 'Menurun', level: 'Aktivitas influenza rendah', keterangan: 'Kasus ILI dari total kunjungan pasien Menurun menjadi 0.110% dari 0.153% di minggu sebelumnya.' },
        { indikator: 'Kasus SARI dari Total rawat inap rumah sakit Sentinel', tren: 'Menurun', level: 'Aktivitas influenza rendah', keterangan: 'Kasus SARI dari total rawat inap Meningkat menjadi 0.83% dari 1.27% di minggu sebelumnya.' },
        { indikator: 'Positivity rate influenza', tren: 'Meningkat', level: 'Aktivitas influenza rendah', keterangan: 'Proporsi positif influenza Meningkat menjadi 23% dari 18% di minggu sebelumnya.' },
      ],
      covid19: [
        { indikator: 'Positivity rate COVID-19', tren: 'Menurun', level: 'Risiko rendah', keterangan: 'Proporsi positif COVID-19 Menurun menjadi 2% dari 4% di minggu sebelumnya.' },
      ],
      rsv: [
        { indikator: 'Jumlah kasus RSV', tren: 'Menurun', level: 'Terkendali', keterangan: 'Proporsi RSV Menurun menjadi 10% dari 25% di minggu sebelumnya.' },
        { indikator: 'Multipatogen Lainnya', tren: 'Menurun', level: 'Terkendali', keterangan: 'Proporsi Multipatogen Menurun menjadi 30% dari 44% di minggu sebelumnya.' },
      ],
    },
    covid19: {
      positivity_rate: '2.03%',
      kasus: 10,
      pemeriksaan: 492,
      kategori: 'Risiko Rendah',
      total_kasus: 653,
      provinsi_terbanyak: ['DKI Jakarta', 'Jawa Timur', 'Banten', 'Jawa Barat'],
    },
    influenza: {
      tingkat_aktivitas: 'RENDAH',
      proporsi_positif: '23%',
      kelompok_usia: '18-59 tahun (38%)',
      subtipe: [
        { nama: 'A(H3N2)', jumlah: 7 },
        { nama: 'A(H1N1)', jumlah: 5 },
        { nama: 'B', jumlah: 1 },
      ],
    },
  }

  const sidebarMenu = [
    { id: 'poin-utama', label: 'Poin Utama', icon: Activity },
    { id: 'lab-surveillance', label: 'Surveilans Laboratorium', icon: Thermometer },
    { id: 'perawatan-primer', label: 'Pengawasan Perawatan Primer', icon: Home },
    { id: 'perawatan-sekunder', label: 'Pengawasan Perawatan Sekunder', icon: AlertCircle },
    { id: 'vaksin', label: 'Cakupan Vaksin', icon: BarChart3 },
  ]

  return (
    <div className="min-h-screen bg-[#fbffff] text-slate-800">
      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#d5eceb] shadow-[0_2px_8px_rgba(15,143,150,0.08)]">
        <div className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Organization Name */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={assets.logo}
                  alt="Logo Kemenkes"
                  width={60}
                  height={60}
                  className="h-10 w-auto sm:h-12"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <h2 className="text-[12px] sm:text-[13px] font-bold text-[#0f8f96] leading-tight">Kemenkes Ditjen P2</h2>
                <p className="text-[10px] sm:text-[11px] text-[#4a7a7a] leading-tight mt-0.5">
                  Direktoral Surveillans & Karantina
                </p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex items-center gap-2 sm:gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all font-semibold text-[10px] sm:text-[11px] tracking-[0.05em] uppercase ${
                    item.isPrimary
                      ? 'bg-gradient-to-r from-[#0f8f96] to-[#16b7b2] text-white shadow-[0_4px_12px_rgba(15,143,150,0.3)] hover:shadow-[0_6px_16px_rgba(15,143,150,0.4)] hover:-translate-y-0.5 active:scale-95'
                      : 'text-[#3f5a5a] hover:text-[#0f8f96] hover:bg-[#f0fbfb] active:bg-[#e8f7f7]'
                  }`}
                >
                  <item.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ── Breadcrumb ──────────────────────────────────────────────────────– */}
      <div className="px-4 sm:px-5 lg:px-6 py-4 border-b border-[#e8e8e8]">
        <div className="flex items-center gap-2 text-[12px] text-[#0f8f96]">
          <Link href="/" className="hover:underline">Beranda</Link>
          <ChevronRight className="h-4 w-4" />
          <span>Laporan Surveilans Nasional: Tahun 2025</span>
          <ChevronRight className="h-4 w-4" />
          <span>Ringkasan Kasus</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold">Minggu ke {laporanData.minggu_ke}</span>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────────────────────────────── */}
      <div className="px-4 sm:px-5 lg:px-6 py-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* ── Header Section ──────────────────────────────────────────────── */}
            <div className="lg:col-span-4 mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3535] mb-2">
                Laporan Pengawasan Kasus Influenza dan COVID-19 di Indonesia: {laporanData.tanggal} (Minggu ke {laporanData.minggu_ke})
              </h1>
              <p className="text-[13px] text-[#4a7a7a]">
                Diperbaharui pada {laporanData.updated_at}. Laporan resmi untuk wilayah Indonesia.
              </p>
            </div>

            {/* ── Sidebar Navigation ──────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-[#e0e0e0] p-4 sticky top-24">
                <p className="text-[11px] font-bold uppercase text-[#4a7a7a] mb-4">Navigasi Konten</p>
                <nav className="space-y-2 mb-4">
                  {sidebarMenu.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-[12px] font-semibold rounded-lg transition-all ${
                        activeSection === item.id
                          ? 'bg-[#e8faf8] text-[#0f8f96] border-l-2 border-[#0f8f96]'
                          : 'text-[#4a7a7a] hover:bg-[#f5f5f5]'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="border-t border-[#e0e0e0] pt-4">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[12px] font-semibold text-white bg-[#0f8f96] rounded-lg hover:bg-[#0d7a81] transition-all shadow-[0_2px_8px_rgba(15,143,150,0.2)] hover:shadow-[0_4px_12px_rgba(15,143,150,0.3)]">
                    <Printer className="h-4 w-4" />
                    Cetak Laporan
                  </button>
                </div>
              </div>
            </div>

            {/* ── Main Content Area ───────────────────────────────────────── */}
            <div className="lg:col-span-3 space-y-8">
              {/* Ringkasan */}
              <div className="bg-[#f5f5f5] p-6 rounded-lg border-l-4 border-[#0f8f96]">
                <p className="text-[13px] text-[#2f3a3a] leading-relaxed">
                  <span className="font-semibold">Ringkasan Laporan:</span> {laporanData.ringkasan}
                </p>
              </div>

              {/* ── Poin Utama Section ──────────────────────────────────── */}
              {activeSection === 'poin-utama' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1a3535]">Poin Utama</h2>
                  
                  <div className="bg-white border border-[#e0e0e0] rounded-lg p-6 space-y-4">
                    <ul className="space-y-3 text-[13px] text-[#3f5a5a] leading-relaxed">
                      {laporanData.poinUtama.map((poin, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-[#0f8f96] font-bold flex-shrink-0">•</span>
                          <span>{poin}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* ── Lab Surveillance Section ──────────────────────────────– */}
              {activeSection === 'lab-surveillance' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1a3535]">Laporan Pengawasan Kasus Influenza dan COVID-19</h2>
                  
                  {/* Tabs Navigation */}
                  <div className="flex gap-2 border-b border-[#e0e0e0] overflow-x-auto">
                    {[
                      { id: 'influenza', label: 'Influenza Activity' },
                      { id: 'covid19', label: 'COVID-19 Activity' },
                      { id: 'rsv', label: 'RSV & Multipatogen' },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveSurveillanceTab(tab.id)}
                        className={`px-4 py-3 text-[12px] font-semibold whitespace-nowrap transition-all border-b-2 ${
                          activeSurveillanceTab === tab.id
                            ? 'border-[#0f8f96] text-[#0f8f96]'
                            : 'border-transparent text-[#4a7a7a] hover:text-[#0f8f96]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Influenza Activity Table */}
                  {activeSurveillanceTab === 'influenza' && (
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-[#e8faf8] border-b border-[#cfeeed]">
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Indikator</th>
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Tren</th>
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Level</th>
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Keterangan</th>
                            </tr>
                          </thead>
                          <tbody>
                            {laporanData.surveillanceActivities.influenza.map((row, idx) => (
                              <tr key={idx} className="border-b border-[#e0e0e0] hover:bg-[#fbffff] transition-colors">
                                <td className="px-4 py-3 text-[12px] text-[#3f5a5a] font-semibold">{row.indikator}</td>
                                <td className="px-4 py-3 text-[12px]">
                                  <span className={`inline-block px-2 py-1 rounded text-[11px] font-semibold ${
                                    row.tren === 'Menurun' 
                                      ? 'bg-[#d4f1ed] text-[#0f8f96]' 
                                      : 'bg-[#ffe8d6] text-[#d97706]'
                                  }`}>
                                    {row.tren}
                                  </span>
                                </td>
                                <td className="px-4 py-3 text-[12px] text-[#4a7a7a]">{row.level}</td>
                                <td className="px-4 py-3 text-[12px] text-[#4a7a7a]">{row.keterangan}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* COVID-19 Activity Table */}
                  {activeSurveillanceTab === 'covid19' && (
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-[#e8faf8] border-b border-[#cfeeed]">
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Indikator</th>
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Tren</th>
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Level</th>
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Keterangan</th>
                            </tr>
                          </thead>
                          <tbody>
                            {laporanData.surveillanceActivities.covid19.map((row, idx) => (
                              <tr key={idx} className="border-b border-[#e0e0e0] hover:bg-[#fbffff] transition-colors">
                                <td className="px-4 py-3 text-[12px] text-[#3f5a5a] font-semibold">{row.indikator}</td>
                                <td className="px-4 py-3 text-[12px]">
                                  <span className={`inline-block px-2 py-1 rounded text-[11px] font-semibold ${
                                    row.tren === 'Menurun' 
                                      ? 'bg-[#d4f1ed] text-[#0f8f96]' 
                                      : 'bg-[#ffe8d6] text-[#d97706]'
                                  }`}>
                                    {row.tren}
                                  </span>
                                </td>
                                <td className="px-4 py-3 text-[12px] text-[#4a7a7a]">{row.level}</td>
                                <td className="px-4 py-3 text-[12px] text-[#4a7a7a]">{row.keterangan}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* RSV & Multipatogen Table */}
                  {activeSurveillanceTab === 'rsv' && (
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-[#e8faf8] border-b border-[#cfeeed]">
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Indikator</th>
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Tren</th>
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Level</th>
                              <th className="px-4 py-3 text-left text-[12px] font-bold text-[#0f8f96]">Keterangan</th>
                            </tr>
                          </thead>
                          <tbody>
                            {laporanData.surveillanceActivities.rsv.map((row, idx) => (
                              <tr key={idx} className="border-b border-[#e0e0e0] hover:bg-[#fbffff] transition-colors">
                                <td className="px-4 py-3 text-[12px] text-[#3f5a5a] font-semibold">{row.indikator}</td>
                                <td className="px-4 py-3 text-[12px]">
                                  <span className={`inline-block px-2 py-1 rounded text-[11px] font-semibold ${
                                    row.tren === 'Menurun' 
                                      ? 'bg-[#d4f1ed] text-[#0f8f96]' 
                                      : 'bg-[#ffe8d6] text-[#d97706]'
                                  }`}>
                                    {row.tren}
                                  </span>
                                </td>
                                <td className="px-4 py-3 text-[12px] text-[#4a7a7a]">{row.level}</td>
                                <td className="px-4 py-3 text-[12px] text-[#4a7a7a]">{row.keterangan}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Detailed Lab Content with Graphics */}
                  <div className="space-y-8">
                    {/* COVID-19 Case Section */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-[#1a3535] text-lg">Kasus COVID-19</h3>
                      <p className="text-[13px] text-[#4a7a7a]">Per M53 (28 Desember 2025 - 3 Januari 2026), dari 492 pemeriksaan, terdapat 10 kasus positif dengan positivity rate sebesar 2.03%</p>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik1.png" alt="Tren mingguan COVID-19" width={800} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 1. Tren mingguan konfirmasi COVID-19</p>
                        </div>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik2.png" alt="Positivity rate COVID-19" width={800} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 2. Tren mingguan Positivity rate COVID-19</p>
                        </div>
                      </div>

                      <div className="bg-[#f9fafb] p-4 rounded-lg border border-[#e0e0e0] space-y-2 text-[13px] text-[#4a7a7a]">
                        <p><span className="font-semibold">Total pemeriksaan:</span> 492 spesimen (2 sentinel SARI, 2 Sentinel ILI, 6 non sentinel)</p>
                        <p><span className="font-semibold">Positivity rate:</span> 2.03%</p>
                        <p><span className="font-semibold">Kumulatif 2025 (M1-M53):</span> 653 kasus dari 20.471 spesimen (3.17%)</p>
                        <p><span className="font-semibold">Provinsi terbanyak:</span> DKI Jakarta, Jawa Timur, Banten, Jawa Barat, Sumatera Selatan, DI Yogyakarta</p>
                      </div>
                    </div>

                    {/* Influenza Case Section */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-[#1a3535] text-lg">Kasus Influenza</h3>
                      <p className="text-[13px] text-[#4a7a7a]">Data hingga 03-Januari-2026 menunjukkan proporsi influenza pada minggu ke-52 meningkat menjadi 23% dari 12% di minggu sebelumnya. Dari kasus influenza yang terdeteksi 38% terjadi pada kelompok usia 18-59 tahun.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik4.png" alt="Proporsi influenza mingguan" width={600} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 4. Proporsi Kasus Influenza Mingguan</p>
                        </div>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik5.png" alt="Tren influenza berdasarkan usia" width={600} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 5. Tren Jumlah Kasus Influenza Berdasarkan Usia</p>
                        </div>
                      </div>

                      <div className="bg-[#f9fafb] p-4 rounded-lg border border-[#e0e0e0] space-y-2 text-[13px] text-[#4a7a7a]">
                        <p><span className="font-semibold">Total pemeriksaan minggu 52:</span> 57 spesimen</p>
                        <p><span className="font-semibold">Kasus positif:</span> 13 kasus (7 A(H3N2), 5 A(H1N1Pdm09), 1 B(Victoria))</p>
                        <p><span className="font-semibold">Proporsi positif:</span> 23% (meningkat dari 12%)</p>
                        <p><span className="font-semibold">Kelompok usia terbanyak:</span> 1-4 tahun (47% pada kunjungan Puskesmas)</p>
                      </div>
                    </div>

                    {/* Multipatogen Section */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-[#1a3535] text-lg">Multipatogen Pernapasan</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik6.png" alt="Proporsi multipatogen A" width={600} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 6a. Proporsi Influenza, COVID-19, RSV & Rhinovirus</p>
                        </div>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik6b.png" alt="Proporsi multipatogen B" width={600} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 6b. RSV, Rhinovirus, Parainfluenza & Adenovirus</p>
                        </div>
                      </div>

                      <div className="bg-[#f9fafb] p-4 rounded-lg border border-[#e0e0e0] space-y-2 text-[13px] text-[#4a7a7a]">
                        <p><span className="font-semibold">Proporsi positif minggu 52:</span> 10% RSV, 10% HMPV, 10% Rhinovirus (HRV)</p>
                        <p><span className="font-semibold">Total HMPV 2025:</span> 59 kasus (hingga minggu 52)</p>
                      </div>
                    </div>

                    {/* Influenza Subtype & Varian Section */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-[#1a3535] text-lg">Subtipe & Varian</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik7.png" alt="Subtype influenza mingguan" width={600} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 7a. Subtype Influenza Mingguan</p>
                        </div>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik7b.png" alt="Proporsi subtype influenza" width={600} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 7b. Proporsi Subtype Influenza</p>
                        </div>
                      </div>

                      <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                        <Image src="/grafik8.png" alt="Sebaran H3N2 Subclade" width={800} height={400} className="w-full h-auto" />
                        <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 8. Sebaran H3N2 Subclade K (Tersebar di 8 Provinsi)</p>
                      </div>

                      <div className="bg-[#f9fafb] p-4 rounded-lg border border-[#e0e0e0] space-y-2 text-[13px] text-[#4a7a7a]">
                        <p><span className="font-semibold">Varian dominan COVID-19 Indonesia:</span> XFG (57%), LF.7 (29%), XFG 3.4.3 (14%)</p>
                        <p><span className="font-semibold">Kategori risiko:</span> Rendah - tidak perlu panik namun tetap jaga protokol kesehatan</p>
                        <p><span className="font-semibold">H3N2 Subclade K:</span> Dominasi Jawa Timur (37.1%), Kalimantan Selatan (29%), Jawa Barat (16.1%)</p>
                        <p><span className="font-semibold">Deteksi pertama:</span> M36 (Jawa Tengah), Terakhir: M48 (Jawa Barat). Mayoritas perempuan (64.5%)</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Perawatan Primer Section ──────────────────────────────– */}
              {activeSection === 'perawatan-primer' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1a3535]">Pengawasan Perawatan Primer</h2>
                  
                  <div className="space-y-6">
                    {/* Surveilans Puskesmas */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-[#1a3535] text-base">Surveilans Puskesmas</h3>
                      
                      <ul className="space-y-3 text-[13px] text-[#4a7a7a] list-disc list-inside">
                        <li>Proporsi kasus ILI mengalami penurunan menjadi 0.11% dari total kunjungan 40869 di minggu ke-52 dibandingkan 0.14% dari 47973 total kunjungan di minggu sebelumnya.</li>
                        <li>Tingkat Aktivitas Influenza : tingkat aktivitas influenza masih berada dalam kategori rendah, namun berada dalam situasi influenza masih terkendali dan aman.</li>
                        <li>Kasus ILI berdasarkan kelompok umur: kasus ILI di minggu ke 52 paling banyak usia 1-4 tahun 47% dari total kasus ILI.</li>
                      </ul>

                      <div className="mt-4">
                        <p className="text-[13px] text-[#4a7a7a] font-semibold mb-3">Grafik 19. Pandemic Influenza Severity Assessment (PISA) dari kasus yang berkunjung ke Puskesmas</p>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik22.png" alt="PISA assessment puskesmas" width={800} height={400} className="w-full h-auto" />
                        </div>
                      </div>

                      <div className="bg-white border border-[#e0e0e0] rounded-lg p-4 space-y-3 text-[13px]">
                        <p><span className="font-semibold">Nota:</span></p>
                        <ul className="space-y-2 list-disc list-inside text-[#4a7a7a]">
                          <li>Data ini dikumpulkan dari 39 Puskesmas dan 14 BKK di Indonesia. Penting untuk diketahui bahwa data yang kami sajikan ini masih bersifat sementara dan bisa berubah sesuai pembaharuan dari pusat.</li>
                          <li>Terjadi anomali pada bulan Juni-Juli pada jumlah spesimen yang diperiksa. Jumlah terlihat tinggi dikarenakan spesimen berasal dari debarkasi Haji.</li>
                          <li>Di Minggu ke-52 diperiksa 59 spesimen, dengan hasil 3 spesimen positif Influenza A (H1N1pdm09) 5%, 24 spesimen positif Influenza A (H3) 41%, 7 spesimen positif COVID-19 12%</li>
                        </ul>
                      </div>

                      <div className="mt-4">
                        <p className="text-[13px] text-[#4a7a7a] font-semibold mb-3">Grafik 20. Spesimen ILI Diperiksa</p>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik20.png" alt="Spesimen ILI diperiksa" width={800} height={400} className="w-full h-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Perawatan Sekunder Section ────────────────────────────– */}
              {activeSection === 'perawatan-sekunder' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1a3535]">Pengawasan Perawatan Sekunder (Rawat Inap)</h2>
                  
                  <div className="space-y-8">
                    {/* COVID-19 Hospitalization */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-[#1a3535] text-lg">Perawatan COVID-19 di Rumah Sakit</h3>
                      <p className="text-[13px] text-[#4a7a7a]">Data dari 35 rumah sakit sentinel SARI di Indonesia. Penting diketahui bahwa data masih bersifat sementara dan bisa berubah di kemudian hari.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-lg p-4">
                          <div className="space-y-3 text-[13px]">
                            <p><span className="text-[#4a7a7a]">Proporsi kasus:</span> <span className="font-bold text-[#0f8f96]">3%</span></p>
                            <p><span className="text-[#4a7a7a]">Kasus positif minggu 52:</span> <span className="font-bold text-[#0f8f96]">1 dari 38 spesimen</span></p>
                            <p><span className="text-[#4a7a7a]">Usia terbanyak:</span> <span className="font-bold text-[#0f8f96]">≥ 60 tahun</span></p>
                            <p><span className="text-[#4a7a7a]">Kasus ICU minggu 52:</span> <span className="font-bold text-[#0f8f96]">Tidak ada</span></p>
                          </div>
                        </div>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik24.png" alt="Proporsi COVID-19 RS" width={600} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 24. Proporsi Kasus COVID-19 Mingguan di RS</p>
                        </div>
                      </div>

                      <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                        <Image src="/grafik25.png" alt="Tren COVID-19 berdasarkan usia" width={800} height={400} className="w-full h-auto" />
                        <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 25. Tren Jumlah Kasus COVID-19 yang Dirawat RS Berdasarkan Kelompok Umur</p>
                      </div>
                    </div>

                    {/* Influenza Hospitalization */}
                    <div className="space-y-4 pt-4 border-t border-[#e0e0e0]">
                      <h3 className="font-bold text-[#1a3535] text-lg">Perawatan Influenza di Rumah Sakit</h3>
                      <p className="text-[13px] text-[#4a7a7a]">Proporsi kasus influenza yang dirawat di rumah sakit sentinel meningkat, menjadi 16% dari 13% di minggu sebelumnya. Tingkat aktivitas influenza dalam kategori rendah namun sesuai dengan pola musiman.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-lg p-4">
                          <div className="space-y-3 text-[13px]">
                            <p><span className="text-[#4a7a7a]">Proporsi kasus:</span> <span className="font-bold text-[#0f8f96]">16%</span></p>
                            <p><span className="text-[#4a7a7a]">Kasus positif minggu 52:</span> <span className="font-bold text-[#0f8f96]">6 dari 38 spesimen</span></p>
                            <p><span className="text-[#4a7a7a]">Subtipe:</span> <span className="font-bold text-[#0f8f96]">1 H1N1, 4 H3, 1 B</span></p>
                            <p><span className="text-[#4a7a7a]">Usia terbanyak:</span> <span className="font-bold text-[#0f8f96]">18-59 tahun</span></p>
                          </div>
                        </div>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik30.png" alt="Tren influenza RS berdasarkan usia" width={600} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 30. Tren Kasus Influenza RS Berdasarkan Usia</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik28.png" alt="PISA influenza RS" width={600} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 28. PISA dari Kasus Influenza RS</p>
                        </div>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik32.png" alt="Kasus influenza ICU" width={600} height={400} className="w-full h-auto" />
                          <p className="text-center text-[11px] text-[#9dbfc0] p-2">Grafik 32. Kasus Influenza Membutuhkan ICU</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Vaksin Section ────────────────────────────────────────– */}
              {activeSection === 'vaksin' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1a3535]">Cakupan Vaksinasi</h2>
                  
                  <div className="bg-white border border-[#e0e0e0] rounded-lg p-6">
                    <h3 className="font-bold text-[#1a3535] mb-3">Cakupan Vaksinasi COVID-19</h3>
                    <p className="text-[13px] text-[#4a7a7a] mb-4">Data per 14 Oktober 2024. Vaksinasi COVID-19 adalah program Imunisasi sesuai Kepmenkes.</p>
                    <button className="px-4 py-2 bg-[#0f8f96] text-white font-semibold text-[12px] rounded-lg hover:bg-[#0c7a80] transition-all">
                      Akses Dashboard Vaksinasi
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-[#1a3535]">Penyakit Infeksi Emerging Pernafasan</h3>
                    
                    <div className="bg-white border border-[#e0e0e0] rounded-lg p-6">
                      <h4 className="font-bold text-[#1a3535] mb-3">Situasi Suspek MERS</h4>
                      <p className="text-[13px] text-[#4a7a7a] mb-2">Tidak ada tambahan kasus konfirmasi minggu ini.</p>
                      <p className="text-[13px] text-[#4a7a7a]">Ada penambahan 1 suspek di Kota Depok (Sedang diperiksa).</p>
                    </div>

                    <div className="bg-white border border-[#e0e0e0] rounded-lg p-6">
                      <h4 className="font-bold text-[#1a3535] mb-3">Situasi Legionellosis</h4>
                      <p className="text-[13px] text-[#4a7a7a] mb-2">Tidak ada penambahan konfirmasi minggu ini.</p>
                      <p className="text-[13px] text-[#4a7a7a]">Total konfirmasi (Tahun 2023-2025): <span className="font-semibold">68 konfirmasi</span> di 4 Provinsi, 4 meninggal.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="w-full bg-white border-t border-[#cfeeed] py-6 sm:py-8 mt-12">
        <div className="px-4 sm:px-5 lg:px-6">
          <div className="max-w-6xl mx-auto text-center space-y-2">
            <p className="text-[11px] sm:text-[12px] text-[#0f8f96] font-semibold">
              Copyright © 2025 Direktoral Surveillans dan Karantina Kesehatan
            </p>
            <p className="text-[11px] sm:text-[12px] text-[#4a7a7a]">
              Metodologi dan Sumber Data: Data berasal dari SKDR, NAR TC-19, Satu Sehat, Dashboard Vaksinasi COVID-19, dan Dashboard Surveilans ILI-SARI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
