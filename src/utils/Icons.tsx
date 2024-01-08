import { Home, ClipboardList, Tally4, Wallet } from "lucide-react";

export const Icons = {
	home: { name: "Home", icon: <Home width={20} height={20} /> },
	orders: {
		name: "Orders",
		icon: <ClipboardList width={20} height={20} />,
	},
	products: { name: "Products", icon: <Tally4 width={20} height={20} /> },
	delivery: { name: "Delivery", icon: <Tally4 width={20} height={20} /> },
	marketing: { name: "Marketing", icon: <Tally4 width={20} height={20} /> },
	analytics: { name: "Analytics", icon: <Tally4 width={20} height={20} /> },
	payments: { name: "Payments", icon: <Tally4 width={20} height={20} /> },
	tools: { name: "Tools", icon: <Tally4 width={20} height={20} /> },
	discounts: { name: "Discounts", icon: <Tally4 width={20} height={20} /> },
	audience: { name: "Audience", icon: <Tally4 width={20} height={20} /> },
	appearance: { name: "Appearance", icon: <Tally4 width={20} height={20} /> },
	plugins: { name: "Plugins", icon: <Tally4 width={20} height={20} /> },
	wallet: { name: "wallet", icon: <Wallet width={24} height={24} /> },
};

export type IconsType = keyof typeof Icons;
