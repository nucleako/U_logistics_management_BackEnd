/*
 Navicat Premium Data Transfer

 Source Server         : bs
 Source Server Type    : MySQL
 Source Server Version : 80026 (8.0.26)
 Source Host           : localhost:3306
 Source Schema         : wlxt

 Target Server Type    : MySQL
 Target Server Version : 80026 (8.0.26)
 File Encoding         : 65001

 Date: 08/05/2023 15:32:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for base_bill
-- ----------------------------
DROP TABLE IF EXISTS `base_bill`;
CREATE TABLE `base_bill`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `OrderID` int NULL DEFAULT NULL COMMENT '订单号',
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '账单创建时间',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '金额',
  `state` tinyint(1) NULL DEFAULT NULL COMMENT '订单状态',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7130 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base_bill
-- ----------------------------
INSERT INTO `base_bill` VALUES (1, 1, '2023-05-07 21:44:44', 965398.00, 1);
INSERT INTO `base_bill` VALUES (2, 2, '2023-05-07 21:44:44', 373637.00, 0);
INSERT INTO `base_bill` VALUES (3, 3, '2023-05-07 21:44:44', 155683.00, 1);
INSERT INTO `base_bill` VALUES (4, 4, '2023-05-07 21:37:19', 179451.00, 1);
INSERT INTO `base_bill` VALUES (5, 5, '2023-05-07 21:37:19', 469635.00, 0);
INSERT INTO `base_bill` VALUES (6, 6, '2023-05-07 21:37:19', 746176.00, 1);
INSERT INTO `base_bill` VALUES (7, 7, '2023-05-07 21:37:19', 250091.00, 0);
INSERT INTO `base_bill` VALUES (8, 8, '2023-05-07 21:37:19', 928662.00, 1);
INSERT INTO `base_bill` VALUES (10, 10, '2023-05-07 21:37:19', 723494.00, 1);
INSERT INTO `base_bill` VALUES (11, 11, '2023-05-07 21:37:19', 284457.00, 1);
INSERT INTO `base_bill` VALUES (12, 12, '2023-05-07 21:37:19', 502944.00, 0);
INSERT INTO `base_bill` VALUES (13, 1, '2023-05-07 21:37:19', 227390.00, 1);
INSERT INTO `base_bill` VALUES (14, 2, '2023-05-07 21:37:19', 994348.00, 0);
INSERT INTO `base_bill` VALUES (15, 3, '2023-05-07 21:37:19', 106605.00, 1);
INSERT INTO `base_bill` VALUES (16, 4, '2023-05-07 21:37:19', 918350.00, 1);
INSERT INTO `base_bill` VALUES (17, 5, '2023-05-07 21:37:19', 847973.00, 0);
INSERT INTO `base_bill` VALUES (18, 6, '2023-05-07 21:44:35', 88970.00, 1);
INSERT INTO `base_bill` VALUES (19, 7, '2023-05-07 21:44:35', 965398.00, 0);
INSERT INTO `base_bill` VALUES (20, 8, '2023-05-07 21:44:35', 373637.00, 1);
INSERT INTO `base_bill` VALUES (21, 9, '2023-05-07 21:44:35', 155683.00, 0);
INSERT INTO `base_bill` VALUES (22, 10, '2023-05-07 21:44:35', 78174.00, 1);
INSERT INTO `base_bill` VALUES (23, 11, '2023-05-07 21:44:39', 965398.00, 1);
INSERT INTO `base_bill` VALUES (24, 12, '2023-05-07 21:44:39', 373637.00, 0);
INSERT INTO `base_bill` VALUES (26, 2, '2023-05-07 21:44:44', 373637.00, 0);
INSERT INTO `base_bill` VALUES (27, 3, '2023-05-07 21:44:44', 155683.00, 1);
INSERT INTO `base_bill` VALUES (28, 4, '2023-05-07 21:37:19', 179451.00, 1);
INSERT INTO `base_bill` VALUES (29, 5, '2023-05-07 21:37:19', 469635.00, 0);
INSERT INTO `base_bill` VALUES (30, 6, '2023-05-07 21:37:19', 746176.00, 1);
INSERT INTO `base_bill` VALUES (31, 7, '2023-05-07 21:37:19', 250091.00, 0);
INSERT INTO `base_bill` VALUES (32, 8, '2023-05-07 21:37:19', 928662.00, 1);
INSERT INTO `base_bill` VALUES (33, 10, '2023-05-07 21:37:19', 723494.00, 1);
INSERT INTO `base_bill` VALUES (34, 11, '2023-05-07 21:37:19', 284457.00, 1);
INSERT INTO `base_bill` VALUES (35, 12, '2023-05-07 21:37:19', 502944.00, 0);
INSERT INTO `base_bill` VALUES (36, 1, '2023-05-07 21:37:19', 227390.00, 1);
INSERT INTO `base_bill` VALUES (37, 2, '2023-05-07 21:37:19', 994348.00, 0);
INSERT INTO `base_bill` VALUES (38, 3, '2023-05-07 21:37:19', 106605.00, 1);
INSERT INTO `base_bill` VALUES (39, 4, '2023-05-07 21:37:19', 918350.00, 1);
INSERT INTO `base_bill` VALUES (40, 5, '2023-05-07 21:37:19', 847973.00, 0);
INSERT INTO `base_bill` VALUES (41, 6, '2023-05-07 21:44:35', 88970.00, 1);
INSERT INTO `base_bill` VALUES (42, 7, '2023-05-07 21:44:35', 965398.00, 0);
INSERT INTO `base_bill` VALUES (43, 8, '2023-05-07 21:44:35', 373637.00, 1);
INSERT INTO `base_bill` VALUES (44, 9, '2023-05-07 21:44:35', 155683.00, 0);
INSERT INTO `base_bill` VALUES (45, 10, '2023-05-07 21:44:35', 78174.00, 1);
INSERT INTO `base_bill` VALUES (46, 11, '2023-05-07 21:44:39', 965398.00, 1);
INSERT INTO `base_bill` VALUES (47, 12, '2023-05-07 21:44:39', 373637.00, 0);
INSERT INTO `base_bill` VALUES (51, 1, '2023-05-07 21:46:35', 965398.00, 1);
INSERT INTO `base_bill` VALUES (7126, NULL, NULL, NULL, NULL);
INSERT INTO `base_bill` VALUES (7127, NULL, NULL, NULL, NULL);
INSERT INTO `base_bill` VALUES (7128, NULL, NULL, NULL, NULL);
INSERT INTO `base_bill` VALUES (7129, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for base_carrier
-- ----------------------------
DROP TABLE IF EXISTS `base_carrier`;
CREATE TABLE `base_carrier`  (
  `Id` int NOT NULL AUTO_INCREMENT COMMENT '承运商编号',
  `CarrierName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '公司名',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '联系人名',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '联系电话',
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '总部所在位置',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base_carrier
-- ----------------------------
INSERT INTO `base_carrier` VALUES (1, '北京市香通笑餐饮股份有限公司', '郝春齐', '19737461000', '湖北省随州市曾都区万店镇');
INSERT INTO `base_carrier` VALUES (2, '天水市霖晨湾月业厅教育普通合伙', '方新建', '13355791632', '辽宁省锦州市古塔区士英街道');
INSERT INTO `base_carrier` VALUES (3, '塔城地区亚振聪餐饮有限责任公司', '毛涵越', '17577362494', '四川省广元市朝天区沙河镇');
INSERT INTO `base_carrier` VALUES (4, '多腾乐丽迪咨询(安徽省)有限责任公司', '锺佳欣', '17534321738', '广东省韶关市南雄市界址镇');
INSERT INTO `base_carrier` VALUES (5, '张家界市克悦弘汇钧教育股份有限公司', '董子辰', '18667895807', '黑龙江省牡丹江市宁安市沙兰镇');
INSERT INTO `base_carrier` VALUES (6, '迈辰笑永诚服务(内蒙古自治区)普通合伙', '夏尚', '18043457512', '陕西省延安市甘泉县石门镇');
INSERT INTO `base_carrier` VALUES (7, '湖南省扬波加亿教育股份有限公司', '戴强', '16651098078', '宁夏回族自治区中卫市海原县树台乡');
INSERT INTO `base_carrier` VALUES (8, '鸡西市名缘策会计有限公司', '戴晨涵', '15633480429', '内蒙古自治区通辽市库伦旗额勒顺镇');
INSERT INTO `base_carrier` VALUES (9, '锦州市霆虹衡教育普通合伙', '彭苒溪', '15136903878', '重庆市市辖区万州区响水镇');
INSERT INTO `base_carrier` VALUES (10, '新疆维吾尔自治区湾湾仑铭禹教育有限公司', '武涛', '15171399689', '河南省郑州市郑州航空港经济综合实验区新港街道');
INSERT INTO `base_carrier` VALUES (11, '天津市群颜培训股份有限公司', '黄瑾春', '18960760890', '河南省濮阳市清丰县高堡乡');
INSERT INTO `base_carrier` VALUES (12, '广西壮族自治区嘉菲英风骄计算机普通合伙', '吕文昊', '15052803032', '四川省内江市隆昌市黄家镇');
INSERT INTO `base_carrier` VALUES (13, '玉溪市帅唯恒安服务有限公司', '高国贤', '18452533991', '广西壮族自治区崇左市宁明县那楠乡');
INSERT INTO `base_carrier` VALUES (14, '河北省韵缘星湘会计股份有限公司', '邹益冉', '17699724785', '四川省雅安市雨城区八步镇');
INSERT INTO `base_carrier` VALUES (15, '天津市群颜培训股份有限公司', '彭苒溪', '15633480429', '广东省韶关市南雄市界址镇');
INSERT INTO `base_carrier` VALUES (16, '迈辰笑永诚服务(内蒙古自治区)普通合伙', '夏尚', '18043457512', '黑龙江省牡丹江市宁安市沙兰镇');

-- ----------------------------
-- Table structure for base_carrier_copy1
-- ----------------------------
DROP TABLE IF EXISTS `base_carrier_copy1`;
CREATE TABLE `base_carrier_copy1`  (
  `Id` int NOT NULL AUTO_INCREMENT COMMENT '承运商编号',
  `CarrierName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '公司名',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '联系人名',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '联系电话',
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '总部所在位置',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base_carrier_copy1
-- ----------------------------
INSERT INTO `base_carrier_copy1` VALUES (1, '北京市香通笑餐饮股份有限公司', '郝春齐', '19737461000', '湖北省随州市曾都区万店镇');
INSERT INTO `base_carrier_copy1` VALUES (2, '天水市霖晨湾月业厅教育普通合伙', '方新建', '13355791632', '辽宁省锦州市古塔区士英街道');
INSERT INTO `base_carrier_copy1` VALUES (3, '塔城地区亚振聪餐饮有限责任公司', '毛涵越', '17577362494', '四川省广元市朝天区沙河镇');
INSERT INTO `base_carrier_copy1` VALUES (4, '多腾乐丽迪咨询(安徽省)有限责任公司', '锺佳欣', '17534321738', '广东省韶关市南雄市界址镇');
INSERT INTO `base_carrier_copy1` VALUES (5, '张家界市克悦弘汇钧教育股份有限公司', '董子辰', '18667895807', '黑龙江省牡丹江市宁安市沙兰镇');
INSERT INTO `base_carrier_copy1` VALUES (6, '迈辰笑永诚服务(内蒙古自治区)普通合伙', '夏尚', '18043457512', '陕西省延安市甘泉县石门镇');
INSERT INTO `base_carrier_copy1` VALUES (7, '湖南省扬波加亿教育股份有限公司', '戴强', '16651098078', '宁夏回族自治区中卫市海原县树台乡');
INSERT INTO `base_carrier_copy1` VALUES (8, '鸡西市名缘策会计有限公司', '戴晨涵', '15633480429', '内蒙古自治区通辽市库伦旗额勒顺镇');
INSERT INTO `base_carrier_copy1` VALUES (9, '锦州市霆虹衡教育普通合伙', '彭苒溪', '15136903878', '重庆市市辖区万州区响水镇');
INSERT INTO `base_carrier_copy1` VALUES (10, '新疆维吾尔自治区湾湾仑铭禹教育有限公司', '武涛', '15171399689', '河南省郑州市郑州航空港经济综合实验区新港街道');
INSERT INTO `base_carrier_copy1` VALUES (11, '天津市群颜培训股份有限公司', '黄瑾春', '18960760890', '河南省濮阳市清丰县高堡乡');
INSERT INTO `base_carrier_copy1` VALUES (12, '广西壮族自治区嘉菲英风骄计算机普通合伙', '吕文昊', '15052803032', '四川省内江市隆昌市黄家镇');
INSERT INTO `base_carrier_copy1` VALUES (13, '玉溪市帅唯恒安服务有限公司', '高国贤', '18452533991', '广西壮族自治区崇左市宁明县那楠乡');
INSERT INTO `base_carrier_copy1` VALUES (14, '河北省韵缘星湘会计股份有限公司', '邹益冉', '17699724785', '四川省雅安市雨城区八步镇');
INSERT INTO `base_carrier_copy1` VALUES (15, NULL, NULL, '1', NULL);
INSERT INTO `base_carrier_copy1` VALUES (16, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for base_customer
-- ----------------------------
DROP TABLE IF EXISTS `base_customer`;
CREATE TABLE `base_customer`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '客户编号',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '姓名',
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '电话',
  `addr` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '详细地址',
  `deleted` tinyint(1) NULL DEFAULT 0 COMMENT '逻辑删除',
  `CompanyName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '公司名',
  `gender` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '客户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base_customer
-- ----------------------------
INSERT INTO `base_customer` VALUES (1, '熊文杰', '123456', '河南省南阳市邓州市小杨营镇', 0, '市辖区谊耀尚服务有限责任公司', 1);
INSERT INTO `base_customer` VALUES (2, '李娟', '123456', '西藏自治区阿里地区革吉县亚热乡', 0, '名成美容(新疆维吾尔自治区)普通合伙', 0);
INSERT INTO `base_customer` VALUES (3, '汤益帆', '123456', '陕西省商洛市丹凤县峦庄镇', 0, '江西省兴茜业浩玉诚计算机普通合伙', 1);
INSERT INTO `base_customer` VALUES (4, '范淑华', '123456', '福建省漳州市平和县五寨乡', 0, '海南藏族自治州威旺英哲计算机有限公司', 0);
INSERT INTO `base_customer` VALUES (5, '梁娜', '123456', '山东省济宁市金乡县兴隆镇', 0, '盘锦市巧爱静美容股份有限公司', 0);
INSERT INTO `base_customer` VALUES (6, '叶慧嘉', '123456', '天津市市辖区北辰区大张庄镇', 0, '策文凯资正艺餐饮(天津市)有限责任公司', 1);

-- ----------------------------
-- Table structure for base_list
-- ----------------------------
DROP TABLE IF EXISTS `base_list`;
CREATE TABLE `base_list`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '货单号',
  `SdCustomerID` int NOT NULL COMMENT '发货客户编号',
  `RcvCustomerID` int NOT NULL COMMENT '收货客户编号',
  `OrderStatus` tinyint(1) NOT NULL COMMENT '订单状态',
  `OrderDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '订单创建的时间',
  `OrderPrice` double NOT NULL COMMENT '订单总金额',
  `arrive` timestamp NOT NULL COMMENT '到达时间',
  `check_out` timestamp NULL DEFAULT NULL COMMENT '签收时间',
  `weight` double NOT NULL COMMENT '货物重量',
  `value` double NOT NULL COMMENT '货物价值',
  `w_id_from` int NOT NULL COMMENT '发货仓库',
  `w_id_to` int NOT NULL COMMENT '收货仓库',
  `t_num` int NULL DEFAULT NULL COMMENT '所属运单号',
  `pay_before` tinyint(1) NULL DEFAULT 1 COMMENT '发货时付款',
  `check_result` enum('正常交货','商家少货','商家损货','用户退货','运输少货','运输损货') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '验货结果',
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除',
  `o_id_from` int NULL DEFAULT NULL COMMENT '发货操作员编号',
  `o_id_to` int NULL DEFAULT NULL COMMENT '签收操作员编号',
  `check_desc` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '签收结果描述',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `booking_operator_o_id_fk`(`o_id_from` ASC) USING BTREE,
  INDEX `booking_operator_o_id_fk_2`(`o_id_to` ASC) USING BTREE,
  INDEX `booking_transport_t_num_fk`(`t_num` ASC) USING BTREE,
  INDEX `booking_warehouse_w_id_fk`(`w_id_from` ASC) USING BTREE,
  INDEX `booking_warehouse_w_id_fk_2`(`w_id_to` ASC) USING BTREE,
  INDEX `booking_customer_c_id_fk`(`SdCustomerID` ASC) USING BTREE,
  INDEX `booking_customer_c_id_fk_2`(`RcvCustomerID` ASC) USING BTREE,
  CONSTRAINT `booking_customer_c_id_fk` FOREIGN KEY (`SdCustomerID`) REFERENCES `base_customer` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `booking_customer_c_id_fk_2` FOREIGN KEY (`RcvCustomerID`) REFERENCES `base_customer` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `booking_operator_o_id_fk` FOREIGN KEY (`o_id_from`) REFERENCES `operator` (`o_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `booking_operator_o_id_fk_2` FOREIGN KEY (`o_id_to`) REFERENCES `operator` (`o_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `booking_transport_t_num_fk` FOREIGN KEY (`t_num`) REFERENCES `transport` (`t_num`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `booking_warehouse_w_id_fk` FOREIGN KEY (`w_id_from`) REFERENCES `stock` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `booking_warehouse_w_id_fk_2` FOREIGN KEY (`w_id_to`) REFERENCES `stock` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '货单' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base_list
-- ----------------------------
INSERT INTO `base_list` VALUES (1, 1, 4, 0, '2022-07-21 09:06:41', 76, '2022-07-21 17:07:10', NULL, 9.9, 900, 1, 5, 1, 1, NULL, 0, NULL, NULL, '');
INSERT INTO `base_list` VALUES (2, 3, 2, 1, '2022-07-21 09:12:35', 484, '2023-04-27 22:08:58', NULL, 60.5, 1500.1, 6, 4, 2, 1, NULL, 0, NULL, NULL, '');
INSERT INTO `base_list` VALUES (3, 3, 5, 1, '2022-07-21 09:16:17', 44, '2023-04-27 22:08:58', NULL, 5.5, 600, 6, 3, 3, 1, NULL, 0, NULL, NULL, '');
INSERT INTO `base_list` VALUES (4, 6, 5, 1, '2022-07-21 09:18:15', 796, '2022-07-21 17:19:22', '2022-07-21 17:20:17', 99.8, 999999, 2, 3, 4, 0, '正常交货', 0, NULL, 6, '很贵');
INSERT INTO `base_list` VALUES (5, 1, 6, 0, '2022-07-21 09:23:46', 76, '2022-07-21 17:24:13', '2022-07-21 17:31:26', 9.9, 600.4, 1, 6, 5, 1, '运输损货', 0, 1, 12, '坏了！');
INSERT INTO `base_list` VALUES (6, 3, 1, 1, '2022-07-21 09:26:21', 68, '2022-07-21 17:26:48', NULL, 8.1, 656.5, 6, 1, 6, 1, NULL, 0, 12, NULL, '');
INSERT INTO `base_list` VALUES (7, 1, 4, 1, '2022-07-21 09:06:41', 76, '2022-07-21 17:07:10', NULL, 9.9, 900, 1, 5, 1, 1, NULL, 0, NULL, NULL, '');
INSERT INTO `base_list` VALUES (8, 6, 5, 1, '2022-07-21 09:18:15', 796, '2022-07-21 17:19:22', '2022-07-21 17:20:17', 99.8, 999999, 2, 3, 4, 0, '正常交货', 0, NULL, 6, '很贵');
INSERT INTO `base_list` VALUES (9, 3, 2, 1, '2022-07-21 09:12:35', 484, '2023-04-27 22:08:58', NULL, 60.5, 1500.1, 6, 4, 2, 1, NULL, 0, NULL, NULL, '');
INSERT INTO `base_list` VALUES (11, 3, 5, 0, '2022-07-21 09:16:17', 44, '2023-04-27 22:08:58', NULL, 5.5, 600, 6, 3, 3, 1, NULL, 0, NULL, NULL, '');
INSERT INTO `base_list` VALUES (12, 6, 5, 1, '2022-07-21 09:18:15', 796, '2022-07-21 17:19:22', '2022-07-21 17:20:17', 99.8, 999999, 2, 3, 4, 0, '正常交货', 0, NULL, 6, '很贵');
INSERT INTO `base_list` VALUES (13, 1, 6, 1, '2022-07-21 09:23:46', 76, '2022-07-21 17:24:13', '2022-07-21 17:31:26', 9.9, 600.4, 1, 6, 5, 1, '运输损货', 0, 1, 12, '坏了！');
INSERT INTO `base_list` VALUES (14, 3, 1, 0, '2022-07-21 09:26:21', 68, '2022-07-21 17:26:48', NULL, 8.1, 656.5, 6, 1, 6, 1, NULL, 0, 12, NULL, '');
INSERT INTO `base_list` VALUES (15, 6, 5, 1, '2022-07-21 09:18:15', 796, '2022-07-21 17:19:22', '2022-07-21 17:20:17', 99.8, 999999, 2, 3, 4, 0, '正常交货', 0, NULL, 6, '很贵');
INSERT INTO `base_list` VALUES (63, 6, 5, 1, '2022-07-21 09:18:15', 796, '2022-07-21 17:19:22', '2022-07-21 17:20:17', 99.8, 999999, 2, 3, 4, 0, '正常交货', 0, NULL, 6, '很贵');

-- ----------------------------
-- Table structure for base_trans
-- ----------------------------
DROP TABLE IF EXISTS `base_trans`;
CREATE TABLE `base_trans`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '运单号',
  `OrderID` int NULL DEFAULT NULL COMMENT '订单编号',
  `CarrierId` int NULL DEFAULT NULL COMMENT '承运商id',
  `c_id_send` int NULL DEFAULT NULL COMMENT '发货客户编号',
  `c_id_rece` int NULL DEFAULT NULL COMMENT '收货客户编号',
  `goodstype` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '货物类型',
  `weight` double NULL DEFAULT NULL COMMENT '货物重量',
  `Origin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '发货源',
  `Destination` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '目的地',
  `ReceiverAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ReceiverPhone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ReceiverName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `SendAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `SendPhone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `SendName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pay_before` tinyint(1) NULL DEFAULT 1 COMMENT '发货时付款',
  `check_in` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '登记时间',
  `arrive` timestamp NULL DEFAULT NULL COMMENT '到达时间',
  `check_out` timestamp NULL DEFAULT NULL COMMENT '签收时间',
  `money` double NULL DEFAULT NULL COMMENT '运费',
  `value` double NULL DEFAULT NULL COMMENT '货物价值',
  `w_id_from` int NULL DEFAULT NULL COMMENT '发货仓库',
  `w_id_to` int NULL DEFAULT NULL COMMENT '收货仓库',
  `t_num` int NULL DEFAULT NULL COMMENT '所属运单号',
  `check_result` enum('正常交货','商家少货','商家损货','用户退货','运输少货','运输损货') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '验货结果',
  `deleted` tinyint(1) NULL DEFAULT 0 COMMENT '逻辑删除',
  `o_id_from` int NULL DEFAULT NULL COMMENT '发货操作员编号',
  `o_id_to` int NULL DEFAULT NULL COMMENT '签收操作员编号',
  `check_desc` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '签收结果描述',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `booking_customer_c_id_fk`(`c_id_send` ASC) USING BTREE,
  INDEX `booking_customer_c_id_fk_2`(`c_id_rece` ASC) USING BTREE,
  INDEX `booking_operator_o_id_fk`(`o_id_from` ASC) USING BTREE,
  INDEX `booking_operator_o_id_fk_2`(`o_id_to` ASC) USING BTREE,
  INDEX `booking_transport_t_num_fk`(`t_num` ASC) USING BTREE,
  INDEX `booking_warehouse_w_id_fk`(`w_id_from` ASC) USING BTREE,
  INDEX `booking_warehouse_w_id_fk_2`(`w_id_to` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '货单' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base_trans
-- ----------------------------
INSERT INTO `base_trans` VALUES (1, 1, 1, 1, 4, '钢卷', 9.9, '辽宁省辽阳市太子河区沙岭镇', '贵州省安顺市平坝区齐伯镇', '贵州省安顺市平坝区齐伯镇', '19117042783', '梁汝鑫', '辽宁省辽阳市太子河区沙岭镇', '15739745835', '谭晨涛', 1, '2022-07-21 09:06:41', '2022-07-21 17:07:10', NULL, 76, 900, 1, 5, 1, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans` VALUES (3, 2, 2, 3, 5, '钢卷', 5.5, '上海市市辖区松江区佘山镇', '内蒙古自治区乌海市海勃湾区林荫街道', '内蒙古自治区乌海市海勃湾区林荫街道', '19714733057', '吕欣源', '上海市市辖区松江区佘山镇', '14993197392', '白熙涵', 1, '2022-07-21 09:16:17', NULL, NULL, 44, 600, 6, 3, 3, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans` VALUES (4, 54, 54, 6, 5, '陶瓷', 99.8, '甘肃省武威市民勤县薛百镇', '福建省莆田市荔城区拱辰街道', '福建省莆田市荔城区拱辰街道', '13211803855', '龙贺祥', '甘肃省武威市民勤县薛百镇', '13032065067', '顾晓庆', 0, '2022-07-21 09:18:15', '2022-07-21 17:19:22', '2022-07-21 17:20:17', 796, 999999, 2, 3, 4, '正常交货', 0, NULL, 6, '很贵');
INSERT INTO `base_trans` VALUES (5, 34, 34, 1, 6, '玻璃制品', 9.9, '上海市市辖区松江区石湖荡镇', '辽宁省盘锦市大洼区二界沟街道', '辽宁省盘锦市大洼区二界沟街道', '18865621911', '杜语晨', '上海市市辖区松江区石湖荡镇', '18861676176', '叶晨茜', 1, '2022-07-21 09:23:46', '2022-07-21 17:24:13', '2022-07-21 17:31:26', 76, 600.4, 1, 6, 5, '运输损货', 0, 1, 12, '坏了！');
INSERT INTO `base_trans` VALUES (6, 22, 22, 3, 1, '工业液体', 8.1, '浙江省温州市龙湾区蒲州街道', '北京市市辖区大兴区观音寺街道', '北京市市辖区大兴区观音寺街道', '19149057909', '姚杰', '浙江省温州市龙湾区蒲州街道', '15059623122', '文秀英', 1, '2022-07-21 09:26:21', '2022-07-21 17:26:48', NULL, 68, 656.5, 6, 1, 6, NULL, 0, 12, NULL, '');
INSERT INTO `base_trans` VALUES (7, 3, 3, 1, 4, '陶瓷', 9.9, '甘肃省白银市平川区电力路街道', '湖北省随州市广水市陈巷镇', '湖北省随州市广水市陈巷镇', '15136513936', '康淼', '甘肃省白银市平川区电力路街道', '19156850294', '谢欣源', 1, '2022-07-21 09:06:41', '2022-07-21 17:07:10', NULL, 76, 900, 1, 5, 1, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans` VALUES (21, 4, 4, 3, 2, '饮水机', 60.5, '上海市市辖区崇明区长兴镇', '吉林省长春市德惠市天台镇', '吉林省长春市德惠市天台镇', '14568852080', '郝添池', '上海市市辖区崇明区长兴镇', '13640488185', '彭林', 1, '2022-07-21 09:12:35', NULL, NULL, 484, 1500.1, 6, 4, 2, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans` VALUES (31, 6, 6, 3, 5, '玻璃制品', 5.5, '辽宁省铁岭市开原市城东镇', '新疆维吾尔自治区乌鲁木齐市达坂城区乌拉泊街道', '新疆维吾尔自治区乌鲁木齐市达坂城区乌拉泊街道', '18748216786', '程军', '辽宁省铁岭市开原市城东镇', '18272507129', '张晨茜', 1, '2022-07-21 09:16:17', NULL, NULL, 44, 600, 6, 3, 3, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans` VALUES (41, 3, 3, 6, 5, '工业液体', 99.8, '陕西省安康市白河县中厂镇', '安徽省淮南市谢家集区李郢孜镇', '安徽省淮南市谢家集区李郢孜镇', '13511355260', '彭杰', '陕西省安康市白河县中厂镇', '17612256296', '谭涛', 0, '2022-07-21 09:18:15', '2022-07-21 17:19:22', '2022-07-21 17:20:17', 796, 999999, 2, 3, 4, '正常交货', 0, NULL, 6, '很贵');
INSERT INTO `base_trans` VALUES (51, 7, 7, 1, 6, '水泥', 9.9, '安徽省阜阳市阜阳合肥现代产业园区袁集镇', '甘肃省金昌市永昌县焦家庄镇', '甘肃省金昌市永昌县焦家庄镇', '17395156564', '黄昕蕊', '安徽省阜阳市阜阳合肥现代产业园区袁集镇', '14917518820', '龙国栋', 1, '2022-07-21 09:23:46', '2022-07-21 17:24:13', '2022-07-21 17:31:26', 76, 600.4, 1, 6, 5, '运输损货', 0, 1, 12, '坏了！');
INSERT INTO `base_trans` VALUES (61, 35, 35, 3, 1, '玻璃制品', 8.1, '陕西省安康市镇坪县牛头店镇', '贵州省毕节市七星关区大屯彝族乡', '贵州省毕节市七星关区大屯彝族乡', '17792656046', '曹芳', '陕西省安康市镇坪县牛头店镇', '13719212702', '吴昕蕊', 1, '2022-07-21 09:26:21', '2022-07-21 17:26:48', NULL, 68, 656.5, 6, 1, 6, NULL, 0, 12, NULL, '');

-- ----------------------------
-- Table structure for base_trans_copy1
-- ----------------------------
DROP TABLE IF EXISTS `base_trans_copy1`;
CREATE TABLE `base_trans_copy1`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '运单号',
  `OrderID` int NOT NULL COMMENT '订单编号',
  `CarrierId` int NULL DEFAULT NULL COMMENT '承运商id',
  `c_id_send` int NOT NULL COMMENT '发货客户编号',
  `c_id_rece` int NOT NULL COMMENT '收货客户编号',
  `weight` double NOT NULL COMMENT '货物重量',
  `Origin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '发货源',
  `goodstype` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '货物类型',
  `pay_before` tinyint(1) NOT NULL DEFAULT 1 COMMENT '发货时付款',
  `check_in` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '登记时间',
  `arrive` timestamp NULL DEFAULT NULL COMMENT '到达时间',
  `check_out` timestamp NULL DEFAULT NULL COMMENT '签收时间',
  `money` double NOT NULL COMMENT '运费',
  `value` double NOT NULL COMMENT '货物价值',
  `w_id_from` int NOT NULL COMMENT '发货仓库',
  `w_id_to` int NOT NULL COMMENT '收货仓库',
  `t_num` int NULL DEFAULT NULL COMMENT '所属运单号',
  `check_result` enum('正常交货','商家少货','商家损货','用户退货','运输少货','运输损货') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '验货结果',
  `deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除',
  `o_id_from` int NULL DEFAULT NULL COMMENT '发货操作员编号',
  `o_id_to` int NULL DEFAULT NULL COMMENT '签收操作员编号',
  `check_desc` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '签收结果描述',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `booking_customer_c_id_fk`(`c_id_send` ASC) USING BTREE,
  INDEX `booking_customer_c_id_fk_2`(`c_id_rece` ASC) USING BTREE,
  INDEX `booking_operator_o_id_fk`(`o_id_from` ASC) USING BTREE,
  INDEX `booking_operator_o_id_fk_2`(`o_id_to` ASC) USING BTREE,
  INDEX `booking_transport_t_num_fk`(`t_num` ASC) USING BTREE,
  INDEX `booking_warehouse_w_id_fk`(`w_id_from` ASC) USING BTREE,
  INDEX `booking_warehouse_w_id_fk_2`(`w_id_to` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 62 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '货单' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base_trans_copy1
-- ----------------------------
INSERT INTO `base_trans_copy1` VALUES (1, 0, NULL, 1, 4, 9.9, NULL, NULL, 1, '2022-07-21 09:06:41', '2022-07-21 17:07:10', NULL, 76, 900, 1, 5, 1, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans_copy1` VALUES (2, 0, NULL, 3, 2, 60.5, NULL, NULL, 1, '2022-07-21 09:12:35', NULL, NULL, 484, 1500.1, 6, 4, 2, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans_copy1` VALUES (3, 0, NULL, 3, 5, 5.5, NULL, NULL, 1, '2022-07-21 09:16:17', NULL, NULL, 44, 600, 6, 3, 3, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans_copy1` VALUES (4, 0, NULL, 6, 5, 99.8, NULL, NULL, 0, '2022-07-21 09:18:15', '2022-07-21 17:19:22', '2022-07-21 17:20:17', 796, 999999, 2, 3, 4, '正常交货', 0, NULL, 6, '很贵');
INSERT INTO `base_trans_copy1` VALUES (5, 0, NULL, 1, 6, 9.9, NULL, NULL, 1, '2022-07-21 09:23:46', '2022-07-21 17:24:13', '2022-07-21 17:31:26', 76, 600.4, 1, 6, 5, '运输损货', 0, 1, 12, '坏了！');
INSERT INTO `base_trans_copy1` VALUES (6, 0, NULL, 3, 1, 8.1, NULL, NULL, 1, '2022-07-21 09:26:21', '2022-07-21 17:26:48', NULL, 68, 656.5, 6, 1, 6, NULL, 0, 12, NULL, '');
INSERT INTO `base_trans_copy1` VALUES (7, 0, NULL, 1, 4, 9.9, NULL, NULL, 1, '2022-07-21 09:06:41', '2022-07-21 17:07:10', NULL, 76, 900, 1, 5, 1, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans_copy1` VALUES (8, 0, NULL, 3, 2, 60.5, NULL, NULL, 1, '2022-07-21 09:12:35', NULL, NULL, 484, 1500.1, 6, 4, 2, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans_copy1` VALUES (9, 0, NULL, 3, 5, 5.5, NULL, NULL, 1, '2022-07-21 09:16:17', NULL, NULL, 44, 600, 6, 3, 3, NULL, 0, NULL, NULL, '');
INSERT INTO `base_trans_copy1` VALUES (10, 0, NULL, 6, 5, 99.8, NULL, NULL, 0, '2022-07-21 09:18:15', '2022-07-21 17:19:22', '2022-07-21 17:20:17', 796, 999999, 2, 3, 4, '正常交货', 0, NULL, 6, '很贵');
INSERT INTO `base_trans_copy1` VALUES (11, 0, NULL, 1, 6, 9.9, NULL, NULL, 1, '2022-07-21 09:23:46', '2022-07-21 17:24:13', '2022-07-21 17:31:26', 76, 600.4, 1, 6, 5, '运输损货', 0, 1, 12, '坏了！');
INSERT INTO `base_trans_copy1` VALUES (12, 0, NULL, 3, 1, 8.1, NULL, NULL, 1, '2022-07-21 09:26:21', '2022-07-21 17:26:48', NULL, 68, 656.5, 6, 1, 6, NULL, 0, 12, NULL, '');

-- ----------------------------
-- Table structure for base_user
-- ----------------------------
DROP TABLE IF EXISTS `base_user`;
CREATE TABLE `base_user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `roles` enum('admin','operator','viewer') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `realname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatar` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '头像信息',
  `gender` tinyint(1) NOT NULL,
  `telephone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 86 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base_user
-- ----------------------------
INSERT INTO `base_user` VALUES (1, 'admin', '123456', 'admin', 'nk', '一号', 'https://www.pp3.cn/uploads/201502/2015021113.jpg', 1, '15245822187');
INSERT INTO `base_user` VALUES (2, 'user1', '123456', 'admin', '陆晨璐', '2号', NULL, 0, '19116656239');
INSERT INTO `base_user` VALUES (3, 'admin1', '123321', 'admin', '江涛', '3号', NULL, 1, '18532952326');
INSERT INTO `base_user` VALUES (4, 'admin2', '123123', 'viewer', '魏子璇', '4号', NULL, 0, '13737990279');
INSERT INTO `base_user` VALUES (5, 'admin1', '123321', 'admin', '江涛', '3号', NULL, 1, '13686319345');
INSERT INTO `base_user` VALUES (6, 'admin2', '123123', 'viewer', '魏子璇', '4号', NULL, 0, '13547052718');
INSERT INTO `base_user` VALUES (7, 'admin2', '123123', 'admin', '魏子璇', '4号', NULL, 0, '15092860771');
INSERT INTO `base_user` VALUES (8, 'admin2', '123123', 'viewer', '魏子璇', '4号', NULL, 0, '18734227158');
INSERT INTO `base_user` VALUES (9, 'admin1', '123321', 'admin', '江涛', '3号', NULL, 1, '18499042342');

-- ----------------------------
-- Table structure for base_user_copy1
-- ----------------------------
DROP TABLE IF EXISTS `base_user_copy1`;
CREATE TABLE `base_user_copy1`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `roles` enum('admin','operator','viewer') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `realname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatar` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '头像信息',
  `gender` bit(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 82 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base_user_copy1
-- ----------------------------
INSERT INTO `base_user_copy1` VALUES (1, 'admin', '123456', 'viewer', 'nk', '一号', 'https://www.pp3.cn/uploads/201502/2015021113.jpg', b'1');
INSERT INTO `base_user_copy1` VALUES (2, 'user1', '123456', 'admin', '陆晨璐', '2号', NULL, b'0');
INSERT INTO `base_user_copy1` VALUES (3, 'admin1', '123321', 'admin', '江涛', '3号', NULL, b'1');
INSERT INTO `base_user_copy1` VALUES (4, 'admin2', '123123', 'admin', '魏子璇', '4号', NULL, b'0');
INSERT INTO `base_user_copy1` VALUES (5, 'admin1', '123321', 'admin', '江涛', '3号', NULL, b'1');
INSERT INTO `base_user_copy1` VALUES (6, 'admin2', '123123', 'admin', '魏子璇', '4号', NULL, b'0');
INSERT INTO `base_user_copy1` VALUES (7, 'admin2', '123123', 'admin', '魏子璇', '4号', NULL, b'0');
INSERT INTO `base_user_copy1` VALUES (8, 'admin2', '123123', 'admin', '魏子璇', '4号', NULL, b'0');
INSERT INTO `base_user_copy1` VALUES (9, 'admin2', '123123', 'admin', '魏子璇', '4号', NULL, b'0');
INSERT INTO `base_user_copy1` VALUES (10, 'admin2', '123123', 'admin', '魏子璇', '4号', NULL, b'0');
INSERT INTO `base_user_copy1` VALUES (51, 'admin1', '123321', 'admin', '江涛', '3号', NULL, b'1');
INSERT INTO `base_user_copy1` VALUES (61, 'admin2', '123123', 'admin', '魏子璇', '4号', NULL, b'0');
INSERT INTO `base_user_copy1` VALUES (71, 'admin2', '123123', 'admin', '魏子璇', '4号', NULL, b'0');
INSERT INTO `base_user_copy1` VALUES (81, 'admin2', '123123', 'admin', '魏子璇', '4号', NULL, b'0');

-- ----------------------------
-- Table structure for driver
-- ----------------------------
DROP TABLE IF EXISTS `driver`;
CREATE TABLE `driver`  (
  `d_id` int NOT NULL AUTO_INCREMENT COMMENT '司机编号',
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `password` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '姓名',
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '电话',
  `w_id` int NULL DEFAULT NULL COMMENT '当前位于仓库',
  `state` tinyint(1) NULL DEFAULT 0 COMMENT '状态',
  `deleted` tinyint(1) NULL DEFAULT 0 COMMENT '逻辑删除',
  PRIMARY KEY (`d_id`) USING BTREE,
  UNIQUE INDEX `driver_username_uindex`(`username` ASC) USING BTREE,
  INDEX `driver_warehouse_w_id_fk`(`w_id` ASC) USING BTREE,
  CONSTRAINT `driver_warehouse_w_id_fk` FOREIGN KEY (`w_id`) REFERENCES `stock` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '司机表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of driver
-- ----------------------------
INSERT INTO `driver` VALUES (1, 'dir1', '123456', '刘磊', '123456', 5, 0, 0);
INSERT INTO `driver` VALUES (2, 'dir2', '123456', '龚雄霖', '123456', 1, 0, 0);
INSERT INTO `driver` VALUES (3, 'dir3', '123456', '薛昕蕊', '1593568', 3, 0, 0);
INSERT INTO `driver` VALUES (4, 'dir4', '123456', '林萌萌', '123456', 2, 0, 0);
INSERT INTO `driver` VALUES (5, 'dir5', '123456', '廖泽远', '1384266', 3, 0, 0);
INSERT INTO `driver` VALUES (6, 'dir6', '123456', '廖瑾春', '123456', 3, 0, 0);
INSERT INTO `driver` VALUES (7, 'dir7', '123456', '尹晶莹', '1214523', 4, 0, 0);
INSERT INTO `driver` VALUES (8, 'dir8', '123456', '苏萌', '123456', 4, 0, 0);
INSERT INTO `driver` VALUES (9, 'dir9', '123456', '胡建林', '1593624', 5, 0, 0);
INSERT INTO `driver` VALUES (10, 'dir10', '123456', '程春齐', '123456', 5, 0, 0);
INSERT INTO `driver` VALUES (11, 'dir11', '123456', '韩佳钰', '18362562', 6, 1, 0);
INSERT INTO `driver` VALUES (12, 'dir12', '123456', '罗晨涵', '123456', 6, 1, 0);

-- ----------------------------
-- Table structure for operator
-- ----------------------------
DROP TABLE IF EXISTS `operator`;
CREATE TABLE `operator`  (
  `o_id` int NOT NULL AUTO_INCREMENT COMMENT '操作员编号',
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `password` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '姓名',
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '电话',
  `w_id` int NULL DEFAULT NULL COMMENT '所属仓库编号',
  `deleted` tinyint(1) NULL DEFAULT 0 COMMENT '逻辑删除',
  `avatar` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  PRIMARY KEY (`o_id`) USING BTREE,
  UNIQUE INDEX `operator_username_uindex`(`username` ASC) USING BTREE,
  INDEX `operator_warehouse_w_id_fk`(`w_id` ASC) USING BTREE,
  CONSTRAINT `operator_warehouse_w_id_fk` FOREIGN KEY (`w_id`) REFERENCES `stock` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '操作员表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of operator
-- ----------------------------
INSERT INTO `operator` VALUES (1, 'hamlet', '123456', '邹榕润', '12345620214', 1, 0, '1');
INSERT INTO `operator` VALUES (2, 'letham', '654321', '郝运昊', '13712345678', 1, 0, '2');
INSERT INTO `operator` VALUES (3, 'bigmeng', '123456', '韩晨璐', '13912345678', 2, 0, '3');
INSERT INTO `operator` VALUES (4, 'smallmeng', '123456', '范霞', '15212345678', 2, 0, '4');
INSERT INTO `operator` VALUES (5, 'lubenweinb', '123456', '潘伟洋', '15217171717', 3, 0, '5');
INSERT INTO `operator` VALUES (6, 'biggao', '123456', '朱磊', '18512345678', 3, 0, '6');
INSERT INTO `operator` VALUES (7, 'smallgao', '123456', '李淼', '15512345678', 3, 0, '7');
INSERT INTO `operator` VALUES (8, 'bigli', '123456', '史建政', '18212345678', 4, 0, '8');
INSERT INTO `operator` VALUES (9, 'smallli', '123456', '锺建林', '14712345678', 4, 0, '9');
INSERT INTO `operator` VALUES (10, 'biglu', '123456', '苏明远', '15712345678', 5, 0, '10');
INSERT INTO `operator` VALUES (11, 'smalllu', '123456', '徐若萌', '18312345678', 5, 0, '11');
INSERT INTO `operator` VALUES (12, 'bigliang', '123456', '罗杨', '16612345678', 6, 0, '12');
INSERT INTO `operator` VALUES (13, 'smallliang', '123456', '姚瑾春', '18612345678', 6, 0, '13');

-- ----------------------------
-- Table structure for stock
-- ----------------------------
DROP TABLE IF EXISTS `stock`;
CREATE TABLE `stock`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '仓库编号',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '名称',
  `addr` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '详细地址',
  `loc` point NULL COMMENT '经纬度',
  `deleted` tinyint(1) NULL DEFAULT 0 COMMENT '逻辑删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '仓库表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of stock
-- ----------------------------
INSERT INTO `stock` VALUES (1, '西安交大仓', '陕西省西安市碑林区咸宁西路28号西安交通大学', NULL, 0);
INSERT INTO `stock` VALUES (2, '郑州仓', '河南省郑州市', NULL, 0);
INSERT INTO `stock` VALUES (3, '太原仓', '山西省太原市', NULL, 0);
INSERT INTO `stock` VALUES (4, '北京仓', '北京市', NULL, 0);
INSERT INTO `stock` VALUES (5, '南京仓', '江苏省南京市', NULL, 0);
INSERT INTO `stock` VALUES (6, '上海仓', '上海市东方明珠', NULL, 0);

-- ----------------------------
-- Table structure for transport
-- ----------------------------
DROP TABLE IF EXISTS `transport`;
CREATE TABLE `transport`  (
  `t_num` int NOT NULL AUTO_INCREMENT COMMENT '运单编号',
  `t_id` int NULL DEFAULT NULL COMMENT '货车编号',
  `d_id` int NULL DEFAULT NULL COMMENT '司机编号',
  `w_id_from` int NULL DEFAULT NULL COMMENT '发货仓库编号',
  `w_id_to` int NULL DEFAULT NULL COMMENT '收货仓库编号',
  `depart` timestamp NULL DEFAULT NULL COMMENT '出发时间',
  `arrive` timestamp NULL DEFAULT NULL COMMENT '到达时间',
  `deleted` tinyint(1) NULL DEFAULT 0 COMMENT '逻辑删除',
  PRIMARY KEY (`t_num`) USING BTREE,
  INDEX `transport_driver_d_id_fk`(`d_id` ASC) USING BTREE,
  INDEX `transport_truck_t_id_fk`(`t_id` ASC) USING BTREE,
  INDEX `transport_warehouse_w_id_fk`(`w_id_from` ASC) USING BTREE,
  INDEX `transport_warehouse_w_id_fk_2`(`w_id_to` ASC) USING BTREE,
  CONSTRAINT `transport_driver_d_id_fk` FOREIGN KEY (`d_id`) REFERENCES `driver` (`d_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transport_truck_t_id_fk` FOREIGN KEY (`t_id`) REFERENCES `truck` (`t_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transport_warehouse_w_id_fk` FOREIGN KEY (`w_id_from`) REFERENCES `stock` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transport_warehouse_w_id_fk_2` FOREIGN KEY (`w_id_to`) REFERENCES `stock` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '运单' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of transport
-- ----------------------------
INSERT INTO `transport` VALUES (1, 1, 1, 1, 5, '2022-07-21 17:07:08', '2022-07-21 17:07:10', 0);
INSERT INTO `transport` VALUES (2, 11, 11, 6, 4, NULL, NULL, 0);
INSERT INTO `transport` VALUES (3, 12, 12, 6, 3, '2022-07-21 17:16:44', NULL, 0);
INSERT INTO `transport` VALUES (4, 3, 3, 2, 3, '2022-07-21 17:19:20', '2022-07-21 17:19:22', 0);
INSERT INTO `transport` VALUES (5, 2, 2, 1, 6, '2022-07-21 17:24:11', '2022-07-21 17:24:13', 0);
INSERT INTO `transport` VALUES (6, 2, 2, 6, 1, '2022-07-21 17:26:46', '2022-07-21 17:26:48', 0);

-- ----------------------------
-- Table structure for truck
-- ----------------------------
DROP TABLE IF EXISTS `truck`;
CREATE TABLE `truck`  (
  `t_id` int NOT NULL AUTO_INCREMENT COMMENT '货车编号',
  `num` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '车牌号',
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '车辆类型',
  `owner` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '反996物流公司' COMMENT '车辆拥有者',
  `w_id` int NULL DEFAULT NULL COMMENT '当前位于仓库',
  `state` tinyint(1) NULL DEFAULT 0 COMMENT '状态',
  `deleted` tinyint(1) NULL DEFAULT 0 COMMENT '逻辑删除',
  PRIMARY KEY (`t_id`) USING BTREE,
  INDEX `truck_warehouse_w_id_fk`(`w_id` ASC) USING BTREE,
  CONSTRAINT `truck_warehouse_w_id_fk` FOREIGN KEY (`w_id`) REFERENCES `stock` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '货车表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of truck
-- ----------------------------
INSERT INTO `truck` VALUES (1, '陕A66666', '兰博基尼', '反996物流公司', 5, 0, 0);
INSERT INTO `truck` VALUES (2, '陕A88888', '三轮车', '反996物流公司', 1, 0, 0);
INSERT INTO `truck` VALUES (3, '豫A66666', '五菱宏光', '反996物流公司', 3, 0, 0);
INSERT INTO `truck` VALUES (4, '豫A88888', '迈巴赫', '反996物流公司', 2, 0, 0);
INSERT INTO `truck` VALUES (5, '晋A66666', '帕加尼', '反996物流公司', 3, 0, 0);
INSERT INTO `truck` VALUES (6, '晋A88888', '自行车', '反996物流公司', 3, 0, 0);
INSERT INTO `truck` VALUES (7, '京A66666', '红旗', '反996物流公司', 4, 0, 0);
INSERT INTO `truck` VALUES (8, '京A88888', '解放牌大卡车', '反996物流公司', 4, 0, 0);
INSERT INTO `truck` VALUES (9, '苏A66666', '西尔贝', '反996物流公司', 5, 0, 0);
INSERT INTO `truck` VALUES (10, '苏A88888', '宾利', '反996物流公司', 5, 0, 0);
INSERT INTO `truck` VALUES (11, '沪A66666', '擎天柱', '反996物流公司', 6, 1, 0);
INSERT INTO `truck` VALUES (12, '沪A88888', '大黄蜂', '反996物流公司', 6, 1, 0);

SET FOREIGN_KEY_CHECKS = 1;
