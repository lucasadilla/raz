// components/Breadcrumbs.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
    const router = useRouter();
    const pathSegments = router.pathname.split('/').filter(segment => segment);

    return (
        <div className="breadcrumbs">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {pathSegments.map((segment, index) => (
                    <li key={index}>
                        <span className="separator">/</span>
                        <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                            {segment.replace(/-/g, ' ')}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breadcrumbs;