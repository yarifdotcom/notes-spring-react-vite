import { useEffect, useState } from "react";
import { getNotes, createNote, deleteNote, updateNote } from "./services/noteService";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  const loadNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateNote(editingId, {
        title,
        content,
      });
    } else {
      await createNote({
        title,
        content,
      });
    }

    setTitle("");
    setContent("");
    setEditingId(null);

    loadNotes();
  };

  const handleDelete = async (id) => {
    if (!confirm("Hapus catatan ini?")) {
      return;
    }

    await deleteNote(id);
    loadNotes();
  };

  const handleEdit = (note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };


  return (
   <div style={{ padding: "20px" }}>
      <h1>Daftar Catatan</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <br />

        <div>
          <textarea
            placeholder="Isi catatan"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <br />

       <button type="submit">
          {editingId ? "Update" : "Simpan"}
      </button>
      </form>

      <hr />

      {notes.length === 0 ? (
        <p>Belum ada catatan</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button
              onClick={() => handleEdit(note)}
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(note.id)}
              style={{ marginLeft: "10px" }}
            >
              Hapus
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;