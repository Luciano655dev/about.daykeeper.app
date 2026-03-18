import { FormEvent, useEffect, useState } from "react"
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
  totals: {
    users: number
  }
  series: Array<{
    bucket: string
    bucketStart: string
    count: number
  }>
}

type ContentResponse = {
  message: string
  range: Range
  totals: {
    total: number
    posts: number
    tasks: number
    events: number
  }
  series: Array<{
    bucket: string
    bucketStart: string
    total: number
    posts: number
    tasks: number
    events: number
  }>
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
  }
  series: Array<{
    bucket: string
    bucketStart: string
    total: number
    comments: number
    likes: number
    postLikes: number
    commentLikes: number
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
  system: {
    platform: string
    nodeVersion: string
    pid: number
    hostname: string
  }
  memory: {
    rss: number
    heapTotal: number
    heapUsed: number
    external: number
  }
}

type ApiError = {
  status?: number
  message: string
}

type LineChartDatum = {
  label: string
  value: number
}

type MultiLineChartSeries = {
  label: string
  color: string
  values: number[]
}

const API_DAYS_STORAGE_KEY = "daykeeper-about-admin-days"
const apiBase = import.meta.env.VITE_DAYKEEPER_API_BASE ?? "https://api.daykeeper.app"
export default function Status() {
  const [days, setDays] = useState("30")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApiError | null>(null)
  const [activeUsersPoint, setActiveUsersPoint] = useState<LineChartDatum | null>(null)
  const [activeContentIndex, setActiveContentIndex] = useState<number | null>(null)
  const [activeInteractionsIndex, setActiveInteractionsIndex] = useState<number | null>(null)
  const [users, setUsers] = useState<UsersResponse | null>(null)
  const [content, setContent] = useState<ContentResponse | null>(null)
  const [interactions, setInteractions] = useState<InteractionsResponse | null>(null)
  const [serverStatus, setServerStatus] = useState<ServerStatusResponse | null>(null)

  useEffect(() => {
    const storedDays = window.localStorage.getItem(API_DAYS_STORAGE_KEY)

    if (storedDays) {
      setDays(storedDays)
      void fetchStatusData(storedDays)
      return
    }

    void fetchStatusData("30")
  }, [])

  const fetchStatusData = async (daysOverride?: string) => {
    const currentDays = daysOverride ?? days

    setLoading(true)
    setError(null)

    try {
      const requestConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      const selectedDays = Number(currentDays)

      const [usersResponse, contentResponse, interactionsResponse, serverResponse] =
        await Promise.all([
          axios.get<UsersResponse>(`${apiBase}/admin/about/users`, {
            ...requestConfig,
            params: { days: selectedDays },
          }),
          axios.get<ContentResponse>(`${apiBase}/admin/about/content`, {
            ...requestConfig,
            params: { days: selectedDays },
          }),
          axios.get<InteractionsResponse>(`${apiBase}/admin/about/interactions`, {
            ...requestConfig,
            params: { days: selectedDays },
          }),
          axios.get<ServerStatusResponse>(
            `${apiBase}/admin/about/server-status`,
            requestConfig
          ),
        ])

      window.localStorage.setItem(API_DAYS_STORAGE_KEY, currentDays)

      setDays(currentDays)
      setUsers(usersResponse.data)
      setContent(contentResponse.data)
      setInteractions(interactionsResponse.data)
      setServerStatus(serverResponse.data)
    } catch (requestError) {
      if (axios.isAxiosError(requestError)) {
        setError({
          status: requestError.response?.status,
          message:
            requestError.response?.data?.message ||
            requestError.message ||
            "Unable to fetch status data.",
        })
      } else {
        setError({
          message: "Unable to fetch status data.",
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await fetchStatusData()
  }

  return (
    <Page>
      <Dashboard>
        <Hero>
          <HeroText>
            <h1>Daykeeper Status</h1>
            <p>
              Public analytics for users, content, interactions, and current
              server health.
            </p>
          </HeroText>
        </Hero>

        <Panel as="form" onSubmit={handleSubmit}>
          <ControlsRow>
            <Select
              value={days}
              onChange={(event) => setDays(event.target.value)}
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="180">Last 180 days</option>
              <option value="365">Last 365 days</option>
            </Select>
            <button type="submit" disabled={loading}>
              {loading ? "Refreshing..." : "Refresh status"}
            </button>
          </ControlsRow>
        </Panel>

        {error && (
          <Banner>
            <strong>{error.status ? `${error.status}` : "Error"}.</strong>{" "}
            {error.message}
          </Banner>
        )}

        <Section>
          <SectionHeader>
            <h2>Server Health</h2>
            {serverStatus && (
              <StatusHeader>
                <StatusDot $status={serverStatus.status} />
                <span>{serverStatus.status}</span>
              </StatusHeader>
            )}
          </SectionHeader>

          {serverStatus ? (
            <PanelGrid>
              <StatGrid>
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
                <StatCard>
                  <label>Timestamp</label>
                  <StatValue>{formatDateTime(serverStatus.timestamp)}</StatValue>
                </StatCard>
              </StatGrid>

              <DetailGrid>
                <Panel>
                  <h3>Database</h3>
                  <DetailList>
                    <li>Ready state: {serverStatus.database.readyState}</li>
                    <li>Host: {serverStatus.database.host ?? "unknown"}</li>
                    <li>Name: {serverStatus.database.name ?? "unknown"}</li>
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
                  <ChartHeader>
                    <h3>Memory usage</h3>
                    <span>{formatBytes(serverStatus.memory.heapUsed)}</span>
                  </ChartHeader>
                  <MultiLineChart
                    labels={["rss", "heapTotal", "heapUsed", "external"]}
                    series={[
                      {
                        label: "memory",
                        color: "var(--dk-sky)",
                        values: [
                          serverStatus.memory.rss,
                          serverStatus.memory.heapTotal,
                          serverStatus.memory.heapUsed,
                          serverStatus.memory.external,
                        ],
                      },
                    ]}
                    showLegend={false}
                  />
                </Panel>
              </DetailGrid>
            </PanelGrid>
          ) : (
            <Panel>
              <p>Status data will load automatically when the page opens.</p>
            </Panel>
          )}
        </Section>

        <Section>
          <SectionHeader>
            <h2>Users</h2>
            <ChartMeta>{formatRange(users?.range)}</ChartMeta>
          </SectionHeader>
          {users ? (
            <AnalyticsGrid>
              <Panel>
                <ChartHeader>
                  <h3>New users</h3>
                  <span>{activeUsersPoint?.value ?? users.totals.users}</span>
                </ChartHeader>
                <SingleLineChart
                  data={users.series.map((item) => ({
                    label: item.bucket,
                    value: item.count,
                  }))}
                  color="var(--dk-sky)"
                  onHoverChange={setActiveUsersPoint}
                />
              </Panel>
            </AnalyticsGrid>
          ) : (
            <ChartEmpty>No user analytics loaded yet.</ChartEmpty>
          )}
        </Section>

        <Section>
          <SectionHeader>
            <h2>Content</h2>
            <ChartMeta>{formatRange(content?.range)}</ChartMeta>
          </SectionHeader>
          {content ? (
            <AnalyticsGrid>
              <Panel>
                <ChartHeader>
                  <h3>Content activity</h3>
                  <span>
                    {activeContentIndex !== null
                      ? content.series[activeContentIndex]?.total
                      : content.totals.total}
                  </span>
                </ChartHeader>
                <MultiLineChart
                  labels={content.series.map((item) => item.bucket)}
                  series={[
                    {
                      label: "total",
                      color: "var(--dk-ink)",
                      values: content.series.map((item) => item.total),
                    },
                    {
                      label: "posts",
                      color: "var(--dk-sky)",
                      values: content.series.map((item) => item.posts),
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
                  ]}
                  onHoverChange={setActiveContentIndex}
                />
              </Panel>
            </AnalyticsGrid>
          ) : (
            <ChartEmpty>No content analytics loaded yet.</ChartEmpty>
          )}
        </Section>

        <Section>
          <SectionHeader>
            <h2>Interactions</h2>
            <ChartMeta>{formatRange(interactions?.range)}</ChartMeta>
          </SectionHeader>
          {interactions ? (
            <AnalyticsGrid>
              <Panel>
                <ChartHeader>
                  <h3>Interaction activity</h3>
                  <span>
                    {activeInteractionsIndex !== null
                      ? interactions.series[activeInteractionsIndex]?.total
                      : interactions.totals.total}
                  </span>
                </ChartHeader>
                <MultiLineChart
                  labels={interactions.series.map((item) => item.bucket)}
                  series={[
                    {
                      label: "total",
                      color: "var(--dk-ink)",
                      values: interactions.series.map((item) => item.total),
                    },
                    {
                      label: "comments",
                      color: "var(--dk-sky)",
                      values: interactions.series.map((item) => item.comments),
                    },
                    {
                      label: "likes",
                      color: "var(--dk-success)",
                      values: interactions.series.map((item) => item.likes),
                    },
                    {
                      label: "post likes",
                      color: "var(--dk-slate)",
                      values: interactions.series.map((item) => item.postLikes),
                    },
                    {
                      label: "comment likes",
                      color: "var(--dk-error)",
                      values: interactions.series.map((item) => item.commentLikes),
                    },
                  ]}
                  onHoverChange={setActiveInteractionsIndex}
                />
              </Panel>
            </AnalyticsGrid>
          ) : (
            <ChartEmpty>No interaction analytics loaded yet.</ChartEmpty>
          )}
        </Section>
      </Dashboard>
    </Page>
  )
}

function SingleLineChart({
  data,
  color,
  onHoverChange,
}: {
  data: LineChartDatum[]
  color: string
  onHoverChange?: (point: LineChartDatum | null) => void
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  if (!data.length) {
    return <ChartEmpty>No data returned for this range.</ChartEmpty>
  }

  const width = 760
  const height = 240
  const padding = 20
  const maxValue = Math.max(...data.map((point) => point.value), 1)

  const pointData = data.map((point, index) => {
    const x =
      data.length === 1
        ? width / 2
        : padding + (index / (data.length - 1)) * (width - padding * 2)
    const y =
      height - padding - (point.value / maxValue) * (height - padding * 2)

    return { x, y, label: point.label, value: point.value }
  })

  const activePoint =
    activeIndex !== null ? pointData[activeIndex] : pointData[pointData.length - 1]

  useEffect(() => {
    onHoverChange?.(
      activeIndex !== null
        ? { label: activePoint.label, value: activePoint.value }
        : null
    )
  }, [activeIndex, activePoint.label, activePoint.value, onHoverChange])

  return (
    <>
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        <line
          x1={activePoint.x}
          x2={activePoint.x}
          y1={padding}
          y2={height - padding}
          stroke="rgba(51, 65, 85, 0.35)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="3"
          points={pointData.map((point) => `${point.x},${point.y}`).join(" ")}
        />
        {pointData.map((point, index) => (
          <g key={point.label}>
            <circle
              cx={point.x}
              cy={point.y}
              r={(activeIndex ?? pointData.length - 1) === index ? 5 : 0}
              fill={color}
            />
            <rect
              x={index === 0 ? 0 : (pointData[index - 1].x + point.x) / 2}
              y="0"
              width={
                index === pointData.length - 1
                  ? width - (index === 0 ? 0 : (pointData[index - 1].x + point.x) / 2)
                  : ((point.x + pointData[index + 1].x) / 2) -
                    (index === 0 ? 0 : (pointData[index - 1].x + point.x) / 2)
              }
              height={height}
              fill="transparent"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          </g>
        ))}
      </svg>
      <ChartMeta>
        {formatBucketDate(activePoint.label)}: {activePoint.value}
      </ChartMeta>
      <ChartMeta>
        {formatBucketDate(data[0]?.label)} to {formatBucketDate(data[data.length - 1]?.label)}
      </ChartMeta>
    </>
  )
}

function MultiLineChart({
  labels,
  series,
  showLegend = true,
  onHoverChange,
}: {
  labels: string[]
  series: MultiLineChartSeries[]
  showLegend?: boolean
  onHoverChange?: (index: number | null) => void
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  if (!labels.length || !series.length) {
    return <ChartEmpty>No data returned for this range.</ChartEmpty>
  }

  const width = 760
  const height = 260
  const padding = 20
  const maxValue = Math.max(...series.flatMap((item) => item.values), 1)

  const buildPoints = (values: number[]) =>
    values
      .map((value, index) => {
        const x =
          values.length === 1
            ? width / 2
            : padding + (index / (values.length - 1)) * (width - padding * 2)
        const y =
          height - padding - (value / maxValue) * (height - padding * 2)

        return `${x},${y}`
      })
      .join(" ")

  const resolvedIndex = activeIndex ?? labels.length - 1
  const activeLines = series.map((line) => {
    const value = line.values[resolvedIndex]
    const x =
      labels.length === 1
        ? width / 2
        : padding + (resolvedIndex / (labels.length - 1)) * (width - padding * 2)
    const y =
      height - padding - (value / maxValue) * (height - padding * 2)

    return {
      ...line,
      value,
      x,
      y,
    }
  })

  useEffect(() => {
    onHoverChange?.(activeIndex)
  }, [activeIndex, onHoverChange])

  return (
    <>
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        <line
          x1={activeLines[0].x}
          x2={activeLines[0].x}
          y1={padding}
          y2={height - padding}
          stroke="rgba(51, 65, 85, 0.35)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        {series.map((line) => (
          <polyline
            key={line.label}
            fill="none"
            stroke={line.color}
            strokeWidth="3"
            points={buildPoints(line.values)}
          />
        ))}
        {labels.map((label, index) => {
          const x =
            labels.length === 1
              ? width / 2
              : padding + (index / (labels.length - 1)) * (width - padding * 2)

          return (
            <g key={label}>
              {series.map((line) => {
                const value = line.values[index]
                const y =
                  height - padding - (value / maxValue) * (height - padding * 2)

                return (
                  <circle
                    key={`${label}-${line.label}`}
                    cx={x}
                    cy={y}
                    r={resolvedIndex === index ? 4 : 0}
                    fill={line.color}
                  />
                )
              })}
              <rect
                x={
                  index === 0
                    ? 0
                    : (x +
                        (labels.length === 1
                          ? width / 2
                          : padding +
                            ((index - 1) / (labels.length - 1)) *
                              (width - padding * 2))) /
                      2
                }
                y="0"
                width={
                  index === labels.length - 1
                    ? width -
                      (index === 0
                        ? 0
                        : (x +
                            (labels.length === 1
                              ? width / 2
                              : padding +
                                ((index - 1) / (labels.length - 1)) *
                                  (width - padding * 2))) /
                          2)
                    : ((x +
                        (labels.length === 1
                          ? width / 2
                          : padding +
                            ((index + 1) / (labels.length - 1)) *
                              (width - padding * 2))) /
                        2) -
                      (index === 0
                        ? 0
                        : (x +
                            (labels.length === 1
                              ? width / 2
                              : padding +
                                ((index - 1) / (labels.length - 1)) *
                                  (width - padding * 2))) /
                          2)
                }
                height={height}
                fill="transparent"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              />
            </g>
          )
        })}
      </svg>
      {showLegend && (
        <ChartLegend>
          {series.map((line) => (
            <ChartLegendItem key={line.label}>
              <span style={{ backgroundColor: line.color }} />
              <label>{line.label}</label>
            </ChartLegendItem>
          ))}
        </ChartLegend>
      )}
      <ChartMeta>
        {formatBucketDate(labels[resolvedIndex])}:{" "}
        {series.map((line) => `${line.label} ${line.values[resolvedIndex]}`).join(" | ")}
      </ChartMeta>
      <ChartMeta>
        {formatBucketDate(labels[0])} to {formatBucketDate(labels[labels.length - 1])}
      </ChartMeta>
    </>
  )
}

function formatBytes(value: number) {
  const units = ["B", "KB", "MB", "GB"]
  let size = value
  let unitIndex = 0

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex += 1
  }

  return `${size.toFixed(size >= 10 ? 0 : 1)} ${units[unitIndex]}`
}

function formatDateTime(value: string) {
  return new Date(value).toLocaleString()
}

function formatRange(range?: Range) {
  if (!range) {
    return "No range loaded"
  }

  return `${range.days} days, ${range.timezone}`
}

function formatBucketDate(value?: string) {
  if (!value) {
    return ""
  }

  const [year, month, day] = value.split("-")

  if (!year || !month || !day) {
    return value
  }

  return `${day}/${month}/${year}`
}
