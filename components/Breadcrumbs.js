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
                {pathSegments.map((segment, index) => {
                    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
                    return (
                        <li key={index}>
                            <span className="separator">/</span>
                            {path === router.pathname ? (
                                <span>{segment.replace(/-/g, ' ')}</span>
                            ) : (
                                <Link href={path}>
                                    {segment.replace(/-/g, ' ')}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Breadcrumbs;