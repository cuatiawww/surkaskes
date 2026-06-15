'use client'

import {
  BarChart3,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Home,
  MapPinned,
  Medal,
  Settings,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

type SidebarMenuGroup = {
  title: string
  items: Array<{
    label: string
    iconKey: string
    active?: boolean
  }>
}

const sidebarIconByKey = {
  home: Home,
  map: MapPinned,
  chart: BarChart3,
  trend: Sparkles,
  fileCheck: FileCheck2,
  shield: ShieldCheck,
  fileSheet: FileSpreadsheet,
  medal: Medal,
  settings: Settings,
}

const defaultMenuGroups: SidebarMenuGroup[] = [
  {
    title: 'UTAMA',
    items: [
      { label: 'Beranda', iconKey: 'home', active: true },
      { label: 'Peta Nasional', iconKey: 'map' },
      { label: 'Analitik', iconKey: 'chart' },
    ],
  },
  {
    title: 'MONITORING',
    items: [
      { label: 'Tren Kampus', iconKey: 'trend' },
      { label: 'Verifikasi', iconKey: 'fileCheck' },
      { label: 'Keamanan Data', iconKey: 'shield' },
    ],
  },
  {
    title: 'LAPORAN',
    items: [
      { label: 'Unduh Laporan', iconKey: 'fileSheet' },
      { label: 'Pencapaian', iconKey: 'medal' },
      { label: 'Dokumentasi', iconKey: 'fileText' },
    ],
  },
]

export default function DashboardSidebar({ 
  open, 
  menuGroups = defaultMenuGroups 
}: { 
  open: boolean
  menuGroups?: SidebarMenuGroup[]
}) {
  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen w-[280px] border-r border-teal-300/30 bg-gradient-to-b from-[#0f8f96] via-[#076176] to-[#03384d] text-slate-100 shadow-2xl transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="h-[3px] bg-gradient-to-r from-teal-300 via-cyan-200 to-transparent" />
      <div className="border-b border-teal-200/20 px-5 py-5">
        <p className="text-lg font-bold tracking-wide">KAMPUS SEHAT</p>
        <p className="text-xs text-teal-50/80">Kementerian Kesehatan RI</p>
      </div>
      <nav className="h-[calc(100vh-84px)] space-y-5 overflow-y-auto px-3 py-4">
        {menuGroups.map((group) => (
          <section key={group.title}>
            <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-300">{group.title}</p>
            <div className="mt-2 space-y-1.5">
              {group.items.map((item) => {
                const Icon = sidebarIconByKey[item.iconKey as keyof typeof sidebarIconByKey] ?? Home
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-bold uppercase tracking-[0.03em] transition ${
                      item.active
                        ? 'bg-white/14 font-semibold text-white shadow-[inset_0_0_0_1px_rgba(94,234,212,0.55)]'
                        : 'text-teal-50/85 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </section>
        ))}
      </nav>
    </aside>
  )
}
