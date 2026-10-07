import { useState } from 'react'

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '')
  const [work, setWork] = useState(() => localStorage.getItem('work') || '')
  const [error, setError] = useState('')

  return (
    <main className="min-h-screen w-full bg-white p-0 sm:p-4">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col overflow-hidden border-2 border-[#3E8E41] bg-gradient-to-b from-[#F3FAF1] via-white to-[#F3FAF1] sm:min-h-[calc(100vh-2rem)] sm:rounded-[26px]">
        <header className="flex items-center justify-between px-5 py-4 sm:px-10 sm:py-5">
          <div className="flex items-center text-[26px] font-extrabold leading-none">
            <span className="text-[#2E7D32]">green</span>
            <span className="text-[#57B35A]">Dr</span>
            <svg className="h-[25px] w-[25px]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.4c3.5 4.4 7.2 8.4 7.2 11.9a7.2 7.2 0 1 1-14.4 0C4.8 10.8 8.5 6.8 12 2.4Z" fill="#57B35A" />
              <path d="M12 8.4c1.9 2.5 3.4 4.6 3.4 6.3a3.4 3.4 0 0 1-6.8 0c0-1.7 1.5-3.8 3.4-6.3Z" fill="#2E7D32" opacity=".55" />
            </svg>
            <span className="text-[#57B35A]">p</span>
          </div>
          <span className="text-sm font-medium text-[#2E7D32]">Your personal carbon calculator</span>
        </header>

        <section className="grid flex-1 items-center gap-10 px-5 py-10 sm:grid-cols-2 sm:px-10 lg:gap-20">
          <div className="mx-auto max-w-xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#57B35A]">Small choices. Clear impact.</p>
            <h1 className="text-[38px] font-bold leading-[1.12] text-[#1f2a24] sm:text-[48px] lg:text-[56px]">
              Add a drop of <span className="text-[#2E7D32]">green</span> to your day.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
              Create your profile to start tracking the carbon footprint of your everyday activities.
            </p>
            <div className="mt-9 flex h-40 w-40 items-center justify-center rounded-full bg-[#E3F4DE] sm:h-52 sm:w-52">
              <svg viewBox="0 0 100 100" className="h-28 w-28 sm:h-36 sm:w-36" aria-hidden="true">
                <path d="M50 83V43" fill="none" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
                <path d="M50 57C26 57 20 40 22 22c18-1 34 6 28 35ZM50 69c24 0 30-16 28-34-18-1-34 6-28 34Z" fill="#43A047" />
                <path d="m50 54-20-25m20 35 19-23" fill="none" stroke="#B9E7B7" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <form
            className="mx-auto w-full max-w-md"
            onSubmit={(event) => {
              event.preventDefault()
              const cleanUsername = username.trim()
              if (!cleanUsername || !work) {
                setError('Enter your name and select your work category.')
                return
              }

              localStorage.setItem('work', work)
              localStorage.setItem('username', cleanUsername)
              onLogin()
            }}
          >
            <h2 className="text-3xl font-bold text-[#1f2a24]">Get started</h2>
            <p className="mt-2 text-gray-500">Tell us a little about yourself.</p>

            <label htmlFor="username" className="mt-8 block text-sm font-semibold text-[#2E7D32]">
              Your name <span className="text-red-500">*</span>
            </label>
            <input
              id="username"
              type="text"
              autoComplete="name"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your name"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-gray-700 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
            />

            <label htmlFor="work" className="mt-5 block text-sm font-semibold text-[#2E7D32]">
              Work category <span className="text-red-500">*</span>
            </label>
            <select
              id="work"
              value={work}
              onChange={(event) => setWork(event.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-gray-700 shadow-sm outline-none transition focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20"
            >
              <option value="">Select your work category</option>
              <option value="Desk Work">Desk Work</option>
              <option value="Education">Education</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Transport">Transport</option>
              <option value="Marine">Marine</option>
              <option value="Industrial">Industrial</option>
              <option value="Construction">Construction</option>
              <option value="Farming">Farming</option>
              <option value="Household">Household</option>
              <option value="Business">Business</option>
              <option value="Student">Student</option>
              <option value="Other">Other</option>
            </select>

            {error && <p role="alert" className="mt-4 text-sm font-medium text-red-600">{error}</p>}

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#2E7D32] px-8 py-3 text-[15px] font-semibold text-white shadow-md transition hover:bg-[#256328] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:ring-offset-2"
            >
              OPEN CALCULATOR
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default LoginPage