import React from "react";
import "./searchPage.css";
import { Button } from "@mui/material";
import SearchResult from "../SearchResult/SearchResult";

const SearchPage = () => {
  const searchResultItems = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
      location: "Private room in center of downtown Los Angels",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest • 1 bedroom •1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine",
      star: "4.73",
      price: "$30 / night",
      total: "$117 total",
    },
    {
      img: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      location: "Entire apartment in Manhattan, New York",
      title: "Luxury Apartment with Central Park View",
      description:
        "3 guests • 1 bedroom •1 bed • 1 bathroom • Wifi • Kitchen • Free parking",
      star: "4.91",
      price: "$150 / night",
      total: "$750 total",
    },
    {
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHJlYWxlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      location: "Entire house in Miami Beach, Florida",
      title: "Beautiful Beachfront House with Pool",
      description:
        "6 guests • 3 bedrooms • 3 beds • 2.5 bathrooms • Wifi • Kitchen • Free parking • Pool",
      star: "4.89",
      price: "$300 / night",
      total: "$1,500 total",
    },
    {
      img: "https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWxlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      location: "Private room in San Francisco, California",
      title: "Cozy Room with Amazing City View",
      description: "2 guests • 1 bedroom •1 bed • 1 bathroom • Wifi • Kitchen",
      star: "4.67",
      price: "$80 / night",
      total: "$320 total",
    },
    {
      img: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      location: "Entire cabin in Gatlinburg, Tennessee",
      title: "Romantic Cabin with Mountain View",
      description:
        "2 guests • 1 bedroom •1 bed • 1 bathroom • Wifi • Kitchen • Free parking",
      star: "4.95",
      price: "$200 / night",
      total: "$1,000 total",
    },
    {
      img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHJlYWxlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      location: "Entire villa in Bali, Indonesia",
      title: "Luxury Villa with Private Pool",
      description:
        "8 guests • 4 bedrooms • 4 beds • 4.5 bathrooms • Wifi • Kitchen • Free parking • Private pool",
      star: "4.87",
      price: "$500 / night",
      total: "$2,500 total",
    },
  ];
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays • 26 august to 30 august • 2 guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      {searchResultItems.map((item, id) => {
        return (
          <SearchResult
            key={id}
            img={item.img}
            location={item.location}
            title={item.title}
            description={item.description}
            star={item.star}
            price={item.price}
            total={item.total}
          />
        );
      })}
    </div>
  );
};

export default SearchPage;
