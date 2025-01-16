import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

import styles from '../../../../../../../../src/components/CoursePreviews/SeniorLeaderMessagePreview/senior-leader-message-page.module.scss';
import SeniorLeaderMessageComponent from '../../../../../../../../src/components/CoursePreviews/SeniorLeaderMessagePreview/SeniorLeaderMessageComponent';

import getSeniorLeaderMessageData from '../../../../../../../../src/components/CoursePreviews/SeniorLeaderMessagePreview/SeniorLeaderMessageQuery';
import createApolloClient from '../../../../../../../../apollo_client';

const fetchSeniorLeaderMessageData = async (courseType, courseCmsId, locale, slmCmsId) => {
  const client = createApolloClient();
  const {
    seniorLeaderMessageData,
    seniorLeaderMessageGoalsData,
  } = await getSeniorLeaderMessageData(
    client,
    courseType,
    courseCmsId,
    slmCmsId,
    locale
  );

  return { seniorLeaderMessageData, seniorLeaderMessageGoalsData };
};

export default async function SeniorLeaderMessagePage({ params }) {
  const { courseType, courseCmsId, locale, slmCmsId } = params;


  const { seniorLeaderMessageData, seniorLeaderMessageGoalsData } = await fetchSeniorLeaderMessageData(
    courseType,
    courseCmsId,
    locale,
    slmCmsId
  );

  return (
    <Container fluid className={classNames(styles['senior-leader-message-container'], 'p-0')}>
      <Row className="mx-0 min-height-75vh">
        <Col sm={12} className="p-0 content-container">
          <SeniorLeaderMessageComponent
            seniorLeaderMessageData={seniorLeaderMessageData}
            seniorLeaderMessageGoalsData={seniorLeaderMessageGoalsData}
            seniorLeaderMessageCmsId={slmCmsId}
            courseId={courseCmsId}
            locale={locale}
            courseType={courseType}
          />
        </Col>
      </Row>
    </Container>
  );
}
