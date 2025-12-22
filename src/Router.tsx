import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
//components
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/header";
import Footer from "./components/layout/Footer";

//Pages
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import IntroPage from "./pages/about/IntroductionPage";
import BOD from './pages/about/BoardOfDirectorsPage';
import MessagesFromBOD from "./pages/about/MessagesFromBOD";
import TrackProductionPage from "./pages/services/TrackProduction";
import SalesDistributionPage from "./pages/services/SalesAndDistributionPage";
import ProducerSellerSystemPage from "./pages/services/ProducerAndSellerSystem";
import BlogsPage from "./pages/blogs/BlogsListPage";
import BlogDetailPage from "./pages/blogs/BlogDetailPage";
import NewsPage from "./pages/news/NewsListPage";
import NewsDetailPage from './pages/news/NewsDetailPage'
import ContactUsPage from './pages/contacts/ContactUsPage'
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/login/SignUpPage";
import GalleryPage from "./pages/gallery/Gallery";
import GalleryDetailPage from "./pages/gallery/GalleryDetailPage";



//LAYOUT
const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Routes WITH Navbar and Footer */}
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    {/* About */}
                    <Route path='/about/introduction' element={<IntroPage />} />
                    <Route path='/about/board-of-directors' element={<BOD />} />
                    <Route path='/about/messages-from-BOD' element={<MessagesFromBOD />} />
                    {/* Services */}
                    <Route path='/services/track-production' element={<TrackProductionPage />} />
                    <Route path='/services/sales-and-distribution' element={<SalesDistributionPage />} />
                    <Route path='/services/producer-and-seller-system' element={<ProducerSellerSystemPage />} />
                    {/* Blogs */}
                    <Route path='/blogs' element={<BlogsPage />} />
                    <Route path='/blogs/:slug' element={<BlogDetailPage />} />
                    {/* News */}
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/news/:slug' element={<NewsDetailPage />} />
                    {/* Contact us */}
                    <Route path='/contact' element={<ContactUsPage />} />
                    {/* Gallery */}
                    <Route path='/gallery' element={<GalleryPage />} />
                    <Route path='/gallery/:slug' element={<GalleryDetailPage />} />


                </Route>


                {/*pages without Navbar and Footer */}
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />

                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;