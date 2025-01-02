import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../components/ui/breadcrumb";
import Footer from "./testFooter";
import NavBarComponent from "./home/navbar.component";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Check if the current route starts with "/cars"
  const isCarsRoute = location.pathname.startsWith("/cars");

  // Generate breadcrumbs dynamically for /cars routes
  const breadcrumbs = location.pathname
    .split("/")
    .filter((path) => path)
    .map((segment, index, arr) => {
      const to = `/${arr.slice(0, index + 1).join("/")}`;
      return {
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "), // Capitalize and replace dashes
        path: to,
      };
    });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header>
        <NavBarComponent />
      </header>

      {/* Breadcrumb Section */}
      {isCarsRoute && (
        <nav className="py-8 px-28">
          <Breadcrumb className="flex items-center text-sm">
            {/* Home Link */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-[#970747] hover:bg-transparent  hover:text-[#970747] hover:underline lg:text-lg">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Add a separator */}
            <span className="mx-2 text-gray-400">/</span>

            {/* Dynamic Breadcrumbs */}
            {breadcrumbs.map((crumb, index) => (
              <BreadcrumbItem key={crumb.path}>
                {index === breadcrumbs.length - 1 ? (
                  // Last item is plain text
                  <span className="text-[#970747] hover:bg-transparent  hover:text-[#970747] hover:underline lg:text-lg">{crumb.name}</span>
                ) : (
                  <>
                    <BreadcrumbLink asChild>
                      <Link to={crumb.path} className="text-[#970747] hover:bg-transparent  hover:text-[#970747] hover:underline lg:text-lg">
                        {crumb.name}
                      </Link>
                    </BreadcrumbLink>
                    {/* Add separator */}
                    <span className="mx-2 text-gray-400">/</span>
                  </>
                )}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
