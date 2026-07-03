const map = () => {
  const maps = [
    {
      name: "Karachi",
      img: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/643c345ed0034d001dcf7caf.jpg",
    },
    {
      name: "Islamabad",
      img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/c6/d5/48.jpg",
    },
    {
      name: "Hyderabad",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=1400&h=-1&s=1",
    },
  ];
  return (
    <>
    <h1 className="p-10 text-center text-5xl font-black mt-20">Rental Locations 📍</h1>
      <div className="flex items-center justify-center max-md:flex-col gap-5 p-5">
        {maps.map((it) => (
          <div className="card bg-base-100 image-full  shadow-sm ">
            <figure>
              <img src={it.img} alt="locations" className=" object-cover h-55 max-md:w-96" />
            </figure>
            <div className="card-body flex items-center justify-center">
              <h2 className="card-title text-3xl font-extrabold">{it.name}</h2>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default map;
