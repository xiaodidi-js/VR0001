<?php
/*
 * 93lh 自定义右键菜单
 * ============================================================================
 * 技术支持：2015-2099 领航数码
 * 官网地址: http://www.93lh.com
 * ----------------------------------------------------------------------------
 * $Author: wanghao 26344137#qq.com $
 * $Id: bind.php 28028 2016-06-19Z yuanjiang $
*/

$plugins['custom_right_button'] = array(
		'plugin_name' => '自定义右键菜单',
		"enable" => 1,    			
		"edit_container" => "setting_group",
		"edit_sort" => 6,
		"edit_resource"=>1,
		"view_container" => "",
		"view_sort" => 2,
		"view_resource"=>1,
		"xml" => 'plugin.xml.php'
	);


?>