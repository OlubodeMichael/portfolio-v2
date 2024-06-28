import Link from "next/link";

export default function Navigation() {
    return (
      <div className="my-10">
        <ul className="flex ">
            <li className="pr-2 text-base"><Link href="/">home</Link></li>
            <li className="px-2 text-base"><Link href="/about">about</Link></li>
            <li className="px-2 text-base"><Link href="/project">project</Link></li>
        </ul>
      </div>
    );
  }
  