import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, Store, BarChart3, Shield, UserCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Star className="w-7 h-7 text-white fill-white" />
            </div>
            <span className="font-bold text-3xl">StoreRate</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rate & Discover
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Amazing Stores
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of customers sharing authentic reviews and helping local businesses thrive through honest feedback.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="/signup" className="flex items-center gap-2">
                Get Started Free
                <UserCheck className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <a href="/stores">Browse Stores</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose StoreRate?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform connects customers with businesses through trusted reviews and comprehensive store management tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>For Customers</CardTitle>
                <CardDescription>
                  Share your experiences and help others make informed decisions
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Rate stores from 1-5 stars</li>
                  <li>✓ Search by name and location</li>
                  <li>✓ Update ratings anytime</li>
                  <li>✓ Discover highly-rated businesses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Store className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>For Store Owners</CardTitle>
                <CardDescription>
                  Track your reputation and understand customer feedback
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Monitor your average rating</li>
                  <li>✓ View customer reviews</li>
                  <li>✓ Track rating trends</li>
                  <li>✓ Improve customer satisfaction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>For Administrators</CardTitle>
                <CardDescription>
                  Comprehensive platform management and analytics
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Manage users and stores</li>
                  <li>✓ View platform analytics</li>
                  <li>✓ Monitor rating activity</li>
                  <li>✓ Advanced filtering & search</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1,247</div>
              <div className="text-muted-foreground">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">89</div>
              <div className="text-muted-foreground">Partner Stores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">3,456</div>
              <div className="text-muted-foreground">Reviews Submitted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rating-gold mb-2">4.2</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust StoreRate for authentic business reviews and ratings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="/signup">Create Free Account</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <a href="/login">Sign In</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
