---
title: "Raumfahrtphysik"
order: 2
---

Drei Zettel im echten Prüfungsstil von Prof. Linhart (Zettel 1 = mitgehörte echte Prüfung ★) + Nachfragen-Kette + Antwortschlüssel — inhaltliche Anker im [[themen/Raumfahrtphysik/|Skript Thema 2]]. Das Hearing dauert ca. 10 Minuten: erst Herleitung und Zahlen aufs Papier, dann Diskussion am Zettel.

## Zettel 1 — Der geostationäre Satellit ★ (echte Prüfung)

> **Paradigmen-Einstieg:** *„Im Paradigma der klassischen Mechanik genügt ein einziger Gedanke für die ganze Raumfahrt: Die Gravitation liefert die Zentripetalkraft."*

1. ★ **Erkläre:** die Bedeutung von **Satelliten** und ihre **Anwendungen** — nenne mindestens vier (Fernsehen, Telekommunikation, Wetter, Spionage/Navigation …).
2. ★ **Physikalisches Gesetz:** Welches Gesetz steckt hinter dem **geostationären Satelliten**? Schreibe den Ansatz an ($F_{ZP} = F_G$), **erkläre alle physikalischen Größen** und nenne die **drei Bedingungen** für eine geostationäre Bahn.
3. ★ **Ableitung durchführen:** Leite aus $F_{ZP} = F_G$ den **Bahnradius** $r = \sqrt[3]{\dfrac{GMT^2}{4\pi^2}}$ her.
4. ★ **Einheiten + Rechenbeispiel:** In welcher Einheit gehört $T$ eingesetzt? Berechne $r$ mit Zahlen ($M_E = 5{,}974\cdot10^{24}$ kg, $T \approx 86\,400$ s) und daraus die **Höhe über der Erdoberfläche**.
5. ★ **Alltagsbeispiel zum Schluss:** Wohin zeigt die **Satellitenschüssel** auf eurem Dach — und warum? (Nordhalbkugel)

## Zettel 2 — Kreisbahn und ISS

> **Paradigmen-Einstieg:** *„Im Paradigma der klassischen Mechanik fällt ein Satellit ständig — er verfehlt nur immerzu den Boden."*

1. **Erkläre:** Die Gravitation wirkt ständig auf den Satelliten — warum fällt er nicht herunter? (Newtons Gedankenexperiment vom Berg)
2. **Ableitung durchführen:** Leite die Kreisbahngeschwindigkeit $v = \sqrt{\dfrac{GM}{r}}$ her. Warum kommt die **Satellitenmasse** im Ergebnis nicht vor?
3. **Nachfrage (Anekdote):** Nach Sputnik (1957) fragte **Präsident Eisenhower** seine Berater: Höhe und Bahngeschwindigkeit sind bekannt — kann man daraus die **Masse** des Satelliten berechnen?
4. **Rechenbeispiel:** Berechne Bahngeschwindigkeit und Umlaufzeit der **ISS** ($h = 400$ km, $R_E = 6370$ km). Was gehört für $r$ eingesetzt — und welcher häufige Fehler lauert?
5. **Begriff:** Was ist die **erste kosmische Geschwindigkeit**? Warum ist die ISS etwas langsamer?
6. **Irrtums-Haken:** Die Astronauten auf der ISS sind „schwerelos" — gibt es dort keine Gravitation? (Hinweis: in 400 km Höhe noch ca. 89 %)

## Zettel 3 — Fluchtgeschwindigkeit und Bahnformen

> **Paradigmen-Einstieg:** *„Im Paradigma der klassischen Mechanik entscheidet allein die Gesamtenergie, ob ein Körper gebunden bleibt oder entkommt."*

1. **Erkläre:** die **Fluchtgeschwindigkeit** exakt — was passiert „im Unendlichen"?
2. **Ableitung durchführen:** Leite $v_F = \sqrt{\dfrac{2GM}{r}}$ über die **Energieerhaltung** her.
3. **Rechenbeispiel:** Berechne $v_F$ für Erde und Mond (Mond: $M = 7{,}35\cdot10^{22}$ kg, $r = 1{,}74\cdot10^6$ m).
4. **Zusammenhang:** Wie hängen $v_F$ und die Kreisbahngeschwindigkeit auf gleicher Höhe zusammen? Warum genau $\sqrt2$?
5. **Drei Bahnklassen:** Wie entscheidet das **Vorzeichen** von $E_\text{ges} = \dfrac{mv^2}{2} - \dfrac{GMm}{r}$ über Ellipse, Parabel oder Hyperbel?
6. **Haken (Brücke zu Thema 11):** Was wäre, wenn an einer Oberfläche $v_F > c_0$ gälte? Leite daraus den **Schwarzschildradius** ab. Und: Warum liegen Startplätze nahe am Äquator, und warum startet man nach **Osten**?

