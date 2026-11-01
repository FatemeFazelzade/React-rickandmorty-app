import { Loader2 } from "lucide-react";
function Loader() {
  return (
    <div
      style={{
        color: "var(--slate-300)",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <p> Loading Data...</p>
      <Loader2
        className="animate-spin"
        style={{ width: "1.3rem", height: "1.3rem" }}
      />
    </div>
  );
}

export default Loader;
