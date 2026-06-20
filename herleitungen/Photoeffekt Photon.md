---
title: "Photoeffekt Photon"
order: 12
---

**Zielformel:**
$$\boxed{v_\text{max}=\sqrt{\frac{2\,(h f-E_A)}{m_e}}},\qquad E_\gamma=h f=\frac{h c}{\lambda}$$

$$f_\text{Grenz}=\frac{E_A}{h},\qquad \lambda_\text{Grenz}=\frac{h c}{E_A}$$

**Gültigkeitsbereich / Annahmen:**
- **Einsteins Lichtquantenbild**: Licht trifft in Portionen (Photonen, je $E_\gamma=hf$) ein; **ein** Elektron absorbiert **ein** Photon — alles oder nichts.
- $E_\text{kin}=hf-E_A$ ist die **maximale** kinetische Energie (Elektronen an der Metall-**Oberfläche**); Elektronen aus der Tiefe verlieren zusätzlich $W_S$ durch Stöße (vollständige Lehrbuchform $hf=E_\text{kin}+W_A+W_S$).
- Elektronengeschwindigkeit nichtrelativistisch (im Beispiel $v\sim10^5$ m/s $\ll c$, daher ist $\tfrac12 m_ev^2$ zulässig).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $E=h\cdot f$ | Photonenenergie | ✅ S. 5 („$E=h\cdot f$") |
| $v=\lambda\cdot f$ (mit $v=c$) | Wellengeschwindigkeit | ✅ S. 3 („Wellengeschwindigkeit") |
| $E_\text{kin}=\dfrac{m v^2}{2}$ | kinetische Energie | ✅ S. 2 („$E_\text{kin}=\frac{mv^2}{2}$") |
| $h f=E_A+E_\text{kin}$ | Einstein-Gleichung (Energiebilanz) | ❌ nicht im Formelnheft — selbst **hinschreiben** (Energieerhaltung: erhalten = verbraucht + Rest) |
| $1\ \text{eV}=1{,}602\cdot10^{-19}$ J | eV↔J-Umrechnung | ❌ steht so nicht im Heft — aus $W=U\cdot Q$ (S. 4) und $e$ (S. 1) selbst herstellen: $1\ \text{eV}=e\cdot1\ \text{V}$ |
| $h=6{,}626\cdot10^{-34}$ Js; $m_e=9{,}109\cdot10^{-31}$ kg; $e=1{,}602\cdot10^{-19}$ C; $c=2{,}9979\cdot10^{8}$ m/s | Konstanten | ✅ S. 1 (Konstanten) |

## Herleitung (Schritt für Schritt)

1. **Energie eines einzelnen Photons aufschreiben** (Planck/Einstein: Lichtenergie kommt in Portionen, jede Portion hängt nur von der **Frequenz** ab — S. 5):
   $$E_\gamma=h\cdot f$$
2. **Energiebilanz aufstellen (Einstein-Gleichung)** (Energieerhaltung: das Photon übergibt seine **gesamte** Energie auf einmal an **ein** Elektron; zuerst wird die materialabhängige **Austrittsarbeit** $E_A$ bezahlt, um das Elektron aus dem Metall zu lösen, der **Rest** wird kinetische Energie. „Erhalten = verbraucht + Rest"):
   $$\boxed{h f=E_A+E_\text{kin}}$$
3. **Nach der kinetischen Energie auflösen** (beidseitig $E_A$ subtrahieren; nur für $hf>E_A$ treten Elektronen aus — sonst Fall 1: egal wie hell, kein Elektron):
   $$E_\text{kin}=h f-E_A$$
4. **$E_\text{kin}=\tfrac12 m_e v^2$ einsetzen und nach $v$ auflösen** (Energie­formel von S. 2 für das austretende Elektron; beide Seiten mal $\tfrac{2}{m_e}$, Wurzel ziehen. Ergebnis ist die **Maximal**geschwindigkeit — Oberflächenelektronen):
   $$\frac{1}{2}m_e v_\text{max}^2=h f-E_A\;\Longrightarrow\;\boxed{v_\text{max}=\sqrt{\frac{2\,(h f-E_A)}{m_e}}}$$
5. **Grenzfrequenz: $E_\text{kin}=0$ setzen** (Grenzfall 2: das Photon reicht gerade für die Austrittsarbeit, das Elektron tritt mit $v=0$ aus. $hf_\text{Grenz}=E_A$ nach $f$ auflösen):
   $$f_\text{Grenz}=\frac{E_A}{h}$$
6. **In die Grenzwellenlänge umrechnen** ($c=\lambda f$ von S. 3 nach $\lambda$ auflösen, Schritt 5 einsetzen; Achtung: $f<f_\text{Grenz}\Leftrightarrow\lambda>\lambda_\text{Grenz}$ — Licht mit **längerer** Wellenlänge löst keine Elektronen aus):
   $$\lambda_\text{Grenz}=\frac{c}{f_\text{Grenz}}=\frac{h c}{E_A}$$
7. **Allgemeine Umrechnung Photonenenergie ↔ Wellenlänge** ($f=c/\lambda$ in Schritt 1 einsetzen — die in der Spektroskopie üblichste Form):
   $$E_\gamma=h f=\frac{h c}{\lambda}$$

### Beispiel 1 ★: Grenzfrequenz und Grenzwellenlänge von Zink (mit Probe)

Zink: $E_A\approx4{,}3$ eV. **Zuerst die Einheit umrechnen** (eV→J, mal $e$):
$$E_A=4{,}3\cdot1{,}602\cdot10^{-19}=6{,}89\cdot10^{-19}\ \text{J}$$
$$f_\text{Grenz}=\frac{E_A}{h}=\frac{6{,}89\cdot10^{-19}}{6{,}626\cdot10^{-34}}\approx1{,}04\cdot10^{15}\ \text{Hz}$$

$$\lambda_\text{Grenz}=\frac{c}{f_\text{Grenz}}=\frac{2{,}9979\cdot10^{8}}{1{,}04\cdot10^{15}}\approx2{,}9\cdot10^{-7}\ \text{m}\approx290\ \text{nm}\ \checkmark$$
Bereits im **UV** — das gesamte sichtbare Licht (ca. 1,6–3,1 eV) liegt unter 4,3 eV, deshalb wirkt bei der Zinkplatte **nur UV** (rotes Licht hilft auch bei beliebiger Helligkeit nicht).

### Beispiel 2 ★: Geschwindigkeit der austretenden Elektronen (mit eV↔J Schritt für Schritt)

UV mit $\lambda=250$ nm auf Zink:
1. $f=\dfrac{c}{\lambda}=\dfrac{2{,}9979\cdot10^{8}}{2{,}5\cdot10^{-7}}=1{,}20\cdot10^{15}$ Hz
2. $h f=6{,}626\cdot10^{-34}\cdot1{,}20\cdot10^{15}=7{,}95\cdot10^{-19}\ \text{J}\;\widehat{=}\;\dfrac{7{,}95\cdot10^{-19}}{1{,}602\cdot10^{-19}}\approx5{,}0$ eV
3. $E_\text{kin}=h f-E_A=5{,}0-4{,}3=0{,}7\ \text{eV}$; zurück in J: $E_\text{kin}\approx0{,}66\ \text{eV}\cdot1{,}602\cdot10^{-19}=1{,}06\cdot10^{-19}$ J
4. $v_\text{max}=\sqrt{\dfrac{2\cdot1{,}06\cdot10^{-19}}{9{,}109\cdot10^{-31}}}=\sqrt{2{,}33\cdot10^{11}}\approx4{,}8\cdot10^{5}\ \tfrac{\text{m}}{\text{s}}\ \checkmark$ (wie im Skript; $v/c\approx0{,}16\,\%$ — nichtrelativistische Näherung zulässig)

### Beispiel 3 ★: Skript-Beispiel nachgerechnet (11,7 → 9,15 eV → ≈490 nm)

Ein Elektron fällt von $E_3=11{,}7$ eV auf $E_1=9{,}15$ eV zurück und emittiert ein Photon:
1. $\Delta E=11{,}7-9{,}15=2{,}55\ \text{eV}=2{,}55\cdot1{,}602\cdot10^{-19}=4{,}09\cdot10^{-19}$ J
2. $f=\dfrac{\Delta E}{h}=\dfrac{4{,}09\cdot10^{-19}}{6{,}626\cdot10^{-34}}\approx6{,}2\cdot10^{14}$ Hz
3. $\lambda=\dfrac{c}{f}=\dfrac{2{,}9979\cdot10^{8}}{6{,}17\cdot10^{14}}\approx4{,}9\cdot10^{-7}\ \text{m}\approx490\ \text{nm}\ \checkmark$ (exakt 486 nm; das Skript rundet mit $c\approx3\cdot10^8$ auf 490 nm — blaugrünes sichtbares Licht, konsistent damit, dass 2,55 eV im sichtbaren Bereich liegt)

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $E_\gamma$ | Energie eines einzelnen Photons | J (üblich: eV) |
| $f$ | Frequenz des Lichts | Hz = 1/s |
| $\lambda$ | Wellenlänge des Lichts | m |
| $E_A$ | Austrittsarbeit (Materialkonstante; Zink ≈ 4,3 eV, Skriptwert) | J (üblich: eV) |
| $E_\text{kin}$ | (maximale) kinetische Energie des austretenden Elektrons | J (üblich: eV) |
| $v_\text{max}$ | Maximalgeschwindigkeit des austretenden Elektrons | m/s |
| $f_\text{Grenz}$ | Grenzfrequenz (darunter kein Elektronenaustritt) | Hz |
| $\lambda_\text{Grenz}$ | Grenzwellenlänge (darüber kein Elektronenaustritt) | m |
| $h$ | Planck'sches Wirkungsquantum $=6{,}626\cdot10^{-34}$ Js (Formelnheft S. 1) | J·s |
| $m_e$ | Elektronenmasse $=9{,}109\cdot10^{-31}$ kg (Formelnheft S. 1) | kg |
| $e$ | Elementarladung $=1{,}602\cdot10^{-19}$ C (Formelnheft S. 1; Umrechnungsfaktor eV↔J) | C |
| $c$ | Vakuumlichtgeschwindigkeit $=2{,}9979\cdot10^{8}$ m/s (Formelnheft S. 1) | m/s |

## Verknüpfungen

- [[Millikan|H11]] — Messung von $e$; ohne $e$ keine eV↔J-Umrechnung.
- [[themen/Quantenphysik und Quantenoptik/9.2#Photoeffekt (Einstein 1905)|Thema 9 §9.2]] — Skript-Fassung: drei falsche Vorhersagen der klassischen Wellentheorie, Tabelle der drei Fälle, Zink-Beispiel und $W_S$-Nachfrage.
- [[themen/Optik und Wellenphaenomene/13.2#13.2 Photoeffekt — Schulversuch|Thema 13 §13.2]] — Hallwachs-Schulversuch (Elektroskop + Glasplatten-Kontrolle).
- [[themen/Quantenphysik und Quantenoptik/9.2#Emission und Absorption|Thema 9 §9.2 Emission und Absorption]] — Kontext von Beispiel 3 (diskrete Niveaus und Linienspektren).
