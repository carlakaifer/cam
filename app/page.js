export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-10 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
          <a href="#home" className="text-2xl font-bold tracking-wide">
            C@M
          </a>

          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
          Welcome to C@M
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Your Photos. Your Imagination.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Edit your photos with us to look incredible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            Get Started
          </a>

          <a
            href="#about"
            className="border border-white/30 px-7 py-3 rounded-full font-semibold hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </section>
<section className="max-w-6xl mx-auto px-6 pb-24">
  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
    <div className="mx-auto max-w-sm rounded-[2rem] border border-white/20 bg-black p-4 shadow-2xl">
      <div className="rounded-[1.5rem] bg-white text-black p-6 min-h-[500px]">
        <div className="h-6 w-24 rounded-full bg-gray-200 mx-auto mb-8"></div>

        <h3 className="text-2xl font-bold mb-3">
          C@M
        </h3>

        <p className="text-gray-600 mb-6">
          A simple preview of what your app experience could look like.
        </p>

        <div className="space-y-4">
          <div className="rounded-2xl bg-gray-100 p-4">
            <p className="font-semibold">Photo Enhancement</p>
            <p className="text-sm text-gray-500">
              Improve lighting, colors, sharpness and overall image quality.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-4">
            <p className="font-semibold">Background Editing</p>
            <p className="text-sm text-gray-500">
              Change, blur or remove photo backgrounds.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-4">
            <p className="font-semibold">Retouching</p>
            <p className="text-sm text-gray-500">
              Make small adjustments and refine your photo.
            </p>
          </div>
        </div>

        <button className="mt-8 w-full rounded-full bg-black text-white py-3 font-semibold">
          Coming Soon
        </button>
      </div>
    </div>
  </div>
</section>
<section className="max-w-6xl mx-auto px-6 py-20">
  <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
    How it works
  </p>

  <h2 className="text-3xl md:text-5xl font-bold mb-12">
    Simple from the start.
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-4xl font-bold text-gray-500 mb-6">01</div>
      <h3 className="text-xl font-semibold mb-3">Create your account</h3>
      <p className="text-gray-400">
        Set up your account and choose what matters most to you.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-4xl font-bold text-gray-500 mb-6">02</div>
      <h3 className="text-xl font-semibold mb-3">Use smart features</h3>
      <p className="text-gray-400">
        Explore simple tools designed to make the experience easier.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-4xl font-bold text-gray-500 mb-6">03</div>
      <h3 className="text-xl font-semibold mb-3">Take action</h3>
      <p className="text-gray-400"> 
        Use the app's tools to save time.
      </p>
    </div>
  </div>
</section>
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          About
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          A simple website with a strong first impression.
        </h2>

        <p className="text-gray-300 text-lg max-w-3xl">
          C@M is a modern landing page designed to be fast, clean, and easy to
          use. Our goal is to make editing simple, fun and accessible to everyone.
          We believe every photo has the potential to become something extraordinary.
          Upload, edit, create and share!
        </p>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8">
          Services
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Photo Enhancement</h3>
            <p className="text-gray-400">
              Improve lighting, colors, sharpness and overall image quality.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Background Editing</h3>
            <p className="text-gray-400">
              Change, blur or remove photo backgrounds.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Retouching</h3>
            <p className="text-gray-400">
              Make small adjustments and refine your photo.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Contact
        </p>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to get started?
          </h2>

          <p className="text-gray-300 mb-8 max-w-2xl">
            Replace this contact section with your email, phone number, booking
            link, or contact form.
          </p>

          <a
            href="mailto:camoffice@gmail.com"
            className="inline-block bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            CONTACT US
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-gray-500">
        © 2025 C@M. All rights reserved.
      </footer>
    </main>
  );
}
