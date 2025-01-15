import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

import styles from '../../src/components/CoursePreviews/SeniorLeaderMessagePreview/senior-leader-message-page.module.scss';
import SeniorLeaderMessageComponent from '../../src/components/CoursePreviews/SeniorLeaderMessagePreview/SeniorLeaderMessageComponent';

import getSeniorLeaderMessageData from '../../src/components/CoursePreviews/SeniorLeaderMessagePreview/SeniorLeaderMessageQuery';
import createApolloClient from "../../apollo_client";

// Fetch data function (not exported)
const fetchSeniorLeaderMessageData = async () => {
  const client = createApolloClient();
  const {
    seniorLeaderMessageData,
    seniorLeaderMessageGoalsData,
  } = await getSeniorLeaderMessageData(
    client,
    "Level2Course",
    "blt266ae954b6656986",
    "blt3f36e622ed180703",
    "en-us"
  );

  return { seniorLeaderMessageData, seniorLeaderMessageGoalsData };
};

// Async component in the App Router
export default async function SeniorLeaderMessagePage() {
  // Fetch the data here
  const { seniorLeaderMessageData, seniorLeaderMessageGoalsData } = await fetchSeniorLeaderMessageData();

  return (
    <Container fluid className={classNames(styles['senior-leader-message-container'], 'p-0')}>
      <Row className="mx-0 min-height-75vh">
        <Col sm={12} className="p-0 content-container">
          <SeniorLeaderMessageComponent
            seniorLeaderMessageData={seniorLeaderMessageData}
            seniorLeaderMessageGoalsData={seniorLeaderMessageGoalsData}
            seniorLeaderMessageCmsId={"blt3f36e622ed180703"}
            courseId={"blt266ae954b6656986"}
            locale={"en-us"}
            courseType={"Level2Course"}
          />
        </Col>
      </Row>
    </Container>
  );
}
