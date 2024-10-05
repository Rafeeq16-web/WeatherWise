"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  // State to store the input text, suggestions, and search results
  const [searchText, setSearchText] = useState("");
  const [suggestResult, setSuggestResult] = useState<any[]>([]);

  // Initialize useRouter hook
  const router = useRouter();

  // Function to handle input change and fetch suggestions
  const handleSuggestion = async (event: any) => {
    try {
      const value = event.target.value;
      setSearchText(value);
      if (value) {
        const result = await axios.get(
          "https://autocomplete.search.hereapi.com/v1/autocomplete",
          {
            params: {
              q: value,
              apikey: process.env.NEXT_PUBLIC_HERE_API_KEY,
            },
          }
        );
        setSuggestResult(result.data.items); // Update suggestions based on API response
      }
    } catch (error) {
      console.log(error); // Log any errors
    }
  };

  // Function to handle search action and fetch geocode data
  const handleSearch = async (address: any) => {
    try {
      if (address) {
        const result = await axios.get(
          "https://geocode.search.hereapi.com/v1/geocode",
          {
            params: {
              q: address,
              apikey: process.env.NEXT_PUBLIC_HERE_API_KEY,
            },
          }
        );
        const data = result.data.items[0];
        const queryString = `title=${data.title}&lat=${data.position.lat}&lng=${data.position.lng}`;
        router.push("/weatherPage" + "?" + queryString); // Redirect to weatherPage with query parameters
      }
    } catch (error) {
      console.log(error); // Log any errors
    }
  };

  return (
    <>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search location..."
          value={searchText}
          onChange={handleSuggestion} // Call handleSuggestion on input change
          className="px-4 py-2 border border-gray-300 text-black rounded-md focus:border-none"
        />
      </div>
      {searchText && (
        <div className="absolute left-0 w-full">
          <ul className="w-72 md:w-15.5 text-sm font-medium text-gray-900 bg-white border border-gray-200  overflow-y-scroll max-h-40">
            {suggestResult.map((result, index) => (
              <li
                key={index}
                className="w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSearch(result.title)} // Call handleSearch when a suggestion is clicked
              >
                {result.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Search;
