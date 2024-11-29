package com.twogap.project.email.service;

import java.util.Map;

public interface EmailService {

	/** 이메일 전송
	 * @param string
	 * @param email
	 * @return
	 * @author 우수민
	 */
	String sendEmail(String string, String email);

	/** 입력받은 이메일, 인증번호 DB에 있는지 조회
	 * @param map
	 * @return
	 * @author 우수민
	 */
	int checkAuthKey(Map<String, String> map); 

}
