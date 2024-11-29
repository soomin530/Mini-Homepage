package com.twogap.project.login.model.service;

import com.twogap.project.member.model.dto.Member;

public interface LoginService {

	/** 로그인
	 * @param inputMember
	 * @return
	 * @author 우수민
	 */
	Member login(Member inputMember);

	/** 아이디 중복 검사
	 * @param memberId
	 * @return
	 * @author 우수민
	 */
	int checkId(String memberId);

	/** 이메일 유효성 검사 
	 * @param memberEmail
	 * @return
	 * @author 우수민
	 */
	int checkEmail(String memberEmail);    
	
	/** 닉네임 유효성 검사 
	 * @param memberNickname
	 * @return
	 * @author 우수민
	 */
	int checkNickname(String memberNickname);

	/** 회원가입 
	 * @param inputMember
	 * @param memberAddress
	 * @return 
	 * @author 우수민
	 * @param memberHomeTel 
	 * @param memberTel 
	 */
	int submit(Member inputMember, String[] Address, String[] memberTel, String[] memberHomeTel);


}
