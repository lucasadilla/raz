// components/Breadcrumbs.js
import { useRouter } from 'next/router';
import Link from 'next/link';

const Breadcrumbs = () => {
    const router = useRouter();
    const pathnames = router.pathname.split('/').filter((x) => x);

    return (
        <nav className="breadcrumbs">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {pathnames.map((value, index) => {
                    const href = '/' + pathnames.slice(0, index + 1).join('/');
                    return (
                        <li key={index}>
                            <Link href={href}>{value}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;