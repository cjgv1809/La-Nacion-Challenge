interface HeaderTitleProps {
  title: string;
}

function HeaderTitle({ title }: HeaderTitleProps) {
  return (
    <div className="com-titleWithfollow hlp-marginBottom-15">
      <h1 className="com-title-section-xl hlp-marginBottom-40">{title}</h1>
    </div>
  );
}

export default HeaderTitle;
