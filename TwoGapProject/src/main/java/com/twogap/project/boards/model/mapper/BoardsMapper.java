package com.twogap.project.boards.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.twogap.project.member.model.dto.Member;

@Mapper
public interface BoardsMapper {

	String viewAlert(int memberNo); 

}
