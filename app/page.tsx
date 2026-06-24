import Link from "next/link";

export default function Home() {
  return (
    <main className="page home">
      <h1>StepCamera</h1>
      <p>AI camera · AI 相机</p>
      <div className="links">
        <Link href="/privacy">Privacy / 隐私政策</Link>
        <Link href="/support">Support / 支持</Link>
      </div>
    </main>
  );
}
