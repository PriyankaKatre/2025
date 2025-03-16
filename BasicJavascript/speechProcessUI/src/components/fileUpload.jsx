import React, { useState, useRef } from 'react';

import FileUploader from 'react-drag-drop-files';

const FileUpload = (props) => {
  const { refreshData, setLoader } = props;
  const [openModal, setModel] = useState(false);
  const [files, setFiles] = useState(null);
  const modalRef = useRef();

  const clearHandler = (name, type) => {
    let newFileList = new DataTransfer();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.name !== name) {
        newFileList.items.add(file);
      }
    }

    setFiles(newFileList.files);
  };

  const showModal = () => {
    setModel(true);
  };

  const hideModal = () => {
    setModel(false);
  };

  const handleSubmit = async () => {
    if (files && files.length > 0) {
      setLoader(true);

      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append('ces1tInputs', files[i]);
      }

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.status === 'success') {
          refreshData();
          setModel(false);
          setFiles(null);
          alert('Files uploaded successfully!');
        } else {
          alert('Error: ' + data.message);
        }
      } catch (error) {
        console.error('Error uploading files:', error);
        alert('Error uploading files');
      } finally {
        setLoader(false);
      }
    }
  };

  const handleChange = (uploadedFiles) => {
    if (uploadedFiles && uploadedFiles.length > 0) {
      setLoader(true);
      setFiles(uploadedFiles);
    }
  };

  const renderFiles = () => {
    const arr = Array.from(files);
    const fileNames = arr.map((item, idx) => (
      <div className="file-name" key={idx}>
        <span>{item.name}</span>
        <Button
          variant="destructive"
          onClick={() => clearHandler(item.name, item.type)}
        >
          Clear
        </Button>
      </div>
    ));

    return <div className="files">{fileNames}</div>;
  };

  return (
    <>
      <Button variant="primary" onClick={showModal}>
        UPLOAD
      </Button>

      <Dialog open={openModal} onOpenChange={setModel}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Files</DialogTitle>
          </DialogHeader>
          <div className="file-upload-variation">
            <div className="upload-form">
              <div className="upload-container">
                <div className="note">File source</div>
                <div className="file-drop">
                  <FileUploader
                    handleChange={handleChange}
                    children={
                      <div className="placeholder">
                        Drag and Drop/select audio &amp; transcript
                      </div>
                    }
                    classes="drop-area"
                    multiple={true}
                    name="file"
                  />
                </div>
              </div>
              {files && files.length > 0 && renderFiles()}
            </div>
          </div>
        </DialogContent>
        <DialogFooter>
          <Button variant="primary" onClick={handleSubmit}>
            Upload
          </Button>
          <Button variant="secondary" onClick={hideModal}>
            Cancel
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default FileUpload;
