---
title: "Millikan"
order: 11
---

**目标公式：**
$$\boxed{Q=\frac{m\,g\,d}{U}},\qquad r=\sqrt{\frac{9\,\eta\,v}{2\,\rho\,g}},\qquad Q=n\cdot e\ \Rightarrow\ e=1{,}602\cdot10^{-19}\ \text{C}$$

**适用范围/假设：**
- **平行板电容器**内的**均匀场**：$E=U/d$（板间距 $d$ 远小于板的尺寸）。
- 油滴为**微小球体**，匀速下沉满足 **Stokes 定律**（层流、低速、小球）。
- 用**油**而非水：测量期间不蒸发，$m,r$ 保持不变；忽略空气浮力（讲义 Physik+ 口径）。
- 第 2 阶段读数取**匀速**下沉段（加速段结束、力平衡建立之后）。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $F=E\cdot Q$ | Kraft im elektrischen Feld | ✅ S. 4 („$F=E\cdot Q$") |
| $W=\Delta\varphi\cdot Q=U\cdot Q$ | elektrische Arbeit/Spannung | ✅ S. 4 („$W=U\cdot Q$"，用于推 $E=U/d$） |
| $F=m\cdot g$ | Gewichtskraft | ✅ S. 2 („$F=m\cdot g$") |
| $F_W=6\pi\,\eta\, r\, v$ | Stokes-Reibung | ✅ S. 2 („Stokes") |
| $\rho=\dfrac{m}{V}$ | Dichte | ✅ S. 2 („$\rho=\frac{m}{V}$") |
| $V_\text{球}=\dfrac43\pi r^3$ | Kugelvolumen | ❌ 数学公式，不在 Formelnheft——需自己写出 |
| $E=\dfrac{U}{d}$ | 均匀场场强 | ❌ 不在 Formelnheft——两行推出：$W=F\cdot d$（S. 2）与 $W=U\cdot Q$（S. 4）→ $F\,d=U\,Q$ → $E=\frac{F}{Q}=\frac{U}{d}$ |
| $e=1{,}602\cdot10^{-19}$ C | Elementarladung | ✅ S. 1（常数表） |

## 推导（Schritt für Schritt）

### 第 ① 阶段——悬浮（Schwebephase）

1. **写出悬浮条件**（调节电压直到油滴静止：合力为零，向上的电场力恰好等于向下的重力——这是「悬浮」的定义）：
   $$F_E=F_G$$
2. **代入两个力**（左边用 S. 4 的 $F=E\cdot Q$，右边用 S. 2 的 $F=m\cdot g$）：
   $$Q\cdot E=m\cdot g$$
3. **代入平行板场强 $E=U/d$ 并对 $Q$ 求解**（$E=U/d$ 的两行推导见上表；两边除以 $E$）：
   $$Q=\frac{m\,g}{E}=\frac{m\,g\,d}{U}$$
   ==此时还算不出 $Q$==：$U,d,g$ 已知，但微小油滴的**质量 $m$ 无法直接称量**——这正是需要第 ② 阶段的原因。

### 第 ② 阶段——关掉电场、匀速下沉（Sinkphase）

4. **写出匀速下沉的力平衡**（断电后只剩重力，油滴加速下落；Stokes 阻力 $F_W=6\pi\eta rv$ 随 $v$ 增大，直到恰好抵消重力——此后**匀速**。在匀速段：阻力=重力）：
   $$6\pi\,\eta\,r\,v=m\,g$$
   一个方程、**两个**未知量（$m$ 和 $r$）→ 需要第二个关系。
5. **用密度把 $m$ 表示成 $r$ 的函数**（S. 2 的 $\rho=m/V$ 对 $m$ 反解，球体积 $V=\tfrac43\pi r^3$；油的密度 $\rho$ 已知）：
   $$m=\rho\cdot V=\rho\cdot\frac{4}{3}\pi r^3$$
6. **代入第 4 步，消去 $m$**（现在只剩 $r$ 一个未知量）：
   $$6\pi\,\eta\,r\,v=\rho\cdot\frac{4}{3}\pi r^3\cdot g$$
7. **两边除以 $\pi$ 和 $r$**（$r\neq0$，允许；右边由 $r^3$ 降为 $r^2$）：
   $$6\,\eta\,v=\frac{4}{3}\,\rho\,g\,r^2$$
8. **对 $r^2$ 求解**（两边除以 $\tfrac43\rho g$；除以分数=乘以倒数：$\frac{6}{\,4/3\,}=6\cdot\frac34=\frac{18}{4}=\frac92$）：
   $$r^2=\frac{6\,\eta\,v}{\tfrac{4}{3}\,\rho\,g}=\frac{9\,\eta\,v}{2\,\rho\,g}$$
9. **开平方**（取正根——半径为正）：
   $$\boxed{r=\sqrt{\frac{9\,\eta\,v}{2\,\rho\,g}}}$$
   右边全是**可测/已知**量（$\eta,v,\rho,g$）→ 得到 $r$，再代回第 5 步得到**质量 $m$**。

### 第 ③ 阶段——回代与分析（Auswertung）

10. **把第 ② 阶段的 $m$ 代回第 3 步**（现在每个量都已知，单颗油滴的电荷可算）：
    $$\boxed{Q=\frac{m\,g\,d}{U}}\qquad\text{其中}\quad m=\rho\,\frac43\pi r^3,\quad r=\sqrt{\frac{9\eta v}{2\rho g}}$$
11. **对大量油滴重复并作图**（关键观察：所有 $Q$ 值**不**均匀铺满数轴，只落在等距的「台阶」上，台阶之间是空白）：
    $$Q=n\cdot e,\qquad n=1,2,3,\dots$$
12. **读出台阶间距 = 基本电荷**（若电荷可任意细分，测值应连续分布；分立台阶**只能**解释为存在最小、不可再分的电荷份额）：
    $$\boxed{e=1{,}602\cdot10^{-19}\ \text{C}}\quad(\text{Formelnheft S. 1；讲义取整 }1{,}6\cdot10^{-19})$$
    **结论：电荷是量子化的**——任何电荷都是 $e$ 的整数倍。

### 数量级算例（独立验算，非必背）

典型数据：$\eta_\text{Luft}=1{,}82\cdot10^{-5}$ Pa·s，$v=1{,}0\cdot10^{-4}$ m/s，$\rho_\text{Öl}=900$ kg/m³，$g=9{,}807$ m/s²：
- $r=\sqrt{\dfrac{9\cdot1{,}82\cdot10^{-5}\cdot10^{-4}}{2\cdot900\cdot9{,}807}}=\sqrt{9{,}28\cdot10^{-13}}\approx9{,}6\cdot10^{-7}\ \text{m}\approx1\ \mu\text{m}$（显微镜可见 ✓）
- $m=900\cdot\tfrac43\pi(9{,}6\cdot10^{-7})^3\approx3{,}4\cdot10^{-15}$ kg
- 若 $Q=2e$、$d=6$ mm：悬浮电压 $U=\dfrac{m g d}{Q}=\dfrac{3{,}4\cdot10^{-15}\cdot9{,}807\cdot0{,}006}{3{,}204\cdot10^{-19}}\approx6\cdot10^{2}$ V——数百伏，实验上完全合理 ✓

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $Q$ | 油滴所带电荷 | C |
| $e$ | 基本电荷 $=1{,}602\cdot10^{-19}$ C（Formelnheft S. 1） | C |
| $n$ | 整数（电荷份数） | — |
| $E$ | 板间电场强度 | V/m = N/C |
| $U$ | 板间电压 | V |
| $d$ | 平行板间距 | m |
| $m$ | 油滴质量 | kg |
| $g$ | 引力场强 $=9{,}807$ m/s²（Formelnheft S. 1） | m/s² |
| $\eta$ | 空气黏度（黏滞系数） | Pa·s |
| $r$ | 油滴半径 | m |
| $v$ | 匀速下沉速度（测量值） | m/s |
| $\rho$ | 油的密度（已知材料常数） | kg/m³ |
| $V$ | 油滴体积 | m³ |
| $F_E,F_G,F_W$ | 电场力 / 重力 / Stokes 阻力 | N |

## 关联

- [[Photoeffekt Photon|H12]]——本实验测得的 $e$ 正是 eV↔J 换算的桥梁（$1\ \text{eV}=e\cdot1\ \text{V}$）。
- [[zh/themen/Paradigmatische Experimente/4.3#4.3 密立根油滴实验（Millikan，1910–1913）|主题 4 §4.3]]——讲义口径：装置图、「为什么用油不用水」「为什么不能在真空中做」、三阶段逐步。
- [[zh/themen/Elektrodynamik/14.2#量子化的实验证据——密立根油滴实验|主题 14 §14.2]]——电荷量子化在电学语境中的位置（$Q=n\cdot e$ 与电荷守恒）。
