import { useEffect } from 'react';

const useDocumentTitle = (title: string, subdomain: boolean) => {
    useEffect(() => {
        if (subdomain) {
            document.title = `Cantina Grill & Bar | ${title}`;
            
        } else {
            document.title = title;
        }
    }, [title, subdomain]);
}

export default useDocumentTitle;
