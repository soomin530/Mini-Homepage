package com.twogap.project.login.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.twogap.project.member.model.dto.Member;

@Mapper
public interface LoginMapper {

	/** 로그인
	 * @param memberEmail
	 * @return
	 */
	Member login(String memberId);

}
