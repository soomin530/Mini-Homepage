package com.twogap.project.email.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface EmailMapper {

	/** 기존 이메일에 대한 인증키 수정
	 * @param map
	 * @return
	 */
	int updateAuthKey(Map<String, String> map);

	/** 이메일, 인증번호 삽입
	 * @param map
	 * @return
	 */
	int insertAuthKey(Map<String, String> map);

	/** 입력받은 이메일, 인증번호 DB에 있는지 조회
	 * @param map 
	 * @return
	 */
	int checkAuthKey(Map<String, String> map);
 
}
