---
title: "Elektrodynamik"
order: 14
---

按老师真实出卷风格的三张模拟卷（Zettel 1/2/3）+ 考官追问链；全部考点、术语、数字与锚点以 [[zh/themen/Elektrodynamik/|讲义：主题 14]] 为准。口试节奏：约 10 分钟陈述 + 讨论。★ = 已在历年真题录音中证实出现过的素材。

## Zettel 1 — 电学史与电荷（Geschichte & Ladung）

> **范式定位：**„Im Paradigma der klassischen Elektrodynamik ist die elektrische Ladung eine erhaltene, quantisierte Eigenschaft der Materie, und die Kraft zwischen Ladungen folgt dem Coulomb-Gesetz."（在经典电动力学范式中，电荷是物质的一种守恒、量子化的属性，电荷间的力遵循库仑定律。）

1. **时间线（Erkläre）：**从古代的**琥珀（Bernstein，希腊语 *elektron*）与磁石**讲到今天：~1650 静电起电机 → 1752 Franklin → 1780 **Galvani** → 1800 **Volta** → 1820 **Ørsted** → 1831 **Faraday** → 1864 **Maxwell** → 1888 Hertz → 1901 Marconi → QED。谁**统一**了什么？**轶事追问：**蛙腿之争——Galvani 和 Volta 谁解释对了？**早期浪漫主义（Frühromantik）**与 Ørsted 的发现有什么关系（老师专门强调）？
2. **电荷量子化：**写出 $Q=n\cdot e$、$e=1{,}6\cdot10^{-19}$ C。「量子化」直观上什么意思（分钱币比喻）？为什么定义里要加「最小**可直接测量**电荷」（关键词：夸克 $\pm\tfrac13 e$、[[zh/themen/Elementarteilchenphysik/10.4#10.4 四种基本相互作用|Confinement]]）？陈述**电荷守恒定律**并用 β⁻ 衰变配平验证。
3. **实验：**Millikan 油滴实验**三阶段**（悬浮 → 下沉 → 分析）各做什么、各得到什么？为什么在**真空**里做不了？
4. **Rechenbeispiel + 单位换算：**摩擦过的气球带 $Q=-10^{-9}$ C——它多了**多少个电子**？再从 $U=E/Q$ 推出 $1\,\text{eV}=1{,}6\cdot10^{-19}$ J，并说明 eV 是什么单位、**不是**什么单位。
5. **Rechenbeispiel（课堂例题）：**氢原子中电子与质子的库仑吸引力：$r=10^{-10}$ m、$|Q_1|=|Q_2|=e$。算出 $F_C$，再与同两粒子间的**引力**（$\sim10^{-47}$ N）比较——差多少个数量级？顺带：库仑定律与万有引力定律**结构上**同在哪、**物理上**不同在哪？为什么分母是 $r^2$？
6. **哲学弯钩：**技术电流方向（+ → −）明知是「错」的，**为什么还沿用**？这个错误当初怎么来的（电流体模型、莱顿瓶、1897 电子）？——讨论：**Konvention vs. Natur**——一个约定到底能不能「错」？

## Zettel 2 — 电路三大量与欧姆定律（Grundgrößen & Ohm）

> **范式定位：**„Im Paradigma der klassischen Elektrodynamik ist Strom die geordnete Bewegung von Leitungselektronen, und das Ohm'sche Gesetz beschreibt den Zusammenhang von Spannung, Strom und Widerstand."（电流是传导电子的有序运动，欧姆定律描述 U、I、R 的关系。）

1. **定义四个量（Erkläre）：**$I=Q/t$、$U=E/Q$、$R=U/I$、$P=U\cdot I$，各带单位。**水压类比**：电压像水压（每份电荷的能量/推力）、电流像流量、电阻像管道的阻碍——类比的边界在哪？推导 $P=\dfrac{E}{t}=\dfrac{E}{Q}\cdot\dfrac{Q}{t}=U\cdot I$。
2. **实验（Schulexperiment）：**描述欧姆定律的**特性曲线（Kennlinie）**实验：装置（安培计串联、伏特计并联——**为什么**这样接？）、操作、$U$-$I$ 图。欧姆定律的**真正论断**是什么（$R$ 恒定 → 过原点直线，斜率 = $R$）？
3. **微观图像 + Ableitung：**金属为何导电（Elektronengas 电子气、Atomrümpfe 原子实）？逐项论证 $R=\varrho\cdot\dfrac{l}{A}$ 的每个依赖（长 ⇒ 大、粗 ⇒ 小、热 ⇒ 大、材料 ⇒ $\varrho$）。**Rechenbeispiel：**铜缆 $l=100$ m、$d=1$ mm、$\varrho_\text{Cu}=1{,}7\cdot10^{-8}\ \Omega$m → $R=?$
4. **Rechenbeispiel（家用电网 230 V）：**2000 W 吹风机的 $I$ 和 $R$？60 W 灯泡呢？由此回答悖论：**为什么大功率电器电阻反而小**？
5. **实验（灯泡冷热）：**同一只灯泡，工作中测得 $U=2{,}57$ V、$I=0{,}3$ A，冷态欧姆计示 $1{,}3\ \Omega$。算热电阻、冷热比，解释机制（原子实振动）、**开机电流**后果，并说明灯泡为什么是**非欧姆（nicht-ohmsch）**用电器。
6. **哲学弯钩：**„Ist das Ohm'sche Gesetz ein **Naturgesetz** oder eine **Materialeigenschaft**?"（欧姆定律是自然定律还是材料属性？）——区分**定义** $R=U/I$（永远成立）与**定律**「$R$ 恒定」（只对部分材料、部分范围成立：灯泡、超导体是例外）。一个有例外的「定律」还算定律吗？→ **Geltungsbereich**。

## Zettel 3 — 超导与用电安全（Supraleitung & Stromsicherheit）

> **范式定位：**„Im Paradigma der klassischen Elektrodynamik hat jeder Leiter einen Widerstand — die Supraleitung sprengt dieses Paradigma: unterhalb von $T_c$ ist $R$ exakt null."（经典范式中导体皆有电阻——超导打破了它：$T_c$ 以下 $R$ 严格为零。）

1. **Erkläre 超导：**跃迁温度 $T_c$ 以下发生什么？为什么 $R=0$ 是**严格为零**而非「很小」（电子结**对**、无阻碍穿过晶格）？为什么说它是**最彻底的欧姆定律例外**？超导环里的电流能流多久？
2. **实验演示 + 概念区分：**磁体**悬浮**在超导体上方——这是 **Meißner-Ochsenfeld 效应**。它与「只是 $R=0$ 的**理想导体**」有何区别（先后顺序/历史依赖 vs. **主动排出**磁场）？为什么这证明超导是**新物态（neuer Materiezustand）**？应用：磁悬浮列车。
3. **冷却问题（逐步）：**经典金属超导体（Hg、Pb、Nb）的 $T_c$ 多大、要用什么冷却、贵在哪？**YBCO** 陶瓷高温超导体的 $T_c$ 多大？**为什么液氮（77 K $=-196$ °C）就够了**（条件 $T_\text{冷却}<T_c$）？列举应用——其中哪个把你带回主题 10（★ CERN/LHC 超导磁体）？
4. **用电安全 + Rechenbeispiel：**为什么危险的是**电流**不是电压（$I=U/R_\text{Körper}$）？给出 **1 / 10 / 80 mA** 三个阈值及各自机制。**算：**230 V 下，干燥皮肤 $R\approx100$ kΩ → $I=?$；潮湿皮肤 $R\approx2$ kΩ → $I=?$ 各落在表中哪一档？
5. **课堂谜题（Rechenbeispiel）：**气球带 $10^4$ V 静电，摸它没事；230 V 插座却可能致命。用 $E=U\cdot Q$ 算：气球（$Q\sim10^{-9}$ C）的能量？课堂对比例子电池（100 V、$10^{-3}$ C）？电网还多了哪两个致命因素（**持续**驱动电流、**50 Hz** 撞上心脏易损期）？
6. **哲学/误区弯钩：**„$R=0$ — der Strom fließt ewig. **Haben wir damit ein Perpetuum mobile gebaut?**"（电阻为零、电流永流——我们造出永动机了吗？）——用**能量守恒**纠偏。

## 考官追问链 / Nachfragen-Kette

老师口吻，短促快问（每条 ≤ 1 分钟）：

1. „Warum hat man die **Leidener Flasche** ausgerechnet als *Flasche* gebaut?"（莱顿瓶为什么造成瓶子？）
2. „Der **Froschschenkel** bei Galvani — welche **zwei Rollen** spielt er in Voltas Erklärung?"
3. „Kann ein Öltröpfchen bei Millikan die Ladung **$1{,}5\,e$** tragen?"
4. „Quarks haben **Drittelladungen** — widerspricht das Millikan?"
5. „Warum hat das Amperemeter einen **winzigen**, das Voltmeter einen **riesigen** Eigenwiderstand?"
6. „Ein **Vogel** sitzt auf der Hochspannungsleitung — warum lebt er noch?"
7. „Warum brennt die Glühbirne fast immer **beim Einschalten** durch?"
8. „Warum überträgt man Strom übers Land als **Hochspannung**?"
9. „Ich kühle einen **perfekten Kupferdraht** fast auf 0 K — ist er dann ein Supraleiter?"
10. ★ „Auch der **LHC** braucht Ihre Supraleitung — wofür genau?"
11. „Warum ist Strom im **Badezimmer** besonders gefährlich?"
12. „Warum sind ausgerechnet **50 Hz** so tückisch fürs Herz?"

## §§ANTWORTEN

### Zettel 1

**A1.** 古代：琥珀（摩擦起电）与磁石——**两个分立现象**。~1650 静电起电机（第一种瞬时电源）→ 1752 Franklin 避雷针 → 1780 Galvani 蛙腿 → 1800 Volta 第一块**电池**（首个稳定电源）→ 1820 Ørsted **电流产生磁场** → 1831 Faraday **电磁感应** → 1864 **Maxwell 统一电磁学与光学**（光 = 电磁波）→ 1888 Hertz 验证电磁波 → 1901 Marconi 跨大西洋无线电（突破在**不用电缆**——海底电报缆 1866 年就有了）→ 今天 QED。**蛙腿：**Galvani 以为找到「动物电/生命本质」；**Volta 解释对了**——„**zwei verschiedene Metalle + Elektrolyt** (die Körperflüssigkeit) bilden eine **Batterie**"，第二根金属棒**闭合电路**；蛙腿同时充当**电解质**和**电流指示器**。两人皆有功：Galvani 发现、Volta 解释并利用。**Frühromantik：**反对启蒙的机械论切分，信「**Alles ist miteinander verbunden**」（万物相连）→ 自然哲学家因此去**找**电与磁的联系——Ørsted 1820 证实之：哲学世界观引出物理发现的著名例子。([[zh/themen/Elektrodynamik/14.1#14.1 电学简史|§14.1]])

**A2.** $Q=n\cdot e$，$n$ 为整数，$e=1{,}6\cdot10^{-19}$ C。量子化 = 电荷**不能任意细分**，像钱只有整分硬币：$0,\pm e,\pm2e,\dots$，**绝不会** $1{,}5\,e$——这是自然的根本属性（Millikan 证明），因为电荷绑在**整个粒子**上。「直接」是因为夸克的 $\pm\tfrac13,\pm\tfrac23\,e$：夸克因 **Confinement** 不能被孤立，分数电荷无法直接测量。**守恒律：**„In einem abgeschlossenen System bleibt die **Summe** der Ladungen konstant."（封闭系统中电荷**总和**守恒。）β⁻：$n\to p^++e^-+\bar\nu_e$，$0\to(+1)+(-1)+0=0$ ✓。([[zh/themen/Elektrodynamik/14.2#14.2 电荷与电荷守恒|§14.2]])

**A3.** ① **悬浮**：调电压使 $Q\cdot E=m\cdot g$——已知 $E,g$，未知 $m$；② **下沉**：断电，油滴匀速下沉（Stokes 阻力平衡）→ 由油密度得半径 → 得 $m$；③ **分析**：代回 $Q=mg/E$，对许多油滴重复 → 所有电荷都是 $e=1{,}6\cdot10^{-19}$ C 的**整数倍** → 电荷量子化。真空不行：**需要空气阻力**（第 2 阶段靠 Stokes 阻力测质量）。([[zh/themen/Elektrodynamik/14.2#14.2 电荷与电荷守恒|§14.2]])

**A4.** $n=\dfrac{Q}{e}=\dfrac{10^{-9}}{1{,}6\cdot10^{-19}}=6{,}25\cdot10^{9}$ → 约 **62.5 亿个电子**（验算：$6{,}25\cdot10^9\cdot1{,}6\cdot10^{-19}=10^{-9}$ C ✓）。eV：由 $U=E/Q$ 得 $E=Q\cdot U$；代 $Q=e$、$U=1$ V → $1\,\text{eV}=1{,}6\cdot10^{-19}\,\text{C}\cdot1\,\text{V}=1{,}6\cdot10^{-19}$ J。eV 是**能量**单位（原子物理用 eV、核物理用 MeV，因焦耳太大），名字带「Volt」但**不是电压**。([[zh/themen/Elektrodynamik/14.5#14.5 基本量与欧姆定律|§14.5]])

**A5.** $F_C=\dfrac{1}{4\pi\varepsilon_0}\cdot\dfrac{e^2}{r^2}=8{,}99\cdot10^9\cdot\dfrac{(1{,}6\cdot10^{-19})^2}{(10^{-10})^2}=8{,}99\cdot10^9\cdot\dfrac{2{,}56\cdot10^{-38}}{10^{-20}}\approx\mathbf{2{,}3\cdot10^{-8}\ N}$（验算：$8{,}99\cdot2{,}56\approx23{,}0$，指数 $9-38+20=-9$ → $23\cdot10^{-9}$ ✓）。与引力 $\sim10^{-47}$ N 比：强约 **39 个数量级**——正是这力把电子「拴」在核旁。**结构相同**：都 $\propto\dfrac{Q_1Q_2}{r^2}$；**不同**：库仑可吸可斥（电荷有正负），引力只吸引（质量恒正）；宏观物体整体中性 → 大尺度引力主导。**$r^2$ 缘由**：场均匀散布在球面 $4\pi r^2$ 上，距离加倍 → 面积 4 倍 → 每点只剩四分之一。([[zh/themen/Elektrodynamik/14.3#14.3 库仑定律|§14.3]])

**A6.** 约定**早于电子的发现**：当时以为电流是**流体**（「电液」），自然从「多」（+）流向「少」（−）——莱顿瓶因此造成**瓶子**。**1897 年发现电子**后才知金属中移动的是负电子（− → +）。但所有电路图/规范早已建立，且对计算**毫无影响**（负电荷向一边流 = 等量正电荷向另一边流）→ 沿用。**弯钩答法：**约定本身无所谓对错——「错」的只是它背后那张**自然图像**（流体模型）。关键句：„Die **Konvention** ist nicht falsch — falsch war das **Naturbild** dahinter. Die Natur kennt keine Vorzeichen-Konvention; sie kennt nur Elektronen."（约定不错，错的是背后的自然图像——自然不认识符号约定，只认识电子。）([[zh/themen/Elektrodynamik/14.4#14.4 导电——主要种类|§14.4]])

### Zettel 2

**B1.** $I=Q/t$（A）：单位时间通过截面的电荷；$U=E/Q$（V）：**单位电荷的能量**，是相对量（电位差），只有**差值**有意义；$R=U/I$（Ω）：能量损失/电压降的量度；$P=U\cdot I$（W）：单位时间转化的能量，推导 $P=\dfrac{E}{t}=\dfrac{E}{Q}\cdot\dfrac{Q}{t}=U\cdot I$（电子摩擦原子实 → 焦耳热：吹风机、电炉）。**水类比**：U = 水压、I = 流量、R = 管道阻碍——边界：水会「用完」，而电荷**守恒**、只是能量被卸下；电压是**相对**的，水压有绝对零点。([[zh/themen/Elektrodynamik/14.5#14.5 基本量与欧姆定律|§14.5]])

**B2.** 装置：可调直流电源 + 固定电阻（如 100 Ω）+ **安培计串联**（测**通过**的电流，自身电阻极小以免干扰）+ **伏特计并联**（测**两端**电压，自身电阻极大以免分流）。操作：设 0–15 V 若干电压、各读 $I$、记数据表。分析：$U$-$I$ 图上各点落在**过原点的直线**——**线性特性曲线** → 证实 $U\propto I$。**真正论断**：„Die eigentliche Aussage ist, dass $R$ **konstant** bleibt."（真正的论断是 $R$ 恒定。）斜率 = $R$：如 $U=10$ V、$I=0{,}1$ A → $R=100\ \Omega$ ✓。([[zh/themen/Elektrodynamik/14.5#14.5 基本量与欧姆定律|§14.5]])

**B3.** 金属凝固时原子放出最外层电子 → **电子气**在原子实晶格间自由移动；加电压 → 场对电子施力 → 整体**漂移**；„**Strom = Menge bewegter Leitungselektronen pro Zeit.**" 信号近光速传播而单个电子漂移很慢（满管之球）。$R=\varrho\,l/A$：① 越**长**电子经过越多原子实、被减速越频繁 → $R\propto l$（如两电阻串联）；② 越**粗**并行「车道」越多 → $R\propto1/A$（如并联）；③ **材料** → $\varrho$（金/铜小、铁/铅大）；④ 越**热**原子实振动越剧烈 → 碰撞越多 → $\varrho$ 随温度升高。**Rechenbeispiel：**$A=\pi(d/2)^2=\pi(0{,}5\cdot10^{-3})^2\approx7{,}85\cdot10^{-7}$ m²；$R=1{,}7\cdot10^{-8}\cdot\dfrac{100}{7{,}85\cdot10^{-7}}\approx\mathbf{2{,}2\ \Omega}$（验算：$\tfrac{100}{7{,}85\cdot10^{-7}}\approx1{,}27\cdot10^8$，$\times1{,}7\cdot10^{-8}=2{,}17$ ✓——百米铜线才 2 Ω，所以电缆用铜）。([[zh/themen/Elektrodynamik/14.6#14.6 电阻率|§14.6]])

**B4.** 吹风机：$I=P/U=2000/230\approx\mathbf{8{,}7\ A}$；$R=U/I=230/8{,}7\approx\mathbf{26{,}5\ \Omega}$（验算：$R=U^2/P=52900/2000=26{,}45$ ✓）。灯泡：$I=60/230\approx0{,}26$ A；$R=230/0{,}26\approx\mathbf{880\ \Omega}$（验算：$52900/60\approx882$ ✓）。**悖论解释**：电网电压**固定** 230 V → 大功率由 $P=UI$ 需要大电流 → 由 $R=U/I$，大电流意味着**小**电阻。==Starkes Gerät = kleiner Widerstand.==（大功率电器 = 小电阻。）([[zh/themen/Elektrodynamik/14.5#14.5 基本量与欧姆定律|§14.5]])

**B5.** 热电阻：$R=U/I=\dfrac{2{,}57}{0{,}3}\approx\mathbf{8{,}57\ \Omega}$；冷热比 $8{,}57/1{,}3\approx\mathbf{6{,}6}$ → 热时约为冷时的 6–7 倍。机制：灯丝 >2000 °C，原子实剧烈振动 → 更频繁拦住电子 → $R$ 升。**开机电流**：刚开灯时灯丝冷、$R$ 小 → $I=U/R$ 短暂很大 → 灯泡多在**开灯一刻**烧断。因 $R$ 随温度变 → **非欧姆**用电器，$U$-$I$ 特性曲线**弯曲**而非直线。([[zh/themen/Elektrodynamik/14.7#14.7 温度依赖——实验（灯泡）|§14.7]])

**B6.** 区分两层：$R=U/I$ 是**定义**——永远成立、对任何器件都能算出一个 $R$；**欧姆定律**是附加论断「此时 $R$ **保持恒定**（$U\propto I$）」——它只对一部分材料、在一定温度范围内成立（灯泡：$R$ 随温度变；超导体：$R$ 干脆为零）。所以它更像一条**材料属性陈述**（Materialeigenschaft），而非普适自然定律。**弯钩答法：**有例外不等于没价值——物理定律都带 **Geltungsbereich**。关键句：„Das Ohm'sche Gesetz ist kein fundamentales Naturgesetz, sondern eine Aussage über Materialien **in ihrem Geltungsbereich** — und genau zu wissen, *wo* ein Gesetz gilt, ist schon die halbe Physik."（欧姆定律不是基本自然定律，而是关于材料在其适用范围内的陈述——知道定律*在哪里*成立，本身就是物理的一半。）([[zh/themen/Elektrodynamik/14.5#14.5 基本量与欧姆定律|§14.5]] / [[zh/themen/Elektrodynamik/14.7#14.7 温度依赖——实验（灯泡）|§14.7]])

### Zettel 3

**C1.** $T_c$（Sprungtemperatur 跃迁温度）以下电阻**完全消失**：$R=0$ **严格为零**，不是「很小」。机制（无需完整量子理论）：常规电阻来自电子**碰撞**振动的原子实；$T_c$ 以下电子结成**对**，无阻碍穿过晶格、不再被减速。它是**最彻底的欧姆定律例外**（灯泡只是 $R$ 不恒定，这里 $R$ 干脆为零）：电流**无电压降、无热损耗**。超导环中激起的电流**几乎永远**流下去。([[zh/themen/Elektrodynamik/14.8#14.8 超导|§14.8]])

**C2.** **Meißner-Ochsenfeld 效应**：超导体把磁场**完全排出内部**（表面无损耗屏蔽电流）→ 磁体被顶开、**悬浮**——磁悬浮列车的基础。**与理想导体的区别**：理想导体（仅 $R=0$）只把磁通**冻结**——先加场再冷却 → 场被困在体内；先冷却再加场 → 进不去：结果**取决于先后顺序（历史）**。超导体则**不论顺序**，一过 $T_c$ 就**主动排出**磁场。关键句：„Der Meißner-Effekt ist ein von $R=0$ **unabhängiges zweites Kriterium** — Supraleitung ist ein echter **neuer Materiezustand**, keine bloß sehr gute Leitung."（迈斯纳效应是独立于 R=0 的第二判据——超导是真正的新物态。）([[zh/themen/Elektrodynamik/14.8#14.8 超导|§14.8]])

**C3.** 经典金属超导体（Hg、Pb、Nb）：$T_c$ 仅**几 K**（近绝对零度）→ 只有**液氦**（$\approx4$ K）能冷到，**昂贵**麻烦。**YBCO**（钇钡铜氧陶瓷，首个 $T_c$ 高于液氮温度的超导体）：$T_c>77$ K。液氮沸点 **77 K $=-196$ °C**，且**便宜得多**——条件只是 $T_\text{冷却}<T_c$，而 $77\ \text{K}<T_c$ 成立 ✓。应用：量子计算机、**MRT** 磁共振、★ **CERN/LHC**（磁体即超导磁体——把质子约束在 27 km 环上的正是它们：跨回主题 10！）、太空研究、磁悬浮列车。([[zh/themen/Elektrodynamik/14.8#14.8 超导|§14.8]])

**C4.** „Gefährlich ist nicht die **Spannung**, sondern die **Stromstärke** durch den Körper."（危险的不是电压，而是通过身体的电流。）伤害来自流动的电流（刺激神经/肌肉、加热组织）；大小由 $I=U/R_\text{Körper}$ 决定，而人体电阻不固定。阈值：**1 mA** 感知（刺麻）；**10 mA** 摆脱阈（肌肉痉挛、**松不开手**——接触持续，危险）；**80 mA** 生命危险（心脏失律 → **心室纤颤 Herzkammerflimmern**）。**算：**干燥 $I=\dfrac{230}{10^5}=\mathbf{2{,}3\ mA}$ → 刚过感知阈、尚可摆脱；潮湿 $I=\dfrac{230}{2000}=\mathbf{115\ mA}$ → 远超 80 mA → **致命区**（这正是浴室危险的原因）。（人体电阻数值为题给典型值 ✎。验算：$2{,}3\cdot10^{-3}\cdot10^5=230$ ✓；$0{,}115\cdot2000=230$ ✓）([[zh/themen/Elektrodynamik/14.9#14.9 用电安全|§14.9]])

**C5.** $E=U\cdot Q$。气球：$E=10^4\cdot10^{-9}=\mathbf{10^{-5}\ J}$——一瞬放完，只觉刺痛。电池（课堂例）：$E=100\cdot10^{-3}=\mathbf{0{,}1\ J}$——已是气球的**一万倍**（验算：$0{,}1/10^{-5}=10^4$ ✓）。电网的两个致命额外因素：① 能**持续**驱动几十 mA 流过身体数秒（正落入 80 mA 致命档）；② **50 Hz** 恰在神经/肌肉最易受刺激的频段，每秒上百次换向几乎必撞上心动周期的**易损期** → 心室纤颤。==静电「电压高」≠「危险」：关键是能维持多大电流、流多久。==([[zh/themen/Elektrodynamik/14.9#14.9 用电安全|§14.9]] / [[zh/themen/Elektrodynamik/14.10#14.10 直流电与交流电|§14.10]])

**C6.** **没有。**能量守恒原封不动：① 超导环电流不衰减是因为**不耗散**能量（无摩擦），不是**产生**能量——像无摩擦的理想陀螺，永转但不做功；② 一旦从环里**取功率**（接负载），电流就按能量守恒**减小**——取多少能量，环里就少多少；③ 维持 $T<T_c$ 的**制冷本身耗能**。永动机指「无中生有输出功」的机器——超导只是**零损耗储存/输运**，不是能量来源。关键句：„$R=0$ heißt **keine Verluste**, nicht **Energie aus dem Nichts** — der Energieerhaltungssatz gilt auch unterhalb von $T_c$."（R=0 是无损耗，不是无中生有——能量守恒在 $T_c$ 以下照样成立。）([[zh/themen/Elektrodynamik/14.8#14.8 超导|§14.8]])

### Nachfragen

**N1.** 因为当时以为电是一种**流体**（电流体模型）——液体自然要用**瓶子**装（参 A6）。
**N2.** 在 Volta 的解释中，蛙腿同时是**电解质**（导电体液，与两种金属构成电池）和**电流指示器**（抽动显示电流）（参 A1）。
**N3.** **不能。**Millikan 的结果：所有电荷都是 $e$ 的**整数倍**——$1{,}5\,e$ 从不出现，这正是量子化的证明（参 A3）。
**N4.** **不矛盾。**夸克因 Confinement **不能被孤立**，分数电荷从不**单独**出现——所以 $e$ 定义为最小**可直接测量**电荷；能自由存在的强子电荷都是整数（参 A2、[[zh/themen/Elementarteilchenphysik/10.4#10.4 四种基本相互作用|主题 10]]）。
**N5.** 安培计**串联**在电流路径里——自身电阻必须**极小**才不额外压降；伏特计**并联**——自身电阻必须**极大**才几乎不分流。仪表不能改变它要测的东西（参 B2）。
**N6.** 鸟两脚间几乎**没有电位差**（同一导线、间距小）——$U$ 是**相对量**，只有**差值**驱动电流；没有差值就几乎没有电流通过鸟身（参 B1 的「电压是相对的」）。
**N7.** 冷灯丝电阻小（1,3 Ω 对 8,6 Ω）→ 合闸瞬间 $I=U/R$ **开机电流**很大 → 灯丝最脆弱的时刻正是开灯一刻（参 B5）。
**N8.** 线路损耗 $P_\text{Verlust}=R_\text{Leitung}\cdot I^2$ 随电流**平方**增长；功率 $P=UI$ 固定时，**高电压配小电流**损耗小；交流可用**变压器**低损耗升降压 → 长途高压、入户降到 230 V（参 §14.10）。
**N9.** **不是。**再纯的铜在 0 K 附近也只是 $R$ **很小**，不是严格为零；而且它**不会主动排出磁场**（无迈斯纳效应）。超导需要 $R=0$ **且** Meißner——这是相变，不是「越冷越好」的极限（参 C2）。
**N10.** ★ LHC 的**约束磁体是超导磁体**——把质子束压在 27 km 圆轨道上需要极强磁场、且不能容忍焦耳热损耗。这是主题 14 与主题 10 的直接接口（参 C3）。
**N11.** 潮湿/出汗皮肤的 $R_\text{Körper}$ 小得多 → 同样 230 V 下电流大得多（115 mA 量级 → 致命档）（参 C4）。
**N12.** 50 Hz 恰落在**神经与肌肉细胞最易受刺激**的频段；电流每秒换向上百次，几乎必然撞上心动周期的**易损期** → 心律被扰 → **心室纤颤**。所以安全阈值以**毫安**给出、不以伏特（参 C5）。
