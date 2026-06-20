---
title: "Arbeit Energie"
order: 2
---

**目标公式：**
$$E_\text{kin} = \frac{1}{2} m v^2, \qquad E_\text{pot} = m g h, \qquad W_H = \frac{1}{2} k x^2, \qquad P = \frac{W}{t},\ \ 1\,\text{kWh} = 3{,}6 \cdot 10^6\,\text{J}$$

**适用范围/假设：** 加速用**恒力**（即 $a = \text{konst.}$）、从静止出发（$v_0 = 0$）；$E_\text{pot} = mgh$ 仅在**均匀重力场**（地表附近、$h$ 小，$g$ 视为常量）成立；弹簧能仅在**弹性范围**（胡克定律线性区）成立。

★ **真题相关：** $E_\text{kin}$ 与 $E_\text{pot}$ 的推导在真题中以原话 „Ableitungen durchführen" 被要求过（主题 8 真题卷）。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $W = \vec F \cdot \vec s$ | Arbeit（功） | ✅ S. 2 („Arbeit") |
| $F = m \cdot a$ | Newton'sches Axiom (Aktionsprinzip) | ✅ S. 2 („Newton'sches Axiom") |
| $F = m \cdot g$ | Schwerkraft (nahe Erdoberfläche)（重力） | ✅ S. 2 („Schwerkraft") |
| $F = -k \cdot \Delta x$ | Hooke-Gesetz / Federkraft（胡克定律） | ✅ S. 2 („Hooke-Gesetz") |
| $E_\text{kin} = \dfrac{m v^2}{2}$ | Kinetische Energie（动能）——目标公式本身在册 | ✅ S. 2 („Kinetische Energie") |
| $E_\text{pot} = m g h$ | Potentielle Energie（势能）——目标公式本身在册 | ✅ S. 2 („Potentielle Energie") |
| $E_\text{elast} = \dfrac{k x^2}{2}$ | Federenergie（弹簧能）——目标公式本身在册 | ✅ S. 2 („Federenergie") |
| $P = \dfrac{\Delta W}{\Delta t}$ | Leistung（功率） | ✅ S. 2 („Leistung") |
| $v = a t$，$s = \tfrac12 a t^2$ | 匀加速运动方程 | ❌ 不在 Formelnheft——见 [[Kinematik|H01]]，考场需自己推 |
| kWh 换算 | 能量单位换算 | ❌ 不在 Formelnheft——考场需默写 $1\,\text{kWh} = 1000\,\text{W} \cdot 3600\,\text{s}$ |

## 推导（Schritt für Schritt）

### A）★ 动能 $E_\text{kin} = \tfrac12 m v^2$（五步加速功推导）

1. **思路（定义）。** $E_\text{kin}$ 定义为：把质量 $m$ 的物体**从静止**加速到速度 $v$ 所需的**功**。设用**恒力** $F$ 加速（⇒ $a = \text{konst.}$，匀加速运动的全部公式可用）。
2. **功的定义**（Formelnheft S. 2）。力与位移**平行**（$\cos 0° = 1$），标量积退化为乘积：
   $$W = F \cdot s$$
3. **代入力**（牛顿第二定律，S. 2）：$F = m \cdot a$，故
   $$W = m \cdot a \cdot s$$
4. **代入路程**（匀加速、从静止：$s = \tfrac12 a t^2$，见 [[Kinematik|H01]] B）：
   $$W = m \cdot a \cdot \frac{1}{2} a t^2 = \frac{1}{2} m (a t)^2$$
   （最后一步把 $a \cdot a t^2$ 写成 $(at)^2$——纯代数整理。）
5. **认出速度**（匀加速、从静止：$v = a t$，见 [[Kinematik|H01]] A）。把 $(at)$ 替换为 $v$：
   $$\boxed{W = \frac{1}{2} m v^2 = E_\text{kin}}$$
   每一步的理由：① 用加速功**定义**动能；② 功的定义；③ 牛顿第二定律；④+⑤ 匀加速运动学。注意 $E_\text{kin}$ 通过 $v$ **依赖参考系**（是相对量）。

### B）★ 势能 $E_\text{pot} = m g h$（举升功）

1. **思路（定义）。** $E_\text{pot}$ 定义为：把物体**匀速**举高 $h$ 所需的**举升功**。匀速 ⇒ 举力恰好抵消重力，$F = F_G$（若举力更大，多余的功会变成动能，那就不纯是「位置能量」了）。
2. **代入重力**（Formelnheft S. 2，地表附近）：$F = F_G = m \cdot g$。**近似说明：** 这里把 $g$ 当常量——仅当 $h \ll R_E$ 时允许（地表到约 40 km 高空 $g$ 只变化约 1 %）。
3. **功的定义**（S. 2）。力与位移（竖直向上）**平行**，路程 $s = h$：
   $$W = F \cdot s = m g \cdot h$$
4. **结论。** 这份功以位置能量的形式储存：
   $$\boxed{E_\text{pot} = m g h}$$
   零点（$h = 0$ 取在哪）可自由选取——物理上可测的只有能量**差**。大距离（航天）须改用 $E_\text{pot} = -\dfrac{G M m}{r}$，见 [[Fluchtgeschwindigkeit|H06]]。

### C）弹簧能 $W_H = \tfrac12 k x^2$（F-x 图三角形面积）

1. **指出困难。** 拉伸弹簧时力**不恒定**：由胡克定律（S. 2），所需拉力随伸长量线性增长，$F(x') = k \cdot x'$（这里取大小；负号只表示弹簧力方向与形变相反）。所以**不能**直接用 $W = F \cdot s$。
2. **功 = F-x 图线下面积。** 与 [[Kinematik|H01]] 中「路程 = v-t 图面积」同理：把整个拉伸过程切成许多小段，每小段内力近似恒定、做功 $\approx F(x')\,\Delta x'$，求和即图线下面积。**此处取极限**（小段宽度 $\to 0$），因为只有这样「近似恒定」才严格成立。
3. **算面积。** $F(x') = k x'$ 是过原点的直线，从 $0$ 拉到 $x$ 的图线下面积是一个**三角形**：宽 $x$、高 $F(x) = k x$：
   $$W_H = \frac{1}{2} \cdot x \cdot k x$$
4. **整理：**
   $$\boxed{W_H = \frac{1}{2} k x^2}$$
   这份功以弹性势能储存在弹簧里（Formelnheft 写作 $E_\text{elast} = \tfrac{k x^2}{2}$，同一公式）。

### D）功率 $P = W/t$ 与 kWh 换算

1. **定义**（Formelnheft S. 2）：功率 = 单位时间做的功：
   $$P = \frac{\Delta W}{\Delta t} \quad\text{（过程均匀时简写 } P = \frac{W}{t}\text{）}$$
   单位：$1\,\text{W} = 1\,\text{J/s}$。
2. **移项得能量。** 两边乘 $t$：$W = P \cdot t$——「功率 × 时间 = 能量」。
3. **kWh 换算（独立验算）。** ==kWh 是**能量**单位，不是功率单位==：
   $$1\,\text{kWh} = 1000\,\text{W} \cdot 3600\,\text{s} = 3\,600\,000\,\text{J} = 3{,}6 \cdot 10^6\,\text{J} \checkmark$$

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $W$，$W_H$ | 功；拉伸弹簧做的功 | J |
| $E_\text{kin}$ | 动能 | J |
| $E_\text{pot}$ | 势能（均匀场） | J |
| $F$ | 力（A：加速力；B：举力 $=F_G$；C：拉力 $=kx'$） | N |
| $F_G$ | 重力 | N |
| $m$ | 质量 | kg |
| $a$ | 加速度（恒定） | m/s² |
| $v$ | 末速度 | m/s |
| $s$ | 路程 | m |
| $t$ | 时间 | s |
| $g$ | 重力加速度 $= 9{,}807$ m/s²（Formelnheft S. 1；讲义常用 $9{,}81$） | m/s² |
| $h$ | 举升高度 | m |
| $k$ | 弹簧常数 | N/m |
| $x$，$x'$ | 伸长量（末值；过程变量） | m |
| $P$ | 功率 | W |

## 关联

- 所用运动学公式 $v = at$、$s = \tfrac12 at^2$ 的推导 → [[Kinematik|H01]]
- $E_\text{kin}$、$E_\text{pot}$ 联手出场（能量守恒应用）→ [[Energieerhaltung Anwendungen|H03]]
- 大距离势能（$-GMm/r$、Gravitationsenergie）→ [[Fluchtgeschwindigkeit|H06]]
- 讲义出处：[[zh/themen/Klassische Mechanik/8.5#8.5 功、功率、能量|主题 8 §8.5]]（五步推导、势能、功率、kWh）、[[zh/themen/Klassische Mechanik/8.4#8.4 胡克定律与实验|主题 8 §8.4]]（弹簧能三角形面积）
