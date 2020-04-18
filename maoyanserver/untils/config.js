var mongoose = require("mongoose");
var nodemailer = require('nodemailer');

var Mongoose = {
	url:'mongodb://localhost:27017/mao',
	connect(){
		mongoose.connect(this.url,{ useNewUrParser:true },(err)=>{
			if(err){
				console.log('数据库连接失败');
				return;
			}
			console.log('数据库连接成功');
		});
	}
};

var Email = {
	config:{
		host:'smtp.qq.com',
		port:465,
		auth:{
			user:'youderdad@qq.com',
			pass:'xxxxxxxxxxx'
		}
	},
	get transporter(){
		return nodemailer.createTransport(this.config);
	},
	get verify(){
		return Math.random().toString().substring(2,6);
	}
}

module.exports={
	Mongoose,
	Email
};
