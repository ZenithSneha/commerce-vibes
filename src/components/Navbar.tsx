import { Button } from "@/components/ui/button";
import { Star, User, LogOut, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  userRole?: "admin" | "user" | "store_owner" | null;
  userName?: string;
  onLogout?: () => void;
  currentPage?: string;
}

export const Navbar = ({ userRole, userName, onLogout, currentPage }: NavbarProps) => {
  const isLoggedIn = userRole !== null && userRole !== undefined;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-bold text-xl text-primary">StoreRate</span>
          </div>

          {/* Navigation Links */}
          {isLoggedIn && (
            <div className="hidden md:flex items-center gap-6">
              {userRole === "admin" && (
                <>
                  <a 
                    href="/admin/dashboard" 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      currentPage === "dashboard" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Dashboard
                  </a>
                  <a 
                    href="/admin/stores" 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      currentPage === "stores" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Stores
                  </a>
                  <a 
                    href="/admin/users" 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      currentPage === "users" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Users
                  </a>
                </>
              )}
              {userRole === "user" && (
                <>
                  <a 
                    href="/stores" 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      currentPage === "stores" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Browse Stores
                  </a>
                  <a 
                    href="/profile" 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      currentPage === "profile" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    My Profile
                  </a>
                </>
              )}
              {userRole === "store_owner" && (
                <>
                  <a 
                    href="/store/dashboard" 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      currentPage === "dashboard" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <BarChart3 className="w-4 h-4 inline mr-1" />
                    Dashboard
                  </a>
                </>
              )}
            </div>
          )}

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{userName}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLogout}
                  className="gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  <a href="/login">Login</a>
                </Button>
                <Button size="sm">
                  <a href="/signup">Sign Up</a>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};