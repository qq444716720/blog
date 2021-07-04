import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

import Layout from '../components/Layout'
import pdfFile from '../asset/resume.pdf'
import './about.less'

const About = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }


  return (
    <Layout>
      <Document
        className="about-page"
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {
          Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ),
          )
        }
      </Document>
    </Layout>
  )
}

export default About
