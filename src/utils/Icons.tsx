import {
	Home,
	ClipboardList,
	Tally4,
	Wallet,
	Truck,
	Volume2,
	BarChartBig,
	BadgeDollarSign,
	MousePointer2,
	BadgePercent,
	Users,
	Palette,
	Zap,
} from "lucide-react";

export const Icons = {
	home: { name: "Home", icon: <Home width={20} height={20} /> },
	orders: {
		name: "Orders",
		icon: <ClipboardList width={20} height={20} />,
	},
	products: { name: "Products", icon: <Tally4 width={20} height={20} /> },
	delivery: { name: "Delivery", icon: <Truck width={20} height={20} /> },
	marketing: { name: "Marketing", icon: <Volume2 width={20} height={20} /> },
	analytics: {
		name: "Analytics",
		icon: <BarChartBig width={20} height={20} />,
	},
	payments: {
		name: "Payments",
		icon: <BadgeDollarSign width={20} height={20} />,
	},
	paymentsSolid: {
		name: "Payments",
		icon: <BadgeDollarSign width={20} height={20} fill='#FFFFFF' />,
	},
	tools: { name: "Tools", icon: <MousePointer2 width={20} height={20} /> },
	discounts: {
		name: "Discounts",
		icon: <BadgePercent width={20} height={20} />,
	},
	audience: { name: "Audience", icon: <Users width={20} height={20} /> },
	appearance: {
		name: "Appearance",
		icon: <Palette width={20} height={20} />,
	},
	plugins: { name: "Plugins", icon: <Zap width={20} height={20} /> },
	wallet: { name: "wallet", icon: <Wallet width={24} height={24} /> },
};

export type IconsType = keyof typeof Icons;
