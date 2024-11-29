package com.twogap.project.board.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.twogap.project.board.model.dto.Board;
import com.twogap.project.board.model.mapper.BoardMapper;
import com.twogap.project.boards.model.dto.Pagination;
import com.twogap.project.note.model.dto.Note;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(rollbackFor = Exception.class)
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{
	
	private final BoardMapper mapper;
	
	
	// 게시판 목록 조회
	@Override
	public Map<String, Object> boardSelectList(int memberNo, int cp) {
		
		// 게시글 수 가져오기
		int listCount = mapper.getBoardListCount(memberNo);
		
		// 페이지 네이션 작업
		Pagination pagination = new Pagination(cp, listCount, 10);
		
		int limit = pagination.getLimit();
		int offset = (cp - 1) * limit;
		RowBounds rowBounds = new RowBounds(offset, limit);
		
		// boardList 가져오기
		List<Board> boardList = mapper.boardSelectList(memberNo, rowBounds);
		
		
		// 목록 조회 결과
		Map<String, Object> map = new HashMap<>();
		
		map.put("pagination", pagination);
		map.put("boardList", boardList);
		
		return  map;
	}

	
	

}
