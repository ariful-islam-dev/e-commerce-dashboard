import { Link } from "react-router-dom";

interface BreadcrumbProps {
    pageName: string
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
    return (
        <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-semibold text-black text-title-md2 dark:text-white">
                {pageName}
            </h2>
            <nav>
                <ol className="flex items-center gap-2">
                    <li>
                        <Link to={"/"} className="font-medium">
                            Dashboard /
                        </Link>
                    </li>
                    <li className="font-medium text-primary">{pageName}</li>
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;