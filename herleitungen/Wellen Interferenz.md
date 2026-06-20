---
title: "Wellen Interferenz"
order: 15
---

**Zielformeln:**
$$\text{①}\; c=\lambda f \qquad \text{②}\; d\sin\varphi_k=k\lambda \qquad \text{③}\; d_\text{Schicht}=\frac{\lambda}{4n} \qquad \text{④}\; \lambda=\frac{r_k^2}{k\,R}$$

**Gültigkeit/Annahmen:**
- ① gilt für **jede** periodische Welle (Schall, Wasser, Licht); einzige Voraussetzung: die Wellenform verschiebt sich mit konstanter Geschwindigkeit $c$.
- ② Fraunhofer-Bedingung (Fernfeld): Schirm weit weg ($D\gg d$), austretende Strahlen näherungsweise **parallel**; Spaltabstand $d$ konstant.
- ③ **senkrechter Einfall**; Brechungsindex der Schicht liegt zwischen den Nachbarmedien ($n_\text{Luft}<n_\text{Schicht}<n_\text{Glas}$), daher haben **beide** reflektierten Wellen einen $\pi$-Sprung.
- ④ **Kleinwinkel-/Dünnschicht-Näherung** $d\ll R$ (Luftspalt viel dünner als Krümmungsradius); monochromatisches Licht, senkrechter Einfall; **dunkle Ringe** im reflektierten Licht.

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $v=\lambda\cdot f$ | Wellengeschwindigkeit | ✅ S. 3 („Wellengeschwindigkeit") |
| $f=1/T$ | Frequenz–Periode | ✅ S. 2 („$f=1/T$") |
| $\sin\varphi_k=k\cdot\lambda/d$ | Interferenzmaxima beim Mehrfachspalt | ✅ S. 4 („Interferenzmaxima beim Mehrfachspalt") — umgestellte Form der Zielformel ② |
| $\lambda_n=\lambda_0/n$ | Wellenlänge im Medium | ✅ S. 4 („Wellenlänge im Medium") |
| konstruktiv $\Delta s=k\lambda$ / destruktiv $\Delta s=(k+\tfrac12)\lambda$ | Interferenzbedingungen | ❌ nicht im Formelnheft — selbst anschreiben (Begründung in ② Schritt 3) |
| Reflexion am dichteren Medium: Sprung $\pi$; am dünneren: kein Sprung | Phasensprung | ❌ nicht im Formelnheft — Wellensatz, selbst formulieren |
| $r^2=d\,(2R-d)$ | Höhensatz / Kreisgeometrie | ❌ Mathematik, nicht im Formelnheft |
| $c=2{,}9979\cdot10^8$ m/s | Lichtgeschwindigkeit | ✅ S. 1 (Konstantentabelle) |

## Herleitung (Schritt für Schritt)

### ① $c=\lambda f$ — direkt aus den Definitionen

1. **Schlüsselbeobachtung:** Nach **einer** Periode $T$ sieht die Welle wieder genauso aus — nur um **eine Wellenlänge** $\lambda$ verschoben (genau das sind die Definitionen von $T$ und $\lambda$: zeitliche bzw. räumliche Periode).
2. **Allgemeine Geschwindigkeitsformel** (gleichförmig): $c=\dfrac{\text{Weg}}{\text{Zeit}}=\dfrac{\lambda}{T}$.
3. **Einsetzen** von $f=\dfrac1T$ (S. 2):
   $$\boxed{c=\lambda\cdot f}$$
4. **Probe (UKW-Sender 88,6 MHz):** $\lambda=\dfrac{c}{f}=\dfrac{3\cdot10^8\ \text{m/s}}{88{,}6\cdot10^6\ \text{Hz}}\approx 3{,}386\ \text{m}$.
   (Mit dem genauen S.-1-Wert $c=2{,}9979\cdot10^8$: $\lambda\approx3{,}384$ m — ebenfalls $\approx3{,}4$ m; das Skriptum rundet auf 3,3 m.) Radiowellen im Meterbereich vs. Lichtwellen im nm-Bereich unten.

### ② Maxima am Gitter/Doppelspalt: $d\sin\varphi_k=k\lambda$

1. **Geometrie:** Benachbarte Spalte im Abstand $d$; Schirm weit weg ($D\gg d$) → die beiden Strahlen zum selben Schirmpunkt sind näherungsweise **parallel**, Winkel $\varphi$ zur Normalen.
2. **Geometrie des Gangunterschieds:** Lot vom oberen Spalt auf den Strahl des unteren Spalts → rechtwinkliges Dreieck mit **Hypotenuse** $d$; der Mehrweg des unteren Strahls ist die **Gegenkathete** von $\varphi$:
   $$\Delta s=d\cdot\sin\varphi$$
3. **Gleichphasigkeit (warum ganzzahlige Vielfache von λ):** Um eine Wellenlänge verschoben, deckt sich eine Welle exakt mit sich selbst (Phase $2\pi$). **Konstruktive** Interferenz (Berg auf Berg, maximale Helligkeit) verlangt also einen Gangunterschied von **ganzzahligen** Wellenlängen:
   $$\Delta s=k\lambda,\qquad k=0,1,2,\dots$$
4. **2 und 3 kombinieren:**
   $$\boxed{d\sin\varphi_k=k\lambda}\quad\Longleftrightarrow\quad \sin\varphi_k=\frac{k\lambda}{d}$$
   Die rechte Form ist **wörtlich** Formelnheft S. 4 „Interferenzmaxima beim Mehrfachspalt" — darf direkt zitiert werden.
5. **Kleinwinkel-Erweiterung (Messexperiment im Skriptum):** Für $D\gg s$ gilt $\sin\varphi\approx\tan\varphi=\dfrac{s}{D}$ → $\lambda=d\cdot\dfrac{s}{D}$.
   **Probe (rote Zeile des Skriptums):** $d=10^{-5}$ m, $s=0{,}195$ m, $D=3$ m → $\lambda=10^{-5}\cdot\dfrac{0{,}195}{3}=6{,}5\cdot10^{-7}$ m $=650$ nm ✓ (rot).

### ③ λ/4-Antireflexschicht: $d=\dfrac{\lambda}{4n}$

1. **Aufbau:** Auf Glas ($n_\text{Glas}\approx1{,}5$) eine Schicht mit **dazwischenliegendem** Brechungsindex (MgF₂, $n\approx1{,}38$). Senkrechter Einfall; Teilreflexion an der Schichtoberseite und an der Grenze Schicht–Glas.
2. **Die beiden Phasensprünge heben sich auf:** Wellensatz — Reflexion am **dichteren** Medium springt um $\pi$ („festes Ende"), am dünneren nicht. Hier gilt $n_\text{Luft}<n<n_\text{Glas}$: **beide** Grenzflächen reflektieren zum dichteren Medium → beide Wellen springen um $\pi$ → die Sprünge tragen **netto nichts** zur Phasendifferenz bei; nur der Gangunterschied zählt.
3. **Optischer Gangunterschied:** Die untere Welle läuft in der Schicht **hinunter und wieder hinauf** — geometrisch $2d$ mehr. In der Schicht ist die Wellenlänge auf $\lambda_n=\lambda/n$ verkürzt (S. 4 „Wellenlänge im Medium") — auf gleicher Strecke passen mehr Wellenlängen, effektiver **optischer Weg** = geometrischer Weg × $n$:
   $$\Delta s_\text{opt}=2nd$$
4. **Auslöschungsbedingung (Entspiegelung = destruktive Interferenz der Reflexe):** Gangunterschied = **halbzahlige** Wellenlängen (Berg auf Tal). Dünnste Lösung ($k=0$):
   $$2nd=\frac{\lambda}{2}\quad\Longrightarrow\quad \boxed{d=\frac{\lambda}{4n}}$$
   — die „Viertelwellenlängen-Schicht" (ein Viertel der Wellenlänge **in der Schicht**: $d=\lambda_n/4$).
5. **Probe (Auslegung auf Grün):** $\lambda=550$ nm, $n=1{,}38$ → $d=\dfrac{550}{4\cdot1{,}38}\ \text{nm}\approx 99{,}6\ \text{nm}\approx100$ nm ✓ (Skriptum: ≈100 nm).
6. **Wohin geht die Energie?** Das „ausgelöschte" Reflexionslicht verschwindet nicht, sondern geht in die **Transmission** — genau der Zweck der Vergütung. Die Bedingung gilt streng nur für ein $\lambda$ → Restreflex purpur/violett.

### ④ Newton'sche Ringe: $\lambda=\dfrac{r_k^2}{k\,R}$

1. **Aufbau:** Schwach gewölbte Sammellinse (Krümmungsradius $R$) auf planer Glasplatte; dazwischen ein nach außen dicker werdender **Luftspalt** (Dicke $d(r)$). Monochromatisches Licht, senkrechter Einfall, Beobachtung in **Reflexion**.
2. **Geometrie der Spaltdicke (Kleinwinkelnäherung, explizit):** Die Linsenunterseite ist eine Kugelfläche mit Radius $R$. Beim Abstand $r$ von der Achse gilt nach dem **Höhensatz** (rechtwinkliges Dreieck im Kreis: Quadrat der Höhe = Produkt der Hypotenusenabschnitte):
   $$r^2=d\,(2R-d)$$
   Wegen $d\ll R$ (μm gegen m) wird der $d^2$-Term vernachlässigt:
   $$r^2\approx 2Rd\quad\Longrightarrow\quad d\approx\frac{r^2}{2R}$$
3. **Phasenlage:** Der $\pi$-Sprung tritt nur an der **unteren** Grenzfläche auf (Luft → Glas, zum dichteren Medium); oben (Glas → Luft) kein Sprung. Ein $\pi$-Sprung = zusätzliche halbe Wellenlänge → die Bedingung **kippt**: Bei **ganzzahligem** geometrischem Gangunterschied $2d$ herrscht **Auslöschung** (dunkle Ringe); das Zentrum $d=0$ ist dunkel.
4. **Bedingung für dunkle Ringe in Reflexion:**
   $$2d=k\lambda,\qquad k=0,1,2,\dots$$
5. **2 und 4 kombinieren** (Radius $r_k$ des $k$-ten dunklen Rings):
   $$2\cdot\frac{r_k^2}{2R}=k\lambda\quad\Longrightarrow\quad \boxed{\lambda=\frac{r_k^2}{k\,R}}$$
6. **Probe:** $R=10$ m, gemessen $r_4=5{,}1$ mm beim $k=4$-ten dunklen Ring → $\lambda=\dfrac{(5{,}1\cdot10^{-3})^2}{4\cdot10}=\dfrac{2{,}60\cdot10^{-5}}{40}=6{,}5\cdot10^{-7}$ m $=650$ nm ✓ — **gleiche** Wellenlänge wie die Gittermessung in ② (Skriptum: zwei unabhängige Methoden bestätigen einander). Blau hat kürzeres $\lambda$ → kleinere Ringradien bei gleichem $k$ → **dichtere Ringe** ✓.

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $c$ | Wellengeschwindigkeit (Vakuumlichtgeschwindigkeit $2{,}9979\cdot10^8$, S. 1) | m/s |
| $\lambda$ | (Vakuum-)Wellenlänge | m |
| $\lambda_n$ | Wellenlänge im Medium $=\lambda/n$ | m |
| $f$ | Frequenz | Hz = 1/s |
| $T$ | Periodendauer $=1/f$ | s |
| $d$ (②) | Gitterkonstante = Abstand benachbarter Spalte | m |
| $\varphi_k$ | Beugungswinkel des $k$-ten Maximums | rad (°) |
| $k$ | Ordnung $=0,1,2,\dots$ | — (dimensionslos) |
| $\Delta s$ | (optischer) Gangunterschied | m |
| $s,\ D$ | Abstand der Maxima am Schirm, Abstand Gitter–Schirm | m |
| $d$ (③④) | Schichtdicke / Luftspaltdicke | m |
| $n$ | Brechungsindex (Schicht $\approx1{,}38$, Glas $\approx1{,}5$) | — (dimensionslos) |
| $R$ | Krümmungsradius der Linse | m |
| $r_k$ | Radius des $k$-ten dunklen Rings | m |

## Verknüpfungen

- ①②: [[themen/Optik und Wellenphaenomene/13.3#13.3 Grundlagen der Wellenphysik|Thema 13 §13.3]], [[themen/Optik und Wellenphaenomene/13.5#Wellenlängenmessung mit dem Gitter|Thema 13 §13.5 (Gitterexperiment)]]
- ③④: [[themen/Physikalische Naturphaenomene/6.5#6.5 Interferenz an dünnen Schichten|Thema 6 §6.5]], [[themen/Physikalische Naturphaenomene/6.5#Newton'sches Farbenglas (Newton'sche Ringe)|Thema 6 Newton-Ringe]], [[themen/Optik und Wellenphaenomene/13.5#13.5a Newton'sche Ringe und Interferenz an dünnen Schichten|Thema 13 §13.5a]]
- Engerer Spalt ↔ breiterer Fleck ↔ Unschärferelation: [[themen/Quantenphysik und Quantenoptik/|Thema 9]]
- ① gilt ebenso für Schall: [[Schallintensitaet|H16]]
