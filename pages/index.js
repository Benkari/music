import React from "react";
import Head from "next/head";
import Leftbar from "../components/Leftbar/Leftbar";
import styles from "../styles/Home.module.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/Theme";
import MainSection from "../components/MainSection/MainSection";
import RightBar from "../components/RightBar/RightBar";
import { getOnesAlbums } from "../apiRequests/getMusican";
import FavListContext from "../FavListContext";
import { getFromStorage } from "../functions/addToStorage";

export default function Home({ drake, omer, sofi }) {
  const [favList, setFavList] = React.useState([]);
  const [mainScreenDimmed, setMainScreenDimmed] = React.useState(false);

  React.useEffect(() => {
    const favArrayFromStorage = getFromStorage();
    if (favArrayFromStorage) setFavList(favArrayFromStorage);
  }, []);

  return (
    <FavListContext.Provider
      value={{ favList, setFavList, mainScreenDimmed, setMainScreenDimmed }}
    >
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.container}>
            {/* Leftbar */}
            <div className={styles.leftSection}>
              <Leftbar />
            </div>

            {/* Main Center */}
            <div className={styles.mainCenter}>
              <MainSection drake={drake} sofi={sofi} />
            </div>

            {/* Rightbar */}
            <div className={styles.rightSection}>
              <RightBar omer={omer} />
            </div>
          </main>

          <footer className={styles.footer}></footer>
        </div>
      </ThemeProvider>
    </FavListContext.Provider>
  );
}

export async function getStaticProps(contex) {
  const drake = await getOnesAlbums("9fff2f8a-21e6-47de-a2b8-7f449929d43f");
  const omer = await getOnesAlbums("06dd06a8-5915-4b23-8cd6-d52b74232e6f");
  const sofi = await getOnesAlbums("4ac723f4-8be8-4a0d-a3ae-d5dda20f0a9a");

  return {
    props: {
      drake: drake,
      omer: omer,
      sofi: sofi,
    },
  };
}
