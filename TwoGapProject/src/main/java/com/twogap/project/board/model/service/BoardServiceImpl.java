package com.twogap.project.board.model.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.twogap.project.board.model.dto.Board;
import com.twogap.project.board.model.mapper.BoardMapper;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(rollbackFor = Exception.class)
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{
	
	private final BoardMapper mapper;
	
	
	// 게시판 목록 조회
	@Override
	public List<Board> boardSelectList(int memberNo) {
		
		return mapper.boardSelectList(memberNo);
	}

}
