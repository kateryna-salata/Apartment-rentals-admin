const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <h1>About Us</h1>
      <div className="about-box">
        <div>
          <h2>Rental Apartment Project</h2>
          <p className="card about-text">
            Our platform is engineered to simplify rental management through an
            innovative and user-friendly interface. With the admin dashboard,
            managing and curating apartment listings has never been easier. The
            standout bookmarking functionality allows administrators to swiftly
            access and focus on key properties, boosting both productivity and
            system usability. Designed with the user in mind, the admin
            dashboard offers a streamlined experience, enabling ease of
            navigation and efficiency in daily tasks. Each feature is
            thoughtfully integrated to enhance the overall user experience,
            allowing administrators to effortlessly update, delete, or highlight
            apartment listings. The bookmarking system is a powerful tool that
            transforms the way properties are managed. It provides admins with a
            personalized workspace where their favorite properties are a click
            away, ensuring that critical listings are never overlooked and can
            be actioned swiftly. Beyond managing property data, our platform
            includes integrated analytics that helps administrators make
            informed decisions. The visual representation of data trends and
            insights offer a deeper understanding of market dynamics and
            property performance, empowering admins with the knowledge to
            optimize their operations. Moreover, our commitment to security
            ensures that all data processed through the platform is safeguarded
            with the highest standards of protection, ensuring peace of mind for
            all users. This secure environment supports multi-user access,
            allowing team collaboration while maintaining data integrity. In
            summary, our Intuitive Rental Oversight platform is more than just a
            management tool—it's a strategic partner in enhancing property
            oversight and administration. Whether you're monitoring real-time
            updates, customizing property views, or navigating the dashboard,
            our platform elevates the rental management experience to new
            heights.
          </p>
        </div>
        <div>
          <h2>Dev Team</h2>
          <div className="dev-card-box">
            <div className="card dev-card">
              <h3>Franziska Scheer</h3>
              <div>
                <a href="https://www.linkedin.com/in/franziska-scheer-9981b9207/">
                  LinkedIn
                </a>
                <a href="https://github.com/girsy01">GitHub</a>
              </div>
            </div>
            <div className="card dev-card">
              <h3>Hernani Silva</h3>
              <div>
                <a href="http://www.linkedin.com/in/hernani-silva-560a7b272">
                  LinkedIn
                </a>
                <a href="https://github.com/hcs-silva">GitHub</a>
              </div>
            </div>
            <div className="card dev-card">
              <h3>Kateryna Salata</h3>
              <div>
                <a href="www.linkedin.com/in/kateryna-salata-a54b111aa">
                  LinkedIn
                </a>
                <a href="https://github.com/kateryna-salata">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
