<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# ============================================
# PN2B Tracking V3
# Project Working Rules
# ============================================
Version: 3.0.0

Last Updated: 2026-07-18

## Project

Project Name: PN2B Tracking V3

Framework:
- Next.js 16
- TypeScript
- Tailwind CSS
- Framer Motion

Goal:

Redesign the existing website into a modern, premium parcel tracking website.

The approved design reference provided by the user is the ONLY design target.

Never redesign using your own imagination.

---

# General Rules

Always analyze before editing.

Never rewrite the entire project.

Never break existing business logic.

Never remove existing functionality.

Never modify unrelated files.

Prefer improving existing components instead of creating new ones.

Keep code reusable.

Keep folder structure clean.

---

# Sprint Workflow

Work only ONE sprint at a time.

Never work on multiple sprints together.

Sprint Order

1. Foundation
2. Navbar
3. Hero
4. Tracking Form
5. Courier Section
6. Notice
7. Footer
8. Responsive
9. Motion
10. Polish

Do not continue to the next sprint until the current sprint is finished.

---

# File Protection

Only modify files related to the current sprint.

Example

Sprint 2

Allowed

- Navbar.tsx
- globals.css (only if required)

Forbidden

- Hero.tsx
- TrackingForm.tsx
- Footer.tsx
- CourierSection.tsx

---

# UI Principles

Theme

- Modern
- Premium
- Minimal
- Logistics
- Clean
- Professional

Avoid

- Glassmorphism
- Heavy shadows
- Random gradients
- Different button styles
- Different card styles
- Multiple font families

---

# Design Tokens

Primary

#E60012

Hover

#C90010

Background

#FAFAFA

Card

#FFFFFF

Border

#ECECEC

Text

#181818

Muted

#6B7280

Success

#16A34A

---

# Component Rules

Buttons

All buttons must share the same design language.

Inputs

All inputs must share the same style.

Cards

All cards must share the same spacing, border radius and shadow.

Icons

Use one icon library only.

---

# Code Quality

Prefer reusable components.

Avoid duplicated code.

Avoid unnecessary state.

Avoid unnecessary packages.

Avoid inline styles.

Keep components small.

Prefer composition.

---

# Responsive

Desktop

Laptop

Tablet

Mobile

Every change must work correctly on all screen sizes.

---

# Animation

Use Framer Motion.

Animations must be subtle.

No excessive movement.

---

# Before Editing

Always explain

Current Sprint

Target File

Reason

Files to Modify

Files NOT to Modify

---

# Before Finishing

Run build.

Fix TypeScript errors.

Fix ESLint errors.

Check responsive.

Summarize modified files.

Do not say "Finished" until build succeeds.

---

# Git Rules

Do not change branches.

Do not reset commits.

Do not rewrite Git history.

Never delete files unless explicitly requested.

---

# Final Rule

If uncertain,

STOP.

Explain the issue.

Ask before making risky changes.