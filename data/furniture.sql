SET NAMES UTF8;
DROP DATABASE IF EXISTS furniture;
CREATE DATABASE furniture CHARSET=UTF8;
USE furniture;

#创建用户列表
CREATE TABLE f_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(128),
	phone VARCHAR(16),
	avatar VARCHAR(128),
	user_name VARCHAR(32),
	gender INT
);

#添加用户信息
INSERT INTO f_user VALUES
(01,"lilei","123456","123@qq.com","133123456","image/default.png","李雷",1),
(null,"lily","123456","123@qq.com","133123456","image/default.png","莉莉",0),
(null,"lucy","123456","123@qq.com","133123456","image/default.png","露西",0),
(null,"tom","123456","123@qq.com","133123456","image/default.png","汤姆",1);

#创建轮播列表
CREATE TABLE f_banner(
	bid INT PRIMARY KEY AUTO_INCREMENT,
	src VARCHAR(128),
	fname VARCHAR(64)
);

#添加轮播信息
INSERT INTO f_banner VALUES
(01,"image/banner/1504757501.jpg","精简桌椅"),
(null,"image/banner/1504757502.jpg","复古桌椅"),
(null,"image/banner/1504757503.jpg","精简沙发"),
(null,"image/banner/1504757504.jpg","复古木床");

#创建产品列表
CREATE TABLE f_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,
	title VARCHAR(32),
	src VARCHAR(128),
	href VARCHAR(128),
	subtitle VARCHAR(128),
	price DECIMAL(10,2),
	promise VARCHAR(128),
	category VARCHAR(32),
	spec VARCHAR(32),
	details VARCHAR(1024),
	shelf_time BIGINT,
	see_count INT,
	sold_count INT,
	is_onsale BOOLEAN
);

