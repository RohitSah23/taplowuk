// components/BackgroundPattern.tsx
export default function BackgroundPattern() {
  return (
    <div
      className="
        absolute inset-0
        bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%),
             linear-gradient(-45deg,transparent_35%,rgba(30,64,175,0.1)_35%,rgba(30,64,175,0.1)_65%,transparent_65%)]
        bg-[length:20px_20px]
        opacity-30
        z-0
      "
    />
  );
}
