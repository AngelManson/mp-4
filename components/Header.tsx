import Link from "next/link";

export default function Header(){
    const linkStying = `p-1 m-1 text-xl hover:underline`;
    return (
        <header className={`flex flex-col justify-between items-center p-1 m-1 text-sky-900`}>
            <h1 className={`text-3xl font-bold`}>
                What&apos;s The Temperature Today?
            </h1>
            <nav >
                <ul>
                    <li className={`inline-flex`}>
                        <Link href={`/`} className={linkStying}>Home</Link>
                    </li>
                    <li className={`inline-flex`}>
                        <Link href={`/hourly`} className={linkStying}>Hourly</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}