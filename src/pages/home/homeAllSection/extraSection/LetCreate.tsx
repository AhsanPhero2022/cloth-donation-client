const LetCreate = () => {

  return (
    <div className="w-full h-full min-h-[80vh] bg-cover text-white"
    style={{backgroundImage: `url(${'https://images.squarespace-cdn.com/content/v1/5ccce0db7d0c911176c61811/1558990732883-Z62VYIGZJOU9GZBHDWYQ/photo-1459183885421-5cc683b8dbba-2.jpeg?format=2500w'})`}}
    >
      <div className="lg:flex justify-center items-center lg:pt-36 gap-4 ">
        <div className="mb-4 space-y-5">
          <h1 className="text-7xl font-bold ">Let's<br/>create a winter <br/> clothes-free <br/>world</h1>
          <p>Together we can eliminate The HIV / AIDS epidemic. </p>
          <button className="btn btn-warning ">Join the cause</button>
        </div>
        <div className=" h-[500px] backdrop-blur-sm bg-white/5 rounded-md border border-white space-y-4 bg-white text-black">
            <h2 className="bg-green-500 p-3 rounded font-semibold">Choose amount</h2>
           <div className="px-8 py-4 space-y-4 ">
           <div className="text-center">
           <button className="btn btn-success me-2">One-time</button>
            <button className="btn btn-outline ">Monthly</button>
           </div>
            <h2 className="text-center text-white">You can log in to edit your recurring donation any time</h2>
            <div className="flex gap-2 text-white">
                <p className="text-1xl font-bold p-4 border border-black">usd$ 25</p>
                <p className="text-1xl font-bold p-4 border border-black">usd$ 50</p>
                <p className="text-1xl font-bold p-4 border border-black">usd$ 100</p>
                <p className="text-1xl font-bold p-4 border border-black">usd$ 500</p> 
                
            </div>
           <div className="space-y-4 ">
           <input
           placeholder="USD$ 120"
           type="text"className="p-2 w-full border border-black h-12 rounded" />
            <button className="btn btn-success w-full ">Next</button>
           </div>
           </div>
        </div>
        
      </div>
    </div>
  );
};

export default LetCreate;
