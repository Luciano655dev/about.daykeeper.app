import { FormEvent, useEffect, useRef, useState } from "react"
import axios from "axios"
import {
  AnalyticsGrid,
  Banner,
  ChartEmpty,
  ChartHeader,
  ChartLegend,
  ChartLegendItem,
  ChartMeta,
  Dashboard,
  DetailGrid,
  DetailList,
  Hero,
  HeroText,
  ControlsRow,
  Page,
  Panel,
  PanelGrid,
  Section,
  SectionHeader,
  Select,
  StatCard,
  StatGrid,
  StatValue,
  StatusDot,
  StatusHeader,
} from "./StatusCSS"

// ─── Types ────────────────────────────────────────────────────────────────────

type Range = {
  days: number
  bucket: "day"
  timezone: "UTC"
  from: string
  to: string
}

type UsersResponse = {
  message: string
  range: Range
  totals: { users: number }
  series: Array<{ bucket: string; count: number }>
}

type ContentResponse = {
  message: string
  range: Range
  totals: { total: number; posts: number; dayPages: number; tasks: number; events: number }
  series: Array<{ bucket: string; total: number; posts: number; dayPages: number; tasks: number; events: number }>
}

type InteractionsResponse = {
  message: string
  range: Range
  totals: {
    total: number
    comments: number
    likes: number
    postLikes: number
    commentLikes: number
    dayPageComments: number
    dayPageLikes: number
  }
  series: Array<{
    bucket: string
    total: number
    comments: number
    likes: number
    postLikes: number
    commentLikes: number
    dayPageComments: number
    dayPageLikes: number
  }>
}

type ServerStatusResponse = {
  message: string
  status: "ok" | "degraded"
  timestamp: string
  environment: string
  uptimeSeconds: number
  uptimeHuman: string
  database: {
    status: "connected" | "disconnected" | "connecting" | "disconnecting" | "unknown"
    readyState: number
    host: string | null
    name: string | null
  }
  system: { platform: string; nodeVersion: string; pid: number; hostname: string }
  memory: { rss: number; heapTotal: number; heapUsed: number; external: number }
}

type ApiError = { status?: number; message: string }
type LinePoint = { label: string; value: number }
type ChartSeries = { label: string; color: string; values: number[] }

// ─── Constants ────────────────────────────────────────────────────────────────

