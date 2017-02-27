var https = require('https')
var cheerio = require('cheerio') //类似于jQury操作dom一样操作html

var url = 'https://www.lagou.com/'

function filter(html){  //过滤函数
	var $ = cheerio.load(html)  //
	var menu = $('.menu_main') //主导航
	var menuData = []
	menu.each(function(index, value) {
		var menuTitle = $(value).find('h2').text()//获取h2的文本
     	var menuLists = $(value).find('a')
     	var menuList = []
     	menuLists.each(function(index,value){
     		menuList.push($(value).text())
     	})    
     	menuData.push({
     		menuTitle:menuTitle,
     		menuList:menuList
     	})
	})
	return menuData
}

function print(menu){  //打印函数，遍历数据
	menu.forEach(function(value){
		console.log(value.menuTitle +'\n')
		value.menuList.forEach(function(value){
			console.log("-" + value)
		})
	})
}

https.get(url,function(res){
	var html = ''
	res.on('data',function(data){
		html += data
	})


	res.on('end',function(){
		//filter(html)
		//console.log(filter(html))
		print(filter(html))
	})

	res.on('error',function(err){
		console.log(err)
	})
})

//网络爬虫 只抓取静态的

