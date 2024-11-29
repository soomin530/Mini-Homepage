package com.twogap.project.board.controller;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.twogap.project.board.model.dto.Board;
import com.twogap.project.board.model.service.BoardService;
import com.twogap.project.member.model.dto.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


/** 게시판 목록 조회
 * 
 * */
@Controller
@RequestMapping("board")
@Slf4j
@RequiredArgsConstructor
public class BoardController {
	
	private final BoardService service;
	
	@GetMapping("selectList")
	@ResponseBody
	public Map<String, Object> boardSelectList(@SessionAttribute("loginMember") Member loginMember,
											   @RequestParam(value="cp",required = false, defaultValue = "1") int cp) {
		
		// 게시판 목록 조회 서비스 호출
		Map<String, Object> map = service.boardSelectList(loginMember.getMemberNo(), cp);
		
		log.debug("map : " + map);
		
		return map;
	}
	
	
	
	
	
		
	

}
