'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Home, User, Phone, LogIn, Search } from 'lucide-react'
import { useState } from 'react'

const assets = {
  logo: '/Logo-Kemenkes.png',
  headerBackground: '/bg_skk.png',
}

export default function HomePage() {
  const navItems = [
    { label: 'BERANDA', icon: Home, href: '#' },
    { label: 'PROFIL', icon: User, href: '#' },
    { label: 'KONTAK', icon: Phone, href: '#' },
    { label: 'LOGIN', icon: LogIn, href: '#', isPrimary: true },
  ]

  // Matrix data
  const matrixData = [
    { no: 1, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 53 Tahun 2025", minggu_ke: 53, tahun: 2025, tanggal_publikasi: "2026-01-03" },
    { no: 2, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 52 Tahun 2025", minggu_ke: 52, tahun: 2025, tanggal_publikasi: "2025-12-27" },
    { no: 3, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 51 Tahun 2025", minggu_ke: 51, tahun: 2025, tanggal_publikasi: "2025-12-20" },
    { no: 4, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 50 Tahun 2025", minggu_ke: 50, tahun: 2025, tanggal_publikasi: "2025-12-13" },
    { no: 5, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 49 Tahun 2025", minggu_ke: 49, tahun: 2025, tanggal_publikasi: "2025-12-06" },
    { no: 6, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 48 Tahun 2025", minggu_ke: 48, tahun: 2025, tanggal_publikasi: "2025-11-29" },
    { no: 7, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 47 Tahun 2025", minggu_ke: 47, tahun: 2025, tanggal_publikasi: "2025-11-22" },
    { no: 8, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 46 Tahun 2025", minggu_ke: 46, tahun: 2025, tanggal_publikasi: "2025-11-15" },
    { no: 9, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 45 Tahun 2025", minggu_ke: 45, tahun: 2025, tanggal_publikasi: "2025-11-08" },
    { no: 10, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 44 Tahun 2025", minggu_ke: 44, tahun: 2025, tanggal_publikasi: "2025-11-01" },
    { no: 11, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 43 Tahun 2025", minggu_ke: 43, tahun: 2025, tanggal_publikasi: "2025-10-25" },
    { no: 12, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 42 Tahun 2025", minggu_ke: 42, tahun: 2025, tanggal_publikasi: "2025-10-18" },
    { no: 13, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 41 Tahun 2025", minggu_ke: 41, tahun: 2025, tanggal_publikasi: "2025-10-11" },
    { no: 14, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 40 Tahun 2025", minggu_ke: 40, tahun: 2025, tanggal_publikasi: "2025-10-04" },
    { no: 15, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 39 Tahun 2025", minggu_ke: 39, tahun: 2025, tanggal_publikasi: "2025-09-27" },
    { no: 16, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 38 Tahun 2025", minggu_ke: 38, tahun: 2025, tanggal_publikasi: "2025-09-20" },
    { no: 17, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 37 Tahun 2025", minggu_ke: 37, tahun: 2025, tanggal_publikasi: "2025-09-13" },
    { no: 18, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 36 Tahun 2025", minggu_ke: 36, tahun: 2025, tanggal_publikasi: "2025-09-06" },
    { no: 19, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 35 Tahun 2025", minggu_ke: 35, tahun: 2025, tanggal_publikasi: "2025-08-30" },
    { no: 20, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 34 Tahun 2025", minggu_ke: 34, tahun: 2025, tanggal_publikasi: "2025-08-23" },
    { no: 21, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 33 Tahun 2024", minggu_ke: 33, tahun: 2024, tanggal_publikasi: "2024-08-17" },
    { no: 22, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 32 Tahun 2024", minggu_ke: 32, tahun: 2024, tanggal_publikasi: "2024-08-10" },
    { no: 23, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 31 Tahun 2024", minggu_ke: 31, tahun: 2024, tanggal_publikasi: "2024-08-03" },
    { no: 24, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 30 Tahun 2024", minggu_ke: 30, tahun: 2024, tanggal_publikasi: "2024-07-27" },
    { no: 25, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 29 Tahun 2024", minggu_ke: 29, tahun: 2024, tanggal_publikasi: "2024-07-20" },
    { no: 26, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 28 Tahun 2024", minggu_ke: 28, tahun: 2024, tanggal_publikasi: "2024-07-13" },
    { no: 27, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 27 Tahun 2024", minggu_ke: 27, tahun: 2024, tanggal_publikasi: "2024-07-06" },
    { no: 28, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 26 Tahun 2024", minggu_ke: 26, tahun: 2024, tanggal_publikasi: "2024-06-29" },
    { no: 29, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 25 Tahun 2024", minggu_ke: 25, tahun: 2024, tanggal_publikasi: "2024-06-22" },
    { no: 30, judul: "Laporan Pengawasan Kasus Influenza dan COVID-19 minggu ke 24 Tahun 2024", minggu_ke: 24, tahun: 2024, tanggal_publikasi: "2024-06-15" },
  ]

  // Filter states
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [searchGlobal, setSearchGlobal] = useState('')
  const [filterTahun, setFilterTahun] = useState('semua')

  // Filtered data
  const filteredData = matrixData.filter(item => {
    const searchMatch = item.judul.toLowerCase().includes(searchGlobal.toLowerCase()) ||
                        item.minggu_ke.toString().includes(searchGlobal) ||
                        item.tahun.toString().includes(searchGlobal)
    const tahunMatch = filterTahun === 'semua' || item.tahun.toString() === filterTahun
    return searchMatch && tahunMatch
  })

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Get unique years
  const uniqueYears = [...new Set(matrixData.map(item => item.tahun))].sort((a, b) => b - a)

  // Format date helper
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-[#fbffff] text-slate-800">
      {/* ── Navbar ──────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#d5eceb] shadow-[0_2px_8px_rgba(15,143,150,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-3 sm:py-4">
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

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <section className="w-full">
        <div className="relative overflow-hidden border-b border-[#cfeeed]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${assets.headerBackground}')` }}
          />

          <div className="relative max-w-7xl mx-auto flex min-h-[200px] sm:min-h-[240px] w-full flex-col items-start justify-center px-4 py-6 sm:px-5 sm:py-8 lg:px-6 lg:py-10">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-[0.08em] uppercase text-[#0f8f96] mb-2 sm:mb-3">
              Statistik Resmi Kementerian Kesehatan
            </p>
            <h1 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold leading-tight sm:leading-snug text-[#1a3535] max-w-4xl">
              <span className="block">Laporan Pengawasan Kasus</span>
              <span className="block">Influenza dan COVID-19</span>
              <span className="block">Tahun 2025</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── Information Section ──────────────────────────────────────────────── */}
      <section className="w-full bg-[#fbffff] py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(15,143,150,0.08)]">
            {/* Illustration / Image Side */}
            <div className="hidden lg:flex items-center justify-center p-8">
              <Image
                src="/influ.png"
                alt="Ilustrasi informasi influenza dan COVID-19"
                width={560}
                height={360}
                className="h-80 w-auto object-contain"
                sizes="50vw"
              />
            </div>

            {/* Content Side */}
            <div className="p-6 sm:p-8 lg:p-8">
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a3535] leading-tight mb-2">
                    Informasi Influenza dan COVID-19
                  </h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#0f8f96] to-[#16b7b2] rounded-full"></div>
                </div>

                <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-[#3f5a5a]">
                  Laporan Pengawasan Kasus Influenza dan COVID-19 Tahun 2025 didasarkan sebagai upaya sistematik dalam memantau epidemiologi, serta dampak kesehatan masyarakat dari kedua penyakit tersebut di Indonesia.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#16b7b2] text-white font-semibold text-[12px] sm:text-[13px] tracking-[0.05em] uppercase transition-all shadow-[0_4px_12px_rgba(22,183,178,0.3)] hover:shadow-[0_6px_16px_rgba(22,183,178,0.4)] hover:-translate-y-0.5 active:scale-95">
                    Metodologi
                  </button>
                  <button className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#f59c3a] text-white font-semibold text-[12px] sm:text-[13px] tracking-[0.05em] uppercase transition-all shadow-[0_4px_12px_rgba(245,156,58,0.3)] hover:shadow-[0_6px_16px_rgba(245,156,58,0.4)] hover:-translate-y-0.5 active:scale-95">
                    Meta Data
                  </button>
                  <button className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#4d7ba8] text-white font-semibold text-[12px] sm:text-[13px] tracking-[0.05em] uppercase transition-all shadow-[0_4px_12px_rgba(77,123,168,0.3)] hover:shadow-[0_6px_16px_rgba(77,123,168,0.4)] hover:-translate-y-0.5 active:scale-95">
                    Interoperabilitas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Matrix Section ──────────────────────────────────────────────────── */}
      <section className="w-full bg-[#fbffff] py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          {/* Header Section */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3535] mb-2">
              MATRIKS PERKEMBANGAN LAPORAN INFLUENZA DAN COVID-19
            </h2>
            <p className="text-[13px] sm:text-[14px] text-[#4a7a7a] leading-relaxed">
              Matriks Perkembangan Laporan Influenza dan COVID-19 merupakan instrumen analisis yang menyajikan perkembangan data kasus secara terstruktur dan komparatif dari waktu ke waktu, baik mingguan maupun bulanan.
            </p>
          </div>

          {/* Controls Row */}
          <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <label className="text-[12px] font-semibold text-[#4a7a7a]">Filter Tahun:</label>
              <select
                value={filterTahun}
                onChange={(e) => {
                  setFilterTahun(e.target.value)
                  setCurrentPage(1)
                }}
                className="px-3 py-2 text-[12px] border border-[#d0e8e7] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#16b7b2] focus:border-transparent cursor-pointer"
              >
                <option value="semua">Semua Tahun</option>
                {uniqueYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <label className="text-[12px] font-semibold text-[#4a7a7a]">Show:</label>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value))
                  setCurrentPage(1)
                }}
                className="px-3 py-2 text-[12px] border border-[#d0e8e7] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#16b7b2] focus:border-transparent cursor-pointer"
              >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
              <span className="text-[12px] text-[#4a7a7a]">entries</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label className="text-[12px] font-semibold text-[#4a7a7a] whitespace-nowrap">Search:</label>
              <div className="relative flex-1 sm:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9dbfc0]" />
                <input
                  type="text"
                  placeholder="Cari..."
                  value={searchGlobal}
                  onChange={(e) => {
                    setSearchGlobal(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full pl-10 pr-3 py-2 text-[12px] border border-[#d0e8e7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16b7b2] focus:border-transparent bg-white"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden border border-[#e0e0e0]">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#16b7b2] text-white">
                    <th className="px-4 sm:px-6 py-3 text-left text-[11px] font-bold uppercase tracking-[0.05em] w-12">NO</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-[11px] font-bold uppercase tracking-[0.05em]">JUDUL</th>
                    <th className="px-4 sm:px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.05em] w-20">MINGGU KE</th>
                    <th className="px-4 sm:px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.05em] w-16">TAHUN</th>
                    <th className="px-4 sm:px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.05em]">TANGGAL PUBLIKASI</th>
                    <th className="px-4 sm:px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.05em] w-24">DETAIL</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item, index) => (
                      <tr
                        key={item.no}
                        className="border-b border-[#e0e0e0] hover:bg-[#f0fbfb] transition-colors"
                      >
                        <td className="px-4 sm:px-6 py-4 text-[13px] font-semibold text-[#3f5a5a]">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-[13px] text-[#3f5a5a]">
                          {item.judul}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-[13px] font-semibold text-[#3f5a5a] text-center">
                          {item.minggu_ke}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-[13px] font-semibold text-[#3f5a5a] text-center">
                          {item.tahun}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-[13px] text-[#3f5a5a] text-center">
                          {formatDate(item.tanggal_publikasi)}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-center">
                          <Link
                            href={`/laporan/${item.minggu_ke}`}
                            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#16b7b2] text-white font-bold text-[11px] uppercase tracking-[0.05em] transition-all shadow-[0_2px_8px_rgba(22,183,178,0.3)] hover:shadow-[0_4px_12px_rgba(22,183,178,0.4)] hover:-translate-y-0.5 active:scale-95"
                          >
                            Lihat
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-[13px] text-[#9dbfc0]">
                        Tidak ada data yang sesuai dengan pencarian Anda
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer with Pagination */}
            <div className="px-4 sm:px-6 py-4 bg-white border-t border-[#e0e0e0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[12px] text-[#4a7a7a]">
                Menampilkan {filteredData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} hingga{' '}
                {Math.min(currentPage * itemsPerPage, filteredData.length)} dari {filteredData.length} data
              </p>

              {/* Pagination Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-[12px] font-semibold text-[#4a7a7a] border border-[#d0e8e7] rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:border-[#16b7b2] hover:enabled:text-[#16b7b2] hover:enabled:bg-[#f0fbfb]"
                >
                  Sebelumnya
                </button>

                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-8 w-8 rounded-lg font-semibold text-[12px] transition-all ${
                        page === currentPage
                          ? 'bg-[#16b7b2] text-white shadow-[0_2px_8px_rgba(22,183,178,0.3)]'
                          : 'text-[#4a7a7a] border border-[#d0e8e7] hover:border-[#16b7b2] hover:text-[#16b7b2] hover:bg-[#f0fbfb]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-[12px] font-semibold text-[#4a7a7a] border border-[#d0e8e7] rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:border-[#16b7b2] hover:enabled:text-[#16b7b2] hover:enabled:bg-[#f0fbfb]"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="w-full bg-white border-t border-[#cfeeed] py-6 sm:py-8">
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
