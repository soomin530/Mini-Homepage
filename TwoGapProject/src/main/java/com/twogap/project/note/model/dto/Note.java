package com.twogap.project.note.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Note {
	private int noteNo;
	private String noteContent;
	private String noteColor;
	private String noteDate;
	private String noteUpdateDate;
	private int memberNo;
}
