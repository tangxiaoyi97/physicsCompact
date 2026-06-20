---
title: "Kepler III"
order: 7
---

**Zielformel:**
$$\boxed{\frac{T^2}{r^3}=\frac{4\pi^2}{G\,M}=\text{konstant}}\qquad\text{(Verallgemeinerung auf Ellipsen: }r\to a\text{, große Halbachse)}$$

**Gültigkeitsbereich / Annahmen:**
- **Kreisbahnnäherung**: Bahnradius $r$ konstant (Verallgemeinerung $r\to a$ am Ende der Herleitung).
- Zentralmasse $M$ **viel größer** als die Masse des Umlaufenden ($M\gg m$): $M$ ruht näherungsweise, $r$ ist der Abstand zu ihrem Massenmittelpunkt.
- **Die Gravitation ist die einzige Kraft** und übernimmt genau die Rolle der Zentripetalkraft ($F_Z=F_G$).
- Newtonsche Mechanik gültig ($v\ll c$, schwaches Gravitationsfeld).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $F_Z=m\,\omega^2 r=\dfrac{m v^2}{r}$ | Zentripetalkraft | ✅ S. 2 („Zentripetalkraft $F_Z=m\omega^2r=\frac{mv^2}{r}$") |
| $F_G=G\,\dfrac{m_1 m_2}{r^2}$ | Gravitationsgesetz | ✅ S. 2 („Gravitationsgesetz") |
| $\omega=\dfrac{\Delta\varphi}{\Delta t}=2\pi f$ | Winkelgeschwindigkeit | ✅ S. 2 („Winkelgeschwindigkeit") |
| $f=\dfrac{1}{T}$ | Frequenz | ✅ S. 2 („Frequenz") |
| $v=\omega\, r$ | Bahngeschwindigkeit | ❌ nicht im Formelnheft — in der Prüfung selbst hinschreiben (folgt sofort aus den zwei Schreibweisen von S. 2: $a_Z=\omega^2 r=\frac{v^2}{r}\Rightarrow v=\omega r$) |
| $\left(\dfrac{T_1}{T_2}\right)^2=\left(\dfrac{r_1}{r_2}\right)^3$ | 3. Keplergesetz (Verhältnisform) | ✅ S. 2 („3. Keplergesetz") — siehe unten „Bezug zur Verhältnisform" |

## Herleitung (Schritt für Schritt)

1. **Winkelgeschwindigkeit durch die Umlaufzeit ausdrücken** (reine Definition: ein voller Umlauf bedeutet $\Delta\varphi=2\pi$ in der Zeit $\Delta t=T$; gleichwertig aus S. 2: $\omega=2\pi f$ mit $f=1/T$):
   $$\omega=\frac{2\pi}{T}$$
2. **Bahngeschwindigkeit und Winkelgeschwindigkeit verknüpfen** (bei gleicher Winkelgeschwindigkeit legt ein äußerer Punkt in gleicher Zeit einen längeren Bogen zurück: Bogenlänge $=\varphi\cdot r$, durch die Zeit dividiert; oder Vergleich der zwei Schreibweisen von $a_Z$):
   $$v=\omega\cdot r$$
3. **Zentripetalkraft mit $\omega$ schreiben** (Einsetzen von $v^2=\omega^2r^2$ in $F_Z=\frac{mv^2}{r}$ von S. 2 — so lässt sich später $\omega=2\pi/T$ direkt einsetzen):
   $$F_Z=\frac{m\,\omega^2 r^2}{r}=m\,\omega^2 r$$
4. **Kräftegleichgewicht $F_Z=F_G$ ansetzen** (der physikalische Kernschritt: kein Seil hält den Planeten — **die Gravitation selbst ist** die Zentripetalkraft; genau das rechtfertigt das Gleichsetzen):
   $$m\,\omega^2 r = G\,\frac{M\cdot m}{r^2}$$
5. **Masse $m$ des Umlaufenden kürzen** ($m$ steht auf beiden Seiten linear und $m\neq 0$, Division erlaubt; physikalische Bedeutung: die Bahn ist **unabhängig** von der Masse des Umlaufenden — gleicher Orbit, gleiche Umlaufzeit):
   $$\omega^2 r=\frac{G M}{r^2}$$
6. **Beide Seiten durch $r$ dividieren** (reine Algebra, alle $r$ auf die rechte Seite; Achtung: kein „Kürzen", rechts entsteht $r^3$):
   $$\omega^2=\frac{G M}{r^3}$$
7. **$\omega=\dfrac{2\pi}{T}$ einsetzen und quadrieren** (die geometrische Größe $\omega$ durch die Messgröße $T$ ersetzen: $\omega^2=\frac{4\pi^2}{T^2}$):
   $$\frac{4\pi^2}{T^2}=\frac{G M}{r^3}$$
8. **Über Kreuz umstellen: Variablen $T,r$ und Konstanten trennen** (beide Seiten mit $\frac{T^2}{GM}$ multiplizieren — Zielform erreicht):
   $$\boxed{\frac{T^2}{r^3}=\frac{4\pi^2}{G M}}$$
   Rechts stehen nur $G$ und die Zentralmasse $M$ → für **alle** Umlaufenden um denselben Zentralkörper **dieselbe Konstante**.
9. **Verallgemeinerung $r\to a$ (Kreis → Ellipse) — nur Erläuterung, kein strenger Beweis:** Nach dem 1. Keplerschen Gesetz sind die wahren Bahnen **Ellipsen**. Newton zeigte in seiner vollständigen Theorie: Die Beziehung gilt für Ellipsenbahnen **unverändert**, wenn man $r$ durch die **große Halbachse $a$** ersetzt:
   $$\frac{T^2}{a^3}=\frac{4\pi^2}{G M}$$
   Der strenge Beweis erfordert die Lösung der Bewegungsgleichung für Ellipsenbahnen (zusammen mit dem Flächensatz) und liegt außerhalb des Prüfungsrahmens; dass die Kreisbahn-Herleitung genau dieselbe Konstante $\frac{4\pi^2}{GM}$ liefert, in der Prüfung **aktiv als Erläuterung kennzeichnen**.

### Bezug zur Verhältnisform im Formelnheft

Das Formelnheft S. 2 gibt die **Verhältnisform** $\left(\frac{T_1}{T_2}\right)^2=\left(\frac{r_1}{r_2}\right)^3$ — **ohne Konstante**. Der Zusammenhang:

- Aus Schritt 8 folgt für zwei Körper um dasselbe $M$: $\frac{T_1^2}{r_1^3}=\frac{T_2^2}{r_2^3}=\frac{4\pi^2}{GM}$. Über Kreuz umgestellt (beide Seiten mal $\frac{r_1^3}{T_2^2}$) ergibt das genau die Verhältnisform — **sie ist eine direkte Folgerung aus der Form mit Konstante**.
- Umgekehrt sagt die Verhältnisform nur, *dass* die Konstante für alle Planeten gleich ist, **nicht wie groß sie ist**; zur **Bestimmung der Zentralmasse $M$** (Rechenbeispiel unten) braucht man die hergeleitete Form $\frac{T^2}{a^3}=\frac{4\pi^2}{GM}$.

### Rechenbeispiel auf Prüfungsniveau ★: Sonnenmasse aus der Erdbahn

Erdbahn: $T=1\ \text{a}=3{,}156\cdot10^{7}\ \text{s}$ (**unbedingt in Sekunden umrechnen!**), $a=1{,}496\cdot10^{11}\ \text{m}$. Das dritte Keplergesetz nach $M$ auflösen:

$$M_\odot=\frac{4\pi^2 a^3}{G\,T^2}$$

Schrittweise einsetzen ($G=6{,}673\cdot10^{-11}\ \tfrac{\text{N·m}^2}{\text{kg}^2}$, Formelnheft S. 1):
1. $a^3=(1{,}496\cdot10^{11})^3=3{,}348\cdot10^{33}\ \text{m}^3$
2. $4\pi^2\cdot a^3=39{,}48\cdot 3{,}348\cdot10^{33}=1{,}322\cdot10^{35}$
3. $T^2=(3{,}156\cdot10^{7})^2=9{,}960\cdot10^{14}\ \text{s}^2$; $G\,T^2=6{,}673\cdot10^{-11}\cdot9{,}960\cdot10^{14}=6{,}647\cdot10^{4}$
4. $M_\odot=\dfrac{1{,}322\cdot10^{35}}{6{,}647\cdot10^{4}}\approx 1{,}99\cdot10^{30}\ \text{kg}\approx 2\cdot10^{30}\ \text{kg}$ ✓

**Probe:** stimmt fast exakt mit $M_S=1{,}989\cdot10^{30}$ kg aus dem Formelnheft S. 1 überein. Gleiches Verfahren: Erdmasse aus der Mondbahn, Masse des zentralen schwarzen Lochs aus Sternbahnen um das galaktische Zentrum — **sobald etwas um $M$ kreist, lässt sich $M$ „wiegen"**.

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $T$ | Umlaufzeit (Zeit für einen vollen Umlauf $360°$) | s (**im Beispiel unbedingt Sekunden**) |
| $r$ | Radius der Kreisbahn (Abstand zum **Massenmittelpunkt** des Zentralkörpers) | m |
| $a$ | große Halbachse der Ellipsenbahn (ersetzt $r$ nach der Verallgemeinerung) | m |
| $\omega$ | Winkelgeschwindigkeit | rad/s |
| $\varphi$ | überstrichener Winkel | rad |
| $f$ | Frequenz | Hz = 1/s |
| $v$ | Bahngeschwindigkeit (tangential) | m/s |
| $m$ | Masse des Umlaufenden (wird gekürzt) | kg |
| $M$ | Masse des **umkreisten** Zentralkörpers | kg |
| $F_Z$ | Zentripetalkraft | N |
| $F_G$ | Gravitationskraft | N |
| $G$ | Gravitationskonstante $=6{,}673\cdot10^{-11}\ \tfrac{\text{N·m}^2}{\text{kg}^2}$ (Formelnheft S. 1) | N·m²/kg² |
| $M_\odot$ | Sonnenmasse $=1{,}989\cdot10^{30}$ kg (Formelnheft S. 1, „$M_S$") | kg |

## Verknüpfungen

- [[Gravitationsfeldstaerke Erdmasse|H08]] — dasselbe Schema „zwei Kräfte gleichsetzen, Probemasse kürzen"; erst nach der Messung von $G$ liefert diese Formel $M$.
- [[themen/Gravitationsphysik/11.4#Drittes Keplersches Gesetz|Thema 11 §11.4]] — Original-Herleitung im Skript (identische neun Schritte) und Tabelle der umkreisten Massen.
- [[themen/Raumfahrtphysik/2.2#2.2 Satellit auf einer Kreisbahn|Thema 2 §2.2]] — dasselbe Gleichgewicht $F_Z=F_G$ liefert die Bahngeschwindigkeit; [[themen/Raumfahrtphysik/2.3#2.3 Der geostationäre Satellit|§2.3]] geostationäre Bahn = diese Formel nach $r$ aufgelöst.
- [[themen/Klassische Mechanik/8.7#8.7 Kreisbewegung und Zentripetalkraft|Thema 8 §8.7]] — warum es die Zentripetalkraft gibt und warum sie eine „Rolle", keine eigenständige Kraft ist.
