import Link from "next/link";

interface TagListProps {
  slug: string;
  text: string;
  count: number;
}

function TagsList({ tag: { slug, count, text } }: { tag: TagListProps }) {
  return (
    <Link href={`/tema/${slug}`}>
      {text} ({count})
    </Link>
  );
}

export default TagsList;
