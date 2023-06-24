import { writable } from "svelte/store";
import Plausible from "plausible-tracker";

export let plausible = writable(Plausible({domain: 'byterise.dev'}));