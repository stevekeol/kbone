module.exports = {	
	origin: 'https://test.miniprogram.com',	
	entry: '/',	
	router: {		
		page1: ['/page1.html'],
		page2: ['/page2.html'],
		page3: ['/page3.html'],
	},	
	redirect: {		
		notFound: 'page1',		
		accessDenied: 'page1',
	},
	runtime: {
		cookieStore: 'globalstorage',
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},
	projectConfig: {
		appid: '',
        projectname: 'kbone-demo25',
	},
	packageConfig: {
		author: 'wechat-miniprogram',
	},
}