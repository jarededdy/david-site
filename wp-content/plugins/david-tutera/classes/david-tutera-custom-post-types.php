<?php

// class VSGRegisterPostTypes {

//     public function __construct() {
//         add_action('init', array($this, 'register'));
//         add_action('init', array($this, 'taxonomies_vsg_portfolio')); 
//         // add_action('init', array($this, 'vsg_portfolio_init')); 
//         //add_action( 'init', array($this, 'create_book_taxonomies'));     
//     }
    

//     public function register() {
//         register_post_type( 'VSG Portfolio',

//             $labels = array(
//                 'labels' => array(
//                     'name' => __( 'VSG Portfolio' ),
//                     'singular_name' => __( 'Work' )
//                 ),
//                 'public' => true,
// 				'has_archive' => 'VSG Portfolio',
// 				'hierarchical' => true,
//                 'rewrite' => array('slug' => 'vsgportfolio'),
//                 'supports' => array( 'title','thumbnail' )
//             )
//         );
        
//     }
  
//     public function taxonomies_vsg_portfolio() {

//         $labels = array(
//             'name'              => _x( 'Work Types ', 'taxonomy general name', 'textdomain' ),
//             'singular_name'     => _x( 'Work Type', 'taxonomy singular name', 'textdomain' ),
//             'search_items'      => __( 'Search Work Types', 'textdomain' ),
//             'all_items'         => __( 'All Work Types', 'textdomain' ),
//             'parent_item'       => __( 'Parent Work Type', 'textdomain' ),
//             'parent_item_colon' => __( 'Parent Work Type:', 'textdomain' ),
//             'edit_item'         => __( 'Edit Work Type', 'textdomain' ),
//             'update_item'       => __( 'Update Work Type', 'textdomain' ),
//             'add_new_item'      => __( 'Add New Work Type', 'textdomain' ),
//             'new_item_name'     => __( 'New Work Type Name', 'textdomain' ),
//             'menu_name'         => __( 'Work Types', 'textdomain' ),
//         );
    
//         $args = array(
//             'hierarchical'      => true,
//             'labels'            => $labels,
//             'show_ui'           => true,
//             'show_admin_column' => true,
//             'query_var'         => true,
//             'rewrite'           => array( 'slug' => 'work_type' )
//         );
        
//         register_taxonomy( 'work_type', 'vsgportfolio', $args );
//     }
    
    
// }

// $vsgPortfolio = new VSGRegisterPostTypes();
