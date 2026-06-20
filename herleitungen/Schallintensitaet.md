---
title: "Schallintensitaet"
order: 16
---

**Zielformeln:**
$$\text{Punktquelle (Kugel):}\quad I=\frac{P}{4\pi r^2}\propto\frac{1}{r^2} \qquad\qquad \text{Linienquelle (Zylinder):}\quad I=\frac{P}{2\pi r\,L}\propto\frac{1}{r}$$

**Gültigkeit/Annahmen:**
- **Energieerhaltung, keine Absorption**: Die Quellleistung $P$ ist konstant; die Energie verschwindet nicht, sondern verteilt sich auf immer größere Wellenfronten (real absorbiert Luft, hohe Frequenzen stärker — hier vernachlässigt, also Näherung).
- Punktquelle: **isotrope** Abstrahlung (gleichmäßig in alle Richtungen) → Wellenfront = Kugelfläche.
- Linienquelle: Kanal näherungsweise **unendlich lange Gerade**, gleichmäßig strahlend → Wellenfront = Zylindermantel; gültig für $r\ll L$ (Abstand klein gegen Kanallänge).
- Dieselbe Geometrie gilt für **jede** von einer Quelle nach außen laufende Strahlung (Schall, Licht, γ-Strahlung — Abstandsquadratgesetz im Strahlenschutz).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $I=\dfrac{P}{A}$ | Definition der Intensität (Leistung pro Fläche) | ❌ nicht im Formelnheft — Definition, selbst anschreiben |
| $P=\dfrac{\Delta W}{\Delta t}$ | Leistung | ✅ S. 2 („$P=\Delta W/\Delta t$") |
| $A_\text{Kugel}=4\pi r^2$ | Kugeloberfläche | ❌ Mathematik, nicht im Formelnheft |
| $A_\text{Zylinder}=2\pi r\cdot L$ | Zylindermantelfläche | ❌ Mathematik, nicht im Formelnheft |
| $L=10\cdot\log\dfrac{I}{I_0}$ | Lautstärke (für die Erweiterung) | ✅ S. 3 („Lautstärke") |

> ⚠️ Die **Zielformeln selbst stehen nicht im Formelnheft** (❌) — sie müssen aus „Leistung verteilt sich auf die Wellenfront" vor Ort hergeleitet werden; die nötigen Flächenformeln sind elementare Mathematik.

## Herleitung (Schritt für Schritt)

### Schritt 1 — Kernidee: Intensität = Leistung pro Fläche

1. Die Quelle gibt pro Sekunde die Energie $P$ ab (Leistung, S. 2). Wegen **Energieerhaltung** verschwindet diese Energie nicht, sondern wandert mit der Wellenfront nach außen.
2. **Definition** der Intensität: Im Abstand $r$ ist die Leistung pro Fläche der Wellenfront $A(r)$
   $$I(r)=\frac{P}{A(r)}$$
3. Alles reduziert sich also auf eine **Geometriefrage**: Wie wächst die Wellenfrontfläche $A$ mit $r$?

### Schritt 2 — Punktquelle: Kugel → $1/r^2$

1. Eine Punktquelle strahlt gleichmäßig in **alle Richtungen** → die Wellenfront ist eine **Kugelfläche** mit Radius $r$ um die Quelle.
2. Kugeloberfläche (Mathematik): $A=4\pi r^2\propto r^2$ (Expansion in **zwei** Richtungen zugleich).
3. In die Definition einsetzen:
   $$\boxed{I=\frac{P}{4\pi r^2}\propto\frac{1}{r^2}}$$
4. **Verdopplungstest:** $r\to2r$ → Fläche $2^2=4$-fach → Intensität auf **¼**.
5. **Zahlenprobe:** Punktquelle mit $P=100$ W: bei $r=10$ m ist $I=\dfrac{100}{4\pi\cdot100}\approx0{,}080$ W/m²; bei $r=20$ m ist $I=\dfrac{100}{4\pi\cdot400}\approx0{,}020$ W/m² — genau ¼ ✓.

### Schritt 3 — Linienquelle (Blitzkanal): Zylinder → $1/r$

1. Der lange Blitzkanal strahlt nicht von einem Punkt, sondern entlang einer **Geraden** (Länge $L$) → die Wellenfront ist ein **Zylindermantel** mit Radius $r$ um die Linie.
2. Mantelfläche (Mathematik): $A=2\pi r\cdot L\propto r$ — nur **erste Potenz**: Der Mantel expandiert nur in **eine** Richtung (radial), nicht entlang der Kanallänge $L$ (Stirnflächen für $r\ll L$ vernachlässigbar — Näherung benannt).
3. In die Definition einsetzen:
   $$\boxed{I=\frac{P}{2\pi r\,L}\propto\frac{1}{r}}$$
4. **Verdopplungstest:** $r\to2r$ → Fläche nur 2-fach → Intensität nur auf **½**.

### Schritt 4 — Vergleich und Anwendungen

| | Wellenfront | $A(r)$ | $I(r)$ | $r$ verdoppelt | Pegeländerung (S. 3) |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Punktquelle** | Kugel | $4\pi r^2$ | $\propto1/r^2$ | → ¼ | $10\log4\approx-6$ dB |
| **Linienquelle** | Zylinder | $2\pi rL$ | $\propto1/r$ | → ½ | $10\log2\approx-3$ dB |

1. **Donner:** Langer Blitzkanal = Linienquelle → der Donner wird mit der Entfernung **deutlich langsamer** leiser ($1/r$); zudem sind die Kanalabschnitte unterschiedlich weit entfernt, der Schall kommt nacheinander an → **Donnergrollen**. Aus großer Entfernung schrumpft der Kanal effektiv zum Punkt → Übergang zurück zu $1/r^2$.
2. **Strahlenschutz (das „A" Abstand der 3A-Regel):** Eine γ-Punktquelle folgt demselben $1/r^2$ — **ein Schritt zurück bringt enorm viel**: doppelter Abstand → ¼ Dosisleistung, dreifacher → 1/9. Genau das ist die quantitative Grundlage von „Abstand" in Thema 12 §12.6.
3. **Anschluss ans Formelnheft (Lautstärke):** Mit S. 3 „Lautstärke" werden Intensitätsverhältnisse in dB übersetzt (Tabelle oben) — Punktquelle −6 dB, Linienquelle −3 dB pro Abstandsverdopplung.

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $I$ | Schallintensität (Leistung pro Fläche) | W/m² |
| $P$ | (Schall-)Leistung der Quelle | W |
| $A$ | Wellenfrontfläche im Abstand $r$ | m² |
| $r$ | Abstand zur Quelle (Punkt bzw. Linie) | m |
| $L$ | Länge der Linienquelle (Blitzkanal) | m |
| $L_\text{dB}$ | Lautstärkepegel (Erweiterung) | dB |
| $I_0$ | Referenzintensität der Hörschwelle ($10^{-12}$ W/m², Referenzwert der S.-3-Definition) | W/m² |

## Verknüpfungen

- Skriptum: [[themen/Physikalische Naturphaenomene/6.4#6.4 Schallintensität|Thema 6 §6.4]] (Schritt-für-Schritt-Herleitung identisch), [[themen/Physikalische Naturphaenomene/6.3#6.3 Blitz und Gewitter|Thema 6 §6.3 (Donner)]]
- Abstandsquadratgesetz im Strahlenschutz: [[themen/Kernphysik/12.6#12.6 Strahlenschutz|Thema 12 §12.6]]
- Wellengrundlagen ($c=\lambda f$, Longitudinalwellen): [[Wellen Interferenz|H15]], [[themen/Optik und Wellenphaenomene/13.4#13.4 Wellentypen|Thema 13 §13.4]]
