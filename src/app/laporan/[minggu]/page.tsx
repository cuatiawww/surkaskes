'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Printer, Activity, Thermometer, AlertCircle, BarChart3, Home, User, Phone, LogIn, BookOpen, Info, Mail, FlaskConical } from 'lucide-react'
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

  const laporanData = {
    minggu_ke: 51,
    tanggal: '20 Dec 2025',
    tahun: 2025,
    updated_at: '20 Dec 2025',
  }

  const sidebarMenu = [
    { id: 'poin-utama', label: 'Poin utama', icon: Activity },
    { id: 'ringkasan-kasus', label: 'Laporan Pengawasan Kasus Influenza dan COVID-19', icon: FlaskConical },
    { id: 'lab-surveillance', label: 'Surveilans Laboratorium', icon: Thermometer },
    { id: 'perawatan-primer', label: 'Pengawasan Perawatan Primer', icon: Home },
    { id: 'perawatan-sekunder', label: 'Pengawasan perawatan Sekunder', icon: AlertCircle },
    { id: 'vaksin', label: 'Cakupan Vaksin', icon: BarChart3 },
    { id: 'metodologi', label: 'Metodologi dan Sumber Data', icon: BookOpen },
    { id: 'latar-belakang', label: 'Informasi dan Latar Belakang', icon: Info },
    { id: 'kontak', label: 'Kontak & Informasi Lebih Lanjut', icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-[#fbffff] text-slate-800">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#d5eceb] shadow-[0_2px_8px_rgba(15,143,150,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
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

      {/* ── Breadcrumb ── */}
      <div className="px-4 sm:px-5 lg:px-6 py-4 border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[12px] text-[#0f8f96]">
          <Link href="/" className="hover:underline">Beranda</Link>
          <ChevronRight className="h-4 w-4" />
          <span>Laporan Surveilans Nasional: Tahun {laporanData.tahun}</span>
          <ChevronRight className="h-4 w-4" />
          <span>Ringkasan Kasus</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold">Minggu ke {laporanData.minggu_ke}</span>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="px-4 sm:px-5 lg:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* ── Header ── */}
            <div className="lg:col-span-4 mb-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0f8f96] mb-1">Statistik Resmi</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3535] mb-2">
                Laporan Pengawasan Kasus Influenza dan COVID-19 : {laporanData.tanggal} (Minggu ke {laporanData.minggu_ke})
              </h1>
              <p className="text-[13px] text-[#4a7a7a]">
                Diperbaharui {laporanData.updated_at}
              </p>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-[#e0e0e0] p-4 sticky top-24">
                <p className="text-[11px] font-bold uppercase text-[#4a7a7a] mb-1">Contents</p>
                <nav className="space-y-0.5 mb-4">
                  {sidebarMenu.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-start gap-2 px-2 py-2 text-[12px] rounded transition-all text-left ${
                        activeSection === item.id
                          ? 'bg-[#e8faf8] text-[#0f8f96] font-semibold border-l-2 border-[#0f8f96]'
                          : 'text-[#2563a4] hover:bg-[#f5f5f5] hover:text-[#0f8f96]'
                      }`}
                    >
                      <span className="flex-shrink-0 mt-0.5 text-[#0f8f96]">{idx + 1}.</span>
                      <span className="leading-snug">{item.label}</span>
                    </button>
                  ))}
                </nav>
                <div className="border-t border-[#e0e0e0] pt-4">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[12px] font-semibold text-white bg-[#0f8f96] rounded-lg hover:bg-[#0d7a81] transition-all shadow-[0_2px_8px_rgba(15,143,150,0.2)]">
                    <Printer className="h-4 w-4" />
                    Cetak Laporan
                  </button>
                </div>
              </div>
            </div>

            {/* ── Content Area ── */}
            <div className="lg:col-span-3 space-y-8">

              {/* ── 1. Poin Utama ── */}
              {activeSection === 'poin-utama' && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#1a3535] border-b border-[#e0e0e0] pb-2">Poin utama</h2>
                  <ul className="space-y-3 text-[13px] text-[#3f5a5a] leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>Influenza dan COVID-19 dipantau rutin melalui sentinel-sentinel fasilitas pelayanan kesehatan di 35 Provinsi, 35 Rumah Sakit, 14 Balai Karantina Kesehatan (pintu masuk negara). Pemantauan ini dilakukan untuk monitoring kasus dan karakteristik virus serta gejala keparahan.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>Per Minggu ke-51 (14–20 Desember 2025), dari 195 pemeriksaan, terdapat 18 kasus positif (5 sentinel SARI, 3 Sentinel ILI, 10 non sentinel) dengan positivity rate sebesar 9.23%.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>Varian dominan di Indonesia adalah XFG (57%), LF.7 (29%), XFG 3.4.3 (14%) di bulan Agustus.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>Varian dominan COVID-19 yang ada di Indonesia saat ini termasuk dalam kategori varian dengan risiko rendah, sehingga tidak perlu panik, namun tetap penting menjaga protokol kesehatan.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>Tingkat Aktivitas Influenza Rendah: tingkat aktivitas influenza secara keseluruhan masih berada dalam kategori rendah, artinya situasi influenza masih terkendali dan aman.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>Data hingga 21-Desember-2025 menunjukkan bahwa proporsi influenza pada minggu ke-50 meningkat menjadi 17% dari 17% di minggu sebelumnya. Dari kasus influenza yang terdeteksi 43% terjadi pada kelompok usia &ge;60 tahun.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* ── 2. Laporan Pengawasan Kasus Influenza dan COVID-19 ── */}
              {activeSection === 'ringkasan-kasus' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1a3535] border-b border-[#e0e0e0] pb-2">Laporan Pengawasan Kasus Influenza dan COVID-19</h2>

                  {/* Tabs */}
                  <div className="flex gap-2 border-b border-[#e0e0e0] overflow-x-auto">
                    {[
                      { id: 'influenza', label: 'Influenza Activity' },
                      { id: 'covid19', label: 'COVID-19 Activity' },
                      { id: 'rsv', label: 'RSV Activity' },
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

                  {/* Influenza Activity */}
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
                            {[
                              { indikator: 'Kasus ILI dari total kunjungan Puskesmas Sentinel', tren: 'Menurun', level: 'Aktivitas influenza rendah', keterangan: 'Proporsi kasus ILI mengalami penurunan menjadi 000% dari total kunjungan 48837 di minggu ke-50 dibandingkan 000% dari 49744 total kunjungan di minggu sebelumnya.' },
                              { indikator: 'Kasus SARI dari Total rawat inap rumah sakit Sentinel', tren: 'Meningkat', level: 'Aktivitas influenza rendah', keterangan: 'Proporsi kasus influenza yang dirawat di rumah sakit sentinel meningkat, menjadi 16% dari 15% di minggu sebelumnya.' },
                              { indikator: 'Positivity rate influenza', tren: 'Stabil', level: 'Aktivitas influenza rendah', keterangan: 'Proporsi positif influenza pada minggu ke-50 sebesar 17%, sama dengan minggu sebelumnya.' },
                            ].map((row, idx) => (
                              <tr key={idx} className="border-b border-[#e0e0e0] hover:bg-[#fbffff] transition-colors">
                                <td className="px-4 py-3 text-[12px] text-[#3f5a5a] font-semibold">{row.indikator}</td>
                                <td className="px-4 py-3 text-[12px]">
                                  <span className={`inline-block px-2 py-1 rounded text-[11px] font-semibold ${
                                    row.tren === 'Menurun' ? 'bg-[#d4f1ed] text-[#0f8f96]' :
                                    row.tren === 'Meningkat' ? 'bg-[#ffe8d6] text-[#d97706]' :
                                    'bg-[#f0f0f0] text-[#666]'
                                  }`}>{row.tren}</span>
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

                  {/* COVID-19 Activity */}
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
                            {[
                              { indikator: 'Positivity rate COVID-19', tren: 'Meningkat', level: 'Risiko rendah', keterangan: 'Per M51 (14–20 Desember), dari 195 pemeriksaan, terdapat 18 kasus positif dengan positivity rate 9.23%.' },
                            ].map((row, idx) => (
                              <tr key={idx} className="border-b border-[#e0e0e0] hover:bg-[#fbffff] transition-colors">
                                <td className="px-4 py-3 text-[12px] text-[#3f5a5a] font-semibold">{row.indikator}</td>
                                <td className="px-4 py-3 text-[12px]">
                                  <span className={`inline-block px-2 py-1 rounded text-[11px] font-semibold ${
                                    row.tren === 'Menurun' ? 'bg-[#d4f1ed] text-[#0f8f96]' : 'bg-[#ffe8d6] text-[#d97706]'
                                  }`}>{row.tren}</span>
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

                  {/* RSV Activity */}
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
                            {[
                              { indikator: 'Jumlah kasus RSV', tren: 'Menurun', level: 'Terkendali', keterangan: 'Proporsi RSV Menurun menjadi 11% dari 19% di minggu sebelumnya.' },
                            ].map((row, idx) => (
                              <tr key={idx} className="border-b border-[#e0e0e0] hover:bg-[#fbffff] transition-colors">
                                <td className="px-4 py-3 text-[12px] text-[#3f5a5a] font-semibold">{row.indikator}</td>
                                <td className="px-4 py-3 text-[12px]">
                                  <span className="inline-block px-2 py-1 rounded text-[11px] font-semibold bg-[#d4f1ed] text-[#0f8f96]">{row.tren}</span>
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
                </div>
              )}

              {/* ── 3. Surveilans Laboratorium ── */}
              {activeSection === 'lab-surveillance' && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-[#1a3535] border-b border-[#e0e0e0] pb-2">Surveilans Laboratorium</h2>

                  {/* Kasus COVID-19 */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-[#1a3535]">Kasus COVID-19</h3>
                    <h4 className="text-[13px] font-bold text-[#3f5a5a]">Grafik 1. Tren mingguan konfirmasi COVID-19</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik1.png" alt="Tren mingguan COVID-19" width={800} height={400} className="w-full h-auto" />
                    </div>
                    <h4 className="text-[13px] font-bold text-[#3f5a5a]">Grafik 2. Tren mingguan Positivity rate COVID-19</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik2.png" alt="Positivity rate COVID-19" width={800} height={400} className="w-full h-auto" />
                    </div>
                    <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed mt-2">
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Per M51 (14–20 Desember), dari 195 pemeriksaan, terdapat 18 kasus positif (5 sentinel SARI, 3 Sentinel ILI 10 non sentinel) dengan positivity rate sebesar 9.23%.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Kasus positif kumulatif tahun 2025 terbanyak dilaporkan di DKI Jakarta, Jawa Timur, Banten, Jawa Barat, Sumatera Selatan, dan DI Yogyakarta.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Total kasus COVID-19 dari M1-M51 tahun 2025 sebanyak 634 kasus dari total 19.744 spesimen diperiksa (positivity rate 3.19%).</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Jumlah kasus COVID-19 pada sentinel site hingga M25 berjumlah 82 kasus dari 2.613 spesimen diperiksa.</span></li>
                    </ul>
                  </div>

                  {/* Kasus Influenza */}
                  <div className="space-y-3 pt-4 border-t border-[#e0e0e0]">
                    <h3 className="text-lg font-bold text-[#1a3535]">Kasus Influenza</h3>
                    <p className="text-[13px] text-[#4a7a7a]">Data hingga 21-Desember-2025 menunjukkan bahwa proporsi influenza pada minggu ke-50 meningkat menjadi 17% dari 17% di minggu sebelumnya. Dari kasus influenza yang terdeteksi 43% terjadi pada kelompok usia &ge;60 tahun.</p>
                    <h4 className="text-[13px] font-bold text-[#3f5a5a]">Grafik 4. Proporsi Kasus Influenza Mingguan dari Semua Spesimen diperiksa</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                        <Image src="/grafik4.png" alt="Proporsi influenza mingguan" width={600} height={400} className="w-full h-auto" />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-[#3f5a5a] mb-2">Grafik 5. Tren Jumlah Kasus Influenza Mingguan Berdasarkan Kelompok Umur</h4>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik5.png" alt="Tren influenza berdasarkan usia" width={600} height={400} className="w-full h-auto" />
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed mt-2">
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Data ini dikumpulkan dari 13 B/BLKM, 9 RS, dan Lab. Biologi Kesehatan. Data pada beberapa minggu terakhir masih bersifat sementara, dan dapat berubah.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Pada minggu ke-50 dari total 84 spesimen yang diperiksa, terdeteksi 14 kasus positif influenza, terdiri atas 7 positif A (H3N2), 4 positif A (H1N1Pdm09), 2 positif B (Victoria), 1 positif A (Not Subtype).</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Positif influenza meningkat menjadi 17% dari 17% di minggu sebelumnya.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Proporsi kasus positif pemeriksaan multipatogen terdiri atas 11% RSV, 16% HMPV, 16% Rhinovirus (HRV), 5% Adenovirus (AdV), 5% (PIV 1), berdasarkan hasil pemeriksaan pada minggu ke-50.</span></li>
                    </ul>
                  </div>

                  {/* Multipatogen */}
                  <div className="space-y-3 pt-4 border-t border-[#e0e0e0]">
                    <h4 className="text-[13px] font-bold text-[#3f5a5a]">Grafik 6a. Proporsi Positif influenza, SARS-Cov-2, RSV dan Rhinovirus</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                        <Image src="/grafik6.png" alt="Proporsi multipatogen A" width={600} height={400} className="w-full h-auto" />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-[#3f5a5a] mb-2">Grafik 6b. RSV dan Rhinovirus dan Parainfluenza Virus, dan Adenovirus</h4>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik6b.png" alt="Proporsi multipatogen B" width={600} height={400} className="w-full h-auto" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtipe & Varian */}
                  <div className="space-y-3 pt-4 border-t border-[#e0e0e0]">
                    <h4 className="text-[13px] font-bold text-[#3f5a5a]">Grafik 7. Subtype Influenza Mingguan dari Semua Spesimen diperiksa</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                        <Image src="/grafik7.png" alt="Subtype influenza mingguan" width={600} height={400} className="w-full h-auto" />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-[#3f5a5a] mb-2">Grafik 7. Proporsi Subtype Influenza</h4>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik7b.png" alt="Proporsi subtype influenza" width={600} height={400} className="w-full h-auto" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#1a3535] mt-4">Varian COVID-19</h3>
                    <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed">
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Varian dominan di Indonesia adalah XFG (57%), LF.7 (29%), XFG 3.4.3 (14%) di bulan Agustus.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Varian dominan COVID-19 yang ada di Indonesia saat ini termasuk dalam kategori varian dengan risiko rendah, sehingga tidak perlu panik, namun tetap penting menjaga protokol kesehatan.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>XFG menjadi variant nomor 1 dalam hal Spread dimana per 13 Juni sudah terdeteksi di 130 negara (paling banyak dari Eropa dan Asia) per Juni 2025.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Dominansi turunan dari LF.7.9 terjadi secara global di 41 negara utamanya regional Amerika dan Asia.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Subvarian LF.7.9.1 dan LP.7, secara umum memiliki karakteristik yang sama dengan JN.1.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>JN.1 masih menjadi Variants of Interest (VoI) sejak ditetapkan pada Desember 2023.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Berdasarkan penilaian risiko, JN.1 merupakan varian yang berisiko rendah (low) di tingkat global.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Tidak ada indikasi subvarian ini lebih menular atau menyebabkan keparahan dibandingkan subvarian sebelumnya, namun perlu kewaspadaan bagi para lansia dan/atau orang yang memiliki komorbid.</span></li>
                    </ul>
                  </div>
                </div>
              )}

              {/* ── 4. Pengawasan Perawatan Primer ── */}
              {activeSection === 'perawatan-primer' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1a3535] border-b border-[#e0e0e0] pb-2">Pengawasan Perawatan Primer</h2>

                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-[#1a3535]">Surveilans Puskesmas</h3>
                    <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed">
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Proporsi kasus ILI mengalami penurunan menjadi 000% dari total kunjungan 48837 di minggu ke-50 dibandingkan 000% dari 49744 total kunjungan di minggu sebelumnya.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Tingkat Aktivitas Influenza: tingkat aktivitas influenza secara keseluruhan masih berada dalam kategori rendah, artinya situasi influenza masih terkendali dan aman.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Kasus ILI berdasarkan kelompok umur: kasus ILI di minggu ke-50 paling tinggi pada kelompok umur 1-4 Tahun 37% dari total kasus ILI.</span></li>
                    </ul>

                    <h4 className="text-[13px] font-bold text-[#3f5a5a] mt-4">Grafik 19. Pandemic Influenza Severity Assessment (PISA) dari kasus yang berkunjung ke Puskesmas</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik22.png" alt="PISA assessment puskesmas" width={800} height={400} className="w-full h-auto" />
                    </div>

                    <p className="text-[12px] text-[#4a7a7a] font-semibold mt-2">Note:</p>
                    <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed">
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Data ini dikumpulkan dari 39 Puskesmas dan 14 BKK di Indonesia. Penting untuk diketahui bahwa data yang kami sajikan ini masih bersifat sementara dan bisa berubah di kemudian hari.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Terjadi anomali pada bulan Juni-Juli pada jumlah spesimen yang diperiksa. Jumlah terlihat tinggi dikarenakan spesimen berasal dari debarkasi Haji.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Di Minggu ke-46 di periksa 59 spesimen, dengan hasil 3 spesimen positif Influenza A (H1N1pdm09) 5%, 24 spesimen positif Influenza A (H3) 41%, 7 spesimen positif COVID-19 12%.</span></li>
                    </ul>

                    <h4 className="text-[13px] font-bold text-[#3f5a5a] mt-4">Grafik 20. Spesimen ILI Diperiksa</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik20.png" alt="Spesimen ILI diperiksa" width={800} height={400} className="w-full h-auto" />
                    </div>

                    <h4 className="text-[13px] font-bold text-[#3f5a5a] mt-4">Grafik 21. Proporsi Positif hasil pemeriksaan spesimen ILI</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik21.png" alt="Proporsi positif ILI" width={800} height={400} className="w-full h-auto" />
                    </div>

                    <h4 className="text-[13px] font-bold text-[#3f5a5a] mt-2">Grafik 22. proporsi positif pemeriksaan spesimen ILI tahun 2025 week 1-50 berdasarkan kelompok umur.</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik22b.png" alt="Proporsi positif ILI per usia" width={800} height={400} className="w-full h-auto" />
                    </div>

                    <h4 className="text-[13px] font-bold text-[#3f5a5a] mt-2">Grafik 22. proporsi positif influenza dan SARS-Cov-2 dari sentinel ILI</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik22c.png" alt="Proporsi positif ILI sentinel" width={800} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              )}

              {/* ── 5. Pengawasan Perawatan Sekunder ── */}
              {activeSection === 'perawatan-sekunder' && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-[#1a3535] border-b border-[#e0e0e0] pb-2">Pengawasan perawatan Sekunder</h2>

                  {/* COVID-19 RS */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-[#1a3535]">Perawatan COVID-19 di Rumah Sakit</h3>
                    <p className="text-[13px] text-[#4a7a7a]">Data ini dikumpulkan dari 35 rumah sakit sentinel Surveilans SARI di Indonesia. Penting untuk diketahui bahwa data yang kami sajikan ini masih bersifat sementara dan bisa berubah di kemudian hari.</p>
                    <p className="text-[13px] text-[#4a7a7a]">Berdasarkan data dari 35 rumah sakit sentinel SARI, berikut adalah ringkasan mengenai jumlah kasus COVID-19 yang didapatkan dari rumah sakit sentinel pada minggu 50 tahun 2025:</p>
                    <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed">
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Proporsi kasus COVID-19 di rumah sakit sentinel, sama dengan minggu sebelumnya (9%). Ditemukan 4 kasus positif COVID-19 dari 44 spesimen diperiksa di rumah sakit sentinel pada minggu ini.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Kelompok usia (18-59 tahun) paling banyak ditemukan pada minggu ini.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Secara umum, jumlah kasus COVID-19 ke ICU cenderung stabil di tahun 2025. Pada minggu 50, tidak ditemukan kasus COVID-19 yang dirawat ICU.</span></li>
                    </ul>

                    <h4 className="text-[13px] font-bold text-[#3f5a5a] mt-3">Grafik 24. Proporsi Kasus COVID-19 Mingguan dari Kasus yang dirawat di RS</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik24.png" alt="Proporsi COVID-19 RS" width={800} height={400} className="w-full h-auto" />
                    </div>

                    <h4 className="text-[13px] font-bold text-[#3f5a5a] mt-3">Grafik 25. Tren Jumlah Kasus COVID-19 yang dirawat di RS Berdasarkan Kelompok Umur</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik25.png" alt="Tren COVID-19 RS per usia" width={800} height={400} className="w-full h-auto" />
                    </div>

                    <h3 className="text-base font-bold text-[#1a3535] mt-2">Perawatan ICU COVID-19 di Rumah Sakit</h3>
                    <h4 className="text-[13px] font-bold text-[#3f5a5a]">Grafik 25. Tren Jumlah Kasus COVID-19 yang membutuhkan Perawatan ICU Berdasarkan Kelompok Umur</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik25b.png" alt="ICU COVID-19 per usia" width={800} height={400} className="w-full h-auto" />
                    </div>
                  </div>

                  {/* Influenza RS */}
                  <div className="space-y-3 pt-4 border-t border-[#e0e0e0]">
                    <h3 className="text-lg font-bold text-[#1a3535]">Perawatan Influenza di Rumah Sakit</h3>
                    <p className="text-[13px] text-[#4a7a7a]">Berdasarkan data yang terkumpul dari 35 rumah sakit sentinel Surveilans SARI di Indonesia pada minggu 50 tahun 2025, berikut adalah ringkasan mengenai kasus influenza yang dirawat:</p>
                    <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed">
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Proporsi Kasus Influenza: Proporsi kasus influenza yang dirawat di rumah sakit sentinel meningkat, menjadi 16% dari 15% di minggu sebelumnya.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Tingkat Aktivitas Influenza Rendah: Adanya penurunan proporsi kasus influenza di minggu ini dan tingkat aktivitas influenza dalam kategori aktivitas rendah dan masih sesuai dengan pola musiman influenza di Indonesia.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Kasus Baru Berdasarkan Usia: pada minggu ini kasus influenza paling banyak ditemukan pada usia &ge;60 tahun.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Pada minggu ke-50 dari total 44 spesimen yang diperiksa, terdeteksi 7 kasus positif influenza, terdiri atas; 1 positif A (H1N1pdm09), 5 positif A (H3), 1 positif B (Victoria).</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Pada kasus ICU yang dirawat, teridentifikasi kasus positif influenza, terdiri dari; 1 positif A (H3), 1 positif B (Not Determined).</span></li>
                    </ul>

                    <h4 className="text-[13px] font-bold text-[#3f5a5a] mt-3">Grafik 28. Pandemic Influenza Severity Assessment (PISA) dari Kasus Influenza yang dirawat di RS</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                        <Image src="/grafik28.png" alt="PISA influenza RS" width={600} height={400} className="w-full h-auto" />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-[#3f5a5a] mb-2">Grafik 29. Jumlah Kasus Influenza yang dirawat di RS berdasarkan Sub tipe Influenza</h4>
                        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                          <Image src="/grafik29.png" alt="Kasus influenza RS per subtipe" width={600} height={400} className="w-full h-auto" />
                        </div>
                      </div>
                    </div>

                    <h4 className="text-[13px] font-bold text-[#3f5a5a] mt-3">Grafik 30. Tren Jumlah Kasus Influenza yang dirawat di RS Berdasarkan Kelompok Umur</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik30.png" alt="Tren influenza RS per usia" width={800} height={400} className="w-full h-auto" />
                    </div>

                    <h3 className="text-base font-bold text-[#1a3535] mt-4">Perawatan Influenza ICU</h3>
                    <h4 className="text-[13px] font-bold text-[#3f5a5a]">Grafik 32. Jumlah Kasus Influenza yang membutuhkan perawatan ICU berdasarkan Sub tipe Influenza</h4>
                    <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
                      <Image src="/grafik32.png" alt="ICU influenza per subtipe" width={800} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              )}

              {/* ── 6. Cakupan Vaksin ── */}
              {activeSection === 'vaksin' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1a3535] border-b border-[#e0e0e0] pb-2">Cakupan Vaksin</h2>

                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-[#1a3535]">Cakupan Vaksinasi COVID-19</h3>
                    <p className="text-[13px] text-[#3f5a5a]">Vaksinasi Covid-19 sudah dilaksanakan sejak tahun 2021, Tahun 2024 menjadi imunisasi Covid-19 Program sesuai dengan Keputusan Menteri Kesehatan.</p>
                    <p className="text-[13px] text-[#3f5a5a]">Data per (14 Oktober 2024)</p>
                    <p className="text-[13px] text-[#3f5a5a]">Informasi lebih lanjut dapat diakses melalui link berikut:</p>
                    <a
                      href="https://satusehat.kemkes.go.id/dashboard/dasbor-vaksinasi-covid-19-overview.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[12px] font-semibold text-[#0f8f96] underline hover:text-[#0c7a80]"
                    >
                      Link Dashboard Vaksinasi COVID-19
                    </a>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[#e0e0e0]">
                    <h3 className="text-base font-bold text-[#1a3535]">Penyakit infeksi emerging pernafasan akut berat</h3>

                    <h4 className="text-[13px] font-bold text-[#1a3535]">SITUASI SUSPEK MERS INDONESIA</h4>
                    <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed">
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Terdapat penambahan 3 suspek, yaitu +3 di Kota Jambi, Jambi; Sumbawa, NTB; dan Pemalang, Jawa Tengah. Hasil pemeriksaan seluruhnya negatif.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Belum ada konfirmasi MERS di Indonesia.</span></li>
                    </ul>

                    <h4 className="text-[13px] font-bold text-[#1a3535] mt-4">SITUASI LEGIONELLOSIS INDONESIA</h4>
                    <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed">
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Penambahan M50: +3 konfirmasi Legionellosis di Kota Batam, Kepulauan Riau.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Terdapat penambahan 7 suspek, yaitu +6 di Kota Batam, Kepulauan Riau (negatif), dan +1 di Kota Jakarta Utara, DKI Jakarta (negatif).</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Tahun 2023-2025 (M50): 68 konfirmasi di 4 provinsi.</span></li>
                      <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Terdapat 4 kasus meninggal (2 Kep. Riau, 1 Bali, dan 1 Jawa Barat).</span></li>
                    </ul>
                  </div>
                </div>
              )}

              {/* ── 7. Metodologi dan Sumber Data ── */}
              {activeSection === 'metodologi' && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#1a3535] border-b border-[#e0e0e0] pb-2">Metodologi dan Sumber Data</h2>
                  <p className="text-[13px] text-[#3f5a5a] leading-relaxed">
                    Data Sistem Kewaspadaan Dini dan Respon (SKDR); New All Record TC-19 (NAR TC-19); Satu Sehat, dashboard vaksinasi Covid-19; Dasboard Surveilans ILI-SARI.
                  </p>
                </div>
              )}

              {/* ── 8. Informasi dan Latar Belakang ── */}
              {activeSection === 'latar-belakang' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#1a3535] border-b border-[#e0e0e0] pb-2">Informasi dan Latar Belakang</h2>
                  <div className="space-y-3">
                    <p className="text-[13px] text-[#3f5a5a] leading-relaxed">
                      Penyakit Influenza biasanya dipengaruhi oleh faktor cuaca, pengingkatan kasus Influenza berpotensi terjadi pada musim penghujan.
                    </p>
                    <p className="text-[13px] text-[#3f5a5a] leading-relaxed">
                      Kasus konfirmasi COVID-19 belum bisa dikatakan menurun. Meskipun kenaikan dan penurunannya tidak terlalu signifikan, kondisi ini tetap perlu diwaspadai agar tidak menimbulkan keresahan di masyarakat.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#e0e0e0]">
                    <h3 className="text-base font-bold text-[#1a3535]">Himbauan Bagi Masyarakat Indonesia</h3>
                    <p className="text-[13px] text-[#3f5a5a]">Meningkatkan promosi kesehatan kewaspadaan COVID-19 di masyarakat dan pelaku perjalanan, sebagai berikut:</p>
                    <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed">
                      <li className="flex gap-3">
                        <span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span>
                        <span>Menerapkan Perilaku Hidup Bersih Sehat (PHBS). <a href="https://ayosehat.kemkes.go.id/phbs" target="_blank" rel="noopener noreferrer" className="text-[#0f8f96] underline">Klik disini</a></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span>
                        <span>Menerapkan etika batuk/bersin untuk menghindari penularan kepada orang lain. <a href="https://ayosehat.kemkes.go.id/jangan-asal-bersin-dan-batuk-kenali-etika-bersin-dan-batuk-agar-tidak-menularkan-penyaki" target="_blank" rel="noopener noreferrer" className="text-[#0f8f96] underline">Klik disini</a></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span>
                        <span>Cuci tangan dengan air mengalir dan menggunakan sabun (CTPS) atau menggunakan hand sanitizer.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* ── 9. Kontak & Informasi Lebih Lanjut ── */}
              {activeSection === 'kontak' && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#1a3535] border-b border-[#e0e0e0] pb-2">Kontak & Informasi Lebih Lanjut</h2>
                  <p className="text-[13px] text-[#3f5a5a] leading-relaxed">
                    Untuk informasi lebih lanjut, silakan hubungi Direktorat Surveilans dan Karantina Kesehatan, Direktorat Jenderal Pencegahan dan Pengendalian Penyakit, Kementerian Kesehatan RI.
                  </p>
                  <ul className="space-y-2 text-[13px] text-[#3f5a5a] leading-relaxed">
                    <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Website: <a href="https://surkarkes.kemkes.go.id" target="_blank" rel="noopener noreferrer" className="text-[#0f8f96] underline">surkarkes.kemkes.go.id</a></span></li>
                    <li className="flex gap-3"><span className="text-[#0f8f96] font-bold flex-shrink-0 mt-0.5">•</span><span>Kementerian Kesehatan RI, Jl. H.R. Rasuna Said Blok X-5 Kav. 4-9, Jakarta Selatan.</span></li>
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
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
