export default function Contact() {
    return (
      <section className="container mt-5">
        <header className="text-center mb-4">
          
          <nav className="d-flex justify-content-center gap-4">
            
          </nav>
        </header>
  
        <section id="contact" className="mt-4">
          <h2 className="h4">Contact us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas luctus lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
  
          <form className="mt-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-control" placeholder="Your name" />
            </div>
  
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" id="phone" className="form-control" placeholder="Your phone number" />
            </div>
  
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Your email address" />
            </div>
  
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </section>
      </section>
    );
  }
  