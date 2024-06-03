import StreamVideoProvider from "@/providers/StreamVideoProvider";

export default function layout({ children }: { children: React.ReactNode }) {
  return <StreamVideoProvider>{children}</StreamVideoProvider>;
}
