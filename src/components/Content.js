import React from "react";
import SocialCard from './SocialCard';

const styles = {
    formContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '5px 5px 25px 5px',
        padding: '10px'
    },
    cardContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '5px 5px 25px 5px',
        padding: '10px'
    }
};

export default class Content extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            company: '',
            header: '',
            hashtag: '',
            avatar: '',
            image: '',
            title: '',
            description: '',
            ctaphrase: '',
            ctalink: '',
            sharelink: '',
            likes: '',
            landingpage: '',
            date: ''
        };
    }

    
    render(){
      
        return( 
            <div style={styles.midContainer}>
                
                <div style={styles.cardContainer}>
                    <SocialCard
                    company="Techlaunch" 
                    header="Launch Your Career" 
                    hashtag="#techlaunch"
                    avatar="https://techlaunch.io/images/logos/techlaunch_at_fvi_vertical_dark_bg.png" 
                    image="http://media.nj.com/business_impact/photo/11621371-large.jpg"
                    title="Bootcamp School"
                    description="Get the training you need in a field that is poised to grow. Our students get job offers immediately upon graduating." 
                    ctaphrase="Find Out More"
                    ctalink="http://tech.fvi.edu/" 
                    sharelink="https://www.facebook.com/TechLaunchio/" 
                    likes="200"
                    landingpage="https://techlaunch.io/" 
                    date="October 16, 2018"
                    />
                </div>
            </div>
        )
    }
}