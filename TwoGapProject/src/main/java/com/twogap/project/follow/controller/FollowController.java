package com.twogap.project.follow.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.twogap.project.follow.model.service.FollowService;
import com.twogap.project.member.model.dto.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("follow")
public class FollowController {
	
	public final FollowService service;
	
	/** 게시판으로 이동
	 * @return
	 * @author 신동국
	 */
	@GetMapping("main")
	public String followMain() {
		return "follow/followbox";
	}
	
	/** 검색 창에 닉네임이 포한되는 유저 검색
	 * @param keyword
	 * @return
	 * @author 신동국
	 */
	@ResponseBody
	@GetMapping("search")
	public List<Member> searchList(@RequestParam("searchName") String keyword) {
		return service.searchMember(""); // 전달 인자 keyword 줘야함 잊지말기
//		return service.searchMember(keyword);
	}
}
