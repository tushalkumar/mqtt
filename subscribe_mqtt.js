const mqtt = require('mqtt')

const client = mqtt.connect('mqtt://192.168.123.100')

client.on("connect",function () {
	console.log("connection connected")
	client.subscribe("testTopic",{qos:1})	
})

