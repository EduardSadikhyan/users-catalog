interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export const SearchInput = ({ value, onChange, onClear }: SearchInputProps) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search by name..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <button className="search__clear" type="button" onClick={onClear}>
          Clear
        </button>
      )}
    </div>
  );
};
