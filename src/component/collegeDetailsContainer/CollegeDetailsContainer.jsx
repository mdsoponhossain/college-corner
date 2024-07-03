
const CollegeDetailsContainer = () => {
    return (
        <div className=" bg-base-100  shadow-xl h-fit">
            <h1 className="text-4xl text-center mt-3">Colleges Info</h1>
            <div className="flex justify-center shadow-xl md:shadow-sm">
                <div className="grid justify-center w-[15%] border-b-4 border-b-green-700 my-5">

                </div>
            </div>
            <figure>
                <img className="w-full h-[500px]"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes" />
            </figure>
            <div className="px-2">
                <div className="text-justify">
                    <div className="my-5 ">
                        {/* college name and history */}
                        <h1 className="text-3xl font-bold">College Name</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum delectus earum illo unde nobis beatae officiis nostrum eius, reprehenderit, accusamus, quasi dolore architecto temporibus ab ad error aperiam quam. Hic numquam eligendi unde sapiente? Repellendus autem tenetur delectus sapiente dignissimos iure ducimus mollitia adipisci, unde hic, quia neque, vel nam.</p>
                    </div>
                    college events
                    <div className="my-5">
                        <h1 className="text-3xl font-bold">College events</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum delectus earum illo unde nobis beatae officiis nostrum eius, reprehenderit, accusamus, quasi dolore architecto temporibus ab ad error aperiam quam. Hic numquam eligendi unde sapiente? Repellendus autem tenetur delectus sapiente dignissimos iure ducimus mollitia adipisci, unde hic, quia neque, vel nam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetailsContainer;