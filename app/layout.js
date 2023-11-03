import { Navigation } from "./components/Navigation";
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
