---
title: "SRT Myonen"
order: 13
---

**Zielformeln:**
$$\text{Erdsystem:}\quad d = v\cdot t = v\cdot\gamma\,\tau \qquad\qquad \text{Myonsystem:}\quad \ell = \frac{\ell_0}{\gamma}$$

**Gültigkeit/Annahmen:**
- Inertialsysteme (die Erde näherungsweise; das Myon fliegt geradlinig-gleichförmig, $v=\text{const}$).
- Der Gamma-Faktor $\gamma=\dfrac{1}{\sqrt{1-v^2/c^2}}$ wird hier **nicht selbst hergeleitet** — er steht direkt im Formelnheft S. 5 und darf zitiert werden.
- $\tau=2{,}2\ \mu$s ist die **mittlere** Lebensdauer (Mittelwert des exponentiellen Zerfalls); sie wird unten als „typische Lebensdauer" verwendet — eine **statistische Näherung**, die das Ergebnis (klassisches Versagen, relativistische Konsistenz) nicht ändert.
- ★ Maturafrage: Bogen „Physikalische Naturphänomene" (kosmische Strahlung / Myonenproblem).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $\gamma=\dfrac{1}{\sqrt{1-v^2/c^2}}$ | Gamma-Faktor | ✅ S. 5 („$\gamma=1/\sqrt{1-v^2/c^2}$") |
| $t=t_0\cdot\gamma$ | Zeitdilatation | ✅ S. 5 („Zeitdilatation $t=t_0\cdot\gamma$") |
| $\ell=\ell_0\cdot\dfrac{1}{\gamma}$ | Längenkontraktion | ✅ S. 5 („Längenkontraktion $l=l_0\cdot(1/\gamma)$") |
| $v=\dfrac{s}{t}$ | Definition der gleichförmigen Bewegung | ❌ nicht im Formelnheft — elementare Definition, selbst anschreiben |
| $c=2{,}9979\cdot10^8$ m/s | Lichtgeschwindigkeit | ✅ S. 1 (Konstantentabelle) |

## Herleitung (Schritt für Schritt)

### Schritt 0 — der klassische Widerspruch (warum Relativität nötig ist)

1. **Klassische Maximalreichweite** = maximal mögliche Geschwindigkeit × Lebensdauer. Nichts ist schneller als Licht, also $v\le c$:
   $$d_\text{max}=c\cdot\tau$$
2. **Einsetzen** ($c\approx3\cdot10^8$ m/s, $\tau=2{,}2\cdot10^{-6}$ s):
   $$d_\text{max}\approx 3\cdot10^8\ \tfrac{\text{m}}{\text{s}}\cdot 2{,}2\cdot10^{-6}\ \text{s}\approx 660\ \text{m}$$
3. Myonen entstehen in $h\approx20$ km Höhe: $660\ \text{m}\ll 20\ \text{km}$ — **klassisch erreicht kein Myon den Boden**. Gemessen werden sie dort aber massenhaft → die klassische Physik versagt **vollständig** (nicht knapp: klassisch käme nur ein Anteil $\mathrm e^{-20\,000/660}\approx10^{-13}$ an).

### Weg A — Zeitdilatation (aus Sicht der Erde)

1. **Eigenzeit identifizieren.** Die Lebensdauer $\tau=2{,}2\ \mu$s ist mit der **eigenen Uhr des Myons** gemessen — die Uhr ruht relativ zum Myon, also ist $\tau$ das $t_0$ der Formelnheft-Formel.
2. **Zeitdilatation anwenden (S. 5).** Im Erdsystem geht die bewegte Uhr langsamer; das Myon „lebt" für uns die gedehnte Zeit
   $$t=\gamma\,\tau$$
3. **$\gamma$ berechnen** ($v=0{,}9995\,c$):
   $$\frac{v^2}{c^2}=0{,}9995^2=0{,}99900025,\qquad 1-\frac{v^2}{c^2}=9{,}9975\cdot10^{-4}$$
   $$\gamma=\frac{1}{\sqrt{9{,}9975\cdot10^{-4}}}=\frac{1}{0{,}031619}\approx 31{,}6$$
   (Das Skriptum rundet auf „ca. 32" — derselbe Wert, nur anders gerundet.)
4. **Gedehnte Lebensdauer:**
   $$t=\gamma\tau\approx 31{,}6\cdot 2{,}2\ \mu\text{s}\approx 69{,}6\ \mu\text{s}$$
5. **Flugstrecke** (gleichförmig, $d=v\cdot t$):
   $$d=v\cdot\gamma\tau\approx 0{,}9995\cdot 2{,}9979\cdot10^8\ \tfrac{\text{m}}{\text{s}}\cdot 6{,}96\cdot10^{-5}\ \text{s}\approx 2{,}086\cdot10^4\ \text{m}\approx \mathbf{21\ km}$$
6. **Schluss A:** $21\ \text{km}\ \ge\ 20\ \text{km}$ ✓ — im Erdsystem lebt das Myon dank Zeitdilatation lange genug, um vom Entstehungsort bis zum Boden zu kommen.

### Weg B — Längenkontraktion (aus Sicht des Myons)

1. **Das Myon selbst merkt nichts.** In seinem eigenen System beträgt die Lebensdauer einfach $\tau=2{,}2\ \mu$s — nichts ist gedehnt.
2. **Ruhelänge identifizieren.** Die 20 km Atmosphäre sind im System gemessen, in dem die Atmosphäre **ruht** (Erdsystem) — das ist das $\ell_0$ des Formelnhefts.
3. **Längenkontraktion anwenden (S. 5).** Für das Myon bewegt sich die Atmosphäre **entgegen** und ist daher verkürzt:
   $$\ell=\frac{\ell_0}{\gamma}=\frac{20\,000\ \text{m}}{31{,}6}\approx \mathbf{630\ m}$$
4. **In der Lebensdauer erreichbare Strecke:**
   $$v\cdot\tau\approx 0{,}9995\cdot 2{,}9979\cdot10^8\ \tfrac{\text{m}}{\text{s}}\cdot 2{,}2\cdot10^{-6}\ \text{s}\approx 659\ \text{m}\approx 660\ \text{m}$$
5. **Schluss B:** $630\ \text{m}\ \le\ 660\ \text{m}$ ✓ — aus Sicht des Myons sind nur noch ca. 630 m Atmosphäre zu durchqueren; die kurze Lebensdauer reicht gerade aus.

### Schritt 3 — Vergleich der Perspektiven = Konsistenz der Relativitätstheorie

| | Zeit | Strecke | Ergebnis |
| :-- | :-- | :-- | :-- |
| **Erdsystem (Weg A)** | gedehnt: $\gamma\tau\approx69{,}6\ \mu$s | Originallänge 20 km | kommt an ✓ |
| **Myonsystem (Weg B)** | Original $\tau=2{,}2\ \mu$s | verkürzt: $20\ \text{km}/\gamma\approx630$ m | kommt an ✓ |

Beide Bezugssysteme liefern für die **beobachtbare Tatsache** (Myon erreicht den Boden) **dasselbe** Ergebnis — die **gedehnte Zeit** des einen ist die **verkürzte Strecke** des anderen (beide über dasselbe $\gamma$ verknüpft). Genau das ist die **Selbstkonsistenz** der SRT: physikalische Schlussfolgerungen hängen nicht von der Wahl des Bezugssystems ab.

> ✎ **Schreibweise:** Das Skriptum schreibt $t_b=t_r\sqrt{1-v^2/c^2}$ (umgestellt, andere Indizes) — das ist **dieselbe** Formel wie $t=t_0\gamma$ im Formelnheft; Inhalt unverändert: die bewegte Uhr zeigt weniger Zeit an.

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $\tau$ ($=t_0$) | mittlere Lebensdauer des Myons = Eigenzeit (mitbewegte Uhr) | s ($2{,}2\cdot10^{-6}$ s) |
| $t$ | im Erdsystem gemessene (gedehnte) Lebensdauer | s |
| $\gamma$ | Lorentz-/Gamma-Faktor | — (dimensionslos, hier $\approx31{,}6$) |
| $v$ | Geschwindigkeit des Myons ($0{,}9995\,c$) | m/s |
| $c$ | Vakuumlichtgeschwindigkeit $=2{,}9979\cdot10^8$ (Formelnheft S. 1) | m/s |
| $d$ | Flugstrecke im Erdsystem | m |
| $\ell_0$ | Ruhelänge (Atmosphärendicke $\approx20$ km, im Erdsystem) | m |
| $\ell$ | (kontrahierte) Atmosphärendicke im Myonsystem | m |

## Verknüpfungen

- Skriptum: [[themen/Physikalische Naturphaenomene/6.2#6.2 Exkurs: Spezielle Relativitätstheorie und das Myonenproblem|Thema 6 §6.2]] (Zahlen identisch: 660 m / γ≈32 / 21 km / 630 m)
- Hintergrund kosmische Strahlung: [[themen/Physikalische Naturphaenomene/6.1#6.1 Kosmische Strahlung|Thema 6 §6.1]], [[themen/Kernphysik/12.10#12.10 Kosmische Strahlung|Thema 12 §12.10]]
- Exponentieller Zerfall ($\tau$ ist ein Mittelwert): [[Zerfallsgesetz|H14]]
