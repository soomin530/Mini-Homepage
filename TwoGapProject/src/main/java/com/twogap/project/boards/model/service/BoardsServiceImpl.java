package com.twogap.project.boards.model.service;

import org.springframework.stereotype.Service;

import com.twogap.project.boards.model.mapper.BoardsMapper;
import com.twogap.project.member.model.dto.Member;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardsServiceImpl implements BoardsService {

	private final BoardsMapper mapper;
	
	@Override
	public String viewAlert(int memberNo) {
		return mapper.viewAlert(memberNo);
	}

	@Override
	public int alertUpdate(Member member) {
		return mapper.updateAlert(member);
	}


}
