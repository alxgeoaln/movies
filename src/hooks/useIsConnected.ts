import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

const useIsConnected = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return isConnected;
};

export default useIsConnected;