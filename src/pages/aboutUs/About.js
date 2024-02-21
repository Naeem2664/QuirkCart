import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";


const team=[{
  name:'Muhammad Naeem',
  role:'Founder',
  fb:{
    icon:<FaFacebookF></FaFacebookF>,
    link:""
  },
  linkedin:{
    icon:<FaLinkedinIn/>,
    link:""
  },
  instagram:{
    icon:<FaInstagram/>,
    link:""
  }

},
{
name:'Ali Muhammad',
role:'Manager',
fb:{
  icon:<FaFacebookF></FaFacebookF>,
  link:""
},
linkedin:{
  icon:<FaLinkedinIn/>,
  link:""
},
instagram:{
  icon:<FaInstagram/>,
  link:""
}

},
{
  name:'Sardar Ali Haider',
  role:'CEO',
  fb:{
    icon:<FaFacebookF></FaFacebookF>,
    link:""
  },
  linkedin:{
    icon:<FaLinkedinIn/>,
    link:""
  },
  instagram:{
    icon:<FaInstagram/>,
    link:""
  }
  
  },
  {
    name:'Muhammad Bilal',
    role:'Production Manager',
    fb:{
      icon:<FaFacebookF></FaFacebookF>,
      link:""
    },
    linkedin:{
      icon:<FaLinkedinIn/>,
      link:""
    },
    instagram:{
      icon:<FaInstagram/>,
      link:""
    }
    
    }
]
const About = () => {
  return (
    <>
    <div className="container about mt-5">
    <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mt-4 pt-2">
                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://www.bootdey.com/image/241x362/FFB6C1/000000" className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://www.bootdey.com/image/337x450/87CEFA/000000" className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 mt-4 pt-2">
                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://www.bootdey.com/image/600x401/FF7F50/000000" className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div className="section-title ml-lg-5">
                <h1 className="text-custom font-weight-normal mb-3">About Company</h1>
                <h4 className="title mb-4">
                    Our mission is to <br />
                    make your shopping easier.
                </h4>
                <p className="text-muted mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?</p>
            </div>
        </div>
        
    </div>
    
</div>
<div>
<div class="container bootdey mt-5">
        <div class="row">
            <div class="col-12 text-center">
                <div class="section-title mb-4 pb-2">
                    <h4 class="title mb-4">Our Business Minds</h4>
                    <p class="text-muted para-desc mx-auto mb-0">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
                </div>
            </div>
        </div>

        <div class="row">
          {team.map((member)=>(
            <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="team text-center rounded p-3 py-4">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                <div class="content mt-3">
                    <h4 class="title mb-0">{member.name}</h4>
                    <small class="text-muted">{member.role}</small>
                    <ul class="list-unstyled mt-3 social-icon social mb-0">
                        <li class="list-inline-item"><a href={member.fb.link} className="rounded text-blue-400 hover:text-gray-600" >{member.fb.icon}</a></li>
                        <li class="list-inline-item"><a href={member.instagram.link} className="rounded  text-pink-500 hover:text-gray-600">{member.instagram.icon}</a></li>
                        <li class="list-inline-item"><a href={member.linkedin.link} className="rounded  text-blue-500 hover:text-gray-600">{member.linkedin.icon}</a></li>
                    </ul>
                </div>
            </div>
        </div>
          ))}
        </div>
    </div>
		</div>
    </>
  )
}

export default About
