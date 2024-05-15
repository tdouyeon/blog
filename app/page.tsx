import type { ReactElement } from 'react'
import NestedLayout from '../components/nested-layout'
import type { NextPageWithLayout } from './_app'
import Layout from './layout'
 
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  console.log("in getLayout")
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
 
export default Page
