package com.twogap.project.note.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.twogap.project.boards.model.dto.BoardsImg;
import com.twogap.project.note.model.dto.Note;

public interface NoteService {

	/** Note 게시글 가져오기
	 * @param memberNo
	 * @return noteList
	 * @author mujamuja
	 */
	Map<String, Object> noteSelectList(int memberNo, int cp);
	
	/** 게시글 이미지 가져오기
	 * @return
	 */
	List<BoardsImg> noteSelectImg(int noteNo);

	/** Note 게시글 삽입
	 * @param memberNo
	 * @param note
	 * @param images
	 * @return result
	 * @author mujamuja
	 */
	int noteInsert(Note note, List<MultipartFile> images) throws Exception;
	
	/** Note 게시글 수정
	 * @param images
	 * @param note
	 * @return result
	 * @author mujamuja
	 */
	int noteUpdate(List<MultipartFile> images, Note note) throws Exception;

	/** Note 게시글 삭제
	 * @param note
	 * @return
	 */
	int noteDelete(Note note);



}
