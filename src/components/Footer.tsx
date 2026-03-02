export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} MAC Partners. All rights reserved.
        </p>
        <p className="text-sm text-text-muted">
          A division of{" "}
          <a
            href="https://macinsurance.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            MAC Insurance
          </a>
        </p>
      </div>
    </footer>
  );
}
