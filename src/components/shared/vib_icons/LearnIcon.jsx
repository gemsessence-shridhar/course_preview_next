import React from 'react';
import PropTypes from 'prop-types';

const LearnIcon = ({ fillColor }) => (
  <svg data-testid="learn-icon" width="21px" height="26px" viewBox="0 0 21 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>2D07953D-1E13-4F3E-BBC6-7CD7D7D21FD2</title>
    <g id="[x]-(1)-Header,-Avatar-Dropdown-(2)-Footer" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Header" transform="translate(-38.000000, -237.000000)" fill={fillColor} fillRule="nonzero">
        <g id="Group" transform="translate(0.000000, 40.000000)">
          <path d="M59,213.355348 C59,212.158632 58.1597558,211.157387 57.0465116,210.927124 L57.0465116,208.250497 C57.0465116,208.006653 56.9287163,207.778372 56.7312186,207.639451 C56.5337209,207.50053 56.2816233,207.468711 56.0567279,207.554403 L54.6585674,208.086497 C53.7404279,207.117815 52.6244,206.388217 51.4014186,205.940329 C52.6032047,205.036621 53.3837209,203.58724 53.3837209,201.956166 C53.3837209,199.223287 51.1929326,197 48.5,197 C45.8070674,197 43.6162791,199.223287 43.6162791,201.956166 C43.6162791,203.58724 44.3967953,205.036621 45.5985814,205.940329 C44.3755512,206.388267 43.2595721,207.117864 42.3414326,208.086497 L40.9432721,207.554403 C40.7183279,207.468711 40.4662302,207.50053 40.2687814,207.639451 C40.0712837,207.778372 39.9534884,208.006653 39.9534884,208.250497 L39.9534884,210.927124 C38.8402442,211.157387 38,212.158582 38,213.355348 C38,214.552113 38.8402442,215.553308 39.9534884,215.783572 L39.9534884,218.658445 C39.9534884,218.968355 40.1429279,219.245751 40.4288209,219.354539 L48.2427744,222.328239 C48.4075512,222.390587 48.5924,222.390587 48.7571767,222.328239 L56.5711302,219.354539 C56.8570233,219.245751 57.0464628,218.968355 57.0464628,218.658445 L57.0464628,215.783572 C58.1597558,215.553308 59,214.552064 59,213.355348 Z M45.0813953,201.956166 C45.0813953,200.043185 46.6149814,198.48685 48.5,198.48685 C50.3850186,198.48685 51.9186047,200.043185 51.9186047,201.956166 C51.9186047,203.869147 50.3850186,205.425482 48.5,205.425482 C46.6149814,205.425482 45.0813953,203.869147 45.0813953,201.956166 Z M48.5,206.912332 C50.216286,206.912332 51.8555558,207.541815 53.1346023,208.666468 L48.5,210.430219 L43.8653977,208.666468 C45.144493,207.541815 46.7837628,206.912332 48.5,206.912332 L48.5,206.912332 Z M39.4651163,213.355348 C39.4651163,212.808782 39.9032837,212.364115 40.4418605,212.364115 L40.9302326,212.364115 L40.9302326,214.346581 L40.4418605,214.346581 C39.9032837,214.346581 39.4651163,213.901914 39.4651163,213.355348 Z M41.4186047,215.808501 C41.9752023,215.69337 42.3953488,215.192747 42.3953488,214.594389 L42.3953488,212.116306 C42.3953488,211.517948 41.9752023,211.017326 41.4186047,210.902194 L41.4186047,209.323259 L47.7674419,211.73939 L47.7674419,220.559432 L41.4186047,218.143302 L41.4186047,215.808501 Z M49.2325581,220.559383 L49.2325581,211.73939 L55.5813953,209.323259 L55.5813953,210.902194 C55.0247977,211.017326 54.6046512,211.517948 54.6046512,212.116306 L54.6046512,214.594389 C54.6046512,215.192747 55.0247977,215.69337 55.5813953,215.808501 L55.5813953,218.143252 L49.2325581,220.559383 Z M56.5581395,214.346581 L56.0697674,214.346581 L56.0697674,212.364115 L56.5581395,212.364115 C57.0967163,212.364115 57.5348837,212.808782 57.5348837,213.355348 C57.5348837,213.901914 57.0967651,214.346581 56.5581395,214.346581 Z" id="Shape" />
        </g>
      </g>
    </g>
  </svg>
);

LearnIcon.defaultProps = {
  fillColor: '#fff',
};

LearnIcon.propTypes = {
  fillColor: PropTypes.string,
};

export default LearnIcon;
