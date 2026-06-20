---
title: "Gravitationsfeldstaerke Erdmasse"
order: 8
---

**目标公式：**
$$\boxed{g=\frac{G\,M}{r^2}}\qquad\Rightarrow\qquad M_E=\frac{g\,R_E^2}{G}\approx 6\cdot10^{24}\ \text{kg}$$

**适用范围/假设：**
- $M$ 为**球对称**质量分布（壳层定理：球对称质量在外部的引力场与全部质量集中在球心等同——这正是允许用「到质心的距离」$r$ 的理由）。
- $r$ 从**质心**起算，且 $r\ge$ 天体半径（外部场）。
- 牛顿引力适用（弱场）；忽略自转离心效应（地表 $g$ 的微小纬度差异即来自它）。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $F=m\cdot g$ | Gewichtskraft | ✅ S. 2 („$F=m\cdot g$") |
| $F_G=G\,\dfrac{m_1 m_2}{r^2}$ | Gravitationsgesetz | ✅ S. 2 („Gravitationsgesetz") |
| $g=\dfrac{G M}{r^2}$ | Gravitationsfeldstärke | ❌ 不在 Formelnheft——考场需自己**推出**（即本推导，两行即可） |

## 推导（Schritt für Schritt）

1. **对地表一个试探质量 $m$ 写出两种「同一个力」的表达**（重力 $F=mg$ 与引力定律描述的是**同一个**力——令其相等是物理等同，不是近似）：
   $$m\cdot g=G\,\frac{M\cdot m}{r^2}$$
2. **约去试探质量 $m$**（两边均为 $m$ 的一次方且 $m\neq0$；物理含义：$g$ 与试探质量**无关**，它是**场**的属性而非物体的属性——这正是真空中一切物体等速下落的原因）：
   $$\boxed{g=\frac{G\,M}{r^2}}$$
   $g$ 称**引力场强**（Ortsfaktor，单位 m/s² 或等价的 N/kg）：$M$ 是产生场的质量，$r$ 是到其**质心**的距离。

### 「称量地球」：Cavendish 测得 $G$ 之后 ★

牛顿**不知道** $G$ 的数值。1798 年卡文迪许用**扭秤**首次测出 $G$（装置见[[zh/themen/Paradigmatische Experimente/4.2#4.2 卡文迪许实验（Cavendish，1798）|主题 4 §4.2]]）——此前 $g$ 和 $R_E$ 早已知道，缺的只是 $G$：

3. **把第 2 步对 $M$ 反解**（两边同乘 $\frac{r^2}{G}$；取 $r=R_E$，即地表）：
   $$M_E=\frac{g\,R_E^2}{G}$$
4. **代入数值验算**（全部取自 Formelnheft S. 1：$g=9{,}807$ m/s²，$R_E=6{,}371\cdot10^{6}$ m，$G=6{,}673\cdot10^{-11}$ N·m²/kg²）：
   - $R_E^2=(6{,}371\cdot10^{6})^2=4{,}059\cdot10^{13}\ \text{m}^2$
   - $g\,R_E^2=9{,}807\cdot4{,}059\cdot10^{13}=3{,}981\cdot10^{14}$
   - $M_E=\dfrac{3{,}981\cdot10^{14}}{6{,}673\cdot10^{-11}}\approx 5{,}97\cdot10^{24}\ \text{kg}\approx 6\cdot10^{24}\ \text{kg}$ ✓
   
   **验算**：与 Formelnheft S. 1 的 $M_E=5{,}974\cdot10^{24}$ kg 一致（偏差 <0,2%，来自数值取整与 $g$ 含自转效应）。所以说卡文迪许「称量了地球」——他本人的目标正是定出**地球密度**，顺带定出了 $G$。

### 月球上的 $g\approx1{,}62$ m/s²——比值法

5. **对月球套用同一公式并与地球作比**（比值法的好处：$G$ 约去，只剩质量比与半径比；月球数据 $M_M=7{,}35\cdot10^{22}$ kg、$R_M=1{,}74\cdot10^{6}$ m 来自讲义，**不在** Formelnheft）：
   $$\frac{g_M}{g_E}=\frac{G M_M/R_M^2}{G M_E/R_E^2}=\frac{M_M}{M_E}\cdot\left(\frac{R_E}{R_M}\right)^2$$
6. **代入数值**：
   - $\dfrac{M_M}{M_E}=\dfrac{7{,}35\cdot10^{22}}{5{,}974\cdot10^{24}}=0{,}0123$
   - $\left(\dfrac{R_E}{R_M}\right)^2=\left(\dfrac{6{,}371}{1{,}74}\right)^2=3{,}66^2=13{,}4$
   - $\dfrac{g_M}{g_E}=0{,}0123\cdot13{,}4=0{,}165\approx\dfrac{1}{6}$
   $$g_M=0{,}165\cdot9{,}807\approx 1{,}62\ \tfrac{\text{m}}{\text{s}^2}\approx\tfrac16\,g_E\ \checkmark$$
   （直接代 $g_M=GM_M/R_M^2=\frac{6{,}673\cdot10^{-11}\cdot7{,}35\cdot10^{22}}{(1{,}74\cdot10^{6})^2}=1{,}62$ m/s²，两法一致。）==在月球上**体重**只有六分之一——质量不变。==

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $g$ | 引力场强（地点因子）；地表 $g=9{,}807$ m/s²（Formelnheft S. 1） | m/s² = N/kg |
| $m$ | 试探质量（推导中约去） | kg |
| $M$ | 产生场的（中心）质量 | kg |
| $r$ | 到 $M$ **质心**的距离 | m |
| $G$ | 引力常数 $=6{,}673\cdot10^{-11}\ \tfrac{\text{N·m}^2}{\text{kg}^2}$（Formelnheft S. 1） | N·m²/kg² |
| $M_E$ | 地球质量 $=5{,}974\cdot10^{24}$ kg（Formelnheft S. 1） | kg |
| $R_E$ | 地球半径 $=6{,}371\cdot10^{6}$ m（Formelnheft S. 1） | m |
| $M_M$ | 月球质量 $=7{,}35\cdot10^{22}$ kg（讲义值，不在 Formelnheft） | kg |
| $R_M$ | 月球半径 $=1{,}74\cdot10^{6}$ m（讲义值，不在 Formelnheft） | m |

## 关联

- [[Kepler III|H07]]——同一套路「令两个力相等、约去 $m$」；测出 $G$ 后两条路都能称天体：H08 用地表 $g$，H07 用绕行者轨道。
- [[Schwarzschildradius|H09]]——$GM$ 组合再次出现于史瓦西半径。
- [[zh/themen/Gravitationsphysik/11.2#11.2 引力场强 $g$|主题 11 §11.2]]——讲义口径（含潮汐追问）；[[zh/themen/Gravitationsphysik/11.3#11.3 卡文迪许实验——测定 G|§11.3]]「称量地球」。
- [[zh/themen/Paradigmatische Experimente/4.2#4.2 卡文迪许实验（Cavendish，1798）|主题 4 §4.2]]——扭秤装置与逐步分析。
