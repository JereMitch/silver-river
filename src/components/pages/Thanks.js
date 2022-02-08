import React from 'react'
import ThanksHeroSection from '../layout/ThanksHeroSection'
import { thanksObjOne } from '../data/ThanksData'
import MainNav from '../layout/MainNav'
import Footer from '../layout/Footer'

function Thanks() {
    return (
        <>
        <MainNav />
            <ThanksHeroSection {...thanksObjOne} />
        <Footer />
        </>
    )
}

export default Thanks