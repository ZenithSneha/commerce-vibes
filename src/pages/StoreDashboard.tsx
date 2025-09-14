import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RatingStars } from "@/components/RatingStars";
import { Navbar } from "@/components/Navbar";
import { Star, TrendingUp, Users } from "lucide-react";

// Mock store owner data
const storeData = {
  storeName: "Downtown Coffee House",
  averageRating: 4.5,
  totalRatings: 127,
  recentRatings: [
    { user: "Alice Johnson", rating: 5, comment: "Amazing coffee and friendly staff!", date: "2 days ago" },
    { user: "Bob Smith", rating: 4, comment: "Great atmosphere, will come back", date: "1 week ago" },
    { user: "Carol Davis", rating: 5, comment: "Best coffee in downtown!", date: "1 week ago" },
    { user: "David Wilson", rating: 3, comment: "Good coffee but a bit pricey", date: "2 weeks ago" },
    { user: "Emma Brown", rating: 5, comment: "Love the cozy environment", date: "2 weeks ago" },
  ],
  ratingDistribution: {
    5: 67,
    4: 35,
    3: 15,
    2: 7,
    1: 3,
  },
};

const StoreDashboard = () => {
  const getRatingPercentage = (rating: number) => {
    return Math.round((storeData.ratingDistribution[rating as keyof typeof storeData.ratingDistribution] / storeData.totalRatings) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar userRole="store_owner" userName="Store Owner" currentPage="dashboard" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{storeData.storeName}</h1>
          <p className="text-muted-foreground">
            Your store dashboard and customer feedback
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-rating-gold">{storeData.averageRating}</span>
                <RatingStars rating={storeData.averageRating} size="sm" />
              </div>
              <p className="text-xs text-muted-foreground">
                Based on {storeData.totalRatings} reviews
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{storeData.totalRatings}</div>
              <p className="text-xs text-muted-foreground">
                +15 this month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">
                {getRatingPercentage(5) + getRatingPercentage(4)}%
              </div>
              <p className="text-xs text-muted-foreground">
                4+ star ratings
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Rating Distribution */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Rating Distribution</CardTitle>
              <CardDescription>Breakdown of customer ratings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = storeData.ratingDistribution[rating as keyof typeof storeData.ratingDistribution];
                  const percentage = getRatingPercentage(rating);
                  
                  return (
                    <div key={rating} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-16">
                        <span className="text-sm font-medium">{rating}</span>
                        <Star className="w-3 h-3 fill-rating-gold text-rating-gold" />
                      </div>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-rating-gold h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <div className="text-sm text-muted-foreground w-16 text-right">
                        {count} ({percentage}%)
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Reviews */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Recent Reviews</CardTitle>
              <CardDescription>Latest customer feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {storeData.recentRatings.map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{review.user}</span>
                        <Badge variant="outline" className="text-xs">
                          <Star className="w-3 h-3 fill-rating-gold text-rating-gold mr-1" />
                          {review.rating}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StoreDashboard;