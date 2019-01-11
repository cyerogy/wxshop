<?php
use \Workerman\Worker;
require_once __DIR__ . '/vendor/autoload.php';

// 创建一个Worker监听2345端口，使用http协议通讯
$http_worker = new Worker("http://0.0.0.0:2345");

// 启动4个进程对外提供服务
$http_worker->count = 4;

//建立连接时发生的事件
$http_worker->onConnect = function($connection)
{
    echo "IP:".$connection->getRemoteIp();
};
// 接收到浏览器发送的数据时回复hello world给浏览器
$http_worker->onMessage = function($connection, $data)
{
    //给在线的所有人员均发送信息
	foreach($connection->worker->connections as $con)
    {
    	if(!empty($data)){
    		$con->send($data);
    	}
    }
};

// 运行worker
Worker::runAll();