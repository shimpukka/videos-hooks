// custom hook to fetch videos

import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos  = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        // set default search term and get response from api
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;