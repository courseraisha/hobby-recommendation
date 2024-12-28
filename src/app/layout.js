import './globals.css';

export const metadata = {
    title: 'Hobby Recommendations',
    description: 'Find hobbies that suit your interests!',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1></h1>
                </header>
                <main>{children}</main>
                <footer>
                    <p>&copy; 2024 Hobby Recommendations</p>
                </footer>
            </body>
        </html>
    );
}
