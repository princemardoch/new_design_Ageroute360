import { Link } from 'react-router-dom'

const CompanyCard = ({ company }) => {
  return (
    <Link 
      to={`/companies/${company.id || 1}`}
      className="company-card flex flex-col p-6 bg-white rounded-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-50 group"
    >
      
      {/* Top Section: Avatar & Name */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-cyan-950 rounded-full flex justify-center items-center group-hover:scale-105 transition-transform duration-300 shadow-md">
          <span className="text-white text-2xl font-semibold font-sora tracking-wide">
            {company.initials}
          </span>
        </div>
        <h3 className="text-center text-slate-950 text-lg md:text-xl font-semibold font-sora leading-snug">
          {company.name}
        </h3>
      </div>

      {/* Middle Section: Meta Info Grid */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 w-full mb-8">
        
        {/* Verified Status */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 shrink-0">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-green-500 text-sm font-normal font-inter">Verified</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-500 text-sm font-normal font-inter truncate">{company.location}</span>
        </div>

        {/* Category Type */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-gray-500 text-sm font-normal font-inter truncate">{company.type}</span>
        </div>

        {/* Projects / Rating */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-950/80 text-sm font-normal font-inter">{company.projectCount} Projects</span>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md">
            <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-slate-950/80 text-xs font-bold font-inter">{company.rating}</span>
          </div>
        </div>

      </div>

      {/* View Profile Button */}
      <div className="mt-auto w-full py-3 rounded-full border border-gray-200 group-hover:bg-brand-amber group-hover:border-brand-amber transition-colors duration-300 flex justify-center items-center gap-2">
        <span className="text-brand-amber group-hover:text-slate-950 text-sm font-bold font-inter transition-colors">
          View Profile
        </span>
        <svg className="w-4 h-4 text-brand-amber group-hover:text-slate-950 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>

    </Link>
  )
}

export default CompanyCard
