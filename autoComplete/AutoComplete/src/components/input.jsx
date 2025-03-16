const [searchText, setSearchText] = useState("");
const [autocompleteItems, setAutocompleteItems] = useState([]);
const [showAutocomplete, setShowAutocomplete] = useState(false);

const handleInputChange = (e) => {
  const value = e.target.value;
  setSearchText(value);

  // Filter DB for autocomplete
  if (value) {
    const filtered = localDB
      .filter((item) => item.title.toLowerCase().startsWith(value.toLowerCase()))
      .slice(0, 10);
    setAutocompleteItems(filtered);
    setShowAutocomplete(true);
  } else {
    setShowAutocomplete(false);
  }
};

const handleBlur = () => {
  setShowAutocomplete(false);
};

const handleAutocompleteSelect = (item) => {
  setSearchText(item.title);

  // Add to history if not already present
  if (!searchHistory.find((history) => history.title === item.title)) {
    setSearchHistory([...searchHistory, item]);
  }

  performSearch(item.title);
};
