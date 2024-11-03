import Link from "next/link";

interface TagProps {
  slug: string;
  text: string;
  count: number;
}

function Tag({ tag: { slug, count, text } }: { tag: TagProps }) {
  return (
    <Link href={`/tema/${slug}`}>
      {text} ({count})
    </Link>
  );
}

export default Tag;
