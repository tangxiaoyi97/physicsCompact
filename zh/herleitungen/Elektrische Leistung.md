---
title: "Elektrische Leistung"
order: 17
---

**目标公式：**
$$P=U\cdot I \qquad\text{延伸：}\qquad W_{el}=U\,I\,t,\qquad P=I^2R=\frac{U^2}{R}$$

**适用范围/假设：**
- $P=UI$ 对**任何**用电器普遍成立（只用了 $U$、$I$ 的定义）。
- 延伸式 $P=I^2R=U^2/R$ **额外**假设欧姆定律成立（$R$ 恒定的欧姆导体，如电热丝；对灯泡 $R$ 随温度变，只近似成立）。
- 直流或交流有效值（Effektivwerte，S. 5）均适用。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $W=\Delta\varphi\cdot Q=U\cdot Q$ | Elektr. Verschiebungsarbeit（电位移功）→ 移项得 $U=W/Q$ | ✅ S. 4 („Elektr. Verschiebungsarbeit") |
| $I=\dfrac{\Delta Q}{\Delta t}$ | Elektrischer Strom（电流强度） | ✅ S. 4 („Elektrischer Strom") |
| $P=\dfrac{\Delta W}{\Delta t}$ | Leistung（功率） | ✅ S. 2 („$P=\Delta W/\Delta t$") |
| $P_{el}=U\cdot I$ | Stromleistung——目标公式本身 | ✅ S. 4 („Stromleistung") |
| $W_{el}=Q\cdot U=I\cdot U\cdot t$ | Stromarbeit（电功） | ✅ S. 4 („Stromarbeit") |
| $R=\dfrac{\Delta U}{\Delta I}$ | Ohm'sches Gesetz（欧姆定律） | ✅ S. 4 („Ohm") |

> ✎ 目标公式虽然 ✅ 在 Formelnheft 上，但口试要求**会从定义推出**——"为什么电压乘电流就是功率"。

## 推导（Schritt für Schritt）

### 第 1 步——两个定义

1. **电压＝单位电荷的能量。** S. 4 „Elektr. Verschiebungsarbeit" 给出 $W=U\cdot Q$；移项：
   $$U=\frac{W}{Q}$$
   含义：每库仑电荷通过用电器时交出的能量（J/C＝V）。
2. **电流＝单位时间的电荷。** S. 4 „Elektrischer Strom"：
   $$I=\frac{Q}{t}$$
   含义：每秒流过导体截面的电荷量（C/s＝A）。

### 第 2 步——功率＝两个定义的乘积

1. **功率定义**（S. 2）：$P=\dfrac{W}{t}$（每秒转化的能量）。
2. **拆项**——分子分母同乘 $Q$（恒等变形，$Q\neq0$）：
   $$P=\frac{W}{t}=\frac{W}{Q}\cdot\frac{Q}{t}$$
3. **代入第 1 步的两个定义**：
   $$\boxed{P=U\cdot I}$$
   口诀："单位电荷的能量 × 单位时间的电荷数"＝单位时间的能量。
   **单位检验：** $\text{V}\cdot\text{A}=\dfrac{\text{J}}{\text{C}}\cdot\dfrac{\text{C}}{\text{s}}=\dfrac{\text{J}}{\text{s}}=\text{W}$ ✓。
4. **物理图像：** 电子在导体中"摩擦"原子实，把这部分能量转成**焦耳热**（吹风机、电炉）。

### 第 3 步——延伸一：电功 $W_{el}=UIt$

由 $P=W/t$ 移项 $W=P\cdot t$，代入 $P=UI$：
$$\boxed{W_{el}=U\,I\,t}$$
与 Formelnheft S. 4 „Stromarbeit $W_{el}=Q\cdot U=I\cdot U\cdot t$" 完全一致（$Q=It$ 即第 1 步定义的移项）。

### 第 4 步——延伸二：代入欧姆定律

**额外假设：** 欧姆导体，$R=U/I$ 恒定（S. 4）。

1. 用 $U=R\,I$ 消去 $U$：
   $$P=U I=(RI)\cdot I=\boxed{I^2R}$$
2. 用 $I=U/R$ 消去 $I$：
   $$P=U I=U\cdot\frac{U}{R}=\boxed{\frac{U^2}{R}}$$
3. **应用提示：** $I^2R$ 解释输电损耗（电流定值时损耗 $\propto R$、$\propto I^2$ → 高压小电流输电）；$U^2/R$ 解释家用电网（$U=230$ V 固定时，**大功率电器＝小电阻**）。

### 第 5 步——kWh 换算与算例（验算）

1. **千瓦时：** 电表计的是电功 $W_{el}$。
   $$1\ \text{kWh}=1000\ \text{W}\cdot3600\ \text{s}=3{,}6\cdot10^6\ \text{J}$$
2. **算例：吹风机 2000 W / 230 V。**
   - 电流：$I=\dfrac{P}{U}=\dfrac{2000\ \text{W}}{230\ \text{V}}\approx 8{,}70\ \text{A}$。
   - 电阻（欧姆近似）：$R=\dfrac{U}{I}=\dfrac{230}{8{,}70}\approx 26{,}4\ \Omega$。
   - **独立验算**（用延伸式回代）：$P=\dfrac{U^2}{R}=\dfrac{230^2}{26{,}4}=\dfrac{52\,900}{26{,}4}\approx 2004\ \text{W}\approx2000$ W ✓。
   - 用 15 min：$W_{el}=2\ \text{kW}\cdot0{,}25\ \text{h}=0{,}5$ kWh $=1{,}8\cdot10^6$ J。
   - 与讲义口径一致（§14.5：$I\approx8{,}7$ A、$R\approx26\ \Omega$，远小于 60 W 灯泡的电阻）。

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $P$ | （电）功率 | W＝J/s |
| $U$ | 电压＝单位电荷的能量 $W/Q$ | V＝J/C |
| $I$ | 电流强度＝单位时间的电荷 $Q/t$ | A＝C/s |
| $W,\ W_{el}$ | （电）功／能量 | J（实用单位 kWh，$1\ \text{kWh}=3{,}6\cdot10^6$ J） |
| $Q$ | 电荷量 | C |
| $t$ | 时间 | s |
| $R$ | 电阻（欧姆导体中恒定） | Ω＝V/A |

## 关联

- 讲义出处：[[zh/themen/Elektrodynamik/14.5#14.5 基本量与欧姆定律|主题 14 §14.5]]（定义、简短推导与 230 V/2000 W 算例一致）
- 输电损耗与变压器：[[zh/themen/Elektrodynamik/14.10#14.10 直流电与交流电|主题 14 §14.10]]
- 功率的力学定义 $P=\Delta W/\Delta t$：[[Arbeit Energie|H02]]
