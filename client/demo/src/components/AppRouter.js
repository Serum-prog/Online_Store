// import React, {useContext} from 'react';
// import {Routes, Route, Navigate} from 'react-router-dom'
// import {authRoutes, publicRoutes} from "../routes";
// import {SHOP_ROUTE} from "../utils/consts";
// import {Context} from "../index";
//
// const AppRouter  = () => {
//     const {user} = useContext(Context)
//
//     console.log(user)
//     return (
//         <Routes>
//             {user.isAuth && authRoutes.map(({path, Component}) =>
//                 <Route key={path} path={path} element={<Component/>} exact/>
//             )}
//             {publicRoutes.map(({path, Component}) =>
//                 <Route key={path} path={path} element={<Component/>} exact/>
//             )}
//             <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
//         </Routes>
//
//     );
// };

// export default AppRouter;

import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from "..";
import { authRoutes} from "../routes";
import {publicRoutes} from "../routes";


const AppRouter = observer ( () => {
    const {user} = useContext(Context)
    //user.setIsAuth(true)
    console.log(user.isAuth)
    return(
        <Routes>
            {user.isAuth && authRoutes.map(item =>
                <Route key={item.path} path={item.path} element={item.Component}/>
            )}
            { publicRoutes.map(item =>
                <Route key={item.path} path={item.path} element={item.Component}/>
            )}

        </Routes>
    )
})

export default AppRouter