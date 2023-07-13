import adminsSlice from "./slices/adminsSlice"
import routesSlice from "./slices/routesSlice"

export const rootReducer = {
    admins: adminsSlice,
    routes: routesSlice,
}