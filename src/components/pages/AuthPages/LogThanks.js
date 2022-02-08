import React from 'react'
import LogThanksHeroSection from '../../layout/AuthLayout/LogThanksHeroSection'
import { thanksObjOne } from '../../data/ThanksData'
import MainNav from '../../layout/MainNav'
import Footer from '../../layout/Footer'

function LogThanks() {
    return (
        <>
        <MainNav />
            <LogThanksHeroSection {...thanksObjOne} />
        <Footer />
        </>
    )
}

export default LogThanks