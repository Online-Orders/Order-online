import { useState } from 'react';
import axios from 'axios';

// custom hook that accepts two arguments
const useHttp = (config, applyData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [httpHasError, setHttpHasError] = useState();

  // perform different http request like get, post
  const sendRequest = async () => {
    try {
      // if config.data is available it uses the 'data' as a body else leaves it empty, as with get request.
      const response = await axios(config.url, config.data ? config.data : '');

      const responseData = await response.data;
      applyData(responseData);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHttpHasError(error.message);
    }
  };

  return {
    isLoading,
    hasError: httpHasError,
    sendRequest,
  };
};

export default useHttp;
