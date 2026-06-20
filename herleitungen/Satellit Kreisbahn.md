---
title: "Satellit Kreisbahn"
order: 5
---

**Zielformeln:**
$$v = \sqrt{\frac{G M}{r}}, \qquad T = \frac{2\pi r}{v}, \qquad r_\text{geo} = \sqrt[3]{\frac{G M T^2}{4\pi^2}}$$

**Gültigkeitsbereich/Annahmen:** **Kreisbahn** ($r = \text{konst.}$); Satellitenmasse klein gegen den Zentralkörper ($m \ll M$, Zentralkörper ruht); Luftwiderstand und Störungen anderer Himmelskörper vernachlässigt; $r$ wird **vom Erdmittelpunkt** aus gemessen (= Erdradius + Flughöhe).

★ **Maturarelevant:** Die Herleitung des Bahnradius des geostationären Satelliten ist eine belegte echte Prüfungsfrage.

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $F_Z = \dfrac{m v^2}{r} = m\omega^2 r$ | Zentripetalkraft | ✅ S. 2 („Zentripetalkraft") |
| $F = G\dfrac{m_1 m_2}{r^2}$ | Gravitationsgesetz | ✅ S. 2 („Gravitationsgesetz") |
| $v = \omega \cdot r$ | Bahngeschwindigkeit | ✅ S. 2 („Bahngeschwindigkeit") |
| $\omega = \dfrac{\Delta\varphi}{\Delta t} = 2\pi f$ | Winkelgeschwindigkeit | ✅ S. 2 („Winkelgeschwindigkeit") |
| $f = \dfrac{1}{T}$ | Frequenz/Schwingungsdauer | ✅ S. 2 („Frequenz/Schwingungsdauer"; zusammen mit $\omega=2\pi f$ derselben Seite) |
| $\bar v = \dfrac{\Delta s}{\Delta t}$ | Durchschnittsgeschwindigkeit — für $T = 2\pi r/v$ | ✅ S. 2 („Durchschnittsgeschwindigkeit") |
| $v = \sqrt{GM/r}$, $r_\text{geo} = \sqrt[3]{GMT^2/4\pi^2}$ | Bahngeschwindigkeit / geostationärer Radius | ❌ nicht im Formelnheft — bei der Prüfung aus $F_Z = F_G$ selbst herleiten (siehe unten) |

## Herleitung (Schritt für Schritt)

### A) Kreisbahngeschwindigkeit $v = \sqrt{G M / r}$

1. **Physikalischer Ausgangspunkt.** Für die Kreisbahn braucht der Satellit eine **Zentripetalkraft** ([[Zentripetalkraft|H04]]); die einzige nach innen ziehende Kraft ist hier die **Gravitation** — sie **übernimmt die Rolle** der Zentripetalkraft:
   $$F_Z = F_G$$
2. **Beide Formeln einsetzen** (beide Formelnheft S. 2): links $F_Z = \dfrac{m v^2}{r}$, rechts $F_G = G\dfrac{M m}{r^2}$:
   $$\frac{m v^2}{r} = G \cdot \frac{M m}{r^2}$$
3. **Satellitenmasse $m$ kürzen** (beide Seiten durch $m$, erlaubt wegen $m > 0$):
   $$\frac{v^2}{r} = G \cdot \frac{M}{r^2}$$
   ==Der entscheidende Schritt: Die Bahngeschwindigkeit ist unabhängig von der Satellitenmasse== — Feder und Lastwagen fliegen auf derselben Bahn gleich schnell (Eisenhower-Frage: Aus den Bahndaten lässt sich die Masse **nicht** berechnen).
4. **Beide Seiten mal $r$** (rechts kürzt sich ein $r$: $\tfrac{r}{r^2} = \tfrac1r$):
   $$v^2 = \frac{G M}{r}$$
5. **Wurzel ziehen** (positive Wurzel, Geschwindigkeitsbetrag $\geq 0$):
   $$\boxed{v = \sqrt{\frac{G M}{r}}}$$
   ==„Je höher, desto langsamer"==: $r$ steht im Nenner ⇒ größeres $r$ bedeutet kleineres $v$.

### B) Umlaufzeit $T = 2\pi r / v$

1. Bei der **gleichförmigen Kreisbewegung** ist der Betrag konstant: $\bar v = \Delta s/\Delta t$ mit $\bar v = v$.
2. **Ein voller Umlauf:** $\Delta s = $ Bahnumfang $U = 2\pi r$ (Kreisumfangsformel), $\Delta t = T$:
   $$v = \frac{2\pi r}{T} \quad\Longrightarrow\quad \boxed{T = \frac{2\pi r}{v}}$$

### C) Rechenbeispiel ISS (unabhängig nachgerechnet)

$R_E = 6{,}371 \cdot 10^6$ m (S. 1), Höhe $h = 400$ km ⇒ $r \approx 6{,}77 \cdot 10^6$ m; $M_E = 5{,}974 \cdot 10^{24}$ kg, $G = 6{,}673 \cdot 10^{-11}$ N·m²/kg² (beide S. 1):
$$v = \sqrt{\frac{6{,}673 \cdot 10^{-11} \cdot 5{,}974 \cdot 10^{24}}{6{,}77 \cdot 10^6}} = \sqrt{5{,}89 \cdot 10^7} \approx 7670\ \text{m/s} \approx 7{,}7\ \text{km/s} \checkmark$$
$$T = \frac{2\pi \cdot 6{,}77 \cdot 10^6}{7670} \approx 5540\ \text{s} \approx 92\ \text{min} \checkmark$$
(Stimmt mit dem Skript überein. Für eine bodennahe Bahn $r = R_E$ ergibt sich $v \approx 7{,}9$ km/s — die **erste kosmische Geschwindigkeit**.)

### D) ★ Geostationärer Satellit $r_\text{geo} = \sqrt[3]{G M T^2 / 4\pi^2}$

**Idee:** Gegeben ist hier nicht $v$, sondern die **Umlaufzeit** $T$ (ein Sterntag — der Satellit muss synchron zur Erdrotation laufen). Also $v$ durch $T$ ausdrücken und nach $r$ auflösen.

1. **Ausgangspunkt wie A, Schritt 4** (Ergebnis von „Gravitation übernimmt die Zentripetalkraft"):
   $$v^2 = \frac{G M}{r}$$
2. **$v$ durch die Winkelgeschwindigkeit ersetzen** ($v = \omega r$, S. 2; also $v^2 = \omega^2 r^2$):
   $$\omega^2 r^2 = \frac{G M}{r}$$
3. **Beide Seiten mal $r$** (rechts verschwindet das $r$, links kombinieren sich die Potenzen zu $r^3$):
   $$\omega^2 r^3 = G M$$
4. **$\omega$ durch $T$ ausdrücken.** Ein voller Umlauf = Winkel $2\pi$ in der Zeit $T$: $\omega = \dfrac{2\pi}{T}$ (aus $\omega = 2\pi f$ und $f = 1/T$, beide im Heft). Quadrieren und einsetzen:
   $$\frac{4\pi^2}{T^2} \cdot r^3 = G M$$
5. **Nach $r^3$ auflösen** (beide Seiten mal $\dfrac{T^2}{4\pi^2}$):
   $$r^3 = \frac{G M T^2}{4\pi^2}$$
6. **Dritte Wurzel ziehen:**
   $$\boxed{r_\text{geo} = \sqrt[3]{\frac{G M T^2}{4\pi^2}}}$$
7. **Rechenbeispiel (unabhängig nachgerechnet).** $T = 24 \cdot 3600 = 86\,400$ s (Näherung mit vollen 24 h; der exakte Sterntag $86\,164$ s ändert das Ergebnis nur um ca. 80 km):
   $$r = \sqrt[3]{\frac{6{,}673 \cdot 10^{-11} \cdot 5{,}974 \cdot 10^{24} \cdot 86\,400^2}{4\pi^2}} = \sqrt[3]{7{,}54 \cdot 10^{22}} \approx 4{,}22 \cdot 10^7\ \text{m} \approx 42\,200\ \text{km} \checkmark$$
   Höhe über dem Boden: $h = r - R_E \approx 42\,200 - 6\,371 \approx 35\,800$ km ✓. Nebenbei: $v = 2\pi r/T \approx 3{,}1$ km/s — deutlich langsamer als die ISS mit $7{,}7$ km/s, erneut ==„je höher, desto langsamer"==.
   ==Prüfungsfalle: $T$ unbedingt in **Sekunden** umrechnen!== Die beiden weiteren Bedingungen: Bahn **über dem Äquator** (die Bahnebene muss durch den Erdmittelpunkt gehen), Umlauf **in Rotationsrichtung** der Erde.

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $v$ | Bahngeschwindigkeit | m/s |
| $r$, $r_\text{geo}$ | Bahnradius (**vom Erdmittelpunkt**); geostationärer Radius | m |
| $m$ | Satellitenmasse (kürzt sich) | kg |
| $M$, $M_E$ | Masse des Zentralkörpers; Erdmasse $= 5{,}974 \cdot 10^{24}$ kg (Formelnheft S. 1) | kg |
| $G$ | Gravitationskonstante $= 6{,}673 \cdot 10^{-11}$ N·m²/kg² (S. 1; das Skript rechnet teils mit $6{,}674$) | N·m²/kg² |
| $R_E$ | Erdradius $= 6{,}371 \cdot 10^6$ m (S. 1) | m |
| $F_Z$, $F_G$ | Zentripetalkraft; Gravitationskraft | N |
| $T$ | Umlaufzeit (geostationär: 1 Sterntag $\approx 86\,164$ s, meist mit $86\,400$ s genähert) | s |
| $\omega$ | Winkelgeschwindigkeit $= 2\pi/T$ | rad/s |
| $f$ | Frequenz $= 1/T$ | Hz |
| $U$ | Bahnumfang $= 2\pi r$ | m |
| $h$ | Höhe über dem Boden $= r - R_E$ | m |

## Verknüpfungen

- Herleitung der verwendeten Zentripetalkraft → [[Zentripetalkraft|H04]]
- $\sqrt2$-Beziehung zwischen $v_\text{Kreis}$ und Fluchtgeschwindigkeit, Bahnenergie → [[Fluchtgeschwindigkeit|H06]]
- Skript: [[themen/Raumfahrtphysik/2.2#2.2 Satellit auf einer Kreisbahn|Thema 2 §2.2]] (Schritt-für-Schritt + ISS), [[themen/Raumfahrtphysik/2.3#2.3 Der geostationäre Satellit|Thema 2 §2.3]] (geostationäre Bahn), [[themen/Gravitationsphysik/11.1#Das Gravitationsgesetz|Thema 11 §11.1]] (Gravitationsgesetz), [[themen/Klassische Mechanik/8.7#8.7 Kreisbewegung und Zentripetalkraft|Thema 8 §8.7]] (Muster $F_Z = F_\text{Kraft}$)
