---
title: "Gravitationsfeldstaerke Erdmasse"
order: 8
---

**Zielformel:**
$$\boxed{g=\frac{G\,M}{r^2}}\qquad\Rightarrow\qquad M_E=\frac{g\,R_E^2}{G}\approx 6\cdot10^{24}\ \text{kg}$$

**Gültigkeitsbereich / Annahmen:**
- $M$ ist **kugelsymmetrisch** verteilt (Schalentheorem: das Außenfeld einer kugelsymmetrischen Masse ist identisch mit dem einer Punktmasse im Zentrum — genau das rechtfertigt den Abstand $r$ „zum Massenmittelpunkt").
- $r$ vom **Massenmittelpunkt** aus, mit $r\ge$ Radius des Himmelskörpers (Außenfeld).
- Newtonsche Gravitation (schwaches Feld); Zentrifugaleffekt der Rotation vernachlässigt (daher die kleinen Breitenunterschiede von $g$ an der Erdoberfläche).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $F=m\cdot g$ | Gewichtskraft | ✅ S. 2 („$F=m\cdot g$") |
| $F_G=G\,\dfrac{m_1 m_2}{r^2}$ | Gravitationsgesetz | ✅ S. 2 („Gravitationsgesetz") |
| $g=\dfrac{G M}{r^2}$ | Gravitationsfeldstärke | ❌ nicht im Formelnheft — in der Prüfung selbst **herleiten** (genau diese Herleitung, zwei Zeilen) |

## Herleitung (Schritt für Schritt)

1. **Für eine Probemasse $m$ an der Oberfläche dieselbe Kraft auf zwei Arten schreiben** (Gewichtskraft $F=mg$ und Gravitationsgesetz beschreiben **ein und dieselbe** Kraft — das Gleichsetzen ist physikalische Identität, keine Näherung):
   $$m\cdot g=G\,\frac{M\cdot m}{r^2}$$
2. **Probemasse $m$ kürzen** (auf beiden Seiten linear, $m\neq0$; physikalische Bedeutung: $g$ ist **unabhängig** von der Probemasse — Eigenschaft des **Feldes**, nicht des Körpers; genau deshalb fallen im Vakuum alle Körper gleich schnell):
   $$\boxed{g=\frac{G\,M}{r^2}}$$
   $g$ heißt **Gravitationsfeldstärke** (Ortsfaktor, Einheit m/s² bzw. gleichwertig N/kg): $M$ erzeugt das Feld, $r$ ist der Abstand zu seinem **Massenmittelpunkt**.

### „Wiegen der Erde": nach Cavendishs Messung von $G$ ★

Newton **kannte $G$ nicht**. 1798 maß Cavendish $G$ erstmals mit der **Drehwaage** (Aufbau siehe [[themen/Paradigmatische Experimente/4.2#4.2 Cavendish-Experiment (1798)|Thema 4 §4.2]]) — $g$ und $R_E$ waren längst bekannt, es fehlte nur $G$:

3. **Schritt 2 nach $M$ auflösen** (beide Seiten mal $\frac{r^2}{G}$; mit $r=R_E$, also an der Erdoberfläche):
   $$M_E=\frac{g\,R_E^2}{G}$$
4. **Zahlenprobe** (alle Werte aus dem Formelnheft S. 1: $g=9{,}807$ m/s², $R_E=6{,}371\cdot10^{6}$ m, $G=6{,}673\cdot10^{-11}$ N·m²/kg²):
   - $R_E^2=(6{,}371\cdot10^{6})^2=4{,}059\cdot10^{13}\ \text{m}^2$
   - $g\,R_E^2=9{,}807\cdot4{,}059\cdot10^{13}=3{,}981\cdot10^{14}$
   - $M_E=\dfrac{3{,}981\cdot10^{14}}{6{,}673\cdot10^{-11}}\approx 5{,}97\cdot10^{24}\ \text{kg}\approx 6\cdot10^{24}\ \text{kg}$ ✓
   
   **Probe:** stimmt mit $M_E=5{,}974\cdot10^{24}$ kg aus dem Formelnheft S. 1 überein (Abweichung <0,2 %, durch Rundung und den Rotationsanteil in $g$). Darum sagt man, Cavendish habe „die Erde gewogen" — sein eigentliches Ziel war die **Dichte der Erde**, $G$ fiel dabei mit ab.

### Mond: $g\approx1{,}62$ m/s² — über das Verhältnis

5. **Dieselbe Formel für den Mond ansetzen und durch die Erd-Version teilen** (Vorteil der Verhältnismethode: $G$ kürzt sich, es bleiben Massen- und Radienverhältnis; Monddaten $M_M=7{,}35\cdot10^{22}$ kg, $R_M=1{,}74\cdot10^{6}$ m aus dem Skript, **nicht** im Formelnheft):
   $$\frac{g_M}{g_E}=\frac{G M_M/R_M^2}{G M_E/R_E^2}=\frac{M_M}{M_E}\cdot\left(\frac{R_E}{R_M}\right)^2$$
6. **Zahlen einsetzen:**
   - $\dfrac{M_M}{M_E}=\dfrac{7{,}35\cdot10^{22}}{5{,}974\cdot10^{24}}=0{,}0123$
   - $\left(\dfrac{R_E}{R_M}\right)^2=\left(\dfrac{6{,}371}{1{,}74}\right)^2=3{,}66^2=13{,}4$
   - $\dfrac{g_M}{g_E}=0{,}0123\cdot13{,}4=0{,}165\approx\dfrac{1}{6}$
   $$g_M=0{,}165\cdot9{,}807\approx 1{,}62\ \tfrac{\text{m}}{\text{s}^2}\approx\tfrac16\,g_E\ \checkmark$$
   (Direkt eingesetzt: $g_M=GM_M/R_M^2=\frac{6{,}673\cdot10^{-11}\cdot7{,}35\cdot10^{22}}{(1{,}74\cdot10^{6})^2}=1{,}62$ m/s² — beide Wege stimmen überein.) ==Auf dem Mond wiegt man nur ein Sechstel — die **Masse** bleibt gleich.==

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $g$ | Gravitationsfeldstärke (Ortsfaktor); an der Erdoberfläche $g=9{,}807$ m/s² (Formelnheft S. 1) | m/s² = N/kg |
| $m$ | Probemasse (wird gekürzt) | kg |
| $M$ | felderzeugende (Zentral-)Masse | kg |
| $r$ | Abstand zum **Massenmittelpunkt** von $M$ | m |
| $G$ | Gravitationskonstante $=6{,}673\cdot10^{-11}\ \tfrac{\text{N·m}^2}{\text{kg}^2}$ (Formelnheft S. 1) | N·m²/kg² |
| $M_E$ | Erdmasse $=5{,}974\cdot10^{24}$ kg (Formelnheft S. 1) | kg |
| $R_E$ | Erdradius $=6{,}371\cdot10^{6}$ m (Formelnheft S. 1) | m |
| $M_M$ | Mondmasse $=7{,}35\cdot10^{22}$ kg (Skriptwert, nicht im Formelnheft) | kg |
| $R_M$ | Mondradius $=1{,}74\cdot10^{6}$ m (Skriptwert, nicht im Formelnheft) | m |

## Verknüpfungen

- [[Kepler III|H07]] — dasselbe Schema „zwei Kräfte gleichsetzen, $m$ kürzen"; nach der Messung von $G$ führen beide Wege zum „Wiegen" von Himmelskörpern: H08 über das Oberflächen-$g$, H07 über die Bahn eines Umlaufenden.
- [[Schwarzschildradius|H09]] — die Kombination $GM$ taucht im Schwarzschildradius wieder auf.
- [[themen/Gravitationsphysik/11.2#11.2 Die Gravitationsfeldstärke $g$|Thema 11 §11.2]] — Skript-Fassung (inkl. Gezeiten-Nachfrage); [[themen/Gravitationsphysik/11.3#11.3 Cavendish-Experiment — G bestimmen|§11.3]] „Wiegen der Erde".
- [[themen/Paradigmatische Experimente/4.2#4.2 Cavendish-Experiment (1798)|Thema 4 §4.2]] — Drehwaage und Auswertung Schritt für Schritt.
