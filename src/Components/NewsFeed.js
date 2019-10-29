import React from "react";
import helpful from './dev_test_assets/helpfullIcon.svg';
import answer_icon from './dev_test_assets/AnswerIcon.svg';
import verified_icon from './dev_test_assets/verified-icon.svg';
import fb_icon from './dev_test_assets/fb icon.svg';
import twt_icon from './dev_test_assets/twitter icn.svg';
import share_icon from './dev_test_assets/share icn.svg';
import like_icon from './dev_test_assets/like reaction icn.svg';
import heart_icon from './dev_test_assets/heart reaction icn.svg';
import clap_icon from './dev_test_assets/Clap reaction icn.svg';
import superb_icon from './dev_test_assets/superb icn.svg';
import dislike_icon from './dev_test_assets/dislike reaction icn.svg';
import anonym_icon from './dev_test_assets/UseranonymousDP.svg';

const NewsFeed = (props) => (
    <div>
        {
            props.repos.map((feed)=>{
                if((feed.likeCount <= '0')&&(feed.userVerified == '0')&&(feed.isAnonymous == '0')){
                
                return(
                    <div key={feed.id} >
                        <div className="card" >
                        <div className="container" >
                
                            <span className="imggap"><img src={feed.userImage} className="User_image"/></span>{' '}
                            <b>{feed.userName}</b>{' '}{' '}
                            <span className="comp_style">{feed.companyName}</span>

                            <div className="width_ctrl">
                                <h4 className="title_style"><strong>{feed.title}</strong></h4>
                                <p>{feed.description}</p>
                                <br></br>
                            </div>

                            <div className="widdth">                                    
                                    <span className="stooltip">
                                        <button type="button" className="btn btn-light social1">
                                            <img src={helpful} />{' '}Helpful
                                        </button>
                                        <span className="tooltiptext">
                                            <img src={like_icon} />{" "}
                                            <img src={heart_icon} />{" "}
                                            <img src={clap_icon} />{" "}
                                            <img src={superb_icon} />{" "}
                                            <img src={dislike_icon} />
                                        </span>
                                    </span>{' '}
                                    
                                    <button type="button" className="btn btn-light" data-toggle="collapse" 
                                    data-target={'#'+feed.id}>
                                        <img src={answer_icon} />{' '}Answer
                                    </button>                           
                                    {' '}<a href="#" className="social1 leftStay"><img src={fb_icon} /></a>
                                    {' '}<a href="#" className="social1"><img src={twt_icon} /></a>
                                    {' '}<a href="#" className="social1"><img src={share_icon} /></a>

                            </div>
                            <hr className="hrwidth"/>

                            <div className="down_div widdth">
                                    
                            </div>

                            <div id={feed.id} className="collapse">
                                    <div className="form-group">
                                            <hr className="hrwidth"/>
                                            <textarea className="form-control" placeholder="Post your answer" ></textarea>
                                    </div>
                                    <button type="button" className="btn btn-info" data-toggle="collapse" 
                                    data-target={'#'+feed.id}>
                                        Submit
                                    </button>
                            </div>
                        </div>
                        </div>
                    </div>
                )
                }
                else if((feed.likeCount <= '0')&&(feed.userVerified == '0')&&(feed.isAnonymous == '1')){
                
                    return(
                        <div key={feed.id} >
                            <div className="card" >
                            <div className="container" >
                    
                                <span className="imggap"><img src={anonym_icon} className=""/></span>{' '}
                                <b>{feed.userName}</b>{' '}{' '}
                                <span className="comp_style">{feed.companyName}</span>
    
                                <div className="width_ctrl">
                                    <h4 className="title_style"><strong>{feed.title}</strong></h4>
                                    <p>{feed.description}</p>
                                    <br></br>
                                </div>
    
                                <div className="widdth">                                    
                                        <span className="stooltip">
                                            <button type="button" className="btn btn-light social1">
                                                <img src={helpful} />{' '}Helpful
                                            </button>
                                            <span className="tooltiptext">
                                                <img src={like_icon} />{" "}
                                                <img src={heart_icon} />{" "}
                                                <img src={clap_icon} />{" "}
                                                <img src={superb_icon} />{" "}
                                                <img src={dislike_icon} />
                                            </span>
                                        </span>{' '}
                                        
                                        <button type="button" className="btn btn-light" data-toggle="collapse" 
                                        data-target={'#'+feed.id}>
                                            <img src={answer_icon} />{' '}Answer
                                        </button>                           
                                        {' '}<a href="#" className="social1 leftStay"><img src={fb_icon} /></a>
                                        {' '}<a href="#" className="social1"><img src={twt_icon} /></a>
                                        {' '}<a href="#" className="social1"><img src={share_icon} /></a>
    
                                </div>
                                <hr className="hrwidth"/>
    
                                <div className="down_div widdth">
                                        
                                </div>
    
                                <div id={feed.id} className="collapse">
                                        <div className="form-group">
                                                <hr className="hrwidth"/>
                                                <textarea className="form-control" placeholder="Post your answer" ></textarea>
                                        </div>
                                        <button type="button" className="btn btn-info" data-toggle="collapse" 
                                        data-target={'#'+feed.id}>
                                            Submit
                                        </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                    }

                    else if((feed.likeCount <= '0')&&(feed.userVerified == '1')&&(feed.isAnonymous == '0')){
                
                        return(
                            <div key={feed.id} >
                                <div className="card" >
                                <div className="container" >
                        
                                    <span className="imggap"><img src={feed.userImage} className=""/></span>{' '}
                                    <b>{feed.userName}</b>{' '}<img src={verified_icon} />{' '}
                                    <span className="comp_style">{feed.companyName}</span>
        
                                    <div className="width_ctrl">
                                        <h4 className="title_style"><strong>{feed.title}</strong></h4>
                                        <p>{feed.description}</p>
                                        <br></br>
                                    </div>
        
                                    <div className="widdth">                                    
                                            <span className="stooltip">
                                                <button type="button" className="btn btn-light social1">
                                                    <img src={helpful} />{' '}Helpful
                                                </button>
                                                <span className="tooltiptext">
                                                    <img src={like_icon} />{" "}
                                                    <img src={heart_icon} />{" "}
                                                    <img src={clap_icon} />{" "}
                                                    <img src={superb_icon} />{" "}
                                                    <img src={dislike_icon} />
                                                </span>
                                            </span>{' '}
                                            
                                            <button type="button" className="btn btn-light" data-toggle="collapse" 
                                            data-target={'#'+feed.id}>
                                                <img src={answer_icon} />{' '}Answer
                                            </button>                           
                                            {' '}<a href="#" className="social1 leftStay"><img src={fb_icon} /></a>
                                            {' '}<a href="#" className="social1"><img src={twt_icon} /></a>
                                            {' '}<a href="#" className="social1"><img src={share_icon} /></a>
        
                                    </div>
                                    <hr className="hrwidth"/>
        
                                    <div className="down_div widdth">
                                            
                                    </div>
        
                                    <div id={feed.id} className="collapse">
                                            <div className="form-group">
                                                    <hr className="hrwidth"/>
                                                    <textarea className="form-control" placeholder="Post your answer" ></textarea>
                                            </div>
                                            <button type="button" className="btn btn-info" data-toggle="collapse" 
                                            data-target={'#'+feed.id}>
                                                Submit
                                            </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        )
                        }

                        else if((feed.likeCount <= '0')&&(feed.userVerified == '1')&&(feed.isAnonymous == '1')){
                
                            return(
                                <div key={feed.id} >
                                    <div className="card" >
                                    <div className="container" >
                            
                                        <span className="imggap"><img src={anonym_icon} className=""/></span>{' '}
                                        <b>{feed.userName}</b>{' '}<img src={verified_icon} />{' '}
                                        <span className="comp_style">{feed.companyName}</span>
            
                                        <div className="width_ctrl">
                                            <h4 className="title_style"><strong>{feed.title}</strong></h4>
                                            <p>{feed.description}</p>
                                            <br></br>
                                        </div>
            
                                        <div className="widdth">                                    
                                                <span className="stooltip">
                                                    <button type="button" className="btn btn-light social1">
                                                        <img src={helpful} />{' '}Helpful
                                                    </button>
                                                    <span className="tooltiptext">
                                                        <img src={like_icon} />{" "}
                                                        <img src={heart_icon} />{" "}
                                                        <img src={clap_icon} />{" "}
                                                        <img src={superb_icon} />{" "}
                                                        <img src={dislike_icon} />
                                                    </span>
                                                </span>{' '}
                                                
                                                <button type="button" className="btn btn-light" data-toggle="collapse" 
                                                data-target={'#'+feed.id}>
                                                    <img src={answer_icon} />{' '}Answer
                                                </button>                           
                                                {' '}<a href="#" className="social1 leftStay"><img src={fb_icon} /></a>
                                                {' '}<a href="#" className="social1"><img src={twt_icon} /></a>
                                                {' '}<a href="#" className="social1"><img src={share_icon} /></a>
            
                                        </div>
                                        <hr className="hrwidth"/>
            
                                        <div className="down_div widdth">
                                                
                                        </div>
            
                                        <div id={feed.id} className="collapse">
                                                <div className="form-group">
                                                        <hr className="hrwidth"/>
                                                        <textarea className="form-control" placeholder="Post your answer" ></textarea>
                                                </div>
                                                <button type="button" className="btn btn-info" data-toggle="collapse" 
                                                data-target={'#'+feed.id}>
                                                    Submit
                                                </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )
                            }

                            else if((feed.likeCount >= '1')&&(feed.userVerified == '0')&&(feed.isAnonymous == '0')){
                
                                return(
                                    <div key={feed.id} >
                                        <div className="card" >
                                        <div className="container" >
                                
                                            <span className="imggap"><img src={feed.userImage} className=""/></span>{' '}
                                            <b>{feed.userName}</b>{' '}{' '}
                                            <span className="comp_style">{feed.companyName}</span>
                
                                            <div className="width_ctrl">
                                                <h4 className="title_style"><strong>{feed.title}</strong></h4>
                                                <p>{feed.description}</p>
                                                <br></br>
                                            </div>
                
                                            <div className="widdth">                                    
                                                    <span className="stooltip">
                                                        <button type="button" className="btn btn-light social1">
                                                            <img src={helpful} />{' '}Helpful
                                                        </button>
                                                        <span className="tooltiptext">
                                                            <img src={like_icon} />{" "}
                                                            <img src={heart_icon} />{" "}
                                                            <img src={clap_icon} />{" "}
                                                            <img src={superb_icon} />{" "}
                                                            <img src={dislike_icon} />
                                                        </span>
                                                    </span>{' '}
                                                    
                                                    <button type="button" className="btn btn-light" data-toggle="collapse" 
                                                    data-target={'#'+feed.id}>
                                                        <img src={answer_icon} />{' '}Answer
                                                    </button>                           
                                                    {' '}<a href="#" className="social1 leftStay"><img src={fb_icon} /></a>
                                                    {' '}<a href="#" className="social1"><img src={twt_icon} /></a>
                                                    {' '}<a href="#" className="social1"><img src={share_icon} /></a>
                
                                            </div>
                                            <hr className="hrwidth"/>
                                            
                                            <div className="down_div widdth">
                                                <a href="#"><img src={like_icon} className="reaction "/></a>{" "}{feed.likeCount}
                                            </div>
                
                                            <div id={feed.id} className="collapse">
                                                    <div className="form-group">
                                                            <hr className="hrwidth"/>
                                                            <textarea className="form-control" placeholder="Post your answer" ></textarea>
                                                    </div>
                                                    <button type="button" className="btn btn-info" data-toggle="collapse" 
                                                    data-target={'#'+feed.id}>
                                                        Submit
                                                    </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                )
                                }
        
    
                                else if((feed.likeCount >= '1')&&(feed.userVerified == '0')&&(feed.isAnonymous == '1')){
                
                                    return(
                                        <div key={feed.id} >
                                            <div className="card" >
                                            <div className="container" >
                                    
                                                <span className="imggap"><img src={anonym_icon} className=""/></span>{' '}
                                                <b>{feed.userName}</b>{' '}{' '}
                                                <span className="comp_style">{feed.companyName}</span>
                    
                                                <div className="width_ctrl">
                                                    <h4 className="title_style"><strong>{feed.title}</strong></h4>
                                                    <p>{feed.description}</p>
                                                    <br></br>
                                                </div>
                    
                                                <div className="widdth">                                    
                                                        <span className="stooltip">
                                                            <button type="button" className="btn btn-light social1">
                                                                <img src={helpful} />{' '}Helpful
                                                            </button>
                                                            <span className="tooltiptext">
                                                                <img src={like_icon} />{" "}
                                                                <img src={heart_icon} />{" "}
                                                                <img src={clap_icon} />{" "}
                                                                <img src={superb_icon} />{" "}
                                                                <img src={dislike_icon} />
                                                            </span>
                                                        </span>{' '}
                                                        
                                                        <button type="button" className="btn btn-light" data-toggle="collapse" 
                                                        data-target={'#'+feed.id}>
                                                            <img src={answer_icon} />{' '}Answer
                                                        </button>                           
                                                        {' '}<a href="#" className="social1 leftStay"><img src={fb_icon} /></a>
                                                        {' '}<a href="#" className="social1"><img src={twt_icon} /></a>
                                                        {' '}<a href="#" className="social1"><img src={share_icon} /></a>
                    
                                                </div>
                                                <hr className="hrwidth"/>
                                                
                                                <div className="down_div widdth">
                                                    <a href="#"><img src={like_icon} className="reaction "/></a>{" "}{feed.likeCount}
                                                </div>
                    
                                                <div id={feed.id} className="collapse">
                                                        <div className="form-group">
                                                                <hr className="hrwidth"/>
                                                                <textarea className="form-control" placeholder="Post your answer" ></textarea>
                                                        </div>
                                                        <button type="button" className="btn btn-info" data-toggle="collapse" 
                                                        data-target={'#'+feed.id}>
                                                            Submit
                                                        </button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    )
                                    }
                        
                                    else if((feed.likeCount >= '1')&&(feed.userVerified == '1')){
                
                                        return(
                                            <div key={feed.id} >
                                                <div className="card" >
                                                <div className="container" >
                                        
                                                    <span className="imggap"><img src={feed.userImage} className="User_image"/></span>{' '}
                                                    <b>{feed.userName}</b>{' '}<img src={verified_icon} />{' '}
                                                    <span className="comp_style">{feed.companyName}</span>
                        
                                                    <div className="width_ctrl">
                                                        <h4 className="title_style"><strong>{feed.title}</strong></h4>
                                                        <p>{feed.description}</p>
                                                        <br></br>
                                                    </div>
                        
                                                    <div className="widdth">                                    
                                                            <span className="stooltip">
                                                                <button type="button" className="btn btn-light social1">
                                                                    <img src={helpful} />{' '}Helpful
                                                                </button>
                                                                <span className="tooltiptext">
                                                                    <img src={like_icon} />{" "}
                                                                    <img src={heart_icon} />{" "}
                                                                    <img src={clap_icon} />{" "}
                                                                    <img src={superb_icon} />{" "}
                                                                    <img src={dislike_icon} />
                                                                </span>
                                                            </span>{' '}
                                                            
                                                            <button type="button" className="btn btn-light" data-toggle="collapse" 
                                                            data-target={'#'+feed.id}>
                                                                <img src={answer_icon} />{' '}Answer
                                                            </button>                           
                                                            {' '}<a href="#" className="social1 leftStay"><img src={fb_icon} /></a>
                                                            {' '}<a href="#" className="social1"><img src={twt_icon} /></a>
                                                            {' '}<a href="#" className="social1"><img src={share_icon} /></a>
                        
                                                    </div>
                                                    <hr className="hrwidth"/>
                                                    
                                                    <div className="down_div widdth">
                                                        <a href="#"><img src={like_icon} className="reaction "/></a>{" "}{feed.likeCount}
                                                    </div>
                        
                                                    <div id={feed.id} className="collapse">
                                                            <div className="form-group">
                                                                    <hr className="hrwidth"/>
                                                                    <textarea className="form-control" placeholder="Post your answer" ></textarea>
                                                            </div>
                                                            <button type="button" className="btn btn-info" data-toggle="collapse" 
                                                            data-target={'#'+feed.id}>
                                                                Submit
                                                            </button>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        )
                                        }
            })
        }
        

    </div>
);

export default NewsFeed;

