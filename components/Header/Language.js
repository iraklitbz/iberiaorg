import React from "react";
import { useRouter } from "next/router"
import { useCookies } from 'react-cookie';

const Language = () => {
  const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { locale } = router;

  const switchLanguage = (e) => {
    const locale = e.target.value;
    router.push('/','/', { locale });
    if(cookie.NEXT_LOCALE !== locale){
      setCookie("NEXT_LOCALE", locale, { path: "/" });
    }
  }
  return (
 
      <div className="select margin-left-xs">
        <select
        className="select__input btn btn--subtle" name="select-this" id="select-this"
        onChange={switchLanguage}
        defaultValue={locale}
        >
        <option value="es">ES</option>
        <option value="ge">GE</option>
      </select>
      <svg className="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
    </div>
       
  )
}

export default Language;