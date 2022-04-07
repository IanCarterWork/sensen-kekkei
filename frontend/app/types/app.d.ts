
declare module '*.css' {
	
	const value: string;
	
	export default value
	
}

declare module '*.scss' {
	
	const value: string;
	
	export default value
	
}

declare module '*.html' {
	
	const value: string;

	export default value
	
}

declare module '*.activity' {
	
	const value: string;

	export default value
	
}



declare type AppState = SensenElementState & {
    
    appName: string
    
}



declare interface Window{

	THEME_COLOR : object
	
}



