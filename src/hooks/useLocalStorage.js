import {useState} from 'react';

// export const useLocalStorage = (key, initialValue) => {
//     const [storedValue, setStoredValue] = useState(() => {
//         // if (localStorage.getItem(key)) {
//         //     return JSON.parse(window.localStorage.getItem(key));
//         // } else {
//         //     window.localStorage.setItem(key, JSON.stringify(initialValue));
//         //     return initialValue;
//         // }
//         if (localStorage.getItem(key)) {
//             return JSON.parse(window.localStorage.getItem(key));
//         } else {
//             window.localStorage.setItem(key, JSON.stringify(initialValue));
//             return initialValue;
//         }
//         // const currentValue = window.localStorage.getItem(key);
//         // return currentValue ? JSON.parse(currentValue) : initialValue;
//     });

//     const setValue = value => {
//         setStoredValue(value);
//         window.localStorage.setItem(key, JSON.stringify(value));
//     };

//     return [storedValue, setValue];
// };


export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });//usestate

    const setValue = value => {
        
        console.log(value);
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
        
        
    };

    return [storedValue, setValue];

};//uselocalstorage