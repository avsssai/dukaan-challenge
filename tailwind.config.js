/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: { inter: ["Inter", "sans-serif"] },
			colors: {
				navbar: "#1E2640",
				navbarAccent: "#353C53",
				blackThirty: "#4D4D4D",
				blackFifty: "#1A181E",
				grayFifty: "#808080",
				blackNinety: "#E6E6E6",
				whiteTenLightness: "#494f64",
				whiteCream: "#F2F2F2",
				blackEightFive: "#D9D9D9",
				primaryBlue: "#146EB4",
				hoverBg: "#343b53",
			},
			textColor: {
				whiteTenLightness: "#494f64",
				blackFifty: "#1A181E",
			},
			fontSize: {
				normal: "14px",
				subBody: "13px",
				subTitle: "16px",
				regular: "16px",
				body: "15px",
				caption: "12px",
				headingTwo: "20px",
				headingOne: "32px",
			},
		},
	},
	plugins: [],
};
