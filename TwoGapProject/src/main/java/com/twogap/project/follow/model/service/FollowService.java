package com.twogap.project.follow.model.service;

import java.util.List;

import com.twogap.project.member.model.dto.Member;

public interface FollowService {

	List<Member> searchMember(String keyword);

}
