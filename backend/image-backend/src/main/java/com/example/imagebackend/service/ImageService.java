package com.example.imagebackend.service;

import com.example.imagebackend.dao.ImageDao;
import com.example.imagebackend.entity.Image;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageDao imageDao;

    public Image saveImage(MultipartFile file)throws IOException{
        Image image = new Image();
        image.setData(file.getBytes());
        return imageDao.save(image);
    }

    public Image getImage(Long id) {
        return imageDao.findById(id).orElseThrow();
    }

}
