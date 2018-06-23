const Bar = () => import(/* webpackChunkName: "bar" */ './components/Bar');

export default [
	{
		path: '/',
		component: { template: '<div>home</div>' },
	},
	{
		path: '/foo',
		component: { template: '<div>foo</div>' },
	},
	{
		path: '/bar',
		component: Bar,
		children: [
			{
				path: '',
				component: { template: '<div>bar home</div>' },
			},
			{
				path: 'about',
				component: { template: '<div>about bar</div>' },
			},
			{
				path: 'contact',
				component: { template: '<div>contact bar</div>' },
			}
		]
	},
	{
		path: '*',
		component: { template: '<div>page not found</div>' },
	},
];
