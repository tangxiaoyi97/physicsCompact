---
title: "Elektrische Leistung"
order: 17
---

**Zielformeln:**
$$P=U\cdot I \qquad\text{Erweiterungen:}\qquad W_{el}=U\,I\,t,\qquad P=I^2R=\frac{U^2}{R}$$

**Gültigkeit/Annahmen:**
- $P=UI$ gilt universell für **jedes** elektrische Gerät (es werden nur die Definitionen von $U$ und $I$ benutzt).
- Die Erweiterungen $P=I^2R=U^2/R$ setzen **zusätzlich** das Ohm'sche Gesetz voraus (ohmscher Leiter mit konstantem $R$, z. B. Heizdraht; bei der Glühbirne ändert sich $R$ mit der Temperatur — nur näherungsweise gültig).
- Gilt für Gleichstrom sowie für Effektivwerte beim Wechselstrom (S. 5).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $W=\Delta\varphi\cdot Q=U\cdot Q$ | Elektr. Verschiebungsarbeit → umgestellt $U=W/Q$ | ✅ S. 4 („Elektr. Verschiebungsarbeit") |
| $I=\dfrac{\Delta Q}{\Delta t}$ | Elektrischer Strom | ✅ S. 4 („Elektrischer Strom") |
| $P=\dfrac{\Delta W}{\Delta t}$ | Leistung | ✅ S. 2 („$P=\Delta W/\Delta t$") |
| $P_{el}=U\cdot I$ | Stromleistung — die Zielformel selbst | ✅ S. 4 („Stromleistung") |
| $W_{el}=Q\cdot U=I\cdot U\cdot t$ | Stromarbeit | ✅ S. 4 („Stromarbeit") |
| $R=\dfrac{\Delta U}{\Delta I}$ | Ohm'sches Gesetz | ✅ S. 4 („Ohm") |

> ✎ Die Zielformel steht zwar ✅ im Formelnheft, aber bei der mündlichen Prüfung muss man sie **aus den Definitionen herleiten** können — „warum ist Spannung mal Strom eine Leistung?"

## Herleitung (Schritt für Schritt)

### Schritt 1 — zwei Definitionen

1. **Spannung = Energie pro Ladung.** S. 4 „Elektr. Verschiebungsarbeit" gibt $W=U\cdot Q$; umgestellt:
   $$U=\frac{W}{Q}$$
   Bedeutung: die Energie, die jedes Coulomb Ladung beim Durchgang durch das Gerät abgibt (J/C = V).
2. **Strom = Ladung pro Zeit.** S. 4 „Elektrischer Strom":
   $$I=\frac{Q}{t}$$
   Bedeutung: die pro Sekunde durch den Leiterquerschnitt fließende Ladung (C/s = A).

### Schritt 2 — Leistung = Produkt der beiden Definitionen

1. **Definition der Leistung** (S. 2): $P=\dfrac{W}{t}$ (pro Sekunde umgesetzte Energie).
2. **Erweitern** — Zähler und Nenner mit $Q$ (identische Umformung, $Q\neq0$):
   $$P=\frac{W}{t}=\frac{W}{Q}\cdot\frac{Q}{t}$$
3. **Die Definitionen aus Schritt 1 einsetzen:**
   $$\boxed{P=U\cdot I}$$
   Merksatz: „Energie pro Ladung × Ladung pro Zeit" = Energie pro Zeit.
   **Einheitenprobe:** $\text{V}\cdot\text{A}=\dfrac{\text{J}}{\text{C}}\cdot\dfrac{\text{C}}{\text{s}}=\dfrac{\text{J}}{\text{s}}=\text{W}$ ✓.
4. **Physikalisches Bild:** Die Elektronen „reiben" an den Atomrümpfen und geben die Energie als **Joule'sche Wärme** ab (Föhn, Herdplatte).

### Schritt 3 — Erweiterung 1: Stromarbeit $W_{el}=UIt$

Aus $P=W/t$ folgt $W=P\cdot t$; mit $P=UI$:
$$\boxed{W_{el}=U\,I\,t}$$
Identisch mit Formelnheft S. 4 „Stromarbeit $W_{el}=Q\cdot U=I\cdot U\cdot t$" ($Q=It$ ist die umgestellte Definition aus Schritt 1).

### Schritt 4 — Erweiterung 2: Ohm'sches Gesetz einsetzen

**Zusatzannahme:** ohmscher Leiter, $R=U/I$ konstant (S. 4).

1. $U$ eliminieren mit $U=R\,I$:
   $$P=U I=(RI)\cdot I=\boxed{I^2R}$$
2. $I$ eliminieren mit $I=U/R$:
   $$P=U I=U\cdot\frac{U}{R}=\boxed{\frac{U^2}{R}}$$
3. **Anwendungshinweise:** $I^2R$ erklärt die Übertragungsverluste (bei fester Übertragungsleistung: Hochspannung → kleiner Strom → kleine Verluste); $U^2/R$ erklärt das Hausnetz ($U=230$ V fest: **großes $P$ = kleiner Widerstand**).

### Schritt 5 — kWh-Umrechnung und Rechenbeispiel (mit Probe)

1. **Kilowattstunde:** Der Stromzähler misst die Stromarbeit $W_{el}$.
   $$1\ \text{kWh}=1000\ \text{W}\cdot3600\ \text{s}=3{,}6\cdot10^6\ \text{J}$$
2. **Beispiel: Föhn 2000 W / 230 V.**
   - Strom: $I=\dfrac{P}{U}=\dfrac{2000\ \text{W}}{230\ \text{V}}\approx 8{,}70\ \text{A}$.
   - Widerstand (ohmsche Näherung): $R=\dfrac{U}{I}=\dfrac{230}{8{,}70}\approx 26{,}4\ \Omega$.
   - **Unabhängige Probe** (Rückeinsetzen in die Erweiterung): $P=\dfrac{U^2}{R}=\dfrac{230^2}{26{,}4}=\dfrac{52\,900}{26{,}4}\approx 2004\ \text{W}\approx2000$ W ✓.
   - 15 min Betrieb: $W_{el}=2\ \text{kW}\cdot0{,}25\ \text{h}=0{,}5$ kWh $=1{,}8\cdot10^6$ J.
   - Konsistent mit dem Skriptum (§14.5: $I\approx8{,}7$ A, $R\approx26\ \Omega$ — viel kleiner als bei der 60-W-Glühbirne).

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $P$ | (elektrische) Leistung | W = J/s |
| $U$ | Spannung = Energie pro Ladung $W/Q$ | V = J/C |
| $I$ | Stromstärke = Ladung pro Zeit $Q/t$ | A = C/s |
| $W,\ W_{el}$ | (elektrische) Arbeit / Energie | J (praktisch kWh, $1\ \text{kWh}=3{,}6\cdot10^6$ J) |
| $Q$ | Ladung | C |
| $t$ | Zeit | s |
| $R$ | Widerstand (beim ohmschen Leiter konstant) | Ω = V/A |

## Verknüpfungen

- Skriptum: [[themen/Elektrodynamik/14.5#14.5 Grundgrößen und Ohm'sches Gesetz|Thema 14 §14.5]] (Definitionen, Kurzherleitung und 230-V/2000-W-Beispiel identisch)
- Übertragungsverluste und Trafo: [[themen/Elektrodynamik/14.10#14.10 Gleich- und Wechselstrom|Thema 14 §14.10]]
- Mechanische Leistungsdefinition $P=\Delta W/\Delta t$: [[Arbeit Energie|H02]]
