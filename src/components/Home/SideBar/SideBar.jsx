import React from 'react'
import Item from './Item/Item';
import profile from '../../../assets/profile.jpg';

const SideBar = () => {
  return (
    <div className='w-[15%] flex-col'>

        <div>
            <div className='flex justify-between'>
                <p className=' uppercase'>Favorites</p>
                <p>All</p>
            </div>

            <Item name="r/funymore" count={156} src={profile}/>
            <Item name="r/funymore" count={156} src={profile}/>
            <Item name="r/funymore" count={156} src={profile}/>
            <Item name="r/funymore" count={156} src={profile}/>

        </div>

        <hr/>

        <div>

        <div className='flex justify-between'>
                <p className=' uppercase'>Reddit feeds</p>
                <p>All</p>
            </div>

            <Item name="r/funymore" count={156} src={profile}/>
            <Item name="r/funymore" count={156} src={profile}/>
            <Item name="r/funymore" count={156} src={profile}/>
            <Item name="r/funymore" count={156} src={profile}/>

        </div>

        <hr/>

        <div>

        <div className='flex justify-between'>
                <p className=' uppercase'>Community</p>
                <p>All</p>
            </div>

            <Item name="r/funymore" count={156} src={profile}/>
            <Item name="r/funymore" count={156} src={profile}/>
            <Item name="r/funymore" count={156} src={profile}/>
            <Item name="r/funymore" count={156} src={profile}/>

        </div>


    </div>
  )
}

export default SideBar