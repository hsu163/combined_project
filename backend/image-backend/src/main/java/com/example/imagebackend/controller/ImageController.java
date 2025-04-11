package com.example.imagebackend.controller;

import com.example.imagebackend.entity.Image;
import com.example.imagebackend.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@RestController
@RequestMapping("/images")
@CrossOrigin("*")
@RequiredArgsConstructor
public class ImageController {
    private final ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile file) throws IOException {
        Image image = imageService.saveImage(file);
        return ResponseEntity.ok("Image save with id:"+image.getId().toString());
    }

    @GetMapping("{/id}")
    public ResponseEntity<String> getImage(@PathVariable Long id){
        try{
            Image image = imageService.getImage(id);
            String base64Image = Base64.getEncoder().encodeToString(image.getData());
            return new ResponseEntity<>("{\}")
        }catch(Exception e){
            return ResponseEntity.notFound().build();

        }
    }
}