## Nachfragen-Kette

1. ★ *„Wohin zeigt Ihre Satellitenschüssel zu Hause — und warum?"*
2. *„Warum ein Sterntag und nicht 24 Stunden?"*
3. *„Sie haben T in Stunden eingesetzt — was geht da schief?"*
4. *„Kann ein Satellit über Wien stehen bleiben?"*
5. *„Eisenhowers Frage: Höhe und Geschwindigkeit bekannt — Masse berechenbar?"*
6. *„Auf der ISS schweben die Astronauten — gibt es dort keine Gravitation?"*
7. *„Je höher die Bahn — schneller oder langsamer?"*
8. *„Warum genau $\sqrt2$?"*
9. *„Die Reibung bremst den Satelliten — warum wird er dann schneller?"*
10. *„Was passiert, wenn $v_F$ größer als die Lichtgeschwindigkeit wird?"*
11. *„Warum startet man Raketen nach Osten?"*
12. *„Was bedeutet eine negative Gesamtenergie?"*

## §§ANTWORTEN

### Zettel 1

1. **Anwendungen:** Satellitenfernsehen, Telekommunikation, Wettersatelliten, Spionagesatelliten; dazu Navigation (GPS) und Erdbeobachtung. Bedeutung: Infrastruktur der globalen Kommunikation und Beobachtung — der geostationäre Satellit „steht" am Himmel, die Antenne muss nicht nachgeführt werden. → [[themen/Raumfahrtphysik/2.3#2.3 Der geostationäre Satellit|Skript §2.3]]
2. **Gesetz:** Die Gravitation liefert die Zentripetalkraft, ==$F_{ZP} = F_G$==, also $\dfrac{mv^2}{r} = G\dfrac{Mm}{r^2}$. Größen: $m$ … Satellitenmasse (kg, kürzt sich), $M$ … Erdmasse (kg), $G$ … Gravitationskonstante ($6{,}674\cdot10^{-11}$ N·m²/kg²), $r$ … Bahnradius **vom Erdmittelpunkt** (m), $v$ … Bahngeschwindigkeit (m/s). **Drei Bedingungen:** Umlaufzeit = **ein Sterntag**; Bahn **über dem Äquator**; in **Drehrichtung** der Erde. → [[themen/Raumfahrtphysik/2.3#2.3 Der geostationäre Satellit|Skript §2.3]]
3. Aus $v^2 = \dfrac{GM}{r}$ (nach Kürzen von $m$), mit $v = \omega r$: $\omega^2 r^2 = \dfrac{GM}{r}$ → $\omega^2 r^3 = GM$; mit $\omega = \dfrac{2\pi}{T}$: $\dfrac{4\pi^2}{T^2} r^3 = GM$ → $r^3 = \dfrac{GMT^2}{4\pi^2}$ → $\boxed{r = \sqrt[3]{\dfrac{GMT^2}{4\pi^2}}}$. → [[themen/Raumfahrtphysik/2.3#2.3 Der geostationäre Satellit|Skript §2.3, Herleitung]]
4. ==$T$ unbedingt in **Sekunden**==: $T = 24\cdot3600 = 86\,400$ s (der exakte Sterntag 86 164 s verschiebt das Ergebnis nur um ~80 km). Einsetzen: $$r = \sqrt[3]{\frac{6{,}674\cdot10^{-11}\cdot5{,}974\cdot10^{24}\cdot86\,400^2}{4\pi^2}} = \sqrt[3]{\frac{3{,}99\cdot10^{14}\cdot7{,}46\cdot10^{9}}{39{,}48}} = \sqrt[3]{7{,}54\cdot10^{22}} \approx 4{,}22\cdot10^{7}\ \text{m} \approx 42\,200\ \text{km}$$ (Probe: $(4{,}22\cdot10^7)^3 = 7{,}52\cdot10^{22}$ ✓) Höhe: $h = r - R_E \approx 42\,200 - 6370 \approx 35\,800$ km. Nebenbei: $v = \dfrac{2\pi r}{T} \approx 3{,}1$ km/s.
5. ★ ==Nach **Süden**== — der geostationäre Satellit kann nur **über dem Äquator** stehen; von der Nordhalbkugel (Österreich, ca. 48° N) aus liegt der Äquator im Süden. Darum ist die Schüssel fix nach Süden gerichtet und muss nie nachgeführt werden. Schlüsselsatz: ==„Auf der Nordhalbkugel zeigt die Schüssel nach Süden — zum Satelliten über dem Äquator."== → [[themen/Raumfahrtphysik/2.3#2.3 Der geostationäre Satellit|Skript §2.3]]

### Zettel 2

1. Der Satellit **fällt** tatsächlich ständig — er ist nur so schnell, dass die Erdoberfläche unter ihm **gleich schnell wegkrümmt**: Er „verfehlt" den Boden immerzu (Newtons Bergkanone, siehe [[themen/Gravitationsphysik/11.1#Newtons Gedankenexperiment vom Berg|Thema 11 §11.1]]). → [[themen/Raumfahrtphysik/2.2#2.2 Satellit auf einer Kreisbahn|Skript §2.2]]
2. $\dfrac{mv^2}{r} = G\dfrac{Mm}{r^2}$ → $m$ auf beiden Seiten kürzen → $v^2 = \dfrac{GM}{r}$ → $\boxed{v = \sqrt{GM/r}}$. Die Satellitenmasse steht auf **beiden Seiten** und fällt weg — Feder und Lastwagen durchlaufen dieselbe Bahn gleich schnell.
3. **Nein** — gerade weil sich $m$ herauskürzt, ==steckt in den Bahndaten keinerlei Masseninformation==; die Masse ist nur über eine **Wechselwirkung** (z. B. Stoß + Impulserhaltung) bestimmbar. → [[themen/Raumfahrtphysik/2.2#2.2 Satellit auf einer Kreisbahn|Skript §2.2]]
4. $r = R_E + h = 6370 + 400 = 6770$ km $= 6{,}77\cdot10^6$ m (häufiger Fehler: nur die Flughöhe $h$ einsetzen!). $$v = \sqrt{\frac{6{,}674\cdot10^{-11}\cdot5{,}974\cdot10^{24}}{6{,}77\cdot10^6}} = \sqrt{5{,}89\cdot10^7} \approx 7670\ \text{m/s} \approx 7{,}7\ \text{km/s}$$ $$T = \frac{2\pi r}{v} = \frac{2\pi\cdot6{,}77\cdot10^6}{7670} \approx 5546\ \text{s} \approx 92\ \text{min}$$ (Probe: $7670^2 = 5{,}88\cdot10^7$ ✓) Rund 16 Erdumrundungen pro Tag.
5. **Erste kosmische Geschwindigkeit:** Geschwindigkeit einer **erdnahen Kreisbahn** ($r = R_E$) $\approx 7{,}9$ km/s — die kleinste Geschwindigkeit, mit der ein Körper die Erde umrunden kann. Die ISS fliegt 400 km höher, größeres $r$ → kleineres $v$ (7,7 km/s): „je höher, desto langsamer".
6. **Doch** — in 400 km Höhe noch ca. $89\,\%$ des Oberflächenwerts ($(6370/6770)^2$). ==Schwerelos sind die Astronauten, weil sie mit der Station im **freien Fall** sind== — Umlaufen ist ein Fallen, das den Boden nie erreicht. Genau das ist das **Äquivalenzprinzip** aus Thema 11: freier Fall ≡ Schwerelosigkeit. → [[themen/Raumfahrtphysik/2.2#2.2 Satellit auf einer Kreisbahn|Skript §2.2]] · [[themen/Gravitationsphysik/11.5#Äquivalenzprinzip|Thema 11 §11.5]]

### Zettel 3

1. $v_F$ ist die Geschwindigkeit, um dem Schwerefeld an der Oberfläche **für immer** zu entkommen. Exakt: Startet ein Körper mit genau $v_F$, kommt er nach **unendlich langer Zeit** in **unendlicher Entfernung** mit $v = 0$ an. → [[themen/Raumfahrtphysik/2.4#2.4 Fluchtgeschwindigkeit|Skript §2.4]]
2. Start: $E_\text{ges} = \dfrac{mv_F^2}{2}$; im Unendlichen: kinetische Energie aufgebraucht, alles in der Lage. Gleichsetzen: $\dfrac{mv_F^2}{2} = mgh$ → $m$ kürzen, mal 2: $v_F^2 = 2gh$; mit $g = \dfrac{GM}{r^2}$ und $h = r$: $v_F^2 = \dfrac{2GM}{r}$ → $\boxed{v_F = \sqrt{2GM/r}}$. (Sauber: Gesamtenergie an der Oberfläche null setzen, $\tfrac12 mv_F^2 - \tfrac{GMm}{r} = 0$ — dasselbe Ergebnis.) → [[themen/Raumfahrtphysik/2.4#2.4 Fluchtgeschwindigkeit|Skript §2.4, Herleitung]]
3. **Erde:** $v_F = \sqrt{\dfrac{2\cdot6{,}674\cdot10^{-11}\cdot5{,}974\cdot10^{24}}{6{,}37\cdot10^6}} = \sqrt{1{,}25\cdot10^8} \approx 11\,200$ m/s $\approx 11{,}2$ km/s. **Mond:** $v_F = \sqrt{\dfrac{2\cdot6{,}674\cdot10^{-11}\cdot7{,}35\cdot10^{22}}{1{,}74\cdot10^6}} = \sqrt{5{,}64\cdot10^6} \approx 2370$ m/s $\approx 2{,}4$ km/s. (Probe: $11\,200^2 = 1{,}25\cdot10^8$ ✓; $2370^2 = 5{,}6\cdot10^6$ ✓)
4. ==$v_F = \sqrt2\cdot v_\text{Kreis}$==. Beide Formeln nebeneinander: $v_\text{Kreis}^2 = \dfrac{GM}{r}$, $v_F^2 = \dfrac{2GM}{r}$ — der einzige Unterschied ist der **Faktor 2** unter der Wurzel; Division liefert $\sqrt2$.
5. $E_\text{ges} < 0$ → **gebunden** (Kreis/Ellipse, Kepler-Bahnen); $E_\text{ges} = 0$ → genau $v = v_F$, **Parabel**; $E_\text{ges} > 0$ → Flucht mit Restgeschwindigkeit, **Hyperbel**. → [[themen/Raumfahrtphysik/2.5#2.5 Bahnform abhängig von der Gesamtenergie|Skript §2.5]]
6. $v_F > c_0$ → nicht einmal Licht entkommt — ein **schwarzes Loch**. Mit $v_F = c_0$: $R = \dfrac{2GM}{c_0^2}$ (**Schwarzschildradius**, siehe [[themen/Gravitationsphysik/11.7#11.7 Schwarze Löcher|Thema 11 §11.7]]). **Startplätze:** Die Erde dreht sich von West nach Ost; am Äquator bewegt sich der Boden mit ca. $0{,}46$ km/s — wer nach Osten startet, nimmt das als „gratis Anzahlung" mit und spart Treibstoff.

### Kurzantworten zur Nachfragen-Kette

1. ★ ==Nach **Süden**== — der Satellit steht über dem Äquator; von der Nordhalbkugel aus liegt der im Süden.
2. Sterntag = volle Erddrehung **relativ zu den Sternen** (23 h 56 min); für „immer über demselben Punkt" zählt die echte Drehung — die 4 Extra-Minuten des Sonnentags kommen vom Lauf um die Sonne.
3. Dimensionschaos — in $G$ steckt die **Sekunde**; $T$ in Stunden macht $r$ um Größenordnungen falsch.
4. Nein — die Bahnebene muss durch den **Erdmittelpunkt** gehen; ein Kreis um den Wiener Breitengrad hätte seinen Mittelpunkt auf der Erdachse, diese Zentripetalkraft kann die Gravitation nicht liefern (von der Erde aus bestenfalls eine „8"-Figur).
5. Nein — $m$ kürzt sich auf beiden Seiten heraus, die Bahndaten enthalten keine Masseninformation.
6. Doch (ca. 89 %) — Schwerelosigkeit = gemeinsamer **freier Fall** mit der Station.
7. **Langsamer** ($v = \sqrt{GM/r}$: großes $r$, kleines $v$); geostationär 3,1 km/s < ISS 7,7 km/s.
8. Der **Faktor 2** unter der Wurzel: $v_F^2/v_\text{Kreis}^2 = 2$.
9. Reibung senkt die Gesamtenergie → tiefere Bahn → kleineres $r$ heißt **größeres** $v$: Beim Absinken wird mehr potentielle Energie frei, als die Reibung frisst.
10. Ein schwarzes Loch — am Ereignishorizont $v_F = c_0$, daraus $R = 2GM/c_0^2$.
11. Die Erde dreht von West nach Ost — der Boden liefert am Äquator $\approx 0{,}46$ km/s Anfangsgeschwindigkeit gratis.
12. Der Körper ist in der Potentialmulde **gebunden** (Kreis-/Ellipsenbahn) — die Energie reicht nicht bis ins Unendliche.
