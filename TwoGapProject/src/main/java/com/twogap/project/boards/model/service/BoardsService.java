package com.twogap.project.boards.model.service;

import com.twogap.project.member.model.dto.Member;

public interface BoardsService {

	String viewAlert(int memberNo);


	int alertUpdate(Member member);



}
