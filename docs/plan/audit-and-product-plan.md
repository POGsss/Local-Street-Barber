# Local Street Barber — Product Audit & Plan

**Status:** Discovery draft; first-customer direction and initial visual identity confirmed from user input; shop workflow, pricing, and detailed brand rules still need confirmation  
**Prepared:** 27 October 2026  
**Audience:** Prototype planning and first owner meeting

## 1. Executive summary

The idea has a strong practical center: bring customer discovery, appointments, and walk-ins into one manageable shop workflow. The initial list is much broader than a first sellable pilot. A barbershop needs reliable availability, clear customer expectations, and a simple staff view before it needs generative AI, loyalty, inventory, or a large customer account system.

Recommended first product: a mobile-first shop website plus a small staff dashboard that can support **appointments and walk-ins as separate flows**. Customers can view verified services and shop information, request a real appointment slot, or use a shop QR code to join today's walk-in line. Staff can see and update both lists from one operational view.

The user confirmed the first implementation should be custom-made for Local Street Barber, with future reusability for other brands as a design consideration. Build and validate one shop's experience first. Keep brand content and theme settings separate from reusable interface and workflow code, while deferring multi-tenant accounts, billing, and self-service brand setup. The first version must include both appointments and walk-in queueing; the owner meeting still needs to settle how those flows work together on a busy day.

The initial market scan found Philippine products already marketing many requested features, including booking, walk-ins/queues, branded pages, GCash deposits, reminders, barber records, and reporting. So a longer feature checklist is not a defensible sales pitch by itself. First decide whether the offer is a custom implementation for this shop or a repeatable SaaS product for many shops; the discovery and engineering choices differ.

## 2. Evidence and limits of this audit

