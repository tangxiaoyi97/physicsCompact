---
title: "Schwarzschildradius"
order: 9
---

**Zielformel:**
$$\boxed{R_S=\frac{2\,G\,M}{c^2}}\qquad\text{sowie}\qquad \rho=\frac{3\,c^6}{32\,\pi\,G^3 M^2}\;\propto\;\frac{1}{M^2}$$

**Gültigkeitsbereich / Annahmen:**
- **Heuristische (newtonsche) Herleitung**: klassische kinetische Energie und Fluchtgeschwindigkeit, Licht als „Wurfkörper mit $c$" behandelt — siehe den eigenen Abschnitt „Warum nur heuristisch".
- Masse $M$ kugelsymmetrisch, nicht rotierend, ungeladen (genau die Voraussetzungen der Schwarzschild-Lösung).
- „Volumen" in der Dichteformel = **Kugelvolumen innerhalb des Ereignishorizonts** (Konvention für die mittlere Dichte, keine reale Materieverteilung — die ART sagt den Kollaps zur Singularität voraus).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $E_\text{kin}=\dfrac{m v^2}{2}$ | kinetische Energie | ✅ S. 2 („$E_\text{kin}=\frac{mv^2}{2}$") |
| $W=G\,M\,m\left(\dfrac{1}{r_1}-\dfrac{1}{r_2}\right)$ | Gravitationsenergie | ✅ S. 2 („Gravitationsenergie") |
| $v_F=\sqrt{\dfrac{2GM}{R}}$ | Fluchtgeschwindigkeit | ❌ nicht im Formelnheft — selbst herleiten (Schritte 1–2; ausführlich in [[themen/Raumfahrtphysik/2.4#2.4 Fluchtgeschwindigkeit|Thema 2 §2.4]]) |
| $\rho=\dfrac{m}{V}$ | Dichte | ✅ S. 2 („$\rho=\frac{m}{V}$") |
| $V_\text{Kugel}=\dfrac{4}{3}\pi R^3$ | Kugelvolumen | ❌ Mathematik, nicht im Formelnheft — selbst hinschreiben |
| $c=2{,}9979\cdot10^{8}$ m/s | Lichtgeschwindigkeit | ✅ S. 1 (Konstanten) |

## Herleitung (Schritt für Schritt)

### A) Schwarzschildradius

1. **Zuerst die Fluchtgeschwindigkeit herleiten** (Energieerhaltung: an der Oberfläche $r_1=R$ erhält der Körper genau so viel kinetische Energie, dass er den Potenzialtopf bis $r_2\to\infty$ verlässt und dort mit $v=0$ ankommt. Die nötige Hubarbeit liefert die Gravitationsenergie von S. 2, mit $\frac{1}{r_2}\to0$ für $r_2\to\infty$):
   $$\frac{m\,v_F^2}{2}=G\,M\,m\left(\frac{1}{R}-\underbrace{\frac{1}{\infty}}_{=0}\right)=\frac{G M m}{R}$$
2. **$m$ kürzen und nach $v_F$ auflösen** (durch $m\neq0$ dividieren, mal 2, Wurzel ziehen — die Fluchtgeschwindigkeit ist unabhängig von der Masse des Wurfkörpers):
   $$v_F=\sqrt{\frac{2 G M}{R}}$$
3. **$v_F=c$ setzen (definierende Bedingung des schwarzen Lochs)** (am Ereignishorizont ist die Fluchtgeschwindigkeit genau gleich der Lichtgeschwindigkeit: selbst Licht entkommt gerade nicht mehr. Einsetzen und quadrieren):
   $$c^2=\frac{2 G M}{R}$$
4. **Nach $R$ auflösen** (beide Seiten mal $\frac{R}{c^2}$ — der kritische Radius heißt **Schwarzschildradius**):
   $$\boxed{R_S=\frac{2\,G\,M}{c^2}}$$
   ==Jeder Körper hat seinen eigenen $R_S$==: Wird die Masse $M$ auf weniger als $R_S$ komprimiert, wird sie zum schwarzen Loch.

### Warum nur heuristisch (in der Prüfung unbedingt ansprechen!)

- **Licht hat keine Ruhemasse:** Schritt 1 behandelt Licht als Wurfkörper der Masse $m$ — für Photonen unzulässig ($m$ kürzt sich zwar, aber die Logik beruht auf dem Bild eines massebehafteten Wurfkörpers).
- **$\tfrac12 mv^2$ ist bei $v\approx c$ nicht zulässig:** Die klassische kinetische Energie ist nur die Niedriggeschwindigkeits-Näherung; nahe $c$ gilt die relativistische Energie (Formelnheft S. 5: $E_\text{kin}=(m-m_0)c^2$) — die newtonsche Mechanik ist hier ohnehin außerhalb ihres Geltungsbereichs.
- **Die strenge Herleitung gehört zur ART:** 1916 fand Karl Schwarzschild die **exakte Lösung** der Einstein'schen Feldgleichungen für das kugelsymmetrische Vakuum; der Ereignishorizont liegt bei $R_S=2GM/c^2$.
- **Gleiches Ergebnis = Zufall:** Die newtonsche Rechnung liefert **exakt dieselbe** Formel — sogar der Faktor 2 stimmt — das ist ein **glücklicher Zufall**, kein Verdienst der Argumentation. In der Prüfung aktiv darauf hinweisen (Skript-Wortlaut: „glücklicher Zufall").

### Rechenbeispiele (mit Probe)

5. **Erde** ($M_E=5{,}974\cdot10^{24}$ kg, S. 1):
   $$R_S=\frac{2\cdot6{,}673\cdot10^{-11}\cdot5{,}974\cdot10^{24}}{(2{,}9979\cdot10^{8})^2}=\frac{7{,}973\cdot10^{14}}{8{,}987\cdot10^{16}}\approx 8{,}9\cdot10^{-3}\ \text{m}\approx 9\ \text{mm}\ \checkmark$$
6. **Sonne** ($M_S=1{,}989\cdot10^{30}$ kg, S. 1):
   $$R_S=\frac{2\cdot6{,}673\cdot10^{-11}\cdot1{,}989\cdot10^{30}}{8{,}987\cdot10^{16}}=\frac{2{,}655\cdot10^{20}}{8{,}987\cdot10^{16}}\approx 2{,}95\cdot10^{3}\ \text{m}\approx 3\ \text{km}\ \checkmark$$

### B) Mittlere Dichte eines schwarzen Lochs

7. **Definition der mittleren Dichte ansetzen** ($\rho=m/V$ von S. 2, Volumen = Horizontkugel $V=\tfrac43\pi R_S^3$):
   $$\rho=\frac{M}{\tfrac{4}{3}\pi R_S^3}=\frac{3M}{4\pi R_S^3}$$
8. **Zuerst $R_S^3$ berechnen** (Schritt 4 als Ganzes hoch 3 — Zähler und Nenner getrennt potenzieren):
   $$R_S^3=\left(\frac{2GM}{c^2}\right)^3=\frac{8\,G^3 M^3}{c^6}$$
9. **Einsetzen und vereinfachen** (Division durch einen Bruch = Multiplikation mit dem Kehrwert; $M$ kürzt sich einmal, im Nenner bleibt $M^2$):
   $$\rho=\frac{3M}{4\pi}\cdot\frac{c^6}{8\,G^3 M^3}=\boxed{\frac{3\,c^6}{32\,\pi\,G^3 M^2}}\;\propto\;\frac{1}{M^2}$$
   Anschaulicher Grund: $R_S\propto M$ → Volumen $\propto M^3$, Masse aber nur $\propto M$ → Dichte $\propto M/M^3=1/M^2$. ==Je größer das schwarze Loch, desto **kleiner** die mittlere Dichte.==
10. **Probe: schwarzes Loch von Sonnenmasse** ($c^6=(c^2)^3=(8{,}987\cdot10^{16})^3=7{,}26\cdot10^{50}$; $G^3=(6{,}673\cdot10^{-11})^3=2{,}97\cdot10^{-31}$; $M_S^2=3{,}956\cdot10^{60}$):
    $$\rho=\frac{3\cdot7{,}26\cdot10^{50}}{32\pi\cdot2{,}97\cdot10^{-31}\cdot3{,}956\cdot10^{60}}=\frac{2{,}18\cdot10^{51}}{1{,}18\cdot10^{32}}\approx 1{,}8\cdot10^{19}\ \tfrac{\text{kg}}{\text{m}^3}\ (\approx 2\cdot10^{19})$$
    Gegenprobe (ohne Formel, direkt $\rho=M/V$): $R_S=2953$ m → $V=\tfrac43\pi\cdot(2953)^3=1{,}08\cdot10^{11}$ m³ → $\rho=\frac{1{,}989\cdot10^{30}}{1{,}08\cdot10^{11}}\approx1{,}8\cdot10^{19}$ kg/m³ ✓ (weit über Kernmateriedichte $\sim10^{17}$ kg/m³).
    Größenordnung umgekehrt: supermassives Loch mit $M\sim10^{9}M_\odot$ → $\rho$ um Faktor $10^{18}$ kleiner → $\approx18$ kg/m³, **dünner als Wasser**.

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $R_S$ | Schwarzschildradius (Radius des Ereignishorizonts) | m |
| $M$ | Masse des Himmelskörpers / schwarzen Lochs | kg |
| $m$ | Wurfkörper (Probemasse, wird gekürzt) | kg |
| $v_F$ | Fluchtgeschwindigkeit | m/s |
| $R$ | Abstand des Startpunkts vom Massenmittelpunkt (Oberflächenradius) | m |
| $r_1, r_2$ | Start-/Zielabstand in der Gravitationsenergie-Formel | m |
| $\rho$ | mittlere Dichte (innerhalb des Horizonts) | kg/m³ |
| $V$ | Volumen der Horizontkugel | m³ |
| $c$ | Vakuumlichtgeschwindigkeit $=2{,}9979\cdot10^{8}$ m/s (Formelnheft S. 1; im Skript $c_0$) | m/s |
| $G$ | Gravitationskonstante $=6{,}673\cdot10^{-11}\ \tfrac{\text{N·m}^2}{\text{kg}^2}$ (Formelnheft S. 1) | N·m²/kg² |
| $M_E,\ M_S$ | Erd-/Sonnenmasse $=5{,}974\cdot10^{24}$ / $1{,}989\cdot10^{30}$ kg (Formelnheft S. 1) | kg |

## Verknüpfungen

- [[Gravitationsfeldstaerke Erdmasse|H08]] — die Kombination $GM$ und „jeder Himmelskörper in derselben Formelmaschine".
- [[themen/Gravitationsphysik/11.7#Schwarzschildradius|Thema 11 §11.7]] — Skript-Fassung (inkl. Nachfrage „Ist das streng?", Singularität, LHC-Klage); [[themen/Gravitationsphysik/11.7#Mittlere Dichte eines schwarzen Lochs|§11.7 mittlere Dichte]].
- [[themen/Raumfahrtphysik/2.4#2.4 Fluchtgeschwindigkeit|Thema 2 §2.4]] — vollständige Energieerhaltungs-Herleitung der Fluchtgeschwindigkeit (ausführliche Version der Schritte 1–2).
