package com.twogap.project.login.model.service;

import com.twogap.project.member.model.dto.Member;

public interface LoginService {

	/** 로그인 
	 * @param inputMember
	 * @return
	 */
	Member login(Member inputMember); 

}
