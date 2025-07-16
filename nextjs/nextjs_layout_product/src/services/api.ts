export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

class ApiService {
  private baseUrl = "https://api.escuelajs.co/api/v1";

  async fetchProducts(
    offset: number = 0,
    limit: number = 20
  ): Promise<Product[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/products?offset=${offset}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const apiProducts: ApiProduct[] = await response.json();

      // Transform API data to our product format
      return apiProducts.map(this.transformApiProduct);
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  private transformApiProduct = (apiProduct: ApiProduct): Product => {
    // Generate some random values for demo purposes
    const rating = Math.round((Math.random() * 2 + 3) * 10) / 10; // 3.0 to 5.0
    const reviewCount = Math.floor(Math.random() * 1000) + 50; // 50 to 1050
    const discount =
      Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 5 : undefined; // 5-35% discount
    const isNew = Math.random() > 0.8;
    const isBestSeller = Math.random() > 0.85;

    // Calculate original price if there's a discount
    const originalPrice = discount
      ? Math.round(apiProduct.price * (1 + discount / 100))
      : undefined;

    return {
      id: apiProduct.id,
      name: apiProduct.title,
      price: apiProduct.price,
      originalPrice,
      image: apiProduct.images[0] || "/api/placeholder/200/200",
      rating,
      reviewCount,
      discount,
      isNew,
      isBestSeller,
    };
  };
}

export const apiService = new ApiService();
