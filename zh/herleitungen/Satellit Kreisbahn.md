---
title: "Satellit Kreisbahn"
order: 5
---

**目标公式：**
$$v = \sqrt{\frac{G M}{r}}, \qquad T = \frac{2\pi r}{v}, \qquad r_\text{geo} = \sqrt[3]{\frac{G M T^2}{4\pi^2}}$$

**适用范围/假设：** **圆轨道**（$r = \text{konst.}$）；卫星质量远小于中心天体（$m \ll M$，中心天体视为静止）；忽略空气阻力与其他天体的摄动；$r$ 从**地心**算起（= 地球半径 + 飞行高度）。

★ **真题相关：** 地球同步卫星（geostationärer Satellit）的轨道半径推导是已证实的真题。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $F_Z = \dfrac{m v^2}{r} = m\omega^2 r$ | Zentripetalkraft(向心力) | ✅ S. 2 („Zentripetalkraft") |
| $F = G\dfrac{m_1 m_2}{r^2}$ | Gravitationsgesetz(万有引力定律) | ✅ S. 2 („Gravitationsgesetz") |
| $v = \omega \cdot r$ | Bahngeschwindigkeit(轨道速度) | ✅ S. 2 („Bahngeschwindigkeit") |
| $\omega = \dfrac{\Delta\varphi}{\Delta t} = 2\pi f$ | Winkelgeschwindigkeit(角速度) | ✅ S. 2 („Winkelgeschwindigkeit") |
| $f = \dfrac{1}{T}$ | Frequenz/Schwingungsdauer(频率与周期) | ✅ S. 2 („Frequenz/Schwingungsdauer"；与同页 $\omega=2\pi f$ 配合使用) |
| $\bar v = \dfrac{\Delta s}{\Delta t}$ | Durchschnittsgeschwindigkeit——用于 $T = 2\pi r/v$ | ✅ S. 2 („Durchschnittsgeschwindigkeit") |
| $v = \sqrt{GM/r}$，$r_\text{geo} = \sqrt[3]{GMT^2/4\pi^2}$ | 轨道速度 / 同步轨道半径 | ❌ 不在 Formelnheft——考场需由 $F_Z = F_G$ 现场推（见下） |

## 推导（Schritt für Schritt）

### A）圆轨道速度 $v = \sqrt{G M / r}$

1. **物理出发点。** 卫星沿圆轨道运行需要**向心力**（[[Zentripetalkraft|H04]]），而这里唯一向内拉的力是**引力**——引力**担当**向心力的角色：
   $$F_Z = F_G$$
2. **代入两个公式**（均为 Formelnheft S. 2）：左边 $F_Z = \dfrac{m v^2}{r}$，右边 $F_G = G\dfrac{M m}{r^2}$：
   $$\frac{m v^2}{r} = G \cdot \frac{M m}{r^2}$$
3. **约掉卫星质量 $m$**（两边同除以 $m$，允许因为 $m > 0$）：
   $$\frac{v^2}{r} = G \cdot \frac{M}{r^2}$$
   ==关键一步：轨道速度与卫星质量无关==——同一轨道上羽毛与卡车同速（艾森豪威尔之问：由轨道数据**算不出**卫星质量）。
4. **两边同乘 $r$**（右边约掉一个 $r$：$\tfrac{r}{r^2} = \tfrac1r$）：
   $$v^2 = \frac{G M}{r}$$
5. **开平方**（取正根，速度大小 $\geq 0$）：
   $$\boxed{v = \sqrt{\frac{G M}{r}}}$$
   ==「越高越慢」==：$r$ 在分母 ⇒ $r$ 越大 $v$ 越小。

### B）周期 $T = 2\pi r / v$

1. **匀速圆周运动**中速率恒定，可用 $\bar v = \Delta s/\Delta t$ 且 $\bar v = v$。
2. **取一整圈**：$\Delta s = $ 轨道周长 $U = 2\pi r$（圆周长公式），$\Delta t = T$：
   $$v = \frac{2\pi r}{T} \quad\Longrightarrow\quad \boxed{T = \frac{2\pi r}{v}}$$

### C）算例：ISS（独立验算）

$R_E = 6{,}371 \cdot 10^6$ m（S. 1），高度 $h = 400$ km ⇒ $r \approx 6{,}77 \cdot 10^6$ m；$M_E = 5{,}974 \cdot 10^{24}$ kg、$G = 6{,}673 \cdot 10^{-11}$ N·m²/kg²（均 S. 1）：
$$v = \sqrt{\frac{6{,}673 \cdot 10^{-11} \cdot 5{,}974 \cdot 10^{24}}{6{,}77 \cdot 10^6}} = \sqrt{5{,}89 \cdot 10^7} \approx 7670\ \text{m/s} \approx 7{,}7\ \text{km/s} \checkmark$$
$$T = \frac{2\pi \cdot 6{,}77 \cdot 10^6}{7670} \approx 5540\ \text{s} \approx 92\ \text{min} \checkmark$$
（与讲义一致。贴地轨道 $r = R_E$ 给 $v \approx 7{,}9$ km/s——**第一宇宙速度**。）

### D）★ 地球同步卫星 $r_\text{geo} = \sqrt[3]{G M T^2 / 4\pi^2}$

**思路：** 这里给定的不是 $v$ 而是**周期** $T$（一个恒星日——卫星须与地球自转同步）。所以把 $v$ 用 $T$ 表出，再解出 $r$。

1. **出发点同 A 第 4 步**（引力担当向心力的结果）：
   $$v^2 = \frac{G M}{r}$$
2. **把 $v$ 换成角速度**（$v = \omega r$，S. 2；即 $v^2 = \omega^2 r^2$）：
   $$\omega^2 r^2 = \frac{G M}{r}$$
3. **两边同乘 $r$**（右边的 $r$ 消去，左边幂次合并为 $r^3$）：
   $$\omega^2 r^3 = G M$$
4. **把 $\omega$ 用 $T$ 表示。** 一整圈 = 在时间 $T$ 内转过 $2\pi$：$\omega = \dfrac{2\pi}{T}$（由 $\omega = 2\pi f$ 与 $f = 1/T$，均在册）。平方后代入：
   $$\frac{4\pi^2}{T^2} \cdot r^3 = G M$$
5. **解出 $r^3$**（两边同乘 $\dfrac{T^2}{4\pi^2}$）：
   $$r^3 = \frac{G M T^2}{4\pi^2}$$
6. **开立方**：
   $$\boxed{r_\text{geo} = \sqrt[3]{\frac{G M T^2}{4\pi^2}}}$$
7. **算例（独立验算）。** $T = 24 \cdot 3600 = 86\,400$ s（整 24 h 近似；精确恒星日 $86\,164$ s 只改变结果约 80 km）：
   $$r = \sqrt[3]{\frac{6{,}673 \cdot 10^{-11} \cdot 5{,}974 \cdot 10^{24} \cdot 86\,400^2}{4\pi^2}} = \sqrt[3]{7{,}54 \cdot 10^{22}} \approx 4{,}22 \cdot 10^7\ \text{m} \approx 42\,200\ \text{km} \checkmark$$
   距地面 $h = r - R_E \approx 42\,200 - 6\,371 \approx 35\,800$ km ✓。顺带 $v = 2\pi r/T \approx 3{,}1$ km/s——远慢于 ISS 的 $7{,}7$ km/s，再次印证==「越高越慢」==。
   ==考试陷阱：$T$ 一定要换算成**秒**！== 另两个条件：轨道在**赤道上空**（轨道平面必须过地心）、与自转**同向**。

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $v$ | 轨道速度 | m/s |
| $r$，$r_\text{geo}$ | 轨道半径（**从地心算起**）；同步轨道半径 | m |
| $m$ | 卫星质量（推导中约掉） | kg |
| $M$，$M_E$ | 中心天体质量；地球质量 $= 5{,}974 \cdot 10^{24}$ kg（Formelnheft S. 1） | kg |
| $G$ | 引力常数 $= 6{,}673 \cdot 10^{-11}$ N·m²/kg²（S. 1；讲义部分算例用 $6{,}674$） | N·m²/kg² |
| $R_E$ | 地球半径 $= 6{,}371 \cdot 10^6$ m（S. 1） | m |
| $F_Z$，$F_G$ | 向心力；引力 | N |
| $T$ | 周期（同步卫星：1 恒星日 $\approx 86\,164$ s，常以 $86\,400$ s 近似） | s |
| $\omega$ | 角速度 $= 2\pi/T$ | rad/s |
| $f$ | 频率 $= 1/T$ | Hz |
| $U$ | 轨道周长 $= 2\pi r$ | m |
| $h$ | 距地面高度 $= r - R_E$ | m |

## 关联

- 所用向心力公式的推导 → [[Zentripetalkraft|H04]]
- $v_\text{Kreis}$ 与逃逸速度的 $\sqrt2$ 关系、轨道能量 → [[Fluchtgeschwindigkeit|H06]]
- 讲义出处：[[zh/themen/Raumfahrtphysik/2.2#2.2 圆轨道卫星|主题 2 §2.2]]（逐步推导 + ISS 算例）、[[zh/themen/Raumfahrtphysik/2.3#2.3 地球同步卫星|主题 2 §2.3]]（同步轨道）、[[zh/themen/Gravitationsphysik/11.1#万有引力定律|主题 11 §11.1]]（引力定律）、[[zh/themen/Klassische Mechanik/8.7#8.7 圆周运动与向心力|主题 8 §8.7]]（$F_Z = F_\text{力}$ 套路）
