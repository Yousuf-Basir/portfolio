import React from 'react'
import {Helmet} from "react-helmet";

export default function HalmetHead() {
    return (
        <div>
            <Helmet>
                <title>Portfolio | Joarder Yousuf Basir</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Full stack Javscript Developer | Joarder Yousuf Basir | Portfolio" />
                <link rel="canonical" href="https://yousuf-basir.github.io/Portfolio/" />
            </Helmet>
        </div>
    )
}
