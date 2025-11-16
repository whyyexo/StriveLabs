# Fix pour le build Next.js

## Problème
Next.js détecte automatiquement `src/pages` comme un répertoire de pages et essaie de le compiler, ce qui cause des erreurs.

## Solution rapide

**Option 1: Renommer src temporairement (RECOMMANDÉ)**
```bash
# Renommer src en src-old
mv src src-old
# Build
npm run build
# Renommer back si nécessaire
mv src-old src
```

**Option 2: Supprimer le cache et rebuild**
```bash
rm -rf .next
npm run build
```

## Configuration actuelle

- `next.config.js` ignore déjà le répertoire `src` via webpack
- `tsconfig.json` exclut `src` de la compilation TypeScript
- `.gitignore` ignore maintenant `/src`

Si le problème persiste, utilisez l'Option 1 (renommer src).

