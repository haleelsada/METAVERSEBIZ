import React, { useEffect, useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import "./search.css";

const Search = () => {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(-1);

    const handleChange = (e) => {
        setSearch(e.target.value);
        setSelectedItem(-1);
    };

    const handleClose = () => {
        setSearch("");
        setSearchData([]);
        setSelectedItem(-1);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && selectedItem >= 0 && selectedItem < searchData.length) {
            window.open(searchData[selectedItem]?.show?.url || "#");
        } else if (e.key === "ArrowUp" && selectedItem > 0) {
            setSelectedItem(prev => prev - 1);
        } else if (e.key === "ArrowDown" && selectedItem < searchData.length - 1) {
            setSelectedItem(prev => prev + 1);
        }
    };

    useEffect(() => {
        if (search !== "") {
            fetch(`https://eodhd.com/api/search/${search}?api_token=662a4a937c3e33.35977831&fmt=json`)
                .then((res) => res.json())
                .then((data) => {
                    if (Array.isArray(data) && data.length > 0) {
                        setSearchData(data);
                    } else {
                        setSearchData([]);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching search data:', error);
                    setSearchData([]); // Reset searchData in case of error
                });
        } else {
            setSearchData([]);
        }
    }, [search]);

    return (
        <section className='search_section'>
            <div className='search_input_div'>
                <input
                    type='text'
                    className='search_input'
                    placeholder='Search...'
                    autoComplete='off'
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={search}
                />
                <div className='search_icon'>
                    {search === "" ? <SearchIcon /> : <CloseIcon onClick={handleClose} />}
                </div>
            </div>
            <div className='search_result'>
                {searchData.map((data, index) => (
                    <a href={data.show.url} target='_blank' rel="noopener noreferrer" key={index}
                        className={selectedItem === index ? "search_suggestion_line active" : "search_suggestion_line"}>
                        {data.show.name}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Search;
