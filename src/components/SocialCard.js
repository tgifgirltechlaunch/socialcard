import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import 'typeface-roboto';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: '25px'
  },
  cardheader: {
    paddingLeft: '13px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 15px 0 15px'
  },
  avatar: {
    backgroundColor: '#0099cc',
    width: 80,
    height: 80,
  },
  weblink: {
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'rgba(0, 0, 0, 0.54)'
  },
  brandwrap: {
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'left',
      justifyContent: 'left',
  },
  companystyle: {
    fontSize: '14px',
    lineHeight: '6px',
    width: '80px',
    textTransform: 'lowercase',
    textAlign: 'left',
  },
  titlestyle: {
    fontSize: '18px',
    lineHeight: '8px',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  datestyle: {
    fontSize: '15px',   
    textAlign: 'center',
    fontWeight: '500px',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  hashtagstyle: {
    fontSize: '10px',
    lineHeight: 'normal',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  logostyle: {
    maxWidth: '80px',
    margin: '0',
    padding: '0'
  },
  ctastyle: {
    textAlign: 'left',
  },
  headerstyle: {
    fontSize: '15px',
    textAlign: 'left',
    lineHeight: '8px',
    fontWeight: '700'
  },
  descstyle: {
    fontSize: '15px',
    textAlign: 'left',
    lineHeight: '14px',
    fontFamily: 'typeface-roboto'
  },
});


class SocialCard extends React.Component {
state = { 
      expanded: false
};

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, company, header, hashtag, avatar, image, title, description, ctaphrase, ctalink, sharelink, likes, landingpage, date } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader className={classes.cardheader}
          avatar={
            <Avatar aria-label={avatar} className={classes.avatar}>
              <img className={classes.logostyle} src={avatar} alt="avatar" />
            </Avatar>
          }
          action={
            <IconButton>
              <a target="_blank" className={classes.weblink} href={landingpage}><LinkIcon /></a>
            </IconButton>
          }
          title={
            <span>
              <div className={classes.brandwrap}>
                <span className={classes.companystyle}>{company}</span>
                <span className={classes.hashtagstyle}>{hashtag}</span>
              </div>
              <p className={classes.titlestyle}>{title}</p>
            </span>
          }
        />
        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <div component="p">
            <p className={classes.headerstyle}>{header}</p>
            <p className={classes.descstyle}>{description}</p>
            <p className={classes.ctastyle}><a target="_blank" alt="Learn More" href={ctalink}>{ctaphrase}</a></p>
          </div>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Badge color="secondary" badgeContent={likes} className={classes.margin}>
          
          <a target="_blank" title="Like us on Facebook" href={sharelink + "&layout=standard&show_faces=false&width=450&action=like&colorscheme=light"}>
            <FavoriteIcon variant="contained"></FavoriteIcon></a>
          </Badge>
          <span className={classes.datestyle}>
             {date}
          </span>
          <IconButton aria-label="sharelink">
            <a target="_blank" alt="Share" href={sharelink}><ShareIcon variant="contained"></ShareIcon></a>
          </IconButton>
        </CardActions>
        
      </Card>
    );
  }
}

SocialCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SocialCard);

