import React, { useState } from 'react'
import { Search, Briefcase, Building2, MapPin, DollarSign, CalendarDays, User2, ChevronDown } from 'lucide-react'

export default function Component() {
  const [jobType, setJobType] = useState('Full-time')
  const [experience, setExperience] = useState('Entry Level')

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">5addamni</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded">Find Jobs</a>
            <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded">Company Reviews</a>
            <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded">Career Advice</a>
            <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded">For Employers</a>
            <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded">Sign In</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-blue-700 text-white py-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Find Your Dream Job</h2>
            <p className="text-xl mb-6">Search thousands of job listings from top companies</p>
            <div className="bg-white p-4 rounded-lg flex flex-wrap gap-2">
              <div className="flex items-center bg-gray-100 text-gray-700 p-2 rounded flex-grow">
                <Search className="mr-2" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="bg-transparent w-full focus:outline-none"
                />
              </div>
              <div className="flex items-center bg-gray-100 text-gray-700 p-2 rounded">
                <MapPin className="mr-2" />
                <input
                  type="text"
                  placeholder="City, state, or zip code"
                  className="bg-transparent w-full focus:outline-none"
                />
              </div>
              <button className="bg-green-600 text-white p-2 rounded font-bold hover:bg-green-700 transition-colors">
                Search Jobs
              </button>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Featured Job Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Software Engineer", company: "TechCorp", location: "San Francisco, CA", salary: "$120,000 - $160,000" },
                { title: "Marketing Manager", company: "BrandBoost", location: "New York, NY", salary: "$80,000 - $110,000" },
                { title: "Data Analyst", company: "DataDrive", location: "Chicago, IL", salary: "$70,000 - $90,000" },
                { title: "UX Designer", company: "DesignPro", location: "Seattle, WA", salary: "$90,000 - $120,000" },
                { title: "Sales Representative", company: "SalesStar", location: "Miami, FL", salary: "$60,000 - $80,000" },
                { title: "Product Manager", company: "InnovateCo", location: "Austin, TX", salary: "$100,000 - $140,000" }
              ].map((job, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-2 flex items-center">
                      <Building2 className="mr-2 h-4 w-4" /> {job.company}
                    </p>
                    <p className="text-gray-600 mb-2 flex items-center">
                      <MapPin className="mr-2 h-4 w-4" /> {job.location}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <DollarSign className="mr-2 h-4 w-4" /> {job.salary}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 border-t border-gray-200">
                    <button className="w-full bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Explore Jobs by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Technology", "Healthcare", "Finance", "Education",
                "Marketing", "Sales", "Customer Service", "Engineering"
              ].map((category) => (
                <a
                  key={category}
                  href="#"
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{category}</h3>
                    <p className="text-gray-600 mt-2">View Jobs</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Advanced Job Search</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="job-type" className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                <div className="relative">
                  <select
                    id="job-type"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                <div className="relative">
                  <select
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                    <option>Executive</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                <input
                  type="text"
                  id="salary"
                  placeholder="e.g. $50,000 - $80,000"
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="date-posted" className="block text-sm font-medium text-gray-700 mb-1">Date Posted</label>
                <div className="relative">
                  <select
                    id="date-posted"
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option>Any time</option>
                    <option>Past 24 hours</option>
                    <option>Past week</option>
                    <option>Past month</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-4 bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Browse Jobs</a></li>
              <li><a href="#" className="hover:underline">Company Reviews</a></li>
              <li><a href="#" className="hover:underline">Salary Calculator</a></li>
              <li><a href="#" className="hover:underline">Career Advice</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">For Employers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Post a Job</a></li>
              <li><a href="#" className="hover:underline">Recruiting Solutions</a></li>
              <li><a href="#" className="hover:underline">Screening & Assessment</a></li>
              <li><a href="#" className="hover:underline">Advertise with Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">About JobHub</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Work at JobHub</a></li>
              <li><a href="#" className="hover:underline">Press Center</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2023 JobHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}