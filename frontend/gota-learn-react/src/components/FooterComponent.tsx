export default function FooterComponent() {
  return (
    <footer className="bg-primary text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Gota Learn. All rights reserved.</p>
        <div>
          <a href="#" className="text-white mx-2 text-decoration-none">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="text-white mx-2 text-decoration-none">
            Terms of Service
          </a>
          <span>|</span>
          <a href="#" className="text-white mx-2 text-decoration-none">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
