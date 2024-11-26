package com.twogap.project.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.twogap.project.login.model.service.LoginService;
import com.twogap.project.member.model.dto.Member;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@SessionAttributes({"loginMember"})
@Controller
@Slf4j
@RequestMapping("member")
public class LoginController {
	
	@Autowired
	private LoginService service;
	
	/** 로그인
	 * @param inputMember
	 * @param ra
	 * @param model
	 * @return
	 */
	@PostMapping("login")
	public String login(Member inputMember,
						RedirectAttributes ra,
						Model model,
						@RequestParam(value = "remember", required = false) String remember,
						HttpServletResponse resp) {
		Member loginMember = service.login(inputMember);
		log.debug("loginMember : " + loginMember);
		
		if(loginMember == null) {
			ra.addFlashAttribute("message", "아이디 또는 비밀번호가 일치하지 않습니다.");
			
		} else {
			model.addAttribute("loginMember", loginMember);
			
			
			// 아이디 저장
			Cookie cookie = new Cookie("remember", loginMember.getMemberId());
			cookie.setPath("/");
			
			if(remember != null) {
				cookie.setMaxAge(60 * 60 * 24 * 30); // 30일 
				
			} else {
				cookie.setMaxAge(0); // 0초 (클라이언트 쿠키 삭제) 
			}
			
			resp.addCookie(cookie);
		}
		
		return "boards/main";
		
	}
	
	/** 회원가입 페이지로 이동
	 * @return
	 */
	@GetMapping("signup")
	public String signUpPage() {
		return "member/signup";
		
	}

}
