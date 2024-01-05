import { type AppType } from "next/dist/shared/lib/utils";
import Navbar from "~/components/navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<div className="relative">
    <Navbar />
    <div className="min-h-screen grainy">
      <Component {...pageProps} />
    </div>
  </div>
  );
};

export default MyApp;
