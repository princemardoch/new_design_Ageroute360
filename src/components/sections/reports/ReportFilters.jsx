const ReportFilters = ({ activeTab, setActiveTab, searchQuery, setSearchQuery }) => {
  const tabs = ['All', 'Annual', 'Quarterly', 'Financial', 'Environmental', 'Performance', 'Safety', 'Social']

  return (
    <div className="w-full bg-white rounded-[32px] lg:rounded-[100px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-2 lg:p-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
      
      {/* Search Input */}
      <div className="w-full lg:w-[450px] px-6 py-3.5 rounded-full border border-gray-200 flex items-center gap-3 bg-white transition-colors focus-within:border-brand-amber/50">
        <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Search reports..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-slate-700 text-base font-inter placeholder:text-gray-400"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-end gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm md:text-base font-inter whitespace-nowrap transition-all duration-300 ${
              activeTab === tab 
                ? 'bg-brand-amber text-slate-950 font-medium shadow-sm' 
                : 'bg-transparent text-slate-950 font-normal hover:bg-gray-100 border border-transparent hover:border-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

    </div>
  )
}

export default ReportFilters
