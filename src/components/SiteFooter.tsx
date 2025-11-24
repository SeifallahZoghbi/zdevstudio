export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} ZDevStudio. All rights reserved.</p>
        <p className="text-xs">
          ZDevStudio LLC · Delaware, USA · Apps our team actually uses.
        </p>
      </div>
    </footer>
  );
}
