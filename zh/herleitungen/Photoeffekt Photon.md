---
title: "Photoeffekt Photon"
order: 12
---

**目标公式：**
$$\boxed{v_\text{max}=\sqrt{\frac{2\,(h f-E_A)}{m_e}}},\qquad E_\gamma=h f=\frac{h c}{\lambda}$$

$$f_\text{Grenz}=\frac{E_A}{h},\qquad \lambda_\text{Grenz}=\frac{h c}{E_A}$$

**适用范围/假设：**
- **爱因斯坦光量子图像**：光以一份份光子（每份 $E_\gamma=hf$）入射；**一个**电子吸收**一个**光子——全有或全无。
- $E_\text{kin}=hf-E_A$ 给出的是**最大**动能（金属**表面**的电子）；来自深处的电子还会因碰撞损失 $W_S$（课本完整写法 $hf=E_\text{kin}+W_A+W_S$）。
- 电子速度非相对论（本算例 $v\sim10^5$ m/s $\ll c$，用 $\tfrac12 m_ev^2$ 合法）。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $E=h\cdot f$ | Photonenenergie | ✅ S. 5 („$E=h\cdot f$") |
| $v=\lambda\cdot f$（取 $v=c$） | Wellengeschwindigkeit | ✅ S. 3 („Wellengeschwindigkeit"） |
| $E_\text{kin}=\dfrac{m v^2}{2}$ | kinetische Energie | ✅ S. 2 („$E_\text{kin}=\frac{mv^2}{2}$") |
| $h f=E_A+E_\text{kin}$ | Einstein-Gleichung（能量账） | ❌ 不在 Formelnheft——考场需自己**写出**（能量守恒：收到 = 消耗 + 剩余） |
| $1\ \text{eV}=1{,}602\cdot10^{-19}$ J | eV↔J 换算 | ❌ 换算关系不在表中——由 S. 4 的 $W=U\cdot Q$ 与 S. 1 的 $e$ 自己得出：$1\ \text{eV}=e\cdot1\ \text{V}$ |
| $h=6{,}626\cdot10^{-34}$ Js；$m_e=9{,}109\cdot10^{-31}$ kg；$e=1{,}602\cdot10^{-19}$ C；$c=2{,}9979\cdot10^{8}$ m/s | Konstanten | ✅ S. 1（常数表） |

## 推导（Schritt für Schritt）

1. **写出单光子能量**（普朗克/爱因斯坦：光的能量一份份到来，每份只由**频率**决定——S. 5）：
   $$E_\gamma=h\cdot f$$
2. **立能量账（爱因斯坦方程）**（能量守恒：光子把**全部**能量一次性交给**一个**电子；先付材料决定的**逸出功** $E_A$ 把电子从金属解放出来，**剩余**变成动能。「收到 = 消耗 + 剩余」）：
   $$\boxed{h f=E_A+E_\text{kin}}$$
3. **对动能求解**（两边减 $E_A$；只有 $hf>E_A$ 时才有电子逸出——否则情形 1：无论多亮都打不出电子）：
   $$E_\text{kin}=h f-E_A$$
4. **代入 $E_\text{kin}=\tfrac12 m_e v^2$ 并对 $v$ 求解**（S. 2 的动能公式用于逸出电子；两边乘 $\tfrac{2}{m_e}$、开方。所得为**最大**速度——表面电子）：
   $$\frac{1}{2}m_e v_\text{max}^2=h f-E_A\;\Longrightarrow\;\boxed{v_\text{max}=\sqrt{\frac{2\,(h f-E_A)}{m_e}}}$$
5. **极限频率：令 $E_\text{kin}=0$**（临界情形 2：光子能量恰好只够付逸出功，电子以 $v=0$ 逸出。$hf_\text{Grenz}=E_A$ 对 $f$ 求解）：
   $$f_\text{Grenz}=\frac{E_A}{h}$$
6. **换成极限波长**（用 S. 3 的 $c=\lambda f$ 对 $\lambda$ 求解、代入第 5 步；注意 $f<f_\text{Grenz}\Leftrightarrow\lambda>\lambda_\text{Grenz}$——波长**长于**极限波长的光打不出电子）：
   $$\lambda_\text{Grenz}=\frac{c}{f_\text{Grenz}}=\frac{h c}{E_A}$$
7. **光子能量 ↔ 波长的通用换算**（把 $f=c/\lambda$ 代入第 1 步——光谱学里最常用的形式）：
   $$E_\gamma=h f=\frac{h c}{\lambda}$$

### 算例 1 ★：锌的极限频率与极限波长（验算）

锌：$E_A\approx4{,}3$ eV。**先换单位**（eV→J，乘 $e$）：
$$E_A=4{,}3\cdot1{,}602\cdot10^{-19}=6{,}89\cdot10^{-19}\ \text{J}$$
$$f_\text{Grenz}=\frac{E_A}{h}=\frac{6{,}89\cdot10^{-19}}{6{,}626\cdot10^{-34}}\approx1{,}04\cdot10^{15}\ \text{Hz}$$

$$\lambda_\text{Grenz}=\frac{c}{f_\text{Grenz}}=\frac{2{,}9979\cdot10^{8}}{1{,}04\cdot10^{15}}\approx2{,}9\cdot10^{-7}\ \text{m}\approx290\ \text{nm}\ \checkmark$$
已在**紫外**区——整个可见光（约 1,6–3,1 eV）都低于 4,3 eV，所以对锌板**只有紫外才行**（红光再亮也不行）。

### 算例 2 ★：逸出电子的速度（含 eV↔J 逐步换算）

紫外 $\lambda=250$ nm 照锌板：
1. $f=\dfrac{c}{\lambda}=\dfrac{2{,}9979\cdot10^{8}}{2{,}5\cdot10^{-7}}=1{,}20\cdot10^{15}$ Hz
2. $h f=6{,}626\cdot10^{-34}\cdot1{,}20\cdot10^{15}=7{,}95\cdot10^{-19}\ \text{J}\;\widehat{=}\;\dfrac{7{,}95\cdot10^{-19}}{1{,}602\cdot10^{-19}}\approx5{,}0$ eV
3. $E_\text{kin}=h f-E_A=5{,}0-4{,}3=0{,}7\ \text{eV}$；换回 J：$E_\text{kin}\approx0{,}66\ \text{eV}\cdot1{,}602\cdot10^{-19}=1{,}06\cdot10^{-19}$ J
4. $v_\text{max}=\sqrt{\dfrac{2\cdot1{,}06\cdot10^{-19}}{9{,}109\cdot10^{-31}}}=\sqrt{2{,}33\cdot10^{11}}\approx4{,}8\cdot10^{5}\ \tfrac{\text{m}}{\text{s}}\ \checkmark$（与讲义一致；$v/c\approx0{,}16\%$——非相对论近似合法）

### 算例 3 ★：讲义跃迁算例复算（11,7 → 9,15 eV → ≈490 nm）

电子从 $E_3=11{,}7$ eV 跃回 $E_1=9{,}15$ eV，放出一个光子：
1. $\Delta E=11{,}7-9{,}15=2{,}55\ \text{eV}=2{,}55\cdot1{,}602\cdot10^{-19}=4{,}09\cdot10^{-19}$ J
2. $f=\dfrac{\Delta E}{h}=\dfrac{4{,}09\cdot10^{-19}}{6{,}626\cdot10^{-34}}\approx6{,}2\cdot10^{14}$ Hz
3. $\lambda=\dfrac{c}{f}=\dfrac{2{,}9979\cdot10^{8}}{6{,}17\cdot10^{14}}\approx4{,}9\cdot10^{-7}\ \text{m}\approx490\ \text{nm}\ \checkmark$（精确值 486 nm；讲义用 $c\approx3\cdot10^8$ 取整为 490 nm——蓝绿可见光，与 2,55 eV 落在可见区自洽）

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $E_\gamma$ | 单个光子的能量 | J（常用 eV） |
| $f$ | 光的频率 | Hz = 1/s |
| $\lambda$ | 光的波长 | m |
| $E_A$ | 逸出功（材料常数；锌 ≈ 4,3 eV，讲义值） | J（常用 eV） |
| $E_\text{kin}$ | 逸出电子的（最大）动能 | J（常用 eV） |
| $v_\text{max}$ | 逸出电子的最大速度 | m/s |
| $f_\text{Grenz}$ | 极限频率（低于它无电子逸出） | Hz |
| $\lambda_\text{Grenz}$ | 极限波长（长于它无电子逸出） | m |
| $h$ | 普朗克常数 $=6{,}626\cdot10^{-34}$ Js（Formelnheft S. 1） | J·s |
| $m_e$ | 电子质量 $=9{,}109\cdot10^{-31}$ kg（Formelnheft S. 1） | kg |
| $e$ | 基本电荷 $=1{,}602\cdot10^{-19}$ C（Formelnheft S. 1；eV↔J 换算因子） | C |
| $c$ | 真空光速 $=2{,}9979\cdot10^{8}$ m/s（Formelnheft S. 1） | m/s |

## 关联

- [[Millikan|H11]]——$e$ 的测定；没有 $e$ 就没有 eV↔J 换算。
- [[zh/themen/Quantenphysik und Quantenoptik/9.2#光电效应（爱因斯坦 1905）|主题 9 §9.2]]——讲义口径：经典波动理论的三个错误预言、三种情形表、锌板算例与 $W_S$ 追问。
- [[zh/themen/Optik und Wellenphaenomene/13.2#13.2 光电效应——学校实验|主题 13 §13.2]]——Hallwachs 学校实验（验电器 + 玻璃板对照）。
- [[zh/themen/Quantenphysik und Quantenoptik/9.2#发射与吸收|主题 9 §9.2 发射与吸收]]——算例 3 的语境（分立能级与线状光谱）。
