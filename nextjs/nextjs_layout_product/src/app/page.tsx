import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
}
