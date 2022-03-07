import '../App.css';
import Card from './Card.js'

function Home() {
    return  <div className="home-container">
                <div className="profile-wrapper">
                    <div className="profile-container">
                        <div className="profile-search">
                            <div className="search">
                                <input className="search-input" type="text" placeholder="Search.." />
                            </div>
                        </div>
                        <div className="profile-card-container">
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    map container
                </div>
            </div>;
  }

export default Home;