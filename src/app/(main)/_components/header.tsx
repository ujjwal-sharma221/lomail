import { TextLoop } from "@/components/ui/text-loop";

export function Header() {
  return (
    <div className="mt-14 text-5xl">
      <div>Connect with your teemates,</div>
      <div>
        No matter the
        <TextLoop className="ml-4">
          <p>time</p>
          <p>place</p>
          <p>continent</p>
        </TextLoop>
      </div>
    </div>
  );
}
