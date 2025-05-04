import React, { useState } from 'react';
import axios from 'axios';

function UploadFile() {
  const baseUrl = 'http://localhost:3000';
  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert('Please select at least one file');
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append('file', file));

    try {
      const res = await axios.post(`${baseUrl}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('Upload successful');
      console.log("success")
    
    } catch (err) {
      console.error(err);
      setUploadStatus('Upload failed');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Choose Images</span>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="block w-full  text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:cursor-pointer
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
            mt-2"
        />
      </label>

      <button
        onClick={handleUpload}
        className="w-full py-2 px-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
      >
        Upload Files
      </button>

      {uploadStatus && (
        <p className="mt-4 text-center text-sm text-green-600">{uploadStatus}</p>
      )}
    </div>
  );
}

export default UploadFile;
