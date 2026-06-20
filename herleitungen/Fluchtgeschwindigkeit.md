---
title: "Fluchtgeschwindigkeit"
order: 6
---

**Zielformeln:**
$$v_F = \sqrt{\frac{2 G M}{r}}, \qquad v_F = \sqrt{2}\, v_\text{Kreis}, \qquad E_\text{ges} = -\frac{G M m}{2 r}$$

**Gültigkeitsbereich/Annahmen:** nur die Gravitation des einen Himmelskörpers wirkt (Luftwiderstand und andere Körper vernachlässigt); $m \ll M$ (Zentralkörper ruht); Definition der Flucht: Ein mit genau $v_F$ startender Körper hat bei $r \to \infty$ **genau** die Geschwindigkeit $0$ (nach unendlich langer Zeit).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $W = G \cdot M \cdot m \cdot \left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$ | Gravitationsenergie (Hubenergie von $r_1$ nach $r_2$ im Gravitationsfeld) — **der Schlüssel dieser Herleitung, steht genau so im Heft!** | ✅ S. 2 („Gravitationsenergie") |
| $E_\text{kin} = \dfrac{m v^2}{2}$ | Kinetische Energie | ✅ S. 2 („Kinetische Energie") |
| $F = G\dfrac{m_1 m_2}{r^2}$ | Gravitationsgesetz (Hintergrund) | ✅ S. 2 („Gravitationsgesetz") |
| $v_\text{Kreis} = \sqrt{GM/r}$ | Kreisbahngeschwindigkeit (für die $\sqrt2$-Beziehung und $E_\text{ges}$) | ❌ nicht im Formelnheft — siehe [[Satellit Kreisbahn|H05]], selbst herleiten |
| $v_F = \sqrt{2GM/r}$, $E_\text{ges} = -\dfrac{GMm}{2r}$ | Fluchtgeschwindigkeit / Gesamtenergie der Bahn | ❌ nicht im Formelnheft — bei der Prüfung selbst herleiten (siehe unten) |
| Energieerhaltung $E_\text{ges} = E_\text{kin} + E_\text{pot} = \text{konst.}$ | Energieerhaltungssatz | ❌ nicht im Formelnheft — selbst formulieren |

## Herleitung (Schritt für Schritt)

### A) Die zum Entkommen nötige Hubenergie (Grenzwert der Gravitationsenergie aus dem Formelnheft)

1. **Formel aus dem Heft anschreiben** (Formelnheft S. 2, „Gravitationsenergie"): Die Energie, um die Masse $m$ im Feld von $M$ von $r_1$ nach $r_2$ zu bringen, ist
   $$W = G \cdot M \cdot m \cdot \left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$
   (Sie berücksichtigt bereits, dass die Gravitation mit dem Abstand abnimmt — der exakte Ersatz für $mgh$ bei großen Abständen.)
2. **Fluchtsituation einsetzen.** Start: Oberfläche des Himmelskörpers, $r_1 = r$; Ziel: „dem Gravitationsfeld vollständig entkommen" = ins Unendliche, $r_2 \to \infty$.
3. **Grenzwert nehmen.** **Hier wird der Grenzwert $r_2 \to \infty$ genommen, weil** die Flucht per Definition das Erreichen des Unendlichen bedeutet; dabei gilt $\dfrac{1}{r_2} \to 0$:
   $$W_\infty = G M m \left(\frac{1}{r} - 0\right) = \frac{G M m}{r}$$
   Das ist die gesamte Hubenergie von der Oberfläche bis ins Unendliche — eine **endliche** Zahl! (Nur deshalb ist Flucht überhaupt möglich.)

### B) Fluchtgeschwindigkeit $v_F = \sqrt{2 G M / r}$ (Energiemethode)

1. **Energiebilanz.** Beim Start hat der Körper nur **kinetische Energie** $E_\text{kin} = \tfrac12 m v_F^2$; im Unendlichen ist per Definition $v = 0$ ⇒ die kinetische Energie bezahlt die Hubenergie $W_\infty$ **genau** (nicht mehr — sonst bliebe Restgeschwindigkeit; nicht weniger — sonst kehrte der Körper um).
2. **Gleichsetzen** (Energieerhaltung):
   $$\frac{1}{2} m v_F^2 = \frac{G M m}{r}$$
3. **Masse $m$ kürzen** (beide Seiten durch $m$, $m > 0$) — die Fluchtgeschwindigkeit ist **unabhängig** von der Masse des Raumschiffs:
   $$\frac{v_F^2}{2} = \frac{G M}{r}$$
4. **Beide Seiten mal 2:**
   $$v_F^2 = \frac{2 G M}{r}$$
5. **Wurzel ziehen** (positive Wurzel):
   $$\boxed{v_F = \sqrt{\frac{2 G M}{r}}}$$
6. **Rechenbeispiel (unabhängig nachgerechnet, Werte von S. 1):** Erdoberfläche, $r = R_E = 6{,}371 \cdot 10^6$ m:
   $$v_F = \sqrt{\frac{2 \cdot 6{,}673 \cdot 10^{-11} \cdot 5{,}974 \cdot 10^{24}}{6{,}371 \cdot 10^6}} = \sqrt{1{,}2514 \cdot 10^8} \approx 11\,187\ \text{m/s} \approx 11{,}2\ \text{km/s} \checkmark$$
   (= **zweite kosmische Geschwindigkeit**; Mond ca. $2{,}4$ km/s. Das Skript erhält dieselbe Formel über die vereinfachte $mgh$-Rechnung mit $h=r$ — und merkt selbst an: Die strenge Variante ist genau die hiesige Energiemethode „Gesamtenergie an der Oberfläche = 0".)

### C) $v_F = \sqrt{2}\, v_\text{Kreis}$ (Beziehung zur Kreisbahngeschwindigkeit)

1. **Beide Formeln nebeneinander schreiben:** Kreisbahn ([[Satellit Kreisbahn|H05]]): $v_\text{Kreis}^2 = \dfrac{GM}{r}$; Flucht (B, Schritt 4): $v_F^2 = \dfrac{2GM}{r}$.
2. **Dividieren** ($\dfrac{GM}{r} \neq 0$ kürzt sich):
   $$\frac{v_F^2}{v_\text{Kreis}^2} = 2$$
3. **Wurzel ziehen:**
   $$\boxed{v_F = \sqrt{2} \cdot v_\text{Kreis}}$$
   Kontrolle: $7{,}9 \cdot \sqrt2 \approx 11{,}2$ km/s ✓ (erste → zweite kosmische Geschwindigkeit).

### D) Gesamtenergie der Kreisbahn $E_\text{ges} = -\dfrac{G M m}{2 r}$

1. **Potentielle Energie für große Abstände anschreiben.** Mit dem Nullpunkt $E_\text{pot} = 0$ im Unendlichen ist die potentielle Energie bei $r$ das **Negative** der noch fehlenden Hubenergie — also das Negative von A, Schritt 3:
   $$E_\text{pot} = -\frac{G M m}{r}$$
   (Das Minuszeichen bedeutet **gebunden**: energetisch tiefer als im Unendlichen, im Potentialtopf.)
2. **Gesamtenergie anschreiben** (kinetisch + potentiell):
   $$E_\text{ges} = \frac{1}{2} m v^2 - \frac{G M m}{r}$$
3. **Kreisbahngeschwindigkeit einsetzen** ([[Satellit Kreisbahn|H05]]: $v^2 = \dfrac{GM}{r}$):
   $$E_\text{ges} = \frac{1}{2} m \cdot \frac{G M}{r} - \frac{G M m}{r} = \frac{G M m}{2 r} - \frac{G M m}{r}$$
4. **Auf gemeinsamen Nenner bringen** ($\tfrac12 - 1 = -\tfrac12$):
   $$\boxed{E_\text{ges} = -\frac{G M m}{2 r}}$$
   Die Gesamtenergie der Kreisbahn ist **negativ** — der Satellit ist gebunden. (Nebenbei: $|E_\text{pot}| = 2 E_\text{kin}$, typisch für gebundene Bahnen.)

### E) Vorzeichen von $E_\text{ges}$ ↔ Bahnform (Dreiteilung)

Aus dem **Vorzeichen** von $E_\text{ges} = \tfrac12 m v^2 - \dfrac{GMm}{r}$ liest man die Bahnform direkt ab:

| $E_\text{ges}$ | Physikalische Bedeutung | Bahnform |
| :-- | :-- | :-- |
| $< 0$ | kinetische Energie reicht nicht für die Fluchtrechnung — Körper **gebunden** im Potentialtopf | Kreis / Ellipse |
| $= 0$ | genau $v = v_F$ (B, Schritt 2 ist genau der Fall $E_\text{ges} = 0$) | Parabel |
| $> 0$ | $v > v_F$, im Unendlichen bleibt kinetische Energie übrig | Hyperbel |

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $v_F$ | Fluchtgeschwindigkeit (Start an der Oberfläche) | m/s |
| $v_\text{Kreis}$, $v$ | Kreisbahngeschwindigkeit in gleicher Höhe; Momentangeschwindigkeit | m/s |
| $W$, $W_\infty$ | Hubenergie ($r_1 \to r_2$); Hubenergie bis ins Unendliche | J |
| $E_\text{kin}$, $E_\text{pot}$, $E_\text{ges}$ | kinetische Energie; potentielle Energie (Nullpunkt im Unendlichen); Gesamtenergie | J |
| $m$ | Masse des Raumschiffs/Körpers (kürzt sich in B) | kg |
| $M$, $M_E$ | Masse des Zentralkörpers; Erdmasse $= 5{,}974 \cdot 10^{24}$ kg (Formelnheft S. 1) | kg |
| $G$ | Gravitationskonstante $= 6{,}673 \cdot 10^{-11}$ N·m²/kg² (S. 1) | N·m²/kg² |
| $r$, $r_1$, $r_2$ | Abstand vom **Mittelpunkt** des Himmelskörpers (Start an der Oberfläche: $r = R_E$); Start-/Zielabstand | m |
| $R_E$ | Erdradius $= 6{,}371 \cdot 10^6$ m (S. 1) | m |

## Verknüpfungen

- Herleitung der Kreisbahngeschwindigkeit $v_\text{Kreis} = \sqrt{GM/r}$ (Eingang in C und D) → [[Satellit Kreisbahn|H05]]
- Dieselbe Energiemethode für kleine Höhen ($v = \sqrt{2gh}$, Masse kürzt sich ebenfalls) → [[Energieerhaltung Anwendungen|H03]]
- Begriff der potentiellen Energie und Nullpunktswahl → [[Arbeit Energie|H02]]
- Skript: [[themen/Raumfahrtphysik/2.4#2.4 Fluchtgeschwindigkeit|Thema 2 §2.4]] (Definition, Energie-Herleitung, $\sqrt2$-Beziehung, zweite kosmische Geschwindigkeit), [[themen/Raumfahrtphysik/2.5#2.5 Bahnform abhängig von der Gesamtenergie|Thema 2 §2.5]] (Dreiteilung, $E_\text{pot} = -GMm/r$), [[themen/Gravitationsphysik/11.7#11.7 Schwarze Löcher|Thema 11 §11.7]] ($v_F = c$ ⇒ Schwarzschildradius)
