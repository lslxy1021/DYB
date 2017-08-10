package com.barrage.dyDanMu;

import org.apache.commons.lang3.StringUtils;

import java.util.HashMap;
import java.util.Map;

public class MsgView {

	private Map<String, Object> messageList;

	public MsgView(String data){
		this.messageList = parseRespond(data);
	}
	
	/**
	 * 获取弹幕信息对象
	 * @return
	 */
	public Map<String, Object> getMessageList() {
		return messageList;
	}

	/**
	 * 设置弹幕信息对象
	 * @param messageList
	 */
	public void setMessageList(Map<String, Object> messageList) {
		this.messageList = messageList;
	}

	/**
	 * 解析弹幕服务器接收到的协议数据
	 * @param data
	 * @return
	 */
	public Map<String, Object> parseRespond(String data){
		Map<String, Object> rtnMsg = new HashMap<String, Object>();
		
		//处理数据字符串末尾的'/0字符'
		data = StringUtils.substringBeforeLast(data, "/");
		
		//对数据字符串进行拆分
		String[] buff = data.split("/");
		
		//分析协议字段中的key和value值
		for(String tmp : buff){
			//获取key值
			String key = StringUtils.substringBefore(tmp, "@=");
			//获取对应的value值
			Object value = StringUtils.substringAfter(tmp, "@=");
			
			//如果value值中包含子序列化值，则进行递归分析
			if(StringUtils.contains((String)value, "@A")){
				value = ((String)value).replaceAll("@S", "/").replaceAll("@A", "@");
				value = this.parseRespond((String)value);
			}
			
			//将分析后的键值对添加到信息列表中
			rtnMsg.put(key, value);
		}
		
		return rtnMsg;
		
	}
	
	/**
	 * 调试信息输出
	 * @return
	 */
	public String printStr() {
        return messageList.toString();
    }

}
