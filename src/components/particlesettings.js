import React, { Component } from "react";
import Particles from "react-tsparticles";


class Particlesettings extends Component{
render(){
    return(
        <div>
            <Particles
            height='1000px' width='100vw'
            id='tsparticels'
            options={{
                background:{
                    color:{
                        value:"#ffffff"
                    },
                },
                fpslimit:60,
                interactivity:{
                    detect_on:'canvas',
                    events:{
                        onClick:{
                            enable:'true',
                            mode:'push'
                        },
                       
                        resize:'true',

                    },
                    modes:{
                        bubble:{
                            distance:400,
                            duration:2,
                            opacity:0.8,
                            size:40

                        },
                        push:{
                            quantity:4,
                        },
                        repulse:{
                            distance:200,
                            duration:0.4,
                        },

                    },
                },
                particles:{
                    color:{
                        value:"#2d2d2d"
                    },
                    links:{
                        color:"#2d2d2d",
                        distance:150,
                        enable:true,
                        opacity:0.5,
                        width:1,

                    },
                    collisions:{
                        enable:true,
                    },
                    move:{
                        direction:'none',
                        enable:'true',
                        out_mode:"bounce",
                        random:false,
                        speed:3,
                        straight:false,
                    },
                    number:{
                        density:{
                            enable:true,
                            value_area:800,
                        },
                        value:80,  
                    },
                    opacity:{
                        value:0.5,
                    },
                    shape:{
                        type:"circle",

                    },
                    size:{
                        random:true,
                        value:5,
                    },
                }

                }

            }
            
            />

        </div>
    )
        
    }
}
export  default Particlesettings;