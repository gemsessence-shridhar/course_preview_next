import { seniorLeaderMessagePreview } from '../../../graphql_states/contentstack';

const getCourseQuery = (courseType) => {
  let query = null;
  switch (courseType) {
    case 'Level2Course':
      query = seniorLeaderMessagePreview.queries.GET_LEVEL_TWO_COURSE_GOALS;
      break;
    case 'Level3Course':
      query = seniorLeaderMessagePreview.queries.GET_LEVEL_THREE_COURSE_GOALS;
      break;
    default:
  }
  return query;
};

const getSeniorLeaderMessageData = async (client, courseType, courseId, seniorLeaderMessageCmsId, locale) => {
  const [seniorLeaderMessageContent, seniorLeaderMessageGoalsContent] = await Promise.all([
    client.query({
      query: seniorLeaderMessagePreview.queries.GET_SENIOR_LEADER_MESSAGE_CONTENT,
      variables: { seniorLeaderMessageCmsId, locale },
      fetchPolicy: 'network-only',
    }),
    client.query({
      query: getCourseQuery(courseType),
      variables: { courseId, locale },
      fetchPolicy: 'network-only',
    }),
  ]);
  
  return {
    seniorLeaderMessageData: seniorLeaderMessageContent?.data,
    seniorLeaderMessageGoalsData: seniorLeaderMessageGoalsContent?.data,
    error: seniorLeaderMessageContent?.error || seniorLeaderMessageGoalsContent?.error,
  };
};


export default getSeniorLeaderMessageData;
