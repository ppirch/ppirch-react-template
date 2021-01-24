import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { Typography, Button, Popper, Fade, Paper } from "@material-ui/core"
import { usePopupState, bindToggle, bindPopper } from "material-ui-popup-state/hooks"

const styles = (theme) => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
})

const PopperPopupState = ({ classes }) => {
  const popupState = usePopupState({ variant: "popper", popupId: "demoPopper" })
  return (
    <div>
      <Button variant="contained" {...bindToggle(popupState)}>
        Toggle Popper
      </Button>
      <Popper {...bindPopper(popupState)} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  )
}

PopperPopupState.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PopperPopupState)
