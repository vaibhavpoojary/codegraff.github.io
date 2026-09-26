import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <section className="dark-section min-h-[80vh] flex items-center">
    <div className="container-x text-center">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4">Page not found.</h1>
      <Button asChild className="rounded-full mt-10"><Link to="/">Back home</Link></Button>
    </div>
  </section>
);

export default NotFound;
