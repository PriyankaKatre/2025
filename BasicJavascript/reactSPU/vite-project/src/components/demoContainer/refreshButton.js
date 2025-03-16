
   import React from 'react';

   import { useNavigate } from 'react-router-dom';

   import fetchData from '../commons/fetchData';

   const RefreshButton = ( props ) => {

        const {

        setLoader

        } = props;

   const navigate = useNavigate();

   const handleRefresh = () => {

    setLoader( true);

        fetchData('/api/clearAll').then( res => {

            if (res.status='success' ) {

                    setTimeout(() => {

                    navigate("/", { replace: true });

                }, 2000);
            }
        });
    };

   return (
        <>
            <ef-button class="button" onclick={ handleRefresh } cta>REFRESH</ef-button>
        </>
    );

   };

   export default RefreshButton;
