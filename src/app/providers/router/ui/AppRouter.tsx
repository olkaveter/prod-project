import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routeConfig";


const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ location, children }) => (
          <Route
            key={location as string}
            path={location as string}
            element={children}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter;