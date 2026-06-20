---
title: "Raumfahrtphysik"
sidebarTitle: "2. Raumfahrtphysik"
sidebarCollapsed: false
order: 2
tags:
  - physics
  - topic
  - de
  - spaceflight
  - orbital-mechanics
---

# Thema 2 — Raumfahrtphysik

> Drei Rechenaufgaben: Satellit auf Kreisbahn · geostationärer Satellit · Fluchtgeschwindigkeit

> **Roter Faden:** Alle drei Aufgaben beruhen auf **einem** Gedanken — die [[themen/Gravitationsphysik/11.1#Das Gravitationsgesetz|Gravitationskraft]] liefert die nötige **[[themen/Klassische Mechanik/|Zentripetalkraft]]**. Wer das einmal versteht, kann alle drei Formeln selbst herleiten.

## Kapitel

- [[themen/Raumfahrtphysik/2.1|2.1 Vorab: Was ist die Zentripetalkraft?]]
- [[themen/Raumfahrtphysik/2.2|2.2 Satellit auf einer Kreisbahn]]
- [[themen/Raumfahrtphysik/2.3|2.3 Der geostationäre Satellit]]
- [[themen/Raumfahrtphysik/2.4|2.4 Fluchtgeschwindigkeit]]
- [[themen/Raumfahrtphysik/2.5|2.5 Bahnform abhängig von der Gesamtenergie]]

## Selfcheck

1. Warum „fällt" ein Satellit nicht herunter, obwohl die Gravitation auf ihn wirkt?
2. Leite $v = \sqrt{G M / r}$ her. Warum spielt die **Masse des Satelliten** keine Rolle?
3. Was bedeutet $r$ in den Formeln genau — und welcher häufige Fehler lauert dabei?
4. Nenne die **drei Bedingungen** für einen geostationären Satelliten.
5. Warum rechnet man mit dem **Sterntag** (23 h 56 min) und nicht mit 24 h?
6. Definiere die **Fluchtgeschwindigkeit** exakt (was passiert „im Unendlichen"?).
7. Wie hängen $v_F$ und die Kreisbahngeschwindigkeit zusammen?
8. Wie entscheidet die **Gesamtenergie** über Kreis-, Parabel- oder Hyperbelbahn?
9. Warum kann ein geostationärer Satellit **nur** über dem Äquator stehen? Warum ist ein „schwebender" Satellit über Wien unmöglich?
10. Astronauten auf der ISS sind „schwerelos" — gibt es dort keine Gravitation?
11. Warum wird ein Satellit auf niedriger Bahn, den die Atmosphäre durch Reibung abbremst, **schneller**?
12. Kann man aus Höhe und Geschwindigkeit eines Satelliten seine **Masse** berechnen (Eisenhowers Frage)?
13. Sind **GPS-Satelliten** geostationär? Auf welcher Bahn (Höhe, Umlaufzeit) laufen sie, und warum nicht geostationär?

## §§ANTWORTEN
1. Er **fällt** zwar ständig, ist aber so schnell, dass die Erde unter ihm **gleich schnell wegkrümmt** — er „verfehlt" den Boden immerzu. Die Gravitation liefert dabei genau die nötige **Zentripetalkraft** ($F_\text{ZP} = F_G$). (§2.2)
2. Aus $\frac{m v^2}{r} = G\frac{Mm}{r^2}$ kürzt sich die Satellitenmasse $m$ heraus → $v = \sqrt{\frac{GM}{r}}$. Die Masse ist egal, weil sie auf **beiden Seiten** steht — auf einer Bahn gilt für jeden Satelliten **dieselbe Geschwindigkeit**. (§2.2)
3. $r$ ist der Bahnradius **vom Zentrum** des Zentralkörpers, also **Erdradius + Flughöhe**. Häufiger Fehler: nur die **Flughöhe** einzusetzen. (§2.2)
4. Umlaufzeit = **ein Sterntag**, Bahn **über dem Äquator**, Lauf in **Drehrichtung** der Erde. (§2.3)
5. Der **Sterntag** ist eine volle Erddrehung **relativ zu den Sternen**; für „immer über demselben Erdpunkt" zählt diese echte Drehung. Der Sonnentag (24 h) ist länger, weil die Erde zugleich um die Sonne wandert. (§2.3)
6. Geschwindigkeit, um dem Schwerefeld **für immer** zu entkommen: Startet ein Körper mit genau $v_F$, kommt er nach **unendlich langer Zeit** in **unendlicher Entfernung** mit der Geschwindigkeit **0** an. (§2.4)
7. $v_F = \sqrt{2}\cdot v_\text{Kreis}$ — die Fluchtgeschwindigkeit ist das $\sqrt 2$-fache der Kreisbahngeschwindigkeit auf gleicher Höhe (Faktor 2 unter der Wurzel). (§2.4)
8. Das **Vorzeichen** von $E_\text{ges} = \frac{m v^2}{2} - \frac{G m_1 m_2}{r}$ entscheidet: $E_\text{ges}<0$ → gebunden (Kreis/Ellipse); $E_\text{ges}=0$ → Parabel ($v=v_F$); $E_\text{ges}>0$ → Hyperbel ($v>v_F$). (§2.5)
9. Die Gravitation zeigt **zum Erdmittelpunkt**, die Zentripetalkraft muss zum Bahnmittelpunkt zeigen → die Bahnebene muss durch den **Erdmittelpunkt** gehen. Ein Kreis um den Breitengrad von Wien hätte seinen Mittelpunkt auf der Erdachse statt im Erdmittelpunkt — diese Kraft kann die Gravitation nicht liefern; eine geneigte Bahn durch den Erdmittelpunkt pendelt täglich nord-süd. Einzige ruhende Lösung: Bahn in der **Äquatorebene**. (§2.3)
10. Doch — in 400 km Höhe beträgt sie noch ca. $89\,\%$ des Oberflächenwerts. „Schwerelos" sind die Astronauten, weil sie mit der Station im **freien Fall** sind (Umlaufen = Fallen, das den Boden nie erreicht), nicht weil die Gravitation fehlt. (§2.2)
11. Reibung verringert die Gesamtenergie → die Bahn wird **tiefer** → nach $v=\sqrt{GM/r}$ bedeutet kleineres $r$ ein **größeres** $v$: Beim Absinken wird mehr potentielle Energie frei, als die Reibung verbraucht — der Überschuss wird kinetische Energie. (§2.2)
12. Nein — die Satellitenmasse $m$ kürzt sich in $F_\text{ZP}=F_G$ auf beiden Seiten heraus; die Bahndaten enthalten keine Masseninformation. Die Masse ist nur über eine Wechselwirkung (z. B. Stoß + Impulserhaltung) messbar. (§2.2)
13. **Nein** — GPS-Satelliten laufen auf einer **MEO** (Medium Earth Orbit) in ca. **20 200 km** Höhe mit ~**12 h** Umlaufzeit, sie „stehen" also nicht still. Nicht geostationär, weil die Ortsbestimmung **mehrere** Satelliten aus **verschiedenen Richtungen** braucht (gute Geometrie, keine Pol-Lücken). (§2.3)
