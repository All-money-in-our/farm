export default [
	{
		name: "首页",
		icon: "home",
		path: "/admin/home",
		id: "0"
	},
	{
		name: "部门管理",
		icon: "apartment",
		path: "/admin/section",
		id: "1",
		children: [
			{
				name: "现有部门管理",
				icon: "deployment-unit",
				path: "/admin/section/sectionUpdate",
				id: "1-0"
			},
			{
				name: "部门新增",
				icon: "gateway",
				path: "/admin/section/sectionCreate",
				id: "1-2"
			}
		]
	},
	{
		name: "品种管理",
		icon: "experiment",
		path: "/admin/cropVariety",
		id: "2",
		children: [
			{
				name: "品种列表",
				icon: "database",
				path: "/admin/cropVariety/list",
				id: "2-0"
			},
			{
				name: '品种数据展示',
				icon: "setting",
				path: '/admin/cropVariety/show',
				id: '2-1'
			}
		]
	},
	{
		name: "气象管理",
		icon: "cloud",
		id: "3",
		children: [
			{
				name: "气象管理",
				icon: "cloud",
				path: "/admin/weather",
				id: "3-0",
			},
		]
	},
	{
		name: "消耗管理",
		icon: "fire",
		path: "/admin/expend",
		id: "4",
		children: [
			{
				name: "消耗统计",
				icon: "apple",
				path: "/admin/expend/text",
				id: "4-0"
			}
		]
	},
	{
		name: "产量管理",
		icon: "transaction",
		path: "/admin/ysield",
		id: "5",
		children: [
			{
				name: "产量添加",
				icon: "percentage",
				path: "/admin/addysield",
				id: "5-0"
			},
			{
				name: "产量列表",
				icon: "database",
				path: "/admin/listysield",
				id: "5-1"
			},
			{
				name: "查询列表",
				icon: "setting",
				path: "/admin/inquire",
				id: "5-2"
			}
		]
	},
	{
		name: "销售管理",
		icon: "shopping-cart",
		id: "6",
		children: [
			{
				name: "销售管理",
				icon: "shopping-cart",
				path: "/admin/sell",
				id: "6-0"
			}
		]
	}
];
