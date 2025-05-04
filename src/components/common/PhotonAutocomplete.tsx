import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FiChevronDown } from "react-icons/fi";

interface PhotonAutocompleteProps {
  value: string;
  onSelect: (val: string) => void;
}

const PhotonAutocomplete = ({ value, onSelect }: PhotonAutocompleteProps) => {
  const [query, setQuery] = useState(value || "");
  const [results, setResults] = useState<
    { properties: { name: string; country: string } }[]
  >([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 2) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const res = await axios.get("https://photon.komoot.io/api", {
      params: { q: value, limit: 5 },
    });

    setResults(res.data.features || []);
    setShowDropdown(true);
  };

  const handleSelect = (place: { name: string; country: string }) => {
    const selected = `${place.name}, ${place.country}`;
    setQuery(selected);
    onSelect(selected);
    setShowDropdown(false);
    inputRef.current?.blur();
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full">
        <input
          type="text"
          ref={inputRef}
          placeholder="Selec a destination"
          value={query}
          onChange={handleSearch}
          className="autocomplete-input"
        />
        <FiChevronDown
          size={18}
          className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
        />
      </div>

      {showDropdown && results.length > 0 && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded border border-gray-200 bg-white shadow">
          {results.map((place, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => handleSelect(place.properties)}
            >
              {place.properties.name}, {place.properties.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhotonAutocomplete;