const API_DAYS_KEY = "daykeeper-about-admin-days"
const apiBase = import.meta.env.VITE_DAYKEEPER_API_BASE ?? "https://api.daykeeper.app"

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Status() {
  const [days, setDays] = useState("30")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApiError | null>(null)
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null)

  const [users, setUsers] = useState<UsersResponse | null>(null)
  const [content, setContent] = useState<ContentResponse | null>(null)
  const [interactions, setInteractions] = useState<InteractionsResponse | null>(null)
  const [serverStatus, setServerStatus] = useState<ServerStatusResponse | null>(null)

  const [activeUsersIdx, setActiveUsersIdx] = useState<number | null>(null)
  const [activeContentIdx, setActiveContentIdx] = useState<number | null>(null)
  const [activeInteractionsIdx, setActiveInteractionsIdx] = useState<number | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(API_DAYS_KEY)
    void fetchAll(stored ?? "30")
  }, [])

  const fetchAll = async (daysOverride?: string) => {
    const d = daysOverride ?? days
    setLoading(true)
    setError(null)
    try {
      const cfg = { headers: { "Content-Type": "application/json" } }
      const n = Number(d)
      const [uRes, cRes, iRes, sRes] = await Promise.all([
        axios.get<UsersResponse>(`${apiBase}/admin/about/users`, { ...cfg, params: { days: n } }),
        axios.get<ContentResponse>(`${apiBase}/admin/about/content`, { ...cfg, params: { days: n } }),
        axios.get<InteractionsResponse>(`${apiBase}/admin/about/interactions`, { ...cfg, params: { days: n } }),
        axios.get<ServerStatusResponse>(`${apiBase}/admin/about/server-status`, cfg),
      ])
      window.localStorage.setItem(API_DAYS_KEY, d)
      setDays(d)
      setUsers(uRes.data)
      setContent(cRes.data)
      setInteractions(iRes.data)
      setServerStatus(sRes.data)
      setLastRefreshed(new Date())
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError({
          status: err.response?.status,
          message: err.response?.data?.message || err.message || "Unable to fetch status data.",
        })
      } else {
        setError({ message: "Unable to fetch status data." })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetchAll()
  }

  return (
    <Page>
      <Dashboard>
        <Hero>
          <HeroText>
            <h1>Daykeeper Status</h1>
            <p>
              Server health, user growth, content activity, and interaction
              metrics — updated on demand.
            </p>
          </HeroText>
        </Hero>

        {/* Controls */}
        <Panel as="form" onSubmit={handleSubmit}>
          <ControlsRow>
            <Select
              value={days}
              onChange={(e) => setDays(e.target.value)}
              disabled={loading}
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="180">Last 180 days</option>
              <option value="365">Last 365 days</option>
            </Select>
            <button type="submit" disabled={loading}>
              {loading ? "Loading…" : "Refresh"}
            </button>
            {lastRefreshed && (
              <span style={{ fontSize: "0.9rem", color: "var(--dk-slate)" }}>
                Updated {lastRefreshed.toLocaleTimeString()}
              </span>
            )}
          </ControlsRow>
        </Panel>

        {error && (
          <Banner>
            <strong>{error.status ?? "Error"}.</strong> {error.message}
          </Banner>
        )}

        {/* ── Server Health ─────────────────────────────────────────────── */}
        <Section>
          <SectionHeader>
            <h2>Server health</h2>
            {serverStatus && (
              <StatusHeader>
                <StatusDot $status={serverStatus.status} />
                <span>{serverStatus.status}</span>
              </StatusHeader>
            )}
          </SectionHeader>

          {serverStatus ? (
            <PanelGrid>
              {/* Key stats */}
              <StatGrid>
                <StatCard>
                  <label>Status</label>
                  <StatValue>{serverStatus.status}</StatValue>
                </StatCard>
                <StatCard>
                  <label>Environment</label>
                  <StatValue>{serverStatus.environment}</StatValue>
                </StatCard>
                <StatCard>
                  <label>Uptime</label>
                  <StatValue>{serverStatus.uptimeHuman}</StatValue>
                </StatCard>
                <StatCard>
                  <label>Database</label>
                  <StatValue>{serverStatus.database.status}</StatValue>
                </StatCard>
              </StatGrid>

              {/* Detail panels */}
              <DetailGrid>
                <Panel>
                  <h3>Database</h3>
                  <DetailList>
                    <li>State: {serverStatus.database.readyState} ({serverStatus.database.status})</li>
                    <li>Host: {serverStatus.database.host ?? "—"}</li>
                    <li>Name: {serverStatus.database.name ?? "—"}</li>
                  </DetailList>
                </Panel>

                <Panel>
                  <h3>System</h3>
                  <DetailList>
                    <li>Platform: {serverStatus.system.platform}</li>
                    <li>Node: {serverStatus.system.nodeVersion}</li>
                    <li>Hostname: {serverStatus.system.hostname}</li>
                    <li>PID: {serverStatus.system.pid}</li>
                  </DetailList>
                </Panel>

                <Panel>
                  <h3>Memory</h3>
                  <StatGrid>
                    <StatCard>
                      <label>Heap used</label>
                      <StatValue style={{ fontSize: "1.1rem" }}>
                        {formatBytes(serverStatus.memory.heapUsed)}
                      </StatValue>
                    </StatCard>
                    <StatCard>
                      <label>Heap total</label>
                      <StatValue style={{ fontSize: "1.1rem" }}>
                        {formatBytes(serverStatus.memory.heapTotal)}
                      </StatValue>
                    </StatCard>
                    <StatCard>
                      <label>RSS</label>
                      <StatValue style={{ fontSize: "1.1rem" }}>
                        {formatBytes(serverStatus.memory.rss)}
                      </StatValue>
                    </StatCard>
                    <StatCard>
                      <label>External</label>
                      <StatValue style={{ fontSize: "1.1rem" }}>
                        {formatBytes(serverStatus.memory.external)}
                      </StatValue>
                    </StatCard>
                  </StatGrid>
                </Panel>
              </DetailGrid>
            </PanelGrid>
          ) : (
            <Panel>
              <p>{loading ? "Loading server status…" : "No data loaded yet."}</p>
            </Panel>
          )}
        </Section>

        {/* ── Users ─────────────────────────────────────────────────────── */}
        <Section>
          <SectionHeader>
            <h2>Users</h2>
            <ChartMeta>{formatRange(users?.range)}</ChartMeta>
          </SectionHeader>

          {users ? (
            <AnalyticsGrid>
              <StatGrid>
                <StatCard>
                  <label>New registrations</label>
                  <StatValue>{users.totals.users.toLocaleString()}</StatValue>
                </StatCard>
                <StatCard>
                  <label>Daily average</label>
                  <StatValue>
                    {users.range.days > 0
                      ? (users.totals.users / users.range.days).toFixed(1)
                      : "—"}
                  </StatValue>
                </StatCard>
              </StatGrid>

              <Panel>
                <ChartHeader>
                  <h3>New registrations</h3>
                  <span>
                    {activeUsersIdx !== null
                      ? users.series[activeUsersIdx]?.count
                      : users.totals.users}
                  </span>
                </ChartHeader>
                <SingleLineChart
                  data={users.series.map((item) => ({
                    label: item.bucket,
                    value: item.count,
                  }))}
                  color="var(--dk-sky)"
                  onHoverChange={(pt) =>
                    setActiveUsersIdx(
                      pt ? users.series.findIndex((s) => s.bucket === pt.label) : null
                    )
                  }
                />
              </Panel>
            </AnalyticsGrid>
          ) : (
            <ChartEmpty>{loading ? "Loading…" : "No data loaded yet."}</ChartEmpty>
          )}
        </Section>

        {/* ── Content ───────────────────────────────────────────────────── */}
        <Section>
          <SectionHeader>
            <h2>Content</h2>
            <ChartMeta>{formatRange(content?.range)}</ChartMeta>
          </SectionHeader>

          {content ? (
            <AnalyticsGrid>
              <StatGrid>
                <StatCard>
                  <label>Day pages</label>
                  <StatValue>{content.totals.dayPages.toLocaleString()}</StatValue>
                </StatCard>
                <StatCard>
                  <label>Tasks</label>
                  <StatValue>{content.totals.tasks.toLocaleString()}</StatValue>
                </StatCard>
                <StatCard>
                  <label>Events</label>
                  <StatValue>{content.totals.events.toLocaleString()}</StatValue>
                </StatCard>
                <StatCard>
                  <label>Posts</label>
                  <StatValue>{content.totals.posts.toLocaleString()}</StatValue>
                </StatCard>
              </StatGrid>

              <Panel>
                <ChartHeader>
                  <h3>Content activity</h3>
                  <span>
                    {activeContentIdx !== null
                      ? content.series[activeContentIdx]?.total
                      : content.totals.total}
                  </span>
                </ChartHeader>
                <MultiLineChart
                  labels={content.series.map((item) => item.bucket)}
                  series={[
                    {
                      label: "day pages",
                      color: "var(--dk-sky)",
                      values: content.series.map((item) => item.dayPages),
                    },
                    {
                      label: "tasks",
                      color: "var(--dk-success)",
                      values: content.series.map((item) => item.tasks),
                    },
                    {
                      label: "events",
                      color: "var(--dk-slate)",
                      values: content.series.map((item) => item.events),
                    },
                    {
                      label: "posts (legacy)",
                      color: "var(--dk-ink)",
                      values: content.series.map((item) => item.posts),
                    },
                  ]}
                  onHoverChange={setActiveContentIdx}
                />
              </Panel>
            </AnalyticsGrid>
          ) : (
            <ChartEmpty>{loading ? "Loading…" : "No data loaded yet."}</ChartEmpty>
          )}
        </Section>

        {/* ── Interactions ──────────────────────────────────────────────── */}
        <Section>
          <SectionHeader>
            <h2>Interactions</h2>
            <ChartMeta>{formatRange(interactions?.range)}</ChartMeta>
          </SectionHeader>

          {interactions ? (
            <AnalyticsGrid>
              <StatGrid>
                <StatCard>
                  <label>Day page likes</label>
                  <StatValue>{interactions.totals.dayPageLikes.toLocaleString()}</StatValue>
                </StatCard>
                <StatCard>
                  <label>Day page comments</label>
                  <StatValue>{interactions.totals.dayPageComments.toLocaleString()}</StatValue>
                </StatCard>
                <StatCard>
                  <label>Post comments</label>
                  <StatValue>{interactions.totals.comments.toLocaleString()}</StatValue>
                </StatCard>
                <StatCard>
                  <label>Post likes</label>
                  <StatValue>{interactions.totals.postLikes.toLocaleString()}</StatValue>
                </StatCard>
              </StatGrid>

              <Panel>
                <ChartHeader>
                  <h3>Interaction activity</h3>
                  <span>
                    {activeInteractionsIdx !== null
                      ? interactions.series[activeInteractionsIdx]?.total
                      : interactions.totals.total}
                  </span>
                </ChartHeader>
                <MultiLineChart
                  labels={interactions.series.map((item) => item.bucket)}
                  series={[
                    {
                      label: "day page likes",
                      color: "var(--dk-sky)",
                      values: interactions.series.map((item) => item.dayPageLikes),
                    },
                    {
                      label: "day page comments",
                      color: "var(--dk-success)",
                      values: interactions.series.map((item) => item.dayPageComments),
                    },
                    {
                      label: "post comments",
                      color: "var(--dk-slate)",
                      values: interactions.series.map((item) => item.comments),
                    },
                    {
                      label: "post likes",
                      color: "var(--dk-ink)",
                      values: interactions.series.map((item) => item.postLikes),
                    },
                  ]}
                  onHoverChange={setActiveInteractionsIdx}
                />
              </Panel>
            </AnalyticsGrid>
          ) : (
            <ChartEmpty>{loading ? "Loading…" : "No data loaded yet."}</ChartEmpty>
          )}
        </Section>
      </Dashboard>
    </Page>
  )
}

