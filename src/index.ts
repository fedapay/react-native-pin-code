import * as SecureStore from 'expo-secure-store'
import PinCode from "./PinCode";
import { PinCodeT, PIN_KEY } from "./types";

async function hasSetPIN(): Promise<boolean> {
    const pin = await SecureStore.getItemAsync(PIN_KEY);
    return (pin ? true : false)
}

async function clearPIN() {
    await SecureStore.deleteItemAsync(PIN_KEY);
}

export { PinCode, PinCodeT, hasSetPIN, clearPIN };
