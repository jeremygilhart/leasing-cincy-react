function HouseDescription() {
  return (
  <div className="House-description">
    <div className="House-description-text-section">
      <h2>4026 S Madion Ave</h2>
      <h3>Norwood, OH, 45212</h3>
      <h2>3</h2>
      <h3>Bedrooms</h3>
      <h2>1 ½</h2>
      <h3>Bathrooms</h3>
      <h2>1432</h2>
      <h3>Squarefeet</h3>
      <h2>$1,855</h2>
      <h3>Monthly Rent</h3>
      <h2>Available June 1st</h2>
      <a href = "./property">
        <button className = "more-info-button">
          <p>More Info</p>
        </button>
      </a>
    </div>
  </div>
  );
}



function HouseSection() {
  return (
      <div className="House-section">
        <HouseDescription />
      </div>
  );
}

function NoMoreHomes() {
  return (
      <div className="no-more-homes">
        <h1>Sorry!</h1>
        <h3>There are no more properties available for lease at this time. Please come back soon!</h3>
      </div>
    )

}


function PropertyList() {
  return (
    <div className="Home">
      <section>
      <div className="Titlebar-offset"></div> 
      <HouseSection />
      </section>
      <div className="Between-house-offset"></div>
      <section>
        <div className="Between-house-offset"></div>
        <HouseSection />
        <div className="Between-house-offset"></div>
      </section>
      <section>
        <div className="Between-house-offset"></div>
        <HouseSection />
        <div className="Between-house-offset"></div>
      </ section>
      <section>
        <div className="Between-house-offset"></div>
        <NoMoreHomes />
      </ section>
    </div>
  );
}

export default PropertyList;