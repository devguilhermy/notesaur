import { ReactNode } from 'react';
// import { Header } from './Header';
// import { Sidebar } from './Sidebar';

interface PageLayoutProps {
    children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="flex flex-col h-screen min-h-screen">
            {/* <Header className={'flex-shrink-0'} />
            <div className="relative flex flex-1">
                <Sidebar />
                <div className={'ml-16 w-full p-4 lg:p-10 lg:pt-4'}>
                    {children}
                </div>
            </div> */}
        </div>
    );
}
