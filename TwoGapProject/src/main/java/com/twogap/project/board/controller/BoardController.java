package com.twogap.project.board.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.twogap.project.board.model.dto.Board;
import com.twogap.project.board.model.service.BoardService;
import com.twogap.project.member.model.dto.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


// 게시판 목록 조회
@Controller
@RequestMapping("board")
@Slf4j
@RequiredArgsConstructor
public class BoardController {
	
	private final BoardService service;
	
	@GetMapping("selectList")
	@ResponseBody
	public List<Board> boardSelectList(@SessionAttribute("loginMember") Member loginMember) {
		
		// 게시판 목록 조회 서비스 호출
		List<Board> boardList = service.boardSelectList(loginMember.getMemberNo());
		
		
		return boardList;
	}
	
	
	
// 게시판 상세 조회	

	@GetMapping("{boardTypeNo:[0-9]+}/{boardNo:[0-9]+}")
	public String boardDetail(@PathVariable("boardTypeNo") int boardTypeNo,
						  	  @PathVariable("boardNo") int boardNo,
						      Model model,
		                      RedirectAttributes ra ) {
	
	
	return null;
	
	
}
	
	
	
	
	

}
