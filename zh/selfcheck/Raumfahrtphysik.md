---
title: "Raumfahrtphysik"
order: 2
---

按 Prof. Linhart 真实出卷风格的三套 Zettel（Zettel 1 为旁听证实的真题 ★）+ 考官追问链 + 答案钥匙——内容锚点以 [[zh/themen/Raumfahrtphysik/|讲义主题 2]] 为准。口试约 10 分钟，先在纸上写推导与数字，再围绕卷面讨论。

## Zettel 1 — 地球同步卫星 ★（真题卷）

> **范式定位：** *„Im Paradigma der klassischen Mechanik genügt ein einziger Gedanke für die ganze Raumfahrt: Die Gravitation liefert die Zentripetalkraft."*

1. ★ **Erkläre：** 卫星（Satellit）的意义与**应用**——举出至少四类（电视、电信、气象、侦察/导航……）。
2. ★ **物理定律：** **地球同步卫星（geostationärer Satellit）**背后的物理定律是什么？写出 ansatz（$F_{ZP} = F_G$），**解释其中每一个物理量**，并说出同步卫星的**三个条件**。
3. ★ **Ableitung durchführen：** 从 $F_{ZP} = F_G$ 出发，推导**轨道半径** $r = \sqrt[3]{\dfrac{GMT^2}{4\pi^2}}$。
4. ★ **单位换算 + Rechenbeispiel：** $T$ 要用什么单位？代入数字计算 $r$（$M_E = 5{,}974\cdot10^{24}$ kg，$T \approx 86\,400$ s），并求离地面的**高度**。
5. ★ **Alltagsbeispiel 收尾：** 你家屋顶的**卫星天线锅（Satellitenschüssel）**朝哪个方向？为什么？（北半球）

## Zettel 2 — 圆轨道与 ISS

> **范式定位：** *„Im Paradigma der klassischen Mechanik fällt ein Satellit ständig — er verfehlt nur immerzu den Boden."*

1. **Erkläre：** 引力一直作用在卫星上，它为什么不掉下来？（牛顿山顶思想实验）
2. **Ableitung durchführen：** 推导圆轨道速度 $v = \sqrt{\dfrac{GM}{r}}$。**卫星质量**为什么不出现在结果里？
3. **追问（轶事）：** 1957 年 Sputnik 之后，**艾森豪威尔总统**问顾问：已知高度与轨道速度，能算出卫星**质量**吗？
4. **Rechenbeispiel：** 计算 **ISS**（$h = 400$ km，$R_E = 6370$ km）的轨道速度与周期。$r$ 代什么——常见错误是什么？
5. **概念：** 什么是**第一宇宙速度（erste kosmische Geschwindigkeit）**？为什么 ISS 比它稍慢？
6. **误区弯钩：** ISS 上的宇航员「失重」——那里没有引力吗？（提示：400 km 高度引力仍约 89%）

## Zettel 3 — 逃逸速度与轨道形状

> **范式定位：** *„Im Paradigma der klassischen Mechanik entscheidet allein die Gesamtenergie, ob ein Körper gebunden bleibt oder entkommt."*

1. **Erkläre：** 精确定义**逃逸速度（Fluchtgeschwindigkeit）**——「无穷远处」发生什么？
2. **Ableitung durchführen：** 用**能量守恒**推导 $v_F = \sqrt{\dfrac{2GM}{r}}$。
3. **Rechenbeispiel：** 计算地球与月球的 $v_F$（月球：$M = 7{,}35\cdot10^{22}$ kg，$r = 1{,}74\cdot10^6$ m）。
4. **关系：** $v_F$ 与同高度圆轨道速度是什么关系？为什么恰好是 $\sqrt2$？
5. **总能量三分类：** $E_\text{ges} = \dfrac{mv^2}{2} - \dfrac{GMm}{r}$ 的**正负**如何决定轨道是椭圆、抛物线还是双曲线？
6. **弯钩（通往主题 11）：** 若某天体表面 $v_F > c_0$ 会怎样？由此写出**史瓦西半径**。另：为什么发射场都靠近赤道、向**东**发射？

## 考官追问链 / Nachfragen-Kette

1. ★ *„Wohin zeigt Ihre Satellitenschüssel zu Hause — und warum?"*
2. *„Warum ein Sterntag und nicht 24 Stunden?"*
3. *„Sie haben T in Stunden eingesetzt — was geht da schief?"*
4. *„Kann ein Satellit über Wien stehen bleiben?"*
5. *„Eisenhowers Frage: Höhe und Geschwindigkeit bekannt — Masse berechenbar?"*
6. *„Auf der ISS schweben die Astronauten — gibt es dort keine Gravitation?"*
7. *„Je höher die Bahn — schneller oder langsamer?"*
8. *„Warum genau $\sqrt2$?"*
9. *„Die Reibung bremst den Satelliten — warum wird er dann schneller?"*
10. *„Was passiert, wenn $v_F$ größer als die Lichtgeschwindigkeit wird?"*
11. *„Warum startet man Raketen nach Osten?"*
12. *„Was bedeutet eine negative Gesamtenergie?"*

## §§ANTWORTEN

