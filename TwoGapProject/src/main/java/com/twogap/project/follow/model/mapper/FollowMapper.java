package com.twogap.project.follow.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.twogap.project.member.model.dto.Member;

@Mapper
public interface FollowMapper {

	List<Member> searchMember(String keyword);

}
