// components/PageTitle.js
import { useRouter } from 'next/router';

const PageTitle = () => {
    const router = useRouter();
    const route = router.pathname;

    const titles = {
        '/': 'Home',
        '/About': 'Learn More About Me',
        '/Publications': 'Publication Highlights',
        '/Books': 'Discover My Writing',
        '/Media': 'Media Highlights',
        '/search': 'Search Results ',
        '/Contact': 'Let Me Hear From You!',
        '/invite': 'Invite Me',
    };

    const title = titles[route] || 'Page Title';

    return (
        <div className="page-title">
            {title}
        </div>
    );
};

export default PageTitle;