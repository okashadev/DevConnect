// app/not-found.js

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="mt-4 text-xl">Oops! This page doesn't exist.</p>
            <a href="/" className="mt-6 text-blue-500 underline">Go back home</a>
        </div>
    );
}
