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
		id: "1",
		children: [
			{
				path: "/admin/section/sectionUpdate",
				name: "现有部门管理",
				id: "1-1"
			},
			{
				path: "/admin/section/sectionCreate",
				name: "部门新增",
				id: "1-2"
			}
		]
	},
	{
		name: "品种管理",
		icon: "setting",
		path: "/admin/cropVariety",
		id: "2",
		children: [
			{
				name: "品种列表",
				path: "/admin/cropVariety/list",
				id: "2-0"
			},
			{
				name: '品种数据展示',
				path: '/admin/cropVariety/show',
				id: '2-1'
			}
		]
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
				id: "4-0"
			}
		]
	},
	{
		name: "产量管理",
		icon: "setting",
		path: "/admin/ysield",
		id: "5",
		children: [
			{
				name: "产量添加",
				icon: "setting",
				path: "/admin/addysield",
				id: "5-0"
			},
			{
				name: "产量列表",
				icon: "setting",
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
		icon: "setting",
		path: "/admin/sell",
		id: "6"
	}
];
