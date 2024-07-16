import Link from "next/link";

export default function LinkNav({children, add}) {
    return (
        <Link className="flex flex-row items-center mr-4 mb-2 sm:mb-0" href={add} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
            </svg>
            <div className="px-1 text-sm text-zinc-400">
                {children}
            </div>
        </Link>
    )
}