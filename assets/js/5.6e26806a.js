(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{520:function(s,t,n){s.exports=n.p+"assets/img/image-20200507165234295.f0ba82e9.png"},521:function(s,t,n){s.exports=n.p+"assets/img/image-20200507165314790.53b682c5.png"},522:function(s,t,n){s.exports=n.p+"assets/img/image-20200507165356497.17dedd9d.png"},523:function(s,t,n){s.exports=n.p+"assets/img/image-20200507165457413.4b9aa7ae.png"},524:function(s,t,n){s.exports=n.p+"assets/img/image-20200507171607205.9efa04fd.png"},525:function(s,t,n){s.exports=n.p+"assets/img/image-20200507171727766.90ac2b58.png"},526:function(s,t,n){s.exports=n.p+"assets/img/image-20200507172050613.84209a37.png"},527:function(s,t,n){s.exports=n.p+"assets/img/image-20200507182746584.d25de3a1.png"},528:function(s,t,n){s.exports=n.p+"assets/img/image-20200507182824646.502df27f.png"},529:function(s,t,n){s.exports=n.p+"assets/img/image-20200507182841194.5aa8af19.png"},711:function(s,t,n){"use strict";n.r(t);var a=n(15),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基准测试案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基准测试案例"}},[s._v("#")]),s._v(" 基准测试案例")]),s._v(" "),a("p",[s._v("本章使用上面提到的部分共计进行测试，告诉你怎么入门")]),s._v(" "),a("h2",{attrs:{id:"http-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-load"}},[s._v("#")]),s._v(" http_load")]),s._v(" "),a("p",[s._v("首先创建一个 urls.txt 文件，输入如下的 RUL")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://www.mysqlperformanceblog.com/\nhttp://www.mysqlperformanceblog.com/page/2/\nhttp://www.mysqlperformanceblog.com/mysql-patches/\nhttp://www.mysqlperformanceblog.com/mysql-performance-presentations/\nhttp://www.mysqlperformanceblog.com/2006/09/06/slow-query-log-analyzes-tools/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("最简单的用法，就是循环请求给定的 URL 列表。测试程序将以最快的速度请求这些 URL")]),s._v(" "),a("p",[a("img",{attrs:{src:n(520),alt:"image-20200507165234295"}})]),s._v(" "),a("p",[s._v("测试的结果很容易理解，只是简单的输出了请求的统计信息。下面是一个稍微复杂的测试，模拟同时有 5 个用户在进行请求")]),s._v(" "),a("p",[a("img",{attrs:{src:n(521),alt:"image-20200507165314790"}})]),s._v(" "),a("p",[s._v("另外，除了测试最快的速度，有可以根据预估的访问请求率（比如每秒 5 次）来做压力模拟测试")]),s._v(" "),a("p",[a("img",{attrs:{src:n(522),alt:"image-20200507165356497"}})]),s._v(" "),a("p",[s._v("最后，还可以模拟更大的负载，可以将访问请求率提高到每秒 20 次请求。请注意，连接和请求响应时间都会随着负载的提高而增加")]),s._v(" "),a("p",[a("img",{attrs:{src:n(523),alt:"image-20200507165457413"}})]),s._v(" "),a("h2",{attrs:{id:"mysql-基准测试套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-基准测试套件"}},[s._v("#")]),s._v(" MySQL 基准测试套件")]),s._v(" "),a("p",[s._v("MySQL Benchmark Suite 由一组基于 Perl 开发的基准测试工具组成。在 MySQl 安装目录下的 sql-bench 子目录中包含了该工具。Linux 系统上，默认的路径是 "),a("code",[s._v("/usr/share/mysql/sql-bench")])]),s._v(" "),a("p",[s._v("笔者装的 MySQL  8.0 ，没有找到该工具。下面截图")]),s._v(" "),a("p",[s._v("可以阅读该工具的 README 文件，了解使用方法和命令行参数说明。如果要运行全部测试，可以使用如下的命令")]),s._v(" "),a("p",[a("img",{attrs:{src:n(524),alt:"image-20200507171607205"}})]),s._v(" "),a("p",[s._v("执行时间很正常，可能会超过一小时。如果指定了 "),a("code",[s._v("--log")]),s._v(" 命令行，则可以监控到测试的进度。测试的结果都保存在 output 子目录中，每项测试的结果文件都会包含一系列的操作计时信息。下面是一个具体的例子")]),s._v(" "),a("p",[a("img",{attrs:{src:n(525),alt:"image-20200507171727766"}})]),s._v(" "),a("p",[s._v("如上所示： "),a("code",[s._v("count_distinct_group_one_key(1000:6000)")]),s._v(" 测试花费了 34 秒（wallclock secs），这是客户端运行测试花费的总时间，其他值（usr、sys、cursr、csys）则占了测试的 0.28 秒的开销，这是运行客户端测试代码所花费的时间，而不是等待 MySQL 服务器响应的时间。而测试者正在需要关心的测试结果，是除去客户端控制的部分，即实际运行时间应该是 33.72 秒")]),s._v(" "),a("p",[s._v("还可以选择单独执行其中的部分测试项，例如可以选择只执行 insert 测试")]),s._v(" "),a("p",[a("img",{attrs:{src:n(526),alt:"image-20200507172050613"}})]),s._v(" "),a("h2",{attrs:{id:"sysbench"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysbench"}},[s._v("#")]),s._v(" sysbench")]),s._v(" "),a("p",[s._v("sysbench ky 可以执行多种类型的基准测试，不仅用来测试数据库的性能，也可以测试运行数据库的服务器性能。 实际上，peter 和 vadim 最初设计这个工具是用来执行 MySQL 性能测试的（尽管并不能完成所有的 MySQL 基准测试）。下面先演示一些非 MySQL 的测试场景，来测试各个子系统的性能，这些测试可以用来评估系统的整体性能瓶颈。后面在演示如何测试数据库的性能")]),s._v(" "),a("p",[s._v("建议大家都熟悉该工具，在 MySQL 用户的工具包中，这一个是最有用的工具之一。有替代他的某些功能，但是那些工具并不靠谱，获得的结果也不一定和 MySQL 性能相关。例如  I/O 性能测试可以用 iozone、bonnie++ 等工具，但需要注意设计场景，以便可以模拟 InnoDB 的磁盘 I/O 模式。 而 sysbench 的 I/O 测试和 InnoDB 的 I/O 模式非常类似，所以 fileio 选项是非常好用的")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# centos 7 下安装该软件")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" automake libtool pkgconfig libaio-devel vim-common\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装方式来自 https://github.com/akopytov/sysbench#installing-from-binary-packages")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s https://packagecloud.io/install/repositories/akopytov/sysbench/script.rpm.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" sysbench\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"sysbench-的-cpu-基准测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysbench-的-cpu-基准测试"}},[s._v("#")]),s._v(" sysbench 的 CPU 基准测试")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study yum.repos.d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sysbench --test=cpu --cpu-max-prime=20000 run")]),s._v("\nWARNING: the --test option is deprecated. You can pass a script name or path on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line without any options.\nsysbench "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".20 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using bundled LuaJIT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v(".0-beta2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nRunning the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" with following options:\nNumber of threads: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nInitializing random number generator from current "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v("\n\n\nPrime numbers limit: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20000")]),s._v("\n\nInitializing worker threads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\nThreads started"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\nCPU speed:\n    events per second:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("534.88")]),s._v("\n\nGeneral statistics:\n    total time:                          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(".0011s\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里是计算的总时间数")]),s._v("\n    total number of events:              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5350")]),s._v("\n\nLatency "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n         min:                                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.81")]),s._v("\n         avg:                                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.87")]),s._v("\n         max:                                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32.18")]),s._v("\n         95th percentile:                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.93")]),s._v("\n         sum:                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9996.15")]),s._v("\n\nThreads fairness:\n    events "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("avg/stddev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5350.0000")]),s._v("/0.00\n    execution "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("avg/stddev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.9961")]),s._v("/0.00\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("可以通过这个去测试多台不同的计算机的性能。")]),s._v(" "),a("h3",{attrs:{id:"sysbench-的文件-i-o-基准测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysbench-的文件-i-o-基准测试"}},[s._v("#")]),s._v(" sysbench 的文件 I/O 基准测试")]),s._v(" "),a("p",[s._v("文件 I/O（fileio）基准测试可以测试系统在不同 I/O 负载下的性能。这对于比较不同的硬盘驱动器、不同的 RAID卡、不同的 RAID 模式，都很有帮助。可以根据测试结果来调整 I/O 子系统。文件 I/O 基准测试模拟了很多 InnoDB 的 I/O 特性。")]),s._v(" "),a("p",[s._v("测试的第一步是准备（prepare）阶段，生成测试用到的数据文件，文件只要要比内存大。否则全部可以放入内存中，则无法体现 I/O 密集型的工作负载。通过下面的命令创建一个数据集")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("sysbench --test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fileio --file-total-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20G prepare\nWARNING: the --test option is deprecated. You can pass a script name or path on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line without any options.\nsysbench "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".20 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using bundled LuaJIT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v(".0-beta2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" files, 163840Kb each, 20480Mb total\nCreating files "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nExtra "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" flags: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nCreating "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" test_file.47\nCreating "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" test_file.48\nCreating "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" test_file.49\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会生成很多小文件。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("该命令会在当前工作目录下创建测试文件，后续的运行（run）阶段将通过读写这些文件进行测试。针对不同的 I/O 类型有不同的测试选项：")]),s._v(" "),a("ul",[a("li",[s._v("seqwr：顺序写入")]),s._v(" "),a("li",[s._v("seqrewr：顺序重写")]),s._v(" "),a("li",[s._v("seqrd：顺序读取")]),s._v(" "),a("li",[s._v("rndrd：随机读取")]),s._v(" "),a("li",[s._v("rndwr：随机写入")]),s._v(" "),a("li",[s._v("rdnrw：混合随机读/写")])]),s._v(" "),a("p",[s._v("下面的命令运行文件 I/O 混合随机读写基准测试")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 总时间是测试 300 秒")]),s._v("\n$ sysbench --test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fileio --file-total-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20G --file-test-mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rndrw --max-time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" --max-requests"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" run\nWARNING: the --test option is deprecated. You can pass a script name or path on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line without any options.\nWARNING: --max-time is deprecated, use --time instead\nsysbench "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".20 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using bundled LuaJIT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v(".0-beta2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nRunning the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" with following options:\nNumber of threads: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nInitializing random number generator from current "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v("\n\n\nExtra "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" flags: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" files, 160MiB each\n20GiB total "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" size\nBlock size 16KiB\nNumber of IO requests: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nRead/Write ratio "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" combined random IO test: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.50")]),s._v("\nPeriodic FSYNC enabled, calling fsync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" each "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" requests.\nCalling fsync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at the end of test, Enabled.\nUsing synchronous I/O mode\nDoing random r/w "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nInitializing worker threads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\nThreads started"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nFile operations: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件操作")]),s._v("\n    reads/s:                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("660.30")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每秒读取 660.30 次")]),s._v("\n    writes/s:                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("440.20")]),s._v("\n    fsyncs/s:                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1408.95")]),s._v("\n\nThroughput: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 吞吐量")]),s._v("\n    read, MiB/s:                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.32")]),s._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每秒 10.32 Mb")]),s._v("\n    written, MiB/s:               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.88")]),s._v("\n\nGeneral statistics:\n    total time:                          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(".0432s\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 总测试时间")]),s._v("\n    total number of events:              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("752818")]),s._v("\n\nLatency "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n         min:                                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n         avg:                                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.40")]),s._v("\n         max:                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("841.22")]),s._v("\n         95th percentile:                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.84")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 95% 的时间分布")]),s._v("\n         sum:                               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("299415.63")]),s._v("\n\nThreads fairness:\n    events "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("avg/stddev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("752818.0000")]),s._v("/0.00\n    execution "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("avg/stddev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("299.4156")]),s._v("/0.00\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("p",[s._v("测试完成后，运行清除（cleanup）操作删除第一步生成的测试文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sysbench --test=fileio --file-total-size=20G cleanup")]),s._v("\nWARNING: the --test option is deprecated. You can pass a script name or path on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line without any options.\nsysbench "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".20 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using bundled LuaJIT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v(".0-beta2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nRemoving "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"sysbench-的-oltp-基准测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysbench-的-oltp-基准测试"}},[s._v("#")]),s._v(" sysbench 的 OLTP 基准测试")]),s._v(" "),a("p",[s._v("OLTP 基准测试模拟了一个简单的事物处理系统的工作负载。下面的例子使用的是一张超过百万行记录的表，第一步是先生成这张表")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sysbench --test=oltp --oltp-table-size=1000000 --mysql-db=test --mysql-user=root prepare")]),s._v("\nWARNING: the --test option is deprecated. You can pass a script name or path on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line without any options.\nsysbench "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".20 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using bundled LuaJIT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v(".0-beta2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nFATAL: Cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" benchmark "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'oltp'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" no such built-in test, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or module\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 笔者执行后报错，应该是 sysbench 版本的太高的问题。下面还是截图")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后补：该软件不能和 mysql8 安装在一台机器上，会有冲突")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:n(527),alt:"image-20200507182746584"}})]),s._v(" "),a("p",[s._v("下列例子采用了 8 个并发线程，只读模式，测试时间为 60 秒")]),s._v(" "),a("p",[a("img",{attrs:{src:n(528),alt:"image-20200507182824646"}})]),s._v(" "),a("p",[a("img",{attrs:{src:n(529),alt:"image-20200507182841194"}})]),s._v(" "),a("p",[s._v("如上所示，结果中包含了相当多的信息，其中最有价值的信息如下：")]),s._v(" "),a("ul",[a("li",[s._v("总的事物数")]),s._v(" "),a("li",[s._v("每秒事物数")]),s._v(" "),a("li",[s._v("时间统计信息（最小、平均、最大响应时间，以及 95% 百分比响应时间）")]),s._v(" "),a("li",[s._v("线程公平性统计信息（thread-fairness）,用于标识模拟负载的公平性")])]),s._v(" "),a("h3",{attrs:{id:"sysbench-的其他特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysbench-的其他特性"}},[s._v("#")]),s._v(" sysbench 的其他特性")]),s._v(" "),a("p",[s._v("还有一些其他的基准测试，但和数据库性能没有直接关系")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("内存（memory）：测试内存的连续读写性能")])]),s._v(" "),a("li",[a("p",[s._v("线程（thread）：测试线程调度器的性能。对于高负载情况下测试线程调度器的行为非常有用。")])]),s._v(" "),a("li",[a("p",[s._v("互斥锁（mutex）")]),s._v(" "),a("p",[s._v("测试互斥锁的性能，方式是模拟所有线程在同一时刻并发运行，并都短暂请求互斥锁（互斥锁 mutex 是一种数据结构，用来对某些资源进行排他性访问控制，防止因并发访问导致问题。）")])]),s._v(" "),a("li",[a("p",[s._v("顺序写（seqwr）")]),s._v(" "),a("p",[s._v("测试顺序写的性能。这对于测试系统的实际性能瓶颈很重要。可以用来测试 RAID 控制器的高速缓存的性能状况，如果测试结果异常则需要引起重视。例如，如果 RAID 控制器写缓存没有电池保护，而磁盘的压力达到了 3000 次请求/秒，就是一个问题，数据可能是不安全的")])])]),s._v(" "),a("p",[s._v("另外，除了制定测试模式参数（"),a("code",[s._v("--test")]),s._v("）外，还有其他很多参数，比如 "),a("code",[s._v("--num、--threads、--max-requests、--max-time")]),s._v(" 参数，更多信息请查阅官网文档。")]),s._v(" "),a("h2",{attrs:{id:"数据库测试套件中的-dbt2-tpc-c-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库测试套件中的-dbt2-tpc-c-测试"}},[s._v("#")]),s._v(" 数据库测试套件中的 dbt2 TPC-C 测试")]),s._v(" "),a("p",[s._v("数据库测试套件（Database Test Suite）中的 dbt2 是一款免费的 TPC-C 测试工具。 TPC-C 是 TPC 组织发布的一个测试规范，用于模拟测试复杂的在线事物处理系统（OLTP）。它的测试结果包括每分钟事物数（tpmC），以及每事物的成本（Price/tpmC）。这种测试的结果非常依赖硬件环境，所以公开发布的 TPC-C 测试结果都会包含具体的系统硬件配置信息。")]),s._v(" "),a("p",[s._v("笔者不想看这个了，看了前面的都是一头雾水")]),s._v(" "),a("h2",{attrs:{id:"percona-的-tpcc-mysql-测试工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#percona-的-tpcc-mysql-测试工具"}},[s._v("#")]),s._v(" Percona 的 TPCC-MySQL 测试工具")]),s._v(" "),a("p",[s._v("笔者不想阅读这个了。并且这个本书用的工具都太老的，对于笔者 2020 年才阅读的这书籍")])])}),[],!1,null,null,null);t.default=e.exports}}]);