
package com.twogap.project.email.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.twogap.project.email.service.EmailService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("email")
@RequiredArgsConstructor
@Slf4j
public class EmailController {
	
	private final EmailService service;
	
	/**
	 * @param email
	 * @return
	 * @author 우수민
	 */
	@ResponseBody
	@PostMapping("signup")
	public int signup(@RequestBody String email) { 
		
		String authKey = service.sendEmail("signup", email);
		
		if(authKey != null) {
			return 1;
		}
		
		return 0;
		
	}
	
	/** 입력받은 이메일, 인증번호 DB에 있는지 조회
	 * @param map
	 * @return
	 * @author 우수민
	 */
	@ResponseBody
	@PostMapping("checkAuthKey")
	public int checkAuthKey(@RequestBody Map<String, String> map) {
		return service.checkAuthKey(map);
	}

}
