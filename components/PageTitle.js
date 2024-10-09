// components/PageTitle.js
import { useRouter } from 'next/router';

const PageTitle = () => {
    const router = useRouter();
    const route = router.pathname;

    const titles = {
        '/': 'Home',
        '/About': 'Learn More About Me',
        '/Publications': 'Highlights',
        '/Books': 'Discover My Writing',
        '/Media': 'Samples',
        '/search': 'Search Results ',
        '/Contact': 'Let Me Hear From You!',
        '/invite': 'Services Provided',
    };

    const title = titles[route] || 'Page Title';

    return (
        <div className="page-title">
            {title}
        </div>
    );
};

export default PageTitle;