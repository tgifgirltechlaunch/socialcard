import React from "react";
import FootTitle from "./Footer/FootTitle";

const styles = {
    bottomContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'start',
        marginTop: '5px',
    }
};

export default class Footer extends React.Component {

    render(){

        return(
            <div style={styles.bottomContainer}>
                <FootTitle foottitle={this.props.foottitle} />                
            </div>
        )
    }
}