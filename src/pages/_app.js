import '@/styles/globals.css'
import { Montserrat } from "next/font/google"



const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font--mont"
})
//left off at 15:39
//https://www.youtube.com/watch?v=Yw7yWHigGKI



export default function App({ Component, pageProps }) {
  return (
    <>
    <Head><meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
    <main className={`${yourVariableHere} font-mont bg-light w-full min-h-screen`}>
      <Component {...pageProps} />
    </main>
    </>
  );
}
