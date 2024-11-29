package com.twogap.project.photo.model.service;

import org.springframework.stereotype.Service;

import com.twogap.project.photo.model.mapper.PhotoMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PhotoServiceImpl implements PhotoService {

	private final PhotoMapper mapper;
	
	@Override
	public String viewPhoto(int memberNo) {
		return mapper.viewPhoto(memberNo);
	}

}
