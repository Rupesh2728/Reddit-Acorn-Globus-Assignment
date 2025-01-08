import React from 'react'
import Item from './Item/Item';
import Filter from './Filter/Filter';

const SideBar = ({Handlefilter}) => {
  
   const filterfunc= (filter)=>{
      Handlefilter(filter);
   }
  
   return (
    <div className='w-[14%] flex-col max-h-screen ml-[2rem]'>
        <div className='mt-[1rem]'>
            <Filter filterfunc={filterfunc}/>
        </div>
        
        <div className='border-[0.1rem] border-slate-300 border-t-0 border-l-0 border-r-0 mt-[1rem]'>
           <div className='p-2'>
           <div className='flex justify-between'>
              <p className='uppercase text-[0.7rem] font-semibold'>Favorites</p>
              <p className='text-[0.75rem] text-slate-400 mr-1 font-semibold'>All</p>
            </div>

           <div className='py-[0.35rem]'>
           <Item name="r/funymore" count={156} src="https://png.pngtree.com/png-clipart/20231111/ourlarge/pngtree-4-girls-best-friends-cartoon-friendships-illustration-png-image_10547311.png"/>
            <Item name="r/breakingnews" count={12} src="https://motionarray.imgix.net/1777397-PPrGaElh6g-high_0006.jpg?w=660&q=60&fit=max&auto=format"/>
            <Item name="r/lovestory" count={0} src="https://i.pinimg.com/564x/76/d2/cd/76d2cd78b43429cc60a6b2c88e4e8056.jpg"/>
            <Item name="r/gamingfun" count={8} src="https://t3.ftcdn.net/jpg/05/54/70/70/360_F_554707094_DUYPgYtKSbbzQ3pOGs4R3Bna9pUNM0mX.jpg"/>
           </div>
           </div>

        </div>

      

        <div className='border-[0.1rem] border-slate-300 border-t-0 border-l-0 border-r-0'>
           <div className='p-2'>
           <div className='flex justify-between pt-3'>
              <p className='uppercase text-[0.75rem] font-semibold'>Reddit Feeds</p>
              <p className='text-[0.8rem] text-slate-400 mr-1 font-semibold'>All</p>
            </div>

           <div className='py-[0.35rem]'>
           <Item name="r/movie" count={4} src="https://preview.redd.it/my-picks-for-best-animated-movie-of-each-year-2000-2023-v0-u431utlqpwfc1.jpeg?auto=webp&s=3cfd33eacfda4c605e6b79f5681cec9daf9638ae"/>
            <Item name="r/gaming" count={0} src="https://static.vecteezy.com/system/resources/previews/035/579/311/non_2x/gamer-e-sport-mascot-logo-design-for-gaming-or-streamer-vector.jpg"/>
            <Item name="r/pics" count={32} src="https://www.shutterstock.com/image-photo/make-me-cartoon-animated-picture-600nw-2484219811.jpg"/>
            <Item name="r/gifs" count={0} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvrBW-IEw6dalzXRLZygCS3FpT4-hLMyjhw&s"/>
           </div>
           </div>

        </div>

       

        <div className='border-none'>
           <div className='p-2'>
           <div className='flex justify-between pt-3'>
              <p className='uppercase text-[0.75rem] font-semibold'>Community</p>
              <p className='text-[0.8rem] text-slate-400 mr-1 font-semibold'>All</p>
            </div>

            <div className='py-[0.3rem]'>
            <Item name="r/funymore" count={0} src="https://png.pngtree.com/png-clipart/20231111/ourlarge/pngtree-4-girls-best-friends-cartoon-friendships-illustration-png-image_10547311.png"/>
            <Item name="r/breakingnews" count={0} src="https://motionarray.imgix.net/1777397-PPrGaElh6g-high_0006.jpg?w=660&q=60&fit=max&auto=format"/>
            <Item name="r/gaming" count={43} src="https://t4.ftcdn.net/jpg/06/58/53/77/360_F_658537783_0p9kTPPcYxcDwZVw2ghqgW2RlPNKZRQD.jpg"/>
            <Item name="r/lovestory" count={12} src="https://img.freepik.com/premium-photo/playful-valentines-day-cartoon-love-story-graphcs-00513-02_883586-120624.jpg"/>
            </div>
           </div>

        </div>


    </div>
  )
}

export default SideBar