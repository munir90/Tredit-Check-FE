<input
  type="text"
  className="search-input form-control"
  placeholder="Search property"
  value={searchTerm}
  onChange={(e) => {
    setSearchTerm(e.target.value);
  }}
  onKeyUp={async (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    try {
      if (selectedSites.length === 0) {
        toast.error("Please select a site first.");
        return;
      }
      const siteId = selectedSites[0]; // picking the first selected site
      const props = `?site_id=${siteId}&search=${searchValue}`;
      await orgProperties.request(props);
      setSearchResults(orgProperties?.data || []);
    } catch (err) {
      console.error("Error searching properties:", err);
      toast.error("Failed to search properties");
    }
  }}
/>