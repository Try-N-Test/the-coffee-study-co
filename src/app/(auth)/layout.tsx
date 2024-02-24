import { ClerkProvider } from "@clerk/nextjs"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body >
            <div className="w-full flex justify-center items-center min-h-screen">
            <div className="flex w-full flex-grow flex-col items-center bg-light-4">
              {children}
              </div>
            </div>
          </body>
        </html>
      </ClerkProvider>
    )
  }