import axios from 'axios';
import queryString from 'query-string';
import { SecurityAnalysisInterface, SecurityAnalysisGetQueryInterface } from 'interfaces/security-analysis';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSecurityAnalyses = async (
  query?: SecurityAnalysisGetQueryInterface,
): Promise<PaginatedInterface<SecurityAnalysisInterface>> => {
  const response = await axios.get('/api/security-analyses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSecurityAnalysis = async (securityAnalysis: SecurityAnalysisInterface) => {
  const response = await axios.post('/api/security-analyses', securityAnalysis);
  return response.data;
};

export const updateSecurityAnalysisById = async (id: string, securityAnalysis: SecurityAnalysisInterface) => {
  const response = await axios.put(`/api/security-analyses/${id}`, securityAnalysis);
  return response.data;
};

export const getSecurityAnalysisById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/security-analyses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSecurityAnalysisById = async (id: string) => {
  const response = await axios.delete(`/api/security-analyses/${id}`);
  return response.data;
};
