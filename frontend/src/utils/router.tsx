
import { createBrowserRouter, } from 'react-router';
import { Auth } from '../pages';


// Utility to pause for a given number of milliseconds
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


// Centralized (pure) loader helpers
// const requireAuth = (loginRequired) => async () => {
// //   const login = isLoggedIn();
//   // If loginRequired is true, ensure user is logged in; otherwise redirect to login
//   if (loginRequired && !login) {
//     // If you want a 2-second delay specifically on Home redirect, we implement it there.
//     // For general protected routes, no delay is needed.
//     return redirect("/login");
//   }
//   // If login is not required and user is already logged in, you could redirect to home, etc.
//   return null;
// };

// For the Home route, add a 2-second delay before redirecting to /login when not authenticated
// const homeLoader = async () => {
//   const login = isLoggedIn();
//   if (!login) {
//     // Delay to simulate a loading screen on the home page
//     await wait(2000);
//     return redirect("/login");
//   }
//   return null;
// };


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Auth,
    loader: async () =>{
        await wait(2000)
    }
  },
]);
