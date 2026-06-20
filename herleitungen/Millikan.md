---
title: "Millikan"
order: 11
---

**Zielformel:**
$$\boxed{Q=\frac{m\,g\,d}{U}},\qquad r=\sqrt{\frac{9\,\eta\,v}{2\,\rho\,g}},\qquad Q=n\cdot e\ \Rightarrow\ e=1{,}602\cdot10^{-19}\ \text{C}$$

**Gültigkeitsbereich / Annahmen:**
- **Homogenes Feld** im **Plattenkondensator**: $E=U/d$ (Plattenabstand $d$ klein gegen die Plattenausdehnung).
- Öltröpfchen als **winzige Kugel**; gleichmäßiges Sinken nach dem **Stokes-Gesetz** (laminar, langsam, kleine Kugel).
- **Öl** statt Wasser: verdunstet während der Messung nicht, $m,r$ bleiben konstant; Auftrieb in Luft vernachlässigt (Physik+-Hinweis im Skript).
- In Phase 2 wird im **gleichförmigen** Sinkabschnitt abgelesen (nachdem das Kräftegleichgewicht erreicht ist).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $F=E\cdot Q$ | Kraft im elektrischen Feld | ✅ S. 4 („$F=E\cdot Q$") |
| $W=\Delta\varphi\cdot Q=U\cdot Q$ | elektrische Arbeit/Spannung | ✅ S. 4 („$W=U\cdot Q$", für die Herleitung von $E=U/d$) |
| $F=m\cdot g$ | Gewichtskraft | ✅ S. 2 („$F=m\cdot g$") |
| $F_W=6\pi\,\eta\, r\, v$ | Stokes-Reibung | ✅ S. 2 („Stokes") |
| $\rho=\dfrac{m}{V}$ | Dichte | ✅ S. 2 („$\rho=\frac{m}{V}$") |
| $V_\text{Kugel}=\dfrac43\pi r^3$ | Kugelvolumen | ❌ Mathematik, nicht im Formelnheft — selbst hinschreiben |
| $E=\dfrac{U}{d}$ | Feldstärke im homogenen Feld | ❌ nicht im Formelnheft — in zwei Zeilen herleiten: $W=F\cdot d$ (S. 2) und $W=U\cdot Q$ (S. 4) → $F\,d=U\,Q$ → $E=\frac{F}{Q}=\frac{U}{d}$ |
| $e=1{,}602\cdot10^{-19}$ C | Elementarladung | ✅ S. 1 (Konstanten) |

## Herleitung (Schritt für Schritt)

### Phase ① — Schweben (Schwebephase)

1. **Schwebebedingung ansetzen** (Spannung so einstellen, dass das Tröpfchen ruht: Gesamtkraft null, die elektrische Kraft nach oben gleicht genau die Gewichtskraft nach unten aus — das *ist* die Definition des Schwebens):
   $$F_E=F_G$$
2. **Beide Kräfte einsetzen** (links $F=E\cdot Q$ von S. 4, rechts $F=m\cdot g$ von S. 2):
   $$Q\cdot E=m\cdot g$$
3. **Plattenkondensator-Feldstärke $E=U/d$ einsetzen und nach $Q$ auflösen** (Zweizeilen-Herleitung von $E=U/d$ siehe Tabelle; beide Seiten durch $E$ teilen):
   $$Q=\frac{m\,g}{E}=\frac{m\,g\,d}{U}$$
   ==Hier lässt sich $Q$ noch nicht berechnen==: $U,d,g$ sind bekannt, aber die **Masse $m$** des winzigen Tröpfchens kann man nicht direkt wiegen — genau dafür braucht es Phase ②.

### Phase ② — Feld aus, gleichförmiges Sinken (Sinkphase)

4. **Kräftegleichgewicht beim gleichförmigen Sinken ansetzen** (ohne Feld bleibt nur die Gewichtskraft, das Tröpfchen beschleunigt; die Stokes-Reibung $F_W=6\pi\eta rv$ wächst mit $v$, bis sie die Gewichtskraft genau ausgleicht — danach **konstante** Geschwindigkeit. Im gleichförmigen Abschnitt: Reibung = Gewicht):
   $$6\pi\,\eta\,r\,v=m\,g$$
   Eine Gleichung, **zwei** Unbekannte ($m$ und $r$) → eine zweite Beziehung ist nötig.
5. **$m$ über die Dichte als Funktion von $r$ ausdrücken** ($\rho=m/V$ von S. 2 nach $m$ auflösen, Kugelvolumen $V=\tfrac43\pi r^3$; die Öldichte $\rho$ ist bekannt):
   $$m=\rho\cdot V=\rho\cdot\frac{4}{3}\pi r^3$$
6. **In Schritt 4 einsetzen, $m$ eliminieren** (jetzt ist $r$ die einzige Unbekannte):
   $$6\pi\,\eta\,r\,v=\rho\cdot\frac{4}{3}\pi r^3\cdot g$$
7. **Beide Seiten durch $\pi$ und durch $r$ teilen** ($r\neq0$, also erlaubt; rechts wird aus $r^3$ ein $r^2$):
   $$6\,\eta\,v=\frac{4}{3}\,\rho\,g\,r^2$$
8. **Nach $r^2$ auflösen** (durch $\tfrac43\rho g$ teilen; Division durch einen Bruch = Multiplikation mit dem Kehrwert: $\frac{6}{\,4/3\,}=6\cdot\frac34=\frac{18}{4}=\frac92$):
   $$r^2=\frac{6\,\eta\,v}{\tfrac{4}{3}\,\rho\,g}=\frac{9\,\eta\,v}{2\,\rho\,g}$$
9. **Wurzel ziehen** (positive Wurzel — ein Radius ist positiv):
   $$\boxed{r=\sqrt{\frac{9\,\eta\,v}{2\,\rho\,g}}}$$
   Rechts stehen nur **messbare/bekannte** Größen ($\eta,v,\rho,g$) → $r$ ist bestimmt; zurück in Schritt 5 liefert das die **Masse $m$**.

### Phase ③ — Rückeinsetzen und Auswertung

10. **Das $m$ aus Phase ② in Schritt 3 einsetzen** (jetzt ist jede Größe bekannt; die Ladung jedes einzelnen Tröpfchens ist berechenbar):
    $$\boxed{Q=\frac{m\,g\,d}{U}}\qquad\text{mit}\quad m=\rho\,\frac43\pi r^3,\quad r=\sqrt{\frac{9\eta v}{2\rho g}}$$
11. **Für viele Tröpfchen wiederholen und auftragen** (die entscheidende Beobachtung: die $Q$-Werte füllen die Zahlenachse **nicht** gleichmäßig, sondern liegen nur auf äquidistanten „Stufen" mit Lücken dazwischen):
    $$Q=n\cdot e,\qquad n=1,2,3,\dots$$
12. **Stufenabstand ablesen = Elementarladung** (wäre Ladung beliebig teilbar, müssten die Messwerte kontinuierlich verteilt sein; diskrete Stufen lassen sich **nur** durch eine kleinste, unteilbare Ladungsportion erklären):
    $$\boxed{e=1{,}602\cdot10^{-19}\ \text{C}}\quad(\text{Formelnheft S. 1; im Skript gerundet }1{,}6\cdot10^{-19})$$
    **Fazit: Die Ladung ist gequantelt** — jede Ladung ist ein ganzzahliges Vielfaches von $e$.

### Größenordnungs-Beispiel (unabhängig nachgerechnet, kein Pflichtstoff)

Typische Werte: $\eta_\text{Luft}=1{,}82\cdot10^{-5}$ Pa·s, $v=1{,}0\cdot10^{-4}$ m/s, $\rho_\text{Öl}=900$ kg/m³, $g=9{,}807$ m/s²:
- $r=\sqrt{\dfrac{9\cdot1{,}82\cdot10^{-5}\cdot10^{-4}}{2\cdot900\cdot9{,}807}}=\sqrt{9{,}28\cdot10^{-13}}\approx9{,}6\cdot10^{-7}\ \text{m}\approx1\ \mu\text{m}$ (im Mikroskop sichtbar ✓)
- $m=900\cdot\tfrac43\pi(9{,}6\cdot10^{-7})^3\approx3{,}4\cdot10^{-15}$ kg
- Mit $Q=2e$ und $d=6$ mm: Schwebespannung $U=\dfrac{m g d}{Q}=\dfrac{3{,}4\cdot10^{-15}\cdot9{,}807\cdot0{,}006}{3{,}204\cdot10^{-19}}\approx6\cdot10^{2}$ V — einige hundert Volt, experimentell völlig plausibel ✓

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $Q$ | Ladung des Öltröpfchens | C |
| $e$ | Elementarladung $=1{,}602\cdot10^{-19}$ C (Formelnheft S. 1) | C |
| $n$ | ganze Zahl (Anzahl der Ladungsportionen) | — |
| $E$ | elektrische Feldstärke zwischen den Platten | V/m = N/C |
| $U$ | Spannung zwischen den Platten | V |
| $d$ | Plattenabstand | m |
| $m$ | Masse des Öltröpfchens | kg |
| $g$ | Gravitationsfeldstärke $=9{,}807$ m/s² (Formelnheft S. 1) | m/s² |
| $\eta$ | Viskosität der Luft (Zähigkeit) | Pa·s |
| $r$ | Radius des Öltröpfchens | m |
| $v$ | gleichförmige Sinkgeschwindigkeit (Messwert) | m/s |
| $\rho$ | Dichte des Öls (bekannte Materialkonstante) | kg/m³ |
| $V$ | Volumen des Öltröpfchens | m³ |
| $F_E,F_G,F_W$ | elektrische Kraft / Gewichtskraft / Stokes-Reibung | N |

## Verknüpfungen

- [[Photoeffekt Photon|H12]] — das hier gemessene $e$ ist die Brücke der eV↔J-Umrechnung ($1\ \text{eV}=e\cdot1\ \text{V}$).
- [[themen/Paradigmatische Experimente/4.3#4.3 Millikan-Öltröpfchen-Experiment (1910–1913)|Thema 4 §4.3]] — Skript-Fassung: Aufbau, „warum Öl statt Wasser", „warum nicht im Vakuum", drei Phasen Schritt für Schritt.
- [[themen/Elektrodynamik/14.2#Nachweis der Quantelung — Millikan-Öltröpfchen-Versuch|Thema 14 §14.2]] — die Ladungsquantelung im Kontext der Elektrizitätslehre ($Q=n\cdot e$ und Ladungserhaltung).
