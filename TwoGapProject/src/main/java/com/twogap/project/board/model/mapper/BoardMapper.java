package com.twogap.project.board.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.twogap.project.board.model.dto.Board;

@Mapper
public interface BoardMapper {

	/** 게시판 목록 조회
	 * @param memberNo
	 * @return boardList
	 */
	List<Board> boardSelectList(int memberNo);

}
