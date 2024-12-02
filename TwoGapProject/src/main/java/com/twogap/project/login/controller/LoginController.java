package com.twogap.project.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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
	 * @author 우수민
	 */
	@PostMapping("login")
	public String login(Member inputMember,
						RedirectAttributes ra,
						Model model,
						@RequestParam(value = "remember", required = false) String remember,
						HttpServletResponse resp) {
		Member loginMember = service.login(inputMember);
		
		String path = null;
		String message = null;
		
		if(loginMember == null) {
			message = "아이디 또는 비밀번호가 일치하지 않습니다.";
			
			path = "redirect:/";
			
		} else {
			model.addAttribute("loginMember", loginMember);
			
			
			// 아이디 저장
			Cookie cookie = new Cookie("remember", loginMember.getMemberId());
			cookie.setPath("/");
			
			if(remember != null) {
				cookie.setMaxAge(60 * 60 * 24 * 30); // 30일동안 아이디 저장하겠다.
				
			} else {
				cookie.setMaxAge(0); // 0초, 클라이언트 쿠키 삭제
			}
			
			resp.addCookie(cookie);
			path = "boards/main";
		}
		
		ra.addFlashAttribute("message", message);
		
		return path;
		
	}
	
	/** 회원가입 페이지로 이동
	 * @return
	 * @author 우수민
	 */
	@GetMapping("signup")
	public String signUpPage() {
		return "member/signup";
		
	}
	
	/** 아이디 중복 검사 (비동기 요청) 
	 * @return
	 * @author 우수민
	 */
	@ResponseBody // 응답 본문(fetch 요청한 쪽)으로 돌려보냄
	@GetMapping("checkId") // Get 요청 /member/checkEmail
	public int checkId(@RequestParam("memberId")String memberId) {
		return service.checkId(memberId);
		
	}
	
	/** 이메일 유효성 검사 (비동기 요청)
	 * @param memberEmail
	 * @return
	 * @author 우수민
	 */
	@GetMapping("checkEmail")
	@ResponseBody
	public int checkEmail(@RequestParam("memberEmail")String memberEmail) {
		return service.checkEmail(memberEmail);
		
	}
	
	/** 닉네임 유효성 검사 
	 * @return 중복 1, 아니면 0
	 * @author 우수민
	 */
	@ResponseBody // 비동기 요청 쪽으로 보냄
	@PostMapping("checkNickname")
	public int checkNickname(@RequestParam("memberNickname")String memberNickname) {
		return service.checkNickname(memberNickname);
	}
	
	

	/** 회원가입 제출 - 주소, 핸드폰번호, 집전화번호 배열로 받아서 처리?
	 * @param inputMember
	 * @param Address
	 * @param memberTel
	 * @param memberHomeTel
	 * @param ra
	 * @return
	 * @author 우수민
	 */
	@PostMapping("signup")
	public String submit(/*@ModelAttribute*/ Member inputMember, 
						@RequestParam("memberAdress")String[] memberAdress,
						@RequestParam("memberTel")String[] memberTel,
						@RequestParam("memberHomeTel")String[] memberHomeTel,
						RedirectAttributes ra) { 
		
		// 회원가입 서비스 호출
		int result = service.submit(inputMember, memberAdress, memberTel, memberHomeTel); // 데이터 가공 
		
		String path = null;
		String message = null;
		
		if(result > 0) { // 삽입 성공
			
			message = inputMember.getMemberNickname() + "님의 가입을 환영합니다!";
			path = "/"; // 메인페이지로 재요청 
			
		} else { // 실패
			
			message = "회원 가입 실패...";
			path = "signup";
			
		}
		
		ra.addFlashAttribute("message", message);  // request scope로 데이터 전달
		
		return"redirect:" + path; 
		// 성공 -> redirect:/
		// 실패 -> redirect:signup (상대경로)
					// 현재 주소 /member/signup (GET 방식 요청)
					// 가장 마지막 경로인 signup만 갈아끼움!
	}

}
