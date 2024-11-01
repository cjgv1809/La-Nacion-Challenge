interface ArticlesListHeaderProps {
  title: string;
}

function ArticlesListHeader({ title }: ArticlesListHeaderProps) {
  return (
    <div className="com-titleWithfollow hlp-marginBottom-15">
      <h1 className="com-title-section-xl hlp-marginBottom-40">{title}</h1>
    </div>
  );
}

export default ArticlesListHeader;