#添加产品列表
INSERT INTO f_product VALUES
(01,01,"白色沙发","image/product/1505010101.jpg","productDetail.html?pid=1","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",2999,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","沙发","白色","产地: 广东省地市: 佛山市区县: 南海区出租车是否可运输: 否包装体积: 1.32品牌: 林氏型号: 1004填充物硬度: 硬安装说明详情: 提供安装说明书是否可预售: 是是否组装: 组装款式定位: 经济型设计元素: 其他颜色分类: 米白色【左三人+脚踏】&",1508827415974,566,356,1),
(null,01,"组合沙发","image/product/1505010102.jpg","productDetail.html?pid=2","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",3300,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","沙发","灰色 蓝色 红色","出租车是否可运输: 否包装体积: 1.5品牌: 索曼型号: SF-672填充物硬度: 软安装说明详情: 无安装说明是否可预售: 是是否组装: 组装款式定位: 品质奢华型毛重: 50设计元素: 原木 大师设计 异形颜色分类: 浅灰色-天然羽绒款 浅灰色",1508828500286,383,233,0),
(null,01,"两人位沙发","image/product/1505010103.jpg","productDetail.html?pid=3","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",2600,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","沙发","蓝色、黄色、红色","产地: 浙江省地市: 杭州市区县: 江干区出租车是否可运输: 否包装体积: 2品牌: KUKa/顾家家居型号: 2030（4）填充物硬度: 软安装说明详情: 提供安装说明书是否可预售: 是是否组装: 组装款式定位: 品质奢华型设计元素: 大师设计颜色分类: 3",1508828783811,116,586,1),
(null,02,"实木茶几","image/product/1505010104.jpg","productDetail.html?pid=4","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",2500,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","茶几","红棕色 原木色","产地: 山东省地市: 青岛市区县: 城阳区出租车是否可运输: 否包装体积: 0.4品牌: 原始原素型号: DM-CJ1127形状: 方形是否可预售: 否是否组装: 整装款式定位: 经济型茶几角形状: 圆形设计元素: 其他 卯榫 原木 拼接门",1508829020618,92,467,0),
(null,02,"简约茶几","image/product/1505010105.jpg","productDetail.html?pid=5","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",1299,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","茶几","棕白","出租车是否可运输: 否包装体积: 5品牌: Sunhoo/双虎型号: QX001-1安装说明详情: 提供安装说明书 提供安装说明视频 提供简单安装工具形状: 方形是否可预售: 是是否组装: 组装款式定位: 经济型茶几角形状: 方形设计元素: 其他 大师设计门数",1508829137065,111,1326,1),
(null,03,"实木黑棕色座椅","image/product/1505010106.jpg","productDetail.html?pid=6","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",3000,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","座椅","黑色 棕色 白色","产地: 江苏省地市: 苏州市区县: 相城区出租车是否可运输: 是包装体积: 0.15品牌: 橄森型号: 806安装说明详情: 提供安装说明书 提供安装说明视频 提供简单安装工具是否组装: 整装款式定位: 品质奢华型毛重: 6kg设计元素: 其他 大师设计颜色分类: 白色",1508829302239,107,899,1),
(null,03,"安乐椅","image/product/1505010107.jpg","productDetail.html?pid=7","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",899,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","座椅","彩色","包装体积: 1品牌: Yrkubus/酷布斯型号: CL-114是否可预售: 否是否组装: 整装款式定位: 艺术风格型颜色分类: 10张起订风格: 欧式产地: 广东省城市: 深圳市材质: 金属金属材质: 不锈钢是否可定制: 否适用对象: 成人备上中断的操作，可",1508829440912,158,1611,0),
(null,04,"实木餐桌","image/product/1505010108.jpg","productDetail.html?pid=8","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",2700,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","餐桌","原木色 棕色","出租车是否可运输: 否包装体积: 4品牌: Dreasylife型号: DZ1860-A安装说明详情: 无安装说明是否可预售: 是是否组装: 组装款式定位: 品质奢华型毛重: 150设计元素: 其他颜色分类: 1.3M/1.5M胡桃木色餐桌+4张A款餐椅 特惠组合 1.",1508829625789,259,587,1),
(null,04,"圆木乡村餐桌","image/product/1505010109.jpg","productDetail.html?pid=9","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",3200,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","餐桌","黄棕色 原木色","产地: 重庆地市: 重庆市区县: 沙坪坝区出租车是否可运输: 否品牌: 木朵朵型号: 00000是否组装: 整装颜色分类: 美国进口红橡木桌腿风格: 美式乡村是否带抽: 否形状: 圆形是否带转盘: 否桌面是否可调节: 不可调节是否带滚轮: 否是否带椅凳:&nb",1508829762156,64,328,0),
(null,05,"精美墙饰","image/product/1505010110.jpg","productDetail.html?pid=10","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",270,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","墙饰","多色","品牌: 纪恒暄幅数: 三联以上画芯材质: 其他/other装裱方式: 有框外框材质: 环保PS材质颜色分类: 经典黑+色彩人生 黑白+鹿先生 胡桃木白+复古麋鹿 香槟银白+复古花卉 香槟银白+狮情画意 胡桃木色+铁塔情 胡桃木白+一鹿有你风格: 简约现代工艺: ",1508829891052,52,1538,1),
(null,05,"简约壁纸","image/product/1505010111.jpg","productDetail.html?pid=11","【11.11提前抢】11.11同价钜惠，早下单早到家！10.23-10.31偶像级珠光真皮床直降300！购指定品牌床垫满两件享88折！更多床垫特价、买赠去看看>>>",50,"*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","墙饰","其他类型","品牌: CinSe/欣饰型号: C-22每卷宽度(m): 0.53m每卷长度(m): 10m计价单位: 1卷辅材套餐: 仅墙纸颜色分类: 1号 白淡金色立体蚕丝（加厚≈1700g） 2号 浅黄色立体蚕丝（加厚≈1700g） 3号 米黄色立体蚕丝（加厚≈1700g） 5号 小麦色立体蚕丝（加厚≈170",1508829995626,53,2522,1);

#放大镜图片列表
CREATE TABLE f_product_pic(
	iid INT PRIMARY KEY AUTO_INCREMENT,
	pic_id INT,
	sm VARCHAR(256),
	md VARCHAR(256),
	lg VARCHAR(256)
);

#添加放大镜图片列表
INSERT INTO f_product_pic VALUES
(1,1,"image/product/sm/1505010101.jpg","image/product/md/1505010101.jpg","image/product/lg/1505010101.jpg"),
(null,1,"image/product/sm/1504767140.jpg","image/product/md/1504767140.jpg","image/product/lg/1504767140.jpg"),
(null,1,"image/product/sm/1505010101.jpg","image/product/md/1505010101.jpg","image/product/lg/1505010101.jpg"),
(null,2,"image/product/sm/1505010102.jpg","image/product/md/1505010102.jpg","image/product/lg/1505010102.jpg"),
(null,2,"image/product/sm/1505010103.jpg","image/product/md/1505010103.jpg","image/product/lg/1505010103.jpg"),
(null,2,"image/product/sm/1504767140.jpg","image/product/md/1504767140.jpg","image/product/lg/1504767140.jpg"),
(null,3,"image/product/sm/1505010103.jpg","image/product/md/1505010103.jpg","image/product/lg/1505010103.jpg"),
(null,3,"image/product/sm/1505010101.jpg","image/product/md/1505010101.jpg","image/product/lg/1505010101.jpg"),
(null,3,"image/product/sm/1505010102.jpg","image/product/md/1505010102.jpg","image/product/lg/1505010102.jpg"),
(null,4,"image/product/sm/1505010104.jpg","image/product/md/1505010104.jpg","image/product/lg/1505010104.jpg"),
(null,4,"image/product/sm/1505010105.jpg","image/product/md/1505010105.jpg","image/product/lg/1505010105.jpg"),
(null,4,"image/product/sm/1504767140.jpg","image/product/md/1504767140.jpg","image/product/lg/1504767140.jpg"),
(null,5,"image/product/sm/1505010105.jpg","image/product/md/1505010105.jpg","image/product/lg/1505010105.jpg"),
(null,5,"image/product/sm/1505010104.jpg","image/product/md/1505010104.jpg","image/product/lg/1505010104.jpg"),
(null,5,"image/product/sm/1505010105.jpg","image/product/md/1505010105.jpg","image/product/lg/1505010105.jpg"),
(null,6,"image/product/sm/1505010106.jpg","image/product/md/1505010106.jpg","image/product/lg/1505010106.jpg"),
(null,6,"image/product/sm/1504767140.jpg","image/product/md/1504767140.jpg","image/product/lg/1504767140.jpg"),
(null,6,"image/product/sm/1505010107.jpg","image/product/md/1505010107.jpg","image/product/lg/1505010107.jpg"),
(null,7,"image/product/sm/1505010107.jpg","image/product/md/1505010107.jpg","image/product/lg/1505010107.jpg"),
(null,7,"image/product/sm/1505010106.jpg","image/product/md/1505010106.jpg","image/product/lg/1505010106.jpg"),
(null,7,"image/product/sm/1504767140.jpg","image/product/md/1504767140.jpg","image/product/lg/1504767140.jpg"),
(null,8,"image/product/sm/1505010108.jpg","image/product/md/1505010108.jpg","image/product/lg/1505010108.jpg"),
(null,8,"image/product/sm/1505010109.jpg","image/product/md/1505010109.jpg","image/product/lg/1505010109.jpg"),
(null,8,"image/product/sm/1505010101.jpg","image/product/md/1505010101.jpg","image/product/lg/1505010101.jpg"),
(null,9,"image/product/sm/1505010109.jpg","image/product/md/1505010109.jpg","image/product/lg/1505010109.jpg"),
(null,9,"image/product/sm/1504767140.jpg","image/product/md/1504767140.jpg","image/product/lg/1504767140.jpg"),
(null,9,"image/product/sm/1505010108.jpg","image/product/md/1505010108.jpg","image/product/lg/1505010108.jpg"),
(null,10,"image/product/sm/1505010110.jpg","image/product/md/1505010110.jpg","image/product/lg/1505010110.jpg"),
(null,10,"image/product/sm/1505010111.jpg","image/product/md/1505010111.jpg","image/product/lg/1505010111.jpg"),
(null,10,"image/product/sm/1505010110.jpg","image/product/md/1505010110.jpg","image/product/lg/1505010110.jpg"),
(null,11,"image/product/sm/1505010111.jpg","image/product/md/1505010111.jpg","image/product/lg/1505010111.jpg"),
(null,11,"image/product/sm/1504767140.jpg","image/product/md/1504767140.jpg","image/product/lg/1504767140.jpg"),
(null,11,"image/product/sm/1505010110.jpg","image/product/md/1505010110.jpg","image/product/lg/1505010110.jpg");

#创建购物车列表
CREATE TABLE f_shoppingcart_item(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	uid INT,
	pid INT,
	count INT,
	is_checked TINYINT
);
#添加购物车列表
INSERT INTO f_shoppingcart_item VALUES
(1,1,1,1,1),
(null,1,2,2,1),
(null,2,1,2,1),
(null,2,2,2,1);



