(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{634:function(v,_,t){"use strict";t.r(_);var p=t(15),s=Object(p.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"为什么要基准测试？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要基准测试？"}},[v._v("#")]),v._v(" 为什么要基准测试？")]),v._v(" "),t("p",[v._v("为什么基准测试很重要？业务基准测试时唯一方便有效的、可以学习系统在给定的工作负载下会发生什么的方法。")]),v._v(" "),t("p",[v._v("基准是可以观察系统在不同压力下的行为、评估系统的容量、掌握哪些是重要的变化，或则观察系统如何处理不同的数据。基准测试可以在系统实际负载之外创造一些虚构场景进行测试。基准测试可以完成以下工作，或则更多：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("验证基于系统的一些假设，确认这些假设是否符合实际情况")])]),v._v(" "),t("li",[t("p",[v._v("重现系统中的某些异常行为，以解决这些异常。")])]),v._v(" "),t("li",[t("p",[v._v("测试系统当前的运行情况")]),v._v(" "),t("p",[v._v("如果不清楚系统当前的性能，就无法确认某些优化的效果如何。也可以利用历史的基准测试结果来分析诊断一些无法预测的问题")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("模拟比当前系统更高的负载")]),v._v("，以找出系统随着压力增加而可能遇到的扩展性瓶颈")])]),v._v(" "),t("li",[t("p",[v._v("规划未来的业务增长")]),v._v(" "),t("p",[v._v("基准测试可以评估在项目未来的负载下，需要什么样的硬件，需要多大的容量的网络，以及其他相关资源。这有助于降低系统升级和重大变更的风险。")])]),v._v(" "),t("li",[t("p",[v._v("测试应用适应可变环境的能力")]),v._v(" "),t("p",[v._v("例如，通过基准测试，可以发现系统在随机的并发峰值下的性能表现，或则是不同配置的服务器之间的性能表现。基准测试也可以测试系统对不同数据分布的处理能力。")])]),v._v(" "),t("li",[t("p",[v._v("测试不同的硬件，软件和操作系统配置")]),v._v(" "),t("p",[v._v("比如")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("RAID 5 还是 RAID 10 更适合当前的系统？")])]),v._v(" "),t("li",[t("p",[v._v("如果从 ATA 硬盘升级到 SAN 存储，对于随机写性能有什么帮助？")])]),v._v(" "),t("li",[t("p",[v._v("Linux 2.4 内核比 2.6 内核可扩展性更好吗？")])]),v._v(" "),t("li",[t("p",[v._v("升级 MySQL 的版本能改善性能吗？")])]),v._v(" "),t("li",[t("p",[v._v("为当前的数据采用不同的存储引擎会有什么效果？")])])]),v._v(" "),t("p",[v._v("诸如此类问题都可以通过专门的基准测试来获得答案。")])]),v._v(" "),t("li",[t("p",[v._v("证明新采购的设备是否配置正确。")]),v._v(" "),t("p",[v._v("上述已经说过了，通过数据说话，比什么都重要。")])])]),v._v(" "),t("p",[v._v("基准是的一个主要问题在于 "),t("strong",[v._v("不是真实的压力测试")]),v._v("。基准测试施加给系统的压力相对真实压力来说，通常比较简单。真实压力是不可预期而且变化多端的，有时候情况会过于复杂难以解释。所以使用真实压力测试，可能难以从结果中分析出确切的结论。")]),v._v(" "),t("p",[v._v("基准是的压力和真实压力在哪些方面不同？有很多因素会影响基准测试。")]),v._v(" "),t("p",[v._v("如：数据量、数据和查询的分布，最重要的一点还是 "),t("strong",[v._v("基准测试通常要求尽可能快的执行完成")]),v._v("，所以经常给系统造成过大的压力。在很多案例中，我们都会调整给测试工具的最大压力，以在系统可以容忍的压力阀值内尽可能快的执行测试，这对于 "),t("strong",[v._v("确定系统的最大容量")]),v._v(" 非常有帮助。然而大部分压力测试工具不支持对压力进行复杂的控制。务必要记住，测试工具自身的局限也会影响到结果的有效性。")]),v._v(" "),t("p",[v._v("使用基准测试进行 "),t("strong",[v._v("容量规划")]),v._v(" 也要掌握技巧，不能只根据测试结果做简单的推断。")]),v._v(" "),t("p",[v._v("例如：假设想知道使用新数据库服务器后，系统能够支撑多大的业务增长。首先对源系统进行基准测试，然后对新系统做测试，结果发现新系统可以支持原系统 40 倍的 TPS（每秒事物数），这时候就不能简单的推断说新系统一定可以支持 40 倍的业务增长。这是因为在业务增长的同时，系统的流量、用户、数据以及不同数据之间的交互都在增长，他们不可能都有 40 倍的支撑能力，尤其是相互之间的关系。而且当业务增长到 40 倍时，应用本身的设计也可能已经随之改变。可能有更多的新特性会上线，其中某些特性可能对数据库造成的压力远大于原有功能。而这些压力、数据、关系和特性的变化都很难模拟，所以他们对系统的影响也很难评估。笔者总结：至少在当下，是新系统是比旧系统提升高很多。")]),v._v(" "),t("p",[t("strong",[v._v("结论就是：")]),v._v(" 我们只能进行大概的测试，来确定系统大致的余量有多少。当然也可以做一些真实压力测试（和基准测试有区别），但在构造数据集和压力的时候要特别小心，而且这样就不再是基准测试了。"),t("strong",[v._v("基准测试要尽量简单直接")]),v._v("，结果之间容易相互比较，成本低且易于执行。尽管有诸多限制，基准测试还是非常有用的（只要搞清楚测试的原理，并且了解如何分析结果所代表的意义）。")]),v._v(" "),t("h2",{attrs:{id:"笔者总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#笔者总结"}},[v._v("#")]),v._v(" 笔者总结")]),v._v(" "),t("p",[v._v("简单说：真实压力测试充满不稳定性和预估性，很难进行分析。而使用基准测试能在相同的条件下，对某项存疑进行验证。所以："),t("strong",[v._v("基准测试要尽量简单直接")]),v._v("，结果之间容易相互比较，成本低且易于执行；")])])}),[],!1,null,null,null);_.default=s.exports}}]);