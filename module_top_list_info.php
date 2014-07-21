<?php
/*-------------------------------------------*/
/*	info
/*-------------------------------------------*/
global $biz_vektor_options;
print '<pre>';print_r($biz_vektor_options);print '</pre>';
$loop = new WP_Query( array( 'post_type' => 'info', 'posts_per_page' => 5, ) ); ?>
<?php if ($loop->have_posts()) : ?>
<div id="topInfo" class="infoList">
<h2><?php echo esc_html($biz_vektor_options['infoLabelName']); ?></h2>
<div class="rssBtn"><a href="<?php echo home_url(); ?>/feed/?post_type=info" id="infoRss" target="_blank">RSS</a></div>
<?php
if ( isset($biz_vektor_options['listInfoTop']) &&  $biz_vektor_options['listInfoTop'] == 'listType_set' ) { ?>
	<?php while ( $loop->have_posts() ) : $loop->the_post();?>
		<?php get_template_part('module_loop_post2'); ?>
	<?php endwhile ?>
<?php } else { ?>
	<ul class="entryList">
	<?php while ( $loop->have_posts() ) : $loop->the_post();?>
		<?php get_template_part('module_loop_post'); ?>
	<?php endwhile; ?>
	</ul>
<?php } ?>
</div><!-- [ /#topInfo ] -->
<?php endif;?>
<?php wp_reset_query();?>