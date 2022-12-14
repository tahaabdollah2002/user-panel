import React, { useContext, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import AddUser from './users/AddUser';
import EditDesc from './users/EditDesc';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import WithAlert2 from './HOC/WithAlert2';
import AddPost from './posts/AddPost2'

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
    }
    const renderUser = (confirm, Alert)=> <Users confirm={confirm} Alert={Alert}/>;

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-dark d-md-none m-2 pointer`} 
            onClick={handleShowMenu}
            ></i>
            <Routes>
            {/* <Route path="/" element={<Navigate replace to="/gallery"/>} /> */}
                <Route path='/user' element={
                    <WithAlert2 render={renderUser}/>
                }/>
                <Route path="/user/add" element={<AddUser/>}>
                    <Route path=":userId"/>
                    {/* <Route path=":userId" element={<EditDesc/>} /> */}
                </Route>
                <Route path='/post' element={<Posts/>}/>
                <Route path='/post/add' element={<AddPost/>}>
                    <Route path=':postId'/>
                </Route>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/todo' element={<Todos/>}/>
                <Route path='*' element={
                    <WithAlert2 render={renderUser}/>
                }/>
            </Routes>
        </div>
    )

}

export default Content;