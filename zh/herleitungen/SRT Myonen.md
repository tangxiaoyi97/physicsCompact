---
title: "SRT Myonen"
order: 13
---

**目标公式：**
$$\text{地面系：}\quad d = v\cdot t = v\cdot\gamma\,\tau \qquad\qquad \text{μ 子系：}\quad \ell = \frac{\ell_0}{\gamma}$$

**适用范围/假设：**
- 惯性系（地面近似为惯性系；μ 子匀速直线飞行，$v=\text{const}$）。
- $\gamma$ 因子 $\gamma=\dfrac{1}{\sqrt{1-v^2/c^2}}$ **不在此自证**——Formelnheft S. 5 直接给出，考场可直接引用。
- $\tau=2{,}2\ \mu$s 是**平均寿命**（指数衰变的平均值），下面的计算把它当"典型寿命"用——这是一个**统计近似**，结论（经典彻底失败、相对论自洽）不受影响。
- ★ 真题相关：Naturphänomene 卷（宇宙射线/μ 子佯谬）。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $\gamma=\dfrac{1}{\sqrt{1-v^2/c^2}}$ | Gamma-Faktor | ✅ S. 5 („$\gamma=1/\sqrt{1-v^2/c^2}$") |
| $t=t_0\cdot\gamma$ | Zeitdilatation（时间膨胀） | ✅ S. 5 („Zeitdilatation $t=t_0\cdot\gamma$") |
| $\ell=\ell_0\cdot\dfrac{1}{\gamma}$ | Längenkontraktion（长度收缩） | ✅ S. 5 („Längenkontraktion $l=l_0\cdot(1/\gamma)$") |
| $v=\dfrac{s}{t}$ | 匀速运动定义 | ❌ 不在 Formelnheft——基本定义，考场需自己写出 |
| $c=2{,}9979\cdot10^8$ m/s | Lichtgeschwindigkeit（光速） | ✅ S. 1（常数表） |

## 推导（Schritt für Schritt）

### 第 0 步——经典矛盾（为什么需要相对论）

1. **经典最大射程**＝最大可能速度 × 寿命。没有什么比光快，故 $v\le c$：
   $$d_\text{max}=c\cdot\tau$$
2. **代入数字**（$c\approx3\cdot10^8$ m/s，$\tau=2{,}2\cdot10^{-6}$ s）：
   $$d_\text{max}\approx 3\cdot10^8\ \tfrac{\text{m}}{\text{s}}\cdot 2{,}2\cdot10^{-6}\ \text{s}\approx 660\ \text{m}$$
3. μ 子在 $h\approx20$ km 高空产生：$660\ \text{m}\ll 20\ \text{km}$——**经典上 μ 子永远到不了地面**。可我们在地面却大量测到它们 → 经典物理在此**彻底失败**（不是差一点：经典上能到达的份额只有 $\mathrm e^{-20\,000/660}\approx10^{-13}$）。

### 途径 A——时间膨胀（地面系视角）

1. **识别固有时间（Eigenzeit）。** 寿命 $\tau=2{,}2\ \mu$s 是 μ 子**用自己的钟**测得的——钟相对 μ 子静止，所以 $\tau$ 就是 Formelnheft 公式里的 $t_0$（固有时间）。
2. **套用 Zeitdilatation（S. 5）。** 在地面系看，运动的钟走得慢，μ 子"活"的时间被拉长为
   $$t=\gamma\,\tau$$
3. **算 $\gamma$**（$v=0{,}9995\,c$）：
   $$\frac{v^2}{c^2}=0{,}9995^2=0{,}99900025,\qquad 1-\frac{v^2}{c^2}=9{,}9975\cdot10^{-4}$$
   $$\gamma=\frac{1}{\sqrt{9{,}9975\cdot10^{-4}}}=\frac{1}{0{,}031619}\approx 31{,}6$$
   （讲义口径取整说"约 32 倍"——同一数值，仅舍入不同。）
4. **拉长后的寿命：**
   $$t=\gamma\tau\approx 31{,}6\cdot 2{,}2\ \mu\text{s}\approx 69{,}6\ \mu\text{s}$$
5. **飞行距离**（匀速 $d=v\cdot t$）：
   $$d=v\cdot\gamma\tau\approx 0{,}9995\cdot 2{,}9979\cdot10^8\ \tfrac{\text{m}}{\text{s}}\cdot 6{,}96\cdot10^{-5}\ \text{s}\approx 2{,}086\cdot10^4\ \text{m}\approx \mathbf{21\ km}$$
6. **结论 A：** $21\ \text{km}\ \ge\ 20\ \text{km}$ ✓ —— 在地面系看，μ 子因时间膨胀"活"得足够久，能从产生高度走到地面。

### 途径 B——长度收缩（μ 子系视角）

1. **μ 子自己毫无察觉。** 在它自己的系里，寿命就是 $\tau=2{,}2\ \mu$s——没有变长。
2. **识别静止长度。** $20$ km 大气层厚度是在**大气静止的系**（地面系）里测得的——这是 Formelnheft 里的 $\ell_0$。
3. **套用 Längenkontraktion（S. 5）。** 对 μ 子而言，大气**迎面运动**，因此被缩短：
   $$\ell=\frac{\ell_0}{\gamma}=\frac{20\,000\ \text{m}}{31{,}6}\approx \mathbf{630\ m}$$
4. **μ 子寿命内能走的路程：**
   $$v\cdot\tau\approx 0{,}9995\cdot 2{,}9979\cdot10^8\ \tfrac{\text{m}}{\text{s}}\cdot 2{,}2\cdot10^{-6}\ \text{s}\approx 659\ \text{m}\approx 660\ \text{m}$$
5. **结论 B：** $630\ \text{m}\ \le\ 660\ \text{m}$ ✓ —— 在 μ 子系看，要穿越的大气只剩约 630 m，它短暂的寿命刚好够用。

### 第 3 步——两视角对照＝相对论的自洽性

| | 时间 | 距离 | 结论 |
| :-- | :-- | :-- | :-- |
| **地面系（途径 A）** | 被拉长：$\gamma\tau\approx69{,}6\ \mu$s | 原长 20 km | 到达 ✓ |
| **μ 子系（途径 B）** | 原寿命 $\tau=2{,}2\ \mu$s | 被缩短：$20\ \text{km}/\gamma\approx630$ m | 到达 ✓ |

两个参考系对**可观测事实**（μ 子到达地面）给出**同一结论**——一方眼里**被拉长的时间**，正是另一方眼里**被缩短的距离**（二者都由同一个 $\gamma$ 联系）。这正是狭义相对论的**自洽性**：物理结论不依赖于参考系的选择。

> ✎ **写法提醒：** 课堂笔记把公式写成 $t_b=t_r\sqrt{1-v^2/c^2}$（移项形式、下标命名不同），与 Formelnheft 的 $t=t_0\gamma$ 是**同一个**公式；内容不变：运动的钟显示更少的时间。

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $\tau$（$=t_0$） | μ 子平均寿命＝固有时间（Eigenzeit，随动钟测得） | s（$2{,}2\cdot10^{-6}$ s） |
| $t$ | 地面系测得的（被拉长的）寿命 | s |
| $\gamma$ | 洛伦兹因子（Gamma-Faktor） | —（无量纲，此处 $\approx31{,}6$） |
| $v$ | μ 子速度（$0{,}9995\,c$） | m/s |
| $c$ | 真空光速 $=2{,}9979\cdot10^8$（Formelnheft S. 1） | m/s |
| $d$ | 地面系中的飞行距离 | m |
| $\ell_0$ | 静止长度（大气厚度 $\approx20$ km，地面系测得） | m |
| $\ell$ | μ 子系中（被缩短的）大气厚度 | m |

## 关联

- 讲义出处：[[zh/themen/Physikalische Naturphaenomene/6.2#6.2 狭义相对论与 μ 子佯谬|主题 6 §6.2]]（数字口径完全一致：660 m / γ≈32 / 21 km / 630 m）
- 宇宙射线背景：[[zh/themen/Physikalische Naturphaenomene/6.1#6.1 宇宙射线|主题 6 §6.1]]、[[zh/themen/Kernphysik/12.10#12.10 宇宙射线|主题 12 §12.10]]
- 指数衰变（$\tau$ 是平均值）：[[Zerfallsgesetz|H14]]
