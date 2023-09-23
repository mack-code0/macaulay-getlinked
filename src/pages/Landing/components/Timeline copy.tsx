const Timeline = () => {
    return (<>
        <div className="tw-h-screen tw-w-full tw-flex tw-justify-center tw-items-center">
            <div className="tw-max-w-7xl tw-mx-auto tw-w-full tw-grid tw-grid-cols-5 tw-gap-y-5 tw-px-2">
                {/* <!-- Stack 1 --> */}
                <div className="tw-relative tw-col-span-1 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-end">
                    <div className="tw-h-full tw-w-1 tw-bg-indigo-300"></div>
                    <div className="tw-absolute tw-w-6 tw-h-6 tw-rounded-full tw-bg-indigo-400 tw-z-10 tw-text-white tw-text-center">
                        1
                    </div>
                </div>
                <div className="tw-col-span-4 tw-w-full tw-h-full">
                    <div className="tw-w-full tw-h-full tw-bg-indigo-400 tw-rounded-md tw-p-2 md:tw-pl-4">
                        <h1 className="tw-text-white tw-text-xl tw-font-medium tw-py-2">Title</h1>
                        <p className="tw-text-gray-100 tw-sm:text-sm tw-text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?
                        </p>
                    </div>
                </div>
                
                {/* <div className="tw-col-span-4 tw-w-full tw-h-full"></div> */}

                {/* <!-- Stack 2 --> */}
                {/* <div className="tw-col-span-4 tw-w-full tw-h-full"></div> */}
                <div className="tw-relative tw-col-span-1 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-end">
                    <div className="tw-h-full tw-w-1 tw-bg-indigo-300"></div>
                    <div className="tw-absolute tw-w-6 tw-h-6 tw-rounded-full tw-bg-indigo-400 tw-z-10 tw-text-white tw-text-center">
                        2
                    </div>
                </div>
                <div className="tw-col-span-4 tw-w-full tw-h-full">
                    <div className="tw-w-full tw-h-full tw-bg-indigo-400 tw-rounded-md tw-p-2 md:tw-pl-4">
                        <h1 className="tw-text-white tw-text-xl tw-font-medium tw-py-2">Title</h1>
                        <p className="tw-text-gray-100 tw-sm:text-sm tw-text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?
                        </p>
                    </div>
                </div>

                {/* <!-- Stack 3 --> */}
                <div className="tw-relative tw-col-span-1 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-end">
                    <div className="tw-h-full tw-w-1 tw-bg-indigo-300"></div>
                    <div className="tw-absolute tw-w-6 tw-h-6 tw-rounded-full tw-bg-indigo-400 tw-z-10 tw-text-white tw-text-center">
                        3
                    </div>
                </div>
                <div className="tw-col-span-4 tw-w-full tw-h-full">
                    <div className="tw-w-full tw-h-full tw-bg-indigo-400 tw-rounded-md tw-p-2 md:tw-pl-4">
                        <h1 className="tw-text-white tw-text-xl tw-font-medium tw-py-2">Title</h1>
                        <p className="tw-text-gray-100 tw-sm:text-sm tw-text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?
                        </p>
                    </div>
                </div>
               
                {/* <div className="tw-col-span-4 tw-w-full tw-h-full"></div> */}
            </div>
        </div>
    </>);
}

export default Timeline;