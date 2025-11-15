# Osobný Web - Modern Portfolio

SvelteKit projekt s moderným, čistým a profesionálnym dizajnom pre osobné portfolio.

## Funkcie

- 🎨 **Moderný, čistý dizajn** - Profesionálny vzhľad s jednoduchou farebnou paletou (čierna, biela, šedá s modrými a oranžovými akcentmi)
- ✨ **Plynulé animácie** - Subtílne a elegantné animácie cez Tailwind CSS
- 📱 **Responsive dizajn** - Plne responzívny pre všetky zariadenia
- 🧩 **Modulárna architektúra** - Jednoducho udržiavateľné Svelte komponenty
- 🎯 **Jedinečná sekcia Zručností** - Moderná vizualizácia s progress barami a kruhovými indikátormi

## Inštalácia

```bash
npm install
```

## Spustenie vývojového servera

```bash
npm run dev
```

## Aktualizácia obsahu

Aktualizujte obsah v súbore `src/lib/data/content.ts`:

- **Hero sekcia** - Meno, titul a podtitul
- **O Mne** - Osobný popis
- **Skúsenosti** - Zoznam pracovných skúseností
- **Zručnosti** - Zručnosti s úrovňami (0-100)

## Komponenty

- `Hero.svelte` - Hlavná hero sekcia s animovaným textom
- `About.svelte` - Sekcia O Mne
- `Experience.svelte` - Timeline so skúsenosťami
- `Skills.svelte` - Jedinečná vizualizácia zručností
- `Navigation.svelte` - Hlavná navigácia

## Štruktúra projektu

```
src/
├── lib/
│   ├── components/    # Svelte komponenty
│   └── data/          # Obsah a dáta
├── routes/
│   ├── +layout.svelte # Hlavný layout
│   └── +page.svelte   # Hlavná stránka
├── app.css            # Globálne štýly a Tailwind
└── app.html           # HTML šablóna
```

