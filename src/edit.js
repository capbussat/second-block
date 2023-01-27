
/* @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops */
/* @see https://www.npmjs.com/package/@wordpress/scripts#using-css */
/* @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit */

import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const ALLOWED_BLOCKS = [
		'core/image',
		'core/paragraph',
		'core/columns',
		'core/heading',
		'wp-gb/inner-blocks'
	];
	const BLOCKS_TEMPLATE = [
		[ 'core/image', {} ],
		[ 'core/paragraph', { placeholder: 'Image Details' } ],
	];

	//console.log(attributes);
	const blockProps = useBlockProps();

	return (
	
		<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template = { BLOCKS_TEMPLATE }
					templateLock={false}
				/>
		</div>
	);
}
