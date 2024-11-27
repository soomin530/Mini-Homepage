package com.twogap.project.note.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.springframework.stereotype.Service;

import com.twogap.project.boards.model.dto.Pagination;
import com.twogap.project.note.model.dto.Note;
import com.twogap.project.note.model.mapper.NoteMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService{
	
	private final NoteMapper mapper;
	
	// Note 게시글 목록 가져오기
	@Override
	public Map<String, Object> noteSelectList(int memberNo, int cp) {
		
		// 게시글 수 가져오기
		int listCount = mapper.getNoteListCount(memberNo);
		
		// 페이지 네이션 작업 - 메모장은 12개 표시
		Pagination pagination = new Pagination(cp, listCount, 12);
		
		int limit = pagination.getLimit();
		int offset = (cp - 1) * limit;
		RowBounds rowBounds = new RowBounds(offset, limit);
		
		// noteList 가져오기
		List<Note> noteList = mapper.noteSelectList(memberNo, rowBounds);
		
		
		// 목록 조회 결과
		Map<String, Object> map = new HashMap<>();
		
		map.put("pagination", pagination);
		map.put("noteList", noteList);
		
		return map;
	}
}
