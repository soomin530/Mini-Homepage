package com.twogap.project.note.model.service;

import java.util.List;
import java.util.Map;

import com.twogap.project.note.model.dto.Note;

public interface NoteService {

	/** Note 게시글 가져오기
	 * @param memberNo
	 * @return noteList
	 * @author mujamuja
	 */
	Map<String, Object> noteSelectList(int memberNo, int cp);

}
