export default function Footer() {
  return (
    <footer className="w-full py-16 flex flex-col items-center font-serif text-rose-900">
      
      {/* Initials */}
      <h2 className="text-5xl font-serif-alt tracking-wide mb-2">E&E</h2>

      {/* Divider line */}
      <div className="w-24 h-[1px] bg-rose-900 mb-4"></div>

      {/* Date */}
      <p className="uppercase tracking-[0.3em] text-sm font-light mb-10">
        November 2025
      </p>

      {/* Subtext */}
      <p className="text-xs font-light opacity-80 mb-2">
        Created by Motanya
      </p>

      <p className="text-xs font-light opacity-80">
        Getting married?{" "}
        <a
          href="https://motanya.co.ke"
          className="underline hover:opacity-60"
        >
          Create your wedding website for free.
        </a>
      </p>

      <p className="text-xs font-light opacity-80 mt-2">
        Your Privacy Choices
      </p>
    </footer>
  );
}
