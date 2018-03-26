import Main from 'CMP/Main'
import Test from 'CMP/Test'
import Error from 'CMP/Error'
import Index from 'CMP/Index'


module.exports = [
    {
        path: '/',
        component: Main,
        indexRoute: {component:Index},
        childRoutes:[
            {
                path: 'test',
                component: Test,
            }
        ]
    },
    {
        path: 'test',
        component: Test,
    },
    {
        path: '*',
        component:Error
    }
]