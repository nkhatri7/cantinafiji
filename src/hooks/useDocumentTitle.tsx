import { useEffect } from 'react';

const useDocumentTitle = (title: string, subdomain: boolean) => {
    useEffect(() => {
        document.title = subdomain ? `Cantina Grill & Bar | ${title}` : title;
    }, [title, subdomain]);
}

export default useDocumentTitle;
