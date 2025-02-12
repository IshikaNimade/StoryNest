import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProviderComponent } from "./context/apolloClient";
import { AuthProvider } from "./context/AuthContext";
import { routes } from "./routes";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <ApolloProviderComponent>
      <AuthProvider>
        <Router>
          <Routes>
            {routes.map((route) =>
              route.private ? (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<PrivateRoute>{route.element}</PrivateRoute>}
                />
              ) : (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              )
            )}
          </Routes>
        </Router>
      </AuthProvider>
    </ApolloProviderComponent>
  );
}

export default App;
