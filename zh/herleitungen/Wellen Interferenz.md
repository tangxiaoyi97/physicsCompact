---
title: "Wellen Interferenz"
order: 15
---

**目标公式：**
$$\text{①}\; c=\lambda f \qquad \text{②}\; d\sin\varphi_k=k\lambda \qquad \text{③}\; d_\text{膜}=\frac{\lambda}{4n} \qquad \text{④}\; \lambda=\frac{r_k^2}{k\,R}$$

**适用范围/假设：**
- ① 对**一切**周期波成立（声、水、光）；只要求波形以恒定速度 $c$ 平移。
- ② 夫琅禾费（远场）条件：屏远（$D\gg d$），出射光线近似**平行**；缝间距 $d$ 恒定。
- ③ **垂直入射**；膜的折射率介于两侧介质之间（$n_\text{空气}<n_\text{膜}<n_\text{玻璃}$），故两束反射光**都**有 $\pi$ 跃变。
- ④ **小角/薄层近似** $d\ll R$（空气层厚度远小于透镜曲率半径）；单色光、垂直入射；反射光中观察**暗环**。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $v=\lambda\cdot f$ | Wellengeschwindigkeit（波速） | ✅ S. 3 („Wellengeschwindigkeit") |
| $f=1/T$ | Frequenz–Periode | ✅ S. 2 („$f=1/T$") |
| $\sin\varphi_k=k\cdot\lambda/d$ | Interferenzmaxima beim Mehrfachspalt | ✅ S. 4 („Interferenzmaxima beim Mehrfachspalt")——即目标公式 ② 的移项形式 |
| $\lambda_n=\lambda_0/n$ | Wellenlänge im Medium（介质中的波长） | ✅ S. 4 („Wellenlänge im Medium") |
| 相长 $\Delta s=k\lambda$ / 相消 $\Delta s=(k+\tfrac12)\lambda$ | 干涉条件 | ❌ 不在 Formelnheft——考场需自己写出（理由见 ② 第 3 步） |
| 光密介质反射跃变 $\pi$，光疏不跃变 | Phasensprung（相位跃变） | ❌ 不在 Formelnheft——波动学定理，考场需自己叙述 |
| $r^2=d\,(2R-d)$ | 射影定理/圆几何（Höhensatz） | ❌ 数学，不在 Formelnheft |
| $c=2{,}9979\cdot10^8$ m/s | Lichtgeschwindigkeit | ✅ S. 1（常数表） |

## 推导（Schritt für Schritt）

### ① $c=\lambda f$ ——由定义直接推

1. **关键观察：** 过了**一个**周期 $T$，波形回到原样——只是整体**平移了一个波长** $\lambda$（这正是 $T$ 与 $\lambda$ 的定义：时间周期与空间周期）。
2. **速度通式**（匀速）：$c=\dfrac{\text{路程}}{\text{时间}}=\dfrac{\lambda}{T}$。
3. **代入** $f=\dfrac1T$（S. 2）：
   $$\boxed{c=\lambda\cdot f}$$
4. **验算（UKW 调频台 88,6 MHz）：** $\lambda=\dfrac{c}{f}=\dfrac{3\cdot10^8\ \text{m/s}}{88{,}6\cdot10^6\ \text{Hz}}\approx 3{,}386\ \text{m}$。
   （用 S. 1 精确值 $c=2{,}9979\cdot10^8$：$\lambda\approx3{,}384$ m——同样 $\approx3{,}4$ m；讲义口径约取 3,3 m。）米级无线电波 vs. 下文 nm 级光波。

### ② 光栅/双缝极大 $d\sin\varphi_k=k\lambda$

1. **几何设置：** 相邻两缝间距 $d$；屏很远（$D\gg d$）→ 到同一屏点的两条光线近似**平行**，与法线夹角 $\varphi$。
2. **程差的几何：** 从上缝向下缝光线作垂线，得一个以 $d$ 为**斜边**的直角三角形；下缝光线多走的路程是 $\varphi$ 的**对边**：
   $$\Delta s=d\cdot\sin\varphi$$
3. **同相条件（为什么是整数个 λ）：** 平移一个波长，波与自身完全重合（相位 $2\pi$）。两束波在屏上**相长**（峰对峰、最亮），要求程差是波长的**整数倍**：
   $$\Delta s=k\lambda,\qquad k=0,1,2,\dots$$
4. **合并 2、3：**
   $$\boxed{d\sin\varphi_k=k\lambda}\quad\Longleftrightarrow\quad \sin\varphi_k=\frac{k\lambda}{d}$$
   右式正是 Formelnheft S. 4 „Interferenzmaxima beim Mehrfachspalt"——**一字不差**，考场可直接引用。
5. **小角延伸（讲义测波长实验）：** $D\gg s$ 时 $\sin\varphi\approx\tan\varphi=\dfrac{s}{D}$ → $\lambda=d\cdot\dfrac{s}{D}$。
   **验算（讲义红光行）：** $d=10^{-5}$ m，$s=0{,}195$ m，$D=3$ m → $\lambda=10^{-5}\cdot\dfrac{0{,}195}{3}=6{,}5\cdot10^{-7}$ m $=650$ nm ✓（红光）。

### ③ λ/4 增透膜 $d=\dfrac{\lambda}{4n}$

1. **设置：** 玻璃（$n_\text{玻}\approx1{,}5$）上镀折射率**居中**的膜（MgF₂，$n\approx1{,}38$）。光垂直入射，一部分在膜上表面反射、一部分在膜–玻璃界面反射。
2. **两个相位跃变相互抵消：** 波动学定理——向**光密**介质反射跃变 $\pi$（"固定端"），向光疏不跃变。这里 $n_\text{空气}<n<n_\text{玻}$，**两个界面都是向光密反射** → 两束都跃变 $\pi$ → 跃变对**相位差**没有净贡献，只剩光程差起作用。
3. **光程差：** 下面那束在膜内**下去再上来**，几何路程多 $2d$。膜内波长缩短为 $\lambda_n=\lambda/n$（S. 4 „Wellenlänge im Medium"）——同样的几何路程装下更多个波长，等效**光程**为几何路程 × $n$：
   $$\Delta s_\text{opt}=2nd$$
4. **相消条件（增透＝让反射光相消）：** 程差为**半整数**个波长时峰对谷。取**最薄**解（$k=0$）：
   $$2nd=\frac{\lambda}{2}\quad\Longrightarrow\quad \boxed{d=\frac{\lambda}{4n}}$$
   ——"四分之一波长膜"（指**膜内**波长的四分之一：$d=\lambda_n/4$）。
5. **验算（绿光设计）：** $\lambda=550$ nm，$n=1{,}38$ → $d=\dfrac{550}{4\cdot1{,}38}\ \text{nm}\approx 99{,}6\ \text{nm}\approx100$ nm ✓（讲义口径 ≈100 nm）。
6. **能量去向：** 被"消掉"的反射光并未消失，而是进入**透射**——这正是镀膜目的。条件只对一个 $\lambda$ 严格成立 → 残余反光呈紫红色。

### ④ 牛顿环 $\lambda=\dfrac{r_k^2}{k\,R}$

1. **设置：** 微凸透镜（曲率半径 $R$）放在平玻璃板上，中间是向外渐厚的**空气层**（厚度 $d(r)$）。单色光垂直照射，观察**反射**光。
2. **空气层厚度的几何（小角近似，点明）：** 透镜下表面是半径 $R$ 的球面。半径 $r$ 处，由**射影定理**（圆中直角三角形：弦半长的平方＝两段直径之积）：
   $$r^2=d\,(2R-d)$$
   因 $d\ll R$（μm 级 vs. m 级），略去 $d^2$ 项：
   $$r^2\approx 2Rd\quad\Longrightarrow\quad d\approx\frac{r^2}{2R}$$
3. **相位情况：** 跃变只发生在**下**界面（空气 → 玻璃，向光密）；上界面（玻璃 → 空气）不跃变。一个 $\pi$ 跃变＝额外半个波长 → 条件**反转**：几何程差 $2d$ 为**整数**倍 $\lambda$ 时反而**相消**（暗环），中心 $d=0$ 是暗点。
4. **反射光暗环条件：**
   $$2d=k\lambda,\qquad k=0,1,2,\dots$$
5. **合并 2、4**（第 $k$ 个暗环半径 $r_k$）：
   $$2\cdot\frac{r_k^2}{2R}=k\lambda\quad\Longrightarrow\quad \boxed{\lambda=\frac{r_k^2}{k\,R}}$$
6. **验算：** 设 $R=10$ m，测得第 $k=4$ 个暗环 $r_4=5{,}1$ mm → $\lambda=\dfrac{(5{,}1\cdot10^{-3})^2}{4\cdot10}=\dfrac{2{,}60\cdot10^{-5}}{40}=6{,}5\cdot10^{-7}$ m $=650$ nm ✓——与 ② 中光栅测得的红光波长**一致**（讲义强调：两种独立方法互相验证）。蓝光波长更短 → 同样 $k$ 的环半径更小 → **环更密** ✓。

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $c$ | 波速（真空光速 $2{,}9979\cdot10^8$，S. 1） | m/s |
| $\lambda$ | （真空）波长 | m |
| $\lambda_n$ | 介质中的波长 $=\lambda/n$ | m |
| $f$ | 频率 | Hz＝1/s |
| $T$ | 周期 $=1/f$ | s |
| $d$（②） | 光栅常数＝相邻缝间距 | m |
| $\varphi_k$ | 第 $k$ 级极大的衍射角 | rad（°） |
| $k$ | 级数（Ordnung）$=0,1,2,\dots$ | —（无量纲） |
| $\Delta s$ | 程差／光程差 | m |
| $s,\ D$ | 屏上极大间距、光栅–屏距离 | m |
| $d$（③④） | 膜厚／空气层厚度 | m |
| $n$ | 折射率（膜 $\approx1{,}38$，玻璃 $\approx1{,}5$） | —（无量纲） |
| $R$ | 透镜曲率半径 | m |
| $r_k$ | 第 $k$ 个暗环半径 | m |

## 关联

- ①②：[[zh/themen/Optik und Wellenphaenomene/13.3#13.3 波动物理基础|主题 13 §13.3]]、[[zh/themen/Optik und Wellenphaenomene/13.5#用光栅测波长|主题 13 §13.5（光栅实验）]]
- ③④：[[zh/themen/Physikalische Naturphaenomene/6.5#6.5 薄膜干涉|主题 6 §6.5]]、[[zh/themen/Physikalische Naturphaenomene/6.5#牛顿环（Newton'sches Farbenglas）|主题 6 牛顿环]]、[[zh/themen/Optik und Wellenphaenomene/13.5#13.5a 牛顿环与薄膜干涉|主题 13 §13.5a]]
- 缝越窄光斑越宽 ↔ 不确定性原理：[[zh/themen/Quantenphysik und Quantenoptik/|主题 9]]
- 声波同样满足 ①：[[Schallintensitaet|H16]]
