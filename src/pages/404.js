import React from 'react'
import Layout from "../components/Common/Layout"
import PageStarter from "../components/Common/PageStarter"
const NotFound = () => {
    return (
        <Layout>
            <div>
                <PageStarter pageName={"Page not found"} subText="The page you're looking is is either removed or doesn't exist"/>
            </div>
        </Layout>
    )
}

export default NotFound
