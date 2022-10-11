import { render } from '@testing-library/react';

import Kater from './kater';

describe('Kater', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Kater />);
    expect(baseElement).toBeTruthy();
  });
});
