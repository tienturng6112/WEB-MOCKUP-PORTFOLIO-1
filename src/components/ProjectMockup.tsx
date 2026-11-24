import { MockupType } from '../types/portfolio';

interface ProjectMockupProps {
  type: MockupType;
  compact?: boolean;
}

export function ProjectMockup({ type, compact = false }: ProjectMockupProps) {
  const heightClass = compact ? 'h-44' : 'h-56 sm:h-64';

  if (type === 'observability') {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b0e13] p-4 ${heightClass}`}
      >
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            LIVE TELEMETRY · 51.4k/s
          </span>
          <span>p99: 38ms</span>
        </div>

        {/* Mini Sparkline Bars */}
        <div className="mt-4 flex h-16 items-end gap-1.5">
          {[35, 48, 42, 65, 58, 82, 74, 92, 68, 79, 86, 62, 70, 95, 76, 64].map(
            (val, i) => (
              <div
                key={i}
                style={{ height: `${val}%` }}
                className={`flex-1 rounded-t-sm ${
                  val > 85 ? 'bg-emerald-400/90' : 'bg-emerald-500/30'
                }`}
              />
            )
          )}
        </div>

        {/* Log Stream Lines */}
        <div className="mt-4 space-y-1.5 font-mono text-[10px]">
          <div className="flex items-center justify-between rounded bg-white/[0.03] px-2 py-1 text-zinc-300">
            <span>GET /v2/traces/cluster-ap1</span>
            <span className="text-emerald-400">200 OK · 14ms</span>
          </div>
          <div className="flex items-center justify-between rounded bg-white/[0.03] px-2 py-1 text-zinc-400">
            <span>WS /stream/ingest-worker</span>
            <span className="text-sky-400">ACTIVE · 60fps</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'fintech') {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0d12] p-4 ${heightClass}`}
      >
        <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
          <span>LEDGER · DOUBLE-ENTRY</span>
          <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-emerald-300">
            VERIFIED
          </span>
        </div>

        <div className="mt-3 rounded-lg border border-white/[0.07] bg-zinc-900/80 p-3">
          <div className="text-[10px] text-zinc-400">Settlement Volume (24h)</div>
          <div className="mt-1 font-mono text-lg font-bold text-zinc-100">
            $1,482,920.00
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-300" />
          </div>
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-2 font-mono text-[10px]">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
            <div className="text-zinc-500">Idempotency</div>
            <div className="mt-0.5 text-emerald-400">100% Enforced</div>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
            <div className="text-zinc-500">Checkout LCP</div>
            <div className="mt-0.5 text-zinc-200">0.9s Mobile</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'design-system') {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0e0e13] p-4 ${heightClass}`}
      >
        <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
          <span>@kinetix/ui · v3.4</span>
          <span className="text-emerald-400">WCAG AA · 100</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-center font-mono text-[10px] text-emerald-300">
            Primary
          </div>
          <div className="rounded-lg border border-white/10 bg-zinc-800/80 p-2 text-center font-mono text-[10px] text-zinc-200">
            Secondary
          </div>
          <div className="rounded-lg border border-dashed border-white/20 p-2 text-center font-mono text-[10px] text-zinc-400">
            Ghost
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-zinc-900/90 px-3 py-2">
            <span className="text-xs text-zinc-300">Focus Trap & ARIA</span>
            <span className="h-4 w-7 rounded-full bg-emerald-400 p-0.5">
              <span className="block h-3 w-3 translate-x-3 rounded-full bg-zinc-950" />
            </span>
          </div>
          <div className="flex gap-1.5">
            {['#10b981', '#34d399', '#18181b', '#f4f4f5'].map((hex) => (
              <div
                key={hex}
                className="flex flex-1 items-center gap-1 rounded border border-white/[0.06] bg-white/[0.02] px-1.5 py-1 font-mono text-[9px] text-zinc-400"
              >
                <span
                  className="h-2.5 w-2.5 rounded-sm"
                  style={{ backgroundColor: hex }}
                />
                <span className="truncate">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'codelens') {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b0d11] p-4 ${heightClass}`}
      >
        <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
          <span>AST DEPENDENCY GRAPH</span>
          <span className="text-emerald-400">0 cycles detected</span>
        </div>

        <svg
          viewBox="0 0 280 110"
          className="mt-2 h-28 w-full"
          aria-hidden="true"
        >
          <line
            x1="50"
            y1="55"
            x2="135"
            y2="25"
            stroke="rgba(52,211,153,0.45)"
            strokeWidth="1.5"
          />
          <line
            x1="50"
            y1="55"
            x2="135"
            y2="85"
            stroke="rgba(56,189,248,0.45)"
            strokeWidth="1.5"
          />
          <line
            x1="135"
            y1="25"
            x2="225"
            y2="55"
            stroke="rgba(52,211,153,0.45)"
            strokeWidth="1.5"
          />
          <line
            x1="135"
            y1="85"
            x2="225"
            y2="55"
            stroke="rgba(161,161,170,0.35)"
            strokeWidth="1.5"
          />

          <rect x="14" y="40" width="72" height="30" rx="6" fill="#18181b" stroke="#34d399" strokeOpacity="0.6" />
          <text x="50" y="59" textAnchor="middle" fill="#e4e4e7" fontSize="9" fontFamily="monospace">
            app/core
          </text>

          <rect x="100" y="10" width="74" height="28" rx="6" fill="#18181b" stroke="#3f3f46" />
          <text x="137" y="28" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">
            auth.svc
          </text>

          <rect x="100" y="72" width="74" height="28" rx="6" fill="#18181b" stroke="#3f3f46" />
          <text x="137" y="90" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace">
            ui.kit
          </text>

          <rect x="194" y="40" width="72" height="30" rx="6" fill="#18181b" stroke="#38bdf8" strokeOpacity="0.5" />
          <text x="230" y="59" textAnchor="middle" fill="#e4e4e7" fontSize="9" fontFamily="monospace">
            db.repo
          </text>
        </svg>
      </div>
    );
  }

  // storefront
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0d10] p-4 ${heightClass}`}
    >
      <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
        <span>VELOCE · EDGE STORE</span>
        <span className="text-emerald-400">ISR &lt; 80ms</span>
      </div>

      <div className="mt-3 flex gap-3">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-emerald-500/20 via-zinc-900 to-zinc-950">
          <div className="h-10 w-10 rounded-full border-2 border-emerald-400/70 bg-emerald-400/10" />
        </div>
        <div className="flex flex-1 flex-col justify-between py-0.5">
          <div>
            <div className="text-xs font-semibold text-zinc-100">
              Carbon Series X1
            </div>
            <div className="mt-0.5 font-mono text-[10px] text-zinc-400">
              Matte Obsidian · 2025
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3.5 w-3.5 rounded-full border border-white bg-zinc-900" />
            <span className="h-3.5 w-3.5 rounded-full bg-emerald-400" />
            <span className="h-3.5 w-3.5 rounded-full bg-zinc-500" />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-semibold text-emerald-300">
              $1,290
            </span>
            <span className="rounded bg-emerald-400 px-2 py-0.5 text-[10px] font-semibold text-zinc-950">
              Add
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
