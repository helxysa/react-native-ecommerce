import React from "react";



import { createMaterialTopNavigator } from '@react-navigation/material-top-tabs'

const {Navigator, Screen } = createMaterialTopNavigator();

export function AppRoutes(){
    return(
        <Navigator>
                <Screen name="Products" components={Products}/>
                <Screen name="Sellers" components={Sellers}/>
                <Screen name="Products" components={Products}/> 
        </Navigator>

    )
}