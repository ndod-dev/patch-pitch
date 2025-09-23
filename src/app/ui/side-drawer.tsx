import React from "react";
import { Drawer } from 'rsuite';

/**
 * Properties for the side drawer component.
 *  @param {boolean} isOpen - Open state of the drawer.
 *  @param {React.ReactNode} - Child components.
 */
type DrawerProps = {
    isOpen: boolean,
    setOpen: (setOpen: boolean) => void
}

/**
 * a toggleable drawer component.
 * @constructor
 * @param props - Config props for the SideDrawer component.
 */
export default function SideDrawer(props: DrawerProps) {
    const {isOpen, setOpen} = props ? props : false;
    
    if (!isOpen) {
        console.log('Drawer closed');
    }

    const onToggleOpen = state => {
        setOpen(state);
    };
    
    return (
        <Drawer placement='right' open={isOpen} onClose={() => onToggleOpen(false)}>
            <Drawer.Header>
                <Drawer.Actions>
                </Drawer.Actions>
            </Drawer.Header>
            <Drawer.Body>
                <p>New Patch</p>
                <p>New Quilt</p>
                <p>Account Settings</p>
            </Drawer.Body>
        </Drawer>
    );
}
