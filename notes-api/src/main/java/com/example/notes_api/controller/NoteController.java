package com.example.notes_api.controller;

import com.example.notes_api.entity.Note;
import com.example.notes_api.repository.NoteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.time.LocalDateTime;

@CrossOrigin(origins = "http://localhost:5173")

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private final NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @GetMapping
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    @PostMapping
    public Note createNote(@RequestBody Note note) {

        note.setCreatedAt(java.time.LocalDateTime.now());
        note.setUpdatedAt(java.time.LocalDateTime.now());

        return noteRepository.save(note);
    }

    @PutMapping("/{id}")
    public Note updateNote(
            @PathVariable Long id,
            @RequestBody Note noteRequest) {

        Note note = noteRepository.findById(id)
                .orElseThrow();

        note.setTitle(noteRequest.getTitle());
        note.setContent(noteRequest.getContent());
        note.setUpdatedAt(java.time.LocalDateTime.now());

        return noteRepository.save(note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        noteRepository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Note getNoteById(@PathVariable Long id) {
        return noteRepository.findById(id)
                .orElseThrow();
    }

}