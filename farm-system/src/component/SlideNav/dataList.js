export default [
	{
		name: "首页",
		icon: "home",
		path: "/admin/home",
		id: "0"
	},
	{
		name: "部门管理",
		icon: "reddit",
		path: "/admin/section",
		id: "1"
	},
	{
		name: "品种管理",
		icon: "setting",
		path: "/admin/cropVariety",
		id: "2"
	},
	{
		name: "气象管理",
		icon: "setting",
		path: "/admin/weather",
		id: "3"
	},
	{
		name: "消耗管理",
		icon: "fire",
		path: "/admin/expend",
		id: "4",
		children: [
			{
				name: "文本编辑器",
				icon: "apple",
				path: "/admin/expend/text",
				id: "05"
			}
		]
	},
	{
		name: "产量管理",
		icon: "setting",
		path: "/admin/ysield",
		id: "5"
	},
	{
		name: "销售管理",
		icon: "setting",
		path: "/admin/sell",
		id: "6"
	}
];
