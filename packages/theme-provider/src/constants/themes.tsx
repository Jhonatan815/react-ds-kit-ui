import type { DefaultTheme } from "styled-components"

export interface IColors {
	primary?: string
	secondary?: string
	success?: string
	danger?: string
}

export interface ISpacing {
	small?: string
	medium?: string
	large?: string
	extraLarge?: string
}

declare module "styled-components" {
	export interface DefaultTheme {
		colors: IColors
		spacing: ISpacing
	}
}

export const defaultTheme: DefaultTheme = {
	colors: {
		primary: "#007bff",
		secondary: "#6c757d",
		success: "#28a745",
		danger: "#dc3545",
	},
	spacing: {
		small: "4px",
		medium: "8px",
		large: "16px",
		extraLarge: "62px",
	},
}
