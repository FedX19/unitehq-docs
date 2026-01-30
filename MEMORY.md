UniteHQ — project summary and user preferences

Project: UniteHQ
Summary: UniteHQ is an all-in-one sports organization operating system that powers youth sports organizations, academies, coaches, parents, and players. Multi-tenant, role-based, and brand-aware, it centralizes communication, player development, scheduling, documents, and evaluations under one backend platform.

Who it's for (roles):
- Organization/Admin (Academy, League, Program Owner): manage orgs, teams, permissions, announcements, branding, schedules.
- Coaches: evaluate players, trigger player development plans, manage rosters, share practice plans, DM staff and parents.
- Players & Parents: view schedules, receive announcements, access documents, view player evaluations and development plans.

Core product pillars:
1. Player Development Engine — structured evaluations -> automated personalized player plans -> delivered to parents/players (drills, coaching language, videos).
2. Role-Based Architecture — role and org-scoped permissions to ensure proper access and multi-tenant safety.
3. Organization-First Data Model — everything lives under an organization for clean data isolation and white-labeling.
4. Communication Built for Sports — purpose-built announcements, contextual messaging, MDC ↔ Coach flows.
5. Content & Knowledge Hub — practice plans, drill libraries, video integrations, organization-specific resources.

Branding/White-label: Platform supports different front-end branding per org while sharing the same backend.

Tech notes:
- Next.js (app router), TypeScript
- Supabase for auth & data
- Vercel for deploys/previews
- Stripe for billing & webhooks
- Emphasis: infrastructure before polish; prevent cross-org data leaks; server-side role resolution

Current focus/branch:
- feat/self-cancel-email — self-serve cancellation email flow; recent commits include making email idempotent and reusing sendMdcCancellationEmail helper.

User preferences (from Tim):
- Default model policy: soft (ask before persistent changes)
- Reply tagging: yes (prefix replies with model)
- Logging: model-usage.csv enabled (memory/model-usage.csv)
- Proactive style: assertive; pushback allowed. Agent should think for itself and recommend actions.

Grand vision & go-to priorities (from Tim):
- Long-term vision: Enable individual coaches and academies to monetize their player development systems on UniteHQ (coach storefronts, subscription/payments, branded operations cards, plan editors, and marketplace). Platform monetization options: platform cut per subscription or monthly creator subscription (undecided).
- Immediate operational priority: Keep the main thing the main thing — focus on current customers and onboarding readiness for the upcoming little league season.
  - Current rollout targets: ~400+ families and coaches expected for season start.
  - Active customers: 20+ coaches (East Chatham Little League), 10+ coaches (West Raleigh Little League).
  - Plan: Provide free beta access to select individual parents Tim has relationships with.

Agent behavior notes:
- Save grand vision to memory and use it to guide strategic recommendations; do not let it distract from immediate operational priorities.
- Prioritize work that keeps the product stable and ready for the season (bug fixes, deploy stability, onboarding flows, communication clarity).

Do not modify this file without explicit confirmation from Tim.
