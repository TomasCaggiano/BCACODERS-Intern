import React, { useState, useEffect } from 'react';
import { storage } from '../firebase.js';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import './Gallery.css';

const Gallery = () => {
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const imagesListRef = ref(storage, 'images/');
    listAll(imagesListRef).then((response) => {
      const promises = response.items.map((item) => getDownloadURL(item));
      Promise.all(promises).then((urls) => setGallery(urls));
    });
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);
    const transformedImage = await applyTransformation(image);
    const imageRef = ref(storage, `images/${image.name}`);
    uploadBytes(imageRef, transformedImage).then(() => {
      fetchImages();
      setUploading(false);
      setImage(null);
    });
  };

  const applyTransformation = async (imageFile) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = document.createElement('img');

    return new Promise((resolve) => {
      img.src = URL.createObjectURL(imageFile);
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = 'grayscale(100%)';
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/jpeg');
      };
    });
  };

  const openModal = (url) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h1>Photo Gallery</h1>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {gallery.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Uploaded ${index}`}
            style={{ width: '200px', margin: '10px', borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => openModal(url)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default Gallery;