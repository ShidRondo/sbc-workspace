import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("6CKoqmaFE5oDJfPnkQx879Z3LGSjfJ7hVKbLfKpAjpW5") // PUBKEY of person you want to create the token account

const decoded = base58.decode('ZmcPHowCmnP59rXKgsBZqjU4MHNK8pLn87emLgUeMDsi8oJxdUoc4SuD1aXqTjy42RPs7LmHrzTofezEdt5geQH')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "B97NEtnhnq5ekGWSEP4uXHLHNabDzDAgirexb4mLZdN7"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();