/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { RiArrowRightSLine } from "react-icons/ri"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
		site {
			siteMetadata {
				resumePath: resume
			}
  	}
  }
`
const AboutPage = ({ data }) => {
	const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const { resumePath } = site.siteMetadata
	return (
		<Layout className="page">
			<SEO
				title={frontmatter.title}
				description={excerpt}
			/>
			<div className="wrapper">
				<h1>{frontmatter.title}</h1>
				<article dangerouslySetInnerHTML={{ __html: html }} />
				<a href={resumePath} 
					download 
					className="button"
					sx={{
						variant: 'links.button'
					}}>
						Resume Download
						<span class="icon -right"><RiArrowRightSLine/></span>
					</a>
			</div>
		</Layout>
	)
}

export default AboutPage