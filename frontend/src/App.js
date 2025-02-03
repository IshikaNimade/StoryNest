import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ApolloProviderComponent } from "./context/apolloClient";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <ApolloProviderComponent>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </ApolloProviderComponent>
  );
}

export default App;
