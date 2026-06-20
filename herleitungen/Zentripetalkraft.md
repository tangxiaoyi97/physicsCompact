---
title: "Zentripetalkraft"
order: 4
---

**Zielformeln:**
$$a_Z = \frac{v^2}{r} = \omega^2 r, \qquad F_Z = \frac{m v^2}{r} = m\,\omega^2 r$$

**Gültigkeitsbereich/Annahmen:** **gleichförmige Kreisbewegung** (Bahngeschwindigkeit $v = \text{konst.}$, Radius $r = \text{konst.}$); nur die **Richtung** der Geschwindigkeit ändert sich, nicht ihr Betrag; die geometrische Herleitung wird im **Grenzwert** $\Delta t \to 0$ exakt.

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $\bar a = \dfrac{\Delta v}{\Delta t}$ | Durchschnittsbeschleunigung (Beschleunigung = Änderungsrate des Geschwindigkeits**vektors**) | ✅ S. 2 („Durchschnittsbeschleunigung") |
| $F = m \cdot a$ | Newton'sches Axiom (Aktionsprinzip) | ✅ S. 2 („Newton'sches Axiom") |
| $v = \omega \cdot r$ | Bahngeschwindigkeit (im Heft vektoriell $\vec v = \vec\omega \times \vec r$) | ✅ S. 2 („Bahngeschwindigkeit") |
| $\omega = \dfrac{\Delta\varphi}{\Delta t} = 2\pi f$ | Winkelgeschwindigkeit | ✅ S. 2 („Winkelgeschwindigkeit") |
| $a_Z = \omega^2 r = \dfrac{v^2}{r}$ | Zentripetalbeschleunigung — Zielformel selbst im Heft | ✅ S. 2 („Zentripetalbeschleunigung") |
| $F_Z = m \omega^2 r = \dfrac{m v^2}{r}$ | Zentripetalkraft — Zielformel selbst im Heft | ✅ S. 2 („Zentripetalkraft") |
| $W = \vec F \cdot \vec s = F s \cos\alpha$ | Arbeit — für das Argument „verrichtet keine Arbeit" | ✅ S. 2 („Arbeit") |
| Ähnliche-Dreiecke-Argument $\dfrac{\Delta v}{v} = \dfrac{\Delta s}{r}$ | Kern der geometrischen Herleitung | ❌ nicht im Formelnheft — bei der Prüfung mit Skizze selbst herleiten |

## Herleitung (Schritt für Schritt)

### A) Warum die Kreisbewegung eine Beschleunigung **hat** (Klärung der Voraussetzung)

1. Geschwindigkeit ist ein **Vektor**: Betrag (Tempo) **und** Richtung.
2. Auf der Kreisbahn ändert $\vec v$ **ständig die Richtung** (immer tangential), auch wenn der Betrag konstant bleibt.
3. Beschleunigung ist definiert als Änderungsrate des Geschwindigkeits**vektors** ($\bar a = \Delta \vec v / \Delta t$) — schon eine Richtungsänderung ist Beschleunigung. Die gleichförmige Kreisbewegung ist also eine **beschleunigte Bewegung** und braucht eine Kraft.

### B) Geometrische Herleitung $a_Z = \dfrac{v^2}{r}$ (ähnliche Dreiecke)

1. **Zwei benachbarte Zeitpunkte wählen.** Der Körper passiert im kleinen Zeitabstand $\Delta t$ zwei Punkte $P_1$, $P_2$ der Kreisbahn. Der zurückgelegte Bogen ist $v \cdot \Delta t$; die **Sehne** zwischen den Punkten heiße $\Delta s$. **Näherung:** Für kleines $\Delta t$ gilt Sehne ≈ Bogen, also $\Delta s \approx v\,\Delta t$ (diese Näherung wird beim abschließenden Grenzübergang exakt).
2. **Zwei Dreiecke zeichnen.**
   - **Ortsdreieck:** aus zwei Radien $r$ (zu $P_1$, $P_2$) und der Sehne $\Delta s$ — gleichschenklig, Spitzenwinkel $\Delta\varphi$.
   - **Geschwindigkeitsdreieck:** $\vec v_1$, $\vec v_2$ an denselben Anfangspunkt verschieben, die Spitzen verbinden: $\Delta \vec v = \vec v_2 - \vec v_1$ — ebenfalls gleichschenklig (beide Schenkel haben Länge $|\vec v| = v$, der Betrag ist konstant). Da die Geschwindigkeit stets **senkrecht auf dem Radius** steht (tangential), dreht sich $\vec v$ um **denselben** Winkel wie der Radius: Spitzenwinkel ebenfalls $\Delta\varphi$.
3. **Ähnlichkeit ausnutzen.** Zwei gleichschenklige Dreiecke mit gleichem Spitzenwinkel sind **ähnlich** ⇒ entsprechende Seiten stehen im gleichen Verhältnis (Basis zu Schenkel):
   $$\frac{\Delta v}{v} = \frac{\Delta s}{r}$$
4. **Nach $\Delta v$ auflösen** (beide Seiten mal $v$) und $\Delta s \approx v\,\Delta t$ einsetzen:
   $$\Delta v = \frac{v}{r}\,\Delta s \approx \frac{v}{r} \cdot v\,\Delta t = \frac{v^2}{r}\,\Delta t$$
5. **Zurück zur Definition der Beschleunigung** (S. 2) und **Grenzwert nehmen**. $a = \dfrac{\Delta v}{\Delta t} \approx \dfrac{v^2}{r}$. **Hier wird der Grenzwert $\Delta t \to 0$ genommen**, weil: ① Sehne → Bogen macht die Näherung aus Schritt 1 exakt; ② die Richtung von $\Delta \vec v$ strebt gegen **senkrecht zu $\vec v$, zum Kreismittelpunkt hin** (im gleichschenkligen Dreieck steht die Basis für Spitzenwinkel $\to 0$ senkrecht auf den Schenkeln). Also
   $$\boxed{a_Z = \frac{v^2}{r}}\quad\text{(Richtung: zum Mittelpunkt — daher „zentripetal")}$$

### C) ω-Methode (beide Schreibweisen des Formelnhefts ineinander überführen)

1. **Zusammenhang Winkel- und Bahngeschwindigkeit** (S. 2): Beim Drehwinkel $\Delta\varphi$ wird der Bogen $\Delta s = r\,\Delta\varphi$ zurückgelegt (Definition der Bogenlänge im Bogenmaß); beide Seiten durch $\Delta t$:
   $$v = \omega \cdot r$$
2. **In das Ergebnis von B einsetzen** ($v = \omega r$ in $a_Z = v^2/r$):
   $$a_Z = \frac{(\omega r)^2}{r} = \frac{\omega^2 r^2}{r} = \omega^2 r$$
   (Ein $r$ kürzen — reine Algebra.) Umgekehrt genauso: $\omega = v/r$ in $a_Z = \omega^2 r$ liefert sofort $v^2/r$. Beide Schreibweisen sind äquivalent:
   $$\boxed{a_Z = \omega^2 r = \frac{v^2}{r}}$$

### D) Zentripetalkraft $F_Z = \dfrac{m v^2}{r}$

1. **Newton'sches Axiom** (S. 2): Beschleunigung erfordert eine Kraft, $F = m \cdot a$.
2. **$a = a_Z$ einsetzen:**
   $$\boxed{F_Z = m \cdot \frac{v^2}{r} = m\,\omega^2 r}\quad\text{(Richtung: wie } a_Z \text{, zum Mittelpunkt)}$$
3. **Begriffliche Erinnerung:** Die Zentripetalkraft ist **keine eigenständige Naturkraft**, sondern eine **Rolle**, die von vorhandenen Kräften übernommen wird — Satellit: Gravitation; Hammerwerfer: Seilkraft; Elektron im Atom: Coulomb-Kraft. (Die Zentrifugalkraft ist dagegen eine **Scheinkraft** im rotierenden Bezugssystem.)

### E) Die Zentripetalkraft verrichtet keine Arbeit ($\vec F \perp \vec v$)

1. **Definition der Arbeit** (S. 2): $W = F \cdot s \cdot \cos\alpha$, $\alpha$ = Winkel zwischen Kraft und Weg.
2. **Geometrische Tatsache:** Die Zentripetalkraft zeigt zum Mittelpunkt, der momentane Weg ist tangential ⇒ $\alpha = 90°$, $\cos 90° = 0$.
3. **Folgerung:**
   $$W = F_Z \cdot s \cdot \cos 90° = 0$$
   Die Zentripetalkraft ändert also **nur die Richtung der Geschwindigkeit, nicht ihren Betrag** — konsistent mit „gleichförmige Kreisbewegung": keine Arbeit ⇒ kinetische Energie konstant ⇒ $v$ konstant.

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $a_Z$ | Zentripetalbeschleunigung (zum Mittelpunkt) | m/s² |
| $F_Z$ | Zentripetalkraft (zum Mittelpunkt) | N |
| $m$ | Masse des umlaufenden Körpers | kg |
| $v$ | Bahngeschwindigkeit (tangential, Betrag konstant) | m/s |
| $r$ | Bahnradius | m |
| $\omega$ | Winkelgeschwindigkeit ($360° = 2\pi$ rad) | rad/s |
| $\Delta\varphi$ | überstrichener Winkel im kleinen Zeitintervall | rad |
| $\Delta s$ | Sehne zwischen $P_1$ und $P_2$ (im Grenzwert = Bogen) | m |
| $\Delta \vec v$, $\Delta v$ | Geschwindigkeitsdifferenzvektor und sein Betrag | m/s |
| $\Delta t$ | kleines Zeitintervall (Grenzwert $\to 0$) | s |
| $f$ | Frequenz (tritt in $\omega = 2\pi f$ auf) | Hz |
| $W$ | Arbeit (hier $= 0$) | J |
| $\alpha$ | Winkel zwischen Kraft und Weg (hier $90°$) | ° (bzw. rad) |

## Verknüpfungen

- Die Zentripetalkraft wird von der **Gravitation** übernommen ⇒ Satellitenbahnen → [[Satellit Kreisbahn|H05]]
- „$\vec F \perp \vec v$ verrichtet keine Arbeit" beruht auf der Definition der Arbeit → [[Arbeit Energie|H02]]
- Skript: [[themen/Klassische Mechanik/8.7#8.7 Kreisbewegung und Zentripetalkraft|Thema 8 §8.7]] (Begriff, $F_Z = mv^2/r$, Scheinkraft-Diskussion), [[themen/Raumfahrtphysik/2.1#2.1 Vorab: Was ist die Zentripetalkraft?|Thema 2 §2.1]] (dieselbe Vorbereitung), [[themen/Bewegungen/5.1#Beschleunigung|Thema 5 §5.1]] (Beschleunigung = Änderung des Geschwindigkeitsvektors)
