function BorderAnimatedContainer({ children }) {
  return (
    <div
      className="
        relative w-full h-full rounded-2xl p-[1.5px]
        animate-border
        bg-[conic-gradient(from_var(--border-angle),#0f172a_70%,#22d3ee_85%,#0f172a)]
      "
    >
      <div
        className="
          w-full h-full rounded-2xl
          bg-slate-900/95
          backdrop-blur-xl
          overflow-hidden
        "
      >
        {children}
      </div>
    </div>
  );
}

export default BorderAnimatedContainer;
