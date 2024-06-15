import React, { useEffect } from 'react';
import {Preloader,Footer,Copyright} from './../child.component';
import Location from './elements/location';
import Map from './elements/map';
import Header from './elements/header';
import Formcontact from './elements/body';
const Contactpage=()=>{  
    useEffect(() => {
        const loadScript = (src) => {
          return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script ${src}`));
            document.body.appendChild(script);
          });
        };
    
        const loadScripts = async () => {
          try {
            await loadScript('/assets/js/jquery-1.11.3.min.js');
            await loadScript('/assets/bootstrap/js/bootstrap.min.js');
            await loadScript('/assets/js/jquery.countdown.js');
            await loadScript('/assets/js/jquery.isotope-3.0.6.min.js');
            await loadScript('/assets/js/waypoints.js');
            await loadScript('/assets/js/owl.carousel.min.js');
            await loadScript('/assets/js/jquery.magnific-popup.min.js');
            await loadScript('/assets/js/jquery.meanmenu.min.js');
            await loadScript('/assets/js/sticker.js');
            await loadScript('/assets/js/form-validate.js');
            await loadScript('/assets/js/main.js');
          } catch (error) {
            console.error('Failed to load scripts', error);
          }
        };
    
        loadScripts();
      }, []);
      return (
        <>
        <Preloader />
            <Header/>
           <Formcontact/>
            <Location/>
            <Map/>
          <Footer/>
          <Copyright/>
        </>
      )
}
export default Contactpage;