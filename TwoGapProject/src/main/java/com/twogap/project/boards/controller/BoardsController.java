package com.twogap.project.boards.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.twogap.project.boards.model.service.BoardsService;
import com.twogap.project.member.model.dto.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("boards")
@Slf4j
@RequiredArgsConstructor
@SessionAttributes({"loginMember"})
public class BoardsController {
	
	private final BoardsService service;
	
	@ResponseBody
	@GetMapping("selectAlert")
	public String viewAlert(@SessionAttribute ("loginMember") Member loginMember) {
		int memberNo = loginMember.getMemberNo(); 
		return service.viewAlert(memberNo);
	}
}
