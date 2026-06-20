---
title: "Arbeit Energie"
order: 2
---

**Zielformeln:**
$$E_\text{kin} = \frac{1}{2} m v^2, \qquad E_\text{pot} = m g h, \qquad W_H = \frac{1}{2} k x^2, \qquad P = \frac{W}{t},\ \ 1\,\text{kWh} = 3{,}6 \cdot 10^6\,\text{J}$$

**Gültigkeitsbereich/Annahmen:** Beschleunigung mit **konstanter Kraft** (d. h. $a = \text{konst.}$), Start aus der Ruhe ($v_0 = 0$); $E_\text{pot} = mgh$ gilt nur im **homogenen Schwerefeld** (nahe der Erdoberfläche, kleines $h$, $g$ als konstant betrachtet); Federenergie nur im **elastischen Bereich** (linearer Bereich des Hooke-Gesetzes).

★ **Maturarelevant:** Die Herleitungen von $E_\text{kin}$ und $E_\text{pot}$ wurden in einer echten Prüfung wörtlich verlangt („Ableitungen durchführen", Prüfungsbogen zu Thema 8).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $W = \vec F \cdot \vec s$ | Arbeit | ✅ S. 2 („Arbeit") |
| $F = m \cdot a$ | Newton'sches Axiom (Aktionsprinzip) | ✅ S. 2 („Newton'sches Axiom") |
| $F = m \cdot g$ | Schwerkraft (nahe Erdoberfläche) | ✅ S. 2 („Schwerkraft") |
| $F = -k \cdot \Delta x$ | Hooke-Gesetz / Federkraft | ✅ S. 2 („Hooke-Gesetz") |
| $E_\text{kin} = \dfrac{m v^2}{2}$ | Kinetische Energie — Zielformel selbst im Heft | ✅ S. 2 („Kinetische Energie") |
| $E_\text{pot} = m g h$ | Potentielle Energie — Zielformel selbst im Heft | ✅ S. 2 („Potentielle Energie") |
| $E_\text{elast} = \dfrac{k x^2}{2}$ | Federenergie — Zielformel selbst im Heft | ✅ S. 2 („Federenergie") |
| $P = \dfrac{\Delta W}{\Delta t}$ | Leistung | ✅ S. 2 („Leistung") |
| $v = a t$, $s = \tfrac12 a t^2$ | Bewegungsgleichungen (gleichm. beschleunigt) | ❌ nicht im Formelnheft — siehe [[Kinematik|H01]], selbst herleiten |
| kWh-Umrechnung | Energieeinheit | ❌ nicht im Formelnheft — auswendig: $1\,\text{kWh} = 1000\,\text{W} \cdot 3600\,\text{s}$ |

## Herleitung (Schritt für Schritt)

### A) ★ Kinetische Energie $E_\text{kin} = \tfrac12 m v^2$ (Beschleunigungsarbeit in fünf Schritten)

1. **Idee (Definition).** $E_\text{kin}$ ist definiert als die **Arbeit**, die nötig ist, um einen Körper der Masse $m$ **aus der Ruhe** auf die Geschwindigkeit $v$ zu beschleunigen. Beschleunigt werde mit **konstanter Kraft** $F$ (⇒ $a = \text{konst.}$, alle Formeln der gleichmäßig beschleunigten Bewegung sind anwendbar).
2. **Definition der Arbeit** (Formelnheft S. 2). Kraft und Weg sind **parallel** ($\cos 0° = 1$), das Skalarprodukt wird zum Produkt:
   $$W = F \cdot s$$
3. **Kraft einsetzen** (Newton'sches Axiom, S. 2): $F = m \cdot a$, also
   $$W = m \cdot a \cdot s$$
4. **Weg einsetzen** (gleichmäßig beschleunigt, aus der Ruhe: $s = \tfrac12 a t^2$, siehe [[Kinematik|H01]] B):
   $$W = m \cdot a \cdot \frac{1}{2} a t^2 = \frac{1}{2} m (a t)^2$$
   (Im letzten Schritt wurde $a \cdot a t^2$ als $(at)^2$ geschrieben — reine Algebra.)
5. **Geschwindigkeit erkennen** (gleichmäßig beschleunigt, aus der Ruhe: $v = a t$, siehe [[Kinematik|H01]] A). $(at)$ durch $v$ ersetzen:
   $$\boxed{W = \frac{1}{2} m v^2 = E_\text{kin}}$$
   Begründung jedes Schrittes: ① Definition der kinetischen Energie über die Beschleunigungsarbeit; ② Definition der Arbeit; ③ Newton'sches Axiom; ④+⑤ Kinematik der gleichmäßig beschleunigten Bewegung. Beachte: $E_\text{kin}$ ist über $v$ **bezugssystemabhängig** (relativ).

### B) ★ Potentielle Energie $E_\text{pot} = m g h$ (Hubarbeit)

1. **Idee (Definition).** $E_\text{pot}$ ist definiert als die **Hubarbeit**, die nötig ist, um einen Körper **mit konstanter Geschwindigkeit** um $h$ anzuheben. Konstante Geschwindigkeit ⇒ Hubkraft gleicht genau die Schwerkraft aus, $F = F_G$ (wäre die Hubkraft größer, ginge die überschüssige Arbeit in kinetische Energie — dann wäre es keine reine „Lageenergie" mehr).
2. **Schwerkraft einsetzen** (Formelnheft S. 2, nahe der Erdoberfläche): $F = F_G = m \cdot g$. **Näherung:** $g$ wird hier als konstant behandelt — erlaubt nur für $h \ll R_E$ (von der Oberfläche bis ca. 40 km Höhe ändert sich $g$ nur um ca. 1 %).
3. **Definition der Arbeit** (S. 2). Kraft und Weg (senkrecht nach oben) sind **parallel**, Weglänge $s = h$:
   $$W = F \cdot s = m g \cdot h$$
4. **Ergebnis.** Diese Arbeit ist als Lageenergie gespeichert:
   $$\boxed{E_\text{pot} = m g h}$$
   Der Nullpunkt (wo $h = 0$ liegt) ist frei wählbar — messbar sind physikalisch nur Energie-**Differenzen**. Für große Abstände (Raumfahrt) gilt stattdessen $E_\text{pot} = -\dfrac{G M m}{r}$, siehe [[Fluchtgeschwindigkeit|H06]].

### C) Federenergie $W_H = \tfrac12 k x^2$ (Dreiecksfläche im F-x-Diagramm)

1. **Problem benennen.** Beim Spannen einer Feder ist die Kraft **nicht konstant**: Nach dem Hooke-Gesetz (S. 2) wächst die nötige Zugkraft linear mit der Dehnung, $F(x') = k \cdot x'$ (Beträge; das Minuszeichen besagt nur, dass die Federkraft der Verformung entgegenwirkt). $W = F \cdot s$ ist daher **nicht** direkt anwendbar.
2. **Arbeit = Fläche unter der F-x-Kurve.** Analog zu „Weg = Fläche im v-t-Diagramm" ([[Kinematik|H01]]): Man zerlegt den Spannvorgang in viele kleine Stücke; in jedem Stück ist die Kraft näherungsweise konstant und verrichtet $\approx F(x')\,\Delta x'$; die Summe ist die Fläche unter der Kurve. **Hier wird der Grenzwert genommen** (Stückbreite $\to 0$), denn nur so wird „näherungsweise konstant" exakt.
3. **Fläche berechnen.** $F(x') = k x'$ ist eine Ursprungsgerade; die Fläche unter ihr von $0$ bis $x$ ist ein **Dreieck**: Breite $x$, Höhe $F(x) = k x$:
   $$W_H = \frac{1}{2} \cdot x \cdot k x$$
4. **Zusammenfassen:**
   $$\boxed{W_H = \frac{1}{2} k x^2}$$
   Diese Arbeit ist als elastische Energie in der Feder gespeichert (im Formelnheft als $E_\text{elast} = \tfrac{k x^2}{2}$ — dieselbe Formel).

### D) Leistung $P = W/t$ und kWh-Umrechnung

1. **Definition** (Formelnheft S. 2): Leistung = Arbeit pro Zeit:
   $$P = \frac{\Delta W}{\Delta t} \quad\text{(bei gleichmäßigem Vorgang kurz } P = \frac{W}{t}\text{)}$$
   Einheit: $1\,\text{W} = 1\,\text{J/s}$.
2. **Umstellen nach der Energie.** Beide Seiten mal $t$: $W = P \cdot t$ — „Leistung × Zeit = Energie".
3. **kWh-Umrechnung (unabhängig nachgerechnet).** ==kWh ist eine **Energie**-Einheit, keine Leistungseinheit==:
   $$1\,\text{kWh} = 1000\,\text{W} \cdot 3600\,\text{s} = 3\,600\,000\,\text{J} = 3{,}6 \cdot 10^6\,\text{J} \checkmark$$

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $W$, $W_H$ | Arbeit; Spannarbeit der Feder | J |
| $E_\text{kin}$ | Kinetische Energie | J |
| $E_\text{pot}$ | Potentielle Energie (homogenes Feld) | J |
| $F$ | Kraft (A: Beschleunigungskraft; B: Hubkraft $=F_G$; C: Zugkraft $=kx'$) | N |
| $F_G$ | Schwerkraft | N |
| $m$ | Masse | kg |
| $a$ | Beschleunigung (konstant) | m/s² |
| $v$ | Endgeschwindigkeit | m/s |
| $s$ | Weg | m |
| $t$ | Zeit | s |
| $g$ | Fallbeschleunigung $= 9{,}807$ m/s² (Formelnheft S. 1; im Skript meist $9{,}81$) | m/s² |
| $h$ | Hubhöhe | m |
| $k$ | Federkonstante | N/m |
| $x$, $x'$ | Dehnung (Endwert; Laufvariable) | m |
| $P$ | Leistung | W |

## Verknüpfungen

- Herleitung der verwendeten Kinematik $v = at$, $s = \tfrac12 at^2$ → [[Kinematik|H01]]
- $E_\text{kin}$ und $E_\text{pot}$ im Zusammenspiel (Energieerhaltung) → [[Energieerhaltung Anwendungen|H03]]
- Potentielle Energie für große Abstände ($-GMm/r$, Gravitationsenergie) → [[Fluchtgeschwindigkeit|H06]]
- Skript: [[themen/Klassische Mechanik/8.5#8.5 Arbeit, Leistung, Energie|Thema 8 §8.5]] (Fünf-Schritt-Herleitung, potentielle Energie, Leistung, kWh), [[themen/Klassische Mechanik/8.4#8.4 Hooke'sches Gesetz und Experiment|Thema 8 §8.4]] (Federenergie als Dreiecksfläche)
