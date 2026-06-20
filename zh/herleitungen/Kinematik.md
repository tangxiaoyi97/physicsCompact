---
title: "Kinematik"
order: 1
---

**目标公式：**
$$v = a \cdot t, \qquad s = \frac{1}{2} a t^2, \qquad v = g t,\; s = \frac{1}{2} g t^2, \qquad S_v = v \cdot t_R, \qquad S_B = \frac{v^2}{2 a_B}$$

**适用范围/假设：** 加速度恒定（$a = \text{konst.}$，大小和方向都不变）；从静止出发（$v_0 = 0$）、从原点出发（$s_0 = 0$）；自由落体特例另需**忽略空气阻力**且 $g$ 在地表附近视为常量；刹车时 $a_B = \text{konst.}$。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $\bar a = \dfrac{\Delta v}{\Delta t}$ | Durchschnittsbeschleunigung（平均加速度） | ✅ S. 2 („Durchschnittsbeschleunigung") |
| $\bar v = \dfrac{\Delta s}{\Delta t}$ | Durchschnittsgeschwindigkeit（平均速度） | ✅ S. 2 („Durchschnittsgeschwindigkeit") |
| $F = m \cdot a$ | Newton'sches Axiom (Aktionsprinzip)（牛顿第二定律） | ✅ S. 2 („Newton'sches Axiom") |
| $W = \vec F \cdot \vec s$ | Arbeit（功）——用于能量法推导 | ✅ S. 2 („Arbeit") |
| $E_\text{kin} = \dfrac{m v^2}{2}$ | Kinetische Energie（动能）——用于能量法推导 | ✅ S. 2 („Kinetische Energie") |
| $v = a t$，$s = \tfrac12 a t^2$ | 匀加速运动方程 | ❌ 不在 Formelnheft——考场需自己从 $\bar a = \Delta v / \Delta t$ 推出（见下） |
| $S_v = v \cdot t_R$，$S_B = \dfrac{v^2}{2 a_B}$ | 反应距离 / 刹车距离 | ❌ 不在 Formelnheft——考场需现场推 |

## 推导（Schritt für Schritt）

### A）$v = a t$（由平均加速度定义）

1. **写出前提。** 设 $a = \text{konst.}$，且 $t = 0$ 时 $v_0 = 0$。（假设前置：没有这两条，下面的化简不成立。）
2. **写出定义。** 平均加速度的定义（Formelnheft S. 2）：
   $$\bar a = \frac{\Delta v}{\Delta t}$$
3. **利用 $a$ 恒定。** 加速度恒定时，任何时间段上的差商都等于同一个值，即 $\bar a = a$。（这是「匀加速」假设的直接含义。）
4. **代入区间。** 取从 $0$ 到 $t$ 的区间：$\Delta v = v - 0 = v$，$\Delta t = t - 0 = t$，故
   $$a = \frac{v}{t}$$
5. **两边同乘 $t$**（代数移项，允许因为 $t > 0$）：
   $$\boxed{v = a \cdot t}$$
   在 $v$-$t$ 图中这是一条**过原点、斜率为 $a$ 的直线**。

### B）$s = \tfrac12 a t^2$（平均速度法 / v-t 图面积法）

1. **指出困难。** 这里 $v$ **不**恒定，所以不能直接用 $s = v \cdot t$——必须改用**平均速度** $\bar v$。
2. **求平均速度。** 由 A），$v$ 从 $0$ **线性**增长到末值 $v = a t$。线性变化的量，其平均值等于首末值的算术平均（直线关于区间中点对称）：
   $$\bar v = \frac{0 + v}{2} = \frac{v}{2} = \frac{a t}{2}$$
3. **用平均速度套路程公式。** 由 $\bar v = \dfrac{\Delta s}{\Delta t}$（Formelnheft S. 2），取 $\Delta s = s - 0 = s$、$\Delta t = t$，移项得 $s = \bar v \cdot t$。代入第 2 步：
   $$s = \frac{a t}{2} \cdot t$$
4. **整理**（合并 $t$ 的幂次）：
   $$\boxed{s = \frac{1}{2} a t^2}$$
5. **几何复核（v-t 图面积）。** 路程 = $v$-$t$ 图线下面积。这里是一个宽 $t$、高 $v = a t$ 的**三角形**：
   $$A_\triangle = \frac{1}{2} \cdot t \cdot a t = \frac{1}{2} a t^2 \checkmark$$
   （学过积分者：$s = \int_0^t a\,t'\,\mathrm dt' = \tfrac12 a t^2$，结果相同。）

### C）特例：自由落体（Freier Fall）

1. **指出特例条件。** 忽略空气阻力时，地表附近一切物体以**同一个恒定加速度** $g$ 下落（重力加速度，Formelnheft S. 1：$g = 9{,}807$ m/s²）。这正是「$a = \text{konst.}$」的情形。
2. **代换 $a \to g$**（A、B 的全部前提都满足，结论照搬）：
   $$v = g \cdot t, \qquad s = \frac{1}{2} g t^2$$
3. **算例（独立验算）：** 石头下落 $t = 2{,}5$ s：$s = \tfrac12 \cdot 9{,}81 \cdot 2{,}5^2 = \tfrac12 \cdot 9{,}81 \cdot 6{,}25 \approx 30{,}7$ m，$v = 9{,}81 \cdot 2{,}5 \approx 24{,}5$ m/s。✓（与讲义主题 5 一致。）

### D）反应距离 $S_v = v \cdot t_R$

1. **写出物理情景。** 在反应时间 $t_R$（「惊吓秒」，约 1 s）内司机还**没有**踩刹车，车以**恒定速度** $v$ 继续行驶——这是**匀速直线运动**（$a = 0$）。
2. **匀速时差商不变。** $v$ 恒定 ⇒ $\bar v = v$，由 $\bar v = \Delta s / \Delta t$ 移项：
   $$\boxed{S_v = v \cdot t_R}$$
   $S_v$ 随 $v$ **线性**增长。

### E）刹车距离 $S_B = \dfrac{v^2}{2 a_B}$——双推导

**推导一（运动学法）。** 刹车是反向的匀加速运动：$a_B = \text{konst.}$，速度从 $v$ 线性减到 $0$。

1. **求刹车时间。** 末速度为零：$0 = v - a_B t$。移项、除以 $a_B$（允许因为 $a_B \neq 0$）：
   $$t = \frac{v}{a_B}$$
2. **求平均速度。** 速度从 $v$ 线性减到 $0$ ⇒ 平均值为首末平均（同 B 第 2 步的理由）：
   $$\bar v = \frac{v + 0}{2} = \frac{v}{2}$$
3. **代入路程公式** $S_B = \bar v \cdot t$：
   $$S_B = \frac{v}{2} \cdot \frac{v}{a_B}$$
4. **整理：**
   $$\boxed{S_B = \frac{v^2}{2 a_B}}$$
   （等价复核：用 $s = \tfrac12 a_B t^2$ 配 $t = v/a_B$：$S_B = \tfrac12 a_B \cdot \dfrac{v^2}{a_B^2} = \dfrac{v^2}{2 a_B}$ ✓）

**推导二（能量法）。** 同一公式由功-能关系导出——$v^2$ 依赖一目了然。

1. **刹车前的动能**（Formelnheft S. 2）：$E_\text{kin} = \tfrac12 m v^2$。
2. **刹车功。** 刹车力 $F_B = m \cdot a_B$（牛顿第二定律，S. 2），它在路程 $S_B$ 上做功（力与位移**反平行**，这里只看大小）：$W = F_B \cdot S_B = m\,a_B\,S_B$（Arbeit，S. 2）。
3. **能量平衡。** 停下意味着全部动能被刹车功「消掉」（转为热）：
   $$m\,a_B\,S_B = \frac{1}{2} m v^2$$
4. **约掉质量 $m$**（两边同除以 $m$，允许因为 $m > 0$）——刹车距离与车重无关：
   $$a_B\,S_B = \frac{1}{2} v^2$$
5. **解出 $S_B$**（两边除以 $a_B$）：
   $$\boxed{S_B = \frac{v^2}{2 a_B}}$$
   两法结果一致。==$S_B \propto v^2$：速度翻倍 → 刹车距离**四倍**==（$(2v)^2 = 4 v^2$）。

**算例（独立验算，$a_B = 7$ m/s²，$t_R = 1$ s）：** $v = 130$ km/h $= 130/3{,}6 \approx 36{,}1$ m/s：
$$S_v = 36{,}1 \cdot 1 \approx 36\ \text{m}, \qquad S_B = \frac{36{,}1^2}{2 \cdot 7} = \frac{1303}{14} \approx 93\ \text{m}, \qquad S_\text{停} \approx 129\ \text{m} \checkmark$$

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $a$，$\bar a$ | （平均）加速度 | m/s² |
| $v$ | 速度（刹车题中：刹车开始时的速度） | m/s |
| $v_0$ | 初速度（此处 $=0$） | m/s |
| $\bar v$ | 平均速度 | m/s |
| $s$ | 路程 | m |
| $t$ | 时间 | s |
| $\Delta v$，$\Delta t$，$\Delta s$ | 速度/时间/路程的变化量 | m/s · s · m |
| $g$ | 重力加速度 $= 9{,}807$ m/s²（Formelnheft S. 1；讲义计算常用 $9{,}81$） | m/s² |
| $S_v$ | 反应距离 | m |
| $t_R$ | 反应时间（约 1 s） | s |
| $S_B$ | 刹车距离 | m |
| $a_B$ | 刹车加速度（干燥路面约 7–8 m/s²） | m/s² |
| $m$ | 车的质量（能量法中出现，最终约掉） | kg |
| $F_B$ | 刹车力 | N |
| $E_\text{kin}$ | 动能 | J |
| $W$ | 功 | J |

## 关联

- 能量法用到的 $E_\text{kin} = \tfrac12 m v^2$ 的来历 → [[Arbeit Energie|H02]]
- 「质量相消」的同款套路（$v = \sqrt{2gh}$）→ [[Energieerhaltung Anwendungen|H03]]
- 讲义出处：[[zh/themen/Bewegungen/5.2#2) 匀加速运动|主题 5 §5.2]]（$v=at$、$s=\tfrac12 at^2$、自由落体）、[[zh/themen/Bewegungen/5.3#5.3 道路交通物理|主题 5 §5.3]]（$S_v$、$S_B$ 双推导）、[[zh/themen/Klassische Mechanik/8.5#8.5 功、功率、能量|主题 8 §8.5]]（功与动能）
