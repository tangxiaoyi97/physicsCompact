---
title: "Schwarzschildradius"
order: 9
---

**目标公式：**
$$\boxed{R_S=\frac{2\,G\,M}{c^2}}\qquad\text{以及}\qquad \rho=\frac{3\,c^6}{32\,\pi\,G^3 M^2}\;\propto\;\frac{1}{M^2}$$

**适用范围/假设：**
- **启发式（牛顿式）推导**：用经典动能与逃逸速度，把光当作「以 $c$ 飞行的抛体」——见下方专门小节「为何只是启发式」。
- 质量 $M$ 球对称、不自转、不带电（严格对应 Schwarzschild 解的前提）。
- 密度公式中的「体积」指**事件视界包围的球体积**（平均密度的约定，不是物质真实分布——ART 预言质量坍缩为奇点）。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $E_\text{kin}=\dfrac{m v^2}{2}$ | kinetische Energie | ✅ S. 2 („$E_\text{kin}=\frac{mv^2}{2}$") |
| $W=G\,M\,m\left(\dfrac{1}{r_1}-\dfrac{1}{r_2}\right)$ | Gravitationsenergie | ✅ S. 2 („Gravitationsenergie") |
| $v_F=\sqrt{\dfrac{2GM}{R}}$ | Fluchtgeschwindigkeit | ❌ 不在 Formelnheft——考场需自己推出（第 1–2 步；完整版见[[zh/themen/Raumfahrtphysik/2.4#2.4 逃逸速度|主题 2 §2.4]]） |
| $\rho=\dfrac{m}{V}$ | Dichte | ✅ S. 2 („$\rho=\frac{m}{V}$") |
| $V_\text{球}=\dfrac{4}{3}\pi R^3$ | Kugelvolumen | ❌ 数学公式，不在 Formelnheft——需自己写出 |
| $c=2{,}9979\cdot10^{8}$ m/s | Lichtgeschwindigkeit | ✅ S. 1（常数表） |

## 推导（Schritt für Schritt）

### A) 史瓦西半径

1. **先推逃逸速度**（能量守恒：在表面 $r_1=R$ 给物体动能，恰好够它爬出引力势阱到 $r_2\to\infty$、到达时速度为零。所需提升功用 S. 2 的 Gravitationsenergie，取 $r_2\to\infty$ 时 $\frac{1}{r_2}\to0$）：
   $$\frac{m\,v_F^2}{2}=G\,M\,m\left(\frac{1}{R}-\underbrace{\frac{1}{\infty}}_{=0}\right)=\frac{G M m}{R}$$
2. **约去 $m$ 并对 $v_F$ 求解**（两边除以 $m\neq0$、乘 2、开方——逃逸速度与抛体质量无关）：
   $$v_F=\sqrt{\frac{2 G M}{R}}$$
3. **令 $v_F=c$（黑洞的定义性条件）**（事件视界处逃逸速度恰好等于光速：连光都刚好逃不出去。把 $v_F=c$ 代入并两边平方）：
   $$c^2=\frac{2 G M}{R}$$
4. **对 $R$ 求解**（两边同乘 $\frac{R}{c^2}$——得到的临界半径称**史瓦西半径**）：
   $$\boxed{R_S=\frac{2\,G\,M}{c^2}}$$
   ==每个物体都有自己的 $R_S$==：把质量 $M$ 压缩到 $R_S$ 以内，它就成为黑洞。

### 为何只是启发式（口试必讲！）

- **光没有静质量**：第 1 步把光当作质量为 $m$ 的抛体处理，对光子根本不合法（$m$ 虽然约掉了，论证逻辑仍依赖「有质量的抛体」图像）。
- **$\tfrac12 mv^2$ 在 $v\approx c$ 不合法**：经典动能只是低速近似；接近光速必须用相对论能量（Formelnheft S. 5：$E_\text{kin}=(m-m_0)c^2$），牛顿力学在此本来就超出适用范围。
- **严格推导属于广义相对论**：1916 年 Karl Schwarzschild 从爱因斯坦场方程得到球对称真空的**精确解**，事件视界位于 $R_S=2GM/c^2$。
- **结果相同是巧合**：牛顿式推导给出与 ART **恰好相同**的公式——系数 2 也对——这是**幸运的巧合**，不是论证的功劳。口试时主动点破这一点（讲义原话口径：„幸运的巧合"）。

### 算例（验算）

5. **地球**（$M_E=5{,}974\cdot10^{24}$ kg，S. 1）：
   $$R_S=\frac{2\cdot6{,}673\cdot10^{-11}\cdot5{,}974\cdot10^{24}}{(2{,}9979\cdot10^{8})^2}=\frac{7{,}973\cdot10^{14}}{8{,}987\cdot10^{16}}\approx 8{,}9\cdot10^{-3}\ \text{m}\approx 9\ \text{mm}\ \checkmark$$
6. **太阳**（$M_S=1{,}989\cdot10^{30}$ kg，S. 1）：
   $$R_S=\frac{2\cdot6{,}673\cdot10^{-11}\cdot1{,}989\cdot10^{30}}{8{,}987\cdot10^{16}}=\frac{2{,}655\cdot10^{20}}{8{,}987\cdot10^{16}}\approx 2{,}95\cdot10^{3}\ \text{m}\approx 3\ \text{km}\ \checkmark$$

### B) 黑洞的平均密度

7. **写出平均密度的定义**（S. 2 的 $\rho=m/V$，体积取视界球 $V=\tfrac43\pi R_S^3$）：
   $$\rho=\frac{M}{\tfrac{4}{3}\pi R_S^3}=\frac{3M}{4\pi R_S^3}$$
8. **先把 $R_S^3$ 算出来**（把第 4 步整体取三次方——分子分母分别立方）：
   $$R_S^3=\left(\frac{2GM}{c^2}\right)^3=\frac{8\,G^3 M^3}{c^6}$$
9. **代入并化简**（除以分数 = 乘以倒数；$M$ 约去一次幂，分母剩 $M^2$）：
   $$\rho=\frac{3M}{4\pi}\cdot\frac{c^6}{8\,G^3 M^3}=\boxed{\frac{3\,c^6}{32\,\pi\,G^3 M^2}}\;\propto\;\frac{1}{M^2}$$
   直观理由：$R_S\propto M$ → 体积 $\propto M^3$，而质量只 $\propto M$ → 密度 $\propto M/M^3=1/M^2$。==黑洞越大，平均密度越**小**。==
10. **验算：太阳质量黑洞**（$c^6=(c^2)^3=(8{,}987\cdot10^{16})^3=7{,}26\cdot10^{50}$；$G^3=(6{,}673\cdot10^{-11})^3=2{,}97\cdot10^{-31}$；$M_S^2=3{,}956\cdot10^{60}$）：
    $$\rho=\frac{3\cdot7{,}26\cdot10^{50}}{32\pi\cdot2{,}97\cdot10^{-31}\cdot3{,}956\cdot10^{60}}=\frac{2{,}18\cdot10^{51}}{1{,}18\cdot10^{32}}\approx 1{,}8\cdot10^{19}\ \tfrac{\text{kg}}{\text{m}^3}\ (\approx 2\cdot10^{19})$$
    交叉验算（不用公式，直接 $\rho=M/V$）：$R_S=2953$ m → $V=\tfrac43\pi\cdot(2953)^3=1{,}08\cdot10^{11}$ m³ → $\rho=\frac{1{,}989\cdot10^{30}}{1{,}08\cdot10^{11}}\approx1{,}8\cdot10^{19}$ kg/m³ ✓（远超原子核密度 $\sim10^{17}$ kg/m³）。
    反向数量级：$M\sim10^{9}M_\odot$ 的超大质量黑洞 → $\rho$ 缩小 $10^{18}$ 倍 → $\approx18$ kg/m³，**比水还稀**。

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $R_S$ | 史瓦西半径（事件视界半径） | m |
| $M$ | 天体/黑洞质量 | kg |
| $m$ | 抛体（试探质量，推导中约去） | kg |
| $v_F$ | 逃逸速度 | m/s |
| $R$ | 出发点到质心的距离（表面半径） | m |
| $r_1, r_2$ | Gravitationsenergie 公式中的起点/终点距离 | m |
| $\rho$ | （视界内的）平均密度 | kg/m³ |
| $V$ | 视界球体积 | m³ |
| $c$ | 真空光速 $=2{,}9979\cdot10^{8}$ m/s（Formelnheft S. 1；讲义记作 $c_0$） | m/s |
| $G$ | 引力常数 $=6{,}673\cdot10^{-11}\ \tfrac{\text{N·m}^2}{\text{kg}^2}$（Formelnheft S. 1） | N·m²/kg² |
| $M_E,\ M_S$ | 地球/太阳质量 $=5{,}974\cdot10^{24}$ / $1{,}989\cdot10^{30}$ kg（Formelnheft S. 1） | kg |

## 关联

- [[Gravitationsfeldstaerke Erdmasse|H08]]——$GM$ 组合与「每个天体的参数都进同一套公式」。
- [[zh/themen/Gravitationsphysik/11.7#史瓦西半径|主题 11 §11.7]]——讲义口径（含「严格吗？」追问与奇点、LHC 诉讼）；[[zh/themen/Gravitationsphysik/11.7#黑洞的平均密度|§11.7 平均密度]]。
- [[zh/themen/Raumfahrtphysik/2.4#2.4 逃逸速度|主题 2 §2.4]]——逃逸速度的完整能量守恒推导（本文第 1–2 步的展开版）。
