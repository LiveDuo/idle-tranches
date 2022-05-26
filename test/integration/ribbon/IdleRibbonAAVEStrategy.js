const ribbonBaseStrategy = require("./IdleRibbonBaseStrategy");

const ORACLE_OWNER = '0x2FCb2fc8dD68c48F406825255B4446EDFbD3e140';
const CHAINLINK_AAVE_PRICER = '0x3b43044cB8b0171290eB87c80b15d132b09e9E84';
const YEARN_USDC_PRICER = "0xf8e87f16d51879261A2b87F89AA1Bd2c418660B1"; // NO
const PRICER_BOT = '0xfacb407914655562d6619b0048a612b1795df783';
const GAMMA_ORACLE = '0x789cD7AB3742e23Ce0952F6Bc3Eb3A73A0E08833';
const AAVE_ADDRESS = '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9'
const VAULT_ADDRESS = '0xe63151A0Ed4e5fafdc951D877102cf0977Abd365';
const isSwap = false

describe.only("IdleRibbonStrategy Aave", () => ribbonBaseStrategy(isSwap, AAVE_ADDRESS, GAMMA_ORACLE, ORACLE_OWNER, AAVE_ADDRESS, CHAINLINK_AAVE_PRICER, YEARN_USDC_PRICER, PRICER_BOT, VAULT_ADDRESS));