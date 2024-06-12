import Head from "next/head";
import Card from "@/components/main-page/card";
import { StyledContainer } from "@/components/ready-to-use/styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Github repositories explorer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledContainer>
        <Card />
      </StyledContainer>
    </>
  );
}
