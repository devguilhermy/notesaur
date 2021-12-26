import { Icons } from '../assets/icons';

export function StartBanner() {
    return (
        <div className="flex flex-col items-center justify-center flex-1 lg:w-1/2">
            <div className="flex items-center  max-w-xs lg:max-w-xl mx-auto">
                <span>
                    <Icons.Note className="w-8 h-8 lg:w-12 lg:h-12" />
                </span>
                <span className="ml-1 text-3xl lg:text-5xl font-extrabold dark:text-white">
                    NOTE
                </span>
                <span className="text-3xl lg:text-5xl font-light dark:text-white">
                    SAUR
                </span>
            </div>
            <p className="mt-2 text-lg lg:text-xl text-center max-w-xs lg:max-w-xl">
                Note-taking has never been so easy and powerful!
            </p>
        </div>
    );
}
