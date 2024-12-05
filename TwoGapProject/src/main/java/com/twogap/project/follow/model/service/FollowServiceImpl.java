package com.twogap.project.follow.model.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.twogap.project.follow.model.mapper.FollowMapper;
import com.twogap.project.member.model.dto.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService{
	
	private final FollowMapper mapper;

	@Override
	public List<Member> searchMember(String keyword) {
		
		return mapper.searchMember(keyword);
	}
	
}
