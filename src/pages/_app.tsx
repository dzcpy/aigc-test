import { Poppins } from 'next/font/google'
import { type AppType } from "next/app";

import { api } from "~/utils/api";
import "~/styles/globals.css";

const poppins = Poppins({ weight: '400', subsets: ['latin-ext'] })


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
};

export default api.withTRPC(MyApp);
