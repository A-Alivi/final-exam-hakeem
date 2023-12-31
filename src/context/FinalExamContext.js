import React, {createContext, useContext, useState} from 'react';
const MyExamContext = createContext();

export const MyExamInformationProvider = ({children}) => {
    const [product, setProduct] = useState([])
    
    // states
    return (
        <MyExamContext.Provider value={{
            product, setProduct
        }}>
            {children}
        </MyExamContext.Provider>
    );
};

export const useExamContext = () => {
    const context = useContext(MyExamContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};
