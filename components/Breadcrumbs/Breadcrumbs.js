import React from "react";
import Link from "next/link";
import { useIntl } from 'react-intl'
const Bradcrumbs = ({pageCotext}) => {
    const intl = useIntl();
    return ( 
        <nav className="breadcrumbs text-sm" aria-label="Breadcrumbs">
            <ol className="flex flex-wrap gap-xxs">
                <li className="breadcrumbs__item">
                <Link href="/"><a className="color-inherit"> {intl.formatMessage({ id: "home" })} </a></Link>
                    <svg className="icon margin-left-xxxs color-contrast-low" aria-hidden="true" viewBox="0 0 16 16"><polyline fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6.5,3.5 11,8 6.5,12.5 "></polyline></svg>
                </li>

                <li className="breadcrumbs__item">
                    <Link href="/about"><a className="color-inherit"> {intl.formatMessage({ id: `aboutus` })} </a></Link>
                    <svg className="icon margin-left-xxxs color-contrast-low" aria-hidden="true" viewBox="0 0 16 16"><polyline fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6.5,3.5 11,8 6.5,12.5 "></polyline></svg>
                </li>

                <li className="breadcrumbs__item" aria-current="page">Conoce nuestro equipo</li>
            </ol>
        </nav>
     );
}
 
export default Bradcrumbs;