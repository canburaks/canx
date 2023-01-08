// import type * as Stitches from '@stitches/react';
import { css, styled } from '../stitches.config';

export const Box = styled('div', {});

const flexboxVariants = css({
	variants: {
		position: {
			absolute: { position: 'absolute' },
			relative: { position: 'relative' },
			fixed: { position: 'fixed' },
			sticky: { position: 'sticky' },
		},
		direction: {
			column: { flexDirection: 'column' },
			col: { flexDirection: 'column' },
			columnReverse: { flexDirection: 'column-reverse' },
			row: { flexDirection: 'row' },
			rowReverse: { flexDirection: 'row-reverse' },
		},
		wrap: {
			wrap: { flexWrap: 'wrap' },
			nowrap: { flexWrap: 'nowrap' },
		},
		justify: {
			start: { justifyContent: 'flex-start' },
			around: { justifyContent: 'space-around' },
			between: { justifyContent: 'space-between' },
			end: { justifyContent: 'flex-end' },
			center: { justifyContent: 'center' },
		},
		items: {
			start: { alignItems: 'flex-start' },
			end: { alignItems: 'flex-end' },
			center: { alignItems: 'center' },
			stretch: { alignItems: 'streth' },
		},
		width: {
			full: { width: '100%' },
      screen:{width: "100vw"},
			auto: { width: 'auto' },
		},
		maxWidth: {
			screen: { maxWidth: '100vw' },
			full: { maxWidth: '100%' },
		},
		height: {
			full: { height: '100%' },
			screen: { height: '100vh' },
			auto: { height: 'auto' },
		},
		maxHeight: {
			screen: { maxWidth: '100vh' },
			full: { maxWidth: '100%' },
		},
		type: {
			cover: {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			},
			centered: {
				justifyContent: 'center',
				alignItems: 'center',
			},
		},
	},
});
// s
// type styleType = {
// 	display: Stitches.CSS;
// 	position: Stitches.CSS;
// 	variants: FlexBoxVariants;
// };
const style = css({
	display: 'flex',
	position: 'relative',
});

export const FlexBox = styled('div', style, flexboxVariants);
