package com.barrage.controller;

import com.barrage.domain.DMRepository;
import com.barrage.domain.DanMu;
import com.barrage.dyDanMu.DMClient;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class DMController {

    @Autowired
    private DMRepository dmRepository;

    private static String preName = "";

    @GetMapping(value = "/danmu")
    public String highCharts() {
        return "dyDanMu";
    }

    @PostMapping("/add")
    @ResponseBody
    public String danMuAdd() {
        Map<String, String> user = new HashMap<>();
        DanMu danMu = new DanMu();
        String userName = DMClient.getName();
        String userText = DMClient.getText();
        danMu.setName(userName);
        danMu.setText(userText);

        if(userName == null)
            return null;
        if (userName.equals(preName)) {
            return null;
        }
        preName = userName;
        dmRepository.save(danMu);
        Gson gson = new Gson();
        user.put("name", userName);
        user.put("text", userText);
        String gsonStr = gson.toJson(user);
        return gsonStr;
    }
}
