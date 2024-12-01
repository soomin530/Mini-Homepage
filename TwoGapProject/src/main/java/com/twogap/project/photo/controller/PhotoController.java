package com.twogap.project.photo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.twogap.project.member.model.dto.Member;
import com.twogap.project.photo.model.service.PhotoService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("boards")
@Slf4j
@RequiredArgsConstructor
@SessionAttributes({"loginMember"})
public class PhotoController {
	
	private final PhotoService service;
	
	@GetMapping("main")
	public String photoMain(@SessionAttribute("loginMember") Member loginMember) {
		int memberNo = loginMember.getMemberNo();
//		return service.viewPhoto(memberNo);
		return "";
	}
	
	

}