The provided public reference is the [Local Street Barber Facebook page](https://www.facebook.com/LOCALSTREETBARBER/). Automated access to the live page was throttled, but the user supplied `logo.jpg` and `facebook.png` in the repository. The visual notes in section 5 are limited to those screenshots; they do not establish current services, prices, location, hours, policies, or the full brand voice.

The technical recommendation uses the current Vite React TypeScript scaffold and Supabase's managed Postgres model. Supabase documentation describes Postgres as the foundation for its Auth, Storage, and Realtime products; it also stresses that exposed tables need appropriate Row Level Security (RLS) policies. See [Vite Getting Started](https://vite.dev/guide/), [Supabase Database Overview](https://supabase.com/docs/guides/database/overview), and [Supabase's build guidance](https://supabase.com/docs/guides/getting-started/the-supabase-way-to-build).

Privacy is a product requirement, especially if the hairstyle preview accepts a face photo. The Philippine Data Privacy Act sets principles including transparency, legitimate purpose, proportionality, and retention limits. In August 2026, the National Privacy Commission also stated that a person's face and likeness are personal information and that generating media from it is personal-data processing. Obtain qualified privacy advice before a production photo feature; this is product planning, not a legal opinion. See the [Data Privacy Act](https://privacy.gov.ph/data-privacy-act/) and [NPC notice on AI-generated likenesses](https://privacy.gov.ph/notice-to-the-public-use-of-real-persons-likenesses-in-ai-generated-images/).

## 3. Initial market scan

This is a quick scan of vendor-published feature pages, not hands-on product testing or proof of customer adoption. Product claims and prices can change; recheck them before making a sales comparison.

| Example product | What its current public page markets | Planning implication |
| --- | --- | --- |
| [Reserve.ph](https://reserve.ph/) | Philippine business booking pages, staff schedules, waitlist, reminders, deposits through local payment methods, reporting, multi-branch features, and customer intake forms. | Booking, reminders, and GCash/Maya support are already part of the local comparison set. |
| [Booking Mo](https://bookingmo.com/) | Philippine booking links, QR sharing, guest browser booking, staff scheduling, and a dashboard that combines online bookings with manually added walk-ins. | A no-download customer flow and QR entry are not unique differentiators. |
| [ClipprOS](https://www.getclippr.app/) | Barbershop-focused booking, live walk-in queue, haircut-history CRM, per-barber analytics, GCash downpayments, branded storefronts, and an AI shop assistant. | Even the barber-specific bundle overlaps heavily with the initial idea, including AI. |

At the time of review, the public pricing pages listed entry plans around **₱499/month (Booking Mo Pro), ₱599/month (ClipprOS), and ₱900/month (Reserve Silver)**. Plans, promotions, limits, and included support differ, so these are only price anchors—not a like-for-like quote or an estimate of the custom build's value. Recheck before using them in a sales conversation.

### Business position

- **Confirmed first customer:** build the first version for Local Street Barber's approved brand and actual operating rules. The showcase should demonstrate why this tailored setup fits the shop rather than presenting a generic product shell.
- **Reusability direction:** separate the logo, colors, copy, contact details, service catalog, and shop policies from the shared booking, queue, and dashboard components. Keep one shop's deployment and admin experience for now. Consider multi-tenant SaaS only after a second shop validates the shared workflow and asks for the product.
- **Commercial hypothesis:** price a pilot only after defining setup, hosting, maintenance/support, data migration, notification/payment fees, and ownership. A setup fee plus recurring hosting/support is one model to test for a custom deployment; it is not a validated price recommendation. For SaaS, test monthly willingness-to-pay against existing local alternatives and the value the shop can measure.
- **Sales test:** ask what Local Street Barber cannot accomplish with current channels or an off-the-shelf subscription. If the need is only a booking link and calendar, a subscription may be more practical than custom software; a custom system needs a clear added value in brand fit, queue operations, workflow, or support.

## 4. Product goals and validation

### Intended outcomes

- Reduce missed appointments and customer uncertainty about when they can be served.
- Give staff one clear source for today's bookings and walk-in queue.
- Make services, prices, barbers, location, and policies easy to verify before a visit.
- Give the owner a small set of controls that match how the shop actually operates.
- Create a polished demo that can support a discovery and sales conversation without pretending unverified policies are real.

### Validate before treating these as requirements

1. Is the actual pain missed calls/messages, long walk-in waits, schedule collisions, no-shows, weak social reach, or something else?
2. The first version will support both appointments and walk-ins. When they overlap, what rules decide who is served next and how should staff communicate a delay?
3. Who will operate the dashboard during a shift, and what devices do they use?
4. What measurable result would justify paying for this system (fewer missed bookings, less time answering messages, shorter perceived waits, more repeat visits)?
5. Which parts of the product should be uniquely Local Street Barber, and which shop details should be configurable if another brand uses it later?

Do not assume that adding AI or more modules makes the product easier to sell. Start with the workflow the owner values enough to adopt.

## 5. Branding audit and proposed direction

### Findings from supplied screenshots

- The supplied logo is a black-on-white mark: a large stylized outlined **LSB** monogram, an airplane silhouette above it, a small “EST.” mark on the plane, and **WORLDWIDE** below. The year beside “EST.” is too small to confirm from this copy.
- The supplied Facebook screenshot uses a mostly black/gray cover with oversized white uppercase lettering; **“SWAG &”** is visible, but the rest of the phrase is cropped/obscured. Do not turn that fragment into a site tagline until the full cover or owner confirms it.
- The page name appears as **LOCALSTREETBARBER**, with a Facebook category of **Barber Shop**. The screenshot shows about **30K followers at capture time**; treat that as a screenshot detail, not a live count.
- The clearest supported visual direction is high-contrast monochrome with bold lettering and a street-oriented feel. The Facebook interface's blue is platform chrome, not evidence of the shop's brand color.

This is an initial visual read from two user-provided images, not a full audit of the page feed. Confirm logo usage, exact tagline, photography, and writing style with the owner before finalizing the design.

### Capture this before visual design is finalized

- Higher-resolution/vector logo and the complete cover image so small marks and the full headline can be read.
- 8–12 recent posts and a few posts the owner considers most representative.
- Current services, prices, opening hours, address/branch, booking/contact method, and any booking rules shown publicly.
- Shop-approved photos of the interior, barbers, and finished cuts; confirm permission and image credits.
- Preferred spelling, language mix, local terms, tone, and any phrase/tagline customers already recognize.
- Any colors, fonts, or logo files the owner wants preserved; ask what may be changed.

### Layout hypothesis to take into discovery

Keep the site mobile-first, direct, image-led, and practical. Start from the supplied black-and-white LSB mark, bold uppercase display lettering, and high-contrast cover treatment. Pair those with a restrained black/white/gray UI and real shop-approved cut photography; choose any additional accent only after reviewing more posts or asking the owner. Use a readable sans-serif for booking forms and staff tools, and reserve display type for headings. Keep appointment and queue actions prominent. Avoid copying the Facebook platform blue or adding barber-pole imagery that is not present in the supplied brand material.

**Public site structure**

1. **Home:** compact header; hero photo and one sentence on the shop; primary “Book an appointment” action; secondary “Join today's walk-in queue”; verified location and hours; service highlights; recent work; short “what to expect”; footer with contact and social links.
2. **Services:** service names, descriptions, durations, prices, add-ons, and eligibility/age notes only after owner confirmation.
3. **Book:** service → barber preference (optional) → date/time → customer contact → review policy → confirmation. Show local timezone and clear cancellation/reschedule path.
4. **Walk-in queue:** explain that this is a live same-day line, request only the minimum identity/contact data, issue a ticket, show status and approximate wait without exposing other customers.
5. **Work / gallery:** owner-approved cut photos with style labels and permission/credits.
6. **About / visit:** shop story, confirmed team, address, map link, hours, accessibility/contact details.
7. **Staff dashboard:** today's appointment list and live walk-in queue; quick status changes; schedule/service settings for an owner role.

The “library of works” belongs in the customer-facing site as a curated gallery. It does not need a separate customer account or upload community in the first release.

## 6. Feature audit and recommended scope

### P0 — Local Street Barber showcase prototype (synthetic data)

- Public home, services, gallery, about/location, and clear contact actions.
- Appointment booking flow with sample services, barber availability, and explicit confirmation state.
- Separate walk-in QR entry flow for the current day, ticket number/status, and estimated wait display.
- Staff view of the day's bookings and walk-in line with statuses such as waiting, called, in chair, completed, canceled, and no-show.
- Basic owner controls for opening hours, closures, service names/prices/durations, barber schedules, and queue state.
- Responsive layouts and empty/error/loading states, including “shop closed,” “no slots,” and “queue paused.”
- Demo data clearly labeled. Avoid collecting real customer information during an unapproved demo.

The prototype can use a local in-memory or seeded demo dataset. Apply Local Street Barber's supplied mark and monochrome direction to the showcase, with text and shop details kept in configuration/data so another brand can be supported later. Do not build multi-tenant management yet. Do not wire live messages, payments, customer photos, or real shop scheduling until access and policies are agreed.

### P1 — single-shop pilot after workflow sign-off

- Persist bookings, services, schedules, queue tickets, and status history in Supabase Postgres.
- Staff/owner authentication and role permissions; enforce private access with reviewed RLS or a server-side authorization boundary.
- Booking conflict prevention on the server/database, including service duration, barber availability, breaks, closures, and buffer time.
- Guest booking with confirmation and cancellation/reschedule rules; accounts should be optional unless the shop has a clear account-based use case.
- QR-based queue join and a staff-operated live queue. Show a ticket code/status to customers, not other people's names or phone numbers.
- Customer reminders/updates through one chosen channel after cost, consent, and operational ownership are clear.
- Basic activity log and owner-facing daily counts: bookings, walk-ins, completed visits, cancellations, and no-shows.
- Backup, error monitoring, privacy notice, retention schedule, and a tested staff fallback if internet/service is down.

### P2 — add only if discovery demonstrates value

- Deposits or online payment, if no-shows are costly and the shop wants that policy.
- Loyalty/rebooking, customer history, product sales/POS, inventory, staff commissions, and multi-branch reporting.
- Review requests and referral offers with clear opt-out controls.
- FAQ chatbot grounded only in approved shop data, with “I don't know” behavior and a handoff to the shop's actual contact channel. It must not invent prices, confirm availability, or change an appointment unless connected to the verified booking system.
- Multi-location support only if the business needs it, not as speculative complexity.

### P3 — experimental AI hairstyle preview

The proposed “6×6 grid” needs clarification: it could mean 36 different hairstyle options, or a matrix of views/variants. Thirty-six photorealistic outputs per selfie will increase latency, provider cost, quality variance, and privacy exposure. A better first experiment is a small owner-approved catalog (for example 6–12 offered styles), with one generated preview per selected style and a clear disclaimer that it is illustrative, not a guaranteed haircut result. The customer can compare a few results and open one larger preview; there is no need to make a sprite sheet the underlying data model.

Before any live pilot, decide: supported styles, minors policy, consent language, whether photos leave the device, which model/provider processes them, whether the provider retains prompts/images, storage location, deletion timing, output moderation, and support/removal procedure. Default to not persisting source selfies or results. If remote generation is used, explain that before upload and obtain appropriate consent. Never put provider secrets in React code. Do not build face recognition or identity matching into this tool.

For the showcase, make the interaction a clickable prototype using synthetic sample portraits and clearly labeled example outputs. Do not send real customer selfies to a third-party model during a demo.

## 7. Distinguish appointment booking from walk-in reservation

“Booking,” “reservation,” and “queue” should not be synonyms in the interface or database.

- **Appointment:** a future time slot reserved against a service, barber (if chosen), duration, and capacity. Availability must be checked again by the API when submitted; a previously displayed slot can become unavailable.
- **Walk-in queue ticket:** a place in today's shop-operated line, with queue state and approximate wait. It is not a guaranteed appointment time. Let staff pause or close the line.
- **Payment/deposit:** an optional later policy, not implied by “reservation.” It requires clear refund/cancellation rules and a payment provider decision.

Recommended initial policy: let the owner choose whether QR tickets are issued only inside the shop or remotely. Remote queue joining can cause abuse and inaccurate wait times if customers do not arrive. If remote entry is enabled later, require a check-in deadline or staff-confirmed arrival and rate-limit ticket creation.

## 8. Roles and core end-to-end flows

### Roles

- **Customer:** browse verified details, book or join queue, check their own confirmation/ticket, cancel under the shop policy.
- **Staff/barber:** see assigned/today's work, call the next ticket, move a visit through statuses, mark no-show/completed.
- **Owner/manager:** edit catalog, hours, schedules, closure dates, queue state, and staff access; review operational totals.

### Demo scripts

1. Customer chooses a service and optional barber, selects an available time, enters contact details, reviews the policy, and receives a booking confirmation.
2. Staff sees the booking in the correct day view and can change its status; another booking cannot silently take an overlapping slot.
3. A walk-in scans the shop QR, gets a ticket, and sees their own status. Staff calls them and moves them into the chair; the customer view updates.
4. Owner pauses the queue, blocks a barber's time, and changes a service price/duration; customer-facing availability reflects the change.
5. Customer sees closed/no availability/connection error states and gets a clear way to contact the shop.

## 9. Technical plan

### Proposed stack

- **Frontend:** React + TypeScript + Vite, mobile-first responsive customer site and staff dashboard.
- **API:** Node.js + Express + TypeScript, retaining the requested PERN structure.
- **Database:** Supabase-managed Postgres. Add Supabase Auth, Storage, and Realtime only as their use cases arrive.
- **Deployment:** choose after hosting budget, domain, data-region, and operational ownership are agreed; keep preview and production projects separate.

Supabase already provides a Postgres-backed API. To avoid maintaining a redundant CRUD proxy, use Express for shop-specific booking/queue rules, privileged integrations, notifications, and secrets; keep data constraints and authorization rules in Postgres too. A public browser key is not an authorization boundary. Never expose a Supabase service-role/secret key in the frontend. Review RLS for every table that the browser can reach.

### Likely data areas (not a finalized schema)

- shop/location and opening hours/closures
- staff/barbers and schedule blocks
- services and optional add-ons
- appointment and status history
- daily walk-in queue entries and queue configuration
- portfolio images/credits/permission record
- user/staff profiles and roles
- notification delivery records and audit events

Build one Local Street Barber deployment first. Keep brand-specific values (logo, palette, copy, contact links, service catalog, and policies) in an isolated configuration/data layer, while keeping booking, queue, and dashboard behavior in shared components. A future shop/location identifier can make data ownership clear, but defer tenant selection, subscription billing, cross-shop admin, and self-service theme editing until another shop validates the need. Appointment overlap prevention belongs in the trusted backend/database path, not only in a React calendar. Queue views must not disclose other customers' personal information. Storage policies for private uploads need separate review from table RLS.

## 10. Risks and controls

| Risk | Why it matters | Early control |
| --- | --- | --- |
| Shop process is unknown | The product can solve the wrong problem or disrupt staff habits. | Interview owner and at least one staff member; map a real busy-day flow before locking features. |
| Bookings conflict with walk-ins | A calendar may look correct but not reflect chair capacity or walk-in priority. | Agree service durations, buffer, barber capacity, and priority rules; validate server-side. |
| Queue estimates mislead customers | A digital queue becomes a promise while barber speed varies. | Label waits approximate; allow staff to pause/edit; show status rather than precise guarantee. |
| Staff do not adopt dashboard | Extra operational steps can make the system slower than Messenger/paper. | Design for the device used at the counter; quick status controls; run a short staff pilot. |
| Real customer data is exposed | Contact data, bookings, and uploaded photos are sensitive operational information. | Minimize fields, set retention/deletion, restrict staff roles, review RLS/API access and backups. |
| AI photo provider retains images | The selfie/likeness may be processed outside the shop's own system. | No live photo feature until consent, vendor terms, retention, deletion, and user messaging are approved. |
| Scope balloons | AI, payments, POS, loyalty, and multi-branch work can delay the core demo. | Keep P0 to booking + queue + staff operations; gate later modules by evidence. |
| Prototype is mistaken for production | Sample data or placeholder rules could mislead a buyer. | Label demo data; show assumptions; do not promise production behavior until access, security, and support are ready. |

## 11. Discovery meeting guide

Bring a short flow storyboard and use these questions. Ask the owner to show the current process rather than describe an ideal future only.

### Shop and brand

1. Is the supplied LSB logo current and approved for the site? Can the owner share a high-resolution/vector version and confirm any rules for using the mark?
2. Which Facebook posts best represent the shop? May the site reuse those photos, and who owns/approved them?
3. What services, prices, duration ranges, add-ons, and barber specialties are current? Who updates them?

### Daily operations

4. Walk me through opening, serving a walk-in, handling a booking, a barber break, a late arrival, and closing.
5. How many barbers/chairs are active per shift? Can customers request a specific barber? Are all services offered by all barbers?
6. What channel handles bookings now (walk-in, phone, Facebook Messenger, paper, another app)? What breaks or creates rework?
7. When appointments and walk-ins overlap, who gets served next, and how should staff record or explain delays?
8. What are the rules for late arrivals, cancellation, no-shows, rescheduling, deposits, and customers who arrive early?
9. Should a QR queue work only inside the shop, or allow remote joining? What should happen if someone does not arrive when called?

### Adoption, economics, and ownership

10. Who will use the dashboard and on what device/network? What should happen during an internet outage?
11. What result would make the system worth paying for? Is the preferred deal a setup fee, subscription, support contract, or another arrangement?
12. Who owns the domain, customer records, photos, and software configuration? Who handles support, updates, backups, and staff onboarding?
13. What channels (SMS, email, Messenger) are acceptable, and is there a budget/consent process for notifications?
14. Are customer accounts necessary, or should guest booking be the default?
15. Have you tried any booking/queue software? What did you like, reject, or find missing, and why would a custom system be better?
16. Would customers actually use an AI hairstyle preview? Which styles are offered, and would staff accept the generated preview as a useful consultation aid?

### Close the meeting with

- Agree one target user and one primary workflow for the first pilot.
- Confirm which demo data and brand assets may be used.
- Identify who can approve service rules, privacy messaging, and design.
- Define one success measure and a short pilot review date.

## 12. Roadmap and gates

1. **Discovery:** collect brand assets and workflow answers; observe a real shop day if possible; confirm buying decision and success metric.
2. **Experience definition:** wireframe public pages, booking, QR queue, and staff board; write rules and error states; review with owner/staff.
3. **Showcase prototype:** use sample data to demonstrate the five scripts in section 7; mark assumptions; collect usability feedback.
4. **Pilot foundation:** agree production scope and support; create Supabase project/schema, authentication, access policies, API rules, deployment, backups, and privacy/retention documentation.
5. **Pilot:** operate with one shop, a limited staff group, and a manual fallback; measure adoption, missed bookings, queue usefulness, and support load.
6. **Product expansion:** prioritize only from pilot evidence. Evaluate notifications/payments before AI; evaluate the hairstyle preview separately as a privacy-sensitive experiment.

### Pilot readiness checklist

- Owner has approved brand, services/prices, hours, schedules, booking and queue rules.
- Staff have walked through booking, walk-in, cancellation, no-show, break, and closed-shop scenarios.
- Data roles, retention, consent text, RLS/access controls, and backup/restore responsibilities are documented.
- A manual fallback exists for network or service downtime.
- The owner has approved the operating cost, hosting/support responsibility, and pilot success measure.
- Demo/sample data has been replaced or clearly separated from real customer records.

## 13. Research and references

- [Local Street Barber Facebook page](https://www.facebook.com/LOCALSTREETBARBER/) — live access was throttled during this review; initial visual audit uses the user-supplied [`logo.jpg`](../../logo.jpg) and [`facebook.png`](../../facebook.png).
- [Vite: Getting Started](https://vite.dev/guide/) — current React TypeScript scaffold and Node compatibility guidance.
- [Supabase: Database Overview](https://supabase.com/docs/guides/database/overview) — managed Postgres and linked platform services.
- [Supabase: The Supabase Way to Build](https://supabase.com/docs/guides/getting-started/the-supabase-way-to-build) — progressive use of Postgres, Auth, RLS, Storage, and server-side logic.
- [Reserve.ph](https://reserve.ph/), [Booking Mo](https://bookingmo.com/), and [ClipprOS](https://www.getclippr.app/) — vendor-published product positioning/features reviewed for the initial market scan.
- [Philippine Data Privacy Act of 2012](https://privacy.gov.ph/data-privacy-act/) — data processing principles and rights.
- [National Privacy Commission notice on real persons' likenesses in AI-generated images](https://privacy.gov.ph/notice-to-the-public-use-of-real-persons-likenesses-in-ai-generated-images/) — published August 2026; relevant to the proposed selfie-based preview.
