export const metadata = {
  title: "Онлайн рулетка",
  description: "Рандомайзер імен",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
