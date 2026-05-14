import React, { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Nav from '../../pages/Shared/Nav';
import Footer from '../../pages/Shared/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Preloader from '../../pages/Shared/Preloader';
import Cursor from '../../pages/Shared/Cursor';

const Root = () => {

    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);

    // initial load
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const showLoader = loading || navigation.state === "loading";

    return (
        <>
            {showLoader ? (
                <Preloader />
            ) : (
                <>
                    <Cursor />
                    <ScrollToTop />
                    <Nav />
                    <Outlet />
                    <Footer />
                </>
            )}
        </>
    );
};

export default Root;