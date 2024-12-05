package com.twogap.project.note.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import com.twogap.project.boards.model.dto.BoardsImg;
import com.twogap.project.note.model.dto.Note;

@Mapper
public interface NoteMapper {
	
	/** 회원의 게시글 가져오기
	 * @param memberNo
	 * @return listCount
	 * @author mujamuja
	 */
	int getNoteListCount(int memberNo);

	/** Note 게시글 가져오기
	 * @param memberNo
	 * @return noteList
	 * @author mujamuja
	 */
	List<Note> noteSelectList(int memberNo, RowBounds rowBounds);
	
	/** 상세 조회 시 이미지 가져오기
	 * @return
	 * @author mujamuja
	 */
	List<BoardsImg> noteSelectImg(int imgBoardNo);

	/** 메모글 삽입
	 * @param note
	 * @return
	 * @author mujamuja
	 */
	int noteInsert(Note note);

	/** 게시글 첨부 이미지 정보 DB에 저장
	 * @param uploadList
	 * @return
	 * @author mujamuja
	 */
	int insertUploadList(List<BoardsImg> uploadList);
	

	/** 메모장 수정
	 * @param note
	 * @return
	 */
	int noteUpdate(Note note);
	

	/** Note 게시글 삭제
	 * @param note
	 * @return 
	 */
	int noteDelete(Note note);

	/** 게시글 이미지 갯수 구하기
	 * @param note
	 * @return
	 */
	int getNoteImg(Note note);

	/** 게시글 이미지 전체 삭제
	 * @param note
	 * @return
	 */
	int noteImgDelete(Note note);

	/** 게시글 img DB 정보 일부 수정
	 * @param img
	 * @return
	 */
	int updateImg(BoardsImg img);

	/** 게시글 img DB 정보 일부 삽입
	 * @param img
	 * @return
	 */
	int insertImg(BoardsImg img);

	/** 게시글 img DB 정보 일부 삭제
	 * @param img
	 * @return
	 */
	int deleteImg(BoardsImg img);




}
