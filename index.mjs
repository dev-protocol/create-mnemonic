import { utils } from "ethers"

console.log(utils.entropyToMnemonic(utils.randomBytes(32)))
