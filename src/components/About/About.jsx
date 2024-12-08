import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1920,h_1080,x_0,y_0/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/images%2FImageExchange%2Fmmsport%2F511%2F01hv1g9px4cvp1sr2kb5.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Catch Latest Action with just a click 
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Kaizenime Provides Content with just minutes after the initial release in japan to the screens of the users all over the world to enjoy 
                        </p>
                        <p className="mt-4 text-gray-600">
                            For more of that and more Lets get to know you
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}