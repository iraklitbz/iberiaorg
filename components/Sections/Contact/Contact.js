import { useState } from "react";

const ContactoForm = () => {
    const [ mensaje, setMensaje ] = useState({
      name: '',
      email: '',
      texto: ''
    })
    const {name, email, texto } = mensaje;
    const onChange = (e) => {
      setMensaje({
        ...mensaje,
        [e.target.name] : e.target.value
    })
    }
    const onSubmit = (e) => {
      e.preventDefault();
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
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setMensaje({
            name: '',
            email: '',
            texto: ''
          })
        }
      })
      
    }
  return ( 
    <section className="contact-v3 position-relative z-index-1 margin-top-xxl margin-bottom-xxl">
        <div className="container max-width-xs margin-bottom-lg">
          <div className="text-component text-center">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus eos impedit nesciunt voluptates magni vero itaque.</p>
          </div>
        </div>
      
        <div className="container max-width-adaptive-md">
          <div className="grid gap-lg">
            <div className="col-6@md">
              <form onSubmit={onSubmit}>
                <div className="margin-bottom-sm">
                  <label className="form-label margin-bottom-xxs" htmlFor="contactName">Name</label>
                  <input 
                    className="form-control width-100%" 
                    type="text" 
                    name="name" 
                    id="name"  
                    placeholder="Tu nombre"
                    value={name}
                    onChange={onChange}
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
                  />
                </div>
            
                <div className="margin-bottom-sm">
                  <label className="form-label margin-bottom-xxs" htmlFor="contactMessage">Message</label>
                  <textarea 
                    className="form-control width-100%" 
                    rows="9" 
                    name="texto" 
                    id="texto"
                    placeholder="Mensaje"
                    value={texto}
                    onChange={onChange}
                    >

                    </textarea>
                </div>
              
                <div className="text-right">
                  <button className="btn btn--primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
   );
}
 
export default ContactoForm;