import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import nock from 'nock'
import api from '../services/api'

jest.mock('../services/api')

import Show from './Show'

describe('[Component] Show', () => {
  it('should render a list when data fetching is correct', async () => {
    api.get.mockResolvedValue({
      data: [
        {
          uid: "valid_uid",
          countryRegion: "",
          provinceState: "",
          confirmed: "",
          active: "",
          deaths: "",
          recovered: "",
        },
      ],
    });

    const props = {
      match: {
        params: {
          id: 'br'
        }
      }
    }

    render(<Show {...props} />)

    await waitFor(() => {
      expect(screen.getByText("Country")).toBeDefined();
      expect(screen.getByTestId("Country")).toBeDefined();
    });
  })
})