// ─── Charts ───────────────────────────────────────────────────────────────────

function SingleLineChart({
  data,
  color,
  onHoverChange,
}: {
  data: LinePoint[]
  color: string
  onHoverChange?: (point: LinePoint | null) => void
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const prevActiveRef = useRef<number | null>(null)

  useEffect(() => {
    if (activeIndex === prevActiveRef.current) return
    prevActiveRef.current = activeIndex
    onHoverChange?.(activeIndex !== null ? data[activeIndex] : null)
  }, [activeIndex, data, onHoverChange])

  if (!data.length) {
    return <ChartEmpty>No data for this range.</ChartEmpty>
  }

  const W = 760
  const H = 220
  const PAD = 20
  const maxVal = Math.max(...data.map((d) => d.value), 1)

  const pts = data.map((d, i) => ({
    x: data.length === 1 ? W / 2 : PAD + (i / (data.length - 1)) * (W - PAD * 2),
    y: H - PAD - (d.value / maxVal) * (H - PAD * 2),
    ...d,
  }))

  const resolvedIdx = activeIndex ?? pts.length - 1
  const active = pts[resolvedIdx]

  return (
    <>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <line
          x1={active.x} x2={active.x} y1={PAD} y2={H - PAD}
          stroke="rgba(51,65,85,0.3)" strokeWidth="1" strokeDasharray="4 5"
        />
        <polyline
          fill="none" stroke={color} strokeWidth="2.5"
          points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
        />
        {pts.map((p, i) => (
          <g key={p.label}>
            <circle
              cx={p.x} cy={p.y}
              r={resolvedIdx === i ? 4.5 : 0}
              fill={color}
            />
            <rect
              x={i === 0 ? 0 : (pts[i - 1].x + p.x) / 2}
              y={0}
              width={
                i === pts.length - 1
                  ? W - (i === 0 ? 0 : (pts[i - 1].x + p.x) / 2)
                  : (p.x + pts[i + 1].x) / 2 - (i === 0 ? 0 : (pts[i - 1].x + p.x) / 2)
              }
              height={H}
              fill="transparent"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          </g>
        ))}
      </svg>
      <ChartMeta>
        {formatBucketDate(active.label)}: {active.value}
      </ChartMeta>
      <ChartMeta>
        {formatBucketDate(data[0]?.label)} – {formatBucketDate(data[data.length - 1]?.label)}
      </ChartMeta>
    </>
  )
}

function MultiLineChart({
  labels,
  series,
  onHoverChange,
}: {
  labels: string[]
  series: ChartSeries[]
  onHoverChange?: (index: number | null) => void
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const prevActiveRef = useRef<number | null>(null)

  useEffect(() => {
    if (activeIndex === prevActiveRef.current) return
    prevActiveRef.current = activeIndex
    onHoverChange?.(activeIndex)
  }, [activeIndex, onHoverChange])

  if (!labels.length || !series.length) {
    return <ChartEmpty>No data for this range.</ChartEmpty>
  }

  const W = 760
  const H = 240
  const PAD = 20
  const maxVal = Math.max(...series.flatMap((s) => s.values), 1)

  const buildPoints = (values: number[]) =>
    values
      .map((v, i) => {
        const x =
          values.length === 1 ? W / 2 : PAD + (i / (values.length - 1)) * (W - PAD * 2)
        const y = H - PAD - (v / maxVal) * (H - PAD * 2)
        return `${x},${y}`
      })
      .join(" ")

  const resolvedIdx = activeIndex ?? labels.length - 1

  const activeX =
    labels.length === 1 ? W / 2 : PAD + (resolvedIdx / (labels.length - 1)) * (W - PAD * 2)

  return (
    <>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <line
          x1={activeX} x2={activeX} y1={PAD} y2={H - PAD}
          stroke="rgba(51,65,85,0.3)" strokeWidth="1" strokeDasharray="4 5"
        />
        {series.map((line) => (
          <polyline
            key={line.label}
            fill="none"
            stroke={line.color}
            strokeWidth="2.5"
            points={buildPoints(line.values)}
          />
        ))}
        {labels.map((label, i) => {
          const x =
            labels.length === 1 ? W / 2 : PAD + (i / (labels.length - 1)) * (W - PAD * 2)
          return (
            <g key={label}>
              {series.map((line) => {
                const v = line.values[i]
                const y = H - PAD - (v / maxVal) * (H - PAD * 2)
                return (
                  <circle
                    key={line.label}
                    cx={x} cy={y}
                    r={resolvedIdx === i ? 4 : 0}
                    fill={line.color}
                  />
                )
              })}
              <rect
                x={i === 0 ? 0 : (x + (PAD + ((i - 1) / (labels.length - 1)) * (W - PAD * 2))) / 2}
                y={0}
                width={
                  i === labels.length - 1
                    ? W - (i === 0 ? 0 : (x + (PAD + ((i - 1) / (labels.length - 1)) * (W - PAD * 2))) / 2)
                    : (x + (PAD + ((i + 1) / (labels.length - 1)) * (W - PAD * 2))) / 2 -
                      (i === 0 ? 0 : (x + (PAD + ((i - 1) / (labels.length - 1)) * (W - PAD * 2))) / 2)
                }
                height={H}
                fill="transparent"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              />
            </g>
          )
        })}
      </svg>
      <ChartLegend>
        {series.map((line) => (
          <ChartLegendItem key={line.label}>
            <span style={{ backgroundColor: line.color }} />
            <label>{line.label}</label>
          </ChartLegendItem>
        ))}
      </ChartLegend>
      <ChartMeta>
        {formatBucketDate(labels[resolvedIdx])}:{" "}
        {series.map((l) => `${l.label} ${l.values[resolvedIdx]}`).join("  ·  ")}
      </ChartMeta>
      <ChartMeta>
        {formatBucketDate(labels[0])} – {formatBucketDate(labels[labels.length - 1])}
      </ChartMeta>
    </>
  )
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatBytes(n: number) {
  const units = ["B", "KB", "MB", "GB"]
  let size = n
  let i = 0
  while (size >= 1024 && i < units.length - 1) { size /= 1024; i++ }
  return `${size.toFixed(size >= 10 ? 0 : 1)} ${units[i]}`
}

function formatRange(range?: Range) {
  if (!range) return ""
  return `${range.days}d · UTC`
}

function formatBucketDate(value?: string) {
  if (!value) return ""
  const [y, m, d] = value.split("-")
  if (!y || !m || !d) return value
  return `${d}/${m}/${y}`
}
