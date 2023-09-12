import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
const Header = () => {
    return (
        <div className="header">
            <div  >
                
            <img className="logo-img" src="https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI=" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                    home
                    </li>
                    <li>
                    contact
                    </li>
                    <li>
                    About as
                    </li>
                    <li>
                    Cart
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#dff0de"
}
const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            
            <img className="card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bsmrlvfiv4zvmfr9nv1s" alt="" />
            <h3>cm biriyanni shop</h3>
            <h4>Biriyani,north Indian,asian</h4>
            <h4>4.4 star</h4>
            <h4>30 minitue</h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">
            Search
            </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)