import { createGlobalStyle, styled } from 'styled-components'

export default createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video,button {
		margin: 0;
		padding: 0;
		border: none;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	button{
		background: none;
		border: none;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	* {
		box-sizing: border-box;
	}
	`

export const Container = styled.div`
  align-items: center;
  background-color: beige;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): string => theme.spacing.s};
  margin: 0 auto;
  padding: ${({ theme }): string => theme.spacing.s};
  width: 50%;
`

export const Title = styled.h1`
  color: ${({ theme }): string => theme.colors.primary};
  font-size: ${({ theme }): string => theme.spacing['2xl']};
`
export const Paragraph = styled.p`
  color: ${({ theme }): string => theme.colors.secondary};
  font-size: ${({ theme }): string => theme.spacing.m};
`
