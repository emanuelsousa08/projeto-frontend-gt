import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        if(searchTerm.trim()){
            navigate(`/products?filter=${encodeURIComponent(searchTerm.trim())}`);
        }
    };
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSearch();
        }
    };

    return ( 
        <>
        <div className="hidden lg:flex relative w-full max-w-lg pl-6">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              className="w-full bg-light-gray-3 p-3 border-none rounded-md outline-offset-2 focus:outline-primary focus:ring-primary transition-colors duration-250"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
            onClick={handleSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-light-gray hover:text-tertiary transition">
                <i className="pi pi-search text-light-gray-2 absolute right-4 top-1/2 -translate-y-1/2" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <button
                className={`transition-colors duration-300 ${isSearchOpen ? 'text-primary':'text-light-gray-2'}`}
                onClick={() => setIsSearchOpen(prev => !prev)}
              >
                <i className="pi pi-search"></i>
              </button>
            </div>
        </div>
        </>
     );
}
 
export default SearchBar;

