import React from 'react';

const BestServices = () => {
    return (
        <div className='max-w-6xl mx-auto py-9 px-4'>
            <div>
                <div className='md:w-1/2 mx-auto text-center m-5'>
                    <h4 className='text-xl uppercase opacity-50 tracking-tight'>Best Service</h4>
                    <h2 className='text-5xl font-bold tracking-tight text-orange-500'>Here to make your life more easier</h2>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 m-5 text-center'>
                    <div className='p-4 flex flex-col items-center justify-center'>
                        <div className='w-[150px]'>
                            <img src="https://cdn-icons-png.flaticon.com/512/10617/10617854.png" alt="" />
                        </div>
                        <h4 className='font-bold text-xl tracking-tight'>Quick Response</h4>
                        <p className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, deserunt?</p>
                    </div>
                    <div className='p-4 flex flex-col items-center justify-center'>
                        <div className='w-[150px]'>
                            <img src="https://png.pngtree.com/png-clipart/20220510/original/pngtree-special-offer-50-off-sale-and-discount-banner-png-image_7694958.png" alt="" />
                        </div>
                        <h4 className='font-bold text-xl tracking-tight'>Best Value</h4>
                        <p className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, deserunt?</p>
                    </div>
                    <div className='p-4 flex flex-col items-center justify-center'>
                        <div className='w-[200px]'>
                            <img src="https://static.vecteezy.com/system/resources/previews/000/541/897/non_2x/vector-online-shopping-illustration.jpg" alt="" />
                        </div>
                        <h4 className='font-bold text-xl tracking-tight'>Cahs Back</h4>
                        <p className='opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, deserunt?</p>
                    </div>
                </div>
            </div>
            {/* <hr className='border-[1px] mt-9' /> */}
        </div>
    );
};

export default BestServices;