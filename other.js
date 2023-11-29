// import defJake, {name2 as myJake} from "./index.js"
// import defFn, {logout as login2} from "./index.js";
import defFn, * as authService from "./index.js";

// console.log(myJake)

function login() {
    //...
    console.log("some tasks")
    // import login
    authService.login();
    defFn();
}

login()