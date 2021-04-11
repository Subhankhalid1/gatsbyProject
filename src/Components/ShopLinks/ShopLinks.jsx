import React from 'react';

const ShopLinks = () => {

    const array = [1, 2, 3, 4];
    return (
        <section class="text-gray-600 body-font bg-gray-100">
            <div class="container py-24 mx-auto flex shoplink-resp">
                <div className="flex flex-1 justify-around">
                    <div>
                        <div class="flex h-full bg-white py-3 px-5 flex-col">
                            <div class="flex-grow">
                                <p class="leading-relaxed font-bold text-base">Shop Link1</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex h-full bg-white py-3 px-5 flex-col">
                            <div class="flex-grow">
                                <p class="leading-relaxed font-bold text-base">Shop Link2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-around link">
                    <div>
                        <div class="flex h-full bg-white py-3 px-5 flex-col">
                            <div class="flex-grow">
                                <p class="leading-relaxed font-bold text-base">Shop Link3</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex h-full bg-white py-3 px-5 flex-col">
                            <div class="flex-grow">
                                <p class="leading-relaxed font-bold text-base">Shop Link4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopLinks;
