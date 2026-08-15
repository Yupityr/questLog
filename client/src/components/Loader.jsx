export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
      <div className="relative w-12 h-12 animate-spin [animation-timing-function:steps(8)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500" />
        <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500/90" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-blue-500/80" />
        <div className="absolute bottom-1 right-1 w-2 h-2 bg-blue-500/70" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500/60" />
        <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-500/50" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-blue-500/40" />
        <div className="absolute top-1 left-1 w-2 h-2 bg-blue-500/30" />
      </div>
    </div>
  );
}

export default Loader