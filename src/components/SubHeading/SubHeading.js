import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import HtmlElement from '../HtmlElement/HtmlElement';
import { childrenPropType } from '../../util/shared-prop-types';
import { sizes } from '../../styles/constants';

const { KILO, MEGA } = sizes;

const baseStyles = ({ theme }) => css`
  label: sub-heading;
  text-transform: uppercase;
  font-weight: ${theme.fontWeight.bold};
`;

const sizeStyles = ({ theme, size }) => css`
  label: sub-heading--${size};
  font-size: ${theme.typography.subHeadings[size].fontSize};
  line-height: ${theme.typography.subHeadings[size].lineHeight};
`;

const marginStyles = ({ theme, margin }) =>
  margin &&
  css`
    label: sub-heading--margin;
    margin-bottom: ${theme.spacings.kilo};
  `;

const SubHeadingElement = styled(HtmlElement)(
  baseStyles,
  sizeStyles,
  marginStyles
);

/**
 * A flexible component for subheadings. Capable of rendering using
 * different any of the heading HTML tags.
 */

const SubHeading = props => (
  <SubHeadingElement {...props} blacklist={{ margin: true }} />
);

SubHeading.KILO = KILO;
SubHeading.MEGA = MEGA;

SubHeading.propTypes = {
  /**
   * Child nodes to be rendered.
   */
  children: childrenPropType,
  /**
   * A Circuit UI sub-heading size.
   */
  size: PropTypes.oneOf([SubHeading.KILO, SubHeading.MEGA]),
  /**
   * Optional additional className string to overwrite styles.
   */
  className: PropTypes.string,
  /**
   * Adds bottom margin to the sub-heading.
   */
  margin: PropTypes.bool,
  /**
   * The HTML heading element to render.
   */
  element: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6'])
};

SubHeading.defaultProps = {
  element: 'h3',
  size: SubHeading.KILO,
  className: '',
  margin: true,
  children: null
};

/**
 * @component
 */
export default SubHeading;