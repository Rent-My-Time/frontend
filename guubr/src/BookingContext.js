import React, { createContext, useEffect, useState } from 'react';

export const BookingContext = createContext();

const BookingContextProvider = ({ children }) => {
    const [bookFormInfo, setBookFormInfo] = useState();

    useEffect(() => {
        console.log("BookingContext: in UseEffect");
        setBookFormInfo();
    }, [] )

    return (
        <BookingContext.Provider value={[bookFormInfo, setBookFormInfo]}>{children}</BookingContext.Provider>
    );
};

export default BookingContextProvider;