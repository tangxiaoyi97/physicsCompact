---
title: "Foucault Pendel"
order: 10
---

**目标公式：**
$$\boxed{T_\text{Dreh}=\frac{T_\text{Tag}}{\sin\varphi}}$$

**适用范围/假设：**
- 摆动平面（近似）是**惯性系**：它在空间中保持方向不变，转动的是其下方的地球（讲义口径，主题 8 §8.3）。
- 摆悬挂理想（万向、无强迫），摆长足够长、观察时间足够长，方能显出效应。
- **论证级别**：本推导用**角速度矢量分量**论证 + 两个极限自检；==完整严格的推导需要在转动参考系中引入**科里奥利力**，超出口试范围——这一点要主动声明。==

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $\omega=\dfrac{\Delta\varphi}{\Delta t}=2\pi f$ | Winkelgeschwindigkeit | ✅ S. 2 („Winkelgeschwindigkeit") |
| $f=\dfrac{1}{T}$ | Frequenz | ✅ S. 2 („Frequenz") |
| $\Omega_\perp=\Omega\sin\varphi$ | 矢量分量分解 | ❌ 数学（直角三角形分量），不在 Formelnheft——考场需自己画图写出 |
| $T_\text{Dreh}=\dfrac{T_\text{Tag}}{\sin\varphi}$ | Foucault-Drehperiode | ❌ 不在 Formelnheft——即本推导的结论 |

## 推导（Schritt für Schritt）

1. **写出地球自转的角速度矢量 $\vec\Omega$**（地球是一个转动系统：$\vec\Omega$ 沿**自转轴**方向（指向北天极），大小由「一天转一圈」给出，用 S. 2 的 $\omega=2\pi f$、$f=1/T$）：
   $$\Omega=\frac{2\pi}{T_\text{Tag}}$$
2. **在纬度 $\varphi$ 处把 $\vec\Omega$ 分解到当地坐标**（几何：当地**竖直方向**（铅垂线）与自转轴的夹角为 $90°-\varphi$——等价地说，自转轴在当地地平线上的「高度角」恰等于纬度 $\varphi$（北极星高度=纬度）。按直角三角形分量）：
   $$\Omega_\perp=\Omega\cos(90°-\varphi)=\Omega\,\sin\varphi\quad\text{（竖直分量）},\qquad \Omega_\parallel=\Omega\,\cos\varphi\quad\text{（水平分量，指北）}$$
3. **论证：只有竖直分量 $\Omega_\perp$ 转动摆面**（物理核心步骤）：
   - 摆动平面在空间中方向不变（惯性系）；「摆面旋转」指**地面**在它下面转走。
   - 绕**当地竖直轴**的转动（即 $\Omega_\perp$）恰好把地面上的**水平方向**（北、东……）绕铅垂线转动——这正是摆面相对地面「转圈」的那种转动。
   - 绕**水平轴**的转动（即 $\Omega_\parallel$）只是把当地的铅垂线方向「搬运」着改变（随地球转动，当地「上下」的指向在空间中缓慢变化）；摆轴被重力与悬挂强制跟随铅垂线，==它改变的是**摆轴的方向**，不使摆面绕铅垂线旋转==。
   - 故摆面相对地面的有效旋转角速度只有：
   $$\Omega_\text{Dreh}=\Omega_\perp=\Omega\,\sin\varphi$$
4. **由角速度回到周期**（再次用 $T=2\pi/\omega$，对 $\Omega_\text{Dreh}$）：
   $$T_\text{Dreh}=\frac{2\pi}{\Omega_\text{Dreh}}=\frac{2\pi}{\Omega\sin\varphi}=\frac{2\pi}{\frac{2\pi}{T_\text{Tag}}\sin\varphi}\;\Longrightarrow\;\boxed{T_\text{Dreh}=\frac{T_\text{Tag}}{\sin\varphi}}$$
5. **两个极限自检**（检验分量论证是否给出物理上必然的结果）：
   - **极点** $\varphi=90°$：$\sin 90°=1\Rightarrow T_\text{Dreh}=T_\text{Tag}$。必然如此：在极点，自转轴就是当地竖直轴，地球恰好整个在摆下方转过——摆面一天相对地面转一整圈。✓
   - **赤道** $\varphi=0°$：$\sin 0°=0\Rightarrow T_\text{Dreh}\to\infty$。必然如此：赤道上自转轴完全水平（$\Omega_\perp=0$），地面不绕铅垂线转——摆面**根本不转**。✓
6. **声明论证级别**（口试加分点）：分量论证给出正确结果，但「水平分量不转摆面」处是**合理性论证**而非严格证明；==严格做法是在随地球转动的参考系中写出**科里奥利力**对摆的作用并求平均——超出口试范围==，结论相同。

### 算例（老师口径 ★）

- **维也纳** $\varphi\approx48°$：$\sin 48°=0{,}743$
  $$T_\text{Dreh}=\frac{24\ \text{h}}{0{,}743}\approx 32{,}3\ \text{h}\approx 32\ \text{h}\ \checkmark$$
- **极点（南极/北极）**：$T_\text{Dreh}=T_\text{Tag}=24\ \text{h}$（老师口径）。
- **严格口径**：$T_\text{Tag}$ 应取**恒星日**（地球相对恒星转一整圈）$\approx23$ h 56 min $=23{,}93$ h——则极点 $23$ h 56 min、维也纳 $\frac{23{,}93}{0{,}743}\approx32{,}2$ h。口试先答 24 h/32 h，再主动补「严格说是恒星日」。

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $T_\text{Dreh}$ | 摆动平面相对地面转一整圈的周期 | s（习惯用 h） |
| $T_\text{Tag}$ | 地球自转周期：老师口径 24 h；严格为恒星日 ≈ 23 h 56 min | s（习惯用 h） |
| $\varphi$ | 当地**地理纬度** | rad（习惯用 °） |
| $\vec\Omega,\ \Omega$ | 地球自转角速度矢量及其大小（$\Omega=2\pi/T_\text{Tag}\approx7{,}3\cdot10^{-5}$ rad/s） | rad/s |
| $\Omega_\perp$ | $\vec\Omega$ 沿当地**竖直**方向的分量 $=\Omega\sin\varphi$ | rad/s |
| $\Omega_\parallel$ | $\vec\Omega$ 沿当地**水平**（指北）方向的分量 $=\Omega\cos\varphi$ | rad/s |
| $\Omega_\text{Dreh}$ | 摆面相对地面的有效旋转角速度 | rad/s |
| $f$ | 频率 | Hz = 1/s |

## 关联

- [[zh/themen/Klassische Mechanik/8.3#第一定律——惯性定律|主题 8 §8.3]]——讲义口径：摆面为惯性系、维也纳 32 h、南极 24 h 真题追问、「没有完美惯性系，因为引力无处不在」。
- [[Kepler III|H07]]——同样以 $\omega=2\pi/T$ 为枢纽的「周期↔角速度」换算。
- 摆的**摆动周期**（另一回事！）$T=2\pi\sqrt{l/g}$ 在 Formelnheft S. 3（„Fadenpendel")——勿与本文的**旋转周期** $T_\text{Dreh}$ 混淆。
