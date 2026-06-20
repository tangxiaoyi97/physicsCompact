---
title: "Fluchtgeschwindigkeit"
order: 6
---

**目标公式：**
$$v_F = \sqrt{\frac{2 G M}{r}}, \qquad v_F = \sqrt{2}\, v_\text{Kreis}, \qquad E_\text{ges} = -\frac{G M m}{2 r}$$

**适用范围/假设：** 只考虑该天体的引力（忽略空气阻力、其他天体）；$m \ll M$（中心天体视为静止）；逃逸的定义：以恰好 $v_F$ 出发的物体在 $r \to \infty$ 处速度**恰好**降为 $0$（经无限长时间）。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $W = G \cdot M \cdot m \cdot \left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$ | Gravitationsenergie（引力场中从 $r_1$ 举到 $r_2$ 的举升能）——**本推导的关键，恰好在册！** | ✅ S. 2 („Gravitationsenergie") |
| $E_\text{kin} = \dfrac{m v^2}{2}$ | Kinetische Energie（动能） | ✅ S. 2 („Kinetische Energie") |
| $F = G\dfrac{m_1 m_2}{r^2}$ | Gravitationsgesetz（万有引力定律，背景） | ✅ S. 2 („Gravitationsgesetz") |
| $v_\text{Kreis} = \sqrt{GM/r}$ | 圆轨道速度（用于 $\sqrt2$ 关系与 $E_\text{ges}$） | ❌ 不在 Formelnheft——见 [[Satellit Kreisbahn|H05]]，考场需自己推 |
| $v_F = \sqrt{2GM/r}$，$E_\text{ges} = -\dfrac{GMm}{2r}$ | 逃逸速度 / 轨道总能量 | ❌ 不在 Formelnheft——考场需现场推（见下） |
| 能量守恒 $E_\text{ges} = E_\text{kin} + E_\text{pot} = \text{konst.}$ | Energieerhaltungssatz | ❌ 不在 Formelnheft——考场需自己陈述 |

## 推导（Schritt für Schritt）

### A）逃逸所需的举升能（由 Formelnheft 的 Gravitationsenergie 取极限）

1. **写出在册公式**（Formelnheft S. 2，„Gravitationsenergie"）：把质量 $m$ 在 $M$ 的引力场中从 $r_1$ 搬到 $r_2$ 所需的能量为
   $$W = G \cdot M \cdot m \cdot \left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$
   （它已经把「引力随距离减小」考虑在内——正是 $mgh$ 在大距离上的严格替代品。）
2. **代入逃逸情形。** 出发点：天体表面，$r_1 = r$；目标：「彻底摆脱引力场」= 到达无穷远，$r_2 \to \infty$。
3. **取极限。** **此处取极限 $r_2 \to \infty$，因为**逃逸的定义就是到达无穷远；此时 $\dfrac{1}{r_2} \to 0$：
   $$W_\infty = G M m \left(\frac{1}{r} - 0\right) = \frac{G M m}{r}$$
   这就是从表面逃到无穷远所需的全部举升能——一个**有限**的数！（所以逃逸才可能。）

### B）逃逸速度 $v_F = \sqrt{2 G M / r}$（能量法）

1. **能量账本。** 出发时物体只带**动能** $E_\text{kin} = \tfrac12 m v_F^2$；按定义到无穷远时 $v = 0$ ⇒ 动能正好**全部**用于支付举升能 $W_\infty$（不多不少——多则带剩余速度，少则中途折返）。
2. **令相等**（能量守恒）：
   $$\frac{1}{2} m v_F^2 = \frac{G M m}{r}$$
3. **约掉质量 $m$**（两边同除以 $m$，$m > 0$）——逃逸速度与飞船质量**无关**：
   $$\frac{v_F^2}{2} = \frac{G M}{r}$$
4. **两边同乘 2**：
   $$v_F^2 = \frac{2 G M}{r}$$
5. **开平方**（取正根）：
   $$\boxed{v_F = \sqrt{\frac{2 G M}{r}}}$$
6. **算例（独立验算，S. 1 数值）：** 地球表面 $r = R_E = 6{,}371 \cdot 10^6$ m：
   $$v_F = \sqrt{\frac{2 \cdot 6{,}673 \cdot 10^{-11} \cdot 5{,}974 \cdot 10^{24}}{6{,}371 \cdot 10^6}} = \sqrt{1{,}2514 \cdot 10^8} \approx 11\,187\ \text{m/s} \approx 11{,}2\ \text{km/s} \checkmark$$
   （= **第二宇宙速度**；月球约 $2{,}4$ km/s。讲义用 $mgh$ + $h=r$ 的简化推导得到同一公式——讲义自己注明：严谨版正是本处「表面总能量 = 0」的能量法。）

### C）$v_F = \sqrt{2}\, v_\text{Kreis}$（与圆轨道速度的关系）

1. **并排写出两条公式**：圆轨道（[[Satellit Kreisbahn|H05]]）$v_\text{Kreis}^2 = \dfrac{GM}{r}$；逃逸（B 第 4 步）$v_F^2 = \dfrac{2GM}{r}$。
2. **两式相除**（$\dfrac{GM}{r} \neq 0$ 约掉）：
   $$\frac{v_F^2}{v_\text{Kreis}^2} = 2$$
3. **开平方：**
   $$\boxed{v_F = \sqrt{2} \cdot v_\text{Kreis}}$$
   核对：$7{,}9 \cdot \sqrt2 \approx 11{,}2$ km/s ✓（第一 → 第二宇宙速度）。

### D）圆轨道总能量 $E_\text{ges} = -\dfrac{G M m}{2 r}$

1. **写出大距离势能。** 取无穷远处 $E_\text{pot} = 0$ 为零点，则物体在 $r$ 处的势能等于「还差多少才到零点」的**负值**——即 A 第 3 步举升能的相反数：
   $$E_\text{pot} = -\frac{G M m}{r}$$
   （负号表示被**束缚**：比无穷远处能量低，处于势阱中。）
2. **写出总能量**（动能 + 势能）：
   $$E_\text{ges} = \frac{1}{2} m v^2 - \frac{G M m}{r}$$
3. **代入圆轨道速度**（[[Satellit Kreisbahn|H05]]：$v^2 = \dfrac{GM}{r}$）：
   $$E_\text{ges} = \frac{1}{2} m \cdot \frac{G M}{r} - \frac{G M m}{r} = \frac{G M m}{2 r} - \frac{G M m}{r}$$
4. **通分合并**（$\tfrac12 - 1 = -\tfrac12$）：
   $$\boxed{E_\text{ges} = -\frac{G M m}{2 r}}$$
   圆轨道总能量为**负**——卫星被束缚。（顺带：$|E_\text{pot}| = 2 E_\text{kin}$，束缚轨道的普遍特征。）

### E）$E_\text{ges}$ 的符号 ↔ 轨道形状（三分类）

由 $E_\text{ges} = \tfrac12 m v^2 - \dfrac{GMm}{r}$ 的**符号**直接读出轨道类型：

| $E_\text{ges}$ | 物理含义 | 轨道形状 |
| :-- | :-- | :-- |
| $< 0$ | 动能不足以支付逃逸账单——物体**被束缚**在势阱中 | 圆 / 椭圆 |
| $= 0$ | 恰好 $v = v_F$（B 第 2 步正是 $E_\text{ges} = 0$ 的情形） | 抛物线 |
| $> 0$ | $v > v_F$，到无穷远后仍有剩余动能 | 双曲线 |

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $v_F$ | 逃逸速度（表面出发） | m/s |
| $v_\text{Kreis}$，$v$ | 同高度圆轨道速度；瞬时速度 | m/s |
| $W$，$W_\infty$ | 举升能（$r_1 \to r_2$）；逃到无穷远的举升能 | J |
| $E_\text{kin}$，$E_\text{pot}$，$E_\text{ges}$ | 动能；势能（零点取无穷远）；总能量 | J |
| $m$ | 飞船/物体质量（B 中约掉） | kg |
| $M$，$M_E$ | 中心天体质量；地球质量 $= 5{,}974 \cdot 10^{24}$ kg（Formelnheft S. 1） | kg |
| $G$ | 引力常数 $= 6{,}673 \cdot 10^{-11}$ N·m²/kg²（S. 1） | N·m²/kg² |
| $r$，$r_1$，$r_2$ | 到天体**球心**的距离（表面出发 $r = R_E$）；起点/终点距离 | m |
| $R_E$ | 地球半径 $= 6{,}371 \cdot 10^6$ m（S. 1） | m |

## 关联

- 圆轨道速度 $v_\text{Kreis} = \sqrt{GM/r}$ 的推导（C、D 的输入）→ [[Satellit Kreisbahn|H05]]
- 同款能量法的地表小高度版本（$v = \sqrt{2gh}$，质量同样相消）→ [[Energieerhaltung Anwendungen|H03]]
- 势能概念与零点选取 → [[Arbeit Energie|H02]]
- 讲义出处：[[zh/themen/Raumfahrtphysik/2.4#2.4 逃逸速度|主题 2 §2.4]]（定义、能量推导、$\sqrt2$ 关系、第二宇宙速度）、[[zh/themen/Raumfahrtphysik/2.5#2.5 由总能量决定的轨道形状|主题 2 §2.5]]（三分类、$E_\text{pot} = -GMm/r$）、[[zh/themen/Gravitationsphysik/11.7#11.7 黑洞|主题 11 §11.7]]（$v_F = c$ ⇒ 史瓦西半径）
