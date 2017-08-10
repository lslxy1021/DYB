package com.barrage;

import com.barrage.dyDanMu.DMClient;
import com.barrage.dyDanMu.KeepAlive;
import com.barrage.dyDanMu.KeepGetMsg;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class StartFirst implements CommandLineRunner {

    //设置需要访问的房间ID信息
    private static final int roomId = 138286;

    //弹幕池分组号，海量模式使用-9999
    private static final int groupId = -9999;

    @Override
    public void run(String... strings) throws Exception {
        //初始化弹幕Client
        DMClient danmuClient = DMClient.getInstance();
        //设置需要连接和访问的房间ID，以及弹幕池分组号
        danmuClient.init(roomId, groupId);

        //保持弹幕服务器心跳
        KeepAlive keepAlive = new KeepAlive();
        keepAlive.start();

        //获取弹幕服务器发送的所有信息
        KeepGetMsg keepGetMsg = new KeepGetMsg();
        keepGetMsg.start();
    }
}
