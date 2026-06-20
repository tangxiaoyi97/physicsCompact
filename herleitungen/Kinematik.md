---
title: "Kinematik"
order: 1
---

**Zielformeln:**
$$v = a \cdot t, \qquad s = \frac{1}{2} a t^2, \qquad v = g t,\; s = \frac{1}{2} g t^2, \qquad S_v = v \cdot t_R, \qquad S_B = \frac{v^2}{2 a_B}$$

**Gültigkeitsbereich/Annahmen:** konstante Beschleunigung ($a = \text{konst.}$, nach Betrag **und** Richtung); Start aus der Ruhe ($v_0 = 0$) am Ursprung ($s_0 = 0$); für den freien Fall zusätzlich **Luftwiderstand vernachlässigt** und $g$ nahe der Erdoberfläche als konstant betrachtet; beim Bremsen $a_B = \text{konst.}$

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $\bar a = \dfrac{\Delta v}{\Delta t}$ | Durchschnittsbeschleunigung | ✅ S. 2 („Durchschnittsbeschleunigung") |
| $\bar v = \dfrac{\Delta s}{\Delta t}$ | Durchschnittsgeschwindigkeit | ✅ S. 2 („Durchschnittsgeschwindigkeit") |
| $F = m \cdot a$ | Newton'sches Axiom (Aktionsprinzip) | ✅ S. 2 („Newton'sches Axiom") |
| $W = \vec F \cdot \vec s$ | Arbeit — für die Energie-Herleitung | ✅ S. 2 („Arbeit") |
| $E_\text{kin} = \dfrac{m v^2}{2}$ | Kinetische Energie — für die Energie-Herleitung | ✅ S. 2 („Kinetische Energie") |
| $v = a t$, $s = \tfrac12 a t^2$ | Bewegungsgleichungen (gleichm. beschleunigt) | ❌ nicht im Formelnheft — bei der Prüfung selbst aus $\bar a = \Delta v / \Delta t$ herleiten (siehe unten) |
| $S_v = v \cdot t_R$, $S_B = \dfrac{v^2}{2 a_B}$ | Vorbremsstrecke / Bremsstrecke | ❌ nicht im Formelnheft — bei der Prüfung selbst herleiten |

## Herleitung (Schritt für Schritt)

### A) $v = a t$ (aus der Definition der Durchschnittsbeschleunigung)

1. **Voraussetzungen festhalten.** Sei $a = \text{konst.}$ und $v_0 = 0$ bei $t = 0$. (Annahmen zuerst: ohne sie gilt die folgende Vereinfachung nicht.)
2. **Definition anschreiben.** Durchschnittsbeschleunigung (Formelnheft S. 2):
   $$\bar a = \frac{\Delta v}{\Delta t}$$
3. **Konstanz von $a$ ausnutzen.** Bei konstanter Beschleunigung hat der Differenzenquotient in jedem Zeitintervall denselben Wert, also $\bar a = a$. (Das ist genau die Bedeutung von „gleichmäßig beschleunigt".)
4. **Intervall einsetzen.** Von $0$ bis $t$: $\Delta v = v - 0 = v$, $\Delta t = t - 0 = t$, also
   $$a = \frac{v}{t}$$
5. **Beide Seiten mit $t$ multiplizieren** (algebraisches Umformen, erlaubt wegen $t > 0$):
   $$\boxed{v = a \cdot t}$$
   Im $v$-$t$-Diagramm ist das eine **Gerade durch den Ursprung mit Steigung $a$**.

### B) $s = \tfrac12 a t^2$ (Methode der Durchschnittsgeschwindigkeit / Fläche im v-t-Diagramm)

1. **Problem benennen.** Hier ist $v$ **nicht** konstant — $s = v \cdot t$ ist daher unzulässig; man muss mit der **Durchschnittsgeschwindigkeit** $\bar v$ arbeiten.
2. **Durchschnittsgeschwindigkeit bestimmen.** Nach A) wächst $v$ **linear** von $0$ auf den Endwert $v = a t$. Der Mittelwert einer linear veränderlichen Größe ist das arithmetische Mittel von Anfangs- und Endwert (Symmetrie der Geraden um die Intervallmitte):
   $$\bar v = \frac{0 + v}{2} = \frac{v}{2} = \frac{a t}{2}$$
3. **Wegformel mit $\bar v$ anwenden.** Aus $\bar v = \dfrac{\Delta s}{\Delta t}$ (Formelnheft S. 2) mit $\Delta s = s - 0 = s$, $\Delta t = t$ folgt $s = \bar v \cdot t$. Einsetzen von Schritt 2:
   $$s = \frac{a t}{2} \cdot t$$
4. **Zusammenfassen** (Potenzen von $t$ kombinieren):
   $$\boxed{s = \frac{1}{2} a t^2}$$
5. **Geometrische Kontrolle (Fläche im v-t-Diagramm).** Weg = Fläche unter der $v$-$t$-Kurve, hier ein **Dreieck** der Breite $t$ und Höhe $v = a t$:
   $$A_\triangle = \frac{1}{2} \cdot t \cdot a t = \frac{1}{2} a t^2 \checkmark$$
   (Mit Integralrechnung: $s = \int_0^t a\,t'\,\mathrm dt' = \tfrac12 a t^2$ — dasselbe Ergebnis.)

### C) Spezialfall: Freier Fall

1. **Bedingungen des Spezialfalls.** Ohne Luftwiderstand fallen nahe der Erdoberfläche **alle** Körper mit **derselben konstanten** Beschleunigung $g$ (Fallbeschleunigung, Formelnheft S. 1: $g = 9{,}807$ m/s²). Das ist genau der Fall „$a = \text{konst.}$".
2. **Ersetzung $a \to g$** (alle Voraussetzungen von A und B erfüllt, Ergebnisse übernehmen):
   $$v = g \cdot t, \qquad s = \frac{1}{2} g t^2$$
3. **Rechenbeispiel (unabhängig nachgerechnet):** Stein fällt $t = 2{,}5$ s: $s = \tfrac12 \cdot 9{,}81 \cdot 2{,}5^2 = \tfrac12 \cdot 9{,}81 \cdot 6{,}25 \approx 30{,}7$ m, $v = 9{,}81 \cdot 2{,}5 \approx 24{,}5$ m/s. ✓ (stimmt mit Thema 5 überein)

### D) Vorbremsstrecke $S_v = v \cdot t_R$

1. **Physikalische Situation.** Während der Reaktionszeit $t_R$ („Schrecksekunde", ca. 1 s) wird **noch nicht** gebremst — das Auto fährt mit **konstanter Geschwindigkeit** $v$ weiter: gleichförmig geradlinige Bewegung ($a = 0$).
2. **Bei konstantem $v$ ist der Differenzenquotient konstant.** $v$ konstant ⇒ $\bar v = v$; Umformen von $\bar v = \Delta s / \Delta t$:
   $$\boxed{S_v = v \cdot t_R}$$
   $S_v$ wächst **linear** mit $v$.

### E) Bremsstrecke $S_B = \dfrac{v^2}{2 a_B}$ — zwei Herleitungen

**Herleitung 1 (kinematisch).** Bremsen ist eine gleichmäßig beschleunigte Bewegung in Gegenrichtung: $a_B = \text{konst.}$, $v$ nimmt linear von $v$ auf $0$ ab.

1. **Bremszeit bestimmen.** Endgeschwindigkeit null: $0 = v - a_B t$. Umstellen und durch $a_B$ dividieren (erlaubt wegen $a_B \neq 0$):
   $$t = \frac{v}{a_B}$$
2. **Durchschnittsgeschwindigkeit.** $v$ nimmt linear von $v$ auf $0$ ab ⇒ Mittelwert = Mittel aus Anfangs- und Endwert (gleiche Begründung wie B, Schritt 2):
   $$\bar v = \frac{v + 0}{2} = \frac{v}{2}$$
3. **In die Wegformel** $S_B = \bar v \cdot t$ **einsetzen**:
   $$S_B = \frac{v}{2} \cdot \frac{v}{a_B}$$
4. **Zusammenfassen:**
   $$\boxed{S_B = \frac{v^2}{2 a_B}}$$
   (Äquivalente Kontrolle: $s = \tfrac12 a_B t^2$ mit $t = v/a_B$: $S_B = \tfrac12 a_B \cdot \dfrac{v^2}{a_B^2} = \dfrac{v^2}{2 a_B}$ ✓)

**Herleitung 2 (Energie).** Dieselbe Formel über den Arbeit-Energie-Zusammenhang — die $v^2$-Abhängigkeit wird sofort sichtbar.

1. **Kinetische Energie vor dem Bremsen** (Formelnheft S. 2): $E_\text{kin} = \tfrac12 m v^2$.
2. **Bremsarbeit.** Bremskraft $F_B = m \cdot a_B$ (Newton'sches Axiom, S. 2); sie verrichtet längs $S_B$ die Arbeit (Kraft **antiparallel** zum Weg, hier nur Beträge): $W = F_B \cdot S_B = m\,a_B\,S_B$ (Arbeit, S. 2).
3. **Energiebilanz.** Stillstand heißt: Die gesamte kinetische Energie wird durch die Bremsarbeit „vernichtet" (in Wärme umgewandelt):
   $$m\,a_B\,S_B = \frac{1}{2} m v^2$$
4. **Masse $m$ kürzen** (beide Seiten durch $m$ dividieren, erlaubt wegen $m > 0$) — die Bremsstrecke ist massenunabhängig:
   $$a_B\,S_B = \frac{1}{2} v^2$$
5. **Nach $S_B$ auflösen** (durch $a_B$ dividieren):
   $$\boxed{S_B = \frac{v^2}{2 a_B}}$$
   Beide Wege liefern dasselbe. ==$S_B \propto v^2$: doppelte Geschwindigkeit → **vierfache** Bremsstrecke== ($(2v)^2 = 4 v^2$).

**Rechenbeispiel (unabhängig nachgerechnet, $a_B = 7$ m/s², $t_R = 1$ s):** $v = 130$ km/h $= 130/3{,}6 \approx 36{,}1$ m/s:
$$S_v = 36{,}1 \cdot 1 \approx 36\ \text{m}, \qquad S_B = \frac{36{,}1^2}{2 \cdot 7} = \frac{1303}{14} \approx 93\ \text{m}, \qquad S_\text{Anhalte} \approx 129\ \text{m} \checkmark$$

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $a$, $\bar a$ | (Durchschnitts-)Beschleunigung | m/s² |
| $v$ | Geschwindigkeit (beim Bremsen: Geschwindigkeit zu Bremsbeginn) | m/s |
| $v_0$ | Anfangsgeschwindigkeit (hier $=0$) | m/s |
| $\bar v$ | Durchschnittsgeschwindigkeit | m/s |
| $s$ | Weg | m |
| $t$ | Zeit | s |
| $\Delta v$, $\Delta t$, $\Delta s$ | Änderungen von Geschwindigkeit/Zeit/Weg | m/s · s · m |
| $g$ | Fallbeschleunigung $= 9{,}807$ m/s² (Formelnheft S. 1; im Skript meist $9{,}81$) | m/s² |
| $S_v$ | Vorbremsstrecke (Reaktionsweg) | m |
| $t_R$ | Reaktionszeit (ca. 1 s) | s |
| $S_B$ | Bremsstrecke | m |
| $a_B$ | Bremsbeschleunigung (trockene Fahrbahn ca. 7–8 m/s²) | m/s² |
| $m$ | Masse des Autos (tritt in der Energie-Herleitung auf, kürzt sich) | kg |
| $F_B$ | Bremskraft | N |
| $E_\text{kin}$ | Kinetische Energie | J |
| $W$ | Arbeit | J |

## Verknüpfungen

- Herkunft von $E_\text{kin} = \tfrac12 m v^2$ (für die Energie-Herleitung) → [[Arbeit Energie|H02]]
- Dasselbe „Masse kürzt sich"-Muster ($v = \sqrt{2gh}$) → [[Energieerhaltung Anwendungen|H03]]
- Skript: [[themen/Bewegungen/5.2#2) Gleichmäßig beschleunigte Bewegung|Thema 5 §5.2]] ($v=at$, $s=\tfrac12 at^2$, freier Fall), [[themen/Bewegungen/5.3#5.3 Physik im Straßenverkehr|Thema 5 §5.3]] ($S_v$, $S_B$ doppelt hergeleitet), [[themen/Klassische Mechanik/8.5#8.5 Arbeit, Leistung, Energie|Thema 8 §8.5]] (Arbeit & kinetische Energie)
