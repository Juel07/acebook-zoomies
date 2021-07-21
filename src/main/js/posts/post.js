import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareIcon from "@material-ui/icons/Share";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		// maxWidth: 500,
		// backgroundColor: theme.palette.background.paper
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		color: "pink"
	},
	avatar: {
		backgroundColor: red[500]
	},
	mar: {
		marginRight: 15,
		marginLeft: 2
	}
}));

export default function Post(props) {
	const classes = useStyles();

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<ListItem>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar aria-label="user name" className={classes.avatar}>
							JD
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<DeleteOutlineOutlinedIcon />
						</IconButton>
					}
					title="John Doe"
					subheader={new Date(props.post.date).toDateString()}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.post.content}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<Typography
						className={classes.mar}
						onClick={handleExpandClick}
						variant="body2"
						display="block"
						color="textSecondary"
					>
						{props.post.likes}
					</Typography>
					<IconButton
						aria-label="comment"
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
					>
						<ChatBubbleOutlineOutlinedIcon />
					</IconButton>
					<Typography
						className={classes.mar}
						onClick={handleExpandClick}
						variant="body2"
						display="block"
						color="textSecondary"
					>
						0
					</Typography>
					<IconButton>
						<ShareIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							This could be a comment card
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</ListItem>
	);
}
