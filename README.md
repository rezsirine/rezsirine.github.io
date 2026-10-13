# Portfolio — Sirine Rezgui

React + Vite + Tailwind CSS. Les données (projets, compétences, contact) sont dans `src/data.ts`.

## Lancer en local
```bash
npm install
npm run dev      # http://localhost:8443
npm run build    # génère dist/
```

## Déploiement (public, gratuit)

### Option A — Vercel (recommandé)
1. Poussez le projet sur GitHub.
2. Sur https://vercel.com → **Add New → Project** → importez le dépôt.
3. Cliquez **Deploy** (la config est dans `vercel.json`). Vous obtenez `https://<nom>.vercel.app`.

### Option B — Netlify
1. https://app.netlify.com → **Add new site → Import an existing project** → choisissez le dépôt.
2. La config est dans `netlify.toml`. Cliquez **Deploy**.

### Option C — GitHub Pages (automatique)
1. Dépôt GitHub → **Settings → Pages → Source : GitHub Actions**.
2. Poussez sur la branche `main` : `.github/workflows/deploy.yml` construit et publie le site sur
   `https://<utilisateur>.github.io/<depot>/`.

## Après le déploiement
- Renseignez dans `src/data.ts` : `github` et `demo` de chaque projet, `profile.linkedin`, `profile.github`.
- Poussez la modification : le site se redéploie automatiquement.
