package com.twogap.project.boards.model.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class BoardsImg {
	
	private int imgNo;
	private String imgPath;
	private String imgOriginalName;
	private String imgRename;
	private int imgOrder;
	private int imgBoardNo;
	private int boardTypeNo;

	private MultipartFile uploadFile;
}
