// components/PageTitle.js
import { useRouter } from 'next/router';

const PageTitle = () => {
    const router = useRouter();
    const route = router.pathname;

    const titles = {
        '/': 'Home',
        '/About': 'About',
        '/Articles': 'Articles',
        '/Books': 'Books',
        '/Media': 'Media',
        '/Research': 'Research',
        '/Teaching': 'Teaching',
        '/Pictures': 'Pictures',
    };

    const title = titles[route] || 'Page Title';

    return (
        <div className="page-title">
            {title}
        </div>
    );
};

export default PageTitle;