### Zettel 1

1. **应用**：卫星电视、电信、气象卫星、侦察卫星；再加导航（GPS）、地球观测。意义：全球通信与观测的基础设施——同步卫星「挂」在天上不动，天线不必跟踪。→ [[zh/themen/Raumfahrtphysik/2.3#2.3 地球同步卫星|讲义 §2.3]]
2. **定律**：引力提供向心力，==$F_{ZP} = F_G$==，即 $\dfrac{mv^2}{r} = G\dfrac{Mm}{r^2}$。物理量：$m$…卫星质量（kg，会约掉）、$M$…地球质量（kg）、$G$…引力常数（$6{,}674\cdot10^{-11}$ N·m²/kg²）、$r$…**从地心算起**的轨道半径（m）、$v$…轨道速度（m/s）。**三个条件**：周期 = **一个恒星日（Sterntag）**；轨道在**赤道上空**；与地球**自转同向**。→ [[zh/themen/Raumfahrtphysik/2.3#2.3 地球同步卫星|讲义 §2.3]]
3. 由 $v^2 = \dfrac{GM}{r}$（约掉 $m$ 后），代 $v = \omega r$：$\omega^2 r^2 = \dfrac{GM}{r}$ → $\omega^2 r^3 = GM$；代 $\omega = \dfrac{2\pi}{T}$：$\dfrac{4\pi^2}{T^2} r^3 = GM$ → $r^3 = \dfrac{GMT^2}{4\pi^2}$ → $\boxed{r = \sqrt[3]{\dfrac{GMT^2}{4\pi^2}}}$。→ [[zh/themen/Raumfahrtphysik/2.3#2.3 地球同步卫星|讲义 §2.3 推导]]
4. ==$T$ 必须换算成**秒**==：$T = 24\cdot3600 = 86\,400$ s（精确恒星日 86 164 s 只差约 80 km）。代入：$$r = \sqrt[3]{\frac{6{,}674\cdot10^{-11}\cdot5{,}974\cdot10^{24}\cdot86\,400^2}{4\pi^2}} = \sqrt[3]{\frac{3{,}99\cdot10^{14}\cdot7{,}46\cdot10^{9}}{39{,}48}} = \sqrt[3]{7{,}54\cdot10^{22}} \approx 4{,}22\cdot10^{7}\ \text{m} \approx 42\,200\ \text{km}$$（验算：$(4{,}22\cdot10^7)^3 = 7{,}52\cdot10^{22}$ ✓）高度：$h = r - R_E \approx 42\,200 - 6370 \approx 35\,800$ km。顺带：$v = \dfrac{2\pi r}{T} \approx 3{,}1$ km/s。
5. ★ ==朝**南**==——同步卫星只能在**赤道上空**，从北半球（奥地利约北纬 48°）看，赤道方向就是正南，所以天线锅固定朝南、且不必转动。德语关键句：==„Auf der Nordhalbkugel zeigt die Schüssel nach Süden — zum Satelliten über dem Äquator."== → [[zh/themen/Raumfahrtphysik/2.3#2.3 地球同步卫星|讲义 §2.3]]

### Zettel 2

1. 卫星其实**一直在下落**，只是横向速度太快，地球表面在它下方**以同样速度弯曲离开**——它永远「错过」地面（牛顿山顶大炮，见 [[zh/themen/Gravitationsphysik/11.1#牛顿的山顶思想实验|主题 11 §11.1]]）。→ [[zh/themen/Raumfahrtphysik/2.2#2.2 圆轨道卫星|讲义 §2.2]]
2. $\dfrac{mv^2}{r} = G\dfrac{Mm}{r^2}$ → 两边约掉 $m$ → $v^2 = \dfrac{GM}{r}$ → $\boxed{v = \sqrt{GM/r}}$。卫星质量在**等式两边**出现、被约掉——同一轨道上羽毛和卡车速度**相同**。
3. **不能**——正因 $m$ 被约掉，==轨道数据里不含任何质量信息==；质量只能通过**相互作用**（如碰撞 + 动量守恒）测定。→ [[zh/themen/Raumfahrtphysik/2.2#2.2 圆轨道卫星|讲义 §2.2]]
4. $r = R_E + h = 6370 + 400 = 6770$ km $= 6{,}77\cdot10^6$ m（常见错误：只代飞行高度 $h$！）。$$v = \sqrt{\frac{6{,}674\cdot10^{-11}\cdot5{,}974\cdot10^{24}}{6{,}77\cdot10^6}} = \sqrt{5{,}89\cdot10^7} \approx 7670\ \text{m/s} \approx 7{,}7\ \text{km/s}$$ $$T = \frac{2\pi r}{v} = \frac{2\pi\cdot6{,}77\cdot10^6}{7670} \approx 5546\ \text{s} \approx 92\ \text{min}$$（验算：$7670^2 = 5{,}88\cdot10^7$ ✓）每天约绕 16 圈。
5. **第一宇宙速度**：贴近地面圆轨道（$r = R_E$）所需的速度 $\approx 7{,}9$ km/s——绕地圆周运动的**最小**速度。ISS 高 400 km，$r$ 更大 → $v$ 略小（7,7 km/s）：「轨道越高越慢」。
6. **有引力**——400 km 处仍约为地表的 $89\%$（$(6370/6770)^2$）。==失重是因为宇航员与空间站一起处于**自由落体（freier Fall）**==——绕行就是永远落不到地面的下落。这正是主题 11 的**等效原理**：自由落体 ≡ 失重。→ [[zh/themen/Raumfahrtphysik/2.2#2.2 圆轨道卫星|讲义 §2.2]] · [[zh/themen/Gravitationsphysik/11.5#等效原理|主题 11 §11.5]]

### Zettel 3

1. $v_F$ 是在天体表面**永远摆脱**其引力场所需的速度。精确：以恰好 $v_F$ 出发，经**无限长时间**、在**无限远处**速度恰好变为 **0**。→ [[zh/themen/Raumfahrtphysik/2.4#2.4 逃逸速度|讲义 §2.4]]
2. 出发：$E_\text{ges} = \dfrac{mv_F^2}{2}$；无穷远：动能耗尽、全部转入势能。令相等：$\dfrac{mv_F^2}{2} = mgh$ → 约掉 $m$、乘 2：$v_F^2 = 2gh$；代 $g = \dfrac{GM}{r^2}$、$h = r$：$v_F^2 = \dfrac{2GM}{r}$ → $\boxed{v_F = \sqrt{2GM/r}}$。（严谨版：令表面总能量为零，$\tfrac12 mv_F^2 - \tfrac{GMm}{r} = 0$，同样结果。）→ [[zh/themen/Raumfahrtphysik/2.4#2.4 逃逸速度|讲义 §2.4 推导]]
3. **地球**：$v_F = \sqrt{\dfrac{2\cdot6{,}674\cdot10^{-11}\cdot5{,}974\cdot10^{24}}{6{,}37\cdot10^6}} = \sqrt{1{,}25\cdot10^8} \approx 11\,200$ m/s $\approx 11{,}2$ km/s。**月球**：$v_F = \sqrt{\dfrac{2\cdot6{,}674\cdot10^{-11}\cdot7{,}35\cdot10^{22}}{1{,}74\cdot10^6}} = \sqrt{5{,}64\cdot10^6} \approx 2370$ m/s $\approx 2{,}4$ km/s。（验算：$11\,200^2 = 1{,}25\cdot10^8$ ✓；$2370^2 = 5{,}6\cdot10^6$ ✓）
4. ==$v_F = \sqrt2\cdot v_\text{圆}$==。两式并排：$v_\text{圆}^2 = \dfrac{GM}{r}$、$v_F^2 = \dfrac{2GM}{r}$——唯一区别是根号下的**因子 2**；相除即得 $\sqrt2$。
5. $E_\text{ges} < 0$ → **被束缚**（圆/椭圆，开普勒轨道）；$E_\text{ges} = 0$ → 恰好 $v = v_F$，**抛物线**；$E_\text{ges} > 0$ → 带剩余速度逃逸，**双曲线**。→ [[zh/themen/Raumfahrtphysik/2.5#2.5 由总能量决定的轨道形状|讲义 §2.5]]
6. $v_F > c_0$ → 连光都逃不出——**黑洞**。令 $v_F = c_0$：$R = \dfrac{2GM}{c_0^2}$（**史瓦西半径**，详见 [[zh/themen/Gravitationsphysik/11.7#11.7 黑洞|主题 11 §11.7]]）。**发射场**：地球自西向东自转，赤道地面速度约 $0{,}46$ km/s——向东发射把它当「免费首付」省燃料。

### 追问链速答

1. ★ ==朝**南**==——卫星在赤道上空，北半球看它在正南方向。
2. 恒星日 = 地球**相对恒星**转一整圈（23 h 56 min）；「悬停在同一地点上方」看的是真正自转，太阳日多出的 4 分钟来自绕日公转。
3. 量纲错乱——$G$ 的单位含**秒**，$T$ 必须用秒，否则 $r$ 错几个数量级。
4. 不能——轨道平面必须**过地心**；绕维也纳纬度圈的圆心在地轴上而非地心，引力给不出这种向心力（从地面看只能画「8」字）。
5. 不能——$m$ 在方程两边约掉，轨道数据不含质量信息。
6. 有（约 89%）——失重 = 与空间站一起**自由落体**。
7. **越慢**（$v = \sqrt{GM/r}$，$r$ 大则 $v$ 小）；同步轨道 3,1 km/s < ISS 7,7 km/s。
8. 根号下多一个**因子 2**：$v_F^2/v_\text{圆}^2 = 2$。
9. 摩擦减少总能量 → 轨道变低 → $r$ 小则 $v$ **大**：下落释放的势能多于摩擦消耗，盈余成动能。
10. 黑洞——事件视界处 $v_F = c_0$，由此得史瓦西半径 $R = 2GM/c_0^2$。
11. 地球自西向东转，地面自带向东速度（赤道 $\approx 0{,}46$ km/s）——免费的初速度。
12. 物体**被束缚**在势阱里（圆/椭圆轨道）——能量不够逃到无穷远。
