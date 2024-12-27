import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";
import BookingPage from "../pages/BookingPage";
import CustomerProfilePage from "../pages/CustomerProfilePage";
import AdminDashboard from "../pages/AdminDashboard";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/booking/:flightId" element={<BookingPage />} />
            <Route path="/profile" element={<CustomerProfilePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
    );
}

export default AppRoutes;