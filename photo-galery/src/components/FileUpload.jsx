import React, { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase.js';

const FileUpload = ({ setFileName }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0]?.name || '');
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const fileRef = ref(storage, `photos/${file.name}`);

    try {
      await uploadBytes(fileRef, file);
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>
    </div>
  );
};

export default FileUpload;
