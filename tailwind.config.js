/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				navbar: "#1E2640",
				navbarAccent: "#353C53",
				blackThirty: "#4D4D4D",
				blackFifty: "#1A181E",
				grayFifty: "#808080",
				blackNinety: "#E6E6E6",
				whiteTenLightness: "#494f64",
			},
			textColor: {
				whiteTenLightness: "#494f64",
			},
			fontSize: {
				normal: "14px",
				subBody: "13px",
				subTitle: "16px",
			},
		},
	},
	plugins: [],
};
