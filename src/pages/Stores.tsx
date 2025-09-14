import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RatingStars } from "@/components/RatingStars";
import { Navbar } from "@/components/Navbar";
import { Search, MapPin, Star } from "lucide-react";

// Mock data
const mockStores = [
  {
    id: 1,
    name: "Downtown Coffee House",
    address: "123 Main Street, Downtown, City 12345",
    averageRating: 4.5,
    userRating: 5,
    totalRatings: 127,
  },
  {
    id: 2,
    name: "Fresh Groceries & More",
    address: "456 Oak Avenue, Suburbia, City 67890",
    averageRating: 3.8,
    userRating: null,
    totalRatings: 89,
  },
  {
    id: 3,
    name: "Tech Solutions Store",
    address: "789 Innovation Drive, Tech District, City 54321",
    averageRating: 4.2,
    userRating: 4,
    totalRatings: 203,
  },
  {
    id: 4,
    name: "Garden Paradise Nursery",
    address: "321 Green Lane, Garden District, City 98765",
    averageRating: 4.8,
    userRating: null,
    totalRatings: 156,
  },
  {
    id: 5,
    name: "Fashion Forward Boutique",
    address: "654 Style Boulevard, Fashion Quarter, City 13579",
    averageRating: 3.9,
    userRating: 3,
    totalRatings: 78,
  },
  {
    id: 6,
    name: "Pizza Palace Restaurant",
    address: "987 Foodie Street, Restaurant Row, City 24680",
    averageRating: 4.6,
    userRating: null,
    totalRatings: 312,
  },
];

const Stores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStores, setFilteredStores] = useState(mockStores);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = mockStores.filter(
      (store) =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStores(filtered);
  };

  const handleRatingSubmit = (storeId: number, rating: number) => {
    // Mock rating submission
    setFilteredStores(stores =>
      stores.map(store =>
        store.id === storeId
          ? { ...store, userRating: rating }
          : store
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar userRole="user" userName="John Doe" currentPage="stores" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Stores</h1>
          <p className="text-muted-foreground">
            Discover and rate stores in your area
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 shadow-soft">
          <CardContent className="pt-6">
            <form onSubmit={handleSearch} className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search stores by name or address..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
              <Button type="submit" className="h-11">
                Search
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Store Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredStores.map((store) => (
            <Card key={store.id} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg leading-tight">{store.name}</h3>
                  <Badge variant="secondary" className="ml-2">
                    <Star className="w-3 h-3 mr-1 fill-rating-gold text-rating-gold" />
                    {store.averageRating}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="line-clamp-2">{store.address}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Overall Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <RatingStars rating={store.averageRating} size="sm" />
                    <span className="text-sm text-muted-foreground">
                      ({store.totalRatings} reviews)
                    </span>
                  </div>
                </div>

                {/* User Rating */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Your Rating:</span>
                    {store.userRating && (
                      <Badge variant="outline" className="text-xs">
                        Rated
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <RatingStars
                      rating={store.userRating || 0}
                      interactive
                      onRatingChange={(rating) => handleRatingSubmit(store.id, rating)}
                    />
                    {store.userRating ? (
                      <span className="text-sm text-muted-foreground">
                        Click to update
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Click to rate
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No stores found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms to find more stores.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setFilteredStores(mockStores);
              }}
              className="mt-4"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stores;