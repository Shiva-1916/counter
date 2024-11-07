const MyComponent = ({ items, searchTerm }) => {
    const filteredItems = useMemo(() => {
      return items.filter(item => item.includes(searchTerm));
    }, [items, searchTerm]);
    
    return <ul>{filteredItems.map(item => <li key={item}>{item}</li>)}</ul>;
  };
  
export default MyComponent