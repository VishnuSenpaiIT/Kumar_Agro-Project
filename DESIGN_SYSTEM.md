# EMS Enterprise Design System

Our Employee Management System (EMS) follows a strict minimalist enterprise design language, focusing on clarity, professionalism, and high usability.

## 🎨 Color Palette

| Category | Role | Hex Code |
| :--- | :--- | :--- |
| **Primary** | Olive Green | `#6B8E23` |
| | Dark Olive | `#556B2F` |
| | Light Olive (Hover) | `#8FAF3C` |
| **Neutrals** | Background | `#F8F9F5` |
| | Card Surface | `#FFFFFF` |
| | Border | `#E0E0E0` |
| | Text Primary | `#2E2E2E` |
| | Text Secondary | `#6B6B6B` |
| **Status** | Present (Success) | `#DAF2E3` |
| | Absent (Error) | `#FCE8E8` |
| | Mis-punch (Warning) | `#FEF3D9` |

## 🏷️ Typography

- **Font Family:** Inter (Sans-serif)
- **Scales:**
  - Header 1: `22px` / Bold
  - Header 2: `18px` / Bold
  - Body: `14px` / Normal
  - Caption: `12px` / Medium
- **Weights:** Normal (400), Medium (500), Bold (600/700)

## 📏 Spacing & Geometry

- **Grid Gap:** `24px` (Large)
- **Component Padding:** `16px - 20px`
- **Border Radius:**
  - Cards: `8px`
  - Interactive: `6px`

## 🧱 Components (Tailwind Classes)

- **Cards:** `.enterprise-card` (White bg, light border, 8px radius)
- **Buttons:**
  - `.btn-primary` (Branded olive background)
  - `.btn-secondary` (Outlined olive style)
- **Inputs:** `.input-field` (Standard bordered input with olive focus)

## ✨ Motion Strategy

- No decorative animations.
- **Subtle Interactions:** `200ms` transitions on hover states for buttons and cards only.
- **Loading:** Minimal Pulse effects on status indicators where applicable.
