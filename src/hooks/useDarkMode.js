import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage.js';


export const useDarkMode = (key,initialValue) => {

    //using dustin's setup, key must be specified, otherwise useLocalStorage sees key as undefined 
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);

    useEffect(() => {
        if (darkMode) {
          return document.querySelector("body").classList.add('dark-mode'); 
        } else {
            return document.querySelector("body").classList.remove('dark-mode');
        }

    },[darkMode]);//end useEffect


    return [darkMode, setDarkMode];

}//end useDarkMode