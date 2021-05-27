
const Index = () => (
    <div className="color-bg">
        <div className="container mx-auto  p-5 mt-10">
            <div className="md:flex justify-between">
                <div className="w-full md:w-1/3">
                    <img className="" src="/images/lofo-leaf.png" />
                    <h1 className="Futura text-2xl md:text-5xl text-white font-bold mb-10 ">Delight your customers and  boost your sustainability branding.</h1>
                    <p className="Helvetica Neue mb-8 text-white md:text-sm">With Footprint, you will make your orders ClimateNeutral and empower your customers to choose which climate project to support.<span className="color-green"> 🌿</span></p>
                    <p className="Helvetica Neue md:text-sm text-white">Questions about our product?</p>
                    <a className="Helvetica Neue md:text-sm color-green text-link " href="#">Get in touch!</a>
                </div>
                <div className="mt-2 md:mt-0 md:pl-20 text-center md:text-right relative" >
                <div className="relative flex justify-center items-center">
                    <div className="w-full md:w-96 flex flex-col items-center absolute">
                        <a href="#"><img className="mb-2" src="images/play-icon.png" /></a>
                    </div>
                    <img className="w-full" src="images/home-img.png" />
                </div>
                    <a className="Helvetica Neue text-sm  inline-block mr-9 text-white text-link" href="#">Learn more<span className="pl-2 text-sm"><i className="fas fa-angle-right"></i></span></a>
                </div>
            </div>
            <div className="flex justify-between items-center mt-28 mb-10 ">
                <img className="logo" src="images/footprintlogo.png" />
                <a className="Futura text-white md:mr-9 color-bg-green-1 py-3 px-6 rounded-2xl" href="category.html">Get started<span className="pl-2"><i className="fas fa-angle-right"></i></span></a>
            </div>
        </div>
    </div>
  );
  
export default Index;