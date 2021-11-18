import { Experience } from 'types/experience';

export const API_BASE_URL = 'http://localhost:3003';

export const getExperience = async (): Promise<Experience[]> => {
  const response = await fetch(`${API_BASE_URL}/experience`, {
    method: 'GET',
  });

  return response.json();
};

export const postSubmitForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const response = await fetch(`${API_BASE_URL}/experience`, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return response.json();
};
