package com.twogap.project.note.contoroller;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.twogap.project.member.model.dto.Member;
import com.twogap.project.note.model.dto.Note;
import com.twogap.project.note.model.service.NoteService;

import ch.qos.logback.core.model.Model;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@RequestMapping("note")
@Slf4j
@RequiredArgsConstructor
public class NoteController {
	
	private final NoteService service;
	
	/** Note 게시글 가져오기
	 * @param memberNo
	 * @return List<Note>
	 * @author mujamuja
	 */
	@GetMapping("selectList")
	@ResponseBody
	public Map<String, Object> noteSelectList(@SessionAttribute("loginMember") Member loginMember,
									 @RequestParam(value="cp",required = false, defaultValue = "1") int cp,
									 Model model) {
		// noteList 결과 받아오기
		Map<String, Object> map = service.noteSelectList(loginMember.getMemberNo(), cp);
		 
		return map;
	}
	
}
