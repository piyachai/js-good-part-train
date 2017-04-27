import { Profile } from "./profile.js";

let profile = new Profile("top", 27);

console.log(profile.greetings());

document.getElementById("lbl1").innerText = profile.greetings();