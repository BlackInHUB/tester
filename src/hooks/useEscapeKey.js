import { useCallback, useEffect } from "react"

export const useEscapeKey = (handleClose) => {
    const handleEscKey = useCallback((e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        document.addEventListener('keyup', handleEscKey, false);
        
        return () => {document.removeEventListener('keyup', handleEscKey, false)};
    }, [handleEscKey]);
};