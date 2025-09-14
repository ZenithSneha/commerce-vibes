import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Users, Store, Star, TrendingUp } from "lucide-react";

// Mock dashboard data
const dashboardStats = {
  totalUsers: 1247,
  totalStores: 89,
  totalRatings: 3456,
  avgRating: 4.2,
};

const recentActivity = [
  { user: "Alice Johnson", action: "rated", store: "Downtown Coffee House", rating: 5, time: "2 minutes ago" },
  { user: "Bob Smith", action: "signed up", time: "15 minutes ago" },
  { user: "Carol Davis", action: "rated", store: "Tech Solutions Store", rating: 4, time: "23 minutes ago" },
  { user: "David Wilson", action: "rated", store: "Pizza Palace Restaurant", rating: 5, time: "1 hour ago" },
  { user: "Emma Brown", action: "signed up", time: "2 hours ago" },
];

const topRatedStores = [
  { name: "Garden Paradise Nursery", rating: 4.8, reviews: 156 },
  { name: "Pizza Palace Restaurant", rating: 4.6, reviews: 312 },
  { name: "Downtown Coffee House", rating: 4.5, reviews: 127 },
  { name: "Tech Solutions Store", rating: 4.2, reviews: 203 },
  { name: "Fashion Forward Boutique", rating: 3.9, reviews: 78 },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar userRole="admin" userName="Admin User" currentPage="dashboard" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your platform and monitor key metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{dashboardStats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Stores</CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{dashboardStats.totalStores}</div>
              <p className="text-xs text-muted-foreground">
                +3 new this week
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Ratings</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{dashboardStats.totalRatings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-rating-gold">{dashboardStats.avgRating}</div>
              <p className="text-xs text-muted-foreground">
                +0.2 from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest user actions on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                        {activity.store && (
                          <>
                            {" "}<span className="font-medium">{activity.store}</span>
                            {activity.rating && (
                              <span className="ml-2 inline-flex items-center">
                                <Star className="w-3 h-3 fill-rating-gold text-rating-gold mr-1" />
                                {activity.rating}
                              </span>
                            )}
                          </>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Rated Stores */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Top Rated Stores</CardTitle>
              <CardDescription>Highest rated stores on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topRatedStores.map((store, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{store.name}</p>
                      <p className="text-xs text-muted-foreground">{store.reviews} reviews</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-rating-gold text-rating-gold" />
                      <span className="font-medium">{store.rating}</span>
                    </div>
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

export default AdminDashboard;