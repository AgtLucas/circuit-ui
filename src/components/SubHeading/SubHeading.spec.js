import React from 'react';

import SubHeading from '.';

describe('SubHeading', () => {
  /**
   * Style tests.
   */
  const elements = ['h2', 'h3', 'h4', 'h5', 'h6'];
  elements.forEach(el => {
    it(`should render as ${el.toUpperCase()} element, when passed "${el}" for the element prop`, () => {
      const heading = create(
        <SubHeading element={el}>{`${el.toUpperCase()} heading`}</SubHeading>
      ).toJSON();
      expect(heading).toMatchSnapshot();
    });
  });

  const sizes = ['kilo', 'mega'];
  sizes.forEach(size => {
    it(`should render with size ${size}, when passed "${size}" for the size prop`, () => {
      const heading = create(
        <SubHeading {...{ size }}>{`${size} heading`}</SubHeading>
      ).toJSON();
      expect(heading).toMatchSnapshot();
    });
  });

  it('should render with no margin styles when passed the noMargin prop', () => {
    const actual = create(<SubHeading noMargin />);
    expect(actual).toMatchSnapshot();
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<SubHeading>Sub heading</SubHeading>);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
