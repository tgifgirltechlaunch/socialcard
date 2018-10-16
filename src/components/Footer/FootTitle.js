import React from "react";
const styles = {
    foottitlestyle:{
        textTransform: 'capitalize'
    }
};
export default class FootTitle extends React.Component {
   
    render(){
        
        return(
            <h1 style={styles.foottitlestyle}>
                {this.props.foottitle}
            </h1>
        );
    }
}