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

	/* { "backgroundColor":"tertiary", "textColor":"contrast"} */
	const BLOCKS_TEMPLATE = [ [ 'core/group', {}, 
			[
				[ 'core/image'    ,  ],
				[ 'core/paragraph', { "placeholder": 'Image Details'}],
				[ 'core/paragraph', { "placeholder": 'A footer',  }],
			] /* array at the end of core/group */
		] /* core/group */
	 ]; /* template */


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
