// components/PageTitle.js
import { useRouter } from 'next/router';

const PageTitle = () => {
    const router = useRouter();
    const route = router.pathname;

    const titles = {
        '/': 'Home',
        '/About': 'About',
        '/Publications': 'Highlights',
        '/Books': 'Books',
        '/Media': 'Highlights',
        '/Research': 'Research',
        '/Teaching': 'Teaching',
        '/Pictures': 'Pictures',
        '/search': 'Search',
        '/Contact': 'Contact',
    };

    const title = titles[route] || 'Page Title';

    return (
        <div className="page-title">
            {title}
        </div>
    );
};

export default PageTitle;