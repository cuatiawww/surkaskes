'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  Download,
  LogOut,
  Menu,
  Settings,
  UserCircle,
  X,
} from 'lucide-react'

export default function DashboardHeader({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const [profileOpen, setProfileOpen] = useState(false)
  const [yearPickerOpen, setYearPickerOpen] = useState(false)
  const [periodeOpen, setPeriodeOpen] = useState(false)
  const [selectedYear, setSelectedYear] = useState(2025)
  const [selectedPeriode, setSelectedPeriode] = useState('2025 - 2026')
  const profileRef = useRef<HTMLDivElement>(null)
  const yearPickerRef = useRef<HTMLDivElement>(null)
  const periodeRef = useRef<HTMLDivElement>(null)

  const periodeOptions = Array.from({ length: 4 }, (_, index) => {
    const startYear = selectedYear - 1 + index
    return `${startYear} - ${startYear + 1}`
  })

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) setProfileOpen(false)
      if (yearPickerRef.current && !yearPickerRef.current.contains(event.target as Node)) setYearPickerOpen(false)
      if (periodeRef.current && !periodeRef.current.contains(event.target as Node)) setPeriodeOpen(false)
    }

    if (profileOpen || yearPickerOpen || periodeOpen) document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [profileOpen, yearPickerOpen, periodeOpen])

  return (
    <header className="w-full border-b-2 border-teal-400/25 bg-white">
      <div className="relative flex min-h-[132px] items-stretch overflow-visible">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95" style={{ backgroundImage: "url('/bg header.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/82 to-white/92" />
        <div className="relative grid w-full gap-5 px-4 py-5 md:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="flex min-w-0 items-center gap-4">
            <button type="button" aria-label="Buka menu" onClick={onToggleSidebar} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-600 shadow-sm transition hover:bg-white">
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex min-w-0 flex-col gap-3 md:flex-row md:items-center md:gap-5">
              <Image src="/Logo-Kemenkes.png" alt="Logo Kemenkes" width={170} height={62} className="h-auto w-[132px] shrink-0 md:w-[168px]" priority />
              <div className="min-w-0 border-teal-200/80 md:border-l md:pl-5">
                <h1 className="max-w-[720px] text-2xl font-extrabold leading-tight tracking-normal text-slate-900 md:text-3xl">DASHBOARD INDIKATOR PENILAIAN<br />KINERJA FASILITAS KESEHATAN</h1>
                <p className="mt-2 max-w-[760px] text-sm leading-relaxed text-slate-600 md:text-base">Pantau perkembangan penyenggaraan Fasilitas Kesehatan di seluruh Indonesia secara real-time.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:justify-end">
              <button type="button" className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-600 shadow-sm transition hover:bg-white" aria-label="Notifikasi">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 rounded-full bg-teal-600 px-1.5 text-[10px] font-semibold text-white">5</span>
              </button>
              <button type="button" className="inline-flex h-11 items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-[13px] font-bold uppercase tracking-[0.03em] text-emerald-700 shadow-sm transition hover:bg-emerald-100">
                <Download className="h-4 w-4" />Unduh Laporan
              </button>
              <div className="relative" ref={profileRef}>
                <button type="button" onClick={() => setProfileOpen((prev) => !prev)} className="inline-flex h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-3 text-left shadow-sm transition hover:bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-sm font-extrabold text-white shadow-sm">AP</div>
                  <div className="hidden sm:block">
                    <p className="text-[13px] font-bold uppercase tracking-[0.03em] leading-4 text-slate-900">Admin Pusat</p>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.03em] text-teal-700">Super Admin</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                </button>
                {profileOpen ? (
                  <div className="absolute right-0 top-16 z-30 w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-sm font-extrabold text-white">AP</div>
                        <div><p className="text-sm font-semibold text-slate-800">Admin Pusat</p><p className="text-xs text-slate-500">admin.pusat@kampussehat.go.id</p></div>
                      </div>
                      <button type="button" onClick={() => setProfileOpen(false)} className="rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600" aria-label="Tutup"><X className="h-4 w-4" /></button>
                    </div>
                    <div className="mt-4 rounded-lg border border-teal-100 bg-teal-50 px-3 py-2">
                      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-teal-700">Akses</p>
                      <p className="mt-0.5 text-xs text-slate-600">Pusat pemantauan nasional Kampus Sehat</p>
                    </div>
                    <div className="mt-3 space-y-2">
                      <button type="button" className="flex w-full items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-left text-[13px] font-bold uppercase tracking-[0.03em] text-slate-700 transition hover:bg-slate-50">
                        <UserCircle className="h-4 w-4 text-teal-600" />Profil Saya
                      </button>
                      <button type="button" className="flex w-full items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-left text-[13px] font-bold uppercase tracking-[0.03em] text-slate-700 transition hover:bg-slate-50">
                        <Settings className="h-4 w-4 text-teal-600" />Pengaturan Akun
                      </button>
                      <button type="button" className="flex w-full items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-left text-[13px] font-bold uppercase tracking-[0.03em] text-red-600 transition hover:bg-red-50">
                        <LogOut className="h-4 w-4" />Keluar
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end">
              <div className="relative" ref={yearPickerRef}>
                <button
                  type="button"
                  onClick={() => {
                    setYearPickerOpen((prev) => !prev)
                    setPeriodeOpen(false)
                  }}
                  className="flex min-w-[170px] items-center justify-between rounded-xl border border-slate-200 bg-white/85 px-3 py-2 text-left shadow-sm transition hover:border-teal-300"
                >
                  <span><span className="block text-[11px] font-bold uppercase tracking-[0.04em] text-slate-500">Tahun Penilaian</span><span className="text-sm font-semibold">{selectedYear}</span></span>
                  <CalendarDays className="h-4 w-4 text-teal-600" />
                </button>
                {yearPickerOpen ? (
                  <div className="absolute right-0 top-14 z-30 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
                    <label className="text-xs font-semibold text-slate-500">Pilih Tahun</label>
                    <input
                      type="month"
                      value={`${selectedYear}-01`}
                      onChange={(event) => {
                        const [pickedYear] = event.target.value.split('-')
                        const yearValue = Number(pickedYear)
                        if (!Number.isNaN(yearValue)) {
                          setSelectedYear(yearValue)
                          const nextPeriodeOptions = Array.from({ length: 4 }, (_, index) => {
                            const startYear = yearValue - 1 + index
                            return `${startYear} - ${startYear + 1}`
                          })
                          const fallbackPeriode = `${yearValue} - ${yearValue + 1}`
                          if (!nextPeriodeOptions.includes(selectedPeriode)) setSelectedPeriode(fallbackPeriode)
                        }
                      }}
                      className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none ring-teal-200 transition focus:ring-2"
                    />
                  </div>
                ) : null}
              </div>
              <div className="relative" ref={periodeRef}>
                <button
                  type="button"
                  onClick={() => {
                    setPeriodeOpen((prev) => !prev)
                    setYearPickerOpen(false)
                  }}
                  className="flex min-w-[200px] items-center justify-between rounded-xl border border-slate-200 bg-white/85 px-3 py-2 text-left shadow-sm transition hover:border-teal-300"
                >
                  <span><span className="block text-[11px] font-bold uppercase tracking-[0.04em] text-slate-500">Periode Apresiasi</span><span className="text-sm font-semibold">{selectedPeriode}</span></span>
                  <ChevronDown className={`h-4 w-4 text-slate-500 transition ${periodeOpen ? 'rotate-180' : ''}`} />
                </button>
                {periodeOpen ? (
                  <div className="absolute right-0 top-14 z-30 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                    {periodeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSelectedPeriode(option)
                          setPeriodeOpen(false)
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-[13px] font-bold uppercase tracking-[0.03em] transition ${
                          selectedPeriode === option ? 'bg-teal-50 font-semibold text-teal-700' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{option}</span>
                        {selectedPeriode === option ? <Check className="h-4 w-4" /> : null}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[3px] bg-gradient-to-r from-teal-400/80 via-teal-400/40 to-transparent" />
    </header>
  )
}
