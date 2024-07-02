
const HomeResearchPaper = () => {
    return (
        <div className="mt-5">
        <h1 className="text-4xl text-center">Student's Research</h1>
        <div className="flex justify-center">
            <div className="grid justify-center w-[15%] border-b-4 border-b-green-700 my-5">

            </div>
        </div>
        {/* research card container */}
        <div className="relative  h-fit md:h-[600px]">
            {/* image-1 */}
            <div className="md:absolute md:w-[30%] right-[35%] top-[10%]">
                <img src="https://www.edgeip.com/images/FCK/Image/202201/VIU-UndergradResearch.jpg" alt="" />
            </div>
              {/* image-2*/}
              <div className="md:absolute my-4 md:my-0 md:w-[30%] bottom-[10%] right-[10%]">
                <img className="h-[200px] w-full" src="https://www.uab.edu/service-research/images/pictures/post-grad-opportunities.jpg" alt="" />
            </div>

              {/* image-3*/}
              <div className="md:absolute md:w-[30%] bottom-[10%] left-[10%]">
                <img className="h-[200px] w-full" src="https://dsu.edu/research/_files/research-group.jpg" alt="" />
            </div>
           

        </div>

    </div>
    );
};

export default HomeResearchPaper;