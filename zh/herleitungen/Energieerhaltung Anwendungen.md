---
title: "Energieerhaltung Anwendungen"
order: 3
---

**目标公式：**
$$v = \sqrt{2 g h}, \qquad h = \frac{v^2}{2 g}$$

**适用范围/假设：** 封闭系统（无摩擦、**忽略空气阻力**）；地表附近均匀重力场（$g = \text{konst.}$，$h \ll R_E$）；自由落体从静止出发（$v_0 = 0$）。

★ **真题相关：** $h = v^2/(2g)$ 正是 Boeing 真题追问（„In welcher Höhe wären beide Energieformen gleich groß?"）。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $E_\text{kin} = \dfrac{m v^2}{2}$ | Kinetische Energie（动能） | ✅ S. 2 („Kinetische Energie") |
| $E_\text{pot} = m g h$ | Potentielle Energie（势能） | ✅ S. 2 („Potentielle Energie") |
| $E_\text{ges} = E_\text{kin} + E_\text{pot} = \text{konst.}$ | Energieerhaltungssatz（能量守恒定律） | ❌ 不在 Formelnheft（只有各能量形式在册）——守恒定律本身考场需自己陈述 |
| $v = \sqrt{2gh}$，$h = \dfrac{v^2}{2g}$ | 落体末速度 / 等能高度 | ❌ 不在 Formelnheft——考场需现场推（见下） |

## 推导（Schritt für Schritt）

### A）自由落体末速度 $v = \sqrt{2 g h}$（质量相消！）

1. **写出守恒定律与两个状态。** 封闭系统中总能量守恒。比较**起点**（高度 $h$、静止）与**落地**（高度 $0$、速度 $v$）：
   - 起点：$E_\text{ges} = E_\text{pot} = m g h$（$v_0 = 0$ ⇒ $E_\text{kin} = 0$；零点取在地面）。
   - 落地：$E_\text{ges} = E_\text{kin} = \tfrac12 m v^2$（$h = 0$ ⇒ $E_\text{pot} = 0$）。
2. **令相等**（能量守恒：两个状态的总能量相同，且无摩擦损耗）：
   $$m g h = \frac{1}{2} m v^2$$
3. **约掉质量 $m$**（两边同除以 $m$，允许因为 $m > 0$）：
   $$g h = \frac{1}{2} v^2$$
   ==这一步是重点：末速度与质量无关==——重物与轻物（真空中）落得一样快，与伽利略结论一致。
4. **两边同乘 2**（把分数清掉）：
   $$v^2 = 2 g h$$
5. **开平方**（取正根，因为速度大小 $v \geq 0$）：
   $$\boxed{v = \sqrt{2 g h}}$$
6. **独立验算（与 H01 交叉核对）：** 由 [[Kinematik|H01]]，$t = 2{,}5$ s 时 $h \approx 30{,}7$ m、$v \approx 24{,}5$ m/s。代入：$\sqrt{2 \cdot 9{,}81 \cdot 30{,}7} = \sqrt{602{,}3} \approx 24{,}5$ m/s ✓——运动学与能量法给出同一答案。
   **量级例（讲义雨滴）：** 若无空气阻力，雨滴从 $h = 2000$ m 落下将达 $v = \sqrt{2 \cdot 9{,}81 \cdot 2000} \approx 198$ m/s ✓（实际因终极速度只有 7–9 m/s）。

### B）★ 等能高度 $h = \dfrac{v^2}{2 g}$（Boeing 真题追问）

**问题：** 飞机以速度 $v$ 飞行——在什么高度上 $E_\text{pot} = E_\text{kin}$？

1. **写出条件**（题目要求两种能量形式相等）：
   $$m g h = \frac{1}{2} m v^2$$
2. **约掉质量 $m$**（两边同除以 $m$）——答案与飞机多重**无关**：
   $$g h = \frac{1}{2} v^2$$
3. **解出 $h$**（两边除以 $g$）：
   $$\boxed{h = \frac{v^2}{2 g}}$$
   （形式上正是 A 的第 4 步对 $h$ 求解——同一条方程的两种读法。也与刹车距离 $S_B = v^2/(2a_B)$ 同构：把 $a_B \to g$。）
4. **真题数值（独立验算）：** $v = 946$ km/h $= 946/3{,}6 \approx 262{,}8$ m/s：
   $$h = \frac{262{,}8^2}{2 \cdot 9{,}81} \approx \frac{69\,060}{19{,}62} \approx 3520\ \text{m}$$
   （讲义给 $\approx 3519$ m——用未先舍入的 $v = 946/3{,}6$ 计算即得，纯舍入差异，约 3,5 km。）✓
5. **口试加分（老师原话的哲学弯钩）：** 在匀速平飞的机舱里**无法**通过任何实验察觉「两种能量恰好相等」——$E_\text{kin}$ 依赖参考系，而一切匀速运动参考系等价（相对性原理）。

### C）单摆与弹球的能量循环（定性 + 公式）

**单摆（Fadenpendel）：** 理想摆（无摩擦、无空气阻力）中两种能量形式**周期性互换**，总和不变：

1. **最高点（两侧转折点）：** $v = 0$ ⇒ $E_\text{kin} = 0$，全部能量为 $E_\text{pot} = m g h$（$h$ 为相对最低点的抬升高度）。
2. **最低点：** $h = 0$ ⇒ $E_\text{pot} = 0$，全部能量为 $E_\text{kin} = \tfrac12 m v_\text{max}^2$。
3. **由 A 的同一条方程**（$mgh = \tfrac12 m v_\text{max}^2$，$m$ 相消）得最低点速度与回升高度：
   $$v_\text{max} = \sqrt{2 g h}, \qquad h = \frac{v_\text{max}^2}{2 g}$$
   ⇒ 理想摆**总回到同一高度**（能量守恒的直接体现）。
4. **真实摆**：摩擦与空气阻力在每个周期抽走一点机械能（转为热）⇒ 振幅缓慢衰减——能量并未消失，只是离开了「动能+势能」这个账户。

**弹球（springender Ball）：** 下落 $E_\text{pot} \to E_\text{kin}$；触地瞬间动能短暂变为**形变能**（弹性势能）再弹回动能；上升 $E_\text{kin} \to E_\text{pot}$。每次碰撞都有一部分能量转为**热与声**（非完全弹性）⇒ 回弹高度逐次降低；只有理想完全弹性球才会回到原高度 $h = v^2/(2g)$。

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $E_\text{kin}$ | 动能 | J |
| $E_\text{pot}$ | 势能 | J |
| $E_\text{ges}$ | 总能量（封闭系统中守恒） | J |
| $m$ | 质量（每条推导中都被约掉） | kg |
| $v$ | 速度（A：落地末速度；B：飞行速度） | m/s |
| $v_\text{max}$ | 摆在最低点的速度 | m/s |
| $h$ | 高度（相对所选零点） | m |
| $g$ | 重力加速度 $= 9{,}807$ m/s²（Formelnheft S. 1；讲义计算用 $9{,}81$） | m/s² |

## 关联

- 所用能量公式的来历（$E_\text{kin}$、$E_\text{pot}$ 推导）→ [[Arbeit Energie|H02]]
- 同构公式 $S_B = v^2/(2 a_B)$（把 $g \to a_B$）→ [[Kinematik|H01]]
- 同一能量法在引力场大距离上的版本（逃逸速度）→ [[Fluchtgeschwindigkeit|H06]]
- 讲义出处：[[zh/themen/Klassische Mechanik/8.5#能量守恒定律|主题 8 §8.5 能量守恒]]（$v=\sqrt{2gh}$、Boeing 真题、参考系讨论）、[[zh/themen/Bewegungen/5.2#3) 非匀加速运动|主题 5 §5.2]]（雨滴 198 m/s 例）
