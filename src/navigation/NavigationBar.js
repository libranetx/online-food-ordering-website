import React from 'react';
import './navigation.css'
import { NavLink } from 'react-router-dom';

function NavigationBar(){
    return(

        <div className="navbar"> 

            <div className="leftnav">
                Scorp Fast Food
            </div>
            <div className="mainnav"></div>
            <div className="rightnav">

                <NavLink to="/" className={({isActive})=>isActive ? "active":""}>Home</NavLink>
                <NavLink to="/order" className={({isActive})=>isActive ? "active":""}>Order</NavLink>
                <NavLink to="/aboutus" className={({isActive})=>isActive ? "active":""}>About Us</NavLink>
                <NavLink to="/custemerfeedback" className={({isActive})=>isActive ? "active":""}>Custemer Feedback</NavLink>
                <NavLink to="/contactus" className={({isActive})=>isActive ? "active":""}>Contact Us</NavLink>
                
            </div>

        </div>




    );
}

export default NavigationBar;