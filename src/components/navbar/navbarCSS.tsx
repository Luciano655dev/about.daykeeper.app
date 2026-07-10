import styled from "styled-components"
import { Link } from "react-router-dom"

export const Header = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid
    ${({ $scrolled }) => ($scrolled ? "rgba(15, 23, 42, 0.08)" : "transparent")};
  transition: border-color 0.3s var(--ease-out);
`

export const Nav = styled.nav`
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 2.5rem);
  height: 4.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
`

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;

  img {
    height: 1.75rem;
    display: block;
  }
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-8);
  margin-left: auto;

  @media (max-width: 720px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--dk-slate);
  transition: color 0.2s var(--ease-out);

  &:hover {
    color: var(--dk-ink);
  }
`

export const NavCta = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: var(--text-sm);
  font-weight: 600;
  line-height: 1;
  color: #ffffff;
  background: var(--dk-sky-deep);
  padding: 0.625rem 1.25rem;
  border-radius: var(--radius-full);
  transition: transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px -8px rgba(74, 158, 245, 0.6);
  }

  @media (max-width: 720px) {
    display: none;
  }
`

export const MenuButton = styled.button<{ $open: boolean }>`
  display: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: 720px) {
    display: block;
  }

  span {
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    height: 2px;
    border-radius: 2px;
    background: var(--dk-ink);
    transition: transform 0.3s var(--ease-out), opacity 0.3s var(--ease-out),
      top 0.3s var(--ease-out);

    &:nth-child(1) {
      top: ${({ $open }) => ($open ? "calc(50% - 1px)" : "0.8rem")};
      transform: ${({ $open }) => ($open ? "rotate(45deg)" : "none")};
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
      opacity: ${({ $open }) => ($open ? 0 : 1)};
    }
    &:nth-child(3) {
      top: ${({ $open }) => ($open ? "calc(50% - 1px)" : "calc(100% - 0.8rem - 2px)")};
      transform: ${({ $open }) => ($open ? "rotate(-45deg)" : "none")};
    }
  }
`

export const MobileSheet = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    position: fixed;
    top: 4.25rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: var(--dk-paper);
    padding: var(--space-6) clamp(1.25rem, 4vw, 2.5rem);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    transform: ${({ $open }) => ($open ? "none" : "translateY(-8px)")};
    transition: opacity 0.25s var(--ease-out), transform 0.25s var(--ease-out),
      visibility 0.25s;
  }
`

export const MobileLink = styled(Link)`
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--dk-ink);
  padding: var(--space-3) 0;
  border-bottom: var(--border-soft);
`

export const MobileCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-base);
  font-weight: 600;
  color: #ffffff;
  background: var(--dk-sky-deep);
  padding: 1rem 1.5rem;
  border-radius: var(--radius-full);
  margin-top: var(--space-6);
`
