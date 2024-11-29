package com.twogap.project.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.twogap.project.member.model.dto.Member;
import com.twogap.project.member.model.mapper.MemberMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	
	private final MemberMapper mapper;
	
	@Override
		public Member selectMember(int memberNo) {
			return mapper.selectMember(memberNo);
		}

	
	

}
