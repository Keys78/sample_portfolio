import React from 'react'

const Navbar = () => {
    return (
        <nav className='max-w-[1920px] mx-auto'>
            <nav className='flex md:flex-row flex-col items-center justify-between py-6 relative w-full nav-adjust'>
                <div className="text-2xl md:mb-0 mb-6">
                    adamKeyes
                </div>
                <div className="flex items-center space-x-10 md:mr-10 mr-0">
                    <a href="https://github.com/Keys78/sample_portfolio" target={'_blank'}>
                        <img src={'/images/icon-github.svg'} alt="github_icon" />
                    </a>
                    <a href="/">
                        <img src={'/images/icon-frontend-mentor.svg'} alt="frontend_mentor_icon" />
                    </a>
                    <a href="/">
                        <img src={'/images/icon-twitter.svg'} alt="twitter_icon" />
                    </a>
                    <a href="/">
                        <img src={'/images/icon-linkedin.svg'} alt="linkedIn_icon" />
                    </a>
                </div>
            </nav>
        </nav>
    )
}

export default Navbar