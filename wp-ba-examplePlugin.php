<?php

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/* also read https://codex.wordpress.org/Writing_a_Plugin */

/*

Plugin Name: BA Example Plugin
Description: A Babyartikel.de example plugin
Version: 2019-06-04
Author: Philipp Paul
Author URI: https://www.babyartikel.de/magazin

Example shortcode: [myExampleShortcode product="apple"]

*/

/* Plugin-Code UNTERhalb dieser Zeile */

function sswFunction($atts) {

	$attributes = shortcode_atts( array (
        	'selected_week' => 1
    	), $atts );

  // uncomment for production
	wp_enqueue_style( 'bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' );

	wp_enqueue_script('ssw-tap-js', plugin_dir_url(__FILE__) . 'js/jquery.tap.min.js', array('jquery'), '1.0');
	wp_enqueue_script('ssw-js', plugin_dir_url(__FILE__) . 'js/main.js', array('jquery'), '1.0');
  wp_enqueue_style( 'ssw-css', plugin_dir_url(__FILE__) . 'css/main.css' );

  $imagePath = plugin_dir_url(__FILE__);
	$selectedWeek = '1';

	if (isset($attributes['selected_week']) && is_numeric($attributes['selected_week'])) {
	  $selectedWeek = $attributes['selected_week'];
	}

	if (isset($_GET['ssw']) && is_numeric($_GET['ssw'])) {
	    $selectedWeek = $_GET['ssw'];
	}

	$result = include __DIR__ . '/template/index.php';
	return $result;
};

add_shortcode( 'SSW', 'sswFunction' );

/* Plugin-Code OBERhalb dieser Zeile */

 ?>
