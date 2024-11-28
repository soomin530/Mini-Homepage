package com.twogap.project.note.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

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


}
