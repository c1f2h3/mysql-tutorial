(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{487:function(t,e,a){t.exports=a.p+"assets/img/image-20200627110238826.aba28c31.png"},488:function(t,e,a){t.exports=a.p+"assets/img/image-20200627111909836.6f3f0a74.png"},489:function(t,e,a){t.exports=a.p+"assets/img/image-20200627112021563.09cd59c1.png"},490:function(t,e,a){t.exports=a.p+"assets/img/image-20200627112755656.00f4b1b3.png"},678:function(t,e,a){"use strict";a.r(e);var s=a(15),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"主从同步原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主从同步原理"}},[t._v("#")]),t._v(" 主从同步原理")]),t._v(" "),s("p",[s("img",{attrs:{src:a(487),alt:"image-20200627110238826"}})]),t._v(" "),s("ul",[s("li",[t._v("主节点执行的查询语句都会记录在 binlog 中")]),t._v(" "),s("li",[t._v("从节点监听主节点 binlog 文件，同步到自己的 relaylog 中")]),t._v(" "),s("li",[t._v("从接待再执行 relaylog 中的 sql 语句")])]),t._v(" "),s("p",[t._v("数据同步是单向的，其实就是看错读写分离的架构。主写，从读。")]),t._v(" "),s("h2",{attrs:{id:"一主多从架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一主多从架构"}},[t._v("#")]),t._v(" 一主多从架构")]),t._v(" "),s("p",[t._v("通常来说，业务系统都是读多写少的，可以给主节点配置更的从节点。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(488),alt:"image-20200627111909836"}})]),t._v(" "),s("p",[t._v("但是如果从 "),s("strong",[t._v("节点的数量超过了 3 个")]),t._v("，出现 "),s("strong",[t._v("从节点数据同步跟不上主节点的写入")]),t._v("。")]),t._v(" "),s("p",[t._v("原因是因为：从点的过多，会消耗主节点的网络资源，导致数据同步变慢，解决方案是 "),s("strong",[t._v("从节点分发数据")])]),t._v(" "),s("h2",{attrs:{id:"从节点分发数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从节点分发数据"}},[t._v("#")]),t._v(" 从节点分发数据")]),t._v(" "),s("p",[t._v("解决主节点同步速度慢问题。合理的使用从节点充当中继节点，供给其他的更多的从节点数据同步")]),t._v(" "),s("p",[s("img",{attrs:{src:a(489),alt:"image-20200627112021563"}})]),t._v(" "),s("p",[t._v("在实现上，其实从节点变成了他下面挂的从节点的主节点。")]),t._v(" "),s("h2",{attrs:{id:"双主节点相互同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双主节点相互同步"}},[t._v("#")]),t._v(" 双主节点相互同步")]),t._v(" "),s("p",[t._v("在 Replication 集群中，主节点挂了，从节点不会自动成为主节点；为了实现主节点的高可用，实现双柱节点相互同步。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(490),alt:"image-20200627112755656"}})]),t._v(" "),s("p",[t._v("配置思路：")]),t._v(" "),s("ol",[s("li",[t._v("左边作为主，右边作为从")]),t._v(" "),s("li",[t._v("右边作为主，左边作为从")])]),t._v(" "),s("p",[t._v("但是需要注意的一个问题是：还是 Replication 的一个弊端，是异步的同步数据，导致有可能其中一个并不能完全同步到数据。其实这个也没有什么好注意的。 Replication 就是有这个弊端。")]),t._v(" "),s("h2",{attrs:{id:"删除原有的-replication-集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除原有的-replication-集群"}},[t._v("#")]),t._v(" 删除原有的 Replication 集群")]),t._v(" "),s("p",[t._v("REP 1")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("虚拟机")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("IP 地址")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("端口")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("容器")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("数据卷")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("docker-1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("192.168.56.105")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("9003")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rn1(m)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rnv1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("docker-2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("192.168.56.107")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("9003")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rn2(s)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rnv2")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("docker-3")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("192.168.56.108")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("9003")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rn3(s)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rnv3")])])])]),t._v(" "),s("p",[t._v("REP 2")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("虚拟机")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("IP 地址")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("端口")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("容器")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("数据卷")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("docker-1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("192.168.56.105")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("9004")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rn4(m)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rnv4")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("docker-2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("192.168.56.107")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("9004")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rn5(s)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rnv5")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("docker-3")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("192.168.56.108")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("9004")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rn6(s)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("rnv6")])])])]),t._v(" "),s("p",[t._v("因为要搭建新的 Replication 集群，原来搭建的两组集群要删除：容器和数据卷也要删除")]),t._v(" "),s("h2",{attrs:{id:"安装-mysql-镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql-镜像"}},[t._v("#")]),t._v(" 安装 MySQL 镜像")]),t._v(" "),s("p",[t._v("由于需要做双主，我们需要安装普通的 mysql 集群镜像，然后一步一步搭建出来。由于 PXC 集群采用的 mysql 是 5.7 版本的，我们这里也建议使用相同版本的 MySQL。后续通过 ETl 中间件抽取数据做表连接，就更加容易。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里安装的是官方的 mysql 镜像")]),t._v("\ndocker pull mysql:5.7.27\ndocker tag mysql:5.7.27 mysql\ndocker rmi mysql:5.7.27\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"创建-mysql-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-mysql-容器"}},[t._v("#")]),t._v(" 创建 MySQL 容器")]),t._v(" "),s("p",[t._v("创建的时候，名称和数据卷都是使用之前删掉的。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker run -d -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9003")]),t._v(":3306 --name rn1 \n-e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v(" \n-v rnv1:/var/lib/mysql --privileged\n--net"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("swarm_mysql mysql\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("这里没有指定主从节点的参数，需要容器启动后，我们去修改配置文件来实现。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 装完一台，先测试是否能连接上再开始")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@study ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker run -d -p 9003:3306 --name rn1 -e MYSQL_ROOT_PASSWORD=123456 -v rnv1:/var/lib/mysql --privileged --net=swarm_mysql mysql")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);