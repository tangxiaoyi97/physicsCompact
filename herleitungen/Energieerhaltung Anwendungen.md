---
title: "Energieerhaltung Anwendungen"
order: 3
---

**Zielformeln:**
$$v = \sqrt{2 g h}, \qquad h = \frac{v^2}{2 g}$$

**Gültigkeitsbereich/Annahmen:** abgeschlossenes System (reibungsfrei, **Luftwiderstand vernachlässigt**); homogenes Schwerefeld nahe der Erdoberfläche ($g = \text{konst.}$, $h \ll R_E$); freier Fall aus der Ruhe ($v_0 = 0$).

★ **Maturarelevant:** $h = v^2/(2g)$ ist genau die Boeing-Zusatzfrage aus der echten Prüfung („In welcher Höhe wären beide Energieformen gleich groß?").

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $E_\text{kin} = \dfrac{m v^2}{2}$ | Kinetische Energie | ✅ S. 2 („Kinetische Energie") |
| $E_\text{pot} = m g h$ | Potentielle Energie | ✅ S. 2 („Potentielle Energie") |
| $E_\text{ges} = E_\text{kin} + E_\text{pot} = \text{konst.}$ | Energieerhaltungssatz | ❌ nicht im Formelnheft (nur die einzelnen Energieformen stehen drin) — den Satz selbst muss man bei der Prüfung formulieren |
| $v = \sqrt{2gh}$, $h = \dfrac{v^2}{2g}$ | Endgeschwindigkeit des Falls / Gleichenergiehöhe | ❌ nicht im Formelnheft — bei der Prüfung selbst herleiten (siehe unten) |

## Herleitung (Schritt für Schritt)

### A) Endgeschwindigkeit des freien Falls $v = \sqrt{2 g h}$ (die Masse kürzt sich!)

1. **Erhaltungssatz und zwei Zustände anschreiben.** Im abgeschlossenen System bleibt die Gesamtenergie erhalten. Verglichen werden **Start** (Höhe $h$, in Ruhe) und **Aufprall** (Höhe $0$, Geschwindigkeit $v$):
   - Start: $E_\text{ges} = E_\text{pot} = m g h$ ($v_0 = 0$ ⇒ $E_\text{kin} = 0$; Nullpunkt am Boden gewählt).
   - Aufprall: $E_\text{ges} = E_\text{kin} = \tfrac12 m v^2$ ($h = 0$ ⇒ $E_\text{pot} = 0$).
2. **Gleichsetzen** (Energieerhaltung: beide Zustände haben dieselbe Gesamtenergie, keine Reibungsverluste):
   $$m g h = \frac{1}{2} m v^2$$
3. **Masse $m$ kürzen** (beide Seiten durch $m$ dividieren, erlaubt wegen $m > 0$):
   $$g h = \frac{1}{2} v^2$$
   ==Das ist der Kernpunkt: Die Endgeschwindigkeit ist massenunabhängig== — schwere und leichte Körper fallen (im Vakuum) gleich schnell, im Einklang mit Galilei.
4. **Beide Seiten mal 2** (Bruch beseitigen):
   $$v^2 = 2 g h$$
5. **Wurzel ziehen** (positive Wurzel, da der Geschwindigkeitsbetrag $v \geq 0$ ist):
   $$\boxed{v = \sqrt{2 g h}}$$
6. **Unabhängige Kontrolle (Quervergleich mit H01):** Nach [[Kinematik|H01]] gilt bei $t = 2{,}5$ s: $h \approx 30{,}7$ m, $v \approx 24{,}5$ m/s. Einsetzen: $\sqrt{2 \cdot 9{,}81 \cdot 30{,}7} = \sqrt{602{,}3} \approx 24{,}5$ m/s ✓ — Kinematik und Energiemethode liefern dasselbe.
   **Größenordnungsbeispiel (Regentropfen aus dem Skript):** Ohne Luftwiderstand erreichte ein Tropfen aus $h = 2000$ m: $v = \sqrt{2 \cdot 9{,}81 \cdot 2000} \approx 198$ m/s ✓ (real nur 7–9 m/s wegen Endgeschwindigkeit).

### B) ★ Gleichenergiehöhe $h = \dfrac{v^2}{2 g}$ (Boeing-Zusatzfrage)

**Frage:** Ein Flugzeug fliegt mit Geschwindigkeit $v$ — in welcher Höhe gilt $E_\text{pot} = E_\text{kin}$?

1. **Bedingung anschreiben** (die Aufgabe verlangt Gleichheit beider Energieformen):
   $$m g h = \frac{1}{2} m v^2$$
2. **Masse $m$ kürzen** (beide Seiten durch $m$) — die Antwort ist **unabhängig** davon, wie schwer das Flugzeug ist:
   $$g h = \frac{1}{2} v^2$$
3. **Nach $h$ auflösen** (beide Seiten durch $g$):
   $$\boxed{h = \frac{v^2}{2 g}}$$
   (Formal ist das Schritt 4 von A, nach $h$ aufgelöst — zwei Lesarten derselben Gleichung. Strukturgleich mit der Bremsstrecke $S_B = v^2/(2a_B)$: ersetze $a_B \to g$.)
4. **Prüfungszahlen (unabhängig nachgerechnet):** $v = 946$ km/h $= 946/3{,}6 \approx 262{,}8$ m/s:
   $$h = \frac{262{,}8^2}{2 \cdot 9{,}81} \approx \frac{69\,060}{19{,}62} \approx 3520\ \text{m}$$
   (Das Skript gibt $\approx 3519$ m — mit dem ungerundeten $v = 946/3{,}6$ gerechnet; reine Rundungsdifferenz, ca. 3,5 km.) ✓
5. **Bonus fürs Prüfungsgespräch (philosophischer Haken des Lehrers):** In der gleichförmig fliegenden Kabine kann man durch **kein** Experiment feststellen, dass beide Energieformen gerade gleich sind — $E_\text{kin}$ ist bezugssystemabhängig, und alle gleichförmig bewegten Bezugssysteme sind gleichberechtigt (Relativitätsprinzip).

### C) Energiekreislauf von Fadenpendel und springendem Ball (qualitativ + Formeln)

**Fadenpendel:** Beim idealen Pendel (keine Reibung, kein Luftwiderstand) wandeln sich die beiden Energieformen **periodisch** ineinander um, die Summe bleibt konstant:

1. **Höchste Punkte (Umkehrpunkte):** $v = 0$ ⇒ $E_\text{kin} = 0$; die gesamte Energie steckt in $E_\text{pot} = m g h$ ($h$ = Anhebung gegenüber dem tiefsten Punkt).
2. **Tiefster Punkt:** $h = 0$ ⇒ $E_\text{pot} = 0$; die gesamte Energie steckt in $E_\text{kin} = \tfrac12 m v_\text{max}^2$.
3. **Aus derselben Gleichung wie in A** ($mgh = \tfrac12 m v_\text{max}^2$, $m$ kürzt sich) folgen Talgeschwindigkeit und Steighöhe:
   $$v_\text{max} = \sqrt{2 g h}, \qquad h = \frac{v_\text{max}^2}{2 g}$$
   ⇒ Das ideale Pendel kehrt **immer auf dieselbe Höhe** zurück (direkte Folge der Energieerhaltung).
4. **Reales Pendel:** Reibung und Luftwiderstand entziehen pro Periode etwas mechanische Energie (→ Wärme) ⇒ die Amplitude klingt langsam ab — die Energie verschwindet nicht, sie verlässt nur das Konto „kinetisch + potentiell".

**Springender Ball:** Beim Fallen $E_\text{pot} \to E_\text{kin}$; beim Aufprall wird die kinetische Energie kurz zu **Verformungsenergie** (elastischer Energie) und wieder zurück; beim Aufsteigen $E_\text{kin} \to E_\text{pot}$. Bei jedem Aufprall geht ein Teil in **Wärme und Schall** (nicht vollständig elastisch) ⇒ die Sprunghöhe nimmt von Mal zu Mal ab; nur ein ideal elastischer Ball erreichte wieder die Ausgangshöhe $h = v^2/(2g)$.

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $E_\text{kin}$ | Kinetische Energie | J |
| $E_\text{pot}$ | Potentielle Energie | J |
| $E_\text{ges}$ | Gesamtenergie (im abgeschlossenen System erhalten) | J |
| $m$ | Masse (kürzt sich in jeder Herleitung) | kg |
| $v$ | Geschwindigkeit (A: Endgeschwindigkeit; B: Fluggeschwindigkeit) | m/s |
| $v_\text{max}$ | Pendelgeschwindigkeit im tiefsten Punkt | m/s |
| $h$ | Höhe (relativ zum gewählten Nullpunkt) | m |
| $g$ | Fallbeschleunigung $= 9{,}807$ m/s² (Formelnheft S. 1; im Skript $9{,}81$) | m/s² |

## Verknüpfungen

- Herkunft der Energieformeln (Herleitung von $E_\text{kin}$, $E_\text{pot}$) → [[Arbeit Energie|H02]]
- Strukturgleiche Formel $S_B = v^2/(2 a_B)$ (ersetze $g \to a_B$) → [[Kinematik|H01]]
- Dieselbe Energiemethode für große Abstände im Gravitationsfeld (Fluchtgeschwindigkeit) → [[Fluchtgeschwindigkeit|H06]]
- Skript: [[themen/Klassische Mechanik/8.5#Energieerhaltungssatz|Thema 8 §8.5 Energieerhaltung]] ($v=\sqrt{2gh}$, Boeing-Frage, Bezugssystem-Diskussion), [[themen/Bewegungen/5.2#3) Ungleichmäßig beschleunigte Bewegung|Thema 5 §5.2]] (Regentropfen-Beispiel 198 m/s)
