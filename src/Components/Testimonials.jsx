import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Testimonials = () => {
    const test = [
        {
            text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled to make a type specimen book. It has survived.",
            text1: "MICKY WALLS",
            text2: "MICKY WALLS",
        }, {
            text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled to make a type specimen book. It has survived.",
            text1: "MICKY WALLS",
            text2: "MICKY WALLS",
        }, {
            text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled to make a type specimen book. It has survived.",
            text1: "MICKY WALLS",
            text2: "MICKY WALLS",
        }, {
            text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled to make a type specimen book. It has survived.",
            text1: "MICKY WALLS",
            text2: "MICKY WALLS",
        },

    ]
    return (
        <>

            <div className='testimonials-bg-img'>
                <div>
                    <div className='d-flex justify-content-center'>
                        <h1 className='text-uppercase text-light font-weight-bold'>Testimonials</h1>
                    </div>
                    <div className='d-flex justify-content-center gap-4  '>

                        <img src="https://s3-alpha-sig.figma.com/img/db56/004d/70d21f4a410bbd263ae331757b2a2cf5?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gLO5KB~BlSf5Yr5XFJeJqbQECFfAobeTchrOhGzS-7sM0NYo33UMFkUlJKfKub2xoCQARTahS0aMEIpe12sUoBrO3BkQATwtqWmKWvc4bZf2Y412hgocewAsol2pxy9W3nqu6p~hfXHxLJIi8oqE9Y8TNQZxpVZ3xO5-8~NEcS2aE9VkCTk0rV5kJlZziehXtPMiraDcCQKUeCJr0InaPVhDgy8DRohRyXibTgOvpzxFxX6NYkoLPfEgNM29VFFh4LWzrva2k4TRn2dSSUWaEd0B4LXJMjFvUfOX9uEJIE~8basldrwxS9-B8-fbzbpvLcA635eSAWt~~e3SqUYVBQ__" height="30px" width="200px" alt="" />

                    </div>

                  
                    <div className="row justify-content-center mt-5">
                        {
                            test.map((e, i) => {
                                return (
                                    <div className="col-lg-5 col-md-6 col-sm-10 mb-4">
                                        <div className="d-flex ">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhbvgg8LnebdHHbdGeHY4p8xHCm9SN7DSRA&s"
                                                className="p-1"
                                                height="50"
                                                width="50"
                                                alt=""
                                            />
                                            <p className="p-1 text-light mb-0" style={{ fontSize: "16px" }}>
                                                {e.text}
                                            </p>
                                        </div>

                                        <img src="/Assets/img1.png" className="w-100 mt-3 rounded" alt="" />

                                        <div style={{ marginLeft: "20%" }} className="mt-2 text-white ">
                                            <p className="mb-1 fw-bold">{e.text1}</p>
                                            <p className="fs-sm">{e.text2}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials