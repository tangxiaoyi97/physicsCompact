---
title: "Zentripetalkraft"
order: 4
---

**目标公式：**
$$a_Z = \frac{v^2}{r} = \omega^2 r, \qquad F_Z = \frac{m v^2}{r} = m\,\omega^2 r$$

**适用范围/假设：** **匀速圆周运动**（速率 $v = \text{konst.}$，半径 $r = \text{konst.}$）；只有速度的**方向**改变，大小不变；几何推导在 $\Delta t \to 0$ 的**极限**下严格成立。

## 用到的公式

| 公式 | 名称 | Formelnheft |
| :-- | :-- | :-- |
| $\bar a = \dfrac{\Delta v}{\Delta t}$ | Durchschnittsbeschleunigung（平均加速度——加速度是速度**矢量**的变化率） | ✅ S. 2 („Durchschnittsbeschleunigung") |
| $F = m \cdot a$ | Newton'sches Axiom (Aktionsprinzip) | ✅ S. 2 („Newton'sches Axiom") |
| $v = \omega \cdot r$ | Bahngeschwindigkeit（轨道速度；册中矢量式 $\vec v = \vec\omega \times \vec r$） | ✅ S. 2 („Bahngeschwindigkeit") |
| $\omega = \dfrac{\Delta\varphi}{\Delta t} = 2\pi f$ | Winkelgeschwindigkeit（角速度） | ✅ S. 2 („Winkelgeschwindigkeit") |
| $a_Z = \omega^2 r = \dfrac{v^2}{r}$ | Zentripetalbeschleunigung——目标公式本身在册 | ✅ S. 2 („Zentripetalbeschleunigung") |
| $F_Z = m \omega^2 r = \dfrac{m v^2}{r}$ | Zentripetalkraft——目标公式本身在册 | ✅ S. 2 („Zentripetalkraft") |
| $W = \vec F \cdot \vec s = F s \cos\alpha$ | Arbeit（功）——用于「不做功」论证 | ✅ S. 2 („Arbeit") |
| 相似三角形论证 $\dfrac{\Delta v}{v} = \dfrac{\Delta s}{r}$ | 几何推导核心 | ❌ 不在 Formelnheft——考场需现场画图推出 |

## 推导（Schritt für Schritt）

### A）为什么圆周运动**有**加速度（前提澄清）

1. 速度是**矢量**：有大小（速率）**和**方向。
2. 圆轨道上 $\vec v$ 的**方向不断改变**（始终沿切向），即便速率不变。
3. 加速度的定义是**速度矢量**的变化率（$\bar a = \Delta \vec v / \Delta t$）——方向的改变就已经是加速度。所以匀速圆周运动是**加速运动**，需要力来维持。

### B）几何推导 $a_Z = \dfrac{v^2}{r}$（相似三角形）

1. **取两个邻近时刻。** 物体在相隔小时间 $\Delta t$ 的时刻经过圆上两点 $P_1$、$P_2$。这段时间走过的弧长为 $v \cdot \Delta t$；记两点间**弦长**为 $\Delta s$。**近似说明：** $\Delta t$ 很小时弦 ≈ 弧，即 $\Delta s \approx v\,\Delta t$（此近似在最后取极限时变为严格相等）。
2. **画两个三角形。**
   - **位置三角形：** 由两条半径 $r$（指向 $P_1$、$P_2$）和弦 $\Delta s$ 组成——等腰，顶角为 $\Delta\varphi$。
   - **速度三角形：** 把 $\vec v_1$、$\vec v_2$ 平移到同一起点，连接矢端得 $\Delta \vec v = \vec v_2 - \vec v_1$——同样等腰（两腰都是 $|\vec v| = v$，速率不变）。因为速度始终**垂直于**半径（切向），$\vec v$ 转过的角度与半径转过的角度**相同**，顶角同为 $\Delta\varphi$。
3. **用相似性。** 两个等腰三角形顶角相等 ⇒ **相似** ⇒ 对应边成比例（底边比腰）：
   $$\frac{\Delta v}{v} = \frac{\Delta s}{r}$$
4. **解出 $\Delta v$**（两边乘 $v$）并代入 $\Delta s \approx v\,\Delta t$：
   $$\Delta v = \frac{v}{r}\,\Delta s \approx \frac{v}{r} \cdot v\,\Delta t = \frac{v^2}{r}\,\Delta t$$
5. **回到加速度定义**（S. 2）并**取极限**。$a = \dfrac{\Delta v}{\Delta t} \approx \dfrac{v^2}{r}$。**此处取极限 $\Delta t \to 0$**，因为：① 弦→弧使第 1 步的近似变为相等；② $\Delta \vec v$ 的方向趋于**垂直于 $\vec v$、指向圆心**（等腰三角形顶角 $\to 0$ 时底边与腰垂直）。于是
   $$\boxed{a_Z = \frac{v^2}{r}}\quad\text{（方向：指向圆心，故称「向心」加速度）}$$

### C）ω 法（与 Formelnheft 两种写法互推）

1. **角速度与轨道速度的关系**（S. 2）：转过角 $\Delta\varphi$ 时走过弧 $\Delta s = r\,\Delta\varphi$（弧度制下弧长定义），两边除以 $\Delta t$：
   $$v = \omega \cdot r$$
2. **代入 B 的结果**（把 $v = \omega r$ 代入 $a_Z = v^2/r$）：
   $$a_Z = \frac{(\omega r)^2}{r} = \frac{\omega^2 r^2}{r} = \omega^2 r$$
   （约掉一个 $r$——纯代数。）反向亦然：从 $a_Z = \omega^2 r$ 代 $\omega = v/r$ 立刻回到 $v^2/r$。两种写法等价：
   $$\boxed{a_Z = \omega^2 r = \frac{v^2}{r}}$$

### D）向心力 $F_Z = \dfrac{m v^2}{r}$

1. **牛顿第二定律**（S. 2）：加速度必须由力产生，$F = m \cdot a$。
2. **代入 $a = a_Z$：**
   $$\boxed{F_Z = m \cdot \frac{v^2}{r} = m\,\omega^2 r}\quad\text{（方向：与 } a_Z \text{ 相同，指向圆心）}$$
3. **概念提醒：** 向心力**不是一种独立的自然力**，而是一个**角色**，由现成的力担当——卫星：引力；链球：绳张力；原子中电子：库仑力。（离心力则是转动参考系中的**假想力**。）

### E）向心力不做功（$\vec F \perp \vec v$）

1. **功的定义**（S. 2）：$W = F \cdot s \cdot \cos\alpha$，$\alpha$ 为力与位移的夹角。
2. **几何事实：** 向心力指向圆心，瞬时位移沿切向 ⇒ $\alpha = 90°$，$\cos 90° = 0$。
3. **结论：**
   $$W = F_Z \cdot s \cdot \cos 90° = 0$$
   所以向心力**只改变速度的方向、不改变其大小**——这与「匀速圆周运动速率不变」自洽：不做功 ⇒ 动能不变 ⇒ $v$ 不变。

## 变量表

| 符号 | 含义 | SI 单位 |
| :-- | :-- | :-- |
| $a_Z$ | 向心加速度（指向圆心） | m/s² |
| $F_Z$ | 向心力（指向圆心） | N |
| $m$ | 绕行物体的质量 | kg |
| $v$ | 轨道速度（切向，速率恒定） | m/s |
| $r$ | 轨道半径 | m |
| $\omega$ | 角速度（$360° = 2\pi$ rad） | rad/s |
| $\Delta\varphi$ | 小时间内转过的角 | rad |
| $\Delta s$ | $P_1 P_2$ 间弦长（极限下 = 弧长） | m |
| $\Delta \vec v$，$\Delta v$ | 速度矢量差及其大小 | m/s |
| $\Delta t$ | 小时间间隔（取极限 $\to 0$） | s |
| $f$ | 频率（$\omega = 2\pi f$ 中出现） | Hz |
| $W$ | 功（此处 $= 0$） | J |
| $\alpha$ | 力与位移的夹角（此处 $90°$） | °（或 rad） |

## 关联

- 向心力由**引力**担当 ⇒ 卫星轨道 → [[Satellit Kreisbahn|H05]]
- 「$\vec F \perp \vec v$ 不做功」依据功的定义 → [[Arbeit Energie|H02]]
- 讲义出处：[[zh/themen/Klassische Mechanik/8.7#8.7 圆周运动与向心力|主题 8 §8.7]]（向心力概念、$F_Z = mv^2/r$、假想力讨论）、[[zh/themen/Raumfahrtphysik/2.1#2.1 预备：什么是向心力？|主题 2 §2.1]]（同一预备）、[[zh/themen/Bewegungen/5.1#加速度|主题 5 §5.1]]（加速度 = 速度矢量的变化）
