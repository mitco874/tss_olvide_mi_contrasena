import { Route, Routes } from "react-router-dom"
import { AuthenticatedRoutes, NoAuthenticatedRoutes } from "../EducativePlatform/routes"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<NoAuthenticatedRoutes/>} />
            <Route path="/clases/*" element={<AuthenticatedRoutes/>} />
        </Routes>
        </>
  )
}
