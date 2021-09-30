import { useEffect } from 'react';

const useEscape = (onEscape: any) => {

    useEffect(() => {
        const handleEsc = (event: any) => {
            // console.log(event);
            if (event.keyCode === 27) {
                onEscape();
                // console.log('Close')
            }
        };
        document.addEventListener('keydown', handleEsc, false);

        return () => {
            document.removeEventListener('keydown', handleEsc, false);
        };
    }, [onEscape]);

}

export default useEscape;
