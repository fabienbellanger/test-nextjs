import Link from "next/link";

export default function Admin() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div>Admin zone</div>
            <Link href="/" className="btn btn-primary">
                Home
            </Link>
        </div>
    );
}
