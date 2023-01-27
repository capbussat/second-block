
/* @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops */
/* @see https://www.npmjs.com/package/@wordpress/scripts#using-css */
/* @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit(props) {
	const ALLOWED_BLOCKS = [
		'core/image',
		'core/paragraph',
		'core/columns',
		'core/heading',
		'wp-gb/inner-blocks'
	];
	console.log(props);
	
	return (
	
		<div { ...useBlockProps() }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
		</div>
	);
}
