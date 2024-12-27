import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AppRoutes /> {/* AppRoutes should not include a Router */}
      </main>
      <Footer />
    </div>
  );
}

export default App;