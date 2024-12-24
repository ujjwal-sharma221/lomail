import Image from "next/image";

export function Tagline() {
  return (
    <div className="mt-8 flex items-center justify-center gap-x-6">
      <Image src="/content/star.svg" alt="star" height={60} width={60} />
      <div>
        <div className="flex gap-x-6 font-light">
          <div>
            <p>Location-Aware Smart Suggestions</p>
            <p>Effortless Event Scheduling </p>
            <p>Real-Time Sync </p>
          </div>
          <div>
            <p>Interactive UI</p>
            <p>Your Events, Your Way</p>
          </div>
        </div>
      </div>
    </div>
  );
}
