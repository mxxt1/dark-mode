import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';


export const useDarkMode = (key, initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (darkMode) {
            

        }




    })//end useEffect


}//end useDarkMode