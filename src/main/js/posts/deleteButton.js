import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
const client = require('../client');

export default function DeleteButton(props) {

    const [deletedState, setDeletedState] = React.useState(false);
    

    const handleDelete = () => {

        setDeletedState(!deletedState);
        let idPost = props.idPost.split("/");
        let idPostElem = idPost[5];

        client({ method: 'DELETE', path: `/api/posts/${idPostElem}`}).then(response => {
            props.refreshPostsBuilder();
        });

    }

    return (
        <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteOutlineOutlinedIcon />
        </IconButton>
    );
}
