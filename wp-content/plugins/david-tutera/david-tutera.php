<?php
/**
 * Plugin Name: David Tutera
 * Description: Custom functionality and styles for the David Tutera Website.
 * Version: 1.0.0
 * Author: Jared Eddy
 * Author URI: http://jarededdy.io
 */

require_once "classes/david-tutera-custom-post-types.php";
 
class DavidTuteraCustomization {

    public function __construct() {

        // Add Javascript and CSS for front-end display
        add_action('wp_enqueue_scripts', array($this,'enqueue'));

        // add_action('init', [$this, 'register']);
    }

    // This is an example of enqueuing a JavaScript file and a CSS file for use on the front end display
    public function enqueue() {
         	wp_enqueue_script('david-tutera-custom-scripts', plugins_url('js/custom-scripts.js', __FILE__), ['jquery', 'elementor-frontend'], false, true);
        wp_enqueue_style('davdi-tutera-custom-styles', plugins_url('css/style.min.css', __FILE__), null, '1.0');
    }

    

}

// Create an instance of our class to kick off the whole thing
$DavidTutera = new DavidTuteraCustomization();
