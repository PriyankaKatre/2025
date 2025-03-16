
   import React from 'react';

   const FileHandler = props => {
       const {

            files,

            clearHandler,

            submitHandler

        } = props;

   const renderFiles = () => {

   const arr= Array.from( files );

   const fileNames= arr.map( (item, idx) =>

   <ef-pill
        clears

        key={ idx}

        onclick={ () => {

            clearHandler( item.name, item.type );

        }}>{ item.name }
    </ef-pill>

   );

    return (

        <div classile='files'>

            { fileNames }

        </div>

    );

   };

   return (
        <div className='file-upload-footer'>
            { files && files.length> 0 && renderFiles() }

            <ef-button

                class='button'

                onclick={ submitHandler}

                disabled={(files || ( files && files.length)) ? 'true': undefined }

                cta>

                 UPLOAD FILES

            </ef-button>

        </div>
    );
};

export default FileHandler;
