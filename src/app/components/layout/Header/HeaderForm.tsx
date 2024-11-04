interface HeaderFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setIsSearchActive: (isSearchActive: boolean) => void;
}

function HeaderForm({
  handleSubmit,
  searchTerm,
  handleSearch,
  setIsSearchActive,
}: HeaderFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="com-search__input"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearch}
        onClick={() => setIsSearchActive(true)}
      />
    </form>
  );
}

export default HeaderForm;
