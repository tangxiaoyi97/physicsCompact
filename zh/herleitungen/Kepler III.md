---
title: "Kepler III"
order: 7
---

**目标公式：**
$$\boxed{\frac{T^2}{r^3}=\frac{4\pi^2}{G\,M}=\text{常量}}\qquad\text{（推广到椭圆：}r\to a\text{，长半轴）}$$

**适用范围/假设：**
- **圆轨道近似**：轨道半径 $r$ 恒定（推导末尾说明向椭圆的推广 $r\to a$）。
- 中心天体质量 $M$ **远大于**绕行者质量 $m$（$M\gg m$），可视 $M$ 为静止、$r$ 为到其质心的距离。
- **引力是唯一作用力**，并且恰好充当向心力（$F_Z=F_G$）。
- 牛顿力学适用（$v\ll c$、弱引力场）。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $F_Z=m\,\omega^2 r=\dfrac{m v^2}{r}$ | Zentripetalkraft | ✅ S. 2 („Zentripetalkraft $F_Z=m\omega^2r=\frac{mv^2}{r}$") |
| $F_G=G\,\dfrac{m_1 m_2}{r^2}$ | Gravitationsgesetz | ✅ S. 2 („Gravitationsgesetz") |
| $\omega=\dfrac{\Delta\varphi}{\Delta t}=2\pi f$ | Winkelgeschwindigkeit | ✅ S. 2 („Winkelgeschwindigkeit") |
| $f=\dfrac{1}{T}$ | Frequenz | ✅ S. 2 („Frequenz") |
| $v=\omega\, r$ | Bahngeschwindigkeit | ❌ 不在 Formelnheft——考场需自己写出（可由 S. 2 的 $a_Z=\omega^2 r=\frac{v^2}{r}$ 两种写法对比立即得到：$\omega^2 r=\frac{v^2}{r}\Rightarrow v=\omega r$） |
| $\left(\dfrac{T_1}{T_2}\right)^2=\left(\dfrac{r_1}{r_2}\right)^3$ | 3. Keplergesetz（比值形式） | ✅ S. 2 („3. Keplergesetz")——见下方「与 Formelnheft 比值形式的关系」 |

## 推导（Schritt für Schritt）

1. **写出角速度与周期的关系**（这是纯定义：转一整圈即 $\Delta\varphi=2\pi$，耗时 $\Delta t=T$；等价地由 S. 2 的 $\omega=2\pi f$ 与 $f=1/T$ 组合）：
   $$\omega=\frac{2\pi}{T}$$
2. **写出轨道速度与角速度的关系**（同一角速度下，外侧的点在相同时间走过更长的弧：弧长 $=\varphi\cdot r$，除以时间得 $v=\omega r$；或由 $a_Z$ 的两种写法对比）：
   $$v=\omega\cdot r$$
3. **用 $\omega$ 表示向心力**（把第 2 步的 $v^2=\omega^2r^2$ 代入 S. 2 的 $F_Z=\frac{mv^2}{r}$，这样后面代入 $\omega=2\pi/T$ 更直接）：
   $$F_Z=\frac{m\,\omega^2 r^2}{r}=m\,\omega^2 r$$
4. **建立力的平衡 $F_Z=F_G$**（物理核心步骤：行星没有被绳子拉着，**引力就是**使它拐弯的向心力——这是允许令二者相等的理由）：
   $$m\,\omega^2 r = G\,\frac{M\cdot m}{r^2}$$
5. **约去绕行者质量 $m$**（$m$ 在两边都以一次方出现且 $m\neq 0$，允许相除；物理含义：轨道与绕行者质量**无关**——卫星无论轻重，同一轨道同一周期）：
   $$\omega^2 r=\frac{G M}{r^2}$$
6. **两边除以 $r$**（纯代数整理，把所有 $r$ 收到右边；注意不是「约掉」，右边幂次升为 $r^3$）：
   $$\omega^2=\frac{G M}{r^3}$$
7. **代入 $\omega=\dfrac{2\pi}{T}$ 并平方**（把几何量 $\omega$ 换成可观测量 $T$：$\omega^2=\frac{4\pi^2}{T^2}$）：
   $$\frac{4\pi^2}{T^2}=\frac{G M}{r^3}$$
8. **交叉整理，把变量 $T,r$ 与常量分边**（两边同乘 $\frac{T^2}{GM}$ ——目标形式即得）：
   $$\boxed{\frac{T^2}{r^3}=\frac{4\pi^2}{G M}}$$
   右边只含 $G$ 与中心质量 $M$ → 对**同一中心天体**的所有绕行者都是**同一常量**。
9. **推广 $r\to a$（圆 → 椭圆）——只作说明，不冒充严格证明**：开普勒第一定律说真实轨道是**椭圆**。牛顿在其完整理论中证明：上式对椭圆轨道**依然成立**，只需把 $r$ 换成**长半轴 $a$**：
   $$\frac{T^2}{a^3}=\frac{4\pi^2}{G M}$$
   严格证明需要对椭圆轨道求解运动方程（结合面积定律），超出口试范围；圆轨道推导给出的常量 $\frac{4\pi^2}{GM}$ 恰与椭圆情形一致——口试时**主动点明**这里只对结论作说明。

### 与 Formelnheft 比值形式的关系

Formelnheft S. 2 给的是**比值形式** $\left(\frac{T_1}{T_2}\right)^2=\left(\frac{r_1}{r_2}\right)^3$，**不含常数**。两者的关系：

- 由第 8 步：对绕同一 $M$ 的两个天体，$\frac{T_1^2}{r_1^3}=\frac{T_2^2}{r_2^3}=\frac{4\pi^2}{GM}$。把左边两项交叉整理（两边同乘 $\frac{r_1^3}{T_2^2}$）即得比值形式——**比值形式是带常数形式的直接推论**。
- 反之，比值形式只说「常量对所有行星相同」，**不告诉你常量是多少**；要**测中心质量 $M$**（下方算例），必须用推导给出的带常数形式 $\frac{T^2}{a^3}=\frac{4\pi^2}{GM}$。

### 真题级算例 ★：由地球轨道求太阳质量

已知地球轨道：$T=1\ \text{a}=3{,}156\cdot10^{7}\ \text{s}$（**务必换算成秒！**），$a=1{,}496\cdot10^{11}\ \text{m}$。把第三定律对 $M$ 求解：

$$M_\odot=\frac{4\pi^2 a^3}{G\,T^2}$$

逐步代入（$G=6{,}673\cdot10^{-11}\ \tfrac{\text{N·m}^2}{\text{kg}^2}$，Formelnheft S. 1）：
1. $a^3=(1{,}496\cdot10^{11})^3=3{,}348\cdot10^{33}\ \text{m}^3$
2. $4\pi^2\cdot a^3=39{,}48\cdot 3{,}348\cdot10^{33}=1{,}322\cdot10^{35}$
3. $T^2=(3{,}156\cdot10^{7})^2=9{,}960\cdot10^{14}\ \text{s}^2$；$G\,T^2=6{,}673\cdot10^{-11}\cdot9{,}960\cdot10^{14}=6{,}647\cdot10^{4}$
4. $M_\odot=\dfrac{1{,}322\cdot10^{35}}{6{,}647\cdot10^{4}}\approx 1{,}99\cdot10^{30}\ \text{kg}\approx 2\cdot10^{30}\ \text{kg}$ ✓

**验算**：与 Formelnheft S. 1 的 $M_S=1{,}989\cdot10^{30}$ kg 几乎完全一致。同法可由月球轨道求地球质量、由银心附近恒星轨道求中心黑洞质量——**只要有东西绕着 $M$ 转，就能称出 $M$**。

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $T$ | 绕行周期（转一整圈 $360°$ 的时间） | s（**算例务必用秒**） |
| $r$ | 圆轨道半径（到中心天体**质心**的距离） | m |
| $a$ | 椭圆轨道长半轴（推广后取代 $r$） | m |
| $\omega$ | 角速度 | rad/s |
| $\varphi$ | 扫过的角 | rad |
| $f$ | 频率 | Hz = 1/s |
| $v$ | 轨道（切向）速度 | m/s |
| $m$ | 绕行者质量（推导中约去） | kg |
| $M$ | **被绕**中心天体的质量 | kg |
| $F_Z$ | 向心力 | N |
| $F_G$ | 引力 | N |
| $G$ | 引力常数 $=6{,}673\cdot10^{-11}\ \tfrac{\text{N·m}^2}{\text{kg}^2}$（Formelnheft S. 1） | N·m²/kg² |
| $M_\odot$ | 太阳质量 $=1{,}989\cdot10^{30}$ kg（Formelnheft S. 1，„$M_S$"） | kg |

## 关联

- [[Gravitationsfeldstaerke Erdmasse|H08]]——同一套路「令两个力相等、约去试探质量」；测 $G$ 之后才能由本式算出 $M$。
- [[zh/themen/Gravitationsphysik/11.4#开普勒第三定律|主题 11 §11.4]]——讲义原推导（九步口径一致）与「被绕质量表」。
- [[zh/themen/Raumfahrtphysik/2.2#2.2 圆轨道卫星|主题 2 §2.2]]——同一平衡 $F_Z=F_G$ 解出轨道速度；[[zh/themen/Raumfahrtphysik/2.3#2.3 地球同步卫星|§2.3]] 地球同步轨道即本式对 $r$ 反解。
- [[zh/themen/Klassische Mechanik/8.7#8.7 圆周运动与向心力|主题 8 §8.7]]——向心力为何存在、为何是「角色」而非独立的力。
