import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("6CKoqmaFE5oDJfPnkQx879Z3LGSjfJ7hVKbLfKpAjpW5")
const decoded = base58.decode('ZmcPHowCmnP59rXKgsBZqjU4MHNK8pLn87emLgUeMDsi8oJxdUoc4SuD1aXqTjy42RPs7LmHrzTofezEdt5geQH')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();