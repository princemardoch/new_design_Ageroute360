const ReportItem = ({ report }) => {
  return (
    <div className="report-card group flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full p-5 md:p-4 bg-white rounded-[24px] md:rounded-[100px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300">
      
      {/* Left Side: Icon & Info */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
        
        {/* Icon Circle */}
        <div className="w-14 h-14 bg-brand-navy rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
          {/* Replaced broken Figma absolute divs with clean SVG */}
          <svg className="w-6 h-6 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        {/* Text Data */}
        <div className="flex flex-col gap-2 md:gap-1.5 w-full">
          <h3 className="text-slate-950 text-base md:text-lg font-semibold font-sora leading-tight">
            {report.title}
          </h3>
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            {/* Category Pill */}
            <div className="px-3 py-1 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-slate-700 text-xs md:text-sm font-medium font-inter">
                {report.category}
              </span>
            </div>
            
            {/* Date & Size */}
            <div className="flex items-center gap-1.5 text-gray-500">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs md:text-sm font-inter">{report.date} • {report.size}</span>
            </div>

            {/* Downloads */}
            <div className="flex items-center gap-1.5 text-gray-500">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="text-xs md:text-sm font-inter">{report.downloads} downloads</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Download Button */}
      <button className="w-full md:w-auto px-6 py-3 md:py-2.5 bg-brand-amber hover:bg-amber-500 rounded-full text-white text-sm md:text-base font-medium font-inter transition-colors duration-300 flex justify-center items-center gap-2 shrink-0 shadow-[0_4px_10px_rgba(242,181,43,0.3)]">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download
      </button>

    </div>
  )
}

export default ReportItem
