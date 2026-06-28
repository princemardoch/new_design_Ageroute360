const CompanyFilters = ({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) => {
  const categories = ['All', 'Construction', 'Engineering', 'Consulting', 'Supply', 'Environmental', 'Survey']

  return (
    <div className="w-full bg-white rounded-[40px] md:rounded-full shadow-[0_0_10px_rgba(0,0,0,0.05)] p-2 md:p-4 flex flex-col xl:flex-row justify-between items-center gap-4 xl:gap-0">
      
      {/* Search Input */}
      <div className="w-full xl:w-80 px-5 py-3.5 rounded-full border border-gray-200 flex items-center gap-3 bg-white">
        <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Search companies..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-slate-700 text-sm md:text-base font-inter placeholder:text-gray-400"
        />
      </div>

      {/* Filter Categories */}
      <div className="flex flex-wrap xl:flex-nowrap items-center gap-2 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-inter whitespace-nowrap transition-colors ${
              activeCategory === category 
                ? 'bg-brand-amber text-slate-950 font-medium' 
                : 'bg-white text-slate-950 font-normal border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

    </div>
  )
}

export default CompanyFilters
