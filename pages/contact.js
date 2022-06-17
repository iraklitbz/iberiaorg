import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Swal from 'sweetalert2';
import { useIntl } from 'react-intl';
import Link from "next/link";

const Contact = () => {
  const intl = useIntl();
  const [loader, setLoader] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [mensaje, setMensaje] = useState({
    name: '',
    email: '',
    texto: ''
  })
  const { name, email, texto } = mensaje;

  const handleCheckClick = () => {
    if (checked) {
      setChecked(false);

    } else {
      setChecked(true);
      setMsgError(false);

    }
  }
  const onChange = (e) => {
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = (e) => {
    if (checked) {
      setMsgError(false);
      e.preventDefault();
      setLoader(true);
      /*VALIDAR FORMULARIO*/
      // Validar que no haya campos vacios
      if (name.trim() === '' ||
        email.trim() === '' ||
        email.trim() === '' ||
        texto.trim() === '') {
        return;
      }


      /*ENVIAR FORMULARIO*/
      fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
      }).then(async (res) => {
        if (res.status === 200) {
          await setTimeout(() => {
            setLoader(false)
            setMensaje({
              name: '',
              email: '',
              texto: ''
            })
            Swal.fire(
              `${intl.formatMessage({ id: "contact5" })}`,
              `${intl.formatMessage({ id: "contact6" })}`,
              'success'
            );
          }, 2000)
        }
      })
    }
    else {
      e.preventDefault();
      setMsgError(true)
    }


  }
  return (
    <MainLayout>
      <section className="feature-v4 margin-y-xl">
        <div className="container max-width-adaptive-lg">
          <div className="feature-v4__grid grid gap-md items-center">
            <div className="col-5@md position-relative z-index-1">


              <div className="text-component">
                <h1 className="text-xxxl feature-v4__text-offset@md">{intl.formatMessage({ id: "contact1" })}</h1>
                <p>{intl.formatMessage({ id: "contact2" })}</p>
              </div>

              <div className="margin-top-sm">

                <form onSubmit={onSubmit}>
                  <div className="margin-bottom-sm">
                    <label className="form-label margin-bottom-xxs" htmlFor="contactName">{intl.formatMessage({ id: "contactname" })}</label>
                    <input
                      className="form-control width-100%"
                      type="text"
                      name="name"
                      id="name"
                      placeholder={`${intl.formatMessage({ id: "contacttu" })} ${intl.formatMessage({ id: "contactname" })}`}
                      value={name}
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className="margin-bottom-sm">
                    <label className="form-label margin-bottom-xxs" htmlFor="contactEmail">{intl.formatMessage({ id: "contactemail" })}</label>
                    <input
                      className="form-control width-100%"
                      type="email"
                      name="email"
                      placeholder={`${intl.formatMessage({ id: "contacttu" })} ${intl.formatMessage({ id: "contactemail" })}`}
                      id="email"
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className="margin-bottom-sm">
                    <label className="form-label margin-bottom-xxs" htmlFor="contactMessage">{intl.formatMessage({ id: "contacttext" })}</label>
                    <textarea
                      className="form-control width-100%"
                      rows="9"
                      name="texto"
                      id="texto"
                      placeholder={`${intl.formatMessage({ id: "contacttext" })}`}
                      value={texto}
                      onChange={onChange}
                      required
                    >

                    </textarea>
                  </div>

                  <div className="flex ">
                    <div className="custom-checkbox margin-right-xxs">
                      <input onChange={() => handleCheckClick()} className="custom-checkbox__input" type="checkbox" aria-label="Checkbox label" />
                      <div className="custom-checkbox__control" aria-hidden="true"></div>
                    </div>
                    <p>{intl.formatMessage({ id: "contact3" })} <Link href="/politica-de-privacidad"><a> {intl.formatMessage({ id: "contactprivacity" })} </a></Link></p>
                  </div>
                  {msgError ? <p className="error text--xs">{intl.formatMessage({ id: "contact4" })}</p> : null}




                  <div className="text-center margin-top-lg">
                    {!loader
                      ?
                      <button className={!checked ? "btn btn--primary btn--disabled" : 'btn btn--primary'}>{intl.formatMessage({ id: "contactsend" })}</button>
                      :
                      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    }

                  </div>
                </form>

              </div>
            </div>

            <div className="col-7@md">
              <figure>
                <img className="block width-100%" src="https://iberiainfo.me/wp-content/uploads/2022/02/contact-scaled.jpg" alt="Image description" />
              </figure>

              <div className="details-list details-list--rows grid details-list--cols@md margin-top-sm">

                <div className="details-list__item padding-y-md padding-x-md@md text-center@md col-6@md">
                  <h6 className="font-bold margin-bottom-xxs">{intl.formatMessage({ id: "contactemail" })}</h6>
                  <dd>
                    <a href="mailto:asociacioniberia@gmail.com">asociacioniberia@gmail.com</a>
                  </dd>
                </div>

                <div className="details-list__item padding-y-md padding-x-md@md text-center@md col-6@md">
                  <h6 className="font-bold margin-bottom-xxs">{intl.formatMessage({ id: "contactphone" })}</h6>
                  <p className="line-height-md">
                    <p><a href="tel:+995599634393">+995 599 634 393</a></p>
                    <p><a href="tel:+995568618086">+995 568 61 80 86</a></p>
                    <p><a href="tel:+34722512017"> +34 722 512 017</a></p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}

export default Contact;
