package com.twogap.project.board.model.service;

import java.util.List;

import com.twogap.project.board.model.dto.Board;

public interface BoardService {

	/** 게시판 목록 조회
	 * @param memberNo
	 * @return boardList
	 */
	List<Board> boardSelectList(int memberNo);

}
