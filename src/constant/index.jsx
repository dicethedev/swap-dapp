import {
    Home
} from "../pages";

import Swap from "../pages/Swap";

const ROUTES = {

      Swap: {
        id: "2",
        element: Swap,
        path: "/swap"
    },
};

const PUBLIC_ROUTES = {

    home: {id: "1", element: Home, path: "/"},
};

export {
    ROUTES,
    PUBLIC_ROUTES
};
