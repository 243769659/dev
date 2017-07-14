var events = require("events");
var eventEmitter = new events.EventEmitter();

//on 绑定事件  emit 触发事件
var connectHandler = function() {
	console.log('连接成功');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function(){
	console.log("数据连接成功");
});

eventEmitter.emit('connection');
console.log("执行完毕");
