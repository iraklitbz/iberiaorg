import { useState } from "react";
import Swal from 'sweetalert2';
import Link from "next/link";

const ContactoForm = () => {
    const [loader, setLoader] = useState(false);
    const [msgError, setMsgError] = useState(false);
    const [checked, setChecked] = useState(false);
    const [ mensaje, setMensaje ] = useState({
      name: '',
      email: '',
      texto: ''
    })
    const {name, email, texto } = mensaje;

    const handleCheckClick = () => {
      if(checked) {
        setChecked(false);
       
      } else {
        setChecked(true);
        setMsgError(false);
       
      }
      console.log(checked)
    }
    const onChange = (e) => {
      setMensaje({
        ...mensaje,
        [e.target.name] : e.target.value
    })
    }
    const onSubmit = (e) => {
      if(checked){
        setMsgError(false);
        e.preventDefault();
        setLoader(true);
        /*VALIDAR FORMULARIO*/
          // Validar que no haya campos vacios
        if( name.trim() === '' || 
        email.trim() === '' || 
        email.trim() === '' || 
        texto.trim() === '' ) {
            console.log('Error')
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
            await setTimeout(() =>{
              console.log(res);
              setLoader(false)
              setMensaje({
                name: '',
                email: '',
                texto: ''
              })
              Swal.fire(
                'Gracias', 
                'El mensaje se ha enviado correctamente y nos pondremos en contacto contigo en breve',
                'success'
              );
            },2000)
          }
        })
      }
      else {
        e.preventDefault();
        setMsgError(true)
      }
     
      
    }
  return ( 
    <section className="contact-v3 position-relative z-index-1 margin-top-xxl margin-bottom-xxl">
        <div className="container max-width-xs margin-bottom-lg">
          <div className="text-component text-center">
            <h1>Contacta con nosotros</h1>
            <p>Si tienes alguna consulta, ¡no dudes en preguntarnos!</p>
          </div>
        </div>

        
      
        <div className="container max-width-adaptive-md margin-top-xl">
          <div className="grid gap-lg">
            <div className="col-6@md margin-auto">
              <form onSubmit={onSubmit}>
                <div className="margin-bottom-sm">
                  <label className="form-label margin-bottom-xxs" htmlFor="contactName">Nombre</label>
                  <input 
                    className="form-control width-100%" 
                    type="text" 
                    name="name" 
                    id="name"  
                    placeholder="Tu nombre"
                    value={name}
                    onChange={onChange}
                    required
                  />
                </div>
            
                <div className="margin-bottom-sm">
                  <label className="form-label margin-bottom-xxs" htmlFor="contactEmail">Email</label>
                  <input 
                    className="form-control width-100%" 
                    type="email" 
                    name="email"
                    placeholder="Tu email" 
                    id="email"
                    value={email}
                    onChange={onChange}
                    required 
                  />
                </div>
            
                <div className="margin-bottom-sm">
                  <label className="form-label margin-bottom-xxs" htmlFor="contactMessage">Mensaje</label>
                  <textarea 
                    className="form-control width-100%" 
                    rows="9" 
                    name="texto" 
                    id="texto"
                    placeholder="Mensaje"
                    value={texto}
                    onChange={onChange}
                    required
                    >

                    </textarea>
                </div>

                <div className="flex ">
                  <div className="custom-checkbox margin-right-xxs">
                    <input onChange={() => handleCheckClick()}  className="custom-checkbox__input" type="checkbox" aria-label="Checkbox label" />
                    <div className="custom-checkbox__control" aria-hidden="true"></div>
                  </div>
                    <p>He leído y acepto la <Link href="/politica-de-privacidad">política de privacidad.</Link></p>
                </div>
                { msgError ? <p className="error text--xs">Este campo es obligatorio</p> : null}
             
                
                 
              
                <div className="text-center margin-top-lg">
                  { !loader 
                    ?
                    <button className={!checked ? "btn btn--primary btn--disabled" : 'btn btn--primary'}>Enviar</button>
                    :  
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                   }
  
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="margin-bottom-lg margin-top-xl container max-width-md">
          <div className="details-list details-list--rows grid details-list--cols@md">
           
            <div className="details-list__item padding-y-md padding-x-md@md text-center@md col-6@md">
              <h6 className="font-bold margin-bottom-xxs">Email</h6>
              <dd>
                <a href="mailto:info@administracionesvesta.com">info@administracionesvesta.com</a>
              </dd>
            </div>
          
            <div className="details-list__item padding-y-md padding-x-md@md text-center@md col-6@md">
              <h6 className="font-bold margin-bottom-xxs">Teléfono</h6>
              <p className="line-height-md">
                <p><a href="tel:+34747496359">+747 496 359</a></p>
              </p>
            </div>
          </div>
        </div>
      </section>
   );
}
 
export default ContactoForm;