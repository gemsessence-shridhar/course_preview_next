import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import LaunchIcon from '@material-ui/icons/Launch';
import styles from './style.module.scss';

const Feedback = ({
  feedback,
  isCorrectAnswerSelectedOrShowFeedbackOnCorrectAnswer,
  lessons,
  showOnlyIncorrectFeedback,
  isMultiSelect,
}) => {
  const getFeedbackLabel = () => {
    if (showOnlyIncorrectFeedback && !isCorrectAnswerSelectedOrShowFeedbackOnCorrectAnswer) {
      return (<FormattedMessage id="answers.feedback.label.incorrect" />);
    }
    return isCorrectAnswerSelectedOrShowFeedbackOnCorrectAnswer
      ? (<FormattedMessage id="answers.feedback.label.correct" />)
      : (<FormattedMessage id="answers.feedback.label.incorrect" />);
  };

  const getFeedbackLabelClass = () => (
    isCorrectAnswerSelectedOrShowFeedbackOnCorrectAnswer
      ? 'correct-feedback-label'
      : 'incorrect-feedback-label'
  );

  const unlockedLesson = () => (
    <p className={styles['lesson-unlocked-text']}>
      Lesson not unlocked
    </p>
  );

  const lockedLesson = () => (
    <p className={styles['lesson-question-text']}>
      See the lesson this question comes from
      <LaunchIcon className="ml-1" />
    </p>
  );

  const renderLessonText = (lesson) => {
    if (lesson.status === 'open') {
      return (unlockedLesson());
    }
    return (lockedLesson());
  };

  return (
    <div className={classNames(styles['feedback-container'], 'mb-3')}>
      <span className={classNames(styles[getFeedbackLabelClass()])}>
        {' '}
        { getFeedbackLabel() }
        {' '}
      </span>
      {
        !isMultiSelect
          ? (
            <span
              className={styles['feedback-text']}
              dangerouslySetInnerHTML={{ __html: feedback }}
            />
          )
          : null
      }

      {
        lessons.map((lesson) => (
          renderLessonText(lesson)
        ))
      }
    </div>
  );
};

Feedback.defaultProps = {
  lessons: [],
  showOnlyIncorrectFeedback: false,
};

Feedback.propTypes = {
  feedback: PropTypes.string.isRequired,
  isCorrectAnswerSelectedOrShowFeedbackOnCorrectAnswer: PropTypes.bool.isRequired,
  showOnlyIncorrectFeedback: PropTypes.bool,
  lessons: PropTypes.array,
  isMultiSelect: PropTypes.bool.isRequired,
};
export default Feedback;
