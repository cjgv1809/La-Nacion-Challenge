import Link from "next/link";

interface TagListProps {
  slug: string;
  text: string;
  count: number;
}

function TagsList({ tag }: { tag: TagListProps }) {
  return (
    <Link href={`/tema/${tag.slug}`}>
      {tag.text} ({tag.count})
    </Link>
  );
}

export default TagsList;
