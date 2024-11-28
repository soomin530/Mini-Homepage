package com.twogap.project.login.model.service;

import com.twogap.project.member.model.dto.Member;

public interface LoginService {

	/** 로그인 <- 우수민 진행
	 * @param inputMember
	 * @return
	 */
	Member login(Member inputMember);

	/** 아이디 중복 검사 <- 우수민 진행
	 * @param memberId
	 * @return
	 */
	int checkId(String memberId);

	/** 이메일 유효성 검사 <- 우수민 진행
	 * @param memberEmail
	 * @return
	 */
	int checkEmail(String memberEmail);    
	
	/** 닉네임 유효성 검사 <- 우수민 진행
	 * @param memberNickname
	 * @return
	 */
	int checkNickname(String memberNickname);

	/** 회원가입 <- 우수민 진행
	 * @param inputMember
	 * @param memberAddress
	 * @return 
	 */
	int signup(Member inputMember, String[] Address);


}
