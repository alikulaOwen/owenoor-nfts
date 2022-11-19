import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"

import Disconnected from "../components/Disconnected"
import NavBar from "../components/NavBar"
import styles from "../styles/Home.module.css"

import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../components/connected"

export default function Home() {

  const {connected} = useWallet() 
  return (
    <div className={styles.container}>
      <Head>
        <title>Owenoor NFTs</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          { /* NavBar */}
          <NavBar />
          <Spacer />
          <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/alikula0"
                target="_blank"
                rel="noopener noreferrer"
              >
                built by Owen Alikula
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  
  )
}
