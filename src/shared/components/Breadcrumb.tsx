import Link from "next/link";

export interface BreadCrumbItem{
    label: string;
    href: string;
}
interface BreadcrumbProps{
    items: BreadCrumbItem[];
}

export default function Breadcrumb({items}: BreadcrumbProps) {
    return(
        <nav aria-label="Breadcrumb" className="py-2 text-sm text-gray-600">
            <ol className="flex items-center space-x-2 flex-wrap">
                {items.map((item, index) => {
                    const ehUltimoItem = index === items.length - 1;
                    return(
                        <li key={index} className="flex items-center space-x-2">
                            {index > 0 && <span className="text-gray-500 font-light">&gt;</span>}

                            {item.href && !ehUltimoItem ? (
                                <Link href={item.href} className="hover:underline hover:text-cor-primaria 
                                 transition-colors capitalize">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-gray-900 font-medium capitalize"
                                aria-current={ehUltimoItem ? "page" : undefined}>
                                    {item.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}