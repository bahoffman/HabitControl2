import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" description="Resources Page" />

    <h3>American Cancer Society</h3>
    <p>
      1599 Clifton Road NE Atlanta, GA 30329
      <br />
      Phone: 1-800-227-2345
      <br />
      Web Address:{" "}
      <a target="_blank" rel="noopener noreferrer" href="http://www.cancer.org">
        {" "}
        http://www.cancer.org{" "}
      </a>
      <br />
    </p>

    <h3> American Heart Association National Center </h3>
    <p>
      7272 Greenville Avenue <br />
      Dallas, TX 75231-4596 <br />
      Phone: 1-800-242-8721 <br />
      Web Address:
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.americanheart.org"
      >
        http://www.americanheart.org
      </a>
      <br />
    </p>

    <h3>American Lung Association National Office American Lung Association</h3>
    <p>
      1740 Broadway <br />
      New York, NY 10019-4374 <br />
      Phone: 1-800-586-4872 <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.lungusa.org"
      >
        {" "}
        http://www.lungusa.org
      </a>
      <br />
    </p>

    <h3>The Lung Association(CA)</h3>
    <p>
      573 King Street East, Suite 201 <br />
      Toronto, Ontario Canada, M5A 4L3 <br />
      Phone: 1-800-972-2636 <br />
      Web Address:
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://lungontario.ca"
      >
        https://lungontario.ca
      </a>
      <br />
    </p>

    <h3>QuitNet </h3>
    <p>
      1 Appleton Street, 4th Floor <br />
      Boston, MA 02116 <br />
      Phone: 1-617-437-1500 <br />
      Web Address:
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.quitnet.com"
      >
        {" "}
        http://www.quitnet.com
      </a>
      <br />
    </p>

    <h3>CDC</h3>
    <p>
      Web Address:
      <a target="_blank" rel="noopener noreferrer" href="http://www.cdc.gov">
        {" "}
        http://www.cdc.gov
      </a>
      <br />
    </p>

    <h3> Stop Smoking Support</h3>
    <p>
      Web Address:
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.stopsmokingsupport.com"
      >
        http://www.stopsmokingsupport.com
      </a>
      <br />
    </p>
  </Layout>
)

export default ResourcesPage
