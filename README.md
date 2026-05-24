# EXAView — Schulprojekt Webauftritt

> **Hinweis:** Diese Website ist ein Schulprojekt und wurde zu Lernzwecken im Rahmen des Unterrichts erstellt. Alle dargestellten Produkte, Unternehmensdaten und Inhalte sind fiktiv.

---

## Inhaltsverzeichnis

1. [Projektbeschreibung](#projektbeschreibung)
2. [Live-Demo & Öffnen](#live-demo--öffnen)
3. [Seitenstruktur](#seitenstruktur)
4. [Technologien & Bibliotheken](#technologien--bibliotheken)
5. [Projektstruktur](#projektstruktur)
6. [Features](#features)
7. [Bildquellen & Urheberrecht](#bildquellen--urheberrecht)
8. [KI-Nutzung](#ki-nutzung)
9. [Autoren](#autoren)

---

## Projektbeschreibung

EXAView ist ein fiktives Drohnenunternehmen, das hochpräzise Kamera-Drohnen für professionelle Anwendungsbereiche entwickelt und vertreibt. Der Webauftritt präsentiert das Unternehmen, sein Flaggschiffprodukt (die EXA-1), Kundenstories sowie Kontakt- und Rechtsinformationen.

Das Ziel des Projekts war die Erstellung einer vollständigen, mehrsprachig strukturierten Unternehmenswebsite mit moderner Optik, animierter Startseite und responsivem Layout für Desktop und Mobilgeräte — ausschließlich mit HTML, CSS und JavaScript, ohne Build-Tools oder Frameworks.

---

## Live-Demo & Öffnen

Da es sich um ein statisches Projekt handelt, ist kein Server erforderlich.

```
index.html im Browser öffnen
```

**Empfohlen:** Google Chrome oder Mozilla Firefox (aktuellste Version).  
Die Website funktioniert direkt über das lokale Dateisystem (`file://`).

---

## Seitenstruktur

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite mit cinematischer Hero-Animation |
| `about.html` | Über uns — Team, Mission, Werte |
| `products.html` | Produktseite — EXA-1 Drohne mit Specs |
| `kunden.html` | Kunden & Insights — Blog-Übersicht |
| `kunden-post-1.html` … `kunden-post-6.html` | Einzelne Blog-Beiträge |
| `contact.html` | Kontakt & Newsletter-Formular |
| `impressum.html` | Impressum (inkl. Schulprojekt-Disclaimer) |
| `datenschutz.html` | Datenschutzerklärung |
| `bildrechte.html` | Bildquellen & Lizenzhinweise |

---

## Technologien & Bibliotheken

Das Projekt verwendet ausschließlich clientseitige Technologien. Alle Abhängigkeiten werden über CDN eingebunden — keine Installation notwendig.

| Technologie | Zweck | Version |
|---|---|---|
| HTML5 | Seitenstruktur | — |
| CSS3 | Layout, Animationen, Responsivität | — |
| JavaScript (ES6) | Interaktivität, Scroll-Logik | — |
| [GSAP](https://gsap.com/) | Scroll-gesteuerte Hero-Animation | 3.12.5 |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | GSAP-Plugin für Scroll-Events | 3.12.5 |
| [Lenis](https://github.com/darkroomengineering/lenis) | Smooth Scrolling | 1.0.42 |
| [Google Fonts](https://fonts.google.com/) | Schriftart: Space Grotesk | — |

---

## Projektstruktur

```
EXAView/
│
├── index.html                  # Startseite
├── about.html
├── products.html
├── kunden.html
├── kunden-post-1.html
│   … (bis kunden-post-6.html)
├── contact.html
├── impressum.html
├── datenschutz.html
├── bildrechte.html
│
├── css/
│   ├── style.css               # Globale Stile, Nav, Hero, Footer
│   ├── about.css               # Über-uns-Seite
│   ├── products.css            # Produktseite
│   ├── kunden.css              # Blog & Einzelbeiträge
│   └── legal.css               # Impressum, Datenschutz, Bildrechte
│
├── js/
│   ├── main.js                 # GSAP Hero-Animation (Startseite)
│   ├── nav.js                  # Hamburger-Menü (alle Seiten)
│   ├── cookie.js               # Cookie-Banner (alle Seiten)
│   ├── about.js                # Interaktionen Über-uns
│   ├── products.js             # Farbwechsel Drohne, Ticker
│   ├── kunden.js               # Blog-Filter
│   ├── kunden-post.js          # Einzelbeitrag-Logik
│   └── contact.js              # Formular-Validierung
│
├── assets/
│   ├── exa-favicon.png
│   └── images/                 # Alle Bilder (Foto, PNG-Cutouts, SVG)
│
└── logos/
    ├── hero-logo.svg
    ├── nav-logo.png
    └── nav-logo-white.png
```

---

## Features

### Startseite — Cinematische Hero-Animation
Die Startseite verfügt über eine scroll-gesteuerte Paralax-Animation: Eine Drohne fliegt beim Scrollen aus dem Horizont auf den Betrachter zu, während Wolken sich trennen und das EXAView-Logo dahinter sichtbar wird. Technisch umgesetzt mit GSAP ScrollTrigger und Lenis Smooth Scroll.

### Navigation
- Fixierte Navigationsleiste auf allen Seiten
- Hamburger-Menü mit Fullscreen-Overlay für mobile Geräte
- Smooth-Fade-Animation beim Öffnen/Schließen

### Produktseite
- Interaktiver Farbwechsel der Drohne (Schwarz / Weiß) per CSS
- Scrollender Spezifikations-Ticker (CSS-Animation)
- Technische Daten-Tabelle

### Blog / Kunden & Insights
- Übersichtsseite mit Featured Post und 3-spaltigem Raster
- 6 vollständige Einzelbeiträge mit Bild, Text und verwandten Artikeln

### Responsivität
- Vollständig optimiert für Desktop und Mobilgeräte
- Eigene Bilder für mobile Viewports (CSS `content:` Swap, kein JavaScript)
- Breakpoint: 768 px

### Cookie-Banner
- Erscheint beim ersten Besuch
- Auswahl wird in `localStorage` gespeichert
- Kein Re-Erscheinen nach Entscheidung

### Rechtliches
- Impressum mit Schulprojekt-Disclaimer
- Datenschutzerklärung (DSGVO-strukturiert, fiktiv)
- Bildrechte-Seite mit vollständiger Quellenangabe

---

## Bildquellen & Urheberrecht

Alle verwendeten Bilder wurden bezogen aus:

- **Lehrmaterial** — vom Lehrer zur Verfügung gestellte Bilder
- **Adobe Stock** — lizenzierte Stock-Fotografie
- **Adobe Firefly** — KI-generierte Bilder

Eine vollständige Auflistung aller Bildquellen befindet sich auf der Seite [bildrechte.html](bildrechte.html).

---

## KI-Nutzung

Bei der Erstellung dieser Website und ihrer Inhalte wurde künstliche Intelligenz eingesetzt:

- **Claude (Anthropic)** — Unterstützung bei Code-Entwicklung, Struktur und Texterstellung
- **Adobe Firefly** — Generierung einzelner Bildmaterialien

Der gesamte Code wurde im Rahmen des Projekts verstanden, überprüft und angepasst.

---

## Autor

**Marvin Dörr** — Konzept, Design, Entwicklung

**Schule:** JGS-Heidelberg  
**Fach / Kurs:** LBTW-Kr  
**Jahr:** D2PR1 – 2025 / 2026
