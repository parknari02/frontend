import { createContext, useContext, useState } from 'react';

const AgoraStatusContext = createContext();

export const useAgoraStatus = () => {
    const context = useContext(AgoraStatusContext);
    if (!context) {
        throw new Error('useAgoraStatus must be used within an AgoraStatusProvider');
    }
    return context;
};

export const AgoraStatusProvider = ({ children }) => {
    const [isStatusSlideOpen, setIsStatusSlideOpen] = useState(false);

    const openStatusSlide = () => {
        setIsStatusSlideOpen(true);
    };

    const closeStatusSlide = () => {
        setIsStatusSlideOpen(false);
    };

    const value = {
        isStatusSlideOpen,
        openStatusSlide,
        closeStatusSlide,
    };

    return (
        <AgoraStatusContext.Provider value={value}>
            {children}
        </AgoraStatusContext.Provider>
    );
};
