import * as React from "react"
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core"
import { usePopupState, bindTrigger, bindMenu } from "material-ui-popup-state/hooks"
import { Inbox as InboxIcon, Mail as MailIcon } from "@material-ui/icons"

const MenuPopupState = () => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" })
  return (
    <div>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Open Menu
      </Button>

      <Drawer {...bindMenu(popupState)}>
        <div style={{ width: 250 }} role="presentation" onClick={popupState.close} onKeyDown={popupState.close}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default MenuPopupState
