# Precision Tech Solutions — Website

## Hoe te gebruiken in VS Code

1. Download `pts-site-final.zip` en pak hem uit
2. Sleep de hele `pts-site-final/` map naar VS Code (of `File → Open Folder`)
3. Open `index.html` in een browser om te zien hoe het eruitziet
4. Tip: installeer de "Live Server" extensie in VS Code — rechtsklik op `index.html` → "Open with Live Server"

## Bestandsstructuur

```
pts-site-final/
├── index.html          ← Homepage
├── services.html       ← Services overzicht (dashcam, carplay, lighting, sound)
├── gps-tracking.html   ← GPS Tracking & Fleet pagina
├── pricing.html        ← Prijzen pagina (XCG)
├── about.html          ← Over ons (NL + Curaçao + mission)
├── contact.html        ← Contact & appointment formulier
├── styles.css          ← GEDEELDE styles voor alle pagina's
└── main.js             ← GEDEELDE JavaScript (nav, animaties, drawer)
```

## Belangrijk om te weten

- **Alle pagina's delen `styles.css` en `main.js`** — dus als je iets aan de styling wilt veranderen (bijv. een kleur), pas je het op één plek aan en het werkt overal.
- **De navigatie en footer staan in elke HTML-file** — als je daar iets aanpast, doe het op alle 6 de pagina's.
- **Het contact-formulier is nu een mock** — bij submit toont het een success-bericht maar verstuurt geen email. Wire het later aan een service zoals Formspree, Netlify Forms, of je eigen backend.

## Hoofdkleuren (uit `styles.css`)

```css
--navy:        #0B1F3A    /* hoofdkleur, autoriteit */
--cyan:        #00B7FF    /* accent kleur, precisie */
--cyan-deep:   #0096D6    /* donkere variant cyan */
--bg:          #FFFFFF    /* witte achtergrond */
--bg-alt:      #F6F8FC    /* lichtgrijze achtergrond */
```

## Contact gegevens in de site

- WhatsApp: `+5999 665 5017`
- Email: `info@precisiontsolutions.com`
- Locatie: Willemstad, Curaçao

Pas deze aan in elke HTML-file als ze veranderen.
