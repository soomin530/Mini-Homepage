package com.twogap.project.follow.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.twogap.project.member.model.dto.Member;

@Mapper
public interface FollowMapper {

	/** 닉네임으로 유저 검색
	 * @param map
	 * @return
	 */
	List<Member> searchMember(Map<String, Object> map);

	/** 팔로우 해제
	 * @param map
	 * @return
	 */
	int unFollow(Map<String, Integer> map);

}
