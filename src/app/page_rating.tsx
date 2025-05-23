import { EmojiRating } from "@/components/EmojiRating";

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <EmojiRating rate={3.2} />
    </div>
  );
}
