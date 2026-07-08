export default function Footer() {
  return (
    <footer className="py-6 text-center text-slate-500 dark:text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800">
      Designed & Built by Your Name © {new Date().getFullYear()}
    </footer>
  );
}