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
		[ 'core/image'    , { "backgroundColor":"tertiary", "textColor":"contrast"} ],
		[ 'core/paragraph', { "placeholder": 'Image Details', "backgroundColor":"tertiary","textColor":"contrast"} ],
		[ 'core/paragraph', { "placeholder": 'A footer', "backgroundColor":"tertiary","textColor":"contrast" }],
	];

	//console.log(attributes);"
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
