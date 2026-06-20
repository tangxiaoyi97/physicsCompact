---
title: "Zerfallsgesetz"
order: 14
---

**Zielformeln:**
$$N(t)=N_0\cdot 2^{-t/T_{1/2}}=N_0\cdot e^{-\lambda t},\qquad \lambda=\frac{\ln 2}{T_{1/2}}$$

**Gültigkeit/Annahmen:**
- Große Kernanzahl ($N\gg1$): Wann ein einzelner Kern zerfällt, ist **quantenmechanisch zufällig**; das Gesetz gilt nur für den **statistischen Mittelwert**.
- Die Zerfallswahrscheinlichkeit jedes Kerns ist **konstant** und geschichtsunabhängig („Kerne haben kein Gedächtnis") — genau daraus folgt das „Halbieren pro $T_{1/2}$".
- Der Zerfall ist **unabhängig** von Temperatur, Druck und chemischer Umgebung (Kernenergien im MeV-Bereich ≫ chemische eV).

## Verwendete Formeln

| Formel | Name | Formelnheft |
| :-- | :-- | :-- |
| $T_{1/2}$: pro Halbwertszeit bleibt die Hälfte | Definition der Halbwertszeit | ❌ nicht im Formelnheft — Definition, selbst anschreiben |
| $N=N_0\cdot e^{-\lambda t}$ | Radioaktiver Zerfall (e-Form) | ✅ S. 5 („Radioaktiver Zerfall $N=N_0\cdot e^{-\lambda t}$") |
| $a^x=e^{x\ln a}$ | Basiswechsel (mathematische Identität) | ❌ Mathematik, nicht im Formelnheft |
| $\lambda=\dfrac{\ln 2}{T_{1/2}}$ | Zerfallskonstante ↔ Halbwertszeit | ❌ nicht im Formelnheft — wird hier hergeleitet, muss man können |

## Herleitung (Schritt für Schritt)

### Schritt 1 — vom „Halbieren in gleichen Zeitabständen" zur Zweierpotenz

**Definition** der Halbwertszeit $T_{1/2}$: Nach jeder Zeitspanne $T_{1/2}$ ist noch die Hälfte der Kerne übrig. Wir zählen die Halbierungen einfach ab:

1. Nach $0\cdot T_{1/2}$: $N=N_0$ (alle noch da).
2. Nach $1\cdot T_{1/2}$: $N=\tfrac12 N_0=N_0\cdot2^{-1}$.
3. Nach $2\cdot T_{1/2}$: $N=\tfrac12\cdot\tfrac12 N_0=N_0\cdot2^{-2}$.
4. Nach $n\cdot T_{1/2}$ ($n$ Halbierungen):
   $$N=N_0\cdot 2^{-n}$$
5. **Wie viele Halbwertszeiten stecken in der Zeit $t$?** $n=\dfrac{t}{T_{1/2}}$. Einsetzen:
   $$\boxed{N(t)=N_0\cdot 2^{-t/T_{1/2}}}$$
   ✎ **Anmerkung zur Näherung:** Die Schritte 1–4 sind nur für ganzzahliges $n$ wörtliches „Abzählen"; weil die Zerfallswahrscheinlichkeit konstant ist, fällt der Bestand in jedem noch so kleinen Zeitabschnitt um denselben Faktor (glatter Exponentialprozess) — die Potenz gilt daher auch für **nicht-ganzzahliges** $n$.

### Schritt 2 — Basiswechsel zu e: Anschluss an das Formelnheft

Das Formelnheft S. 5 gibt $N=N_0e^{-\lambda t}$. Beide Schreibweisen müssen **dieselbe** Funktion sein — Basis 2 in e umrechnen:

1. **Mathematische Identität:** $2=e^{\ln 2}$ (Definition von $\ln$).
2. **In die Potenz einsetzen:**
   $$2^{-t/T_{1/2}}=\left(e^{\ln 2}\right)^{-t/T_{1/2}}=e^{-\frac{\ln 2}{T_{1/2}}\,t}$$
   (Potenzregel $(e^a)^b=e^{ab}$.)
3. **Exponentenvergleich** mit $e^{-\lambda t}$ liefert:
   $$\boxed{\lambda=\frac{\ln 2}{T_{1/2}}}$$
4. **Physikalische Bedeutung:** $\lambda$ ist die **Zerfallswahrscheinlichkeit pro Zeiteinheit** (Zerfallskonstante). Kürzeres $T_{1/2}$ ↔ größeres $\lambda$ ↔ instabileres Isotop — **umgekehrt proportional**, wie im Skriptum §12.7.

### Schritt 3 — Rechenbeispiel Cs-137 (mit Probe)

**Cs-137:** $T_{1/2}=30{,}2$ a; wie viel bleibt nach $t=36$ a?

1. **Anzahl Halbwertszeiten:** $n=\dfrac{t}{T_{1/2}}=\dfrac{36}{30{,}2}\approx1{,}19$ (etwas mehr als eine Halbierung).
2. **Zweierpotenz-Form:** $2^{-1{,}19}=\dfrac{1}{2^{1{,}19}}\approx\dfrac{1}{2{,}28}\approx0{,}438$.
3. **Unabhängige Probe mit der e-Form:** $\lambda=\dfrac{\ln 2}{30{,}2\ \text{a}}=\dfrac{0{,}6931}{30{,}2}\approx0{,}02295\ \text{a}^{-1}$;
   $\lambda t=0{,}02295\cdot36\approx0{,}826$; $e^{-0{,}826}\approx0{,}438$. ✓ Beide Wege stimmen überein.
4. **Ergebnis:** Nach 36 Jahren sind noch ca. $\mathbf{43{,}8\,\%}$ übrig — identisch mit Beispiel 2 im Skriptum §12.7.

### Aktivität (ein Satz)

Die **Aktivität** $A=\lambda N$ ist die Anzahl der Zerfälle pro Sekunde (Einheit Bq = 1/s); da $N(t)$ exponentiell fällt, gilt ebenso $A(t)=A_0e^{-\lambda t}$ (❌ nicht im Formelnheft).

## Variablentabelle

| Symbol | Bedeutung | SI-Einheit |
| :-- | :-- | :-- |
| $N(t)$ | Anzahl der zur Zeit $t$ noch nicht zerfallenen Kerne | — (Anzahl) |
| $N_0$ | Anfangsanzahl ($t=0$) | — (Anzahl) |
| $t$ | verstrichene Zeit | s (im Beispiel a = Jahre; das Verhältnis $t/T_{1/2}$ ist dimensionslos, Einheiten müssen nur konsistent sein) |
| $T_{1/2}$ | Halbwertszeit | s (Cs-137: $30{,}2$ a) |
| $n$ | Anzahl der Halbwertszeiten $=t/T_{1/2}$ | — (dimensionslos) |
| $\lambda$ | Zerfallskonstante = Zerfallswahrscheinlichkeit pro Zeit | 1/s |
| $A$ | Aktivität $=\lambda N$ | Bq = 1/s |

## Verknüpfungen

- Skriptum: [[themen/Kernphysik/12.7#12.7 Halbwertszeit und Zerfallsgesetz|Thema 12 §12.7]] (Halbierungs-Idee, Basiswechsel und Cs-137-Beispiel identisch)
- Anwendung: [[themen/Kernphysik/12.8#12.8 C-14-Methode (Radiokarbon)|Thema 12 §12.8 C-14-Methode]]
- Auch die Myon-Lebensdauer ist ein Mittelwert eines Exponentialzerfalls: [[SRT Myonen|H13]]
