import { useState, useCallback } from 'react';
import axios from 'axios';

// custom hook that accepts two argumentss
const useHttp = (config, applyData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [httpHasError, setHttpHasError] = useState();

  // perform different http request like get, post
  const sendRequest = useCallback(async () => {
    try {
      // if config.data is available it uses the 'data' as a body else leaves it empty, as with get request.
      const response = await axios(config.url, {
        data: config.data ? config.data : '',
        method: config.method ? config.method : 'get',
      });
      console.log('from SendRequest');
      console.log(response);
      const responseData = await response.data;
      applyData(responseData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHttpHasError(error.message);
    }
  }, [applyData, config]);

  return {
    isLoading,
    hasError: httpHasError,
    sendRequest,
  };
};

export default useHttp;
