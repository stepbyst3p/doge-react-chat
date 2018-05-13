import React from "react";
import Dialogue from './Dialogue';
import TextArea from './TextArea';
import { withStyles } from "material-ui";

const styles = theme => ({
    main: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItemas: "center",
        paddingTop: 64,
        justifyContent: "center"
    }
})

const Chat = ({ classes, messages }) => (
    <main className={classes.main}>
        <Dialogue messages={messages} />
        <TextArea />
    </main>
)

export default withStyles(styles)(Chat);
