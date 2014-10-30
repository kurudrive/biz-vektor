<div class="wrap biz_vektor_options">

	<h2><?php echo get_biz_vektor_name(); ?> <?php _e('高度な設定', 'biz-vektor') ?></h2>

	<?php echo $data['mess'] ?>
	<div class="fileedit-sub"></div>
<!--
	<div class="message_intro">
		<p>
			<?php _e('高度な設定の説明');?>
		</p>
	</div>
-->
	<form method="post" action="<?php echo $_SERVER['REQUEST_URI'] ?>">
		<?php wp_nonce_field( 'submit-sitemap', 'nonce-sitemap' ); ?>

		<!-- [SITEMAP] -->
		<div class="sectionBox" id="post-type">

			<h3><?php _e('サイトマップの設定', 'biz-vektor') ?></h3>

			<table class="form-table">
				<tbody>
					<tr>
						<th>
							<label for="types">
								<?php _e('追加する投稿タイプ', 'biz-vektor') ?>
							</label>
						</th>
						<td>
							<p>
								<input type="text" id="types" name="types" placeholder="service,product" value="<?php echo $data['types'] ?>" />
								&nbsp;※投稿タイプを独自で追加している場合、追加した投稿タイプをコンマで区切って入力してください。
							</p>
						</td>
					</tr>
					<tr>
						<th>
							<label for="pages"><?php _e('除外する固定ページ') ?></label>
						</th>
						<td>
							<p>
								<input type="text" id="pages" name="pages" placeholder="35,1654" value="<?php echo $data['pages'] ?>" />
								&nbsp;※サイトマップから除外したい固定ページのidをコンマで区切って入力してください。
							</p>
						</td>
					</tr>
				</tbody>
			</table>
			<p class="submit">
				<input type="submit" name="submit" id="submit" class="button button-primary" value="<?php _e('変更を保存', 'biz-vektor') ?>" />
			</p>
		</div><!-- /.sectionBox -->
		<!-- [/SITEMAP] -->

	</form><!-- end from-->



</div><!-- /.biz-vektor-options -->