-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 04 月 01 日 09:44
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `wandemall`
--

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(50) collate utf8_unicode_ci NOT NULL,
  `password` varchar(20) collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `username_2` (`username`),
  UNIQUE KEY `username_3` (`username`),
  KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=37 ;

--
-- 导出表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(19, '17713613386', 'ccs123456'),
(24, '13795726673', 'ccs123456'),
(27, '13100998877', 'ccs123456'),
(28, '13200998877', 'ccs123456'),
(29, '13300998877', 'ccs123456'),
(30, '13400998877', 'ccs123456'),
(31, '13500998877', 'ccs123456'),
(32, '13600998877', 'ccs123456'),
(33, '13800998877', 'ccs123456'),
(34, '13700998877', 'ccs123456'),
(35, '14415517722', 'ccs123456'),
(36, '15516617788', 'ccs123456');
