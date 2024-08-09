import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../firebase.js';

const UploadMetadata = ({ fileName }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestore, 'photos'), {
        url: `https://firebasestorage.googleapis.com/v0/b/photo-gallery-71ba2.appspot.com/o/photos%2F${fileName}?alt=media`,
        title,
        description,
        timestamp: serverTimestamp(),
      });
      alert('Photo metadata added successfully');
    } catch (error) {
      console.error('Error adding metadata:', error);
      alert('Error adding metadata');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Metadata</button>
    </form>
  );
};

export default UploadMetadata;
