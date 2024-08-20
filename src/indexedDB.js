// Import idb library for IndexedDB operations
import { openDB } from 'idb';

// Initialize the IndexedDB
const dbPromise = openDB('resumeDB', 1, {
  upgrade(db) {
    db.createObjectStore('resumes', { keyPath: 'id', autoIncrement: true });
    db.createObjectStore('experienceItems', { keyPath: 'id', autoIncrement: true });
    db.createObjectStore('projects', { keyPath: 'id', autoIncrement: true });
    db.createObjectStore('education', { keyPath: 'id', autoIncrement: true });
    db.createObjectStore('skills', { keyPath: 'id', autoIncrement: true });
  },
});

// CRUD operations

// Add a new resume
async function addResume(resume) {
  const db = await dbPromise;
  const id = await db.put('resumes', resume);
  return id;
}

// Get a resume by ID
async function getResume(id) {
  const db = await dbPromise;
  return await db.get('resumes', id);
}

// Update a resume
async function updateResume(id, updatedResume) {
  const db = await dbPromise;
  await db.put('resumes', { ...updatedResume, id });
}

// Delete a resume
async function deleteResume(id) {
  const db = await dbPromise;
  await db.delete('resumes', id);
}

// Similarly, implement CRUD operations for other collections (experienceItems, projects, education, skills).

