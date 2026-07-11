import styled from "styled-components"

const Frame = styled.figure`
  margin: 0;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--dk-paper);
  box-shadow: var(--shadow-lift);
`

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.25rem;
  padding-inline: 0.9rem;
  border-bottom: 1px solid rgba(15, 23, 42, 0.07);
  background: #fbfcfe;

  span {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: rgba(15, 23, 42, 0.12);
  }
`

const Url = styled.div`
  margin-left: 0.75rem;
  font-size: var(--text-xs);
  color: var(--dk-slate);
  opacity: 0.65;
`

const Shot = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

type Props = {
  src: string
  alt: string
  eager?: boolean
}

export default function BrowserFrame({ src, alt, eager }: Props) {
  return (
    <Frame>
      <Bar aria-hidden="true">
        <span />
        <span />
        <span />
        <Url>daykeeper.app</Url>
      </Bar>
      <Shot
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </Frame>
  )
}
