import axios from 'axios';
import queryString from 'query-string';
import { LandscapeAnalysisInterface, LandscapeAnalysisGetQueryInterface } from 'interfaces/landscape-analysis';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLandscapeAnalyses = async (
  query?: LandscapeAnalysisGetQueryInterface,
): Promise<PaginatedInterface<LandscapeAnalysisInterface>> => {
  const response = await axios.get('/api/landscape-analyses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLandscapeAnalysis = async (landscapeAnalysis: LandscapeAnalysisInterface) => {
  const response = await axios.post('/api/landscape-analyses', landscapeAnalysis);
  return response.data;
};

export const updateLandscapeAnalysisById = async (id: string, landscapeAnalysis: LandscapeAnalysisInterface) => {
  const response = await axios.put(`/api/landscape-analyses/${id}`, landscapeAnalysis);
  return response.data;
};

export const getLandscapeAnalysisById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/landscape-analyses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLandscapeAnalysisById = async (id: string) => {
  const response = await axios.delete(`/api/landscape-analyses/${id}`);
  return response.data;
};
