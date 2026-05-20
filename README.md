# EQUITY. — equitysprings.com

Spring week coaching & deadlines tracker.

---

## Stack
- React 18 + Vite
- Tailwind CSS
- React Router
- Deployed on Vercel (free)

---

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## How to update deadlines

Open `src/data/deadlines.js` and edit the array.

Each entry looks like:
```js
{ bank: "Goldman Sachs", division: "Global Markets", location: "London", status: "open", deadline: "12 Sep 2026" }
```

Status options: `"open"` | `"closing"` | `"closed"`

Save the file and it updates instantly.

---

## How to deploy (first time)

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your GitHub repo
3. Vercel auto-detects Vite — just click Deploy
4. Go to Project Settings → Domains → Add `equitysprings.com`
5. In Porkbun, add the DNS records Vercel gives you (takes ~10 mins to propagate)

Done. Every time you push to GitHub, Vercel auto-deploys.

---

## How to edit with Cursor AI

1. Download Cursor from cursor.sh (free)
2. Open this folder in Cursor
3. Press Cmd+K and type what you want to change in plain English
   - "Make the hero headline bigger"
   - "Add a new firm called Citadel to the prep guides"
   - "Change the accent colour from orange-red to blue"

---

## Pages

| Route        | File                        | Purpose                        |
|--------------|-----------------------------|--------------------------------|
| /            | src/pages/Home.jsx          | Landing page                   |
| /deadlines   | src/pages/Deadlines.jsx     | Full deadlines table + filter  |
| /coach       | src/pages/Coach.jsx         | Services, pricing, about       |
| /prep        | src/pages/Prep.jsx          | Free firm guides               |

---

## Pricing (edit in src/pages/Coach.jsx)

| Service            | Price |
|--------------------|-------|
| CV Review          | £35   |
| Application Review | £60   |
| Mock Interview     | £80   |
| Full Package       | £175  |

---

## Contact email

Currently set to hello@equitysprings.com throughout the site.
Set up a free email forwarder on Porkbun to redirect this to your personal email.
