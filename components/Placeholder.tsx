export default function Placeholder({ label }: { label: string }) {
  return (
    <div className="placeholder">
      <span>{label}</span>
    </div>
  );
}
