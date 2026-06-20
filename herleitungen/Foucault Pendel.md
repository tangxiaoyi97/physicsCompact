---
title: "Foucault Pendel"
order: 10
---

**Zielformel:**
$$\boxed{T_\text{Dreh}=\frac{T_\text{Tag}}{\sin\varphi}}$$

**Gültigkeitsbereich / Annahmen:**
- Die Schwingungsebene ist (näherungsweise) ein **Inertialsystem**: Sie behält ihre Richtung im Raum bei, die Erde dreht sich darunter weg (Skript-Sprachgebrauch, Thema 8 §8.3).
- Ideale Aufhängung (kardanisch, zwangsfrei), Pendel lang genug, Beobachtungszeit lang genug, damit der Effekt sichtbar wird.
- **Niveau der Argumentation:** Komponentenzerlegung des Winkelgeschwindigkeitsvektors + zwei Grenzfall-Checks; ==die vollständige, strenge Herleitung benötigt die **Corioliskraft** im rotierenden Bezugssystem und liegt außerhalb des Prüfungsrahmens — das aktiv dazusagen.==

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $\omega=\dfrac{\Delta\varphi}{\Delta t}=2\pi f$ | Winkelgeschwindigkeit | ✅ S. 2 („Winkelgeschwindigkeit") |
| $f=\dfrac{1}{T}$ | Frequenz | ✅ S. 2 („Frequenz") |
| $\Omega_\perp=\Omega\sin\varphi$ | Vektorzerlegung in Komponenten | ❌ Mathematik (rechtwinkliges Dreieck), nicht im Formelnheft — Skizze selbst anfertigen |
| $T_\text{Dreh}=\dfrac{T_\text{Tag}}{\sin\varphi}$ | Foucault-Drehperiode | ❌ nicht im Formelnheft — genau das Ergebnis dieser Herleitung |

## Herleitung (Schritt für Schritt)

1. **Winkelgeschwindigkeitsvektor $\vec\Omega$ der Erdrotation aufschreiben** (die Erde ist ein rotierendes System: $\vec\Omega$ zeigt entlang der **Rotationsachse** zum Himmelsnordpol; den Betrag liefert „eine Umdrehung pro Tag", mit $\omega=2\pi f$ und $f=1/T$ von S. 2):
   $$\Omega=\frac{2\pi}{T_\text{Tag}}$$
2. **$\vec\Omega$ am Ort der Breite $\varphi$ in lokale Komponenten zerlegen** (Geometrie: die lokale **Vertikale** (Lotrichtung) schließt mit der Rotationsachse den Winkel $90°-\varphi$ ein — gleichwertig: die Achse steht um den Höhenwinkel $\varphi$ über dem Horizont (Polarstern-Höhe = Breite). Komponenten im rechtwinkligen Dreieck):
   $$\Omega_\perp=\Omega\cos(90°-\varphi)=\Omega\,\sin\varphi\quad\text{(vertikal)},\qquad \Omega_\parallel=\Omega\,\cos\varphi\quad\text{(horizontal, nach Norden)}$$
3. **Argument: Nur die Vertikalkomponente $\Omega_\perp$ dreht die Schwingungsebene** (der physikalische Kernschritt):
   - Die Schwingungsebene behält ihre Raumrichtung (Inertialsystem); „Drehung der Pendelebene" heißt: der **Boden** dreht sich unter ihr weg.
   - Eine Rotation um die **lokale Vertikale** (also $\Omega_\perp$) dreht genau die **Horizontalrichtungen** des Bodens (Nord, Ost, …) um das Lot — exakt die Drehung, mit der die Pendelebene relativ zum Boden „im Kreis wandert".
   - Eine Rotation um eine **horizontale Achse** (also $\Omega_\parallel$) verändert nur langsam die Raumrichtung des lokalen Lots (das „Oben-Unten" wird mitgeführt); die Pendelachse folgt durch Schwerkraft und Aufhängung dem Lot — ==sie ändert die **Richtung der Pendelachse**, dreht aber die Schwingungsebene nicht um das Lot==.
   - Also bleibt als wirksame Drehrate der Pendelebene relativ zum Boden nur:
   $$\Omega_\text{Dreh}=\Omega_\perp=\Omega\,\sin\varphi$$
4. **Von der Winkelgeschwindigkeit zurück zur Periode** (erneut $T=2\pi/\omega$, angewandt auf $\Omega_\text{Dreh}$):
   $$T_\text{Dreh}=\frac{2\pi}{\Omega_\text{Dreh}}=\frac{2\pi}{\Omega\sin\varphi}=\frac{2\pi}{\frac{2\pi}{T_\text{Tag}}\sin\varphi}\;\Longrightarrow\;\boxed{T_\text{Dreh}=\frac{T_\text{Tag}}{\sin\varphi}}$$
5. **Zwei Grenzfall-Checks** (prüfen, ob die Komponentenargumentation das physikalisch zwingende Ergebnis liefert):
   - **Pol** $\varphi=90°$: $\sin 90°=1\Rightarrow T_\text{Dreh}=T_\text{Tag}$. Zwingend: Am Pol ist die Rotationsachse genau die lokale Vertikale, die Erde dreht sich direkt unter dem Pendel weg — die Ebene macht in einem Tag eine volle Drehung relativ zum Boden. ✓
   - **Äquator** $\varphi=0°$: $\sin 0°=0\Rightarrow T_\text{Dreh}\to\infty$. Zwingend: Am Äquator liegt die Achse vollständig horizontal ($\Omega_\perp=0$), der Boden dreht sich nicht um das Lot — die Ebene **dreht sich gar nicht**. ✓
6. **Niveau der Argumentation offenlegen** (Bonuspunkt in der Prüfung): Die Komponentenzerlegung liefert das richtige Ergebnis, aber „die Horizontalkomponente dreht die Ebene nicht" ist ein **Plausibilitätsargument**, kein strenger Beweis; ==streng rechnet man im mitrotierenden Bezugssystem mit der **Corioliskraft** und mittelt über die Schwingung — außerhalb des Prüfungsrahmens==, gleiches Resultat.

### Rechenbeispiele (Lehrer-Konvention ★)

- **Wien** $\varphi\approx48°$: $\sin 48°=0{,}743$
  $$T_\text{Dreh}=\frac{24\ \text{h}}{0{,}743}\approx 32{,}3\ \text{h}\approx 32\ \text{h}\ \checkmark$$
- **Pol (Süd-/Nordpol):** $T_\text{Dreh}=T_\text{Tag}=24\ \text{h}$ (Lehrer-Konvention).
- **Streng:** $T_\text{Tag}$ ist der **Sterntag** (eine Erdumdrehung relativ zu den Fixsternen) $\approx23$ h 56 min $=23{,}93$ h — dann Pol 23 h 56 min, Wien $\frac{23{,}93}{0{,}743}\approx32{,}2$ h. In der Prüfung zuerst 24 h / 32 h antworten, dann aktiv ergänzen: „streng genommen ein Sterntag".

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $T_\text{Dreh}$ | Periode einer vollen Drehung der Schwingungsebene relativ zum Boden | s (üblich: h) |
| $T_\text{Tag}$ | Erdrotationsperiode: Lehrer-Konvention 24 h; streng Sterntag ≈ 23 h 56 min | s (üblich: h) |
| $\varphi$ | **geographische Breite** des Ortes | rad (üblich: °) |
| $\vec\Omega,\ \Omega$ | Winkelgeschwindigkeitsvektor der Erdrotation und sein Betrag ($\Omega=2\pi/T_\text{Tag}\approx7{,}3\cdot10^{-5}$ rad/s) | rad/s |
| $\Omega_\perp$ | Komponente von $\vec\Omega$ entlang der lokalen **Vertikalen** $=\Omega\sin\varphi$ | rad/s |
| $\Omega_\parallel$ | Komponente von $\vec\Omega$ entlang der lokalen **Horizontalen** (Nord) $=\Omega\cos\varphi$ | rad/s |
| $\Omega_\text{Dreh}$ | wirksame Drehrate der Pendelebene relativ zum Boden | rad/s |
| $f$ | Frequenz | Hz = 1/s |

## Verknüpfungen

- [[themen/Klassische Mechanik/8.3#I. Axiom — Trägheitssatz|Thema 8 §8.3]] — Skript-Fassung: Schwingungsebene als Inertialsystem, Wien 32 h, Südpol-24-h-Prüfungsfrage, „kein perfektes Inertialsystem, weil die Gravitation überall ist".
- [[Kepler III|H07]] — dieselbe Drehscheibe „Periode ↔ Winkelgeschwindigkeit" über $\omega=2\pi/T$.
- Die **Schwingungsdauer** des Pendels (etwas anderes!) $T=2\pi\sqrt{l/g}$ steht im Formelnheft S. 3 („Fadenpendel") — nicht mit der **Drehperiode** $T_\text{Dreh}$ verwechseln.
