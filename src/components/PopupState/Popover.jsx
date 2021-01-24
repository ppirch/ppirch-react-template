import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Popover from "@material-ui/core/Popover"
import { usePopupState, bindTrigger, bindPopover } from "material-ui-popup-state/hooks"

const styles = (theme) => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
})

const PopoverPopupState = ({ classes }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  })
  return (
    <div>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Open Popover
      </Button>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>
    </div>
  )
}

PopoverPopupState.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PopoverPopupState)
