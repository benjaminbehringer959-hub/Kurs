# MindforMedia - 20-Tage-Konzentrations-Challenge

Eine interaktive Web-App für ein 20-tägiges Konzentrationstraining mit wissenschaftlich fundierten Techniken.

## 🎯 Features

- **20 strukturierte Tage** mit täglichen Lektionen
- **Interaktive Quizze** zur Wissensvertiefung
- **Konzentrationstest** zu Beginn und am Ende (Tag 1 & 20)
- **Fortschritts-Tracking** mit LocalStorage
- **Responsive Design** optimiert für Mobile
- **Reflexionsfragen** für persönliches Wachstum
- **SEO-optimiert** mit semantischem HTML

## 🛠️ Technologie-Stack

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS v3
- **Routing:** React Router v6
- **Hosting:** Netlify (konfiguriert mit netlify.toml)
- **Datenhaltung:** LocalStorage

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

Die App läuft auf `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

Build-Output landet im `dist/` Verzeichnis.

## 📁 Verzeichnisstruktur

```
mindformedia/
├── src/
│   ├── components/        # UI-Komponenten
│   │   ├── Layout.tsx
│   │   ├── ProgressBar.tsx
│   │   └── Quiz.tsx
│   ├── pages/             # Seitenkomponenten
│   │   ├── LandingPage.tsx
│   │   ├── Onboarding.tsx
│   │   ├── Vorwort.tsx
│   │   ├── Dashboard.tsx
│   │   ├── DayView.tsx
│   │   ├── ConcentrationTest.tsx
│   │   └── Completion.tsx
│   ├── data/              # Datenmodelle & Storage
│   │   ├── types.ts
│   │   ├── storage.ts
│   │   └── daysData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── netlify.toml
└── package.json
```

## 🧱 Seitenstruktur

### 1. Landing Page (`/`)
- Vorstellung der Challenge
- Call-to-Action Button

### 2. Onboarding (`/onboarding`)
- Begrüßung & Erklärung
- Hinweis zum Vorwort

### 3. Vorwort (`/vorwort`)
- Einleitungstext (wird nur einmal angezeigt)
- Emotionaler Einstieg

### 4. Dashboard (`/dashboard`)
- Übersicht aller 20 Tage
- Fortschrittsanzeige
- Locked/Unlocked Status

### 5. Tagesansicht (`/day/:day`)
- Tagesaufgaben
- Tipps & Fakten
- Bonuswissen
- Interaktives Quiz (3 Fragen)
- Reflexionsfragen

### 6. Konzentrationstest (`/concentration-test/:testNumber`)
- Timer-basierter Test (5 Minuten)
- Punkteeingabe
- Vergleich (Tag 1 vs Tag 20)

### 7. Abschlussseite (`/completion`)
- Zusammenfassung
- Fortschrittsvergleich
- Nächste Schritte

## 💾 Datenhaltung

Die App speichert den Fortschritt im Browser-LocalStorage:

```typescript
{
  completedDays: number[],
  quizResults: Record<number, number>,
  concentrationTest1?: number,
  concentrationTest20?: number,
  onboardingCompleted: boolean,
  vorwortSeen: boolean
}
```

## 🔒 Fortschrittslogik

- Tag 1 ist immer freigeschaltet
- Weitere Tage werden nach Abschluss des vorherigen Tages freigeschaltet
- Quiz muss abgeschlossen werden, um den Tag zu beenden
- Konzentrationstest ist Pflicht an Tag 1 und Tag 20

## 📝 Inhalte erweitern

Die Tage 3-19 sind aktuell mit Template-Daten gefüllt. Um echte Inhalte hinzuzufügen:

1. Öffne `src/data/daysData.ts`
2. Ersetze die Template-Daten in `templateDays` durch echte Inhalte
3. Jeder Tag benötigt:
   - Titel & Einführungstext
   - 3 Aufgaben
   - 3 Tipps
   - Fakt des Tages
   - Bonuswissen
   - 3 Quiz-Fragen
   - 3 Reflexionsfragen

## 🌐 Deployment auf Netlify

1. Repo auf GitHub pushen
2. In Netlify neues Projekt erstellen
3. Repository verbinden
4. Netlify erkennt automatisch die `netlify.toml` Konfiguration
5. Deployment starten

### Manuelle Konfiguration (falls nötig):
- Build Command: `npm run build`
- Publish Directory: `dist`
- Node Version: 20

## 🎨 Styling

Das Projekt nutzt TailwindCSS mit custom Utilities:

- `.btn-primary` - Primärer Button Style
- `.btn-secondary` - Sekundärer Button Style
- `.card` - Card Container Style

Farben sind in `tailwind.config.js` konfiguriert und nutzen die `primary` Color Palette.

## 📱 Mobile-First

Die App ist vollständig responsive und für mobile Geräte optimiert:
- Flexible Layouts mit Tailwind
- Touch-friendly Buttons
- Optimierte Schriftgrößen
- Scrollbare Inhalte

## 🔮 Zukünftige Erweiterungen

Mögliche Features:
- E-Mail-Authentifizierung (Supabase)
- Cloud-Sync des Fortschritts
- Push-Benachrichtigungen
- Social Sharing
- Erweiterte Analytics
- Mehrsprachigkeit (i18n)

## 📄 Lizenz

Dieses Projekt ist für den privaten und kommerziellen Gebrauch verfügbar.

---

Entwickelt mit ❤️ und React
