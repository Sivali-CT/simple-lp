export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; { new Date().getFullYear() } Lorem ipsum dolor sit amet.
          </p>
        </div>
      </footer>
    )
  }