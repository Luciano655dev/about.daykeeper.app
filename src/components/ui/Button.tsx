import styled, { css } from "styled-components"

const base = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  line-height: 1;
  padding: 0.875rem 1.5rem;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out),
    background-color 0.2s var(--ease-out), border-color 0.2s var(--ease-out);

  &:active {
    transform: translateY(1px);
  }
`

export const PrimaryButton = styled.a`
  ${base}
  background: var(--dk-sky-deep);
  color: #ffffff;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px -8px rgba(74, 158, 245, 0.6);
  }
`

export const GhostButton = styled.a`
  ${base}
  background: transparent;
  color: var(--dk-ink);
  border: var(--border-soft);

  &:hover {
    border-color: rgba(15, 23, 42, 0.2);
    background: rgba(234, 242, 255, 0.4);
  }
`
