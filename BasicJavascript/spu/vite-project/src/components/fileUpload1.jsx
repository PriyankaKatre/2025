"use client"

import { useState } from "react"
import { X, Upload, FileIcon } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from "@/components/ui/button"

export default function FileUpload1() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
console.log('files', files);
    const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

      const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleFileInput = (e) => {
      if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };


    const handleSubmit = async () => {
        console.log('files.length', files.length);
      if (files && files.length > 0) {
        //setLoader(true);

        const formData = new FormData();

          for (let i = 0; i < files.length; i++) {
            console.log('files', files[i]);
          formData.append('ces1tInputs', files[i]);
        }

          console.log('formData', formData);
        try {
          const response = await fetch('http://localhost:5000/api/upload', {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();
console.log('data', data);
          if (data.status === 'success') {
            //refreshData();
            //setModel(false);
            setFiles(null);
            alert('Files uploaded successfully!');
          } else {
            alert('Error: ' + data.message);
          }
        } catch (error) {
          console.error('Error uploading files:', error);
          alert('Error uploading files');
        } finally {
          //setLoader(false);
        }
      }
    };

  const handleCancel = () => {
    setFiles([]);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Upload files
        </CardTitle>
        <CardDescription>
          Select and upload the files of your choice
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`
            border-2 border-dashed rounded-lg p-8
            flex flex-col items-center justify-center gap-4
            ${dragActive ? 'border-primary bg-primary/5' : 'border-muted'}
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-10 w-10 text-muted-foreground" />
          <div className="text-center">
            <p className="text-sm font-medium">
              Choose a file or drag & drop it here
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              json, MP3, MP4 formats, up to 50MB
            </p>
          </div>
          <label htmlFor="file-upload">
            <Button
              variant="secondary"
              size="sm"
              className="mt-2"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              Browse File
            </Button>
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileInput}
            multiple
          />
        </div>

        {files && files.length > 0 && (
          <div className="space-y-2">
            {files && files.map((file) => (
              <div
                key={file.name}
                className="flex items-center justify-between p-2 border rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <FileIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{file.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => removeFile(file.name)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {files && files.length > 0 && (
        <CardFooter className="flex justify-end gap-2 pt-2">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={uploading}
            className="text-black-100"
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
